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
    med: "Matérias em Destaque",
    p0: "carrossel de imagens",
    p1: "A educação nutricional é um dos pilares centrais para a promoção da saúde e da qualidade de vida em qualquer sociedade. Em um cenário marcado pela industrialização dos alimentos, rotinas aceleradas e uma enxurrada de informações nem sempre confiáveis sobre dietas e nutrição, torna-se fundamental capacitar indivíduos para que possam fazer escolhas alimentares conscientes e responsáveis. Essa prática é muito mais do que ensinar o que comer: é um processo de transformação comportamental que visa desenvolver senso crítico e autonomia em relação à alimentação.",
    p2: "Ao compreender a importância de hábitos alimentares equilibrados, os indivíduos passam a adotar práticas que contribuem diretamente para seu bem-estar físico, mental e social. Dessa forma, a educação nutricional assume um papel não apenas individual, mas também coletivo, sendo um fator determinante na construção de sociedades mais saudáveis, produtivas e sustentáveis.",
    p3: "A educação nutricional é um processo contínuo que busca informar, conscientizar e capacitar pessoas para compreenderem melhor o papel dos alimentos em sua saúde. Mais do que restringir ou proibir, ela incentiva escolhas inteligentes e sustentáveis, considerando as necessidades específicas de cada fase da vida e os contextos culturais e econômicos nos quais os indivíduos estão inseridos.",
    p4: "Ao promover conhecimento científico de forma acessível, a educação nutricional combate mitos e modismos alimentares, permitindo que as pessoas desenvolvam uma relação saudável com a comida. Essa abordagem fortalece a responsabilidade individual, mas também cria um ambiente favorável para mudanças coletivas significativas na forma como a sociedade se relaciona com a alimentação.",
    p5: "Um dos benefícios mais evidentes da educação nutricional é sua contribuição para a prevenção de doenças crônicas não transmissíveis, como obesidade, diabetes tipo 2, hipertensão e doenças cardiovasculares. Tais condições, frequentemente associadas a hábitos alimentares inadequados, podem ser amplamente evitadas por meio da adoção de uma dieta equilibrada e consciente, orientada por informações corretas.",
    p6: "Além de atuar na prevenção, a educação nutricional também contribui para a melhora da saúde já comprometida, auxiliando no tratamento de diversas doenças por meio da adequação alimentar. Essa abordagem reduz a dependência de tratamentos medicamentosos e promove uma qualidade de vida mais elevada, com benefícios diretos para a longevidade e o bem-estar geral da população.",
    p7: "A infância e a juventude são fases decisivas para a formação de hábitos alimentares duradouros, e a educação nutricional desempenha um papel crucial nesse processo. Ao ser inserida em ambientes escolares, ela promove o aprendizado sobre a importância de uma dieta variada, incentivando o consumo de frutas, verduras e alimentos naturais. Isso contribui para um crescimento saudável e um desempenho escolar mais satisfatório.",
    p8: "Além disso, ao ensinar crianças e adolescentes a entenderem a relação entre alimentação e saúde, a educação nutricional previne problemas futuros, como obesidade e distúrbios alimentares. Esses aprendizados, quando reforçados em casa e na comunidade, criam uma base sólida para uma vida adulta mais saudável e consciente.",
    p9: "A educação nutricional também exerce grande influência sobre os lares, tornando as famílias mais aptas a planejar e preparar refeições nutritivas e equilibradas. Quando pais e responsáveis têm acesso a informações adequadas, conseguem oferecer aos filhos uma alimentação variada e rica em nutrientes, fator essencial para o desenvolvimento físico e cognitivo.",
    p10: "Essa prática também contribui para a criação de um ambiente alimentar mais saudável, no qual as refeições caseiras ganham espaço e os alimentos ultraprocessados são consumidos com mais moderação. Assim, a educação nutricional não apenas melhora a saúde de cada indivíduo, mas fortalece o bem-estar coletivo dentro do núcleo familiar.",
    p11: "Os benefícios da educação nutricional vão além da saúde individual, refletindo-se em impactos sociais e econômicos significativos. Populações bem informadas demandam produtos alimentícios de maior qualidade, incentivando práticas agrícolas locais e fomentando a economia regional. Ao priorizar alimentos frescos e minimamente processados, também se reduz a dependência de produtos industrializados, frequentemente mais caros e menos saudáveis.",
    p12: "Do ponto de vista econômico, a adoção de hábitos alimentares saudáveis diminui os custos com tratamentos médicos e internações hospitalares, aliviando sistemas públicos e privados de saúde. Já no âmbito ambiental, a educação nutricional contribui para práticas mais sustentáveis, como o consumo consciente, a valorização de alimentos sazonais e a redução do desperdício.",
    p13: "A educação nutricional respeita e integra os hábitos alimentares de cada comunidade, reconhecendo o valor cultural e histórico dos alimentos tradicionais. Essa abordagem fortalece identidades regionais e promove uma alimentação mais diversa, que além de saudável, reforça a conexão das pessoas com suas origens e recursos locais.",
    p14: "Ao valorizar ingredientes típicos e práticas culinárias regionais, a educação nutricional contribui para uma dieta equilibrada e sustentável. Ela mostra que é possível unir saúde, sabor e tradição, criando um modelo alimentar mais inclusivo e culturalmente significativo.",
    p15: "A alimentação tem impacto direto no estado emocional e na saúde mental, e a educação nutricional ajuda as pessoas a compreenderem essa relação. Uma dieta equilibrada melhora o humor, aumenta a disposição e pode até auxiliar na prevenção e no tratamento de transtornos como depressão e ansiedade.",
    p16: "Além disso, ao promover uma relação saudável com a comida, a educação nutricional combate extremos como dietas restritivas prejudiciais e compulsão alimentar. Isso contribui para um equilíbrio maior entre corpo e mente, reforçando que comer bem é também um ato de cuidado emocional.",
    p17: "A educação nutricional vai muito além de ensinar sobre calorias ou nutrientes: ela é uma ferramenta de transformação individual e coletiva. Ao promover saúde, prevenir doenças, valorizar culturas, incentivar a sustentabilidade e melhorar o bem-estar mental, ela se consolida como um investimento essencial para qualquer sociedade.",
    p18: "Investir na educação nutricional é investir em um futuro mais saudável, produtivo e consciente. Quanto mais as pessoas tiverem acesso a esse conhecimento, mais preparadas estarão para tomar decisões alimentares responsáveis, garantindo não apenas a própria qualidade de vida, mas também a de toda a comunidade à sua volta.",
    p19: "Para mais informações, acesse as outras areas do site disponíveis no cabeçalho",
    tittle1: "Introdução: A Importância e os Benefícios da Educação Nutricional",
    tittle2: "Introdução",
    tittle3: "O Que é Educação Nutricional?",
    tittle4: "Prevenção de Doenças e Promoção da Saúde",
    tittle5: "Impacto na Infância e Juventude",
    tittle6: "Fortalecimento da Alimentação no Ambiente Familiar",
    tittle7: "Benefícios Sociais, Econômicos e Ambientais",
    tittle8: "Valorização da Cultura Alimentar",
    tittle9: "Influência no Bem-Estar Mental e Emocional",
    tittle10: "Conclusão",
};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    med: "Featured Articles",
    p0: "image carousel",
    p1: "Nutritional education is one of the central pillars of promoting health and quality of life in any society. In a scenario marked by food industrialization, fast-paced routines, and a flood of unreliable information about diet and nutrition, it's crucial to empower individuals to make informed and responsible dietary choices. This practice is much more than teaching what to eat: it's a process of behavioral transformation that aims to develop critical thinking and autonomy regarding food.",
    p2: "By understanding the importance of balanced eating habits, individuals begin to adopt practices that directly contribute to their physical, mental, and social well-being. Thus, nutritional education plays not only an individual but also a collective role, being a determining factor in building healthier, more productive, and sustainable societies.",
    p3: "Nutrition education is an ongoing process that seeks to inform, raise awareness, and empower people to better understand the role of food in their health. Rather than restricting or prohibiting, it encourages smart and sustainable choices, considering the specific needs of each stage of life and the cultural and economic contexts in which individuals live.",
    p4: "By promoting scientific knowledge in an accessible way, nutritional education combats myths and food fads, enabling people to develop a healthy relationship with food. This approach strengthens individual responsibility but also creates a favorable environment for significant collective changes in how society relates to food.",
    p5: "One of the most obvious benefits of nutritional education is its contribution to the prevention of chronic noncommunicable diseases such as obesity, type 2 diabetes, hypertension, and cardiovascular disease. These conditions, often associated with poor eating habits, can be largely prevented by adopting a balanced and conscious diet, guided by accurate information.",
    p6: "In addition to prevention, nutritional education also contributes to improving already compromised health, aiding in the treatment of various diseases through nutritional adjustments. This approach reduces dependence on medication and promotes a higher quality of life, with direct benefits for longevity and overall well-being.",
    p7: "Childhood and adolescence are crucial stages in developing lasting eating habits, and nutritional education plays a crucial role in this process. When introduced in schools, it promotes the importance of a varied diet, encouraging the consumption of fruits, vegetables, and natural foods. This contributes to healthy growth and better academic performance.",
    p8: "Furthermore, by teaching children and adolescents to understand the relationship between food and health, nutritional education prevents future problems such as obesity and eating disorders. These lessons, when reinforced at home and in the community, create a solid foundation for a healthier and more conscious adult life.",
    p9: "Nutritional education also has a significant impact on households, making them more capable of planning and preparing nutritious and balanced meals. When parents and guardians have access to appropriate information, they can provide their children with a varied and nutrient-rich diet, an essential factor for physical and cognitive development.",
    p10: "This practice also contributes to creating a healthier eating environment, where home-cooked meals gain ground and ultra-processed foods are consumed in moderation. Thus, nutritional education not only improves the health of each individual but also strengthens collective well-being within the family unit.",
    p11: "The benefits of nutritional education extend beyond individual health, resulting in significant social and economic impacts. Well-informed populations demand higher-quality food products, encouraging local agricultural practices and boosting the regional economy. Prioritizing fresh, minimally processed foods also reduces dependence on processed foods, which are often more expensive and less healthy.",
    p12: "From an economic perspective, adopting healthy eating habits reduces the costs of medical treatments and hospitalizations, relieving public and private healthcare systems. Environmentally, nutritional education contributes to more sustainable practices, such as conscious consumption, the appreciation of seasonal foods, and waste reduction.",
    p13: "Nutritional education respects and integrates the eating habits of each community, recognizing the cultural and historical value of traditional foods. This approach strengthens regional identities and promotes a more diverse diet, which is not only healthy but also reinforces people's connection to their origins and local resources.",
    p14: "By valuing typical ingredients and regional culinary practices, nutritional education contributes to a balanced and sustainable diet. It demonstrates that it is possible to combine health, flavor, and tradition, creating a more inclusive and culturally significant dietary model.",
    p15: "Diet has a direct impact on emotional state and mental health, and nutritional education helps people understand this relationship. A balanced diet improves mood, increases energy, and can even help prevent and treat disorders such as depression and anxiety.",
    p16: "Furthermore, by promoting a healthy relationship with food, nutritional education combats extremes such as harmful restrictive diets and binge eating. This contributes to a better balance between body and mind, reinforcing that eating well is also an act of emotional care.",
    p17: "Nutritional education goes far beyond teaching about calories or nutrients: it is a tool for individual and collective transformation. By promoting health, preventing disease, valuing cultures, encouraging sustainability, and improving mental well-being, it establishes itself as an essential investment for any society.",
    p18: "Investing in nutritional education is investing in a healthier, more productive, and conscious future. The more people have access to this knowledge, the better prepared they will be to make responsible dietary decisions, ensuring not only their own quality of life but also that of the entire community around them.",
    p19: "For more information, access the other areas of the site available in the header",
    tittle1: "Introduction: The Importance and Benefits of Nutrition Education",
    tittle2: "Introduction",
    tittle3: "What is Nutritional Education?",
    tittle4: "Disease Prevention and Health Promotion",
    tittle5: "Impact on Children and Youth",
    tittle6: "Strengthening Nutrition in the Family Environment",
    tittle7: "Social, Economic and Environmental Benefits",
    tittle8: "Appreciation of Food Culture",
    tittle9: "Influence on Mental and Emotional Well-Being",
    tittle10: "Conclusion",
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

    document.getElementById("p1").textContent = textos.p1;
    document.getElementById("p2").textContent = textos.p2;
    document.getElementById("p3").textContent = textos.p3;
    document.getElementById("p4").textContent = textos.p4;
    document.getElementById("p5").textContent = textos.p5;
    document.getElementById("p6").textContent = textos.p6;
    document.getElementById("p7").textContent = textos.p7;
    document.getElementById("p8").textContent = textos.p8;
    document.getElementById("p9").textContent = textos.p9;
    document.getElementById("p10").textContent = textos.p10;
    document.getElementById("p11").textContent = textos.p11;
    document.getElementById("p12").textContent = textos.p12;
    document.getElementById("p13").textContent = textos.p13;
    document.getElementById("p14").textContent = textos.p14;
    document.getElementById("p15").textContent = textos.p15;
    document.getElementById("p16").textContent = textos.p16;
    document.getElementById("p17").textContent = textos.p17;
    document.getElementById("p18").textContent = textos.p18;
    document.getElementById("p19").textContent = textos.p19;

    document.getElementById("tittle1").textContent = textos.tittle1;
    document.getElementById("tittle2").textContent = textos.tittle2;
    document.getElementById("tittle3").textContent = textos.tittle3;
    document.getElementById("tittle4").textContent = textos.tittle4;
    document.getElementById("tittle5").textContent = textos.tittle5;
    document.getElementById("tittle6").textContent = textos.tittle6;
    document.getElementById("tittle7").textContent = textos.tittle7;
    document.getElementById("tittle8").textContent = textos.tittle8;
    document.getElementById("tittle9").textContent = textos.tittle9;
    document.getElementById("tittle10").textContent = textos.tittle10;

    document.getElementById("med").textContent = textos.med;

});