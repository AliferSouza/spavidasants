let root = document.querySelector("#app") || document.body;
import renderComponents from "../DOM/renderComponents.js";
import { debounce } from "../ULTILS/index.js";
import STATE_GLOBAL from "../STATE_GLOBAL/index.js";

async function customTagsComponents() {
  const tagElementsObserve = Array.from(root.querySelectorAll("*")).filter(
    (element, index) => {
      const key = `${element.tagName.toLowerCase()}${
        element.hasAttribute("priority") ? "-priority-" : ""
      }${index}`;
      const hasHyphen = element.tagName.includes("-");
      const hasPriority = element.hasAttribute("priority");
      return hasHyphen && (hasPriority ? renderComponents(element, key) : true);
    }
  );



  const processed = new Set();
  const observer = new IntersectionObserver(async (entries, obs) => {
    const e = entries.find((e) => e.isIntersecting);
    if (e) {
      const { target } = e;
      const key = `${target.tagName.toLocaleLowerCase()}-${processed.size}`;
      if (!target.hasAttribute("priority")) {
        renderComponents(target, key);
      }
      obs.unobserve(target);
      const next = tagElementsObserve.find(
        (tag) => !processed.has(tag) && !tag.hasAttribute("priority")
      );
      if (next) {
        processed.add(next);
        obs.observe(next);
      }
    }
  });
  const first = tagElementsObserve.find(
    (tag) => !processed.has(tag) && !tag.hasAttribute("priority")
  );

  if (first) {
    processed.add(first);
    observer.observe(first);
  }
}

export default async function Router() {
  async function routerPages() {
    let currentPathUrl;
    const layout = STATE_GLOBAL.get("+layout");
    const match = location.href.match(/#\/([^\/?]+)/);

    if (layout) {
      root.innerHTML = await STATE_GLOBAL.get("+layout")();
      root = root.querySelector("slot");
      STATE_GLOBAL.delete("+layout");
    }

    currentPathUrl = match
      ? match[1].split("/")[0]
      : location.pathname.split("/")[1] || STATE_GLOBAL.get();

    if (!currentPathUrl || currentPathUrl === "#") return;

    if (!currentPathUrl.includes("-")) {
      const currentPage = (await STATE_GLOBAL.get(currentPathUrl)) || "erro";
      if (currentPage === "erro") {
        delete STATE_GLOBAL.modules.Initial;
        erroPage(STATE_GLOBAL.modules);
      }

      root.innerHTML = await currentPage(root);
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
          `<a style="cursor: pointer" class="erro_page" id="${index}" use:href="${
            location.hash ? `/#/${page}/` : `/${page}/`
          }">${page}</a>`
      )
      .join("");
  }

  function handleClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute("use:href");
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
