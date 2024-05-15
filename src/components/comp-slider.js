export default function slider(tag) {
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
      <img style="display: block" class="mySlides" src="/img/slide/1.jpg" alt="Slider 1 Novidades">
      <img class="mySlides" src="/img/slide/2.jpg" alt="Slider 1 Novidades">
      <img class="mySlides" src="/img/slide/3.jpg" alt="Slider 1 Novidades">
      <img class="mySlides" style=" max-width: 100%; height: auto;" src="/img/slide/banner_curso.jpeg" alt="Cursos">
      <button class="next" id="nextBtn">&#10095;</button>      
    </div>`;
}
