import Pages from "./src/pages/index.js";
import Components from "./src/components/index.js";

export default {  
  Router: {
    "/": "home",  
    ...Pages,
    ...Components
  },
  Macros:{}  
};


