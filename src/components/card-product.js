import Data from "../context/Data.js";
import { itemAgendamento } from "../context/agedamento.js";

export default async function cardProdutos({$, dataSet}) {
  const dados = await Data();
  const dadosSelecionados = dados.massagens.filter(
    (d) => d.categoria === dataSet.id
  );


  const width = $.getAttribute("width");
  const height = $.getAttribute("height");

  const generateOptions = () => {
    return dadosSelecionados
      .map(
        (item, key) =>
          `<img 
            id="${item.id}"
            use:href="/agendamentos/"
            src="${item.img}" 
            width="${width}"
            height="${height}"
            alt="${item.categoria}"
        >`
      )
      .join("");
  };

  $.addEventListener("click", (e) => {
    const valorMassagem = dados.massagens.find(
      (massagem) => massagem.id === e.target.id
    );
    itemAgendamento.valorMassagem = valorMassagem;
  });

  return `
         <div class="container_produtos">
          <div class="container_produtos_title">
            <h2>${$.id.toUpperCase()}</h2>
            <h2 style="font-weight: 900">▼</h2>
          </div>

          <div class="container_produtos_produtos"> 
            <div>       
              ${generateOptions()}  
            <div>                       
          </div>
        </div

  `;
}
