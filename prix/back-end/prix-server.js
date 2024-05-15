import http from "http";
import { URLRouter, use } from "../../server.js";


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
