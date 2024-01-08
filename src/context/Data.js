export default async function fetchData() {
  try {
    // Substitua as URLs abaixo pelas suas URLs reais ou o caminho do arquivo local
    const colaboradoresResponse = await fetch(
      "../../data/colaboradores/colaboradores.json"
    );
    const massagensResponse = await fetch(
      "../../data/massagens/massagens.json"
    );

    // Verifique se a resposta do fetch está ok
    if (!colaboradoresResponse.ok || !massagensResponse.ok) {
      throw new Error("Erro ao obter dados.");
    }

    // Converta as respostas para JSON
    const colaboradores = await colaboradoresResponse.json();
    const massagens = await massagensResponse.json();

    const data = {
      colaboradores,
      massagens,
    };
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error.message);
  }
}
