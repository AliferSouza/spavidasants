export default async function catalogos() {
    document.title = "CATÁLOGOS"; 
    

    return `   
       <menu-principal></menu-principal>   
         <div class="container_page">    
            <div class="catalogo">            
           
                <div class="catalogo_card">         
                <div class="catalogo_card_interno">
                <img src="/catalogos/01.jpeg" alt="" >
                <span>Catálogo de tratamentos estéticos e faciais... <span>
                <a href="/catalogos/01.pdf" download="Terapias.pdf">Download</a>
                </div>
                </div>

     
                <div class="catalogo_card">   
                         
                <div class="catalogo_card_interno">
                <img src="/catalogos/02.jpeg"  alt="" >
                <span>Catálogo com nossos pacotes de SPA...<span>
                <a href="/catalogos/02.pdf" download="Estetica.pdf">Download</a>

                </div>
                </div>
              
            </div>                          
        </div>
      `;
  }
  
