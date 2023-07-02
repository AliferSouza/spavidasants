import pages from "./pages/index.js"
import components from "./components/index.js"
import {Router} from "./prix.js"
const dadosP = await prix.useCSVToJSON("../../public/data/massagens/massagens.csv")
const dadosC = await prix.useCSVToJSON("../../public/data/colaboradores/colaboradores.csv")
const data = {
    dadosC,
    dadosP
}


Router(pages, components, data)






