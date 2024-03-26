import Pages from "./src/pages/index.js";
import Components from "./src/components/index.js";
import getPlanilha from "./src/context/getPlanilha.js"

export default {
  modules: {
    Initial: "home",
    ...Pages,
    ...Components
  },
  macros: {
    getPlanilha  
  }
};


