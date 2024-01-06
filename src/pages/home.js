export default async function home() {
  document.title = "NOVO";




  return `   
       <div class="container_page">     
          <menu-principal ></menu-principal>
     
          <comp-slider ></comp-slider>
          <comp-colaboradores></comp-colaboradores> 

          <comp-button-lateral  id="flutuante"> </comp-button-lateral>  
       
          <div class="container_card-product">
          <card-product id="promocao" width="150" height="200"></card-product>
         
          <card-product id="massagens" width="140" height="140"></card-product>   
          <card-product id="estetica" width="150" height="200"></card-product>
       
          </div>

          <comp-whatsapp   priority  class="whatsapp"></comp-whatsapp>

          <comp-newsletter  priority class="card-newsletter"  id="news latter"></comp-newsletter>
          
          
     
    </div>
    `;
}
