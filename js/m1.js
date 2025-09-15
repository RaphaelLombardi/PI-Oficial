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
    h1:"O perigo das Fake News para a educação nutricional",
    h3:"Por: Julia Horing - 12/09/2025",
    p1:"O crescimento exponencial das mídias sociais e o acesso irrestrito à internet transformaram a maneira como buscamos informações sobre saúde e alimentação. No entanto, essa democratização do acesso também abriu caminho para um fenômeno perigoso: a proliferação de fake news sobre nutrição. Artigos, vídeos e postagens enganosas prometem dietas milagrosas, apontam alimentos como vilões sem base científica e espalham o que é conhecido como 'terrorismo nutricional'. A arma mais eficaz para combater essa desinformação é a educação nutricional, que empodera a população a fazer escolhas alimentares mais conscientes e críticas.",
    p2:"As fake news relacionadas à alimentação apresentam-se em diferentes formas, desde promessas de emagrecimento rápido até recomendações sem base científica. Exemplos comuns incluem a ideia de que 'beber limão em jejum emagrece', que 'glúten é prejudicial para todos' ou que 'sucos detox limpam o fígado'. Embora possam parecer inofensivas, tais informações geram consequências graves: adoção de dietas restritivas sem orientação, deficiências nutricionais, ansiedade em relação à comida, além de gastos desnecessários com produtos milagrosos.",
    p3:"Nesse contexto, a educação nutricional atua como ferramenta fundamental de enfrentamento. Por meio dela, é possível traduzir o conhecimento científico em linguagem acessível, estimular o senso crítico e orientar a população a verificar a confiabilidade das fontes antes de seguir recomendações. Além disso, a educação nutricional promove a autonomia alimentar, ensina a interpretar rótulos, incentiva a valorização de hábitos culturais saudáveis e combate a busca por soluções rápidas e ineficazes.",
    p4:"O uso de diferentes espaços como as escolas, unidades de saúde, mídias digitais e campanhas públicas, ampliam o alcance dessas ações. Dessa forma, a educação nutricional contribui não apenas para desmentir boatos, mas também para formar cidadãos mais conscientes e resistentes à desinformação.",
    p5:"As fake news sobre alimentação representam um risco à saúde, pois induzem comportamentos inadequados e prejudicam a relação das pessoas com a comida. Entretanto, a educação nutricional se mostra uma poderosa aliada na desconstrução de mitos, na promoção da autonomia alimentar e no fortalecimento de escolhas conscientes. Investir em estratégias de educação nutricional, portanto, é investir em saúde, qualidade de vida e na construção de uma sociedade menos vulnerável à desinformação.",
};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    h1:"The danger of Fake News for nutritional education",
    h3:"By: Julia Horing - 09/12/2025",
    p1:"The exponential growth of social media and unrestricted internet access have transformed the way we seek information about health and nutrition. However, this democratization of access has also paved the way for a dangerous phenomenon: the proliferation of fake news about nutrition. Misleading articles, videos, and posts promise miracle diets, portray foods as villains without scientific basis, and spread what is known as 'nutritional terrorism.' The most effective weapon to combat this misinformation is nutritional education, which empowers the population to make more conscious and critical dietary choices.",
    p2:"Fake news related to food comes in many forms, from promises of rapid weight loss to unscientific recommendations. Common examples include the idea that 'drinking lemon on an empty stomach will help you lose weight,' that 'gluten is harmful for everyone,' or that 'detox juices cleanse the liver.' While they may seem harmless, such information has serious consequences: adopting restrictive diets without guidance, nutritional deficiencies, anxiety about food, and unnecessary spending on miracle products.",
    p3:"In this context, nutritional education acts as a fundamental coping tool. Through it, it's possible to translate scientific knowledge into accessible language, encourage critical thinking, and guide the population to verify the reliability of sources before following recommendations. Furthermore, nutritional education promotes dietary autonomy, teaches how to interpret labels, encourages the appreciation of healthy cultural habits, and combats the search for quick and ineffective solutions.",
    p4:"The use of different spaces such as schools, health units, digital media, and public campaigns expands the reach of these actions. Thus, nutritional education contributes not only to debunking rumors but also to shaping citizens who are more aware and resistant to misinformation.",
    p5:"Fake news about food poses a health risk, as it encourages inappropriate behavior and undermines people's relationship with food. However, nutritional education proves to be a powerful ally in debunking myths, promoting dietary autonomy, and strengthening informed choices. Investing in nutritional education strategies, therefore, is an investment in health, quality of life, and in building a society less vulnerable to misinformation.",
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

    document.getElementById("h1").textContent = textos.h1;
    document.getElementById("h3").textContent = textos.h3;
    document.getElementById("p1").textContent = textos.p1;
    document.getElementById("p2").textContent = textos.p2;
    document.getElementById("p3").textContent = textos.p3;
    document.getElementById("p4").textContent = textos.p4;
    document.getElementById("p5").textContent = textos.p5;
});