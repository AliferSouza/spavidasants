export default function buttons() {   

    function aceitarLGPD() {
      const lgpdCheckbox = document.querySelector('#lgpd-checkbox');
      const lgpdCard = document.querySelector('#lgpd-card');
  
      if (lgpdCheckbox.checked) {
        localStorage.setItem('aceiteLGPD', 'true');
        lgpdCard.style.display = 'none';
      } else {
        alert('Por favor, marque a caixa para aceitar a política de privacidade.');
      }
    }
    function pegarResolver(){
      const lgpdBtn = document.querySelector('#lgpd-btn');
      const lgpdCard = document.querySelector('#lgpd-card');
      const aceiteLGPD = localStorage.getItem('aceiteLGPD');
  
      
      if (aceiteLGPD) {
        lgpdCard.style.display = 'none';
      } else {
        lgpdBtn.addEventListener('click', aceitarLGPD);
      }
  
    }
    
    document.addEventListener('DOMContentLoaded', pegarResolver)
  
    return `
      <div id="lgpd-card">
        <h2>Política de Privacidade</h2>
        <p>Por favor, leia a nossa política de <a href="${location.href + "#politica"}" target="_blank" >privacidade</a> e marque a caixa abaixo para aceitar:</p>
        <label>
          <input type="checkbox" id="lgpd-checkbox">
          Eu aceito a política de privacidade.
        </label>
        <button id="lgpd-btn">Aceitar</button>
      </div>
    `;
  }