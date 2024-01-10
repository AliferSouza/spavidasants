export default async function home() {
  document.title = "NOVO";




  return `   
       <div class="container_page">     
          <menu-principal ></menu-principal>     
          <comp-slider ></comp-slider>
          <comp-colaboradores></comp-colaboradores> 
          <comp-button-lateral  id="flutuante"> </comp-button-lateral>        
          <div class="container_card-product">
          <card-product key="PROMOÇÕES" id="promocao" width="180" height="220"></card-product>  
          <card-product key="MASSAGENS" id="massagens" width="180" height="250"></card-product>   
          <card-product key= "ESTÉTICA" id="estetica" width="180" height="260"></card-product>
          <card-product key= "ÓLEOS" id="oleos" width="165" height="165"></card-product>
          </div>
          <comp-whatsapp   priority  class="whatsapp"></comp-whatsapp>
          <comp-newsletter  priority class="card-newsletter"  id="news latter"></comp-newsletter>                 
      </div>
    `;
}
