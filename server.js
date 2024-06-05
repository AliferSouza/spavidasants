import agedamento from "./Controllers/agedamento.js";
import path from "path";
import fs from "fs";
import http from "http"
const cors = (req, res) => {
  // Configuração básica para permitir solicitações de qualquer origem
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Configuração dos métodos HTTP permitidos
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  // Configuração dos cabeçalhos permitidos
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Se a solicitação for um OPTIONS, envie uma resposta com status 200 (OK)
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
};


async function site(req, res) {
  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./index.html";
  }
 const a = filePath.replace(/^.*(?=\/public)/, ".");
 console.log(a)
console.log(filePath)
  const extname = path.extname(filePath);
  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404);
        res.end("404 Not Found");
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
}


export const use = {
  cors  
}

export const URLRouter = { 
 "/api/agedamento/:id": agedamento,
 "/api/agedamento/": agedamento,
 "/*": site
};


const applyMiddleware = (req, res) => {
  for (const middleware of Object.values(use)) {
    middleware(req, res);
  }
};
const prixServer = (req, res) => {
  const url = req.url;
  // Se a URL começa com /api/, roteia para URLRouter
  if (url.startsWith("/api/")) {
    for (const routePath in URLRouter) {
      const pattern = new RegExp('^' + routePath.replace(/:[^\s/]+/g, '([\\w-]+)') + '$');
      const match = url.match(pattern);
      if (match) {
        if (routePath.includes(':id')) req.id = match[1];
        let body = "";
        req.on("data", chunk => body += chunk.toString());
        req.on("end", () => {
          req.body = body;
          URLRouter[routePath](req, res);
        });
        return;
      }
    }
  }else{
    let body = "";
    req.on("data", chunk => body += chunk.toString());
    req.on("end", () => {
      req.body = body;
      URLRouter["/*"](req, res);
    });
    return;
    
  }


};
export const server = http.createServer((req, res, next) => {
  applyMiddleware(req, res);
  prixServer(req, res);
});
server.listen(3000, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});
