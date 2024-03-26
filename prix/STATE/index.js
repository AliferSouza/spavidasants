import renderComponents from "../DOM/renderComponents.js";

const $effect = async (elem, key) => {
  if (typeof elem === "string") {
    renderComponents(root.querySelector(elem), key);
  } else {
    renderComponents(elem, key);
  }
};

const $state = (() => {
  const instancesMap = new Map();
  return (id, initialValue) => {
    let stateInstance = instancesMap.get(id);
    if (!stateInstance) {
      stateInstance = {
        value: initialValue,
        set(elem, newValue) {
          stateInstance.value = newValue;
          if(elem ) renderComponents(elem, id);
        },
      };
      instancesMap.set(id, stateInstance);
    }
    return stateInstance;
  };
})();

export { $effect, $state };
