import { emit } from "../EMITTER/index";
import reloadComp from "./reload.js";
import STATE_GLOBAL from "../STATE_GLOBAL/index.js";


export default async function renderComponents(elem, processed) {
  const elemName = elem.tagName.toLowerCase();
  const revalidate = elem.hasAttribute("use:revalidate");
  const slot = elem.querySelector("slot") || elem;

 const prixUtility = {
    search: Object.fromEntries(
      new URLSearchParams(location.href.split("?")[1]).entries()
    ),
    Data: STATE_GLOBAL.Data || {},
    id: processed,
  };

  const component = await STATE_GLOBAL.get(elemName)(elem, prixUtility);   
  slot.innerHTML = component;
    
  

  await Promise.all(
    Array.from(elem.querySelectorAll("*")).map(
      async (element, index) =>
        element.tagName.includes("-") && processElement(element, index)
    )
  );

  revalidate && reloadComp(elem);
  emit(elemName);
}
