import colaboradores  from "../../public/data/colaboradores/colaboradores.json" assert { type: "json" };
import massagens  from '../../public/data/massagens/massagens.json' assert { type: "json" };

export default async function fetchData() {
  const data = {
    colaboradores ,
    massagens ,
  };
  return data;
}
