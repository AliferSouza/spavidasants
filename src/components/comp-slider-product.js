import produtos from "../context/Data.js";
import { itemAgendamento } from "../context/agedamento.js";
export default async function sliderProduct(tag) {
  let slideIndex = 0;
  const p = await produtos();
  const dadosSelecionados = p.massagens.filter(
    (d) => d.categoria === location.pathname.split("/").pop()
  );

  tag.addEventListener("click", (e) => {
    if (e.target.id === "prevBtnn") effect(-1);
    if (e.target.id === "nextBtnn") effect(1);
    const valorMassagem = dadosSelecionados.find(
      (massagem) => massagem.id === e.target.id
    );
    itemAgendamento.valorMassagem = valorMassagem;
  });

  function effect(n) {
    const slides = tag.getElementsByClassName("mySlides");
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    for (const slide of slides) slide.style.display = "none";
    slides[slideIndex].style.display = "block";
  }

  return `
    <div class="slideshow-container-product ">
      <button class="prev" id="prevBtnn">&#10094;</button>
      ${dadosSelecionados
        .map(
          (item, index) =>
            `<img use:href="/agendamentos/" id="${item.id}" class="mySlides" src="${
              item.img
            }" alt="${item.info}" width="${
              item.width || 200
            }" style="display: ${index === 0 ? "block" : "none"};">`
        )
        .join("")}
      <button class="next" id="nextBtnn">&#10095;</button>      
    </div>`;
}
