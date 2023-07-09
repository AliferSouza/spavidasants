const ROOT = document.querySelector("#app");
const STYLE = document.querySelector("style");
async function useGetModules(caminho) {
  let result;

  try {
    result = await import(`${caminho}`).then((module) => module.default);
  } catch (error) {
    // Trate o erro de importação aqui
    console.error("Erro ao importar o arquivo:", error);
    // Defina um valor padrão para result ou faça qualquer outra ação adequada
  }

  return result;
}

async function useApi(url, method, useType) {
  try {
    const res = await fetch(url, method);
    let data;

    if (useType === "text") {
      data = await res.text();
    } else if (useType === "json") {
      data = await res.json();
    }

    return data;
  } catch {
    return null;
  }
}

function useLocalStorage(operation, name, props) {
  if (operation === "getItem") {
    return JSON.parse(window.localStorage.getItem(name));
  } else if (operation === "setItem") {
    window.localStorage.setItem(name, JSON.stringify(props));
  } else if (operation === "setItems") {
    const items = JSON.parse(localStorage.getItem(name) || "[]");
    items.push(props);
    localStorage.setItem(name, JSON.stringify(items));
  }
}

async function useLocation() {
  async function getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        const error = new Error(
          "Geolocation is not supported by this browser."
        );
        reject(error);
      }
    });
  }

  try {
    const { latitude, longitude } = await getLocation();
    return [latitude, longitude];
  } catch (error) {
    console.log("Erro ao obter localização:", error.message);
    return [null, null];
  }
}

async function useNavigate(Rota, Pages) {
  history.pushState(null, null, Rota);
  Router(Pages);
}

async function useId(senha) {
  try {
    // Converte a senha para um ArrayBuffer
    const encoder = new TextEncoder();
    const senhaBytes = encoder.encode(senha);

    // Calcula o hash SHA-256 da senha
    const hashBuffer = await crypto.subtle.digest("SHA-256", senhaBytes);

    // Converte o hash para uma string hexadecimal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  } catch (error) {
    throw new Error("Erro ao criptografar a senha: " + error);
  }
}

function useSearch(props) {
  try {
    const location = window.location;
    const prop = location[props];
    return decodeURIComponent(prop) || location;
  } catch (error) {
    throw error;
  }
}

async function useCSVToJSON(url, ct) {
  const response = await fetch(url, {
    headers: {
      ct,
    },
  });
  const data = await response.text();

  const lines = data.split("\n");
  const keys = lines[0].split(";");

  return lines.slice(1).map((line) => {
    return line.split(";").reduce((acc, cur, i) => {
      const toAdd = {};
      toAdd[keys[i]] = cur;
      return { ...acc, ...toAdd };
    }, {});
  });
}

function useJSONToCSV(objArray, keys) {
  return [
    keys.join(","),
    ...objArray.map((row) => keys.map((k) => row[k] || "").join(",")),
  ].join("\n");
}

function useExeFucTemp(func, time) {
  setTimeout(function () {
    func();
  }, time || 1);
}

function useCSS(selector, styles) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    Object.keys(styles).forEach((property) => {
      element.style[property] = styles[property];
    });
  });
}

function $$(arg1, arg2) {
  if (typeof arg1 === "string") {
    if (arg2) {
      document.querySelector(arg1).innerHTML = arg2;
    }
    return document.querySelector(arg1);
  } else if (Array.isArray(arg1)) {
    arg1.forEach((element, index) => {
      const selector = Object.keys(element)[0];
      const attributes = Object.values(element)[0];

      const targetElements = document.querySelectorAll(selector);

      targetElements.forEach((targetElement) => {
        for (const [attribute, value] of Object.entries(attributes)) {
          if (attribute === "innerHTML") {
            targetElement.innerHTML = value;
          } else {
            targetElement.setAttribute(attribute, value);
          }
        }
      });

      return targetElements;
    });

    // Define e retorna a variável "elements" se necessário
    const elements = document.querySelectorAll(
      arg1.map((element) => Object.keys(element)[0]).join(", ")
    );
    return elements.length > 1 ? elements : elements[0];
  }
}

