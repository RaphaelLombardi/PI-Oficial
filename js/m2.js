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
    h1:"Os Benefícios de uma Alimentação Natural e os Prejuízos dos Alimentos Industrializados",
    h3:"Por: João Manoel - 13/09/2025",
    p1:"A alimentação é uma das necessidades mais básicas da vida humana, mas também é um fator determinante para a manutenção da saúde e da qualidade de vida. Nos últimos séculos, principalmente a partir da Revolução Industrial, o hábito alimentar da população mundial sofreu uma transformação significativa. O consumo de alimentos naturais e frescos, que predominava em sociedades tradicionais, passou a ser progressivamente substituído por alimentos processados e, em especial, pelos chamados **ultraprocessados**.",
    p2:"Essa mudança trouxe conveniência e praticidade, mas também uma série de consequências negativas para a saúde. Diversos estudos mostram que dietas baseadas em produtos industrializados estão associadas a maiores índices de obesidade, doenças cardiovasculares, diabetes tipo 2 e até distúrbios emocionais (Monteiro et al., 2019). Em contrapartida, uma alimentação natural, rica em vegetais, frutas, cereais integrais e proteínas de qualidade, tem sido constantemente relacionada à prevenção de doenças e à promoção do bem-estar físico e mental.",
    p3:"O objetivo deste artigo é discutir os benefícios de uma alimentação natural e contrastá-los com os prejuízos associados ao consumo frequente de alimentos industrializados.",
    p4:"Benefícios de uma Alimentação Natural",
    p5:"Maior densidade nutricional",
    p6:"Alimentos in natura, como frutas, verduras, legumes, oleaginosas e cereais integrais, apresentam uma elevada concentração de vitaminas, minerais e fibras. Esses nutrientes são indispensáveis para o funcionamento adequado do organismo, atuando em processos metabólicos, na defesa imunológica e na regulação hormonal. Diferentemente dos industrializados, eles oferecem energia acompanhada de qualidade nutricional.",
    p7:"Prevenção de doenças crônicas",
    p8:"A Organização Mundial da Saúde (OMS) recomenda o consumo diário de, no mínimo, 400 g de frutas e hortaliças para reduzir o risco de doenças não transmissíveis. Isso se deve ao fato de que os fitoquímicos e antioxidantes presentes nesses alimentos combatem os radicais livres, prevenindo envelhecimento precoce, câncer e doenças cardiovasculares.",
    p9:"Melhora do sistema digestivo",
    p10:"O consumo de fibras solúveis e insolúveis, presentes em cereais integrais, hortaliças e leguminosas, favorece o funcionamento intestinal, prevenindo constipação e fortalecendo a microbiota intestinal. A boa saúde da microbiota, por sua vez, está relacionada à imunidade e ao equilíbrio emocional.",
    p11:"Controle do peso corporal",
    p12:"Os alimentos naturais possuem, em geral, baixa densidade calórica e alto poder de saciedade. Isso significa que uma pessoa pode ingerir porções adequadas sem ultrapassar a necessidade calórica diária, reduzindo, assim, o risco de sobrepeso e obesidade.",
    p13:"Bem-estar físico e mental",
    p14:"Há uma relação direta entre o que se consome e a saúde mental. Uma dieta natural, equilibrada e variada, auxilia na produção de neurotransmissores como a serotonina e a dopamina, que estão ligados ao humor, ao sono e à disposição. Dessa forma, a alimentação saudável vai além do corpo físico, alcançando também o equilíbrio psicológico.",
    p15:"Prejuízos dos Alimentos Industrializados",
    p16:"Excesso de açúcares e sódio",
    p17:"Grande parte dos ultraprocessados é formulada com altas quantidades de açúcar, sal e gordura para aumentar a palatabilidade e prolongar a conservação. O consumo excessivo de açúcar está diretamente associado ao desenvolvimento de obesidade e diabetes tipo 2, enquanto o excesso de sódio é um dos principais fatores de risco para hipertensão arterial.",
    p18:"Presença de gorduras nocivas",
    p19:"As gorduras trans e saturadas, comuns em biscoitos recheados, fast food e margarinas, aumentam o colesterol LDL (colesterol ruim) e diminuem o HDL (colesterol bom), favorecendo o desenvolvimento de aterosclerose e doenças cardiovasculares.",
    p20:"Uso de aditivos químicos",
    p21:"Para garantir cor, sabor e durabilidade, a indústria alimentícia utiliza aditivos como conservantes, corantes e realçadores de sabor (como o glutamato monossódico). Embora autorizados em pequenas quantidades, o consumo frequente e cumulativo desses aditivos levanta preocupações, podendo causar alergias, irritações e, em alguns casos, contribuir para desequilíbrios metabólicos e hormonais.",
    p22:"Baixo valor nutricional",
    p23:"Enquanto os alimentos naturais fornecem nutrientes em abundância, os industrializados oferecem, em geral, **“calorias vazias”**. Ou seja, muita energia em forma de açúcares e gorduras, mas pouca quantidade de vitaminas, minerais e fibras. Esse desequilíbrio pode levar ao fenômeno chamado “fome oculta”, em que o organismo recebe energia, mas continua carente de micronutrientes essenciais.",
    p24:"Impactos na saúde mental e emocional",
    p25:"Estudos recentes têm apontado que o consumo excessivo de ultraprocessados está associado a maiores índices de ansiedade e depressão. Isso se deve tanto ao impacto negativo na microbiota intestinal quanto às oscilações de glicose no sangue, que afetam diretamente o equilíbrio emocional.",
    p26:"Considerações Finais",
    p27:"O contraste entre os benefícios de uma alimentação natural e os prejuízos de uma dieta baseada em alimentos industrializados é evidente. Optar por uma alimentação mais natural significa investir em qualidade de vida, longevidade e bem-estar. Embora a praticidade dos alimentos industrializados seja atrativa em uma sociedade moderna e acelerada, os impactos negativos para a saúde não podem ser ignorados.",
    p18:"Dessa forma, a busca por equilíbrio é essencial. Reduzir ao máximo o consumo de ultraprocessados e priorizar alimentos frescos, variados e de origem natural é um caminho seguro para a promoção da saúde integral. Em última instância, comer bem não deve ser visto como um sacrifício, mas como um ato de autocuidado e de responsabilidade com o próprio corpo.",
};

