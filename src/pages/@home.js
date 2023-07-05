export default async function home(props) {
  document.title = "HOME"


  const state = () => {
    const button = $("#tres-pontos");
    const videoComp = $("#comp-video").tag()    
    button.on("click", () => { 
     videoComp.style.display = videoComp.style.display === "none" ? "block" : "none";
    });
    

    function scroll() {
      const floatingButton = $("#tres-pontos");    
      let timeoutId;    
      window.addEventListener("scroll", function () {
        clearTimeout(timeoutId);    
        floatingButton.show();  
        timeoutId = setTimeout(function () {
          floatingButton.hide();
        }, 4000);
      });
    }
    
    scroll();
    


 
  };

  const html = () => {
    return `       
       <comp-menu></comp-menu>
       <comp-slider></comp-slider>
       <comp-colaboradores id="oliveira"></comp-colaboradores>    
       <h1>PROMOÇÃO</h1>
       <comp-produtos data-id="promocao"></comp-produtos>
       <h1>MASSAGENS</h1>
       <comp-produtos data-id="massagens"></comp-produtos>
        <h1>PACOTES</h1>
       <comp-produtos data-id="estetica"></comp-produtos>
       <comp-perfoleos data-a="/#/shop/perfumaria/#oleos"  data-id="oleos">ÓLEOS ESSENCIAIS</comp-perfoleos>
       <comp-newsletter></comp-newsletter>
       <comp-whatsapp data-class="whatsapp"></comp-whatsapp>
       <comp-mascoteia></comp-mascoteia>

   
       <div id="receberIa"></div>    

  
       <comp-button-lateral data-id="comp-flutuante"> </comp-button-lateral>
       <comp-video id="comp-video" style="display: none"></comp-video>

    
      
     
 
      
      
        `;
  };

  return {
    state,
    html,
  };
}
