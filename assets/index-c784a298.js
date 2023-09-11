(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(s){if(s.ep)return;s.ep=!0;const e=a(s);fetch(s.href,e)}})();async function P(n){return document.title="HOME",{html:()=>`       
       <comp-menu></comp-menu>
       <comp-slider></comp-slider>
       <comp-colaboradores id="oliveira"></comp-colaboradores>    
        <!-- <h1>PROMOÇÃO</h1>
     <comp-produtos id="promocao"> </comp-produtos> -->
       <h1>MASSAGENS</h1>
       <comp-produtos id="massagens"></comp-produtos>
        <h1>PACOTES</h1>
       <comp-produtos id="estetica"></comp-produtos>
       <comp-perfoleos a="/#/shop/perfumaria/#oleos"  id="oleos">ÓLEOS ESSENCIAIS</comp-perfoleos>
       <comp-newsletter></comp-newsletter>
       <comp-whatsapp class="whatsapp"></comp-whatsapp>
       <comp-mascoteia></comp-mascoteia>

       <comp-mascote-ia id="comp-mascote-ia" style="display: none"></comp-mascote-ia>
       <div id="receberIa"></div>    

  
       <comp-button-lateral id="comp-flutuante"> </comp-button-lateral>
       <div id="comp-video"></div>

    
      
     
 
      
      
        `,state:()=>{const t=document.querySelector("#tres-pontos"),s=document.querySelector("#comp-video");let e=!1;t.addEventListener("click",()=>{if(e)s.innerHTML="",e=!1;else{const i=`                    
                        <video  autoplay
                                id="videoPalyPause" 
                                width="90%"  
                                height="210">
                          <source src="/video/spa.mp4" type="video/mp4"  >    
                       </video>`;s.innerHTML=i,e=!0}});const c=$(".SairIa"),r=$("#comp-mascote-ia").tag();c.on("click",()=>{r.style.display=r.style.display==="none"?"block":"none"});function l(){const i=$("#tres-pontos");let p;window.addEventListener("scroll",function(){clearTimeout(p),i.show(),p=setTimeout(function(){i.hide()},4e3)})}l()}}}function I(n){const o=location.hash.split("/").pop().replace("#",""),a=n.Data.dadosC.find(e=>e.id===o);return document.title=o,{html:()=>`
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
    
        `,state:()=>{const e=document.querySelector(".buttonperfil"),c=document.querySelector("#frutas");let r;e.addEventListener("click",l=>{l.preventDefault();const i=c.value;i==="nove"?r="9:00":i==="treze"?r="13:00":i==="quinza"?r="15:00":i==="quartoze"&&(r="16:00");const p=`https://api.whatsapp.com/send?phone=553171685900&text=
           Colaborador:${a.nome}
           Horario:${r} `;window.open(p,"_blank")})}}}async function O(n){document.title="PRODUTO",window.scroll(0,0);const o=location.hash.split("/").pop().replace("#",""),a=n.Data.dadosP.find(e=>e.id===o);return{state:()=>{const e=document.querySelector("#SpanCouter"),c=document.querySelector("#valorDoProduto"),r=document.querySelector("#whats2"),l=parseFloat(c.innerHTML);let i=0,p;$(".infoCotainerButtons").on("click",y=>{if(y.target.className==="infoCotainerButtonsmais"&&(i++,e.innerHTML=i,p=i*l,r.innerHTML=p),y.target.className==="infoCotainerButtonsmenos"&&i>0&&(i--,e.innerHTML=i,p=i*l,r.innerHTML=p),y.target.id==="whats"){const u=`https://api.whatsapp.com/send?phone=553171685900&text= Nome:${a.categoria} Quantidade:${i}, Valor:${p} `;window.open(u,"_blank")}})},html:()=>`
        <comp-menu></comp-menu>
		<div class="cards">   
            <article class="information">               
                 <img class="p-img" img-src="${a.img}">
                
                 <div  class="informationDes">
                    <div>
                    <h3 class="info">${a.nome}</h3>
                    <h4 class="info" id="valorDoProduto">${a.valor}</h4>
                    <p class="info">${a.info}</p>
                    </div>
                 </div>
                
             

            </article> 	

            <article class="information2" ${a.categoria==="estetica"||a.categoria==="promocao"?'style="display: none;"':""}>                  
                <h3 class="title">${a.nome}</h3>
                 <div class="information21">A massagem individual sai pelo valor de ${a.valor} reais </div>       
                 <div class="information22">O pacote com 4 sessões sai com 15% de desconto.</div>          
            </article> 	  
            

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
            
        </div>
    

	   `}}async function q(n){return{state:()=>{const t=document.getElementById("Região"),s=document.getElementById("select-regiao"),e=`
        <select class="opcoes" id="localSuperior">
            <option value="opcao1">Pescoço</option>
            <option value="opcao2">Ombros</option>   
            <option value="opcao3">Costas</option> 
            <option value="opcao4">Braços</option> 
        </select>
        `;s.innerHTML=e,t.addEventListener("change",c=>{const r=t.value;r==="opcao1"?s.innerHTML=e:r==="opcao2"&&(s.innerHTML=`
            <select class="opcoes" id="localInferior">
                <option value="opcao1">Pernas</option>
                <option value="opcao2">Glúteos</option>   
                <option value="opcao3">Pés</option> 
            </select>
            `)})},html:()=>`       
       <comp-menu></comp-menu>
       <div class="per-container">
        <h3>Personaliza seu pacote</h3>

        <select class="opcoes" id="massagem">
        <option value="opcao1">Massagem terapêutica</option>
        <option value="opcao2">Massagem Modeladora</option>
        <option value="opcao3">Massagem Despotiva</option>
        </select>

        <select class="opcoes" id="Região">
        <option value="opcao1"selected>Região Superior</option>
        <option value="opcao2">Região inferior</option>   
        </select>

        <div class="select-regiao" id="select-regiao"></div>

      
        `}}async function A(n){const o=n.Data.dadosP.filter(e=>e.categoria===location.hash.split("#").pop()),a=n.Data.dadosP.filter(e=>e.categoria==="oleos")||o;return{state:()=>{const e=JSON.parse(localStorage.getItem("@escolhaUser"))||[];document.querySelectorAll(".perfumaria-container-card").forEach(r=>{const l=e.find(m=>m.id===r.id);let i=0;l&&l.quantidade&&(i=l.quantidade);const p=r.querySelector("#mais"),y=r.querySelector("#menos"),u=r.querySelector("#counter");u.textContent=i,p.addEventListener("click",m=>{i++,u.textContent=i;const f=o.find(g=>g.id===m.target.parentNode.parentNode.id),d=e.find(g=>g.id===f.id);d?(d.valor=parseFloat(d.valor)+parseFloat(f.valor),d.quantidade=(d.quantidade||0)+1):(f.quantidade=1,e.push(f)),localStorage.setItem("@escolhaUser",JSON.stringify(e)),c()}),y.addEventListener("click",m=>{i>0&&(i--,u.textContent=i);const f=o.find(g=>g.id===m.target.parentNode.parentNode.id),d=e.find(g=>g.id===f.id);if(d&&(d.valor=parseFloat(d.valor)-parseFloat(f.valor),d.quantidade=(d.quantidade||0)-1,d.quantidade<=0)){const g=e.indexOf(d);e.splice(g,1)}localStorage.setItem("@escolhaUser",JSON.stringify(e)),c()})});function c(){let r="",l=0,i=0;return e.forEach(m=>{const f=m.nome,d=m.valor,g=m.quantidade;i+=parseFloat(g),l+=parseFloat(d),r+=`Nome: ${f}
Quantidade: ${g}
Valor: R$ ${d}

`}),r+=`Valor Total: R$ ${l.toFixed(2)}
`,document.querySelector("#QTVT").innerHTML=`QT: ${i} VT: ${l}`,`https://wa.me/3171253590?text=${encodeURIComponent(r)}`}c(),document.querySelector("#valor").addEventListener("click",r=>{r.target.getAttribute("key")==="pegarValorEPassarParaWhatsapp"&&window.open(c(),"_blank")})},html:()=>`       
        <comp-menu></comp-menu>
        <div class="perfumaria-container">
            <div class="perfumaria-container-cards">
                ${a.map((e,c)=>`
                    <div class="perfumaria-container-card" id="${e.id}">           
                        <img img-src="${e.img}" width="150">
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
        
    `}}async function D(){return{html:()=>`       
        <comp-menu></comp-menu>
        <div class="perfumaria-container">       
        <comp-perfoleos a="/#/shop/perfumaria/#oleos" width="80px"  height="80px"  id="oleos"></comp-perfoleos>  
    </div>
        
    `}}const N={home:P,perfil:I,produto:O,personalizado:q,shop:D,perfumaria:A};async function B(n){return n.tag.addEventListener("click",t=>{console.log(t.target)}),{html:()=>`   
    <nav id="${n.attributes.id}"> 
    <label class="logo"> <img data-href="/#/home/" img-src="/img/logo/logo22.png" width="70px" height="70px" alt="Logo"></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>
  
    <ul>
         <li><a class="active" data-href="/#/home/">Início</a></li> 
         <li><a class="active" data-href="/#/personalizado/">personalizado</a></li> 
         <li><a class="active" data-href="/#/shop/">Shop</a></li> 
    </ul>

  </nav>


  `,state:()=>{}}}function M(n){return{html:()=>`
    <div class="slideshow-container">
      <button class="prev" id="prevBtn">&#10094;</button>
      <img class="mySlides" img-src="/img/slide/banner.png">
      <img class="mySlides"img-src="/img/slide/bannerr.png">
      <img class="mySlides" img-src="/img/slide/bannerrr.png">
      <button class="next" id="nextBtn">&#10095;</button>      
    </div>`,state:()=>{let t=0;r(t);const s=document.getElementById("prevBtn"),e=document.getElementById("nextBtn");s.addEventListener("click",function(){c(-1)}),e.addEventListener("click",function(){c(1)});function c(l){r(t+=l)}function r(l){const i=document.getElementsByClassName("mySlides");if(i.length!==0){t=(l+i.length)%i.length;for(let p=0;p<i.length;p++)i[p].style.display="none";i[t].style.display="block"}}}}}async function k(n){return{html:()=>`
      <div class="home-cards-container">     
        <div class="home-img-colaboradores">
          ${n.Data.dadosC.map(t=>`      
                <a href="/#/perfil/#${t.id}">
                  <img img-src="${t.img}"  id="colaborador-${t.id}" src="" width="50px" height="50px" alt="Dados Usuários">
                </a>
         
            `).join("")}
        </div>
      </div>
    `,state:()=>{}}}async function _(n){const o=n.Data.dadosP.filter(t=>t.categoria===n.attributes.id);return{html:()=>`
      
        <div class="home-img-cards">      
          <div  class="home-img-colob-scroll">
          ${Object.entries(o).map(([e,c])=>`
      <img data-href="/#/produto/#${c.id.split(" ").join("").toLowerCase()}"
           id="${c.id}"
           class="home-img-card"
           img-src="${c.img}"
           alt="${c.nome}" width="150px" height="250px" alt="Produtos">
          `).join("")}
         </div>
        </div>
    
    `}}async function j(){return{html:()=>`
    <form class="card-newsletter" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScjalDXW7rDe411G6pGQ3ITXVuK4UxBRoATRGMECWwDiMA_hw/formResponse">
   <span class="card__title-newsletter">Escreva-se</span>
   <p class="card__content-newsletter">Deixe o seu e-mail para você receber as novidades...
   </p>
   <div class="card__form-newsletter">
     <input placeholder="E-mail" name="entry.2146642346" type="text">
     <button class="sign-up">Escrever-se</button>
   </div>
   <br>
  </form>
   `}}async function H(){return{html:()=>`
    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=553171685900&text=OI" target="_blank">
    <img img-src="/img/icones/whats.png" width="40px" height="40px" alt="whatsapp">
   </a>
`}}async function R(){return{html:()=>`  
      <comp-menu> </comp-menu>
      <div class="containerbatepapo">      
       <div id="bate-papo">
        <img img-src="/img/icones/mascote.png" width="40">
        <h1>Perguntas e Respostas</h1>     
        </div>
        <label class="ia-label" for="question">Digite sua pergunta:</label>
        <input type="text" id="question">
        <button id="submitBtn">Enviar</button>
        <div class="output">
          <p id="response"></p>
        </div>
      </div> `}}async function V(n){return{html:()=>`  
    
      <img class="SairIa" img-src="/img/icones/mascote.png"  alt="Mascote"  width="40px" height="50px">
   
 `}}async function z(n){const o=n.Data.dadosP.filter(t=>t.categoria===n.attributes.id);return{html:()=>`
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
  `}}function J(){return{html:()=>`
  
         <div id="tres-pontos" key="id">                
           <span></span>
           <span></span>
           <span></span>         
        </div>`}}const U={"comp-menu":B,"comp-slider":M,"comp-colaboradores":k,"comp-produtos":_,"comp-newsletter":j,"comp-whatsapp":H,"comp-mascoteia":V,"comp-mascote-ia":R,"comp-perfoleos":z,"comp-button-lateral":J};async function W(){const n=await useCSVToJSON("/data/massagens/massagens.csv");return{dadosC:await useCSVToJSON("/data/colaboradores/colaboradores.csv"),dadosP:n}}document.querySelector("#app");document.querySelector("style");async function F(n={}){const{url:o,method:a,useType:t,cacheDuration:s}=n,e=`${o}_${a}_${t}`,c=localStorage.getItem(e);if(c){const{data:r,timestamp:l}=JSON.parse(c),i=new Date().getTime(),p=s*24*60*60*1e3;if(i-l<p)return r;localStorage.removeItem(e)}try{const r=await fetch(o,a);let l;t==="text"?l=await r.text():t==="json"&&(l=await r.json());const i={data:l,timestamp:new Date().getTime()};return localStorage.setItem(e,JSON.stringify(i)),l}catch{return null}}function Q(n,o,a){if(n==="getItem")return JSON.parse(window.localStorage.getItem(o));if(n==="setItem")window.localStorage.setItem(o,JSON.stringify(a));else if(n==="setItems"){const t=JSON.parse(localStorage.getItem(o)||"[]");t.push(a),localStorage.setItem(o,JSON.stringify(t))}}async function G(){async function n(){return new Promise((o,a)=>{if(navigator.geolocation)navigator.geolocation.getCurrentPosition(t=>{const s=t.coords.latitude,e=t.coords.longitude;o({latitude:s,longitude:e})},t=>{a(t)});else{const t=new Error("Geolocation is not supported by this browser.");a(t)}})}try{const{latitude:o,longitude:a}=await n();return[o,a]}catch(o){return console.log("Erro ao obter localização:",o.message),[null,null]}}async function K(n,o){history.pushState(null,null,n),x(o)}async function X(n){try{const a=new TextEncoder().encode(n),t=await crypto.subtle.digest("SHA-256",a);return Array.from(new Uint8Array(t)).map(c=>c.toString(16).padStart(2,"0")).join("")}catch(o){throw new Error("Erro ao criptografar a senha: "+o)}}async function Y(n,o){const s=(await(await fetch(n,{headers:{ct:o}})).text()).split(`
`),e=s[0].split(";");return s.slice(1).map(c=>c.split(";").reduce((r,l,i)=>{const p={};return p[e[i]]=l,{...r,...p}},{}))}function Z(n,o){return[o.join(","),...n.map(a=>o.map(t=>a[t]||"").join(","))].join(`
`)}const tt=n=>{const o=document.querySelectorAll(n);if(o.length===0)return n;const a={addClass:t=>(o.forEach(s=>{s.classList.add(t)}),a),removeClass:t=>(o.forEach(s=>{s.classList.remove(t)}),a),text:t=>(o.forEach(s=>{s.textContent=t}),a),css:t=>(o.forEach(s=>{Object.assign(s.style,t)}),a),on:(t,s)=>(o.forEach(e=>{e.addEventListener(t,s)}),a),appendImage:t=>(o.forEach(s=>{const e=document.createElement("img");e.src=t,s.appendChild(e)}),a),hide:()=>(o.forEach(t=>{t.style.originalDisplay=t.style.display,t.style.display="none"}),a),show:()=>(o.forEach(t=>{t.style.display=t.style.originalDisplay||"",delete t.style.originalDisplay}),a),tag:()=>o[0],tags:()=>o};return a},x=async(n={},o={})=>{const a=document.querySelector("#app"),[t,s,e]=Object.values(n),c=async()=>{const u=document.getElementsByTagName("img"),m=new IntersectionObserver(function(f,d){f.forEach(function(g){if(g.isIntersecting){const v=g.target,h=v.getAttribute("img-src");v.setAttribute("src",h),v.removeAttribute("img-src"),d.unobserve(v)}})});Array.from(u).forEach(function(f){m.observe(f)})},r=()=>{const u=location.hash.replace("#","")||location.pathname;return u==="/"?Object.keys(t)[0]:u.split("#")[0].split("/").filter(Boolean).pop()};async function l(u={}){let m=[];const f=document.createElement("div");f.insertAdjacentHTML("beforeend",u.renderedHtml);const d=async(h,w)=>{const b=Array.from(h.getAttributeNames()).reduce((E,S)=>S.startsWith("data-")?E:{...E,[S]:h.getAttribute(S)},{}),C={reference:w,nameTag:h.tagName.toLowerCase(),attributes:b,parameter:Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),page:location.hash.replace("#","").match(/^\/(\w+)(\/)?/),content:h.textContent,Data:e,tag:h},L=h.tagName.toLowerCase();if(s.hasOwnProperty(L)){const{html:E,state:S}=await s[L](C);typeof E=="function"&&(h.innerHTML+=E()),typeof S=="function"&&m.push(S)}else throw new Error(`Componente não encontrado para a tag: ${L}`);await g(h)},g=async h=>{const w=Array.from(h.querySelectorAll("*")).filter(b=>b.tagName.toLowerCase().match(/^comp-/i));for(let b=0;b<w.length;b++){const C=w[b];await d(C)}},v=Array.from(f.querySelectorAll("*")).filter(h=>h.tagName.toLowerCase().match(/^comp-/i));for(let h=0;h<v.length;h++){const w=v[h];await d(w)}a.innerHTML="",a.innerHTML=f.innerHTML,m.forEach(h=>h()),typeof u.renderState=="function"&&u.renderState(),c()}async function i(){const u=r(),m=u&&t[u]?u:"erro";if(m!=="erro"){const f={Pages:t,Components:s,Data:e},{html:d,state:g}=await t[m](f),v=typeof d=="function"?d():await t[m]();l({renderedHtml:v,renderState:typeof g=="function"?g:void 0})}}function p(u,m){let f;return function(...d){clearTimeout(f),f=setTimeout(()=>{u.apply(this,d)},m)}}function y(u){if(u.target.matches("[data-href]")){u.preventDefault();const m=u.target.dataset.href;history.pushState(null,null,m),i()}}window.addEventListener("popstate",i),document.body.addEventListener("click",p(y,200)),i()},T=Object.freeze(Object.defineProperty({__proto__:null,$:tt,Router:x,useApi:F,useCSVToJSON:Y,useId:X,useJSONToCSV:Z,useLocalStorage:Q,useLocation:G,useNavigate:K},Symbol.toStringTag,{value:"Module"}));Object.keys(T).forEach(n=>{typeof T[n]=="function"&&(window[n]=T[n])});async function et(){const n=await W(),o={path:location.origin};Router({pages:N,components:U,data:n},o)}et();
