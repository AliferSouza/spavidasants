import { itemAgendamento } from "../context/agedamento.js";
import getPlanilhas from "../context/Data.js";
import { addDoc, collection, db, getDocs } from "../lib/index copy.js";

export default async function agenda(tagPage) {
  document.title = "Agendamento";
  const planilhas = await getPlanilhas();
  const jsonParams = Object.fromEntries(new URLSearchParams(window.location.search.slice(1)));

  const querySnapshot = await getDocs(collection(db, "agedamento"));
  const data = querySnapshot.docs.map(doc => doc.data()); 
  console.log(data)

  tagPage.addEventListener("submit", async event => {
    event.preventDefault();
  
    const agendamentoForm = document.getElementById('agendamentoForm');
    const formData = new FormData(agendamentoForm);
    const dataObj = Object.fromEntries(formData);

    try {
      const docRef = await addDoc(collection(db, "agedamento"), { dataObj });
      console.log("Documento adicionado com ID: ", docRef.id);
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
    }
    
    const jsonData = JSON.stringify(dataObj, null, 2).replace(/{|}/g, "").replace(/,\n/g, "\n");                       
    const linkWhatsapp = `https://wa.me/${31999739602}?text=${encodeURIComponent(jsonData)}`;
    window.open(linkWhatsapp);
    agendamentoForm.reset();
  });

  tagPage.addEventListener('change', e => {
    const selectedHorario = e.target.value;
    const selectedData = document.getElementById('data').value;
  
    const agendamentoEncontrado = data.some(el => {
      const horario = el.dataObj.horario;
      const data = el.dataObj.data;
      console.log( selectedData === data)
  
      return selectedHorario === horario && selectedData === data;
    });

    console.log(agendamentoEncontrado)
  
    if (agendamentoEncontrado) {
      window.alert(`Já existe um agendamento para o horário ${selectedHorario} na data ${selectedData}`);
    }
  });


  return `
    <menu-principal></menu-principal>   
    <div class="agendamento-container">
      <div class="agendamento-form-contains">
        <form id="agendamentoForm">
          <h1>AGENDAMENTO</h1>
          
          <div class="agendamento-form-inputs">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" placeholder="Maria de Fátima" required>

            <label for="telefone">Telefone:</label>
            <input type="text" id="telefone" name="telefone" placeholder="(31) 92222-2222" required>

            <label for="profissional">Selecione um Profissional:</label>
            <select id="profissional" name="profissional" required>
              <option value="" selected disabled>Selecione</option>
              <option value="Alifer" ${jsonParams.profissional === "Alifer" ? "selected" : ""}>Alifer</option>
              <option value="Viviane" ${jsonParams.profissional === "Viviane" ? "selected" : ""}>Viviane</option>
            </select> 

            <label for="servico">Escolha uma Especialidade:</label>
            <select id="servico" name="servico" required>
              <option value="" selected disabled>Selecione</option>
              ${planilhas.massagens.map(produto => `
                <option value="${produto.nome}" ${itemAgendamento.valorMassagem && itemAgendamento.valorMassagem.nome === produto.nome ? "selected" : ""}>
                  ${produto.nome}
                </option>
              `).join("")}
            </select> 

            <label for="data">Escolha uma Data:</label>
            <input type="date" id="data" name="data" value="${new Date().toISOString().split("T")[0]}" required>

            <label for="horario">Selecione um Horário:</label>
            <select id="horario" name="horario" required>
              <option value="" selected disabled>Selecione</option>
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

            <button type="submit">Agendar</button>
          </div>
        </form>  
      </div>
    </div>
  `;
}
