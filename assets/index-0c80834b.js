(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();async function A(r){return document.title="HOME",{html:()=>`       
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

    
      
     
 
      
      
        `}}function N(r){const o=location.hash.split("/").pop().replace("#",""),n=r.Data.dadosC.find(e=>e.id===o);return document.title=o,{html:()=>`
       <comp-menu></comp-menu>
    
             <div id="perfil">
                 
                    <div id="perfil-img">    
                        <img img-src="${n.img}">                           
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
    
        `,state:()=>{const e=document.querySelector(".buttonperfil"),s=document.querySelector("#frutas");let l;e.addEventListener("click",d=>{d.preventDefault();const i=s.value;i==="nove"?l="9:00":i==="treze"?l="13:00":i==="quinza"?l="15:00":i==="quartoze"&&(l="16:00");const m=`https://api.whatsapp.com/send?phone=553171685900&text=
           Colaborador:${n.nome}
           Horario:${l} `;window.open(m,"_blank")})}}}async function I(r){document.title="PRODUTO",window.scroll(0,0);const o=location.hash.split("/").pop().replace("#",""),n=r.Data.dadosP.find(e=>e.id===o);return{state:()=>{const e=document.querySelector("#SpanCouter"),s=document.querySelector("#vDoP"),l=document.querySelector("#whats2"),d=parseFloat(s.innerHTML);let i=0,m;$(".infoCotainerButtons").on("click",c=>{if(c.target.className==="infoCotainerButtonsmais"&&(i++,e.innerHTML=i,m=i*d,l.innerHTML=m),c.target.className==="infoCotainerButtonsmenos"&&i>0&&(i--,e.innerHTML=i,m=i*d,l.innerHTML=m),c.target.id==="whats"){const p=`https://api.whatsapp.com/send?phone=553171685900&text= Nome:${n.categoria} Quantidade:${i}, Valor:${m} `;window.open(p,"_blank")}})},html:()=>`
        <comp-menu></comp-menu>
		<div class="cards">   
            <article class="information">               
                 <img class="p-img" img-src="${n.img}">
                
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
                 <div class="information21">A massagem individual sai pelo valor de ${n.valor} reais </div>       
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
    

	   `}}async function x(r){let o;if(location.hash.split("#").pop()==="carrinho")o=JSON.parse(localStorage.getItem("@escolhaUser"))||[];else{const t=r.Data.dadosP.filter(e=>e.categoria===location.hash.split("#").pop());o=r.Data.dadosP.filter(e=>e.categoria==="oleos")||t}return{state:()=>{const t=JSON.parse(localStorage.getItem("@escolhaUser"))||[];document.querySelectorAll(".shop-container-card").forEach(s=>{const l=t.find(p=>p.id===s.id);let d=0;l&&l.quantidade&&(d=l.quantidade);const i=s.querySelector("#mais"),m=s.querySelector("#menos"),c=s.querySelector("#counter");c.textContent=d,i.addEventListener("click",p=>{d++,c.textContent=d;const f=dadosSelecionado.find(g=>g.id===p.target.parentNode.parentNode.id),u=t.find(g=>g.id===f.id);u?(u.valor=parseFloat(u.valor)+parseFloat(f.valor),u.quantidade=(u.quantidade||0)+1):(f.quantidade=1,t.push(f)),localStorage.setItem("@escolhaUser",JSON.stringify(t)),e()}),m.addEventListener("click",p=>{d>0&&(d--,c.textContent=d);const f=dadosSelecionado.find(g=>g.id===p.target.parentNode.parentNode.id),u=t.find(g=>g.id===f.id);if(u&&(u.valor=parseFloat(u.valor)-parseFloat(f.valor),u.quantidade=(u.quantidade||0)-1,u.quantidade<=0)){const g=t.indexOf(u);t.splice(g,1)}localStorage.setItem("@escolhaUser",JSON.stringify(t)),e()})});function e(){let s="",l=0,d=0;return t.forEach(p=>{const f=p.nome,u=p.valor,g=p.quantidade;d+=parseFloat(g),l+=parseFloat(u),s+=`Nome: ${f}
Quantidade: ${g}
Valor: R$ ${u}

`}),s+=`Valor Total: R$ ${l.toFixed(2)}
`,document.querySelector("#QTVT").innerHTML=`QT: ${d} VT: ${l}`,`https://wa.me/3171253590?text=${encodeURIComponent(s)}`}e(),document.querySelector("#valor").addEventListener("click",s=>{s.target.getAttribute("key")==="pegarValorEPassarParaWhatsapp"&&window.open(e(),"_blank")})},html:()=>`       
        <comp-menu></comp-menu>
        <div class="container-shop">
            <div class="container-shop-cards">
                ${o.map((t,e)=>`
                    <div class="shop-container-card" id="${t.id}">           
                        <img  class="imgOleos" img-src="${t.img}" width="140">
                        <h4>${t.nome}</h4>
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
        <div class="Loja">       
        <comp-perfoleos a="/#/shop/perfumaria/#oleos" width="80px"  height="80px"  id="oleos"></comp-perfoleos>  
        <comp-perfoleos a="/#/shop/perfumaria/#oleos" width="80px"  height="80px"  id="oleos"></comp-perfoleos>  
       </div>
        
    `}}const _={home:A,perfil:N,produto:I,shop:D,perfumaria:x};async function j(){const r=await useCSVToJSON("/data/massagens/massagens.csv");return{dadosC:await useCSVToJSON("/data/colaboradores/colaboradores.csv"),dadosP:r}}const B="modulepreload",k=function(r){return"/"+r},L={},R=function(o,n,a){if(!n||n.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=k(e),e in L)return;L[e]=!0;const s=e.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!a)for(let m=t.length-1;m>=0;m--){const c=t[m];if(c.href===e&&(!s||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${l}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":B,s||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),s)return new Promise((m,c)=>{i.addEventListener("load",m),i.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o()).catch(e=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=e,window.dispatchEvent(s),!s.defaultPrevented)throw e})};document.querySelector("#app");document.querySelector("style");async function V(r={}){const{url:o,method:n,useType:a,cacheDuration:t}=r,e=`${o}_${n}_${a}`,s=localStorage.getItem(e);if(s){const{data:l,timestamp:d}=JSON.parse(s),i=new Date().getTime(),m=t*24*60*60*1e3;if(i-d<m)return l;localStorage.removeItem(e)}try{const l=await fetch(o,n);let d;a==="text"?d=await l.text():a==="json"&&(d=await l.json());const i={data:d,timestamp:new Date().getTime()};return localStorage.setItem(e,JSON.stringify(i)),d}catch{return null}}function J(r,o,n){if(r==="getItem")return JSON.parse(window.localStorage.getItem(o));if(r==="setItem")window.localStorage.setItem(o,JSON.stringify(n));else if(r==="setItems"){const a=JSON.parse(localStorage.getItem(o)||"[]");a.push(n),localStorage.setItem(o,JSON.stringify(a))}}async function H(){async function r(){return new Promise((o,n)=>{if(navigator.geolocation)navigator.geolocation.getCurrentPosition(a=>{const t=a.coords.latitude,e=a.coords.longitude;o({latitude:t,longitude:e})},a=>{n(a)});else{const a=new Error("Geolocation is not supported by this browser.");n(a)}})}try{const{latitude:o,longitude:n}=await r();return[o,n]}catch(o){return console.log("Erro ao obter localização:",o.message),[null,null]}}async function U(r,o){history.pushState(null,null,r),T(o)}async function z(r){try{const n=new TextEncoder().encode(r),a=await crypto.subtle.digest("SHA-256",n);return Array.from(new Uint8Array(a)).map(s=>s.toString(16).padStart(2,"0")).join("")}catch(o){throw new Error("Erro ao criptografar a senha: "+o)}}async function M(r,o){const t=(await(await fetch(r,{headers:{ct:o}})).text()).split(`
`),e=t[0].split(";");return t.slice(1).map(s=>s.split(";").reduce((l,d,i)=>{const m={};return m[e[i]]=d,{...l,...m}},{}))}function F(r,o){return[o.join(","),...r.map(n=>o.map(a=>n[a]||"").join(","))].join(`
`)}const W=r=>{const o=document.querySelectorAll(r);if(o.length===0)return r;const n={addClass:a=>(o.forEach(t=>{t.classList.add(a)}),n),removeClass:a=>(o.forEach(t=>{t.classList.remove(a)}),n),text:a=>(o.forEach(t=>{t.textContent=a}),n),css:a=>(o.forEach(t=>{Object.assign(t.style,a)}),n),on:(a,t)=>(o.forEach(e=>{e.addEventListener(a,t)}),n),appendImage:a=>(o.forEach(t=>{const e=document.createElement("img");e.src=a,t.appendChild(e)}),n),hide:()=>(o.forEach(a=>{a.style.originalDisplay=a.style.display,a.style.display="none"}),n),show:()=>(o.forEach(a=>{a.style.display=a.style.originalDisplay||"",delete a.style.originalDisplay}),n),tag:()=>o[0],tags:()=>o};return n},T=async(r={},o={})=>{const n=document.querySelector("#app"),[a,t]=Object.values(r),e=async()=>{const c=document.getElementsByTagName("img"),p=new IntersectionObserver(function(f,u){f.forEach(function(g){if(g.isIntersecting){const v=g.target,h=v.getAttribute("img-src");v.setAttribute("src",h),v.removeAttribute("img-src"),u.unobserve(v)}})});Array.from(c).forEach(function(f){p.observe(f)})},s=()=>{const c=location.hash.replace("#","")||location.pathname;return c==="/"?Object.keys(a)[0]:c.split("#")[0].split("/").filter(Boolean).pop()};async function l(c={}){let p=[];const f=document.createElement("div");f.insertAdjacentHTML("beforeend",c.renderedHtml);const u=async(h,w)=>{const y=Array.from(h.getAttributeNames()).reduce((b,S)=>S.startsWith("data-")?b:{...b,[S]:h.getAttribute(S)},{}),E={reference:w,nameTag:h.tagName.toLowerCase(),attributes:y,parameter:Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),page:location.hash.replace("#","").match(/^\/(\w+)(\/)?/),content:h.textContent,Data:t,tag:h},C=h.tagName.toLowerCase();try{if(C){const b=await R(()=>import(`${location.origin}/src/Components/${C}.js`),[]).then(q=>q.default),{html:S,state:P}=await b(E);typeof S=="function"&&(h.innerHTML+=S()),typeof P=="function"&&p.push(P)}else throw new Error(`Componente não encontrado para a tag: ${C}`)}catch{}await g(h)},g=async h=>{const w=Array.from(h.querySelectorAll("*")).filter(y=>y.tagName.toLowerCase().match(/^comp-/i));for(let y=0;y<w.length;y++){const E=w[y];await u(E)}},v=Array.from(f.querySelectorAll("*")).filter(h=>h.tagName.toLowerCase().match(/^comp-/i));for(let h=0;h<v.length;h++){const w=v[h];await u(w)}n.innerHTML="",n.appendChild(f),p.forEach(h=>h()),typeof c.renderState=="function"&&c.renderState(),e()}async function d(){const c=s(),p=c&&a[c]?c:"erro";if(p!=="erro"){const f={Pages:a,Data:t},{html:u,state:g}=await a[p](f),v=typeof u=="function"?u():await a[p]();l({renderedHtml:v,renderState:typeof g=="function"?g:void 0})}}function i(c,p){let f;return function(...u){clearTimeout(f),f=setTimeout(()=>{c.apply(this,u)},p)}}function m(c){if(c.target.matches("[data-href]")){c.preventDefault();const p=c.target.dataset.href;history.pushState(null,null,p),d()}}window.addEventListener("popstate",d),document.body.addEventListener("click",i(m,200)),d()},O=Object.freeze(Object.defineProperty({__proto__:null,$:W,Router:T,useApi:V,useCSVToJSON:M,useId:z,useJSONToCSV:F,useLocalStorage:J,useLocation:H,useNavigate:U},Symbol.toStringTag,{value:"Module"}));Object.keys(O).forEach(r=>{typeof O[r]=="function"&&(window[r]=O[r])});async function Q(){const r=await j(),o={path:location.origin};Router({pages:_,data:r},o)}Q();
