import { $useNavigate, $imports } from "./lib/@prix.js";
import getPlanilha from "./context/getPlanilha.js";
import Pages from "./pages/index.js";
import Components from "./components/index.js";

(async function () {
  $imports({ ...Pages, ...Components });
  await $useNavigate();
  await getPlanilha();
})();
