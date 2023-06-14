
const cardDateColaboradores = [
    { id: "vivi",  nome: "Vivine",   img: "./src/img/vivi.jpg", insta: 'https://www.instagram.com/viviane.snt_/', funcao: 'Como psicanalista e massoterapeuta, minha missão é ajudar as pessoas a encontrar equilíbrio emocional e físico. Através da psicanálise, busco compreender os aspectos inconscientes da mente, enquanto como massoterapeuta, aplico técnicas de massagem para promover relaxamento e alívio físico. Meu objetivo é oferecer um espaço seguro e acolhedor para meus clientes explorarem suas emoções e alcançarem um bem-estar integral.'},
    { id: "alifer",  nome: "Alifer Souza",  img: "./src/img/alifer.jpg", insta: 'https://www.instagram.com/alifer_oliveira_souza/', funcao: 'Como massoterapeuta desportivo, minha missão é proporcionar relaxamento, alívio da dor e bem-estar aos atletas e indivíduos envolvidos em atividades físicas intensas. Utilizo técnicas especializadas de massagem desportiva, adaptando cada sessão às necessidades específicas do cliente. Meu objetivo é melhorar o desempenho esportivo, prevenir lesões, acelerar a recuperação muscular e promover a saúde geral. Através de manipulações específicas, alongamentos e liberação miofascial, ajudo os atletas a alcançarem seu potencial máximo e a se manterem em forma física ideal. Estou comprometido em cuidar dos atletas, oferecendo orientações sobre autocuidado e práticas saudáveis. Busco equilibrar o bem-estar e o desempenho esportivo dos meus clientes para que possam alcançar seus objetivos com sucesso e se manterem saudáveis a longo prazo.'},
    { id: "ester", nome: "Ester",  img: "./src/img/Ester.jpg", insta: 'https://www.instagram.com/estercamilly_/', funcao: 'Como maquiadora, tenho o privilégio de realçar a beleza natural das pessoas e ajudá-las a se sentirem confiantes e radiantes. Através da arte da maquiagem, aplico técnicas e produtos para destacar os traços faciais, corrigir imperfeições e criar looks personalizados. Trabalho com dedicação e criatividade, adaptando as tendências às preferências individuais de cada cliente. Meu objetivo é não apenas transformar a aparência externa, mas também elevar a autoestima e ressaltar a personalidade única de cada pessoa. É uma alegria fazer parte do processo de empoderamento e embelezamento das pessoas através da maquiagem.'},
    { id: "lest",  nome: "Leticia", img: "./src/img/lest.jpg", insta: 'https://www.instagram.com/_drac_lb/', funcao: 'Como atendente, meu papel é proporcionar uma experiência positiva aos clientes. Sou a primeira pessoa com quem eles interagem e busco oferecer um atendimento acolhedor e eficiente. Escuto atentamente suas necessidades, respondo às perguntas e forneço informações relevantes. Meu objetivo é criar um ambiente amigável e profissional, onde os clientes se sintam valorizados e satisfeitos. Estou comprometido em superar as expectativas e garantir que cada interação seja memorável.'}


]

