import { server } from "./prix/back-end/prix-server.js";
import agedamento from "./Controllers/agedamento.js";



export const URLRouter = { 
  "/api/agedamento/": agedamento,
};

server.listen(3000, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});
