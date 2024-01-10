import { $effect } from "../lib/@prix.js";
import getPlanilha from "../context/getPlanilha.js";

let statusVerify = false
let lista = false
let filteredObjects 
let filteredObjectsUnic 

export default async function compPedido(tag) {


  async function verificarOrdem(e) {

    if (e.target.id === "button_submit") {
      const whats = tag.querySelector("#order-number").value;
      const dP = await getPlanilha(whats);
      filteredObjects = dP.filter((item) => item.Telefone === parseInt(whats));
      lista = true;
      tag.removeEventListener("click", verificarOrdem);
      $effect(tag)
    }
  
    if (e.target.id === "voltar_whats") {
      statusVerify = false;
      lista = false;
      tag.removeEventListener("click", verificarOrdem);
      $effect(tag)
    }
  
    if (e.target.id === "acompanhar") {
      filteredObjectsUnic = filteredObjects[e.target.getAttribute("key")];
      statusVerify = true;
      tag.removeEventListener("click", verificarOrdem);
      $effect(tag)
    }
  
    if (e.target.id === "voltar") {
      statusVerify = false;
      lista = true;
      tag.removeEventListener("click", verificarOrdem);
      $effect(tag)
     
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
      };">R$: ${filteredObjectsUnic.ValorTotal}</span></p>
      <p>30% adiantamento<span id="payment-status" style="color: ${
        filteredObjectsUnic.Adiantamento ? "green" : "red"
      };"> ${filteredObjectsUnic.Adiantamento}</span></p>
      <p>Agedamento para <span id="service-status" style="color: ${
        filteredObjectsUnic.Data ? "green" : "red"
      };">${filteredObjectsUnic.Data}</span></p>
      <p>Finalizado em <span id="service-status" style="color: ${
        filteredObjectsUnic.Finalizado ? "green" : "red"
      };">${filteredObjectsUnic.Finalizado}</span></p>
     
    </div>
    <p id="voltar">Voltar</p>
    `;
  }

  if (lista) {
    return `
      <h1>Lista de Pedido</h1>
      <div class="container_pedido_list">
        ${filteredObjects      
          .map(
            (e, k) => `
          <div class="pedido_list" id="${k}">
            <h3>${e.Nome}</h3>
            <h4>Quantidade: ${e.Quantidade}</h4>
            <h4>Terapeuta: ${e.Terapeuta}</h4>
            <button id="acompanhar" key="${k}">Acompanhar</button>
          </div>
        
        `
          )
          .join("")}
      </div>
    
      <p id="voltar_whats">Voltar</p>
    `;
  }

  return `
    <div id="orderform">
      <label for="order-number">Digite o numero de telefone</label>
      <input type="text" id="order-number" name="order-number" required>
      <button  id="button_submit">Acompanhar Pedido</button>
    </div>
  `;
}
