import Router from "./front-end/ROUTER/";
import STATE_GLOBAL from "./front-end/STATE_GLOBAL/index.js";
const macros = STATE_GLOBAL.macros;
if (macros) {
  Router();
  Object.values(macros).forEach((func) => func());
}

