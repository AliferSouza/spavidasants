import Data from "../context/Data.js"

export default async function perfil() {
  const dados = await Data()

  const slug = location.hash.split("/").pop() || location.pathname.split("/").pop()
  const data = dados.colaboradores.find((d) => d.id === slug);

  document.title = slug.toLocaleUpperCase();

  const app = document.querySelector("#app");
  let horario = ""; // Initialize horario with a default value
  
  app.addEventListener("click", e => {
    if (e.target.id === "horarios") {
      let selectedValue = e.target.value;
      if (selectedValue === "nove") {
        horario = "9:00";
      } else if (selectedValue === "treze") {
        horario = "13:00";
      } else if (selectedValue === "quinza") {
        horario = "15:00";
      } else if (selectedValue === "quartoze") {
        horario = "16:00";
      }
    }
  

  });


 
    return `
      
    <menu-principal></menu-principal>
    
             <div id="perfil">          
                    <div id="perfil-img">                   
                        <img src="${data.img}" alt="Imagem do colaborado ${data.nome}">                           
                        ${data.nome}
                        <a id="info" href="${
                          data.insta
                        }" target="_blank">@Instagram</a>
                        ${data.funcao}
                                 
                        <h5 id="info">${data.descricao} </h5>
                        ${
                          data.nome === "Viviane"
                            ? "Atendimento exclusivo para terapia."
                            : ""
                        }
                        
                        ${(data.nome === "Viviane" || data.nome === "Alifer")
                         ? `
                   
                        <button id="entreemcontato" url="${data.insta}" class="buttonperfil">
                 
                        <span use:href="/agenda/"  id="entreemcontato"  class="buttonperfil" id="whats">Agende um horário</span>		
                        
                      </button>
                    
                    
                      `
                         : ""}

                    

                    </div>   
                    </div>   
        
            
                
              </div>
    
        `;



}
