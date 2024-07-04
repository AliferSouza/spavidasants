import massagens  from '../../public/data/massagens/massagens.json' assert { type: "json" };

export default async function fetchData() {
  const data = {
    massagens ,
  };
  return data;
}
