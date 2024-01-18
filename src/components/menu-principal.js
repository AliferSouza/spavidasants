export default function Menu(tag) {
  tag.addEventListener("click", (e) => {
    if (e.target.id === "menu-oculto") {
      const menuOculto = tag.querySelector(".menu-oculto");
      const menuEstaVisivel = menuOculto.classList.contains("menu-mostrar");
      menuOculto.classList.toggle("menu-mostrar", !menuEstaVisivel);
    }
  });

  return `
      <div class="menu">
          <img class="pointer" use:href="/home/" src="/img/logo/logo22.png" width="50px" height="50px" alt="Logo">
          <label id="menu-oculto">&#8801</label>
      </div>
 
      <div class="menu-oculto">
          <a class="active" use:href="/home/">Início</a>     
          <a class="active" use:href="/catalogo/">Catálogos</a>      
          <a class="active" use:href="/acompanhar/">Acompanhar</a>  
      </div>         
     `;
}
