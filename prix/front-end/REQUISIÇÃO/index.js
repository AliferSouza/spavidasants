export async function Fetch(url, options) {
    const cacheKey = options.tags;
    const currentTime = Math.floor(Date.now() / 1000);
  
    // Tenta recuperar os dados do cache do localStorage
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData && options.method !== "POST") {
      // Se for GET, retorna do cache
      const cachedItem = JSON.parse(cachedData);
      if (currentTime - cachedItem.timestamp <= options.revalidate) {
        console.log(`Cache hit for ${cacheKey}`);
        return cachedItem.data;
      }
    }
  
    try {
      let response;
      if (options.method === "POST") {
        // Se for uma requisição POST, envia a requisição com os dados fornecidos
        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(options.data),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        // Se for uma requisição GET, envia a requisição sem corpo
        response = await fetch(url, { method: "GET" });
      }
  
      const data = await response.json();
  
      // Armazena os dados no cache do localStorage
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ data: data, timestamp: currentTime })
      );
  
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
}
  
const cache = new Map();

export async function fetchCustom(url, options = {}) {
    const { method = "GET", key, data } = options;
    const cacheKey = key || url;
  
    // Verificando se a chave está no cache
    if (method === "GET" && cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
  
    // Requisição para a API
    const response = await fetch(url, {
      method,
      ...data && { body: JSON.stringify(data) },
    });
  
    // Se for um GET, armazena o resultado no cache
    if (method === "GET") {
      cache.set(cacheKey, response);
    }
  
    // Se for um POST, atualiza o cache com o novo valor
    if (method === "POST" && cache.has(cacheKey)) {
      const cachedData = await cache.get(cacheKey);
      const updatedData = await response.json();
      cache.set(cacheKey, { ...cachedData, ...updatedData });
    }
  
    return response;
}
  
export default Fetch = async (url, options = {}) => {
    const { time = 0, ...restOptions } = options;
    const cacheKey = `${url}-${JSON.stringify(restOptions)}`;
    
    // Verificar se existe um cache válido
    const cacheData = localStorage.getItem(cacheKey);
    if (cacheData) {
      const { timestamp, data } = JSON.parse(cacheData);
      const elapsedTime = Date.now() - timestamp;
      if (elapsedTime < time) {
        return data;
      }
    }
  
    let response;
    if (restOptions.method === 'GET') {
      response = await fetch(url);
    } else {
      // Atualizar o cache antes de fazer a requisição
      if (localStorage.getItem(cacheKey)) {
        localStorage.setItem(cacheKey, JSON.stringify({
          timestamp: Date.now(),
          data: restOptions.data
        }));
      }
      
      response = await fetch(url, {
        method: restOptions.method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(restOptions.data)
      });
    }
  
    const responseData = await response.json();
  
    // Atualizar o cache se for uma requisição que permite o cache
    if (restOptions.method === 'GET' && time > 0) {
      localStorage.setItem(cacheKey, JSON.stringify({
        timestamp: Date.now(),
        data: responseData
      }));
    }
  
    return responseData;
};
  