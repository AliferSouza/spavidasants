export function $setSearchParam(paramsObject) {
  if (paramsObject) {
    const params = new URLSearchParams(window.location.search);
    const caminhoURL = location.href.split("?")[0];
    for (const key in paramsObject) {
      if (paramsObject.hasOwnProperty(key)) {
        params.set(key, paramsObject[key]);
      }
    }
    const novaQueryString = params.toString();
    history.pushState({}, "", caminhoURL + "?" + novaQueryString);
  }
}

export function $useNavigate(Rota) {
  if (location.origin + Rota === location.href) {
    Router();
  } else {
    window.history.pushState(null, null, Rota);
    Router();
  }
}
