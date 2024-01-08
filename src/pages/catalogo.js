export default async function catalogos() {
    document.title = "CATÁLOGOS"; 
    

    return `   
       <menu-principal></menu-principal>   
         <div class="container_page">    
            <div class="catalogo"> 
                <h1>BAIXE NOSSOS CATÁLOGOS</h1>
           
                <div class="catalogo_card">          
                <h3>Promoções Terapias</h3>               
                <div class="catalogo_card_interno">
                <img src="/catalogos/01.jpeg" alt="" >
                <span>Catálogos com nossos produtos...<span>
                <a href="/catalogos/01.pdf" download="Terapias.pdf">Download</a>
                </div>
                </div>

     
                <div class="catalogo_card">    
                <h3>Promoções Estética</h3>                 
                <div class="catalogo_card_interno">
                <img src="/catalogos/02.jpeg"  alt="" >
                <span>Catálogos com nossos produtos...<span>
                <a href="/catalogos/02.pdf" download="Estetica.pdf">Download</a>

                </div>
                </div>
              
            </div>                          
        </div>
      `;
  }
  