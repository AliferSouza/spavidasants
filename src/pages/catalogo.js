export default async function catalogos() {
    document.title = "CATÁLOGOS"; 
    

    return `   
       <menu-principal></menu-principal>   
      
            <div class="catalogo">          
            <div class="catalogo_cards"> 
                <div class="card">         
                <div class="catalogo_card_interno">
                <img src="/catalogos/01.jpeg" alt="" >
                <div>Catálogos de tratamentos estéticos e faciais...
                <a href="/catalogos/01.pdf" download="Terapias.pdf">Download</a> </div>                    
                </div>
                </div>
            </div>
            </div>
            </div>                          
    
      `;
  }
  