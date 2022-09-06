
export default function Menu() {

    

    addEventListener("DOMContentLoaded", e => {
        const nav = document.querySelector(".nav");
        const btnMenu = document.querySelector(".btn-menu");
        const menu = document.querySelector(".menu");
        
        function handleButtonClick(event) {
          if (event.type === "touchstart") event.preventDefault();
          event.stopPropagation();
          nav.classList.toggle("active");
          handleClickOutside(menu, () => {
            nav.classList.remove("active");
            setAria();
          });
          setAria();
        }
        
        function handleClickOutside(targetElement, callback) {
          const html = document.documentElement;
          function handleHTMLClick(event) {
            if (!targetElement.contains(event.target)) {
              targetElement.removeAttribute("data-target");
              html.removeEventListener("click", handleHTMLClick);
              html.removeEventListener("touchstart", handleHTMLClick);
              callback();
            }
          }
          if (!targetElement.hasAttribute("data-target")) {
            html.addEventListener("click", handleHTMLClick);
            html.addEventListener("touchstart", handleHTMLClick);
            targetElement.setAttribute("data-target", "");
          }
        }
        
        function setAria() {
          const isActive = nav.classList.contains("active");
          btnMenu.setAttribute("aria-expanded", isActive);
          if (isActive) {
            btnMenu.setAttribute("aria-label", "Fechar Menu");
          } else {
            btnMenu.setAttribute("aria-label", "Abrir Menu");
          }
        }
        
        btnMenu.addEventListener("click", handleButtonClick);
        btnMenu.addEventListener("touchstart", handleButtonClick);
        
    
    })

    
    return `
    
    
    <header class="header">
      <a href="/" class="logo"><img  src="./src/img/logo.png" height="75vh"></a>
      <nav class="nav">
        <button
          class="btn-menu"
          aria-label="Abrir Menu"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        >
          Menu<span class="hamburger"></span>
        </button>
        <!-- <input type="checkbox" id="checkbox" class="checkbox" />
        <label for="checkbox" class="label-menu"
          >Menu<span class="hamburger"></span
        ></label> -->
        <ul class="menu" id="menu" role="menu">
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
 
    `

}