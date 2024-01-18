const root = document.querySelector("#app");
let PagesComponents;
const componentCache = {};

const $imports = (objImports) => {
  PagesComponents = objImports;
};

async function $useNavigate(Rota) {
 
    if(location.origin + Rota === location.href){
      Router();
    }else{
      window.history.pushState(null, null, Rota);
      Router();
    }


}

let urlRevalidateComponent;
const intervalMap = new Map();

const reloadComp = (element) => {
  if (element.tagName.includes("-")) {
    const verificarUse = () => {
      const use = element.hasAttribute("use:revalidate");
      const useValue = element.getAttribute("use:revalidate") || 1000;
      return [use, useValue];
    };

    const [use, useValue] = verificarUse();

    if (use) {
      const reload = async () => processElement(element);
      const intervalId = setInterval(reload, useValue);
      intervalMap.set(element.tagName.toLowerCase(), intervalId);
      urlRevalidateComponent = location.href;
    } else {
      const tagNameLowerCase = element.tagName.toLowerCase();
      const intervalId = intervalMap.get(tagNameLowerCase);

      if (intervalId) {
        clearInterval(intervalId);
        intervalMap.delete(tagNameLowerCase);
      } else {
        if ((urlRevalidateComponent === location.href) === false) {
          intervalMap.clear();
        }
      }
    }
  }
};
const pagesComponentsFetch = async (props) => {
  const { tag, Data } = props;
  const componentKey = tag.tagName.toLowerCase();

  const verificarFetch = () => {
    const [fetchValue, htmljs] = (tag.getAttribute("use:fetch") || "")
      .split("|")
      .map((str) => str.trim());
    return [fetchValue, htmljs];
  };
  const [fetchValue, htmljs] = verificarFetch();

  let Resultcomponent;
  let htmlFunction;
  let response;

  if (componentCache[componentKey]) {
    Resultcomponent = await componentCache[componentKey](Data);
  } else {
    const url = `${location.origin}/${fetchValue}/${componentKey}.${htmljs}`;
    response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch page content");
    }

    if (htmljs === "html") {
      document.querySelector(componentKey).innerHTML = await response.text();
    }

    if (htmljs === "js") {
      htmlFunction = await response.text();
      Resultcomponent = Function("return " + htmlFunction)();
      tag.innerHTML = Resultcomponent(Data);
      componentCache[componentKey] = Resultcomponent;
    }
  }
};

const processElement = async (elem) => {
  const elemName = elem.tagName.toLowerCase();
  const isFetch = elem.hasAttribute("use:fetch");
  const revalidate = elem.hasAttribute("use:revalidate");
  const slot = elem.querySelector("slot") || elem;

  slot.innerHTML = await (isFetch ? pagesComponentsFetch(elem) : PagesComponents[elemName](elem));

  await Promise.all(Array.from(elem.querySelectorAll("*")).map(async (element) => 
    element.tagName.includes("-") && processElement(element)
  ));

  revalidate && reloadComp(elem);
};


async function customTagsComponents() {  
  const tagElementsObserve = Array.from(document.querySelectorAll("*")).filter(
    (element) => {
      const hasHyphen = element.tagName.includes("-");
      const hasPriority = element.hasAttribute("priority");
      return hasHyphen && (hasPriority ? processElement(element) : true);
    }
  )

  const processed = new Set();
  const observer = new IntersectionObserver(async (entries, obs) => {
    const e = entries.find((e) => e.isIntersecting);
    if (e) {
      const { target } = e;
      processElement(target);
      obs.unobserve(target);
      const next = tagElementsObserve.find((tag) => !processed.has(tag));
      if (next) processed.add(next) && obs.observe(next);
    }
  });
  const first = tagElementsObserve.find((tag) => !processed.has(tag));
  if (first) processed.add(first) && observer.observe(first);
}


function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const Router = async () => {
  async function routerPages() {
    let currentPathUrl;
    const match = location.href.match(/#\/([^\/?]+)/);
    if (match) {
      currentPathUrl = match[1].split("/")[0];
    } else {
      currentPathUrl =
        location.pathname.split("/")[1] || Object.keys(PagesComponents)[0];
    }
    if (!currentPathUrl || currentPathUrl === "#") return;

    if (!currentPathUrl.includes("-")) {
      const currentPage = PagesComponents[currentPathUrl] || "erro";

      if (currentPage === "erro") {
        erroPage(PagesComponents);
      } else {
        root.innerHTML = await currentPage(root);
      }
      customTagsComponents();
    } else {
      erroPage(PagesComponents);
    }
  }
  function erroPage(Pages) {
    const nomesSemHifen = Object.keys(Pages).filter(
      (page) => !page.includes("-")
    );
    root.innerHTML = nomesSemHifen
      .map(
        (page, index) =>
          `<a class="erro_page" id="${index}" use:href="${
            location.hash ? `/#/${page}/` : `/${page}/`
          }">${page}</a>`
      )
      .join("");
  }
  function handleClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute("use:href"); 
    if(href){
      if(location.origin + href === location.href){
        routerPages();
      }else{
        window.history.pushState(null, null, href);
        routerPages();
      }
    }
    

 
    
   
    
      
    
  }
  
  window.addEventListener("popstate", routerPages);
  root.addEventListener("click", debounce(handleClick, 200));
  routerPages();
};

const $effect = async (elem) => {
  if (typeof elem === "string") {
    processElement(document.querySelector(elem));
  } else {
    processElement(elem);
  }
};

const $state = (() => {
  const instancesMap = new Map();
  return (initialValue) => {
    let stateInstance = instancesMap.get(initialValue);
    if (!stateInstance) {
      stateInstance = {
        value: initialValue,
        set(newValue) {
          stateInstance.value = newValue;
        },
      };
      instancesMap.set(initialValue, stateInstance);
    }
    return stateInstance;
  };
})();

export { debounce, $useNavigate, $imports, $effect, $state };
