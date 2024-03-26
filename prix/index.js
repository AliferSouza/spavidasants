import Router from "./ROUTER/";
import STATE_GLOBAL from "./STATE_GLOBAL/index.js";
const macros = STATE_GLOBAL.macros;
if (macros) {
  Router();
  Object.values(macros).forEach((func) => func());
}

