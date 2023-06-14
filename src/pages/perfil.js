import {cardDateColaboradores} from "../dados/data.js"
import {useSearch} from "../lib/index.js"
export default async function Perfilome() {
  const url = (useSearch("hash").match(/\/perfil\/(.+?)\//) || [null, "alifer"])[1];

  const resultado = cardDateColaboradores.find(valor => valor.id === url);


  const state = () => {






  }
  const html = () => `

    <div class="card_container">
        <div class="card dark">    
      <div class="header">
      <a data-href="/#/home/">🡸</a>    
      </div>

      <img src="./src/img/${url }.jpg" alt="user" />
      <h1 class="name">${resultado.nome}</h1>
      <p class="designation">Massoterapeuta</p>
      <p class="about">${resultado.funcao}</p>

      <div class="social__icons">
        <div class="icon__card">
          <a class="icon" href="${resultado.insta}"  target="_blank">          
          <img src="https://th.bing.com/th/id/OIP.4yOhxJCs2K0_hNHRpteMmgHaHZ?pid=ImgDet&rs=1" alt="user" width="40" height="" />
           </a>         
        </div>

      </div>
    </div>
    </div>
        
 
        `;



  return {
    html,
    state,
  }


}

