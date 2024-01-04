import Data from "../context/Data.js";
import {$effect } from "../lib/@prix.js";
export default async function Colaboradores({ tag }) {
  const dados = await Data()

  return `
    <div class="home-cards-container-colaborado">      
      <div class="home-img-colaboradores">
        ${dados.colaboradores.map((element) => `
          <img use:href="/perfil/${element.id}" src="${element.img}" id="colaborador-${element.id}" width="50" height="50" alt="Dados Usuários">
        `)}
      </div>        
    </div>`;
}