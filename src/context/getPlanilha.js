const cache = {
  key: "agedamento",
  cacheTimestampKey: "cacheTimestamp",
  expirationTime: 1900000, // 2 minutos em milissegundos
  cachedData: null,
  cacheTimestamp: 0,
};

export default async function fetchDataWithCache(props) {
  const shouldForceRefresh = Boolean(props);

  // Tentar carregar dados do localStorage
  const cachedDataFromLocalStorage = localStorage.getItem(cache.key);
  const cachedTimestampFromLocalStorage = localStorage.getItem(
    cache.cacheTimestampKey
  );

  if (
    !shouldForceRefresh &&
    cachedDataFromLocalStorage &&
    cachedTimestampFromLocalStorage
  ) {
    const parsedCachedTimestamp = parseInt(cachedTimestampFromLocalStorage, 10);
    const parsedCachedData = JSON.parse(cachedDataFromLocalStorage);

    if (
      parsedCachedData &&
      Date.now() - parsedCachedTimestamp < cache.expirationTime
    ) { 
      return parsedCachedData;
    }
  }

  try {
    // Fetch data from the URL
    const dadosPlanilha = await fetch(
      `https://script.google.com/macros/s/AKfycbxtmKZSWMQnVaDaOriCanoUnjo_4rRyznhMAsTKSXdGfh0P-ZL-8C5EUGjLYjK5lhtM/exec?Telefone=${
        props || ""
      }`
    );
    const dB = await dadosPlanilha.json();

    // Atualizar o cache apenas se houver algum dado
    if (dB) {
      cache.cachedData = dB;
      cache.cacheTimestamp = Date.now();

      // Adicionar ao localStorage
      localStorage.setItem(cache.key, JSON.stringify(cache.cachedData));
      localStorage.setItem(
        cache.cacheTimestampKey,
        cache.cacheTimestamp.toString()
      );
    }


    return dB;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
