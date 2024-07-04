import config from "../prix.config";
import pages from "../src/pages";
const root = document.querySelector("#app") || document.body;
const cache = new Map();
let urlRevalidateComponent;
let globalStateComp
const globalState = {};
function $signal(initialValue) { 

  const state = globalState[globalStateComp.id] || { value: initialValue };
  globalState[globalStateComp.id] = state;
  return {
    get value() {       
      return state.value;
    },
    set value(updated) { 
      state.value = updated;             
      renderComponents(event.target);
    },
  };
}

const Emitter = {
  events: {},
  
  on(event, cb) {
    const nameEvent = event.tagName.toLowerCase();
    if (!this.events[nameEvent]) {
      this.events[nameEvent] = [];
    }
    this.events[nameEvent].push(cb);
  },

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(...args));
    }
  },
};

function $setSearchParam(paramsObject) {
  if (paramsObject) {
    const params = new URLSearchParams(window.location.search);
    const caminhoURL = location.href.split("?")[0];
    for (const key in paramsObject) {
      if (paramsObject.hasOwnProperty(key)) {
        params.set(key, paramsObject[key]);
      }
    }
    const novaQueryString = params.toString();
    history.pushState({}, "", `${caminhoURL}?${novaQueryString}`);
  }
}

function $useNavigate(route) {
  const newURL = `${location.origin}${route}`;
  if (newURL === location.href) {
    Router();
  } else {
    window.history.pushState(null, null, route);
    Router();
  }
}
const render = async (elem, key) => {
  if (typeof elem === "string") {
    renderComponents(root.querySelector(elem));
  } else {
    renderComponents(elem);
  }
};


function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

async function renderComponents(elem) {
  if (config.Style) style(elem)  
  const components = config.Router || {};
  const elementName = elem.tagName.toLowerCase();
  globalStateComp = elem
  const slot = elem.querySelector("slot") || elem;
  const searchParams = Object.fromEntries(new URLSearchParams(location.search).entries());
  const dataSet = elem.dataset;
          // Instantiate MyClass
  slot.innerHTML = await components[elementName]?.({
    $: elem,
    search: searchParams,
    id: elem.id || '',
    dataSet,
  });
  

  await Promise.all(
    Array.from(elem.querySelectorAll("*"))
      .filter(element => element.tagName.includes("-"))
      .map((element, index) => {
        const uniqueId = `#-${element.tagName.toLowerCase()}-${index}`;
        element.id = uniqueId;
        return renderComponents(element);
      })
  );
  

  elem.hasAttribute("use:revalidate") && reloadComp(elem);
}

let intervalId;
function reloadComp(element) {
  const useRevalidateValue = element.getAttribute("use:revalidate");
  if (useRevalidateValue) {
    clearInterval(intervalId); // Limpa qualquer intervalo anteriormente definido
    intervalId = setInterval(() => renderComponents(element));
  } else {
    clearInterval(intervalId); // Limpa qualquer intervalo definido
    intervalId = null; // Define intervalId como null, já que não há intervalo a ser executado
  }
}

function style(tag) {
  tag.querySelectorAll("*").forEach(element => {
    element.classList.forEach(cls => {
      const [key, value] = cls.split("=");
      if (cls.startsWith(key)) {
        element.style[key] = value;
      }
    });
  });
}

