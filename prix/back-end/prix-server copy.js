import http from "http";
import { URLRouter } from "../../server.js";

const middleware = (req, res) => {
  const url = req.url;

  for (const routePath in URLRouter) {
    const regexBeforeId = /^(.*)\/id\//;
    const regexAfterId = /\/id\/(.*)$/;
    const matchBeforeId = url.match(regexBeforeId);
    const beforeId = matchBeforeId ? matchBeforeId[1] : null;
    const matchAfterId = url.match(regexAfterId);
    const afterId = matchAfterId ? matchAfterId[1] : null;
    req.id = afterId;

    // Lê o corpo da requisição
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // Concatena os dados do buffer para string
    });

    // Quando todos os dados forem recebidos
    req.on("end", () => {
      // Atribui o corpo da requisição a req.body
      req.body = body;

      // Chama o handler correspondente à rota
      URLRouter[routePath](req, res);
    });

    return; // Saia do loop assim que encontrar uma correspondência
  }
};

export const server = http.createServer((req, res) => {
  middleware(req, res);
});