const produtos = {
    massagemrelaxante: {
        color: '#2d1341',
        pro: "Massagem Relaxante",
        info: "Usando-se de movimentos leves, a massagem relaxante é uma excelente alternativa para o tratamento de dores musculares. Geralmente causadas por estresse, problemas de postura ou movimentos repetitivos, esses hábitos são prejudiciais, resultando em diferentes doenças. Dessa maneira, ela é uma ferramenta que promove o bem-estar, aliviando o desconforto das regiões mais afetadas.",
        img: "./src/img/Slide1.PNG"
    },

    drenagemlifatica: {
        color: '#8ca78a',
        pro: "Drenagem linfatica",
        info: "A drenagem linfática manual é um tipo de massagem corporal que serve para ajudar o corpo a eliminar o excesso de líquidos e toxinas, facilitando o tratamento da celulite, inchaço ou linfedema, e sendo também muito utilizada no pós-operatório de cirurgias, principalmente da cirurgia plástica.",
        img: "./src/img/Slide6.PNG"
    },
    massagemmodeladora: {
        color: '#837043',
        pro: "Massagem Modeladora",
        info: "A massagem modeladora é uma técnica que utiliza movimentos manuais intensos e profundos, com o objetivo de reorganizar as camadas de gordura, promovendo a harmonização dos contornos corporais. Além disso, quando aplicada com a técnica correta, pode auxiliar na redução de medidas e na retenção de líquidos, ",
        img: "./src/img/Slide9.PNG"
    },
    liberacaomiofacial: {
        color: '#1E3319',
        pro: "Liberação miofascial",
        info: "A liberação miofascial é um procedimento que visa amenizar as dores musculares causadas por tensão. Por meio de pressão sobre o local da dor, realizada manualmente ou com o aporte de rolos, a terapia previne lesões e contribui para o tratamento de graves patologias musculoesqueléticas.",
        img: "./src/img/Slide3.PNG"
    },
    pedrasquentes: {
        color: '##626262',
        pro: "Pedras quentes",
        info: "A massagem com pedras quentes é uma terapia milenar, já utilizada pelos chineses, monges budistas e indígenas em seus rituais sagrados e de cura. A aplicação da pedra de tamanho e formato adequados, com a pressão e manipulação correta pelo terapeuta, proporciona os efeitos benéficos dessa massagem, desencadeando sua ação terapêutica.",
        img: "./src/img/Slide2.PNG"
    },
    bambuterapia: {
        color: '#704400',
        pro: "Bambuterapia",
        info: "A bambuterapia é uma técnica de massagem em que são utilizadas hastes de bambu (de diferentes tamanhos e espessuras) que se “encaixam” de acordo com a região do corpo em que são aplicadas, podendo gerar benefícios estéticos (como diminuição da celulite, por exemplo) e/ou terapêuticos (como relaxamento, entre outros). Conheça as particularidades da técnica, suas vantagens e contraindicações.",
        img: "./src/img/Slide4.PNG"
    },
    reflexologia: {
        color: '#e29595',
        pro: "Reflexologia",
        info: "Integrada à medicina tradicional, a técnica pode diminuir os sintomas da medicina, eliminar inflamações, controlar os problemas gastrointestinais, melhorar o estresse, ansiedade e a depressão.",
        img: "./src/img/Slide5.PNG"
    },
    massagemvelas: {
        color: '#e1e1e1',
        pro: "Massagem comvelas",
        info: "A massagem com velas é uma técnica de massagem americana que está sendo muito utilizada nas grandes clínicas e spas, denominada como Melted Candle (significa “velas derretidas”).",
        img: "./src/img/Slide7.PNG"
    },
    bandagemelastica: {
        color: '#d862bd',
        pro: "Bandagem elastica",
        info: "As bandagens funcionais são muito utilizadas no tratamento fisioterapêutico em conjunto com outras técnicas especificas destes profissionais. A bandagem elástica possui como princípio a adequação do tônus muscular e a estabilização articular, com a correção de seu posicionamento. Como principais resultados, podemos destacar a analgesia e a limitação seletiva da amplitude de movimento.",
        img: "./src/img/Slide8.PNG"
    },
    promocao: {
        color: '#d862bd',
        pro: "Preço Baixo",
        info: "Aproveite os preços baixos",
        img: "./src/img/0.jpeg"
    },

}

const cardDate = [
    { img: "./src/img/slide1.png", id: "massagemrelaxante" },
    { img: "./src/img/slide6.png", id: "drenagemlifatica" },
    { img: "./src/img/slide9.png", id: "massagemmodeladora" },
    { img: "./src/img/slide3.png", id: "liberacaomiofacial" },
    { img: "./src/img/slide2.png", id: "pedrasquentes" },
    { img: "./src/img/slide4.png", id: "bambuterapia" },
    { img: "./src/img/slide5.png", id: "reflexologia" },
    { img: "./src/img/slide7.png", id: "massagemvelas" },
    { img: "./src/img/slide8.png", id: "bandagemelastica" },
]

const promoção = [
    { img: "./src/img/0.jpeg" },
    { img: "./src/img/1.jpeg" },
    { img: "./src/img/2.jpeg" },
    { img: "./src/img/3.jpeg" },
    { img: "./src/img/5.jpeg" },
    { img: "./src/img/6.jpeg" }
]

const dados = {
    cardDateColaboradores: [
        { id: "vivi", img: "./src/img/vivi.jpg", vivi: 'https://www.instagram.com/viviane.snt_/' },
        { id: "alifer", img: "./src/img/alifer.jpg", alifer: 'https://www.instagram.com/alifer_oliveira_souza/' },
        { id: "ester", img: "./src/img/Ester.jpg", ester: 'https://www.instagram.com/grazileite.integrar/' },
        { id: "lest", img: "./src/img/lest.jpg", lest: 'https://www.instagram.com/_drac_lb/' }
    ],
    promoção: [
        { img: "./src/img/0.jpeg", id: "promocao" },
        { img: "./src/img/1.jpeg", id: "promocao" },
        { img: "./src/img/2.jpeg", id: "promocao" },
        { img: "./src/img/3.jpeg", id: "promocao" },
        { img: "./src/img/5.jpeg", id: "promocao" },
        { img: "./src/img/6.jpeg", id: "promocao" }
    ],
    cardDate: [
        { img: "./src/img/Slide1.PNG", id: "massagemrelaxante" },
        { img: "./src/img/Slide6.PNG", id: "drenagemlifatica" },
        { img: "./src/img/Slide9.PNG", id: "massagemmodeladora" },
        { img: "./src/img/Slide3.PNG", id: "liberacaomiofacial" },
        { img: "./src/img/Slide2.PNG", id: "pedrasquentes" },
        { img: "./src/img/Slide4.PNG", id: "bambuterapia" },
        { img: "./src/img/Slide5.PNG", id: "reflexologia" },
        { img: "./src/img/Slide7.PNG", id: "massagemvelas" },
        { img: "./src/img/Slide8.PNG", id: "bandagemelastica" }
    ]
};




export {
    produtos,
    cardDate,
    cardDateColaboradores,
    promoção,
    dados
}