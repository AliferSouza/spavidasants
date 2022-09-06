export default function Slider() {


  addEventListener("DOMContentLoaded", e => {
    let slides = document.querySelectorAll('.slide-container');
    let index = 0;

   const next = () => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }

    const prev = () => {
      slides[index].classList.remove('active');
      index = (index - 1 + slides.length) % slides.length;
      slides[index].classList.add('active');
    }

    setInterval(next, 7000);

  });

  return `
    <section class="containerproje">
        <div class="slide-container active">
            <div class="slide">
             <div class="contentproje">
               <h3>Metaverso</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde similique ipsam quibusdam inventore earum, quo assumenda, quam molestiae 
                   laborum praesentium velit accusantium iure excepturi. Iste dolores id odit veritatis ex?</p>
               <a href="https://ftd.com.br/" class="bntproj">Saiba mais</a>
             </div>
            </div>
        </div>

        <div class="slide-container">
            <div class="slide">
             <div class="contentproje">
               <h3>Metaverso</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid assumenda eaque, inventore 
                   pariatur molestias hic, aspernatur nihil ipsam eius magni incidunt? Incidunt eveniet non magnam 
                   reprehenderit beatae doloribus soluta.</p>
               <a href="https://ftd.com.br/" class="bntproj">Saiba mais</a>
             </div>
            </div>
        </div>
        
        <div class="slide-container">
            <div class="slide">
             <div class="contentproje">
               <h3>Metaverso</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos, qui obcaecati nulla 
                aliquid non iure autem, esse aliquam itaque rerum nostrum 
                repudiandae! At eligendi quas provident omnis voluptatem. Dignissimos..</p>
               <a href="https://www.escolasconectadas.org.br/cursos" class="bntproj">Saiba mais</a>
             </div>
            </div>
        </div>

        
        <div id="prev" onclick="prev()"> < </div>
        <div id="next" onclick="next()"> > </div>
    </section>
  `
}