import state_global from "../../prix.config"
export default {
  ...state_global,
  get(name) {
    if (!name) {
      // If no name is provided, return the first module
      const firstModuleKey = Object.keys(this.modules)[0];
      return this.modules[firstModuleKey];
    }
    return this.modules[name];
  },
  set(name, module) {
    this.modules[name] = module;
  },
  delete(name) {
    if (this.modules.hasOwnProperty(name)) {
      delete this.modules[name];
      return true; 
    }
    return false;
  }
};


