import {colaboradores} from '../dados/data.js'

export default function Colaboradores(...props) {
    let ColaboradoresComponent = ''

    addEventListener('DOMContentLoaded', e => {
        const ColaboradoresComponent = document.querySelectorAll('#idColaboradoresComponet')
        ColaboradoresComponent.forEach(element => {          
            element.addEventListener('click', e => {
                const valorDom = e.target.id       
                colaboradoresRender(colaboradores[valorDom])
            })

            function colaboradoresRender(props) {              
                window.open(`${props}`, '_blank');
            }
        })
    })


    props[0].forEach(element => {
        ColaboradoresComponent += `  
            <div id="idColaboradoresComponet">  
                <img id ="${element.id}" class="home-img-colaboradores-redondo"
                    src="${element.img}"
                    alt="Girl in a jacket"
                > 
            </div>   
 
    `
    })

    return ColaboradoresComponent





}