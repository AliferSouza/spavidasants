import {produtos} from '../dados/data.js'

export default function Card(...props) {
    let componentCard = ''   

    document.addEventListener('DOMContentLoaded', e => {
        const idCardComponet = document.querySelectorAll(`[${props[1]}]`)  
    
        idCardComponet.forEach(element => {               
            element.addEventListener('click', e => {
                const valorDomCard = e.target.id                        
                cardRender(produtos[valorDomCard])
            })
            
            function cardRender(props){   
                
                localStorage.removeItem('tempPreferenciaData')
                localStorage.setItem("tempPreferenciaData", JSON.stringify(props))  
                

                        
            }
        })
    })





    props[0].forEach(element =>{ 
            componentCard += ` 
               <a href="produto" [data-link] >
               <img id="${element.id}" class="home-img-card"
                   src="${element.img}"
                   alt=""
               >
              </a>
        
      
           
    
       `
        
       
    })

 return componentCard    

}

