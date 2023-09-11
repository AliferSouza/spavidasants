(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(s){if(s.ep)return;s.ep=!0;const e=a(s);fetch(s.href,e)}})();async function T(n){return document.title="HOME",{html:()=>`       
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

    
      
     
 
      
      
        `,state:()=>{const t=document.querySelector("#tres-pontos"),s=document.querySelector("#comp-video");let e=!1;t.addEventListener("click",()=>{if(e)s.innerHTML="",e=!1;else{const i=`                    
                        <video  autoplay
                                id="videoPalyPause" 
                                width="90%"  
                                height="210">
                          <source src="/video/spa.mp4" type="video/mp4"  >    
                       </video>`;s.innerHTML=i,e=!0}});function c(){const i=$("#tres-pontos");let l;window.addEventListener("scroll",function(){clearTimeout(l),i.show(),l=setTimeout(function(){i.hide()},4e3)})}c()}}}function x(n){const o=location.hash.split("/").pop().replace("#",""),a=n.Data.dadosC.find(e=>e.id===o);return document.title=o,{html:()=>`
       <comp-menu></comp-menu>
    
             <div id="perfil">
                 
                    <div id="perfil-img">    
                        <img img-src="${a.img}">                           
                        ${a.nome}
                        <a id="info" href="${a.insta}" target="_blank">@Instagram</a>
                        ${a.funcao}
                                 
                        <h5 id="info">${a.descricao} </h5>
                        ${a.nome==="Viviane"?"Atendimento exclusivo para terapia.":""}
                        
                        <label class="selectPerfil" for="frutas">Escolha o horário:</label>
                        <select id="frutas" name="frutas">
                        ${a.nome==="Alifer"?`
                             <option value="quinza">15:00</option>
                             <option value="quartoze">16:00</option> 
                             <option value="quartoze">18:00</option>`:`
                            <option value="nove">9:00</option>
                            <option value="treze">13:00</option>
                            <option value="quinza">15:00</option>
                            <option value="quartoze">16:00</option>`}
                         
                        </select>

                        <div class="buttonperfilCon" class="buttonperfil">
                        <button url="${a.insta}" class="buttonperfil">
                        <span class="buttonperfil" id="whats">Entre em contato</span>		
                        </button>                                                    
                    </div>   
                    </div>   
        
            
                
              </div>
    
        `,state:()=>{const e=document.querySelector(".buttonperfil"),c=document.querySelector("#frutas");let i;e.addEventListener("click",l=>{l.preventDefault();const r=c.value;r==="nove"?i="9:00":r==="treze"?i="13:00":r==="quinza"?i="15:00":r==="quartoze"&&(i="16:00");const f=`https://api.whatsapp.com/send?phone=553171685900&text=
           Colaborador:${a.nome}
           Horario:${i} `;window.open(f,"_blank")})}}}async function I(n){document.title="PRODUTO",window.scroll(0,0);const o=location.hash.split("/").pop().replace("#",""),a=n.Data.dadosP.find(e=>e.id===o);return{state:()=>{const e=document.querySelector("#SpanCouter"),c=document.querySelector("#vDoP"),i=document.querySelector("#whats2"),l=parseFloat(c.innerHTML);let r=0,f;$(".infoCotainerButtons").on("click",y=>{if(y.target.className==="infoCotainerButtonsmais"&&(r++,e.innerHTML=r,f=r*l,i.innerHTML=f),y.target.className==="infoCotainerButtonsmenos"&&r>0&&(r--,e.innerHTML=r,f=r*l,i.innerHTML=f),y.target.id==="whats"){const u=`https://api.whatsapp.com/send?phone=553171685900&text= Nome:${a.categoria} Quantidade:${r}, Valor:${f} `;window.open(u,"_blank")}})},html:()=>`
        <comp-menu></comp-menu>
		<div class="cards">   
            <article class="information">               
                 <img class="p-img" img-src="${a.img}">
                
                 <div  class="informationDes">
                    <div>
                    <h3 class="info">${a.nome}</h3>
                    <h4 class="info" id="valorDoProduto">R$:<span id="vDoP" >${a.valor}<span> </h4>
                    <p class="info">${a.info}</p>
                    </div>
                 </div>
                
             

            </article> 	

            <article class="information2" >                  
                <h3 class="title">${a.nome}</h3>
                 <div class="information21">A massagem individual sai pelo valor de ${a.valor} reais </div>       
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
    

	   `}}async function q(n){const o=n.Data.dadosP.filter(e=>e.categoria===location.hash.split("#").pop()),a=n.Data.dadosP.filter(e=>e.categoria==="oleos")||o;return{state:()=>{const e=JSON.parse(localStorage.getItem("@escolhaUser"))||[];document.querySelectorAll(".perfumaria-container-card").forEach(i=>{const l=e.find(p=>p.id===i.id);let r=0;l&&l.quantidade&&(r=l.quantidade);const f=i.querySelector("#mais"),y=i.querySelector("#menos"),u=i.querySelector("#counter");u.textContent=r,f.addEventListener("click",p=>{r++,u.textContent=r;const m=o.find(g=>g.id===p.target.parentNode.parentNode.id),d=e.find(g=>g.id===m.id);d?(d.valor=parseFloat(d.valor)+parseFloat(m.valor),d.quantidade=(d.quantidade||0)+1):(m.quantidade=1,e.push(m)),localStorage.setItem("@escolhaUser",JSON.stringify(e)),c()}),y.addEventListener("click",p=>{r>0&&(r--,u.textContent=r);const m=o.find(g=>g.id===p.target.parentNode.parentNode.id),d=e.find(g=>g.id===m.id);if(d&&(d.valor=parseFloat(d.valor)-parseFloat(m.valor),d.quantidade=(d.quantidade||0)-1,d.quantidade<=0)){const g=e.indexOf(d);e.splice(g,1)}localStorage.setItem("@escolhaUser",JSON.stringify(e)),c()})});function c(){let i="",l=0,r=0;return e.forEach(p=>{const m=p.nome,d=p.valor,g=p.quantidade;r+=parseFloat(g),l+=parseFloat(d),i+=`Nome: ${m}
Quantidade: ${g}
Valor: R$ ${d}

`}),i+=`Valor Total: R$ ${l.toFixed(2)}
`,document.querySelector("#QTVT").innerHTML=`QT: ${r} VT: ${l}`,`https://wa.me/3171253590?text=${encodeURIComponent(i)}`}c(),document.querySelector("#valor").addEventListener("click",i=>{i.target.getAttribute("key")==="pegarValorEPassarParaWhatsapp"&&window.open(c(),"_blank")})},html:()=>`       
        <comp-menu></comp-menu>
        <div class="perfumaria-container">
            <div class="perfumaria-container-cards">
                ${a.map((e,c)=>`
                    <div class="perfumaria-container-card" id="${e.id}">           
                        <img  class="imgOleos" img-src="${e.img}" width="150">
                        <h4>${e.nome}</h4>
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
        <div class="perfumaria-container">       
        <comp-perfoleos a="/#/shop/perfumaria/#oleos" width="80px"  height="80px"  id="oleos"></comp-perfoleos>  
    </div>
        
    `}}const D={home:T,perfil:x,produto:I,shop:A,perfumaria:q};async function N(n){return{html:()=>`   
    <nav > 
    <label class="logo"> <img data-href="/#/home/" img-src="/img/logo/logo22.png" width="70px" height="70px" alt="Logo"></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>
  
    <ul>
         <li><a class="active" data-href="/#/home/">Início</a></li> 
         <li><a class="active" data-href="/#/shop/">Shop</a></li> 
    </ul>

  </nav>


  `}}function B(n){return{html:()=>`
    <div class="slideshow-container">
      <button class="prev" id="prevBtn">&#10094;</button>
      <img class="mySlides" img-src="/img/slide/banner.png">
      <img class="mySlides"img-src="/img/slide/bannerr.png">
      <img class="mySlides" img-src="/img/slide/bannerpais.jpeg">
      <button class="next" id="nextBtn">&#10095;</button>      
    </div>`,state:()=>{let t=0;i(t);const s=document.getElementById("prevBtn"),e=document.getElementById("nextBtn");s.addEventListener("click",function(){c(-1)}),e.addEventListener("click",function(){c(1)});function c(l){i(t+=l)}function i(l){const r=document.getElementsByClassName("mySlides");if(r.length!==0){t=(l+r.length)%r.length;for(let f=0;f<r.length;f++)r[f].style.display="none";r[t].style.display="block"}}}}}async function _(n){return{html:()=>`
      <div class="home-cards-container-colaborado">     
        <div class="home-img-colaboradores">
          ${n.Data.dadosC.map(a=>`      
                <a href="/#/perfil/#${a.id}">
                  <img img-src="${a.img}"  id="colaborador-${a.id}" src="" width="100%" height="100%" alt="Dados Usuários">
                </a>
         
            `).join("")}
        </div>
      </div>
    `}}async function j(n){const o=n.Data.dadosP.filter(t=>t.categoria===n.attributes.id);return{html:()=>`
      
        <div class="home-img-cards">     
            <div  class="home-img-colob-scroll">
          ${Object.entries(o).map(([e,c])=>`
      <img data-href="/#/produto/#${c.id.split(" ").join("").toLowerCase()}"
           id="${c.id}"
           class="home-img-card"
           img-src="${c.img}"
           alt="${c.nome}" width="${n.attributes.width}" height="${n.attributes.height}" alt="Produtos">
          `).join("")}
         </div>
        </div>
    
    `}}async function k(){return{html:()=>`
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
   `}}async function M(){return{html:()=>`
    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=553171685900&text=OI" target="_blank">
    <img img-src="/img/icones/whats.png" width="40px" height="40px" alt="whatsapp">
   </a>
`}}async function H(n){const o=n.Data.dadosP.filter(t=>t.categoria===n.attributes.id);return{html:()=>`
    <div class="perfu-container">
      <div class="perfu-container-cor">
      <div class="perfu-container-conteudo">
        <h2>${n.content}</h2>
        ${o.map(t=>`     
        <a href="${n.attributes.a}" >
        <img style="width:${n.attributes.useWidth}; height:${n.attributes.useHeight}  " class="comp-perfoleos-tamanho" id="${t.id}" img-src="${t.img}" alt="Dados Usuários">
          </a>
        `).join("")}
      </div>
      <div>
    </div>
  `}}function V(){return{html:()=>`
  
         <div id="tres-pontos" key="id">                
           <span></span>
           <span></span>
           <span></span>         
        </div>`}}const J={"comp-menu":N,"comp-slider":B,"comp-colaboradores":_,"comp-produtos":j,"comp-newsletter":k,"comp-whatsapp":M,"comp-perfoleos":H,"comp-button-lateral":V};async function R(){const n=await useCSVToJSON("/data/massagens/massagens.csv");return{dadosC:await useCSVToJSON("/data/colaboradores/colaboradores.csv"),dadosP:n}}document.querySelector("#app");document.querySelector("style");async function U(n={}){const{url:o,method:a,useType:t,cacheDuration:s}=n,e=`${o}_${a}_${t}`,c=localStorage.getItem(e);if(c){const{data:i,timestamp:l}=JSON.parse(c),r=new Date().getTime(),f=s*24*60*60*1e3;if(r-l<f)return i;localStorage.removeItem(e)}try{const i=await fetch(o,a);let l;t==="text"?l=await i.text():t==="json"&&(l=await i.json());const r={data:l,timestamp:new Date().getTime()};return localStorage.setItem(e,JSON.stringify(r)),l}catch{return null}}function z(n,o,a){if(n==="getItem")return JSON.parse(window.localStorage.getItem(o));if(n==="setItem")window.localStorage.setItem(o,JSON.stringify(a));else if(n==="setItems"){const t=JSON.parse(localStorage.getItem(o)||"[]");t.push(a),localStorage.setItem(o,JSON.stringify(t))}}async function W(){async function n(){return new Promise((o,a)=>{if(navigator.geolocation)navigator.geolocation.getCurrentPosition(t=>{const s=t.coords.latitude,e=t.coords.longitude;o({latitude:s,longitude:e})},t=>{a(t)});else{const t=new Error("Geolocation is not supported by this browser.");a(t)}})}try{const{latitude:o,longitude:a}=await n();return[o,a]}catch(o){return console.log("Erro ao obter localização:",o.message),[null,null]}}async function F(n,o){history.pushState(null,null,n),P(o)}async function Q(n){try{const a=new TextEncoder().encode(n),t=await crypto.subtle.digest("SHA-256",a);return Array.from(new Uint8Array(t)).map(c=>c.toString(16).padStart(2,"0")).join("")}catch(o){throw new Error("Erro ao criptografar a senha: "+o)}}async function G(n,o){const s=(await(await fetch(n,{headers:{ct:o}})).text()).split(`
`),e=s[0].split(";");return s.slice(1).map(c=>c.split(";").reduce((i,l,r)=>{const f={};return f[e[r]]=l,{...i,...f}},{}))}function K(n,o){return[o.join(","),...n.map(a=>o.map(t=>a[t]||"").join(","))].join(`
`)}const X=n=>{const o=document.querySelectorAll(n);if(o.length===0)return n;const a={addClass:t=>(o.forEach(s=>{s.classList.add(t)}),a),removeClass:t=>(o.forEach(s=>{s.classList.remove(t)}),a),text:t=>(o.forEach(s=>{s.textContent=t}),a),css:t=>(o.forEach(s=>{Object.assign(s.style,t)}),a),on:(t,s)=>(o.forEach(e=>{e.addEventListener(t,s)}),a),appendImage:t=>(o.forEach(s=>{const e=document.createElement("img");e.src=t,s.appendChild(e)}),a),hide:()=>(o.forEach(t=>{t.style.originalDisplay=t.style.display,t.style.display="none"}),a),show:()=>(o.forEach(t=>{t.style.display=t.style.originalDisplay||"",delete t.style.originalDisplay}),a),tag:()=>o[0],tags:()=>o};return a},P=async(n={},o={})=>{const a=document.querySelector("#app"),[t,s,e]=Object.values(n),c=async()=>{const u=document.getElementsByTagName("img"),p=new IntersectionObserver(function(m,d){m.forEach(function(g){if(g.isIntersecting){const v=g.target,h=v.getAttribute("img-src");v.setAttribute("src",h),v.removeAttribute("img-src"),d.unobserve(v)}})});Array.from(u).forEach(function(m){p.observe(m)})},i=()=>{const u=location.hash.replace("#","")||location.pathname;return u==="/"?Object.keys(t)[0]:u.split("#")[0].split("/").filter(Boolean).pop()};async function l(u={}){let p=[];const m=document.createElement("div");m.insertAdjacentHTML("beforeend",u.renderedHtml);const d=async(h,w)=>{const b=Array.from(h.getAttributeNames()).reduce((S,E)=>E.startsWith("data-")?S:{...S,[E]:h.getAttribute(E)},{}),C={reference:w,nameTag:h.tagName.toLowerCase(),attributes:b,parameter:Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),page:location.hash.replace("#","").match(/^\/(\w+)(\/)?/),content:h.textContent,Data:e,tag:h},L=h.tagName.toLowerCase();try{if(s.hasOwnProperty(L)){const{html:S,state:E}=await s[L](C);typeof S=="function"&&(h.innerHTML+=S()),typeof E=="function"&&p.push(E)}else throw new Error(`Componente não encontrado para a tag: ${L}`)}catch{}await g(h)},g=async h=>{const w=Array.from(h.querySelectorAll("*")).filter(b=>b.tagName.toLowerCase().match(/^comp-/i));for(let b=0;b<w.length;b++){const C=w[b];await d(C)}},v=Array.from(m.querySelectorAll("*")).filter(h=>h.tagName.toLowerCase().match(/^comp-/i));for(let h=0;h<v.length;h++){const w=v[h];await d(w)}a.innerHTML="",a.appendChild(m),p.forEach(h=>h()),typeof u.renderState=="function"&&u.renderState(),c()}async function r(){const u=i(),p=u&&t[u]?u:"erro";if(p!=="erro"){const m={Pages:t,Components:s,Data:e},{html:d,state:g}=await t[p](m),v=typeof d=="function"?d():await t[p]();l({renderedHtml:v,renderState:typeof g=="function"?g:void 0})}}function f(u,p){let m;return function(...d){clearTimeout(m),m=setTimeout(()=>{u.apply(this,d)},p)}}function y(u){if(u.target.matches("[data-href]")){u.preventDefault();const p=u.target.dataset.href;history.pushState(null,null,p),r()}}window.addEventListener("popstate",r),document.body.addEventListener("click",f(y,200)),r()},O=Object.freeze(Object.defineProperty({__proto__:null,$:X,Router:P,useApi:U,useCSVToJSON:G,useId:Q,useJSONToCSV:K,useLocalStorage:z,useLocation:W,useNavigate:F},Symbol.toStringTag,{value:"Module"}));Object.keys(O).forEach(n=>{typeof O[n]=="function"&&(window[n]=O[n])});async function Y(){const n=await R(),o={path:location.origin};Router({pages:D,components:J,data:n},o)}Y();
