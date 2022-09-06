import Colaboradores from "../componentes/colaboradores.js"
import Card from "../componentes/card.js"
import Text from "../componentes/text.js"
import textSimples from "../componentes/textSimples.js"
import Menu from "../componentes/menu.js"
import information from "../componentes/informacoesComponete.js"
import slider from "../componentes/slider.js"
import{ cardDateColaboradores, cardDateCombo, cardDate } from "../dados/data.js"



export default function homeComponent() {


    return `
    
    <div class="container-home">
   
        ${Menu()}
        ${slider()}    
        ${information()}   
  
        

            ${Text(
                {  
                 t0 : "Bem - Vindo",
                 t1: "Colaboradores",
                 t2: "Essas pessoas que fazem tudo acontecer por aqui, conheça-os"
                }
            )}
        
            <div class="home-img-colaboradores-container" style="margin: 5vw">
            <div class="home-img-colaboradores"> ]
            ${Colaboradores(cardDateColaboradores)}   
            </div>
            </div>
        

            ${textSimples( { text: 'Massagens:' } )}
            <div class="home-cards-container"> 
            <div class="home-img-cards" cardmassagens > 
            ${Card(cardDate, "cardmassagens")}
            </div>
            </div>

            ${textSimples({ text: 'Combos: massagens, banho tematico, fotos ....', styles:'font-size: 15px' })}
            <div class="home-cards-container">                
            <div class="home-img-cards" datacardcombos> 
            ${Card(cardDateCombo, "datacardcombos")}
            </div>
            </div>

            ${textSimples({ text: 'Limpeza de pele e outros serviços...' })}
            <div class="home-cards-container"> 
            <div class="home-img-cards" datacardoutros>            
            ${Card(cardDate, "datacardoutros")}
            </div>
            </div>
            
        
        
        </br>
            </br>
            ${Text(
                { 
                 t0 : "Entre em contato",
                 t1: "Números e E-mail",
                 t2: "(31) 99325-3883 || (31) 99325-3883 mymosdavida@gmail.com "
                }
                
                )
            }
            </br>
            </br>

       </div>


  
  



  
 
    `


}