const textosEN = {
    hmenuitem1: "Home",
    hmenuitem2: "Articles",
    hmenuitem3: "Quiz",
    hmenuitem4: "About us",
    hmenuitem5: "Contact",
    botao: "EN", 
    botao2: "Theme",
    h1:"The Benefits of a Natural Diet and the Harms of Processed Foods",
    h3:"By: João Manoel - 09/13/2025",
    p1:"Food is one of the most basic needs of human life, but it is also a determining factor in maintaining health and quality of life. In recent centuries, particularly since the Industrial Revolution, the eating habits of the global population have undergone a significant transformation. The consumption of natural and fresh foods, which predominated in traditional societies, has been progressively replaced by processed foods, especially so-called ultra-processed foods.",
    p2:"This shift brought convenience and practicality, but also a series of negative health consequences. Several studies show that diets based on processed foods are associated with higher rates of obesity, cardiovascular disease, type 2 diabetes, and even emotional disorders (Monteiro et al., 2019). In contrast, a natural diet, rich in vegetables, fruits, whole grains, and quality proteins, has been consistently linked to disease prevention and the promotion of physical and mental well-being.",
    p3:"The objective of this article is to discuss the benefits of a natural diet and contrast them with the disadvantages associated with the frequent consumption of processed foods.",
    p4:"Benefits of a Natural Diet",
    p5:"Greater nutritional density",
    p6:"Natural foods, such as fruits, vegetables, legumes, nuts, and whole grains, contain a high concentration of vitamins, minerals, and fiber. These nutrients are essential for the body's proper functioning, contributing to metabolic processes, immune defense, and hormonal regulation. Unlike processed foods, they provide energy combined with nutritional quality.",
    p7:"Prevention of chronic diseases",
    p8:"The World Health Organization (WHO) recommends consuming at least 400g of fruits and vegetables daily to reduce the risk of non-communicable diseases. This is because the phytochemicals and antioxidants in these foods fight free radicals, preventing premature aging, cancer, and cardiovascular disease.",
    p9:"Improved digestive system",
    p10:"Consuming soluble and insoluble fiber, found in whole grains, vegetables, and legumes, promotes intestinal function, preventing constipation and strengthening the intestinal microbiota. A healthy microbiota, in turn, is linked to immunity and emotional balance.",
    p11:"Body weight control",
    p12:"Natural foods generally have low caloric density and high satiety. This means a person can consume adequate portions without exceeding their daily calorie needs, thus reducing the risk of overweight and obesity.",
    p13:"Physical and mental well-being",
    p14:"There's a direct relationship between what we consume and mental health. A natural, balanced, and varied diet helps produce neurotransmitters like serotonin and dopamine, which are linked to mood, sleep, and energy. Thus, healthy eating goes beyond the physical body, also achieving psychological balance.",
    p15:"Harms of Processed Foods",
    p16:"Excess sugar and sodium",
    p17:"Most ultra-processed foods are formulated with high amounts of sugar, salt, and fat to increase palatability and extend shelf life. Excessive sugar consumption is directly associated with the development of obesity and type 2 diabetes, while excess sodium is a major risk factor for high blood pressure.",
    p18:"Presence of harmful fats",
    p19:"Trans and saturated fats, common in filled cookies, fast food and margarines, increase LDL cholesterol (bad cholesterol) and decrease HDL (good cholesterol), favoring the development of atherosclerosis and cardiovascular diseases.",
    p20:"Use of chemical additives",
    p21:"To ensure color, flavor, and shelf life, the food industry uses additives such as preservatives, dyes, and flavor enhancers (such as monosodium glutamate). Although permitted in small quantities, frequent and cumulative consumption of these additives raises concerns, as they can cause allergies, irritation, and, in some cases, contribute to metabolic and hormonal imbalances.",
    p22:"Low nutritional value",
    p23:"While natural foods provide an abundance of nutrients, processed foods generally offer 'empty calories.' That is, they provide a lot of energy in the form of sugars and fats, but little in the way of vitamins, minerals, and fiber. This imbalance can lead to a phenomenon called 'hidden hunger, 'in which the body receives energy but remains deficient in essential micronutrients.",
    p24:"Impacts on mental and emotional health",
    p25:"Recent studies have shown that excessive consumption of ultra-processed foods is associated with higher rates of anxiety and depression. This is due both to the negative impact on the gut microbiota and to fluctuations in blood glucose, which directly affect emotional balance.",
    p26:"Final Considerations",
    p27:"The contrast between the benefits of a natural diet and the disadvantages of a diet based on processed foods is clear. Choosing a more natural diet means investing in quality of life, longevity, and well-being. While the convenience of processed foods is attractive in a modern, fast-paced society, the negative health impacts cannot be ignored.",
    p28:"Therefore, the search for balance is essential. Reducing your consumption of ultra-processed foods as much as possible and prioritizing fresh, varied, and naturally sourced foods is a surefire way to promote overall health. Ultimately, eating well shouldn't be seen as a sacrifice, but as an act of self-care and responsibility toward your own body.",
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
    document.getElementById("p20").textContent = textos.p20;
    document.getElementById("p21").textContent = textos.p21;
    document.getElementById("p22").textContent = textos.p22;
    document.getElementById("p23").textContent = textos.p23;
    document.getElementById("p24").textContent = textos.p24;
    document.getElementById("p25").textContent = textos.p25;
    document.getElementById("p26").textContent = textos.p26;
    document.getElementById("p27").textContent = textos.p27;
    document.getElementById("p28").textContent = textos.p28;

});