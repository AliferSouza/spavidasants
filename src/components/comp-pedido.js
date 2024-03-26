import $effect from "../../prix/DOM/renderComponents.js";

let statusVerify = false;
let filteredObjectsUnic;

export default async function compPedido(tag) {
  const AcopanharAgedamento =
    JSON.parse(localStorage.getItem("AcopanharAgedamento")) || [];

  async function verificarOrdem(e) {
    if (e.target.id === "acompanhar") {
      filteredObjectsUnic = AcopanharAgedamento[e.target.getAttribute("key")];
      statusVerify = true;
      tag.removeEventListener("click", verificarOrdem);
      $effect(tag);
    }

    if (e.target.id === "voltar") {
      statusVerify = false;
      tag.removeEventListener("click", verificarOrdem);
      $effect(tag);
    }
  }
  tag.addEventListener("click", verificarOrdem);

  if (statusVerify) {
    return `
    <div class="status_pedido">
      <h1>Status do Pedido</h1>
      <h2>Resumo do Pedido</h2>
      <p>Valor: <span style="color: ${
        filteredObjectsUnic.ValorTotal >= 0 ? "green" : "red"
      };">R$: ${
      parseFloat(filteredObjectsUnic.quantidade) *
      filteredObjectsUnic.valorTotal
    }</span></p>     
      <p>Agedamento para <span id="service-status" style="color: ${
        filteredObjectsUnic.data ? "green" : "red"
      };">${filteredObjectsUnic.data}</span></p>     
    </div>
    <p id="voltar">Voltar</p>
    `;
  }

  return ` 
  <h1>LISTA DE PEDIDOS</h1>
    <div class="container_pedido_list">
    ${AcopanharAgedamento.map(
      (e, k) => `
      <div class="pedido_list" id="${k}">
        <h3>${e.nome}</h3>
        <h4>Quantidade: ${e.quantidade}</h4>
        <h4>Terapeuta: ${e.profissional}</h4>
        <button id="acompanhar" key="${k}">Acompanhar</button>
      </div>
    `
    ).join("")}
    </div>
    `;
}
