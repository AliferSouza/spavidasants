export default function slider({ tag }) { 
  let slideIndex = 0;

  tag.addEventListener("click", (e) => {
    if (e.target.id === "prevBtn") effect(-1);
    if (e.target.id === "nextBtn") effect(1);
  });


  function effect(n) {
    const slides = document.getElementsByClassName("mySlides");
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    for (const slide of slides) slide.style.display = "none";
    slides[slideIndex].style.display = "block";
  }

  return `

    <div class="slideshow-container">
      <button class="prev" id="prevBtn">&#10094;</button>
      <img style="display: block" class="mySlides" src="/img/slide/bannerPro.png" alt="Slider 1 promoções">
      <img class="mySlides" src="/img/slide/bannerr.png" alt="Slider 1 Novidades">
      <img class="mySlides" src="/img/slide/banner.png" alt="Slider 1 Sobre nós">
      <button class="next" id="nextBtn">&#10095;</button>      
    </div>`;
}