const $ = (selector) => {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) {
    return selector;
  }

  const obj = {
    addClass: (className) => {
      elements.forEach((element) => {
        element.classList.add(className);
      });
      return obj;
    },
    removeClass: (className) => {
      elements.forEach((element) => {
        element.classList.remove(className);
      });
      return obj;
    },
    text: (textContent) => {
      elements.forEach((element) => {
        element.textContent = textContent;
      });
      return obj;
    },
    css: (styleObject) => {
      elements.forEach((element) => {
        Object.assign(element.style, styleObject);
      });
      return obj;
    },
    on: (event, handler) => {
      elements.forEach((element) => {
        element.addEventListener(event, handler);
      });
      return obj;
    },
    appendImage: (imageUrl) => {
      elements.forEach((element) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        element.appendChild(img);
      });
      return obj;
    },
    hide: () => {
      elements.forEach((element) => {
        element.style.originalDisplay = element.style.display;
        element.style.display = "none";
      });
      return obj;
    },
    show: () => {
      elements.forEach((element) => {
        element.style.display = element.style.originalDisplay || "";
        delete element.style.originalDisplay;
      });
      return obj;
    },
    tag: () => {
      return elements[0];
    },
    tags: () => {
      return elements;
    },
  };

  return obj;
};

const Router = async (PagesComponentsData = {}, Config = {}) => {
  const root = document.querySelector("#app");
  const [Pages, Components, Data] = Object.values(PagesComponentsData);

  const cacheImg = new Map();

  const carregarImgLazy = async () => {
    const elements = document.querySelectorAll("[data-url-src]");
    elements.forEach(async (element) => {
      const url = element.dataset.urlSrc;

      // Check if the image URL is already cached
      if (cacheImg.has(url)) {
        element.src = cacheImg.get(url);
      } else {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const blob = await response.blob();
            const imageUrlObject = URL.createObjectURL(blob);

            // Cache the image URL
            cacheImg.set(url, imageUrlObject);

            element.src = imageUrlObject;
          } else {
            console.error("Error fetching the image");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    });
  };

  const locationUrlPage = () => {
    const dataUrl = location.hash.replace("#", "") || location.pathname;

    const currentPage =
      dataUrl === "/"
        ? Object.keys(Pages)[0]
        : dataUrl.split("#")[0].split("/").filter(Boolean).pop();
    return currentPage;
  };

  const renderizaVirtualDomEDom = async (HTMLSTATE) => {
    let stateFunctionsComponetLocal = [];
    const virtualDom = () => {
      if (HTMLSTATE.renderedHtml === undefined) {
        return document.querySelector("#app");
      }

      const virtualDomGeral = document.createElement("div");
      virtualDomGeral.insertAdjacentHTML("beforeend", HTMLSTATE.renderedHtml);
      return virtualDomGeral;
    };

    const selectCustomTags = (tagsComponent) => {
      const customTags = [...tagsComponent.querySelectorAll("*")].filter(
        (element) => element.tagName.toLowerCase().match(/^comp-/i)
      );

      return customTags;
    };

    const renderComponentInDom = async (componentElement, index) => { 
      let newTag;
    
      if (Config.VDOM) {
        newTag = document.createElement(`${componentElement.tagName.toLowerCase()}-${index}`);
        componentElement.replaceWith(newTag);
    
        // Copiar os atributos do elemento original para o novo elemento
        Array.from(componentElement.attributes).forEach((attr) => {
          if (!attr.name.startsWith("data-")) {
            newTag.setAttribute(attr.name, attr.value);
          }
        });
      }
    
      const attributes = Array.from(componentElement.attributes)
        .filter((attr) => attr.name.startsWith("data-"))
        .reduce((obj, attr) => {
          const attributeName = attr.name.replace("data-", "");
          obj[attributeName] = attr.value;
          return obj;
        }, {});
    
      const dataComponente = {
        reference: index,
        nameTag: componentElement.tagName.toLowerCase() || (newTag ? newTag.tagName.toLowerCase() : ''),
        key: "VDOM: false"  || newTag.tagName.toLowerCase() ,
        attributes,
        parameter: Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),
        page: location.hash.replace("#", "").match(/^\/(\w+)(\/)?/),
        content: componentElement.innerText,
        data: Data,
        tag: componentElement,
        tagVdom: newTag || "VDOM: false"
      };
    
      const { html, state } = await Components[dataComponente.nameTag](dataComponente);
    
      if (Config.VDOM) {
        if (typeof html === "function") {
          newTag.innerHTML += html();
        }
        if (typeof state === "function") {
          stateFunctionsComponetLocal.push(state);    
        }
      } else {
        if (typeof html === "function") {
          componentElement.innerHTML += html();
        }
        if (typeof state === "function") {
          state();
        }
      }
    };
    
    const renderComponentsInDom = async (tagSelectendVirtualDOM) => {
      const fetchPromises = tagSelectendVirtualDOM.map(renderComponentInDom);
      await Promise.all(fetchPromises);
      if (!Config.VDOM) {
       
      }
    };

    const renderPageCompFuncNoDom = async (virtualDomGeral) => {
      root.innerHTML = "";
      root.innerHTML = virtualDomGeral.innerHTML;

      stateFunctionsComponetLocal.forEach((func) => func());
      if (typeof HTMLSTATE.renderState === "function") {
        HTMLSTATE.renderState();
      }
      carregarImgLazy();
    };

    const renderizaComponents = async () => {
      const virtualDomGeral = virtualDom();
      const tagSelectendVirtualDOM = selectCustomTags(virtualDomGeral);
      await renderComponentsInDom(tagSelectendVirtualDOM);

      if (Config.VDOM) {
        renderPageCompFuncNoDom(virtualDomGeral);
      }else{
        if (typeof HTMLSTATE.renderState === "function") {
          HTMLSTATE.renderState();
        }
      }
    };

    // Executa a renderização
    await renderizaComponents();
  };

  const addStyleHead = (styles) => {
    document.querySelector("style").innerHTML = styles;
  };

  async function routerPages() {
    const currentUrlPage = locationUrlPage();
    const resultUrl =
      currentUrlPage && Pages[currentUrlPage] ? currentUrlPage : "erro";

    if (resultUrl === "erro") {
      // Lógica para tratamento de erro
    } else {
      const paginasData = { Pages, Components, Data, styles: addStyleHead };

      const { html, state } = await Pages[resultUrl](paginasData);

      const renderedHtml =
        typeof html === "function" ? html() : await Pages[resultUrl]();
      const renderState = typeof state === "function" ? state : undefined;
      console;
      if (Config.VDOM === true) {
        renderizaVirtualDomEDom({ renderedHtml, renderState });
      } else {
        root.innerHTML = html();
        renderizaVirtualDomEDom({ renderState });
      }
    }
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

  function erroPage(Pages) {
    root.innerHTML = `
    <div class="erroPages">
      ${Object.keys(Pages)
        .map(
          (page, index) =>
            `<a class="pagina-erro" id="${index}"  data-href="/#/${page}/">${page.toUpperCase()}</a>`
        )
        .join("")}
    </div>
  `;
  }

  function handleClick(e) {
    if (e.target.matches("[data-href]")) {
      e.preventDefault();
      const href = e.target.dataset.href;
      history.pushState(null, null, href);
      routerPages();
    }
  }

  window.addEventListener("popstate", routerPages);
  document.body.addEventListener("click", debounce(handleClick, 200));
  routerPages();
};
export {
  useLocalStorage,
  useApi,
  useGetModules,
  useSearch,
  useExeFucTemp,
  useId,
  useLocation,
  useCSVToJSON,
  useJSONToCSV,
  useNavigate,
  useCSS,
  $,
  Router,
  $$,
};
