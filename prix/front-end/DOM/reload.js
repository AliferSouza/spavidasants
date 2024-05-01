import renderComponents from "./renderComponents";
let urlRevalidateComponent;
/**
 * @function reloadComp
 * @description Manages the revalidation of components based on element presence, attributes, and URL changes.
 *
 * @param {HTMLElement} element The HTML element to be revalidated.
 *
 * @returns {void}
 *
 * @example
 * // Assuming a button element with the `use:revalidate` attribute:
 * <comp-counter use:revalidate="1000"></comp-counter>  
 * const useRevalidateValue = element.getAttribute("use:revalidate");
 * renderComponents(buttonElement); // Initiate revalidation with the specified interval
  * // Later, to stop revalidation:
 * renderComponents(null);
 */
const intervalMap = new Map();
export default function reloadComp(element) { 
      const useRevalidateValue = element.getAttribute("use:revalidate") || 10000;  
      if (element) {
        const reload = async () => renderComponents(element);
        const intervalId = setInterval(reload, useRevalidateValue);
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
  
  