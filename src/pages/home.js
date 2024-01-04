

export default async function Novo() {
  document.title = "NOVO";




  return `

     
    

       <div class="flex center containe_pricipal">
   

       <div class="novo_cotainer">
             
  
       <menu-principal ></menu-principal>
     
          <comp-slider ></comp-slider>
          <comp-colaboradores></comp-colaboradores> 

          <comp-button-lateral  id="flutuante"> </comp-button-lateral>  
       
          <div class="container_card-product">
          <card-product id="promocao" width="180" height="250"></card-product>
          <br>       
          <card-product id="massagens" width="180" height="180"></card-product>   
          <card-product id="estetica" width="180" height="250"></card-product>
          <br>      
          </div>

          <comp-whatsapp   priority  class="whatsapp"></comp-whatsapp>

          <comp-newsletter  priority class="card-newsletter"  id="news latter"></comp-newsletter>
          
          
      </div>
    </div>
    `;
}
