(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();async function T(a){document.title="HOME";const t=JSON.parse(localStorage.getItem("@escolhaUser"))||[];return{html:()=>`       
       <comp-menu></comp-menu>
       <comp-slider></comp-slider>
       <comp-colaboradores id="oliveira"></comp-colaboradores>    
        <!-- <h1>PROMOÇÃO</h1>
     <comp-produtos id="promocao"> </comp-produtos> -->
       <h1>MASSAGENS</h1>
       <comp-produtos  width="200" height="200"  id="massagens"></comp-produtos>
        <h1>PACOTES</h1>
       <comp-produtos width="260" height="260" id="estetica"></comp-produtos>
       <comp-perfoleos a="/#/shop/perfumaria/#oleos"  id="oleos">ÓLEOS ESSENCIAIS</comp-perfoleos>
       <comp-newsletter></comp-newsletter>
       <comp-whatsapp class="whatsapp"></comp-whatsapp>

       <div id="receberIa"></div>    

  
       <comp-button-lateral id="comp-flutuante"> </comp-button-lateral>
       <div id="comp-video"></div>

       <div class="activeMenu" data-href="/#/shop/perfumaria/#carrinho"  >
        <svg data-href="/#/shop/perfumaria/#carrinho"  width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_15_35)" data-href="/#/shop/perfumaria/#carrinho" >
          <rect  data-href="/#/shop/perfumaria/#carrinho"  width="24" height="24" fill="black" rx="4" ry="4"/>
          <path d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998" stroke="#ffffff" stroke-linejoin="round"/>
          <path d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="10" cy="20" r="1" stroke="#ffffff" stroke-linejoin="round"/>
          <circle cx="17.5" cy="20" r="1" stroke="#ffffff" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_15_35">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <span>${t.length}</span>
      </div>

    
      
     
 
      
      
        `,state:()=>{const o=document.querySelector("#tres-pontos"),s=document.querySelector("#comp-video");if(t.length===0){var l=document.querySelector(".activeMenu");l&&(l.style.display="none")}let u=!1;o.addEventListener("click",()=>{if(u)s.innerHTML="",u=!1;else{const i=`                    
                        <video  autoplay
                                id="videoPalyPause" 
                                width="90%"  
                                height="210">
                          <source src="/video/spa.mp4" type="video/mp4"  >    
                       </video>`;s.innerHTML=i,u=!0}});function d(){const i=$("#tres-pontos");let r;window.addEventListener("scroll",function(){clearTimeout(r),i.show(),r=setTimeout(function(){i.hide()},4e3)})}d()}}}function I(a){const t=location.hash.split("/").pop().replace("#",""),n=a.Data.dadosC.find(s=>s.id===t);return document.title=t,{html:()=>`
       <comp-menu></comp-menu>
    
             <div id="perfil">
                 
                    <div id="perfil-img">    
                        <img img-src="${n.img}" alt="Imagem do colaborado ${n.nome}">                           
                        ${n.nome}
                        <a id="info" href="${n.insta}" target="_blank">@Instagram</a>
                        ${n.funcao}
                                 
                        <h5 id="info">${n.descricao} </h5>
                        ${n.nome==="Viviane"?"Atendimento exclusivo para terapia.":""}
                        
                        <label class="selectPerfil" for="frutas">Escolha o horário:</label>
                        <select id="frutas" name="frutas">
                        ${n.nome==="Alifer"?`
                             <option value="quinza">15:00</option>
                             <option value="quartoze">16:00</option> 
                             <option value="quartoze">18:00</option>`:`
                            <option value="nove">9:00</option>
                            <option value="treze">13:00</option>
                            <option value="quinza">15:00</option>
                            <option value="quartoze">16:00</option>`}
                         
                        </select>

                        <div class="buttonperfilCon" class="buttonperfil">
                        <button url="${n.insta}" class="buttonperfil">
                        <span class="buttonperfil" id="whats">Entre em contato</span>		
                        </button>                                                    
                    </div>   
                    </div>   
        
            
                
              </div>
    
        `,state:()=>{const s=document.querySelector(".buttonperfil"),l=document.querySelector("#frutas");let u;s.addEventListener("click",d=>{d.preventDefault();const i=l.value;i==="nove"?u="9:00":i==="treze"?u="13:00":i==="quinza"?u="15:00":i==="quartoze"&&(u="16:00");const r=`https://api.whatsapp.com/send?phone=553171685900&text=
           Colaborador:${n.nome}
           Horario:${u} `;window.open(r,"_blank")})}}}async function k(a){document.title="PRODUTO",window.scroll(0,0);const t=location.hash.split("/").pop().replace("#","");console.log(t);const n=a.Data.dadosP.find(s=>s.id===t);return{state:()=>{const s=document.querySelector("#SpanCouter"),l=document.querySelector("#vDoP"),u=document.querySelector("#whats2"),d=parseFloat(l.innerHTML);let i=0,r;$(".infoCotainerButtons").on("click",y=>{if(y.target.className==="infoCotainerButtonsmais"&&(i++,s.innerHTML=i,r=i*d,u.innerHTML=r),y.target.className==="infoCotainerButtonsmenos"&&i>0&&(i--,s.innerHTML=i,r=i*d,u.innerHTML=r),y.target.id==="whats"){const p=`https://api.whatsapp.com/send?phone=553171685900&text= Nome:${n.categoria} Quantidade:${i}, Valor:${r} `;window.open(p,"_blank")}})},html:()=>`
        <comp-menu></comp-menu>
		<div class="cards">   
            <article class="information">               
                 <img class="p-img" img-src="${n.img}" alt="Produto ${n.nome}">
                
                 <div  class="informationDes">
                    <div>
                    <h3 class="info">${n.nome}</h3>
                    <h4 class="info" id="valorDoProduto">R$:<span id="vDoP" >${n.valor}<span> </h4>
                    <p class="info">${n.info}</p>
                    </div>
                 </div>
                
             

            </article> 	

            <article class="information2" >                  
                <h3 class="title">${n.nome}</h3>

                ${n.categoria==="massagens"?` <div class="information21">
                    A massagem individual sai pelo valor de ${n.valor} reais
                 </div>       `:""}
                
           
                 <div class="information22">O pacote com 4 sessões sai com 15% de desconto.</div>   
                 
            <div class="infoCotainerButtons">
                <div class="infoCotainerButtonsC">
                <div>
                    <button class="infoCotainerButtonsmais">+</button>
                    <span id="SpanCouter" >0</span>
                    <button class="infoCotainerButtonsmenos">-</button>
                 </div>
                    <div>
                        <button class="button">
                        <span id="whats">Agende horário <span id="whats2"><span></span>		
                        </button>
                    </div>
            </div>
            <div>       
            </article> 	  
            

            
        </div>
    

	   `}}async function D(a){let t;if(location.hash.split("#").pop()==="carrinho")t=JSON.parse(localStorage.getItem("@escolhaUser"))||[];else{const o=a.Data.dadosP.filter(s=>s.categoria===location.hash.split("#").pop());t=a.Data.dadosP.filter(s=>s.categoria==="oleos")||o}return{state:()=>{const o=document.querySelectorAll(".imgOleos");o.forEach(r=>{r.addEventListener("click",()=>{s(r)})});function s(r){document.fullscreenElement?u():l(r)}function l(r){r.requestFullscreen?r.requestFullscreen():r.mozRequestFullScreen?r.mozRequestFullScreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.msRequestFullscreen&&r.msRequestFullscreen()}function u(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||o.forEach(r=>{r.style.width="140px"})});const d=JSON.parse(localStorage.getItem("@escolhaUser"))||[];document.querySelectorAll(".shop-container-card").forEach(r=>{const y=d.find(h=>h.id===r.id);let p=0;y&&y.quantidade&&(p=y.quantidade);const g=r.querySelector("#mais"),v=r.querySelector("#menos"),w=r.querySelector("#counter");w.textContent=p,g.addEventListener("click",h=>{p++,w.textContent=p;const m=t.find(f=>f.id===h.target.parentNode.parentNode.id),c=d.find(f=>f.id===m.id);c?(c.valor=parseFloat(c.valor)+parseFloat(m.valor),c.quantidade=(c.quantidade||0)+1):(m.quantidade=1,d.push(m)),localStorage.setItem("@escolhaUser",JSON.stringify(d)),i()}),v.addEventListener("click",h=>{p>0&&(p--,w.textContent=p);const m=t.find(f=>f.id===h.target.parentNode.parentNode.id),c=d.find(f=>f.id===m.id);if(c&&(c.valor=parseFloat(c.valor)-parseFloat(m.valor),c.quantidade=(c.quantidade||0)-1,c.quantidade<=0)){const f=d.indexOf(c);d.splice(f,1)}localStorage.setItem("@escolhaUser",JSON.stringify(d)),i()})});function i(){let r="",y=0,p=0;return d.forEach(h=>{const m=h.nome,c=h.valor,f=h.quantidade;p+=parseFloat(f),y+=parseFloat(c),r+=`Nome: ${m}
Quantidade: ${f}
Valor: R$ ${c}

`}),r+=`Valor Total: R$ ${y.toFixed(2)}
`,document.querySelector("#QTVT").innerHTML=`QT: ${p} VT: ${y}`,`https://wa.me/3171253590?text=${encodeURIComponent(r)}`}i(),document.querySelector("#valor").addEventListener("click",r=>{r.target.getAttribute("key")==="pegarValorEPassarParaWhatsapp"&&window.open(i(),"_blank")})},html:()=>`       
        <comp-menu></comp-menu>
        <div class="container-shop">
            <div class="container-shop-cards">
                ${t.map((o,s)=>`
                    <div class="shop-container-card" id="${o.id}">           
                        <img  class="imgOleos" img-src="${o.img}" width="140" alt="Carrinho e produtos">                
                        <h4>${o.nome}</h4>
                        <div>
                            <button id="mais" class="perfumaria-container-card-button">+</button>
                            <span id="counter">0</span>
                            <button id="menos" class="perfumaria-container-card-button">-</button>
                        </div>            
                    </div>
                `).join("")}
            </div>

            <button id="valor" key="pegarValorEPassarParaWhatsapp">
                <div key="pegarValorEPassarParaWhatsapp">
                <span id="QTVT" key="pegarValorEPassarParaWhatsapp"></span>              
                </div>
            </button>
      
        </div>
        
    `}}async function A(){return{html:()=>`       
        <comp-menu></comp-menu>
        <div class="Loja">       
        <comp-perfoleos a="/#/shop/perfumaria/#oleos" width="80px"  height="80px"  id="oleos"></comp-perfoleos>  
        <comp-perfoleos a="/#/shop/perfumaria/#oleos" width="80px"  height="80px"  id="oleos"></comp-perfoleos>  
       </div>
        
    `}}async function N(a){return{html:()=>` <div class="wrapper">
  <header>
    <h1>File Downloader</h1>
    <p>Paste url of image, video, or pdf to download. This tool is made with vanilla javascript.</p>
  </header>
  <form action="#">
    <input type="url" placeholder="Paste file url" required>
    <button>Download File</button>
  </form>
</div>`,state:()=>{const e=document.querySelector("input"),o=document.querySelector("button");o.addEventListener("click",l=>{l.preventDefault(),o.innerText="Downloading file...",s(e.value)});function s(l){fetch(l).then(u=>u.blob()).then(u=>{let d=URL.createObjectURL(u);const i=document.createElement("a");i.href=d,i.download=l.replace(/^.*[\\\/]/,""),document.body.appendChild(i),i.click(),o.innerText="Download File",URL.revokeObjectURL(d),i.remove()}).catch(()=>{alert("Failed to download file!"),o.innerText="Download File"})}}}}const F={home:T,perfil:I,produto:k,shop:A,perfumaria:D,teste:N};async function j(){const a=await useCSVToJSON("/data/massagens/massagens.csv");return{dadosC:await useCSVToJSON("/data/colaboradores/colaboradores.csv"),dadosP:a}}async function _(a){return{html:()=>`   
    <nav > 
    <label class="logo"> <img data-href="/#/home/" img-src="/img/logo/logo22.png" width="50px" height="50px" alt="Logo"></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>



  
    <ul>
         <li><a class="active" data-href="/#/home/">Início</a></li> 
         <li><a class="active" data-href="/#/shop/">Shop</a></li> 
         <li><a class="active" data-href="/#/shop/perfumaria/#carrinho">Carrinho</a></li> 
    </ul>

  </nav>


  `}}function P(a){return{html:()=>`
    <div class="slideshow-container">
      <button class="prev" id="prevBtn">&#10094;</button>
      <img class="mySlides" img-src="/img/slide/banner.png" alt="Slider 1 promoções">
      <img class="mySlides"img-src="/img/slide/bannerr.png" alt="Slider 1 Novidades">
      <img class="mySlides" img-src="/img/slide/bannerpais.jpeg" alt="Slider 1 Sobre nós">
      <button class="next" id="nextBtn">&#10095;</button>      
    </div>`,state:()=>{let e=0;u(e);const o=document.getElementById("prevBtn"),s=document.getElementById("nextBtn");o.addEventListener("click",function(){l(-1)}),s.addEventListener("click",function(){l(1)});function l(d){u(e+=d)}function u(d){const i=document.getElementsByClassName("mySlides");if(i.length!==0){e=(d+i.length)%i.length;for(let r=0;r<i.length;r++)i[r].style.display="none";i[e].style.display="block"}}}}}async function B(){return{html:()=>`
    <form class="card-newsletter" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScjalDXW7rDe411G6pGQ3ITXVuK4UxBRoATRGMECWwDiMA_hw/formResponse">
   <span class="card__title-newsletter">Inscreva-se</span>
   <p class="card__content-newsletter">Deixe o seu e-mail para você receber as novidades...
   </p>
   <div class="card__form-newsletter">
     <input placeholder="E-mail" name="entry.2146642346" type="text">
     <button class="sign-up">Inscreva-se</button>
   </div>
   <br>
  </form>
   `}}async function R(a){const t=a.Data.dadosP.filter(e=>e.categoria===a.attributes.id);return{html:()=>`
      
        <div class="home-img-cards">     
            <div  class="home-img-colob-scroll">
          ${Object.entries(t).map(([s,l])=>`
      <img data-href="/#/produto/#${l.id.split(" ").join("").toLowerCase()}"
           id="${l.id}"
           class="home-img-card"
           img-src="${l.img}"
           alt="${l.nome}" width="${a.attributes.width}" height="${a.attributes.height}" alt="Produtos">
          `).join("")}
         </div>
        </div>
    
    `}}async function H(a){const t=a.Data.dadosP.filter(e=>e.categoria===a.attributes.id).slice(0,4);return{html:()=>`
    <div class="perfu-container">
      <div class="perfu-container-cor">
      <div class="perfu-container-conteudo">
        <h2>${a.content}</h2>
        ${t.map(e=>`     
        <a href="${a.attributes.a}" >
        <img style="width:${a.attributes.useWidth}; height:${a.attributes.useHeight}  " class="comp-perfoleos-tamanho" id="${e.id}" img-src="${e.img}" alt="Dados Oléos">
          </a>
        `).join("")}
      </div>
      <div>
    </div>
  `}}function M(){return{html:()=>`
  
         <div id="tres-pontos" key="id">                
           <span></span>
           <span></span>
           <span></span>         
        </div>`}}async function U(){return{html:()=>`
    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=553171685900&text=OI" target="_blank">
    <img img-src="/img/icones/whats.png" width="40px" height="40px" alt="whatsapp">
   </a>
`}}const V={"comp-menu":_,"comp-slider":P,"comps-colaborador":P,"comp-newsletter":B,"comp-produtos":R,"comp-perfoleos":H,"comp-button-lateral":M,"comp-whatsapp":U};document.querySelector("#app");document.querySelector("style");async function z(a={}){const{url:t,method:n,useType:e,cacheDuration:o}=a,s=`${t}_${n}_${e}`,l=localStorage.getItem(s);if(l){const{data:u,timestamp:d}=JSON.parse(l),i=new Date().getTime(),r=o*24*60*60*1e3;if(i-d<r)return u;localStorage.removeItem(s)}try{const u=await fetch(t,n);let d;e==="text"?d=await u.text():e==="json"&&(d=await u.json());const i={data:d,timestamp:new Date().getTime()};return localStorage.setItem(s,JSON.stringify(i)),d}catch{return null}}function J(a,t,n){if(a==="getItem")return JSON.parse(window.localStorage.getItem(t));if(a==="setItem")window.localStorage.setItem(t,JSON.stringify(n));else if(a==="setItems"){const e=JSON.parse(localStorage.getItem(t)||"[]");e.push(n),localStorage.setItem(t,JSON.stringify(e))}}async function W(){async function a(){return new Promise((t,n)=>{if(navigator.geolocation)navigator.geolocation.getCurrentPosition(e=>{const o=e.coords.latitude,s=e.coords.longitude;t({latitude:o,longitude:s})},e=>{n(e)});else{const e=new Error("Geolocation is not supported by this browser.");n(e)}})}try{const{latitude:t,longitude:n}=await a();return[t,n]}catch(t){return console.log("Erro ao obter localização:",t.message),[null,null]}}async function Q(a,t){history.pushState(null,null,a),q(t)}async function G(a){try{const n=new TextEncoder().encode(a),e=await crypto.subtle.digest("SHA-256",n);return Array.from(new Uint8Array(e)).map(l=>l.toString(16).padStart(2,"0")).join("")}catch(t){throw new Error("Erro ao criptografar a senha: "+t)}}async function K(a,t){const o=(await(await fetch(a,{headers:{ct:t}})).text()).split(`
`),s=o[0].split(";");return o.slice(1).map(l=>l.split(";").reduce((u,d,i)=>{const r={};return r[s[i]]=d,{...u,...r}},{}))}function X(a,t){return[t.join(","),...a.map(n=>t.map(e=>n[e]||"").join(","))].join(`
`)}const Y=a=>{const t=document.querySelectorAll(a);if(t.length===0)return a;const n={addClass:e=>(t.forEach(o=>{o.classList.add(e)}),n),removeClass:e=>(t.forEach(o=>{o.classList.remove(e)}),n),text:e=>(t.forEach(o=>{o.textContent=e}),n),css:e=>(t.forEach(o=>{Object.assign(o.style,e)}),n),on:(e,o)=>(t.forEach(s=>{s.addEventListener(e,o)}),n),appendImage:e=>(t.forEach(o=>{const s=document.createElement("img");s.src=e,o.appendChild(s)}),n),hide:()=>(t.forEach(e=>{e.style.originalDisplay=e.style.display,e.style.display="none"}),n),show:()=>(t.forEach(e=>{e.style.display=e.style.originalDisplay||"",delete e.style.originalDisplay}),n),tag:()=>t[0],tags:()=>t};return n},q=async(a={},t={})=>{const n=document.querySelector("#app"),[e,o,s]=Object.values(a),l=async()=>{const p=document.getElementsByTagName("img"),g=new IntersectionObserver(function(v,w){v.forEach(function(h){if(h.isIntersecting){const m=h.target,c=m.getAttribute("img-src");m.setAttribute("src",c),m.removeAttribute("img-src"),w.unobserve(m)}})});Array.from(p).forEach(function(v){g.observe(v)})},u=()=>{const p=location.hash.replace("#","")||location.pathname;return p==="/"?Object.keys(e)[0]:p.split("#")[0].split("/").filter(Boolean).pop()};async function d(p={}){let g=[];const v=document.createElement("div");v.insertAdjacentHTML("beforeend",p.renderedHtml);const w=async(c,f)=>{const b=Array.from(c.getAttributeNames()).reduce((S,E)=>E.startsWith("data-")?S:{...S,[E]:c.getAttribute(E)},{}),x={reference:f,nameTag:c.tagName.toLowerCase(),attributes:b,parameter:Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),page:location.hash.replace("#","").match(/^\/(\w+)(\/)?/),content:c.textContent,Data:s,tag:c},C=c.tagName.toLowerCase();try{if(o.hasOwnProperty(C)){const{html:S,state:E}=await o[C](x),O=typeof S=="function"?S():await o[C]();c.innerHTML=O,typeof E=="function"&&g.push(E)}else throw new Error(`Componente não encontrado para a tag: ${C}`)}catch{}await h(c)},h=async c=>{const f=Array.from(c.querySelectorAll("*")).filter(b=>b.tagName.toLowerCase().match(/^comp-/i));for(let b=0;b<f.length;b++){const x=f[b];await w(x)}},m=Array.from(v.querySelectorAll("*")).filter(c=>c.tagName.toLowerCase().match(/^comp-/i));for(let c=0;c<m.length;c++){const f=m[c];await w(f)}n.innerHTML="",n.appendChild(v),g.forEach(c=>c()),typeof p.renderState=="function"&&p.renderState(),l()}async function i(){const p=u(),g=p&&e[p]?p:"erro";if(g!=="erro"){const v={Pages:e,Data:s},{html:w,state:h}=await e[g](v),m=typeof w=="function"?w():await e[g]();d({renderedHtml:m,renderState:typeof h=="function"?h:void 0})}}function r(p,g){let v;return function(...w){clearTimeout(v),v=setTimeout(()=>{p.apply(this,w)},g)}}function y(p){if(p.target.matches("[data-href]")){p.preventDefault();const g=p.target.dataset.href;history.pushState(null,null,g),i()}}window.addEventListener("popstate",i),document.body.addEventListener("click",r(y,200)),i()},L=Object.freeze(Object.defineProperty({__proto__:null,$:Y,Router:q,useApi:z,useCSVToJSON:K,useId:G,useJSONToCSV:X,useLocalStorage:J,useLocation:W,useNavigate:Q},Symbol.toStringTag,{value:"Module"}));Object.keys(L).forEach(a=>{typeof L[a]=="function"&&(window[a]=L[a])});async function Z(){const a=await j(),t={path:location.origin};Router({pages:F,components:V,data:a},t)}Z();
