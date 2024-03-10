export default function relogio(props) {
  const dataAtual = new Date();
  const dataFinal = new Date(`${dataAtual.getFullYear()}-03-17`);  
  const diferencaEmDias = Math.round((dataFinal - dataAtual) / (24 * 60 * 60 * 1000));
  
    return `
      <div class="relogio">
       <h2>Faltam <span style="color: #FB6747">${diferencaEmDias}</span> dias.</h2>
      <p>Para o evento que irá </p>
      <p>transformar sua vida</p>
      </div>
      
    `;
  }