async function CustomTagIntersectionObserver() {
  const tagElementsObserve = Array.from(root.querySelectorAll("*")).filter((element, index) => {
    const key = `${element.tagName.toLowerCase()}${element.hasAttribute("priority") ? "-priority-" : "-"}${index}`;
    const hasHyphen = element.tagName.includes("-");
    if(hasHyphen)element.id = key
    const hasPriority = element.hasAttribute("priority");
    return hasHyphen && (hasPriority ? renderComponents(element) : true);
  });

  

  const processed = new Set();
  const observer = new IntersectionObserver(async (entries, obs) => {
    const e = entries.find(e => e.isIntersecting);
    if (e) {
      const { target } = e;
      const key = `${target.tagName.toLocaleLowerCase()}-${processed.size}`;
      if (!target.hasAttribute("priority")) {
        renderComponents(target);
      }
      obs.unobserve(target);
      const next = tagElementsObserve.find(tag => !processed.has(tag) && !tag.hasAttribute("priority"));
      if (next) {
        processed.add(next);
        obs.observe(next);
      }
    }
  });

  const first = tagElementsObserve.find(tag => !processed.has(tag) && !tag.hasAttribute("priority"));
  if (first) {
    processed.add(first);
    observer.observe(first);
  }
}

async function Router() {
  async function routerPages() {
   // let initialPath = (location.hash || location.pathname).split("/").filter(Boolean).slice(1, 2).join("/");
   ///let initialPath = (location.hash || location.pathname).split("/").pop()
  let pathSegments = (location.hash || location.pathname).split("/").filter(segment => segment); 
  let index = pathSegments.findIndex(segment => segment === "id" || segment === "slug");
  let initialPath = index !== -1 ? pathSegments[index - 1] : pathSegments.pop();
  const Pages = config.Router;

  if (!initialPath) {
      initialPath = config.Router["/"] || config.Router["/#/"] || Object.keys(Pages)[0];
  }
      
    if (!Pages[initialPath]) {
      errorPage(Pages);
    } else {
      root.innerHTML = await Pages[initialPath](root);
    }
    if (config.Style) style(root);


    CustomTagIntersectionObserver();
  }

  function errorPage(Pages) {
    const namesWithoutHyphen = Object.keys(Pages).filter(page => !page.includes("-"));
    root.innerHTML = namesWithoutHyphen.map((page, index) => `
      <a style="cursor: pointer" class="error_page" id="${index}" use:href="${location.hash ? `/#/${page}/` : `/${page}/`}">
        ${page}
      </a>
    `).join("");
  }

  function handleClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute("use:href") || e.target.getAttribute("data-href");
    if (href) {
      if (location.origin + href === location.href) {
        routerPages();
      } else {
        window.history.pushState(null, null, href);
        routerPages();
      }
    }
  }

  window.addEventListener("popstate", routerPages);
  root.addEventListener("click", debounce(handleClick, 200));
  routerPages();
}

async function Macros() {
  if (config.Macros) {
    Object.keys(config.Macros).forEach(key => {
      const func = config.Macros[key];
      func();
    });
  }
  Router();
}

async function $fetch(url, options = {}) {
  const { method = "GET", key, data, time } = options;
  const cacheKey = key || url;
  const cacheTime = time || 60000; // Tempo padrão de 60 segundos (1 minuto)

  // Verificando se a chave está no cache e se não está expirada
  if (method === "GET" && cache.has(cacheKey)) {
    const { timestamp, data: cachedData } = cache.get(cacheKey);
    const elapsedTime = (Date.now() - timestamp) / 1000; // Tempo decorrido em segundos
    if (elapsedTime < cacheTime) {
      return cachedData;
    } else {
      cache.delete(cacheKey); // Remove do cache se estiver expirado
    }
  }


  // Fazendo a requisição para a API
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    ...(data && { body: JSON.stringify(data)}),
  });

  const responseData = await response.json();

  // Se for um GET, armazena o resultado no cache com o timestamp
  if (method === "GET") {
    cache.set(cacheKey, { timestamp: Date.now(), data: responseData });
  }

  // Se for um POST, atualiza o cache com o novo valor
  if (method === "POST") {
    const { data: cachedData } = cache.get(cacheKey);
    const updatedData = { ...cachedData, ...responseData };
    cache.set(cacheKey, { timestamp: Date.now(), data: updatedData });
  }

  return responseData;
}

Macros();



export { Emitter, $setSearchParam, $useNavigate, $fetch, $signal, render};
