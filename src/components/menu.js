import { useNavigate, useGetModules } from "../lib/index.js"


export default async function Menu(props) {



   const state = async () =>{


   }
  
  const html = () => {
    return `   
    <nav>
    <label class="logo"> <img data-href="/#/home/"  src="./src/img/logo22.png" width="70px" height="70px" alt="Logo"></label>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      &#x2630
    </label>
  
    <ul>
         <li><a class="active" data-href="/">Início</a></li> 
    </ul>
  </nav>


  `;
  };

  return {
    html,
    state
  }
}
