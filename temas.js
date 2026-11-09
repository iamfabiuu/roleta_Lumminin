// 🌐 URL onde o projeto vai ficar hospedado (com / no final)
const BASE_URL = "https://roleta.lumminin.com.br/";
const ROTA_TEMA = "tema?t="; // troque por "tema.html?t=" se não usar cleanUrls

const TEMAS = [
  {
    id: "mesma-mao",
    nome: "TUDO NA MESMA MÃO",
    cor: "#ff7a00",
    persona:
      "Rafa, 17 anos, acabou de sair da cantina com um copo, um lanche e um caderno. Precisa atravessar o pátio com uma mão livre.",
    desafio:
      "Como ajudar Rafa a carregar as três coisas com uma mão só? Crie um protótipo usando os materiais disponíveis na oficina.",
  },
  {
    id: "qual-lixeira",
    nome: "EM QUAL LIXEIRA VAI?",
    cor: "#b6ce76",
    persona:
      "Júlia, 15 anos, terminou um lanche e quer separar os resíduos. Quando chega perto das lixeiras, ela fica em dúvida sobre onde jogar cada coisa.",
    desafio:
      "Como ajudar Júlia a identificar em qual lixeira colocar cada resíduo? Crie um protótipo usando os materiais disponíveis na oficina.",
    lendario: true,
  },
  {
    id: "todo-mundo-fala",
    nome: "TODO MUNDO QUER FALAR",
    cor: "#d49be8",
    persona:
      "Caio, 16 anos, tem ideias para o trabalho em grupo, mas fala baixo. Quando várias pessoas falam ao mesmo tempo, ele acaba guardando suas ideias para si.",
    desafio:
      "Como ajudar Caio e os colegas a compartilhar suas ideias, inclusive quem prefere escrever ou desenhar? Crie um protótipo físico usando os materiais disponíveis na oficina.",
  },
  {
    id: "cade-cracha",
    nome: "DE NOVO, CADÊ MEU CRACHÁ?",
    cor: "#83b7e8",
    persona:
      "Nina, 17 anos, precisa mostrar o crachá várias vezes durante o evento. Toda vez, ela acaba revirando a mochila para encontrá-lo.",
    desafio:
      "Como ajudar Nina a pegar e guardar o crachá rapidamente enquanto circula pelo evento? Crie um protótipo usando os materiais disponíveis na oficina.",
  },
  {
    id: "mesa-pequena",
    nome: "MESA PEQUENA, EQUIPE GRANDE",
    cor: "#f3c969",
    persona:
      "Sofia, 16 anos, divide uma mesa pequena com outras três pessoas. Os retalhos de papel, as canetas e a fita acabam ocupando o espaço onde ela precisa desenhar.",
    desafio:
      "Como organizar os materiais compartilhados e deixar espaço para todo mundo trabalhar? Crie um protótipo usando os materiais disponíveis na oficina.",
  },

  // ✨ NOVOS
  {
    id: "cabos-sem-no",
    nome: "CABOS SEM NÓ",
    cor: "#77c9b0",
    persona:
      "Léo, 16 anos, guarda o carregador e o fone de ouvido soltos na mochila. Quando precisa usar, encontra tudo embolado e perde minutos desfazendo os nós.",
    desafio:
      "Como ajudar Léo a guardar e tirar os cabos da mochila sem que eles se enrolem? Crie um protótipo usando os materiais disponíveis na oficina.",
  },
  {
    id: "fila-mais-clara",
    nome: "ONDE COMEÇA A FILA?",
    cor: "#ef9c84",
    persona:
      "Bia, 15 anos, chega à cantina no intervalo e encontra um monte de gente aglomerada. Ela não sabe onde a fila começa, onde pagar nem onde retirar o lanche.",
    desafio:
      "Como ajudar Bia a entender rapidamente o caminho da fila, do começo até a retirada? Crie um protótipo usando os materiais disponíveis na oficina.",
  },
  {
    id: "preciso-de-ajuda",
    nome: "PSIU, PRECISO DE AJUDA!",
    cor: "#f0a8ca",
    persona:
      "Theo, 17 anos, travou numa etapa da oficina. A mentora está do outro lado da sala, e ele tem vergonha de gritar ou interromper as outras equipes.",
    desafio:
      "Como ajudar Theo a avisar a mentora que a equipe precisa de ajuda, e com que urgência, sem chamar a atenção da sala inteira? Crie um protótipo usando os materiais disponíveis na oficina.",
  },
];

// ⚙️ Completa número e link + valida a lista
const idsVistos = new Set();

TEMAS.forEach((t, i) => {
  ["id", "nome", "persona", "desafio"].forEach((campo) => {
    if (!t[campo]) console.warn(`⚠️ Tema ${i + 1} está sem "${campo}".`);
  });
  if (idsVistos.has(t.id)) console.warn(`⚠️ ID repetido: "${t.id}".`);
  idsVistos.add(t.id);

  t.numero = String(i + 1).padStart(2, "0");
  t.link = `${BASE_URL}${ROTA_TEMA}${encodeURIComponent(t.id)}`;
  Object.freeze(t);
});

Object.freeze(TEMAS);
window.TEMAS = TEMAS; // 🔑 resolve o erro "lista TEMAS inválida"
