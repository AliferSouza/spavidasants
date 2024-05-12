
export default async function home() {
  document.title = "SPAVIDASANTS";
  return `   
  
          <menu-principal ></menu-principal>   
          <comp-slider ></comp-slider>
          <comp-colaboradores></comp-colaboradores>
          <comp-button-lateral  id="flutuante"> </comp-button-lateral>        
          <div class="container_card-product">
          <card-product id="promoções" width="180" height="250"></card-product> 
          <card-product id="cursos" width="200" height="300"></card-product>                
          <card-product id="massagens" width="180" height="250"></card-product>   
          <card-product id="estética" width="180" height="260"></card-product>
          <card-product id="oleos" width="165" height="165"></card-product>       
          </div>
          <comp-whatsapp   priority  class="whatsapp"></comp-whatsapp>
          <comp-newsletter  priority class="card-newsletter"  id="news latter"></comp-newsletter>                 
   
    `;
}
