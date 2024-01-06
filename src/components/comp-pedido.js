import { $effect } from "../lib/@prix.js"
import getPlanilha from "../context/getPlanilha.js"

const stateNumero = false
let statusVerify = false
let whatsapp = false
let filteredObjects 
let filteredObjectsUnic
export default async function compPedido({tag}) {
console.log(filteredObjects)

  tag.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(orderform);
    const formDataObject = Object.fromEntries(formData);
    const orderNumber = formDataObject["order-number"];
    const dP = await getPlanilha(orderNumber)  
    filteredObjects = dP.filter(e => e.Telefone === parseInt(orderNumber)) 
    whatsapp = true
    orderform.reset();
    $effect(tag)
  });

  function verificarOrdem(e){
    filteredObjectsUnic = filteredObjects[e.target.id]
    statusVerify = true
    $effect(tag)
    tag.removeEventListener('click', verificarOrdem);
  }

  tag.addEventListener("click", verificarOrdem)


  if(statusVerify){
    return `   
        <h1>Status do Pedido</h1>
        <h2>Resumo do Pedido</h2>
        <p>Valor: R$100,00</p>
        <p>30% adiantamento<span id="payment-status" style="color: red;"> Não pago</span></p>
        <p>Atendimento: <span id="service-status" style="color: red;"> Não realizado</span></p>
        <span id="service-status" style="color: red;">Finalizado em<p>31/01/24</p></span>    
     `
  }

  if(whatsapp){
    return `  
     <h1>Lista de Pedido</h1>  
    <div class="container_pedido_list">     
       ${filteredObjects.map((e, k) =>`
       <div class="pedido_list" id="${k}">
        <h3>${e.Nome}</h3>
        <h4>Quantidade: ${e.Quantidade}</h4>
        <h4>Terapeuta: ${e.Terapeuta}</h4>
       </div>`
       ).join("")}
     </div>`
  }

  return `          

        <form id="orderform">
        <label for="order-number">Digite o numero de telefone</label>
        <input type="text" id="order-number" name="order-number" required>
        <button type="submit" id="button">Acompanhar Pedido</button>    
        </form>
    
      
    `
}
