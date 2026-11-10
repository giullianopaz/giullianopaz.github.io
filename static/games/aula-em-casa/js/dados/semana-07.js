// ============================================================================
// SEMANA 7 — Consoantes L e N & Geometria 2D | Formas Planas & Supressão Fonêmica
// ============================================================================

window.AULAS = window.AULAS || {};

window.AULAS.registrarSemana({
  numero: 7,
  titulo: "Consoantes L e N · Geometria 2D (Formas Planas) & Supressão Fonêmica",
  focoGeral: "Introdução dos fonemas /l/ (língua no céu da boca) e /n/ (som nasal com boca aberta), leitura de palavras clássicas decodificáveis (LUA, MALA, NAVE, LONA, NOVE, VELA, SINO, MENINO), primeiros jogos de supressão e substituição fonêmica e exploração das 4 formas geométricas planas (círculo, quadrado, triângulo, retângulo).",
  letrasNovas: ["L", "N"],
  letrasConhecidas: ["A", "E", "I", "O", "U", "M", "F", "V", "S", "Z", "L", "N"],
  materiais: [
    "Formas geométricas de madeira ou plástico (Círculo, Quadrado, Triângulo, Retângulo)",
    "Peças do Tangram infantil (7 peças geométricas)",
    "Espelho de mão para observar a ponta da língua subindo atrás dos dentes no L e no N",
    "Letras móveis plásticas ou de EVA (todas as aprendidas até L e N)",
    "Massinha de modelar e palitos de picolé para construir formas",
    "Post-its para caça ao tesouro com palavras decodificáveis (LUA, MALA, NAVE, VELA, SINO)",
    "Folha pautada ampliada e lápis triangular"
  ],
  checklist: {
    t4: [
      "Produz o som /l/ colocando a pontinha da língua no céu da boca atrás dos dentes",
      "Produz o som nasal /n/ com a ponta da língua no céu da boca e a boca aberta",
      "Identifica e nomeia com segurança as 4 formas 2D: círculo, quadrado, triângulo e retângulo",
      "Classifica formas por atributo (ex: separar formas que têm cantos das que não têm cantos)",
      "Descobre o som que sobrou ao retirar uma sílaba (ex: de LAMA tira LA, sobra MA)"
    ],
    t5: [
      "Diferencia com clareza a articulação do M (lábios fechados) da articulação do N (boca aberta)",
      "Decodifica e lê com autonomia palavras com L e N: LUA, MALA, LAVA, NAVE, LONA, NOVE, VELA, VILA, SINO, MENINO",
      "Descreve os atributos das formas geométricas: quadrado (4 lados iguais e 4 cantos), triângulo (3 lados e 3 cantos)",
      "Traça as letras L e N bastão com proporção correta e escreve frases sob ditado ('A MENINA LEVA A MALA')",
      "Realiza supressão fonêmica oral simples (ex: se tirar /l/ de LUA, fica UA)"
    ]
  },
  dias: [
    {
      dia: 1,
      nome: "Segunda-feira",
      foco: "Introdução da Consoante L & Formas 2D: Círculo e Quadrado",
      blocos: [
        {
          tipo: "matematica",
          tempoMin: 15,
          slides: [
            {
              tipo: "capa",
              titulo: "Semana 7 · Segunda-feira",
              subtitulo: "Matemática Singapura & Estônia: Formas Planas (Círculo e Quadrado)",
              guia: "Iniciamos a unidade de Geometria 2D. Foco na observação dos atributos reais das formas.",
              porque: "Estonia Curriculum & NEL Singapura: Geometria sensorial precede definições abstratas."
            },
            {
              tipo: "calendario",
              titulo: "Calendário do Dia & Contagem Regressiva",
              perguntas: [
                "Segunda-feira da Semana 7!",
                "Que dia foi ontem? Domingo! Que dia será amanhã?",
                "Contagem especial: Quantos dias faltam para o aniversário do Frantiesco (11/11)?",
                "E quantos dias faltam para a nossa Sexta-feira?"
              ],
              guia: "Aponte o dia de hoje no calendário com os dedinhos das crianças.",
              porque: "MEXT Japão: Hábitos diários de organização temporal."
            },
            {
              tipo: "subitizar",
              titulo: "Cartões Relâmpago das Formas 2D",
              quantidades: [1, 2, 3, 4],
              instrucao: "Olhe bem rápido para a forma geométrica: é redonda como uma roda ou tem 4 cantos pontudos?",
              guia: "Exiba cartões alternando círculos e quadrados de tamanhos e cores diferentes.",
              porque: "Singapura Math: Reconhecimento invariante de atributos geométricos essenciais."
            },
            {
              tipo: "concreto",
              titulo: "Exploração Tátil: Círculo vs. Quadrado",
              passos: [
                "Passe o dedinho ao redor da borda do CÍRCULO: 'Ele rola suavemente! Não tem nenhum canto pontudo!'",
                "Passe o dedinho no QUADRADO: 'Ele tem 4 lados retos e iguais! E 1, 2, 3, 4 cantinhos que espetam o dedo!'"
              ],
              guia: "Deixe as crianças sentirem com os olhos fechados a diferença tátil entre a curva e o canto.",
              porque: "Singapura CPA: Concreto e cinestésico antes da representação gráfica."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Matemática Guiada",
              t4: "🦁 Frantiesco (4 anos): Separar um monte de peças em dois potes: todos os círculos num pote, todos os quadrados no outro.",
              t5: "🚀 Giuseppe (5 anos): Contar e registrar no papel os lados e cantos do quadrado (4 lados e 4 cantos) e do círculo (0 cantos).",
              guia: "Incentive Giuseppe a usar a palavra 'canto' ou 'vértice' com segurança.",
              porque: "Rosenshine: Vocabulário preciso durante a modelagem."
            }
          ]
        },
        {
          tipo: "fonica",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 2 · Alfabetização Fônica",
              subtitulo: "A Consoante da Língua Cantora: Letra L & Método das Onomatopeias",
              guia: "Tapete. Pegue o espelho para ver a ponta da língua subindo no céu da boca.",
              porque: "Puliezi (2018): Consoante líquida alveolar lateral /l/."
            },
            {
              tipo: "revisaoSons",
              titulo: "Revisão Rápida dos Sons Anteriores",
              letras: ["M", "F", "V", "S", "Z"],
              instrucao: "O pai faz o som e as crianças mostram a boca no espelho!",
              guia: "Alterne rapidamente.",
              porque: "Rosenshine: Revisão antes da novidade fonêmica."
            },
            {
              tipo: "fonema",
              letra: "L",
              guia: "Olhe no espelho: a ponta da língua sobe bem alto e bate atrás dos dentes da frente: 'LLLLLLL-LA-LA-LA!'. Como um cantor afinando a voz!",
              porque: "Capovilla: Consciência articulatória da elevação da ponta da língua."
            },
            {
              tipo: "decodificavel",
              titulo: "Giuseppe Lê: Sílabas e Palavras com L!",
              palavras: ["LUA", "MALA", "LAVA", "VELA"],
              frase: "A LUA ILUMINA A VILA",
              instrucao: "Junte a ponta da língua com as vogais: /l/ + /u/ = LU! LU + A = LUA! MA + LA = MALA! VE + LA = VELA! Agora leia a frase inteira: A LUA ILUMINA A VILA!",
              guia: "Deslize o dedinho embaixo de MALA e LUA. Palavras completas lidas com autonomia!",
              porque: "Capovilla & Seabra: Decodificação de palavras CVCV de alta familiaridade."
            }
          ]
        },
        {
          tipo: "motor",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 3 · Grafomotricidade & Prática Guiada",
              subtitulo: "Traçado da Letra L & Desenho de Formas",
              guia: "Voltem à mesa para a prática caligráfica.",
              porque: "Alfa e Beto: A letra L bastão combina descida vertical reta e traço horizontal reto para a direita."
            },
            {
              tipo: "aquecimentoMotor",
              titulo: "Aquecimento: O Poste e a Calçada",
              passos: [
                "Com o dedinho no ar: 'Desce o poste em pé bem retinho, vira para a direita e faz a calçada!'.",
                "Trace 3 vezes na caixa de areia/fubá a letra L bem grande e perpendicular."
              ],
              guia: "Verifique o ângulo reto de 90 graus entre a linha vertical e horizontal.",
              porque: "MEXT Japão: Controle de traços ortogonais na caligrafia."
            },
            {
              tipo: "trilhas",
              titulo: "Atividade Diferenciada de Mesa",
              t4: "🦁 Frantiesco (4 anos): Colar palitos de picolé formando um quadrado perfeito de 4 lados iguais.",
              t5: "🚀 Giuseppe (5 anos): Traçar a letra L na pauta ampliada e escrever as palavras LUA, MALA e VELA.",
              guia: "Supervisione a caligrafia de Giuseppe na pauta.",
              porque: "Rosenshine: Prática guiada com feedback imediato."
            }
          ]
        },
        {
          tipo: "leitura",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 4 · Leitura Dialógica & Arrumação",
              subtitulo: "História Curta: A Lua Cheia e a Menina Luísa",
              guia: "Leitura acolhedora com foco no som /l/ e vocabulário ativo.",
              porque: "Singapura NEL: Leitura dialogada rica em vocabulário e imaginação."
            },
            {
              tipo: "historia",
              titulo: "A Lua Cheia e a Menina Luísa",
              texto: "No céu da noite escura, a lua cheia redonda brilhava como uma lâmpada prateada no alto. A menina Luísa olhou pela janela do quarto, esticou a pontinha da língua no céu da boca e começou a cantarolar: LLLLL-LA-LA-LA! A lua parecia sorrir lá de cima!",
              perguntas: [
                "Qual é o formato da lua cheia no céu? Redonda como um círculo!",
                "Qual é o nome da menina? Luísa começa com qual som? /l/!",
                "Como ela cantarolou para a lua? LLLLL-LA-LA-LA!"
              ],
              guia: "Cantem juntos a melodia subindo a pontinha da língua.",
              porque: "Dehaene: Engajamento ativo e memória afetiva."
            },
            {
              tipo: "arrumacao",
              titulo: "Desafio de Arrumação MEXT (5 min)",
              missao: "Guardar as formas organizando por tipo!",
              passos: [
                "Frantiesco guarda todos os círculos na caixa redonda.",
                "Giuseppe guarda todos os quadrados na caixa quadrada.",
                "Checagem da mesa: tudo organizado e pronto!"
              ],
              guia: "Parabenize os dois pelo capricho.",
              porque: "MEXT Japão: Hábito diário de encerramento consciente."
            }
          ]
        }
      ]
    },
    {
      dia: 2,
      nome: "Terça-feira",
      foco: "Formas 2D: Triângulo e Retângulo & Supressão Fonêmica",
      blocos: [
        {
          tipo: "matematica",
          tempoMin: 15,
          slides: [
            {
              tipo: "capa",
              titulo: "Semana 7 · Terça-feira",
              subtitulo: "Matemática Singapura & Estônia: Triângulo e Retângulo",
              guia: "Hoje exploramos o Triângulo (3 lados/cantos) e o Retângulo (4 lados, 2 compridos e 2 curtos).",
              porque: "Singapura Math: Comparação estrutural entre polígonos simples."
            },
            {
              tipo: "calendario",
              titulo: "Calendário do Dia",
              perguntas: [
                "Terça-feira da Semana 7!",
                "Que dia foi ontem? Que dia será amanhã?",
                "Contagem regressiva especial: Quantos dias faltam para o aniversário do Giuseppe (20/07)?"
              ],
              guia: "Localize a data no calendário de parede.",
              porque: "MEXT Japão: Noção ordinal de sucessão dos dias."
            },
            {
              tipo: "subitizar",
              titulo: "Cartões Relâmpago das Formas 2D",
              quantidades: [3, 4, 3, 4],
              instrucao: "Olhe rápido: quantos cantos pontudos tem a forma? Três (triângulo) ou quatro (retângulo)?",
              guia: "Use o botão Flash. Incentive a resposta rápida.",
              porque: "Singapura Math: Subitização visual dos vértices das formas."
            },
            {
              tipo: "concreto",
              titulo: "Exploração Tátil: Triângulo vs. Retângulo",
              passos: [
                "Passe o dedinho no TRIÂNGULO: 'Conte os cantos: 1, 2, 3! Três cantos que picam o dedo e 3 lados retos!'",
                "Passe o dedinho no RETÂNGULO: 'Ele se parece com o quadrado, mas esticou! Tem 2 lados compridos e 2 lados curtinhos!'"
              ],
              guia: "Compare um quadrado ao lado de um retângulo para ficar nítida a diferença de proporção.",
              porque: "Singapura CPA: Comparação empírica de atributos geométricos."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Matemática Guiada",
              t4: "🦁 Frantiesco (4 anos): Montar um triângulo usando 3 palitos de picolé na mesa.",
              t5: "🚀 Giuseppe (5 anos): Desenhar no papel um triângulo (marcando 3 cantos com pontinhos) e um retângulo (marcando os lados compridos e curtos).",
              guia: "Giuseppe escreve o número de lados e cantos embaixo de cada desenho.",
              porque: "Rosenshine: Prática guiada e representação pictórica."
            }
          ]
        },
        {
          tipo: "fonica",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 2 · Alfabetização Fônica",
              subtitulo: "O Jogo da Mágica: Supressão e Troca de Sons!",
              guia: "Tapete. Cartões com imagens e letras móveis.",
              porque: "Capovilla: Manipulação fonêmica no nível avançado (supressão e substituição)."
            },
            {
              tipo: "revisaoSons",
              titulo: "Revisão Rápida dos Sons da Semana",
              letras: ["L"],
              instrucao: "Pontinha da língua no céu da boca: LLLLLL-LA-LA-LA!",
              guia: "Cheque a posição correta da língua.",
              porque: "Dehaene: Consolidação da memória motora."
            },
            {
              tipo: "jogoOral",
              titulo: "O Mágico que Apaga o Som Inicial!",
              instrucao: "O mágico falou a palavra LAMA. Agora o mágico vai apagar o som /l/ da frente: que palavra sobrou? AMA! Se falarmos LUA e tirarmos o /l/: sobra UA!",
              palavrasExemplo: ["LAMA -> tira /l/ -> AMA", "LUA -> tira /l/ -> UA", "LISO -> troca /l/ por /v/ -> VISO"],
              guia: "Faça em tom de mistério e mágica com uma varinha imaginária.",
              porque: "Capovilla & Seabra: Consciência fonêmica refinada de deleção."
            },
            {
              tipo: "onibus",
              titulo: "O Ônibus da Frase (3 Palavras)",
              frase: "A LUA BRILHA",
              palavras: ["A", "LUA", "BRILHA"],
              instrucao: "Coloque uma tampinha para cada palavra da frase!",
              guia: "Aponte cada tampinha com o dedo.",
              porque: "Dehaene: Segmentação da fala contínua."
            }
          ]
        },
        {
          tipo: "motor",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 3 · Grafomotricidade & Prática Guiada",
              subtitulo: "Recorte com Tesoura & Letra L",
              guia: "Voltem à mesa para o treino motor com tesoura.",
              porque: "Singapura NIE: O recorte com tesoura infantil desenvolve a dissociação das duas metades da mão (estabilidade do anelar/mínimo e mobilidade do polegar/indicador)."
            },
            {
              tipo: "aquecimentoMotor",
              titulo: "Aquecimento: O Jacaré que Corta",
              passos: [
                "Abra e feche a tesoura sem papel: 'Abre bem grande, fecha bem devagar! Nhac, nhac!'.",
                "Corte uma tira de papel seguindo uma linha triangular desenhada."
              ],
              guia: "Verifique que o polegar fique voltado para cima dentro da alça pequena da tesoura.",
              porque: "MEXT Japão: Empunhadura e biomecânica do uso da tesoura."
            },
            {
              tipo: "trilhas",
              titulo: "Atividade Diferenciada de Mesa",
              t4: "🦁 Frantiesco (4 anos): Recortar formas geométricas simples desenhadas em papel colorido com tesoura sem ponta.",
              t5: "🚀 Giuseppe (5 anos): Escrever com lápis na pauta ampliada: LA, LE, LI, LO, LU e as palavras LUA, LAMA e MALA.",
              guia: "Supervisione a caligrafia de Giuseppe na pauta.",
              porque: "Rosenshine: Prática guiada com feedback imediato."
            }
          ]
        },
        {
          tipo: "leitura",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 4 · Leitura Compartilhada & Parlenda",
              subtitulo: "Parlenda do Lustre Listrado & Arrumação MEXT",
              guia: "Desafio de agilidade verbal com o som /l/.",
              porque: "Capovilla: Precisão articulatória e ritmo em parlendas aliterativas."
            },
            {
              tipo: "travaLingua",
              titulo: "Luzia e o Lustre",
              texto: "Luzia lustrava o lustre listrado,\nO lustre listrado brilhava ao luar!\nLuzia lustrava com todo o cuidado,\nPro lustre listrado da sala limpar!",
              perguntas: [
                "Quem limpava o lustre? A Luzia!",
                "Como era o lustre? Listrado!",
                "Quem consegue falar bem rápido: 'Luzia lustrava o lustre listrado'?"
              ],
              guia: "Riam juntos com a trava da língua no /l/.",
              porque: "Dehaene: Circuito da recompensa e motivação."
            },
            {
              tipo: "arrumacao",
              titulo: "Desafio de Arrumação MEXT (5 min)",
              missao: "Guardar as formas organizando triângulos e retângulos!",
              passos: [
                "Frantiesco guarda todos os triângulos.",
                "Giuseppe guarda todos os retângulos.",
                "Checagem da mesa: brilhando de limpa!"
              ],
              guia: "Elogie a rapidez da equipe.",
              porque: "MEXT Japão: Hábito de encerramento consciente."
            }
          ]
        }
      ]
    },
    {
      dia: 3,
      nome: "Quarta-feira",
      foco: "Introdução da Consoante N & O Grande Painel das 4 Formas 2D",
      blocos: [
        {
          tipo: "matematica",
          tempoMin: 15,
          slides: [
            {
              tipo: "capa",
              titulo: "Semana 7 · Quarta-feira",
              subtitulo: "Matemática Singapura & Estônia: O Painel das 4 Formas 2D",
              guia: "Síntese das 4 formas planas: Círculo, Quadrado, Triângulo e Retângulo.",
              porque: "Singapura Math: Classificação bidimensional de polígonos por lados e vértices."
            },
            {
              tipo: "calendario",
              titulo: "Calendário do Dia",
              perguntas: [
                "Quarta-feira! Meio da Semana 7!",
                "Que dia foi ontem? Que dia será amanhã?",
                "Contagem regressiva: Quantos dias faltam para a Páscoa?"
              ],
              guia: "Aponte no calendário de parede.",
              porque: "MEXT Japão: Regularidade diária de orientação temporal."
            },
            {
              tipo: "subitizar",
              titulo: "Cartões Relâmpago das 4 Formas",
              quantidades: [0, 4, 3, 4],
              instrucao: "Olhe rápido para a forma: aponte e diga o nome em voz alta!",
              guia: "Use o botão Flash. Alterne as cores e orientações das formas.",
              porque: "Singapura Math: Reconhecimento de formas independentemente da rotação espacial."
            },
            {
              tipo: "concreto",
              titulo: "Tangram: Montando Figuras com Formas",
              passos: [
                "Pegue 2 triângulos do Tangram e junte as pontas: 'Olhe a mágica: 2 triângulos formam 1 quadrado!'",
                "Pegue mais 2 triângulos: 'Juntos formam 1 retângulo comprido!'"
              ],
              guia: "Deixe as crianças manipularem livremente as peças para descobrirem a composição de formas.",
              porque: "Singapura CPA: Composição e decomposição de figuras espaciais."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Matemática Guiada",
              t4: "🦁 Frantiesco (4 anos): Encaixar peças do Tangram em cima de um contorno de barco ou casa desenhado no papel.",
              t5: "🚀 Giuseppe (5 anos): Desenhar no papel as 4 formas (círculo, quadrado, triângulo, retângulo) e preencher uma tabela com o número de lados e cantos de cada uma.",
              guia: "Giuseppe registra a síntese geométrica com clareza.",
              porque: "Rosenshine: Síntese e registro conceitual."
            }
          ]
        },
        {
          tipo: "fonica",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 2 · Alfabetização Fônica",
              subtitulo: "A Consoante do Nariz: Letra N & Contraste M vs N",
              guia: "Tapete. Pegue o espelho para ver a boca aberta no N (diferente do M que fecha os lábios).",
              porque: "Puliezi (2018): Consoante nasal alveolar /n/."
            },
            {
              tipo: "revisaoSons",
              titulo: "Revisão do Som /m/ (Lábios Fechados)",
              letras: ["M"],
              instrucao: "Feche a boca bem apertada: MMMMMM! O som sai todo pelo nariz!",
              guia: "Sinta a boca fechada.",
              porque: "Capovilla: Contraste bilabial vs alveolar nasal."
            },
            {
              tipo: "fonema",
              letra: "N",
              guia: "Agora olhe no espelho: A BOCA FICA ABERTA! A pontinha da língua encosta no céu da boca e o ar sai pelo nariz: 'NNNNNN!'. Aponte o dedinho para o nariz!",
              porque: "Capovilla & Seabra: O contraste visual (boca fechada no M vs boca aberta no N) elimina a confusão gráfica e ortográfica mais comum na alfabetização."
            },
            {
              tipo: "decodificavel",
              titulo: "Giuseppe Lê: Sílabas e Palavras com N!",
              palavras: ["NAVE", "LONA", "NOVE", "SINO"],
              frase: "O SINO SOA",
              instrucao: "Junte os sons: /n/ + /a/ = NA! NA + VE = NAVE! LO + NA = LONA! NO + VE = NOVE! SI + NO = SINO! Agora leia a frase poética: O SINO SOA!",
              guia: "Deslize o dedinho embaixo de cada palavra. Todas as letras desta frase (O, S, I, N, O, S, O, A) foram ensinadas e dominadas!",
              porque: "Capovilla & Seabra: Decodificação com 100% de transparência ortográfica sem nenhuma letra não ensinada."
            }
          ]
        },
        {
          tipo: "motor",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 3 · Grafomotricidade & Prática Guiada",
              subtitulo: "Traçado da Letra N & Ângulos Agudos",
              guia: "Voltem à mesa para a prática caligráfica.",
              porque: "Alfa e Beto: A letra N bastão exige traço vertical ascendente, diagonal descendente e vertical ascendente."
            },
            {
              tipo: "aquecimentoMotor",
              titulo: "Aquecimento: O Raio Subindo e Descendo",
              passos: [
                "Com o dedinho no ar: 'Sobe em pé, desce o escorregador inclinado até o chão e sobe de novo em pé até o topo!'.",
                "Trace 3 vezes na caixa de areia/fubá a letra N bem firme."
              ],
              guia: "Verifique que as duas pernas verticais fiquem retinhas e paralelas.",
              porque: "MEXT Japão: Controle de traços verticais paralelos com conexão diagonal."
            },
            {
              tipo: "trilhas",
              titulo: "Atividade Diferenciada de Mesa",
              t4: "🦁 Frantiesco (4 anos): Fazer 3 cobrinhas retas de massinha e montar a letra N sobre um modelo impresso grande.",
              t5: "🚀 Giuseppe (5 anos): Traçar a letra N e escrever na pauta ampliada: NA, NE, NI, NO, NU e as palavras NAVE, NOVE e SINO.",
              guia: "Supervisione a caligrafia de Giuseppe na pauta.",
              porque: "Rosenshine: Prática guiada com feedback imediato."
            }
          ]
        },
        {
          tipo: "leitura",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 4 · Leitura Dialógica & Arrumação",
              subtitulo: "História Curta: O Menino Nino e o Navio",
              guia: "História narrativa com foco no fonema /n/ e vocabulário ativo.",
              porque: "Singapura NEL: Leitura compartilhada diária com diálogo e reflexão."
            },
            {
              tipo: "historia",
              titulo: "O Menino Nino e o Navio de Papel",
              texto: "O pequeno menino Nino fez um naviozinho de papel dobrado e colocou para flutuar numa bacia de água fresca. Ele apontou o dedinho para o nariz e fez: NNNNN! O naviozinho balançou nas ondinhas como uma nave no mar azul. Nino bateu palmas e disse feliz: Minha nave viaja longe!",
              perguntas: [
                "Qual é o nome do menino? Nino começa com qual som? /n/!",
                "O que ele fez com a folha de papel dobrada? Um naviozinho!",
                "Como ele fez com o dedinho no nariz? NNNNN!"
              ],
              guia: "Imitem o som do dedinho no nariz com a boca aberta.",
              porque: "Dehaene: Engajamento ativo e memória afetiva."
            },
            {
              tipo: "arrumacao",
              titulo: "Desafio de Arrumação MEXT (5 min)",
              missao: "Guardar as peças do Tangram organizando as 4 formas!",
              passos: [
                "Frantiesco guarda os triângulos na caixa.",
                "Giuseppe organiza os quadrados e retângulos.",
                "Checagem da mesa: tudo organizado e pronto!"
              ],
              guia: "Elogie a rapidez da equipe.",
              porque: "MEXT Japão: Hábito de encerramento consciente."
            }
          ]
        }
      ]
    },
    {
      dia: 4,
      nome: "Quinta-feira",
      foco: "Caça ao Tesouro com Palavras de L e N & Grade Silábica",
      blocos: [
        {
          tipo: "matematica",
          tempoMin: 15,
          slides: [
            {
              tipo: "capa",
              titulo: "Semana 7 · Quinta-feira",
              subtitulo: "Matemática Singapura & Estônia: Classificação das Formas por Atributos",
              guia: "Quinta-feira de raciocínio lógico geométrico.",
              porque: "Singapura NEL: Classificação por dois atributos simultâneos (forma e cor / forma e tamanho)."
            },
            {
              tipo: "calendario",
              titulo: "Calendário do Dia",
              perguntas: [
                "Quinta-feira da Semana 7! Amanhã é a nossa Sexta de revisão!",
                "Contagem regressiva especial: Quantos dias faltam para o Natal (25/12)?"
              ],
              guia: "Conte os dias no calendário físico.",
              porque: "MEXT Japão: Contagem de intervalos no tempo real."
            },
            {
              tipo: "subitizar",
              titulo: "Cartões Relâmpago das 4 Formas",
              quantidades: [3, 4, 0, 4],
              instrucao: "Flash rápido! Quantos cantos tem a forma que apareceu?",
              guia: "Mostre triângulo (3 cantos), quadrado (4 cantos), círculo (0 cantos).",
              porque: "Singapura Math: Associação imediata de forma e número de vértices."
            },
            {
              tipo: "concreto",
              titulo: "O Jogo das Formas Escondidas",
              passos: [
                "Coloque 4 formas geométricas dentro de um saco ou fronha fechada.",
                "Sem olhar, enfie a mão e sinta pelo tato: 'Tem cantos pontudos? É redondo? É um triângulo ou um quadrado?'",
                "Adivinhe antes de tirar da fronha!"
              ],
              guia: "Estimula a percepção háptica e a formação de imagem mental sem apoio visual.",
              porque: "Singapura CPA: Percepção sensorial profunda pré-abstrata."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Matemática Guiada",
              t4: "🦁 Frantiesco (4 anos): Descobrir pelo tato qual forma está escondida na fronha e dizer o nome em voz alta.",
              t5: "🚀 Giuseppe (5 anos): Resolver enigmas geométricos no papel: 'Tenho 3 lados retos e 3 cantos pontudos. Quem sou eu? (Triângulo)'. Desenhar a resposta.",
              guia: "Giuseppe lê e resolve o enigma com autonomia.",
              porque: "Rosenshine: Prática guiada com raciocínio lógico dedutivo."
            }
          ]
        },
        {
          tipo: "fonica",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 2 · Alfabetização Fônica",
              subtitulo: "Caça ao Tesouro com Post-its de L e N & Grade Silábica",
              guia: "Prepare 4 post-its com as palavras: LUA, MALA, NAVE, SINO espalhados na sala.",
              porque: "Puliezi (2018): Leitura contextualizada e lúdica em ambiente doméstico."
            },
            {
              tipo: "revisaoSons",
              titulo: "Revisão Rápida dos Sons Conhecidos",
              letras: ["L", "N", "M", "V", "S", "Z"],
              instrucao: "O pai faz o som, as crianças mostram a letra e a boca!",
              guia: "Alterne os cartões rapidamente.",
              porque: "Dehaene: Consolidação da automaticidade perceptual."
            },
            {
              tipo: "decodificavel",
              titulo: "Giuseppe Lê: Caça ao Tesouro com L e N!",
              palavras: ["LUA", "MALA", "NAVE", "SINO", "NOVE", "LONA", "VELA"],
              instrucao: "Ache o post-it, leia a palavra em voz alta e cole no quadro!",
              guia: "Giuseppe decodifica cada palavra com rigor e autonomia.",
              porque: "Dehaene: A caça ativa o circuito de engajamento e recompensa."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Fonológica Diferenciada",
              t4: "🦁 Frantiesco (4 anos): Encontrar qual post-it tem a letra L da língua cantora e fazer o som: LLLLL!",
              t5: "🚀 Giuseppe (5 anos): Montar as palavras LUA, MALA e NAVE com letras móveis e ler em voz alta.",
              guia: "Comemore a leitura rápida de Giuseppe!",
              porque: "Project Follow Through: Maestria acadêmica fortalece a autoeficácia."
            }
          ]
        },
        {
          tipo: "motor",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 3 · Grafomotricidade & Prática Guiada",
              subtitulo: "Escrita de Palavras com L e N & Formas",
              guia: "Voltem à mesa para o registro escrito.",
              porque: "Singapura NIE: Integração visuo-motora diária."
            },
            {
              tipo: "aquecimentoMotor",
              titulo: "Aquecimento: O Voo da Gaivota",
              passos: [
                "Abra e feche os dedos das duas mãos com amplitude suave como asas de pássaro.",
                "Sacuda as mãos para relaxar os punhos."
              ],
              guia: "Relaxamento dos tendões flexores da mão.",
              porque: "MEXT Japão: Controle proprioceptivo e relaxamento manual."
            },
            {
              tipo: "trilhas",
              titulo: "Atividade Diferenciada de Mesa",
              t4: "🦁 Frantiesco (4 anos): Cobrir o contorno das 4 formas geométricas desenhadas no papel colando barbante ou lã colorida.",
              t5: "🚀 Giuseppe (5 anos): Escrever no caderno: LUA, MALA, NAVE, SINO e a frase 'A MENINA LEVA A MALA' com letra bastão caprichada.",
              guia: "Supervisione o espaçamento entre as palavras de Giuseppe.",
              porque: "Alfa e Beto: Orientação espacial na pauta caligráfica."
            }
          ]
        },
        {
          tipo: "leitura",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 4 · Leitura Compartilhada & Trava-Línguas",
              subtitulo: "Trava-Línguas do Ninho & Arrumação MEXT",
              guia: "Trava-línguas clássico e desafiador da língua portuguesa.",
              porque: "Capovilla: Agilidade fonatória e discriminação auditiva apurada."
            },
            {
              tipo: "travaLingua",
              titulo: "O Ninho de Mafagafos",
              texto: "Num ninho de mafagafos\nHá cinco mafagafinhos.\nQuem desmafagafizar o ninho de mafagafos,\nBom desmafagafizador será!",
              perguntas: [
                "Quantos mafagafinhos há no ninho? Cinco!",
                "Onde eles moram? Num ninho!",
                "Quem consegue falar bem devagar: 'Num ninho de mafagafos'?"
              ],
              guia: "Riam juntos com as voltas que a língua dá.",
              porque: "Dehaene: O afeto positivo consolida a memória linguística."
            },
            {
              tipo: "arrumacao",
              titulo: "Desafio de Arrumação MEXT (5 min)",
              missao: "Guardar todos os materiais contando as 4 formas!",
              passos: [
                "Frantiesco recolhe os post-its e coloca no pote.",
                "Giuseppe organiza as peças do Tangram na caixa.",
                "Mesa impecável para a sexta-feira de revisão!"
              ],
              guia: "Elogie a rapidez e o cuidado.",
              porque: "MEXT Japão: Autonomia prática e senso comunitário."
            }
          ]
        }
      ]
    },
    {
      dia: 5,
      nome: "Sexta-feira",
      foco: "Jogos com Tangram, Ditado Fônico de L e N & Checklist de 80%",
      blocos: [
        {
          tipo: "matematica",
          tempoMin: 15,
          slides: [
            {
              tipo: "capa",
              titulo: "Semana 7 · Sexta-feira",
              subtitulo: "Desafio do Tangram, Formas 2D & Checklist de 80%",
              guia: "Sexta-feira de consolidação festiva e avaliação semanal!",
              porque: "Rosenshine: Prática cumulativa com alta taxa de sucesso (80%)."
            },
            {
              tipo: "calendario",
              titulo: "Balanço da Semana 7 no Calendário",
              perguntas: [
                "Fechamos a Semana 7 de aulas em família!",
                "Quantos dias faltam para o aniversário do Frantiesco (11/11)?",
                "E quantos dias faltam para o aniversário do Giuseppe (20/07)?"
              ],
              guia: "Parabenize as crianças pela consistência exemplar.",
              porque: "MEXT Japão: Celebração do esforço e constância familiar."
            },
            {
              tipo: "jogoOral",
              titulo: "O Desafio do Tangram da Sexta",
              instrucao: "O pai mostra uma figura feita de formas geométricas (um barquinho ou um gatinho). Quem consegue montar igual com as peças do Tangram primeiro?",
              palavrasExemplo: ["Barco: 1 quadrado e 2 triângulos!", "Casa: 1 quadrado e 1 triângulo em cima!"],
              guia: "Jogue em clima de colaboração mútua.",
              porque: "Singapura Math: Raciocínio espacial e síntese geométrica."
            },
            {
              tipo: "trilhas",
              titulo: "Desafio Matemático da Sexta",
              t4: "🦁 Frantiesco (4 anos): Apontar e nomear com 100% de acerto as 4 formas: círculo, quadrado, triângulo e retângulo.",
              t5: "🚀 Giuseppe (5 anos): Montar uma casa usando 1 quadrado e 1 triângulo e descrever os lados e cantos de cada figura.",
              guia: "Cheque o domínio seguro de Giuseppe.",
              porque: "Rosenshine: Avaliação formativa semanal."
            }
          ]
        },
        {
          tipo: "fonica",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 2 · Alfabetização Fônica",
              subtitulo: "Ditado Fônico de Palavras com L e N & Autocorreção",
              guia: "Tapete. Cartões de todas as letras ativas prontos.",
              porque: "Rosenshine: Ditado cumulativo aleatório de palavras decodificáveis."
            },
            {
              tipo: "revisaoSons",
              titulo: "Revisão Rápida dos Sons: L, N, M, F, V, S, Z",
              letras: ["L", "N", "M", "F", "V", "S", "Z"],
              instrucao: "O pai faz o som, as crianças mostram o cartão! O pai mostra o cartão, as crianças fazem o som e a boca no espelho!",
              guia: "Alterne aleatoriamente com agilidade total.",
              porque: "Dehaene: Consolidação neural pela evocação descontextualizada."
            },
            {
              tipo: "ditado",
              titulo: "Ditado Fônico Semanal (Giuseppe)",
              palavras: ["LUA", "MALA", "NAVE", "NOVE", "VELA", "SINO", "LONA"],
              instrucao: "O pai dita com voz clara: 'LUA', 'MALA', 'NAVE', 'SINO'. Giuseppe escreve no papel. Depois revela na tela para conferir e corrigir sozinho!",
              guia: "Mostre o slide de correção. Deixe Giuseppe marcar um visto verde ao lado de cada palavra correta.",
              porque: "Dehaene: Feedback de erro imediato promove reconfiguração sináptica duradoura."
            }
          ]
        },
        {
          tipo: "motor",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 3 · Grafomotricidade & Prática Independente",
              subtitulo: "Construção com Tangram & Escrita Independente",
              guia: "Mesa serena e silenciosa.",
              porque: "Estônia Curriculum: Cultivo da stamina de atenção independente."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Independente da Sexta",
              t4: "🦁 Frantiesco (4 anos): Construir livremente figuras com o Tangram por 10 minutos de foco silencioso.",
              t5: "🚀 Giuseppe (5 anos): Escrever a frase 'A MENINA LEVA A MALA' no caderno pautado com letra bastão caprichada e sem ajuda.",
              guia: "Observe em silêncio o orgulho de Giuseppe escrevendo uma frase inteira sozinho.",
              porque: "Singapura NIE: Autonomia de assento e escrita contínua sustentada."
            }
          ]
        },
        {
          tipo: "leitura",
          tempoMin: 15,
          slides: [
            {
              tipo: "bloco",
              titulo: "Bloco 4 · Avaliação de 80% & Celebração",
              subtitulo: "Checklist da Semana 7 & Encerramento",
              guia: "Momento de verificar os critérios de 80% antes de avançar para a Semana 8.",
              porque: "Rosenshine & Sobral: Avanço curricular baseado em evidência real de domínio."
            },
            {
              tipo: "historia",
              titulo: "Reconto das Histórias com L e N",
              texto: "Esta semana conhecemos a Menina Luísa cantando para a lua cheia (LLLLL!) e o Menino Nino com seu naviozinho no mar (NNNNN!). Quem consegue imitar os dois sons juntos?",
              perguntas: [
                "Frantiesco, onde a pontinha da língua bate quando fazemos o som da lua? No céu da boca!",
                "Giuseppe, onde o Nino apontou o dedinho para fazer o som do navio? No nariz!",
                "Quem consegue ler a frase: 'A LUA É NOVA'?"
              ],
              guia: "Deixe as crianças recontarem a história livremente.",
              porque: "Singapura NEL: Desenvolvimento da narrativa oral autônoma."
            },
            {
              tipo: "checklist",
              titulo: "Checklist de Domínio de 80% (Semana 7)",
              guia: "Marque os itens conquistados por Frantiesco e Giuseppe. Se atingirem 80% ou mais, parabéns! Estão prontos para a Semana 8 (Consoantes J e X e Posição Espacial). Se for menor, reforce L e N na próxima semana.",
              porque: "Rosenshine: A regra dos 80% de maestria para prosseguir."
            },
            {
              tipo: "arrumacao",
              titulo: "Arrumação Geral e Comemoração da Semana 7",
              missao: "Guardar todos os materiais nas caixas e pastas!",
              passos: [
                "Arquivar os registros nas pastas do Frantiesco e do Giuseppe.",
                "Fechar e organizar as peças do Tangram e os cartões de letras.",
                "Grande abraço de fim de semana! Parabéns, campeões!"
              ],
              guia: "Comemore calorosamente com os dois!",
              porque: "MEXT Japão: Hábito de responsabilidade e orgulho familiar."
            }
          ]
        }
      ]
    }
  ]
});
