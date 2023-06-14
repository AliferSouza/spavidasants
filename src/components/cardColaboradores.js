import{ cardDateColaboradores } from "../dados/data.js"

export default function cardColaboradores() { 

  const html = () => {
    return `
    <div class="home-cards-container">
      <div class="home-img-colaboradores">
        ${cardDateColaboradores.map(element =>`
        <a href="/#/perfil/${element.id}/" >
          <img id="${element.id}" src="${element.img}" width="70px" height="70px" alt="Dados Usuários">
          </a>
        `).join('')}
      </div>
    </div>
  `;

  }

  return {html}

   
  

}