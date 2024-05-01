export default async function catalogos() {
    document.title = "CATÁLOGOS"; 
    

    return `   
       <menu-principal></menu-principal>   
      
            <div class="catalogo">                                           
                <img src="/catalogos/02.jpg">
                <div>
                <span>Catálogos dia das Mães...</span>
                <a href="/catalogos/02.pdf" download="Terapias.pdf">Download</a> 
                </div>                    
                </div>
            </div>                          
    
            <div class="catalogo">                           
                <img src="/catalogos/01.jpeg">
                <div>
                <span>Catálogos de tratamentos estéticos e faciais...</span>
                <a href="/catalogos/01.pdf" download="Terapias.pdf">Download</a> 
                </div>                    
                </div>
            </div>                          

      `;
  }
  