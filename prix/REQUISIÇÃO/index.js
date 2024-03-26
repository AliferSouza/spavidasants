export default async function Fetch(url, options) {
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
  
