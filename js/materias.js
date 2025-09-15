const swapBtn = document.getElementById('swap');
let isEnglish = false;

const themeBtn = document.getElementById('tema')

const textosPT = {
    hmenuitem1: "Início",
    hmenuitem2: "Matérias",
    hmenuitem3: "Quiz",
    hmenuitem4: "Sobre Nós",
    hmenuitem5: "Contato",
    botao: "PT-BR",
    botao2: "Tema",
    m1p1: "O perigo das Fake News para a educação nutricional",
    m1p2: "12/09/25",
    m2p1:"Os Benefícios de uma Alimentação Natural e os Prejuízos dos Alimentos Industrializados",
    m2p2: "13/09/25",
};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    m1p1: "The danger of Fake News for nutritional education",
    m1p2: "09/12/25",
    m2p1:"The Benefits of a Natural Diet and the Harms of Processed Foods",
    m2p2: "09/13/25",
};

swapBtn.addEventListener("click", () => {
    isEnglish = !isEnglish;

    const textos = isEnglish ? textosEN : textosPT

    swapBtn.textContent = textos.botao;
    themeBtn.textContent = textos.botao2;
    document.getElementById("hmenuitem1").textContent = textos.hmenuitem1;
    document.getElementById("hmenuitem2").textContent = textos.hmenuitem2;
    document.getElementById("hmenuitem3").textContent = textos.hmenuitem3;
    document.getElementById("hmenuitem4").textContent = textos.hmenuitem4;
    document.getElementById("hmenuitem5").textContent = textos.hmenuitem5;

    document.getElementById("m1p1").textContent = textos.m1p1;
    document.getElementById("m1p2").textContent = textos.m1p2;
    document.getElementById("m2p1").textContent = textos.m2p1;
    document.getElementById("m2p2").textContent = textos.m2p2;
});