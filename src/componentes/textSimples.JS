export default function textSimples(props) {    
  
    return `   
    <div style=
    "
    width: 100;
    display:flex;
    margin:20px; 

    "
    
    >
        <h1 style=" ${props.style}" class="container-texte-home-04">${props.text || ""}</h1>
    </div>
        `

}