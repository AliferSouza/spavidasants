import Data from "../context/Data.js"

export default async function perfil() {
  const dados = await Data()
  const slug = location.hash.split("/").pop() || location.pathname.split("/").pop()
  const data = dados.colaboradores.find((d) => d.id === slug);
  document.title = slug.toLocaleUpperCase();

  return `        
      
         <div class="container_page"> 
         <menu-principal></menu-principal>
         <div class="perfil">
         <img src="${data.img}" alt="Imagem do colaborado ${data.nome}" >                           
           ${data.nome}
           <a id="info" href="${data.insta}" target="_blank">@Instagram</a>
               ${data.funcao}                               
          <h5 id="info">${data.descricao} </h5>
            ${(data.nome === "Viviane" || data.nome === "Alifer")? `                   
            <button id="entreemcontato" url="${data.insta}" class="buttonperfil">                 
            <span use:href="/agendamentos/?profissional=${data.nome}"  id="entreemcontato"  class="buttonperfil" id="whats">Agende um horário</span>		           
            </button>`:""}  
          </div>                 
  
       
         `
}
