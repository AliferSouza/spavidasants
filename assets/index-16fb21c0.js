(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();async function T(a){document.title="HOME";const e=JSON.parse(localStorage.getItem("@escolhaUser"))||[];return{html:()=>`       
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

       <div class="activeMenu" >
        <svg data-href="/#/shop/perfumaria/#carrinho"  width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_15_35)">
          <rect width="24" height="24" fill=""/>
          <path d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998" stroke="#000000" stroke-linejoin="round"/>
          <path d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="10" cy="20" r="1" stroke="#000000" stroke-linejoin="round"/>
          <circle cx="17.5" cy="20" r="1" stroke="#000000" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_15_35">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <span>${e.length}</span>
      </div>

    
      
     
 
      
      
        `,state:()=>{const n=document.querySelector("#tres-pontos"),s=document.querySelector("#comp-video");if(e.length===0){var u=document.querySelector(".activeMenu");u&&(u.style.display="none")}let p=!1;n.addEventListener("click",()=>{if(p)s.innerHTML="",p=!1;else{const i=`                    
                        <video  autoplay
                                id="videoPalyPause" 
                                width="90%"  
                                height="210">
                          <source src="/video/spa.mp4" type="video/mp4"  >    
                       </video>`;s.innerHTML=i,p=!0}});function l(){const i=$("#tres-pontos");let r;window.addEventListener("scroll",function(){clearTimeout(r),i.show(),r=setTimeout(function(){i.hide()},4e3)})}l()}}}function I(a){const e=location.hash.split("/").pop().replace("#",""),o=a.Data.dadosC.find(s=>s.id===e);return document.title=e,{html:()=>`
       <comp-menu></comp-menu>
    
             <div id="perfil">
                 
                    <div id="perfil-img">    
                        <img img-src="${o.img}" alt="Imagem do colaborado ${o.nome}">                           
                        ${o.nome}
                        <a id="info" href="${o.insta}" target="_blank">@Instagram</a>
                        ${o.funcao}
                                 
                        <h5 id="info">${o.descricao} </h5>
                        ${o.nome==="Viviane"?"Atendimento exclusivo para terapia.":""}
                        
                        <label class="selectPerfil" for="frutas">Escolha o horário:</label>
                        <select id="frutas" name="frutas">
                        ${o.nome==="Alifer"?`
                             <option value="quinza">15:00</option>
                             <option value="quartoze">16:00</option> 
                             <option value="quartoze">18:00</option>`:`
                            <option value="nove">9:00</option>
                            <option value="treze">13:00</option>
                            <option value="quinza">15:00</option>
                            <option value="quartoze">16:00</option>`}
                         
                        </select>

                        <div class="buttonperfilCon" class="buttonperfil">
                        <button url="${o.insta}" class="buttonperfil">
                        <span class="buttonperfil" id="whats">Entre em contato</span>		
                        </button>                                                    
                    </div>   
                    </div>   
        
            
                
              </div>
    
        `,state:()=>{const s=document.querySelector(".buttonperfil"),u=document.querySelector("#frutas");let p;s.addEventListener("click",l=>{l.preventDefault();const i=u.value;i==="nove"?p="9:00":i==="treze"?p="13:00":i==="quinza"?p="15:00":i==="quartoze"&&(p="16:00");const r=`https://api.whatsapp.com/send?phone=553171685900&text=
           Colaborador:${o.nome}
           Horario:${p} `;window.open(r,"_blank")})}}}async function A(a){document.title="PRODUTO",window.scroll(0,0);const e=location.hash.split("/").pop().replace("#",""),o=a.Data.dadosP.find(s=>s.id===e);return{state:()=>{const s=document.querySelector("#SpanCouter"),u=document.querySelector("#vDoP"),p=document.querySelector("#whats2"),l=parseFloat(u.innerHTML);let i=0,r;$(".infoCotainerButtons").on("click",y=>{if(y.target.className==="infoCotainerButtonsmais"&&(i++,s.innerHTML=i,r=i*l,p.innerHTML=r),y.target.className==="infoCotainerButtonsmenos"&&i>0&&(i--,s.innerHTML=i,r=i*l,p.innerHTML=r),y.target.id==="whats"){const d=`https://api.whatsapp.com/send?phone=553171685900&text= Nome:${o.categoria} Quantidade:${i}, Valor:${r} `;window.open(d,"_blank")}})},html:()=>`
        <comp-menu></comp-menu>
		<div class="cards">   
            <article class="information">               
                 <img class="p-img" img-src="${o.img}" alt="Produto ${o.nome}">
                
                 <div  class="informationDes">
                    <div>
                    <h3 class="info">${o.nome}</h3>
                    <h4 class="info" id="valorDoProduto">R$:<span id="vDoP" >${o.valor}<span> </h4>
                    <p class="info">${o.info}</p>
                    </div>
                 </div>
                
             

            </article> 	

            <article class="information2" >                  
                <h3 class="title">${o.nome}</h3>
                 <div class="information21">A massagem individual sai pelo valor de ${o.valor} reais </div>       
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
    

	   `}}async function k(a){let e;if(location.hash.split("#").pop()==="carrinho")e=JSON.parse(localStorage.getItem("@escolhaUser"))||[];else{const n=a.Data.dadosP.filter(s=>s.categoria===location.hash.split("#").pop());e=a.Data.dadosP.filter(s=>s.categoria==="oleos")||n}return{state:()=>{const n=document.querySelectorAll(".imgOleos");n.forEach(r=>{r.addEventListener("click",()=>{s(r)})});function s(r){document.fullscreenElement?p():u(r)}function u(r){r.requestFullscreen?r.requestFullscreen():r.mozRequestFullScreen?r.mozRequestFullScreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.msRequestFullscreen&&r.msRequestFullscreen()}function p(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||n.forEach(r=>{r.style.width="140px"})});const l=JSON.parse(localStorage.getItem("@escolhaUser"))||[];document.querySelectorAll(".shop-container-card").forEach(r=>{const y=l.find(f=>f.id===r.id);let d=0;y&&y.quantidade&&(d=y.quantidade);const g=r.querySelector("#mais"),v=r.querySelector("#menos"),w=r.querySelector("#counter");w.textContent=d,g.addEventListener("click",f=>{d++,w.textContent=d;const m=e.find(h=>h.id===f.target.parentNode.parentNode.id),c=l.find(h=>h.id===m.id);c?(c.valor=parseFloat(c.valor)+parseFloat(m.valor),c.quantidade=(c.quantidade||0)+1):(m.quantidade=1,l.push(m)),localStorage.setItem("@escolhaUser",JSON.stringify(l)),i()}),v.addEventListener("click",f=>{d>0&&(d--,w.textContent=d);const m=e.find(h=>h.id===f.target.parentNode.parentNode.id),c=l.find(h=>h.id===m.id);if(c&&(c.valor=parseFloat(c.valor)-parseFloat(m.valor),c.quantidade=(c.quantidade||0)-1,c.quantidade<=0)){const h=l.indexOf(c);l.splice(h,1)}localStorage.setItem("@escolhaUser",JSON.stringify(l)),i()})});function i(){let r="",y=0,d=0;return l.forEach(f=>{const m=f.nome,c=f.valor,h=f.quantidade;d+=parseFloat(h),y+=parseFloat(c),r+=`Nome: ${m}
Quantidade: ${h}
Valor: R$ ${c}

`}),r+=`Valor Total: R$ ${y.toFixed(2)}
`,document.querySelector("#QTVT").innerHTML=`QT: ${d} VT: ${y}`,`https://wa.me/3171253590?text=${encodeURIComponent(r)}`}i(),document.querySelector("#valor").addEventListener("click",r=>{r.target.getAttribute("key")==="pegarValorEPassarParaWhatsapp"&&window.open(i(),"_blank")})},html:()=>`       
        <comp-menu></comp-menu>
        <div class="container-shop">
            <div class="container-shop-cards">
                ${e.map((n,s)=>`
                    <div class="shop-container-card" id="${n.id}">           
                        <img  class="imgOleos" img-src="${n.img}" width="140" alt="Carrinho e produtos">                
                        <h4>${n.nome}</h4>
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
        
    `}}async function N(){return{html:()=>`       
        <comp-menu></comp-menu>
        <div class="Loja">       
        <comp-perfoleos a="/#/shop/perfumaria/#oleos" width="80px"  height="80px"  id="oleos"></comp-perfoleos>  
        <comp-perfoleos a="/#/shop/perfumaria/#oleos" width="80px"  height="80px"  id="oleos"></comp-perfoleos>  
       </div>
        
    `}}const D={home:T,perfil:I,produto:A,shop:N,perfumaria:k};async function _(){const a=await useCSVToJSON("/data/massagens/massagens.csv");return{dadosC:await useCSVToJSON("/data/colaboradores/colaboradores.csv"),dadosP:a}}async function F(a){return{html:()=>`   
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
    </div>`,state:()=>{let t=0;p(t);const n=document.getElementById("prevBtn"),s=document.getElementById("nextBtn");n.addEventListener("click",function(){u(-1)}),s.addEventListener("click",function(){u(1)});function u(l){p(t+=l)}function p(l){const i=document.getElementsByClassName("mySlides");if(i.length!==0){t=(l+i.length)%i.length;for(let r=0;r<i.length;r++)i[r].style.display="none";i[t].style.display="block"}}}}}async function j(){return{html:()=>`
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
   `}}async function B(a){const e=a.Data.dadosP.filter(t=>t.categoria===a.attributes.id);return{html:()=>`
      
        <div class="home-img-cards">     
            <div  class="home-img-colob-scroll">
          ${Object.entries(e).map(([s,u])=>`
      <img data-href="/#/produto/#${u.id.split(" ").join("").toLowerCase()}"
           id="${u.id}"
           class="home-img-card"
           img-src="${u.img}"
           alt="${u.nome}" width="${a.attributes.width}" height="${a.attributes.height}" alt="Produtos">
          `).join("")}
         </div>
        </div>
    
    `}}async function H(a){const e=a.Data.dadosP.filter(t=>t.categoria===a.attributes.id).slice(0,4);return{html:()=>`
    <div class="perfu-container">
      <div class="perfu-container-cor">
      <div class="perfu-container-conteudo">
        <h2>${a.content}</h2>
        ${e.map(t=>`     
        <a href="${a.attributes.a}" >
        <img style="width:${a.attributes.useWidth}; height:${a.attributes.useHeight}  " class="comp-perfoleos-tamanho" id="${t.id}" img-src="${t.img}" alt="Dados Oléos">
          </a>
        `).join("")}
      </div>
      <div>
    </div>
  `}}function R(){return{html:()=>`
  
         <div id="tres-pontos" key="id">                
           <span></span>
           <span></span>
           <span></span>         
        </div>`}}async function M(){return{html:()=>`
    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=553171685900&text=OI" target="_blank">
    <img img-src="/img/icones/whats.png" width="40px" height="40px" alt="whatsapp">
   </a>
`}}const V={"comp-menu":F,"comp-slider":P,"comps-colaborador":P,"comp-newsletter":j,"comp-produtos":B,"comp-perfoleos":H,"comp-button-lateral":R,"comp-whatsapp":M};document.querySelector("#app");document.querySelector("style");async function z(a={}){const{url:e,method:o,useType:t,cacheDuration:n}=a,s=`${e}_${o}_${t}`,u=localStorage.getItem(s);if(u){const{data:p,timestamp:l}=JSON.parse(u),i=new Date().getTime(),r=n*24*60*60*1e3;if(i-l<r)return p;localStorage.removeItem(s)}try{const p=await fetch(e,o);let l;t==="text"?l=await p.text():t==="json"&&(l=await p.json());const i={data:l,timestamp:new Date().getTime()};return localStorage.setItem(s,JSON.stringify(i)),l}catch{return null}}function J(a,e,o){if(a==="getItem")return JSON.parse(window.localStorage.getItem(e));if(a==="setItem")window.localStorage.setItem(e,JSON.stringify(o));else if(a==="setItems"){const t=JSON.parse(localStorage.getItem(e)||"[]");t.push(o),localStorage.setItem(e,JSON.stringify(t))}}async function U(){async function a(){return new Promise((e,o)=>{if(navigator.geolocation)navigator.geolocation.getCurrentPosition(t=>{const n=t.coords.latitude,s=t.coords.longitude;e({latitude:n,longitude:s})},t=>{o(t)});else{const t=new Error("Geolocation is not supported by this browser.");o(t)}})}try{const{latitude:e,longitude:o}=await a();return[e,o]}catch(e){return console.log("Erro ao obter localização:",e.message),[null,null]}}async function W(a,e){history.pushState(null,null,a),O(e)}async function Q(a){try{const o=new TextEncoder().encode(a),t=await crypto.subtle.digest("SHA-256",o);return Array.from(new Uint8Array(t)).map(u=>u.toString(16).padStart(2,"0")).join("")}catch(e){throw new Error("Erro ao criptografar a senha: "+e)}}async function G(a,e){const n=(await(await fetch(a,{headers:{ct:e}})).text()).split(`
`),s=n[0].split(";");return n.slice(1).map(u=>u.split(";").reduce((p,l,i)=>{const r={};return r[s[i]]=l,{...p,...r}},{}))}function K(a,e){return[e.join(","),...a.map(o=>e.map(t=>o[t]||"").join(","))].join(`
`)}const X=a=>{const e=document.querySelectorAll(a);if(e.length===0)return a;const o={addClass:t=>(e.forEach(n=>{n.classList.add(t)}),o),removeClass:t=>(e.forEach(n=>{n.classList.remove(t)}),o),text:t=>(e.forEach(n=>{n.textContent=t}),o),css:t=>(e.forEach(n=>{Object.assign(n.style,t)}),o),on:(t,n)=>(e.forEach(s=>{s.addEventListener(t,n)}),o),appendImage:t=>(e.forEach(n=>{const s=document.createElement("img");s.src=t,n.appendChild(s)}),o),hide:()=>(e.forEach(t=>{t.style.originalDisplay=t.style.display,t.style.display="none"}),o),show:()=>(e.forEach(t=>{t.style.display=t.style.originalDisplay||"",delete t.style.originalDisplay}),o),tag:()=>e[0],tags:()=>e};return o},O=async(a={},e={})=>{const o=document.querySelector("#app"),[t,n,s]=Object.values(a),u=async()=>{const d=document.getElementsByTagName("img"),g=new IntersectionObserver(function(v,w){v.forEach(function(f){if(f.isIntersecting){const m=f.target,c=m.getAttribute("img-src");m.setAttribute("src",c),m.removeAttribute("img-src"),w.unobserve(m)}})});Array.from(d).forEach(function(v){g.observe(v)})},p=()=>{const d=location.hash.replace("#","")||location.pathname;return d==="/"?Object.keys(t)[0]:d.split("#")[0].split("/").filter(Boolean).pop()};async function l(d={}){let g=[];const v=document.createElement("div");v.insertAdjacentHTML("beforeend",d.renderedHtml);const w=async(c,h)=>{const b=Array.from(c.getAttributeNames()).reduce((S,E)=>E.startsWith("data-")?S:{...S,[E]:c.getAttribute(E)},{}),x={reference:h,nameTag:c.tagName.toLowerCase(),attributes:b,parameter:Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),page:location.hash.replace("#","").match(/^\/(\w+)(\/)?/),content:c.textContent,Data:s,tag:c},C=c.tagName.toLowerCase();try{if(n.hasOwnProperty(C)){const{html:S,state:E}=await n[C](x),q=typeof S=="function"?S():await n[C]();c.innerHTML=q,typeof E=="function"&&g.push(E)}else throw new Error(`Componente não encontrado para a tag: ${C}`)}catch{}await f(c)},f=async c=>{const h=Array.from(c.querySelectorAll("*")).filter(b=>b.tagName.toLowerCase().match(/^comp-/i));for(let b=0;b<h.length;b++){const x=h[b];await w(x)}},m=Array.from(v.querySelectorAll("*")).filter(c=>c.tagName.toLowerCase().match(/^comp-/i));for(let c=0;c<m.length;c++){const h=m[c];await w(h)}o.innerHTML="",o.appendChild(v),g.forEach(c=>c()),typeof d.renderState=="function"&&d.renderState(),u()}async function i(){const d=p(),g=d&&t[d]?d:"erro";if(g!=="erro"){const v={Pages:t,Data:s},{html:w,state:f}=await t[g](v),m=typeof w=="function"?w():await t[g]();l({renderedHtml:m,renderState:typeof f=="function"?f:void 0})}}function r(d,g){let v;return function(...w){clearTimeout(v),v=setTimeout(()=>{d.apply(this,w)},g)}}function y(d){if(d.target.matches("[data-href]")){d.preventDefault();const g=d.target.dataset.href;history.pushState(null,null,g),i()}}window.addEventListener("popstate",i),document.body.addEventListener("click",r(y,200)),i()},L=Object.freeze(Object.defineProperty({__proto__:null,$:X,Router:O,useApi:z,useCSVToJSON:G,useId:Q,useJSONToCSV:K,useLocalStorage:J,useLocation:U,useNavigate:W},Symbol.toStringTag,{value:"Module"}));Object.keys(L).forEach(a=>{typeof L[a]=="function"&&(window[a]=L[a])});async function Y(){const a=await _(),e={path:location.origin};Router({pages:D,components:V,data:a},e)}Y();
