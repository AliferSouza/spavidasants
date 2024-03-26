const dataAtual = new Date();
const dataFinal = new Date(`${dataAtual.getFullYear()}-05-18`);  
const diferencaEmDias = Math.round((dataFinal - dataAtual) / (24 * 60 * 60 * 1000));

export default diferencaEmDias