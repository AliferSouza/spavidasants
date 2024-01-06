import {useNavigate} from "./lib/@prix.js";
import getPlanilha from "./context/getPlanilha.js"


async function main() {
  useNavigate() 
  await getPlanilha()
  
}
 main();
