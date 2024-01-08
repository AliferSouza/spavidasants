const root = document.querySelector("#app");
let PagesComponents;

const componentCache = {};
const functionEvent = {};

const $imports = (objImports) => {
  PagesComponents = objImports;
};

function on(event, cb) {
  const nameFunction = event.name || event;
  if (nameFunction.includes("comp")) {
    const kebabCaseName = nameFunction
      .replace(/([a-zA-Z])(?=[A-Z])/g, "$1-")
      .toLowerCase();

    if (!PagesComponents.hasOwnProperty(kebabCaseName)) {
      PagesComponents[kebabCaseName] = cb || event;
    }
  }
  if (typeof event === "function") {
    const nameFunction = event.name;
    if (!functionEvent[nameFunction]) {
      functionEvent[nameFunction] = [event];
    } else if (!functionEvent[nameFunction].includes(event)) {
      functionEvent[nameFunction].push(event);
    }
  } else {
    if (!functionEvent[event]) {
      functionEvent[event] = [cb];
    } else if (!functionEvent[event].includes(cb)) {
      functionEvent[event].push(cb);
    }
  }
}

function emit(event, ...args) {
  if (functionEvent[event]) {
    const values = functionEvent[event]
      .map((cb) => cb(...args))
      .filter((result) => result !== undefined);
    return values.length > 0 ? values : "";
  }
  return "";
}

async function useNavigate(Rota) {
  window.history.pushState(null, null, Rota);
  Router();
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
  const slot = elem.querySelector("slot");
  const componentResult = await (isFetch
    ? pagesComponentsFetch({ tag: elem })
    : PagesComponents[elemName]({ tag: elem }));
  if (slot) {
    slot.innerHTML += componentResult;
  } else {
    elem.innerHTML = componentResult;
  }
  await Promise.all(
    Array.from(elem.querySelectorAll("*")).map(async (element) => {
      if (
        element.tagName.includes("-") &&
        element.tagName.toLowerCase() !== elemName
      ) {
        await processElement(element);
        if (revalidate) {
          reloadComp(element);
        }
      }
    })
  );
  if (revalidate) {
    reloadComp(elem);
  }
  emit(elemName);
};

async function customTags() {
  const tagElementsObserve = Array.from(document.querySelectorAll("*")).filter(
    (element) => {
      const hasHyphen = element.tagName.includes("-");
      const hasPriority = element.hasAttribute("priority");

      if (hasHyphen) {
        if (hasPriority) {
          processElement(element);
        } else {
          return element;
        }
      }
    }
  );

  const processed = new Set();
  const observerTagsDom = (() => {
    const observer = new IntersectionObserver(async (entries, obs) => {
      const e = entries.find((e) => e.isIntersecting);
      if (e) {
        const { target } = e;
        processElement(target);
        reloadComp(target);
        obs.unobserve(target);
        const next = tagElementsObserve.find((tag) => !processed.has(tag));
        if (next) processed.add(next) && obs.observe(next);
      }
    });

    const first = tagElementsObserve.find((tag) => !processed.has(tag));
    if (first) processed.add(first) && observer.observe(first);
  })();
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
    const currentComponent = PagesComponents[currentPathUrl] || "erro";

    root.innerHTML =
      currentComponent === "erro"
        ? erroPage(PagesComponents)
        : await PagesComponents[currentPathUrl]({
            currentPage: currentPathUrl,
            tagPage: root,
          });

    emit(currentPathUrl);
    customTags();
  }

  function erroPage(Pages) {
    root.innerHTML = `
      <div class="erroPages">
        ${Object.keys(Pages)
          .map(
            (page, index) =>
              `<a class="Erro" id="${index}" use:href="/#/${page}">${page.toUpperCase()}</a>`
          )
          .join("")}
      </div>
    `;
  }

  function handleClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute("use:href");
    if (href) {
      window.history.pushState(null, null, href);
      routerPages();
    }
  }

  window.addEventListener("popstate", routerPages);
  document.body.addEventListener("click", debounce(handleClick, 200));
  routerPages();
};

const $effect = async (elem) => {
  if (typeof elem === "string") {
    processElement(document.querySelector(elem));
  } else {
    processElement(elem);
  }
};

const $render = (elem, render) => {
  if (typeof elem === "string") {
    document.querySelector(elem).innerHTML = render();
  } else
    document.querySelector(elem.tagName.toLowerCase()).innerHTML = render();
};

const $on = (seletor) => {
  on(seletor);
};

const $state = (initialValue) => {
  let state = initialValue;

  const getState = () => state;

  const setState = (newValue) => {
    if(!newValue === undefined){
      return state = newValue;
    }
    console.log(state)
 return state
  };

  return {
    value: getState,
    set: setState,
  };
};

export {
  debounce,
  useNavigate,
  Router,
  on,
  emit,
  processElement,
  $imports,
  $on,
  $effect,
  $render,
  $state,
};
