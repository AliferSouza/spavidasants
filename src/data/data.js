export default async function data() {
  const dadosP = await useCSVToJSON(
    "../../src/public/data/massagens/massagens.csv"
  );
  const dadosC = await useCSVToJSON(
    "../../src/public/data/colaboradores/colaboradores.csv"
  );
  const data = {
    dadosC,
    dadosP,
  };
  return data;
}
