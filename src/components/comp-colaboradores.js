import Data from "../context/Data.js";

export default async function Colaboradores(tag) {
  const dados = await Data();

  return `
    <div class="home-cards-container-colaborador">      
      <div class="home-img-colaboradores">
        ${dados.colaboradores.map(
          (element) => `
          <img use:href="/#/perfil/${element.id}" src="public${element.img}" id="colaborador-${element.id}" alt="Dados Usuários">
        `
        )}
      </div>        
    </div>`;
}
