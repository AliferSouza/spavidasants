import { itemAgendamento } from "../context/agedamento.js"

export default async function agenda({ tagPage }) {
  const dadosPlanilha = await fetch("https://script.google.com/macros/s/AKfycby1LQnv7b0H-UD3EAfRrGKRfNf7epQtiupAg-jPiTNxqdKayteOk6MEVOyh4x44zJep/exec")
  const dB = await dadosPlanilha.json()
  const objetoData = itemAgendamento.valorMassagem

  const lancamentos = JSON.parse(localStorage.getItem("agedamento")) || [];

  tagPage.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(agendamentoForm);
    const formDataObject = Object.fromEntries(formData);

    const data = {
      ...formDataObject,
      valorTotal: parseFloat(objetoData.valor) * parseFloat(formDataObject.quantidade),
    };

    //lancamentos.push(data);  
    //localStorage.setItem("agedamento", JSON.stringify(lancamentos));
    const messageObj = {
      Nome: data.nome,
      Telefone: data.telefone,
      Terapeuta: data.profissional,
      Horário: data.horario.replace(/:/g, ''),
      Data: data.data.replace(/-/g, ''),
      Quantidade: data.quantidade,
      Informações_adicionais: data.info,
      Valor_Total: data.valorTotal
    }



    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageObj),
      mode: 'no-cors'
    };
    const url = 'https://script.google.com/macros/s/AKfycbxEw_RZaAGlgYokXZBhug4iYv16XlBTklo4iscCC3xkeTB5uRF0Ld-ng2SgnCiCkroU/exec';

    fetch(url, requestOptions)
      .then(response => response.ok ? response.json() : Promise.reject('Erro no pedido POST: ' + response.statusText))
      .then(data => console.log("Pedido POST bem-sucedido:", data))
      .catch(error => console.error(error));


    const message = `
  Nome: ${data.nome}
  Telefone: ${data.telefone}
  Terapeuta: ${data.profissional}
  Horário: ${data.horario}
  Data: ${data.data}
  Quantidade: ${data.quantidade}
  Informações adicionais: ${data.info}
  Valor Total: ${data.valorTotal}
`;


    const phoneNumber = '31999739602';
    const linkWhatsapp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(linkWhatsapp);



    agendamentoForm.reset();
  });


  tagPage.addEventListener("click", e => {
    if (e.target.id === "pix") {
      const pixText = e.target.textContent.trim();
      navigator.clipboard.writeText(pixText);

    }
    if (e.target.id === "horario") {
      const dataSelecionada = tagPage.querySelector("#data").value;
      const dataAgendar = tagPage.querySelector("#agendar")
      const horarioSelecionado = e.target.value.replace(/:/g, '')
      const dataVerify = dataSelecionada.replace(/-/g, '')

      const lancamentoEncontrado = dB.find(item => {
        return item.Data === parseInt(dataVerify) && item.Horário === parseInt(horarioSelecionado)
      });


      if (lancamentoEncontrado) {
        const horarioString = lancamentoEncontrado.Horário.toString();
        const doisPrimeirosNumeros = horarioString.substring(0, 2);

        dataAgendar.innerText = "Já existe um agedamento:" + doisPrimeirosNumeros
      } else {
        dataAgendar.innerText = "Agendar"
      }


    }

  })




  return `
    <div class="agendamento-container">
      <div class="agendamento-form-contains">

        <form id="agendamentoForm">
                  <h1>AGENDAMENTO</h1>
          <div class="agendamento-form-imputs">
            <input type="text" id="nome" name="nome" placeholder="Nome" required>
            <input type="text" id="telefone" name="telefone" placeholder="Telefone" required>
          </div>

          <select id="selecao-nome" name="profissional" required>
            <option value="">Selecione um Profissional</option>
            <option value="Alifer">Alifer</option>
            <option value="Viviane">Viviane</option>
          </select>    
          <input class="agendamento-form-data" type="date" id="data" name="data"
              value="${new Date().toISOString().split("T")[0]}" required>

           <select id="horario" name="horario" required>
            <option value="">Selecione um horário</option>
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
          <input type="text" id="quantidade" name="quantidade" placeholder="Quantidade" required>
       
          <textarea type="text" id="info" name="info" placeholder="Ex: Massagem de casal / vai ser 2 sessões para min." ></textarea>

          <button type="submit" id="agendar">Agendar</button>
        </form>
   
        <span id="pix"> 065.555.0001-58 </span> 
        clique para copiar
      </div>
    </div>
  `;
}
