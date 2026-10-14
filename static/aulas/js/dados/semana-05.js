// ============================================================================
// SEMANA 5 — Consoantes V e S & Sílabas Abertas | Quantidades 8 e 9 & Padrões AABB/ABC
// ============================================================================

window.AULAS = window.AULAS || {};

window.AULAS.registrarSemana({
  numero: 5,
  titulo: "Consoantes V e S · Quantidades 8 e 9 & Padrões AABB/ABC",
  focoGeral: "Introdução dos fonemas /v/ (ventilador sonoro) e /s/ (cobrinha sibilante), contraste surdo/sonoro com F e V, leitura de palavras decodificáveis com V e S (UVA, OVO, AVÓ, SOFÁ, SUA, SEU, SOMA, SUAVE), quantidades 8 e 9 no Quadro de Dez e padrões complexos AABB e ABC.",
  letrasNovas: ["V", "S"],
  letrasConhecidas: ["A", "E", "I", "O", "U", "M", "F", "V", "S"],
  materiais: [
    "Cubos de encaixe (vermelhos, azuis e amarelos para padrões ABC)",
    "Quadro de Dez (duas fileiras de 5 casas) para quantidades 8 e 9",
    "Fichas de pontos estruturados em base 5 (5+3=8, 5+4=9)",
    "Espelho de mão para contraste tátil entre F (sem voz) e V (com voz na garganta)",
    "Letras móveis de EVA ou plástico (vogais + M, F, V, S)",
    "Massinha de modelar e contas para alinhavar em padrões",
    "Post-its para caça ao tesouro com palavras (UVA, OVO, SOFÁ, SOMA)",
    "Folha pautada ampliada e lápis triangular"
  ],
  checklist: {
    t4: [
      "Produz o som /v/ sentindo o motorzinho da garganta tremer forte com a mão espalmada",
      "Produz o som sibilante /s/ com os dentes fechados imitando a cobrinha",
      "Identifica auditivamente se uma palavra começa com /v/ (VACA) ou /s/ (SAPO)",
      "Continua um padrão linear AABB (vermelho, vermelho, azul, azul...)",
      "Conta até 9 objetos reais sem perder a correspondência um-a-um"
    ],
    t5: [
      "Diferencia com clareza o som surdo /f/ do som sonoro /v/ pela vibração na garganta",
      "Decodifica e lê com autonomia palavras com V e S: UVA, OVO, AVÓ, SOFÁ, SUA, SEU, SOMA, SUAVE, AVE",
      "Decompõe os números 8 (5+3, 4+4) e 9 (5+4, 6+3) no Quadro de Dez e no diagrama de ligações",
      "Traça as letras V e S bastão com orientação espacial correta (S sem espelhamento)",
      "Escreve frases curtas sob ditado fônico ('EU VI A AVE') com separação entre as palavras"
    ]
  },
  dias: [
    {
      dia: 1,
      nome: "Segunda-feira",
      foco: "Introdução da Consoante V & Quantidade 8 (Âncora 5 + 3)",
      blocos: [
        {
          tipo: "matematica",
          tempoMin: 15,
          slides: [
            {
              tipo: "capa",
              titulo: "Semana 5 · Segunda-feira",
              subtitulo: "Matemática Singapura: O Número 8 (5 + 3 no Quadro de Dez)",
              guia: "Iniciamos a Semana 5 com a quantidade 8 estruturada em 5+3.",
              porque: "Singapura Math: A estrutura de base 5 torna a quantidade 8 imediatamente reconhecível sem contagem unitária."
            },
            {
              tipo: "calendario",
              titulo: "Calendário do Dia & Contagem Regressiva",
              perguntas: [
                "Segunda-feira da Semana 5!",
                "Que dia foi ontem? Domingo! Que dia será amanhã?",
                "Contagem regressiva: Quantos dias faltam para o aniversário do Frantiesco (11/11)?",
                "E quantos dias faltam para a nossa Sexta-feira?"
              ],
              guia: "Aponte o dia de hoje no calendário com os dedinhos das crianças.",
              porque: "MEXT Japão: Hábitos diários de organização temporal."
            },
            {
              tipo: "subitizar",
              titulo: "Quadro de Dez Relâmpago (Quantidade 8)",
              quantidades: [8, 7, 8, 6],
              instrucao: "Olhe rápido: 5 na linha de cima e 3 na linha de baixo! Quantos pontos? Oito!",
              guia: "Use o botão Flash (~1,5 s). Aponte: '5 e 3 fazem 8 na hora!'",
              porque: "Singapura Math: Subitização conceitual baseada em 5+3."
            },
            {
              tipo: "concreto",
              titulo: "Construção Concreta do 8: Torre 5 + 3",
              passos: [
                "Monte uma torre com 5 cubos vermelhos.",
                "Encaixe 3 cubos azuis no topo: '5 e mais 3 fazem 8!'.",
                "Distribua no Quadro de Dez: 5 em cima, 3 embaixo."
              ],
              guia: "Deixe Frantiesco e Giuseppe montarem suas torres de 5+3.",
              porque: "Singapura CPA: Concreto (fazer) antes do registro abstrato."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Matemática Guiada",
              t4: "🦁 Frantiesco (4 anos): Colocar 8 tampinhas sobre o Quadro de Dez (5 em cima e 3 embaixo).",
              t5: "🚀 Giuseppe (5 anos): Registrar a ligação numérica do 8 no papel: Todo = 8, Partes = 5 e 3. Escrever o numeral 8.",
              guia: "Incentive Giuseppe a dizer em voz alta: '8 é 5 e mais 3!'.",
              porque: "Rosenshine: Verbalização da regra e prática estruturada."
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
              subtitulo: "A Consoante do Ventilador: Letra V & Contraste F vs V",
              guia: "Tapete. Pegue o espelho e coloque a mão espalmada na garganta.",
              porque: "Puliezi (2018): Par mínimo articulatório (F surdo vs V sonoro)."
            },
            {
              tipo: "revisaoSons",
              titulo: "Revisão do Som /f/",
              letras: ["F"],
              instrucao: "Mão na frente da boca: solte o vento /f/! A garganta treme? Não treme!",
              guia: "Sinta que o som /f/ é só sopro de ar fresco.",
              porque: "Capovilla: Consciência do traço de sonoridade (voiceless)."
            },
            {
              tipo: "fonema",
              letra: "V",
              guia: "Coloque a mão firme na garganta: os dentes encostam no lábio de baixo, mas agora LIGAMOS O MOTOR DA GARGANTA: 'VVVVVV!'. Sinta a garganta tremer feito um ventilador ou celular vibrando!",
              porque: "Capovilla & Seabra: O contraste tátil na laringe ancora a diferença física entre F e V."
            },
            {
              tipo: "decodificavel",
              titulo: "Giuseppe Lê: Sílabas e Palavras com V!",
              palavras: ["UVA", "OVO", "AVE", "VIU"],
              frase: "EU VI A UVA",
              instrucao: "Junte os sons conhecidos: U + VA = UVA! O + VO = OVO! A + VE = AVE! E + U + V + I = EU VI!",
              guia: "Deslize o dedinho ligando as letras. Comemore: Giuseppe lê palavras que fazem parte do lanche e do café da manhã!",
              porque: "Capovilla & Seabra: Decodificação imediata de vocabulário de alta frequência."
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
              subtitulo: "Traçado da Letra V & Numeral 8",
              guia: "Voltem à mesa para a prática caligráfica.",
              porque: "Alfa e Beto: A letra V exige descida inclinada e subida inclinada simétrica."
            },
            {
              tipo: "aquecimentoMotor",
              titulo: "Aquecimento: O Vale Profundo",
              passos: [
                "Com o dedinho no ar: 'Desce a ladeira escorregando, bate no fundo do vale e sobe até o topo!'.",
                "Trace 3 vezes na caixa de areia/fubá a letra V bem aberta e pontuda embaixo."
              ],
              guia: "Verifique que a ponta inferior do V fique pontudinha, sem arredondar.",
              porque: "MEXT Japão: Controle de traços diagonais convergentes."
            },
            {
              tipo: "trilhas",
              titulo: "Atividade Diferenciada de Mesa",
              t4: "🦁 Frantiesco (4 anos): Fazer duas cobrinhas retas de massinha e unir embaixo formando a letra V.",
              t5: "🚀 Giuseppe (5 anos): Traçar a letra V e o numeral 8 na pauta ampliada. Escrever as palavras UVA e OVO.",
              guia: "Para o numeral 8: 'Começa no topo, faz a curvinha de um S, cruza pelo meio e fecha lá em cima!'.",
              porque: "Rosenshine: Instrução explícita de passos motores."
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
              subtitulo: "História Curta: O Ventilador da Vovó Vera",
              guia: "Leitura acolhedora com foco no som /v/ e vocabulário ativo.",
              porque: "Singapura NEL: Leitura compartilhada diária com diálogo e reflexão."
            },
            {
              tipo: "historia",
              titulo: "O Ventilador da Vovó Vera",
              texto: "No sítio da vovó Vera, a tarde estava muito quente. A vovó ligou o ventilador prateado na sala. As pás começaram a girar velozes: VVVVVV! Um ventinho fresco espalhou as cortinas. O gatinho deitou no tapete e dormiu ouvindo o zumbido gostoso do ventilador.",
              perguntas: [
                "Qual é o nome da vovó? Vera começa com qual som? /v/!",
                "O que ela ligou na sala? O ventilador!",
                "Como o ventilador zumbia enquanto girava? VVVVVV!"
              ],
              guia: "Imitem juntos o som do ventilador sentindo a garganta vibrar.",
              porque: "Dehaene: Engajamento ativo e memória cinestésica."
            },
            {
              tipo: "arrumacao",
              titulo: "Desafio de Arrumação MEXT (5 min)",
              missao: "Guardar os 8 cubos organizando em 5 + 3!",
              passos: [
                "Frantiesco guarda os 5 cubos vermelhos.",
                "Giuseppe guarda os 3 cubos azuis.",
                "Checagem da mesa: brilhando de limpa!"
              ],
              guia: "Parabéns aos dois pelo capricho.",
              porque: "MEXT Japão: Hábito diário de finalização com foco matemático."
            }
          ]
        }
      ]
    },
    {
      dia: 2,
      nome: "Terça-feira",
      foco: "Caixa Misteriosa do V & Ligações do 8 (4 + 4)",
      blocos: [
        {
          tipo: "matematica",
          tempoMin: 15,
          slides: [
            {
              tipo: "capa",
              titulo: "Semana 5 · Terça-feira",
              subtitulo: "Matemática Singapura: Ligações do 8 (Duplas Iguais 4 + 4)",
              guia: "Hoje Giuseppe descobre a metade e o dobro de 4 de forma concreta.",
              porque: "Singapura Math: Duplas iguais (doubles) consolidam o senso numérico avançado."
            },
            {
              tipo: "calendario",
              titulo: "Calendário do Dia",
              perguntas: [
                "Terça-feira da Semana 5!",
                "Que dia foi ontem? Que dia será amanhã?",
                "Contagem regressiva especial: Quantos dias faltam para o aniversário do Giuseppe (20/07)?"
              ],
              guia: "Marque os dias no calendário de papel.",
              porque: "MEXT Japão: Ordenação ordinal e passagem dos dias."
            },
            {
              tipo: "subitizar",
              titulo: "Quadro de Dez Relâmpago (8 pontos)",
              quantidades: [8, 6, 8, 7],
              instrucao: "Olhos atentos! Quantos pontos você vê?",
              guia: "Mostre o 8 como duas fileiras de 4 no quadro.",
              porque: "Singapura Math: Representações geométricas alternativas da mesma quantidade."
            },
            {
              tipo: "ligacao",
              titulo: "Ligações do 8: O Dobro de 4 (4 e 4)",
              todo: 8,
              parte1: 4,
              parte2: 4,
              instrucao: "Monte uma torre com 8 cubos: 4 vermelhos e 4 azuis! Quebre ao meio: duas partes exatamente iguais! 4 e 4 fazem 8!",
              guia: "Mostre a simetria perfeita da torre de 8 dividida em duas partes de 4.",
              porque: "Singapura CPA: Noção intuitiva de divisão por 2 e multiplicação por 2."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Matemática Guiada",
              t4: "🦁 Frantiesco (4 anos): Separar 8 cubos em dois pratos: 4 num prato e 4 no outro, vendo que ficam com a mesma quantidade.",
              t5: "🚀 Giuseppe (5 anos): Registrar as duas ligações do 8 no papel: 8 = 5 + 3 e 8 = 4 + 4 no diagrama de círculos.",
              guia: "Giuseppe escreve as partes no diagrama.",
              porque: "Rosenshine: Prática guiada e consolidação por escrito."
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
              subtitulo: "Caixa Misteriosa do V & Isolamento Auditivo",
              guia: "Tapete. Caixa misteriosa com figuras e objetos que começam com V.",
              porque: "Capovilla: Discriminação auditiva e isolamento de fonema inicial."
            },
            {
              tipo: "revisaoSons",
              titulo: "Revisão dos Sons: Vogais e Consoantes M, F, V",
              letras: ["A", "E", "I", "O", "U", "M", "F", "V"],
              instrucao: "O pai faz o som e as crianças mostram a boca no espelho!",
              guia: "Cheque a garganta vibrando no V e quieta no F.",
              porque: "Dehaene: Consolidação da memória de contraste fono-articulatório."
            },
            {
              tipo: "caixaMisteriosa",
              titulo: "O Jogo da Caixa Misteriosa do Som /v/",
              itens: [
                { nome: "VELA", inicial: "/v/", pertence: true },
                { nome: "VULCÃO", inicial: "/v/", pertence: true },
                { nome: "FACA", inicial: "/f/", pertence: false },
                { nome: "VASO", inicial: "/v/", pertence: true }
              ],
              instrucao: "Tire uma carta da caixa: VELA! Começa com o motorzinho /v/? Sim! FACA começa com /v/? Não, começa com /f/!",
              guia: "Deixe as crianças colocarem a mão no pescoço para testar cada palavra.",
              porque: "Capovilla & Seabra: O teste do toque na garganta dá feedback imediato e objetivo de sonoridade."
            },
            {
              tipo: "onibus",
              titulo: "O Ônibus da Frase (3 Palavras)",
              frase: "A VOVÓ VÊ",
              palavras: ["A", "VOVÓ", "VÊ"],
              instrucao: "Coloque uma tampinha para cada palavra da frase!",
              guia: "Mostre que todas as palavras desta frase são curtinhas.",
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
              subtitulo: "Padrão Linear AABB com Contas & Escrita",
              guia: "Voltem à mesa para o treino motor e estrutural.",
              porque: "Singapura NIE: Padrões com manipulativos desenvolvem coordenação bimanual e sequenciamento lógico."
            },
            {
              tipo: "aquecimentoMotor",
              titulo: "Aquecimento: O Padrão dos Dedos",
              passos: [
                "Bata na mesa: 'polegar, polegar, indicador, indicador' (AABB).",
                "Repita o ritmo com as duas mãos juntas."
              ],
              guia: "Estimula o ritmo motor e o controle inibitório.",
              porque: "MEXT Japão: Ritmo e coordenação motora fina."
            },
            {
              tipo: "trilhas",
              titulo: "Atividade Diferenciada de Mesa",
              t4: "🦁 Frantiesco (4 anos): Enfiar contas num cordão seguindo o padrão AABB: 2 vermelhas, 2 azuis, 2 vermelhas, 2 azuis...",
              t5: "🚀 Giuseppe (5 anos): Escrever com lápis na pauta ampliada: VA, VE, VI, VO, VU e a palavra UVA (3 vezes).",
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
              subtitulo: "Parlenda da Vaca Amarela & Arrumação MEXT",
              guia: "Parlenda popular clássica e divertida.",
              porque: "Capovilla: Controle inibitório e atenção sustentada em brincadeiras de silêncio."
            },
            {
              tipo: "travaLingua",
              titulo: "A Vaca Amarela",
              texto: "Vaca amarela\nPulou a janela,\nQuem falar primeiro\nCome a bosta dela!",
              perguntas: [
                "Quem pulou a janela? A vaca amarela!",
                "Qual é a regra da brincadeira? Quem falar primeiro perde!",
                "Agora: um, dois, três... Silêncio absoluto por 10 segundos!"
              ],
              guia: "Desafio de silêncio e autorregulação infantil com risadas no final.",
              porque: "Estônia Curriculum: Cultivo do controle inibitório e da autorregulação através do riso."
            },
            {
              tipo: "arrumacao",
              titulo: "Desafio de Arrumação MEXT (5 min)",
              missao: "Guardar os blocos organizando a ligação 4 + 4!",
              passos: [
                "Frantiesco guarda os 4 cubos vermelhos.",
                "Giuseppe guarda os 4 cubos azuis.",
                "Checagem da mesa: tudo organizado!"
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
      foco: "Introdução da Consoante S & Quantidade 9 (Âncora 5 + 4)",
      blocos: [
        {
          tipo: "matematica",
          tempoMin: 15,
          slides: [
            {
              tipo: "capa",
              titulo: "Semana 5 · Quarta-feira",
              subtitulo: "Matemática Singapura: O Número 9 (5 + 4 no Quadro de Dez)",
              guia: "Apresentamos o número 9: quase enchendo o Quadro de Dez (falta só 1 para 10!).",
              porque: "Singapura Math: Compreender 9 como 5+4 e como '1 a menos que 10' prepara para o Make 10."
            },
            {
              tipo: "calendario",
              titulo: "Calendário do Dia",
              perguntas: [
                "Quarta-feira! Meio da Semana 5!",
                "Que dia foi ontem? Que dia será amanhã?",
                "Contagem regressiva: Quantos dias faltam para a Páscoa?"
              ],
              guia: "Aponte no calendário de parede.",
              porque: "MEXT Japão: Regularidade diária de orientação temporal."
            },
            {
              tipo: "subitizar",
              titulo: "Quadro de Dez Relâmpago (Quantidade 9)",
              quantidades: [9, 8, 9, 7],
              instrucao: "Olhe rápido: 5 em cima e 4 embaixo! Falta só uma casa vazia para encher! Quantos pontos? Nove!",
              guia: "Use o botão Flash. Destaque: 'Quando falta só 1 quadradinho vazio no quadro de dez, é 9!'.",
              porque: "Singapura Math: Reconhecimento por complementação visual ao 10."
            },
            {
              tipo: "concreto",
              titulo: "Construção Concreta do 9: Torre 5 + 4",
              passos: [
                "Monte uma torre com 5 cubos vermelhos.",
                "Adicione 4 cubos azuis no topo: '5 e mais 4 fazem 9!'.",
                "Preencha o Quadro de Dez: 5 em cima, 4 embaixo. Aponte a casa vazia!"
              ],
              guia: "Deixe Frantiesco e Giuseppe tocarem na casa vazia: 'Falta só 1 para 10!'.",
              porque: "Singapura CPA: Concreto (fazer) antes do registro abstrato."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Matemática Guiada",
              t4: "🦁 Frantiesco (4 anos): Colocar 9 tampinhas no Quadro de Dez e apontar onde está a casa que ficou sem tampinha.",
              t5: "🚀 Giuseppe (5 anos): Registrar a ligação numérica do 9 no papel: Todo = 9, Partes = 5 e 4. Escrever o numeral 9.",
              guia: "Incentive Giuseppe a dizer: '9 é 5 e mais 4!'.",
              porque: "Rosenshine: Prática guiada com verbalização."
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
              subtitulo: "A Consoante da Cobrinha: Letra S & Método das Onomatopeias",
              guia: "Tapete. Pegue o espelho para ver os dentes fechados.",
              porque: "Puliezi (2018): Fonema sibilante contínuo /s/."
            },
            {
              tipo: "revisaoSons",
              titulo: "Revisão dos Sons: M, F, V",
              letras: ["M", "F", "V"],
              instrucao: "Comida gostosa (M), Vento (F), Ventilador (V)! Agora vamos conhecer a cobrinha!",
              guia: "Alterne os cartões rapidamente.",
              porque: "Rosenshine: Revisão cumulativa espaçada."
            },
            {
              tipo: "fonema",
              letra: "S",
              guia: "Feche os dentes da frente e solte o ar contínuo sem voz: 'SSSSSS!'. A cobrinha desliza no mato sem fazer barulho, só o chiadinho sibilante!",
              porque: "Capovilla: Consciência articulatória da fricativa alveolar surda /s/."
            },
            {
              tipo: "decodificavel",
              titulo: "Giuseppe Lê: Sílabas e Palavras com S!",
              palavras: ["SOFÁ", "SUA", "SEU", "SOMA"],
              frase: "O MEU SOFÁ É FOFO",
              instrucao: "Junte o som da cobrinha com as vogais: /s/ + /o/ = SO! /s/ + /u/ = SU! Agora leia a frase inteira com orgulho: O MEU SOFÁ É FOFO!",
              guia: "Deslize o dedo embaixo de cada palavra da frase. Giuseppe lê uma sentença completa com sentido pleno!",
              porque: "Capovilla & Seabra: Decodificação de palavras de 2 sílabas com fonemas acumulados."
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
              subtitulo: "Traçado Curvo em S & Numeral 9",
              guia: "Voltem à mesa para a prática caligráfica.",
              porque: "Alfa e Beto: O traçado do S exige dupla reversão de curva contínua, uma das habilidades motoras mais complexas para 5 anos."
            },
            {
              tipo: "aquecimentoMotor",
              titulo: "Aquecimento: O Rastejo da Cobrinha",
              passos: [
                "Com o dedinho no ar: 'Começa em cima, faz a curva para a esquerda, cruza para a direita e faz a curva embaixo!'.",
                "Trace 3 vezes na caixa de areia/fubá a letra S bem grande e sinuosa."
              ],
              guia: "Atenção: evite o espelhamento do S. Mostre que ele começa curvando para a esquerda.",
              porque: "Alfa e Beto: Prevenção precoce do espelhamento de caracteres."
            },
            {
              tipo: "trilhas",
              titulo: "Atividade Diferenciada de Mesa",
              t4: "🦁 Frantiesco (4 anos): Moldar uma cobrinha comprida de massinha e dobrar em formato de S na mesa.",
              t5: "🚀 Giuseppe (5 anos): Traçar a letra S e o numeral 9 na pauta ampliada. Escrever as palavras SOFÁ e SUA.",
              guia: "Observe a precisão do traçado do S e do 9 de Giuseppe.",
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
              subtitulo: "História Curta: A Cobrinha Sofia",
              guia: "História com foco no fonema /s/ e vocabulário ativo.",
              porque: "Singapura NEL: Leitura compartilhada com perguntas reflexivas."
            },
            {
              tipo: "historia",
              titulo: "A Cobrinha Sofia no Sofá",
              texto: "Na sala da casa, a cobrinha Sofia viu um sofá azul bem fofinho. Ela subiu devagarinho, escorregando na almofada: SSSSSS! Deitou enroladinha e deu um suspiro suave: Que delícia de sofá macio! Eu amo tirar uma soneca aqui!",
              perguntas: [
                "Qual é o nome da cobrinha? Sofia começa com qual som? /s/!",
                "Onde a cobrinha Sofia subiu para tirar uma soneca? No sofá fofinho!",
                "Como ela fez ao escorregar na almofada? SSSSSS!"
              ],
              guia: "Imitem juntos o deslizar da cobrinha com as mãos.",
              porque: "Dehaene: Engajamento ativo e conexão afetiva com a leitura."
            },
            {
              tipo: "arrumacao",
              titulo: "Desafio de Arrumação MEXT (5 min)",
              missao: "Guardar os 9 cubos organizando em 5 + 4!",
              passos: [
                "Frantiesco guarda os 5 cubos da linha de cima.",
                "Giuseppe guarda os 4 cubos da linha de baixo.",
                "Checagem da mesa: tudo organizado!"
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
      foco: "Caça ao Tesouro com Palavras de V e S & Padrões ABC",
      blocos: [
        {
          tipo: "matematica",
          tempoMin: 15,
          slides: [
            {
              tipo: "capa",
              titulo: "Semana 5 · Quinta-feira",
              subtitulo: "Matemática Singapura: Padrões ABC & Ligações do 9 (6 + 3)",
              guia: "Quinta-feira: exploramos o padrão de 3 cores (ABC) e a ligação 6+3=9.",
              porque: "Singapura NEL: Padrões ternários (ABC) exigem maior capacidade de memória de trabalho."
            },
            {
              tipo: "calendario",
              titulo: "Calendário do Dia",
              perguntas: [
                "Quinta-feira da Semana 5! Amanhã é a nossa Sexta de revisão!",
                "Contagem regressiva: Quantos dias faltam para o Natal (25/12)?"
              ],
              guia: "Conte os dias no calendário físico.",
              porque: "MEXT Japão: Noção temporal aplicada à rotina."
            },
            {
              tipo: "padrao",
              titulo: "Padrão Linear ABC (Vermelho - Azul - Amarelo)",
              sequencia: ["🔴", "🔵", "🟡", "🔴", "🔵", "🟡", "🔴"],
              proximo: "🔵",
              instrucao: "Atenção ao padrão de 3 cores: Vermelho, Azul, Amarelo... Vermelho, Azul, Amarelo... Vermelho... Quem vem agora? Azul!",
              guia: "Construa com cubos reais na mesa primeiro.",
              porque: "Singapura Math: Extensão de padrões ternários."
            },
            {
              tipo: "ligacao",
              titulo: "Ligação do 9: A Parte 6 e a Parte 3",
              todo: 9,
              parte1: 6,
              parte2: 3,
              instrucao: "Monte uma torre com 9 cubos: 6 vermelhos e 3 azuis! 6 e 3 fazem 9! Se temos 9 e tiramos 3, sobram 6!",
              guia: "Deixe Giuseppe quebrar a torre de 9 em 6 e 3.",
              porque: "Singapura Math: Decomposição flexível do número 9."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Matemática Guiada",
              t4: "🦁 Frantiesco (4 anos): Continuar o padrão ABC de cubos coloridos na mesa (vermelho, azul, amarelo...).",
              t5: "🚀 Giuseppe (5 anos): Registrar as duas ligações do 9 no papel: 9 = 5 + 4 e 9 = 6 + 3 no diagrama de círculos.",
              guia: "Giuseppe escreve as equações com autonomia.",
              porque: "Rosenshine: Prática independente monitorada."
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
              subtitulo: "Caça ao Tesouro com Post-its de V e S",
              guia: "Prepare 4 post-its com as palavras: UVA, OVO, SOFÁ, SOMA colados na sala.",
              porque: "Puliezi (2018): Leitura contextualizada e lúdica em ambiente doméstico."
            },
            {
              tipo: "revisaoSons",
              titulo: "Revisão Rápida dos Sons Conhecidos",
              letras: ["A", "E", "I", "O", "U", "M", "F", "V", "S"],
              instrucao: "O pai faz o som, as crianças mostram a letra e a boca!",
              guia: "Alterne os cartões rapidamente.",
              porque: "Dehaene: Consolidação da automaticidade perceptual."
            },
            {
              tipo: "decodificavel",
              titulo: "Giuseppe Lê: Jogo da Caça ao Tesouro com V e S!",
              palavras: ["UVA", "OVO", "SOFÁ", "SOMA", "SUA", "SEU", "SUAVE"],
              instrucao: "Ache o post-it, leia a palavra em voz alta e cole no quadro!",
              guia: "Giuseppe decodifica cada palavra com rigor e autonomia.",
              porque: "Dehaene: A caça ativa o circuito de engajamento e recompensa."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Fonológica Diferenciada",
              t4: "🦁 Frantiesco (4 anos): Encontrar qual post-it tem a cobrinha S e fazer o som: SSSSSS!",
              t5: "🚀 Giuseppe (5 anos): Montar as palavras UVA, OVO e SOFÁ com letras móveis e ler em voz alta.",
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
              subtitulo: "Escrita de Palavras com V e S & Numerais até 9",
              guia: "Voltem à mesa para o registro escrito.",
              porque: "Singapura NIE: Integração visuo-motora diária."
            },
            {
              tipo: "aquecimentoMotor",
              titulo: "Aquecimento: O Bico da Gaivota",
              passos: [
                "Junte as pontas de todos os 5 dedos de cada mão como bicos fechados.",
                "Abra e feche os bicos 5 vezes com firmeza.",
                "Sacuda as mãos para relaxar os punhos."
              ],
              guia: "Fortalece a musculatura flexora e adutora dos dedos.",
              porque: "MEXT Japão: Controle proprioceptivo e relaxamento manual."
            },
            {
              tipo: "trilhas",
              titulo: "Atividade Diferenciada de Mesa",
              t4: "🦁 Frantiesco (4 anos): Pintar o interior de uma letra S grande desenhada na folha sem ultrapassar os limites.",
              t5: "🚀 Giuseppe (5 anos): Escrever no caderno: UVA, OVO, SOFÁ, SOMA e os numerais 8 e 9 com letra bastão caprichada.",
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
              subtitulo: "Trava-Línguas do Sabiá & Arrumação MEXT",
              guia: "Trava-línguas clássico e desafiador da língua portuguesa.",
              porque: "Capovilla: Agilidade fonatória e discriminação auditiva apurada."
            },
            {
              tipo: "travaLingua",
              titulo: "O Sabiá e o Sábio",
              texto: "O sabiá não sabia\nQue o sábio sabia\nQue o sabiá não sabia assobiar!\nMas o sabiá assobiou!",
              perguntas: [
                "Quem não sabia assobiar? O sabiá!",
                "Quem sabia que ele não sabia? O sábio!",
                "Quem consegue falar bem rápido: 'O sabiá não sabia que o sábio sabia'?"
              ],
              guia: "Riam juntos com as voltas que a língua dá no som /s/.",
              porque: "Dehaene: O afeto positivo consolida a memória linguística."
            },
            {
              tipo: "arrumacao",
              titulo: "Desafio de Arrumação MEXT (5 min)",
              missao: "Guardar todos os materiais contando de 1 a 9!",
              passos: [
                "Frantiesco recolhe os post-its e coloca no pote.",
                "Giuseppe organiza os 9 cubos na caixa.",
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
      foco: "Jogos com Dados, Ditado Fônico de V e S & Checklist de 80%",
      blocos: [
        {
          tipo: "matematica",
          tempoMin: 15,
          slides: [
            {
              tipo: "capa",
              titulo: "Semana 5 · Sexta-feira",
              subtitulo: "Jogos Matemáticos, Ligações de 8 e 9 & Checklist de 80%",
              guia: "Sexta-feira de consolidação festiva e avaliação semanal!",
              porque: "Rosenshine: Prática cumulativa com alta taxa de sucesso (80%)."
            },
            {
              tipo: "calendario",
              titulo: "Balanço da Semana 5 no Calendário",
              perguntas: [
                "Fechamos a Semana 5 de aulas em família!",
                "Quantos dias faltam para o aniversário do Frantiesco (11/11)?",
                "E quantos dias faltam para o aniversário do Giuseppe (20/07)?"
              ],
              guia: "Parabenize as crianças pela consistência exemplar.",
              porque: "MEXT Japão: Celebração do esforço e constância familiar."
            },
            {
              tipo: "jogoOral",
              titulo: "Jogo do 'Faça 8 e Faça 9' com Dados",
              instrucao: "O pai joga o dado. Se cair 5: quanto falta para 8? Três! Se cair 5: quanto falta para 9? Quatro!",
              palavrasExemplo: ["Dado caiu em 5 -> Falta 3 para 8!", "Dado caiu em 4 -> Falta 5 para 9!", "Dado caiu em 6 -> Falta 3 para 9!"],
              guia: "Jogue várias rodadas rápidas com Giuseppe e Frantiesco.",
              porque: "Singapura Math: Fluência no cálculo mental com âncoras de 8 e 9."
            },
            {
              tipo: "trilhas",
              titulo: "Desafio Matemático da Sexta",
              t4: "🦁 Frantiesco (4 anos): Identificar cartões do Quadro de Dez com 8 e 9 pontos sem hesitação.",
              t5: "🚀 Giuseppe (5 anos): Escrever de memória no papel as ligações do 8 (5+3, 4+4) e do 9 (5+4, 6+3).",
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
              subtitulo: "Ditado Fônico de Palavras com V e S & Autocorreção",
              guia: "Tapete. Cartões de todas as letras ativas prontos.",
              porque: "Rosenshine: Ditado cumulativo aleatório de palavras decodificáveis."
            },
            {
              tipo: "revisaoSons",
              titulo: "Revisão Rápida dos 9 Sons: Vogais + M, F, V, S",
              letras: ["A", "E", "I", "O", "U", "M", "F", "V", "S"],
              instrucao: "O pai faz o som, as crianças mostram o cartão! O pai mostra o cartão, as crianças fazem o som e a boca no espelho!",
              guia: "Alterne aleatoriamente com agilidade total.",
              porque: "Dehaene: Consolidação neural pela evocação descontextualizada."
            },
            {
              tipo: "ditado",
              titulo: "Ditado Fônico Semanal (Giuseppe)",
              palavras: ["UVA", "OVO", "SOFÁ", "SUA", "SEU", "SOMA", "AVE"],
              instrucao: "O pai dita com voz clara: 'UVA', 'OVO', 'SOFÁ', 'SOMA'. Giuseppe escreve no papel. Depois revela na tela para conferir e corrigir sozinho!",
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
              subtitulo: "Construção com Blocos & Escrita Independente",
              guia: "Mesa serena e silenciosa.",
              porque: "Estônia Curriculum: Cultivo da stamina de atenção independente."
            },
            {
              tipo: "trilhas",
              titulo: "Prática Independente da Sexta",
              t4: "🦁 Frantiesco (4 anos): Fazer uma torre com 9 cubos sem deixar cair por 10 minutos de foco silencioso.",
              t5: "🚀 Giuseppe (5 anos): Escrever a frase 'EU VI A AVE' no caderno pautado com letra bastão caprichada e sem ajuda.",
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
              subtitulo: "Checklist da Semana 5 & Encerramento",
              guia: "Momento de verificar os critérios de 80% antes de avançar para a Semana 6.",
              porque: "Rosenshine & Sobral: Avanço curricular baseado em evidência real de domínio."
            },
            {
              tipo: "historia",
              titulo: "Reconto das Histórias com V e S",
              texto: "Esta semana conhecemos a Vovó Vera com seu ventilador fresco (VVVVV!) e a Cobrinha Sofia que cochilou no sofá fofo (SSSSS!). Quem consegue imitar os dois sons juntos?",
              perguntas: [
                "Frantiesco, como o ventilador da vovó zumbia? VVVVV!",
                "Giuseppe, onde a cobrinha Sofia dormiu?",
                "Quem consegue ler a frase: 'O SOFÁ É FOFO'?"
              ],
              guia: "Deixe as crianças recontarem a história livremente.",
              porque: "Singapura NEL: Desenvolvimento da narrativa oral autônoma."
            },
            {
              tipo: "checklist",
              titulo: "Checklist de Domínio de 80% (Semana 5)",
              guia: "Marque os itens conquistados por Frantiesco e Giuseppe. Se atingirem 80% ou mais, parabéns! Estão prontos para a Semana 6 (Consoante Z e 'Faça 10'). Se for menor, reforce V e S na próxima semana.",
              porque: "Rosenshine: A regra dos 80% de maestria para prosseguir."
            },
            {
              tipo: "arrumacao",
              titulo: "Arrumação Geral e Comemoração da Semana 5",
              missao: "Guardar todos os materiais nas caixas e pastas!",
              passos: [
                "Arquivar os registros nas pastas do Frantiesco e do Giuseppe.",
                "Fechar e organizar os cubos e os dados.",
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
