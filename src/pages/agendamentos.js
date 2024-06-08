import { itemAgendamento } from "../context/agedamento.js";
import getPlanilhas from "../context/Data.js";

export default async function agenda(tagPage) {
  document.title = "Agendamento";
  const planilhas = await getPlanilhas();
  const jsonParams = Object.fromEntries(new URLSearchParams(window.location.search.slice(1)));
 


  tagPage.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(agendamentoForm);
    const dataObj = Object.fromEntries(formData);
    const jsonData = JSON.stringify(dataObj, null, 2).replace(/{|}/g, "").replace(/,\n/g, "\n");                       
    const linkWhatsapp = `https://wa.me/${31999739602}?text=${encodeURIComponent(jsonData)}`;
    window.open(linkWhatsapp);
    agendamentoForm.reset();
  });
  
  
  return `
    <menu-principal ></menu-principal>   
    <div class="agendamento-container">
      <div class="agendamento-form-contains">

        <form id="agendamentoForm">
          <h1>AGENDAMENTO</h1>
          <div class="agendamento-form-imputs">
            <label>None</label>
            <input type="text" id="nome" name="nome" placeholder="Maria de fatima" required>
            <label>Telefone</label>
            <input type="text" id="telefone" name="telefone" placeholder="(31)92222-2222" required>
    

            

          <label>Selecione um Profissiona</label>
          <select id="selecao-nome" name="profissional" required>
          <option value="" selected}>Selecione</option>
          <option value="Alifer" ${
            jsonParams.profissional === "Alifer" ? "selected" : ""
          }>Alifer</option>
          <option value="Viviane" ${
            jsonParams.profissional === "Viviane" ? "selected" : ""
          }>Viviane</option>
         </select> 
  
         
         <label>Escolha uma Especialidade</label>
         <select id="selecao-servico" name="servico" required>
          <option value="" selected>Selecione</option>
          ${planilhas.massagens
            .map(
              (produto) => `
          <option value="${produto.nome}" ${
                itemAgendamento.valorMassagem &&
                itemAgendamento.valorMassagem.nome === produto.nome
                  ? "selected"
                  : ""
              }>
            ${produto.nome}
          </option>`
            )
            .join("")}
          </select> 

          <label>Escolha uma Data</label>
          <input class="agendamento-form-data" type="date" id="data" name="data" value="${
            new Date().toISOString().split("T")[0]
          }" required>

            <label>Selecione um horário</label>
           <select id="horario" name="horario" required>
            <option value="">Selecione</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>        
          </select>              
          <button type="submit" id="agendar">Agendar</button>
        </form>  
        </div>
      </div>
    </div>
  `;
}
