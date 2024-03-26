import time from "../context/time.js"
export default function relogio(props) {

  
  return `
  <div class="relogio" style="display: ${time > 1 ? "block" : "none"}">
      <h2>Faltam <span style="color: #FB6747">${time}</span> dias.</h2>
      <p>Para o evento que irá</p>
      <p>transformar sua vida</p>
  </div>
`;
}
  