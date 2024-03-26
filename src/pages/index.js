import { isAuthenticated } from "../auth/index.js";
import home from "./home.js";
import perfil from "./perfil.js";
import agendamentos from "./agendamentos.js";
import produto from "./produto.js";
import catalogo from "./catalogo.js";
import acompanhar from "./acompanhar.js";
import cursos from "./cursos.js";

const modulesToExport = !isAuthenticated()
  ? { home, perfil, agendamentos, produto, catalogo, acompanhar, cursos }
  : { home };
  
export default modulesToExport;
