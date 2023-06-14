import { useSearch } from "../lib/index.js";
import { produtos } from "../dados/data.js";

export default async function Info() {
	const value = useSearch("hash")
	var nome = value.split("/").pop();
	const data = produtos[nome]

	console.log(nome)


	const state = () => {
		const a = `https://api.whatsapp.com/send?phone=553171685900&text=Queria saber sobre a ${nome}`

		$("button").addEventListener('click', e => {
			if (e.target.id === "whats") {
				window.open(a, '_blank');
			}
		})
	}



	const html = () => {
		return `
		<comp-menu> </comp-menu>
   
		<div class="cards">   
	   <article class="information">
		   <span class="tag">Massagem</span>
		   <h2 class="title">${data.pro}</h2>
		   <p class="info">${data.info || ''}</p>
		   <button class="button">
			   <span id="whats">Agende ➞</span>		
		   </button>
	   </article> 	    	 
   </div>
	   `

	}
	return {
		html,
		state
	}


}