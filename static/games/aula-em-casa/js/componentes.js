// ============================================================================
// COMPONENTES DE RENDERIZAÇÃO DOS SLIDES
// Cada função recebe os dados do slide e retorna o HTML correspondente.
// ============================================================================

window.AULAS = window.AULAS || {};

window.AULAS.Componentes = {
  // 1. Capa do Dia
  capa: function(slide) {
    return `
      <div class="slide-body">
        <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">📚</div>
        <h1 class="slide-title">${slide.titulo}</h1>
        <p class="slide-subtitle">${slide.subtitulo || ''}</p>
        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
          <span class="bloco-pill" style="background-color: var(--bloco-mat-bg); color: var(--bloco-mat-color);">
            15m Matemática CPA
          </span>
          <span class="bloco-pill" style="background-color: var(--bloco-fon-bg); color: var(--bloco-fon-color);">
            15m Fônica & Onomatopeias
          </span>
          <span class="bloco-pill" style="background-color: var(--bloco-mot-bg); color: var(--bloco-mot-color);">
            15m Grafomotricidade
          </span>
          <span class="bloco-pill" style="background-color: var(--bloco-lei-bg); color: var(--bloco-lei-color);">
            15m Leitura & MEXT
          </span>
        </div>
      </div>
    `;
  },

  // 2. Abertura de Bloco
  bloco: function(slide) {
    return `
      <div class="slide-body">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">⏱️ 15 Minutos</div>
        <h1 class="slide-title">${slide.titulo}</h1>
        <p class="slide-subtitle">${slide.subtitulo || ''}</p>
      </div>
    `;
  },

  // 3. Calendário & Rotina Diária
  calendario: function(slide) {
    var perguntasHtml = (slide.perguntas || []).map(function(p) {
      return `<li style="margin-bottom: 0.85rem; font-size: 1.25rem; font-weight: 600; color: #1e293b;">📅 ${p}</li>`;
    }).join('');

    return `
      <div class="slide-body" style="align-items: flex-start; text-align: left; max-width: 900px; margin: 0 auto;">
        <h1 class="slide-title" style="align-self: center;">${slide.titulo}</h1>
        <div style="background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 16px; padding: 1.75rem 2.5rem; width: 100%; margin-top: 1rem;">
          <ul style="list-style: none;">
            ${perguntasHtml}
          </ul>
        </div>
      </div>
    `;
  },

  // 4. Subitização Relâmpago
  subitizar: function(slide) {
    var qIndex = 0;
    var quantidades = slide.quantidades || [1, 2, 3];
    var currentQ = quantidades[0];

    // Gera pontinhos vermelhos
    function renderDots(q) {
      var dots = '';
      for (var i = 0; i < q; i++) {
        dots += '<div class="math-dot"></div>';
      }
      var cols = q === 4 ? 2 : (q >= 5 ? 3 : q);
      return `<div class="dot-container" style="grid-template-columns: repeat(${cols}, auto);">${dots}</div>`;
    }

    return `
      <div class="slide-body">
        <h1 class="slide-title">${slide.titulo || 'Cartões Relâmpago'}</h1>
        <p class="slide-subtitle">${slide.instrucao || 'Olhe rápido e diga a quantidade sem contar um por um!'}</p>
        
        <div class="subitizar-stage">
          <div class="dot-frame" id="subitizarFrame" data-quantidades='${JSON.stringify(quantidades)}' data-index="0">
            ${renderDots(currentQ)}
          </div>
          <div style="display: flex; gap: 1rem;">
            <button class="btn-flash" onclick="window.AULAS.executarFlash()">⚡ Flash (1,5 s)</button>
            <button class="btn-tool" style="padding: 0.75rem 1.25rem; font-size: 1rem;" onclick="window.AULAS.proximaQuantidadeSubitizar()">Próximo Cartão ➔</button>
          </div>
        </div>
      </div>
    `;
  },

  // 5. Ligações Numéricas (Number Bonds)
  ligacao: function(slide) {
    var todo = slide.todo || 3;
    var p1 = slide.parte1 !== undefined ? slide.parte1 : 2;
    var p2 = slide.parte2 !== undefined ? slide.parte2 : 1;
    var isP2Hidden = (p2 === '?');

    return `
      <div class="slide-body">
        <h1 class="slide-title">${slide.titulo || 'Ligação Numérica'}</h1>
        <p class="slide-subtitle">${slide.instrucao || 'O todo e as partes!'}</p>
        
        <svg class="number-bond-svg" viewBox="0 0 380 260">
          <!-- Linhas conectoras -->
          <line x1="190" y1="70" x2="100" y2="190" class="bond-line" />
          <line x1="190" y1="70" x2="280" y2="190" class="bond-line" />
          
          <!-- Círculo do Todo -->
          <circle cx="190" cy="70" r="45" class="bond-circle whole" />
          <text x="190" y="70" class="bond-text">${todo}</text>
          
          <!-- Círculo Parte 1 -->
          <circle cx="100" cy="190" r="38" class="bond-circle" />
          <text x="100" y="190" class="bond-text">${p1}</text>
          
          <!-- Círculo Parte 2 (Pode ser revelada) -->
          <circle cx="280" cy="190" r="38" class="bond-circle ${isP2Hidden ? 'bond-hidden' : ''}" 
                  id="bondPart2" onclick="this.classList.remove('bond-hidden'); document.getElementById('bondPart2Text').textContent = '${slide.parte2Real || p2}'" />
          <text x="280" y="190" class="bond-text" id="bondPart2Text">${p2}</text>
        </svg>

        <p style="font-size: 1.15rem; color: #475569; margin-top: 1rem;">
          Toque no círculo com <strong>?</strong> para revelar a parte oculta!
        </p>
      </div>
    `;
  },

  // 6. Manipulação Concreta
  concreto: function(slide) {
    var passosHtml = (slide.passos || []).map(function(p, idx) {
      return `
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.2rem;">
          <div style="background-color: #2563eb; color: #fff; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">${idx+1}</div>
          <div style="font-size: 1.25rem; font-weight: 600; color: #1e293b; text-align: left;">${p}</div>
        </div>
      `;
    }).join('');

    return `
      <div class="slide-body" style="max-width: 950px; margin: 0 auto;">
        <h1 class="slide-title">${slide.titulo}</h1>
        <div style="background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 20px; padding: 2rem; width: 100%; margin-top: 1rem;">
          ${passosHtml}
        </div>
      </div>
    `;
  },

  // 7. Cartão de Fonema & Onomatopeia
  fonema: function(slide) {
    var dados = window.AULAS.FONEMAS[slide.letra] || {
      letra: slide.letra,
      minuscula: slide.letra.toLowerCase(),
      onomatopeia: 'Som ' + slide.letra,
      emoji: '🔤',
      historia: 'Conheça o som da letra ' + slide.letra,
      articulacao: 'Observe a boca no espelho.'
    };

    return `
      <div class="slide-body">
        <div class="fonema-card-layout">
          <div class="fonema-letter-box">
            <div class="fonema-big-char">${dados.letra}</div>
            <div class="fonema-small-char">${dados.minuscula}</div>
            <div class="fonema-emoji">${dados.emoji}</div>
          </div>
          <div class="fonema-details">
            <span class="detail-badge">Onomatopeia: ${dados.onomatopeia}</span>
            <div class="onomatopeia-story">"${dados.historia}"</div>
            <div class="articulacao-box">
              <strong>👄 Como fazer com a boca:</strong> ${dados.articulacao}
            </div>
            ${dados.toqueSensorial ? `
              <div style="font-size: 1rem; color: #64748b; font-style: italic;">
                ✋ <strong>Toque sensorial:</strong> ${dados.toqueSensorial}
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  },

  // 8. Revisão Rápida de Sons
  revisaoSons: function(slide) {
    var letras = slide.letras || ["A", "E"];
    var letrasHtml = letras.map(function(l) {
      var f = window.AULAS.FONEMAS[l] || { emoji: '🔤' };
      return `
        <div style="display: flex; flex-direction: column; align-items: center; background-color: #fff7ed; border: 2px solid #fdba74; border-radius: 16px; padding: 1.25rem 1.75rem; min-width: 110px;">
          <span style="font-size: 3.5rem; font-weight: 900; color: #ea580c;">${l}</span>
          <span style="font-size: 2rem; margin-top: 0.25rem;">${f.emoji}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="slide-body">
        <h1 class="slide-title">${slide.titulo || 'Revisão Rápida dos Sons'}</h1>
        <p class="slide-subtitle">${slide.instrucao || 'Faça o som e o gesto de cada letra sem dizer o nome dela!'}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center; margin-top: 1rem;">
          ${letrasHtml}
        </div>
      </div>
    `;
  },

  // 9. Ônibus da Frase (Segmentação Sentencial)
  onibus: function(slide) {
    var palavras = slide.palavras || ["O", "GATO", "DORME"];
    var capsHtml = palavras.map(function(p, idx) {
      return `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <div class="bus-cap">${idx+1}</div>
          <span style="font-size: 1.4rem; font-weight: 800; color: #1e293b;">${p}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="slide-body">
        <h1 class="slide-title">${slide.titulo || 'O Ônibus da Frase'}</h1>
        <p class="slide-subtitle">${slide.instrucao || 'Uma tampinha para cada palavra da frase!'}</p>
        
        <div class="bus-container" style="margin-top: 1.5rem;">
          <div style="font-size: 3.5rem; margin-right: 1rem;">🚌</div>
          ${capsHtml}
        </div>

        <div style="margin-top: 2rem; font-size: 1.5rem; font-weight: 700; color: #475569;">
          Frase completa: "${slide.frase || palavras.join(' ')}"
        </div>
      </div>
    `;
  },

  // 10. Sílabas com Palmas
  silabas: function(slide) {
    var palavrasHtml = (slide.palavras || []).map(function(p) {
      var partes = (p.silabas || []).join(' - ');
      return `
        <div style="background-color: #f8fafc; border: 2px solid #e2e8f0; border-radius: 16px; padding: 1.25rem 2rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; margin-bottom: 1rem; width: 100%;">
          <span style="font-size: 2rem; font-weight: 900; color: #0f172a;">${p.palavra}</span>
          <span style="font-size: 2rem; font-weight: 700; color: #2563eb; letter-spacing: 0.08em;">${partes}</span>
          <span style="font-size: 1.75rem;">${'👏 '.repeat(p.palmas || p.silabas.length)}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="slide-body" style="max-width: 850px; margin: 0 auto;">
        <h1 class="slide-title">${slide.titulo || 'Palmas para as Sílabas'}</h1>
        <p class="slide-subtitle">${slide.instrucao || 'Bata palmas para cada pedacinho da palavra!'}</p>
        <div style="width: 100%; margin-top: 1rem;">
          ${palavrasHtml}
        </div>
      </div>
    `;
  },

  // 11. Decodificável & Leitura de Frases
  decodificavel: function(slide) {
    var palavras = slide.palavras || [];
    var wordsHtml = palavras.map(function(w) {
      return `<div class="word-card-large">${w}</div>`;
    }).join('');

    return `
      <div class="slide-body">
        <h1 class="slide-title">${slide.titulo || 'Hora da Leitura!'}</h1>
        <p class="slide-subtitle">${slide.instrucao || 'Junte os sons sem parar no meio!'}</p>
        
        <div class="decodificavel-box">
          <div class="words-display-strip">
            ${wordsHtml}
          </div>
          ${slide.frase ? `
            <div class="sentence-display">
              ${slide.frase}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  },

  // 12. Trilhas Diferenciadas (Frantiesco 4a / Giuseppe 5a)
  trilhas: function(slide) {
    return `
      <div class="slide-body">
        <h1 class="slide-title">${slide.titulo || 'Prática Diferenciada'}</h1>
        <div class="trilhas-container">
          <div class="trilha-card trilha-t4">
            <div class="trilha-header">
              <span>🦁</span> Frantiesco (4 anos)
            </div>
            <div class="trilha-text">${slide.t4}</div>
          </div>
          <div class="trilha-card trilha-t5">
            <div class="trilha-header">
              <span>🚀</span> Giuseppe (5 anos)
            </div>
            <div class="trilha-text">${slide.t5}</div>
          </div>
        </div>
      </div>
    `;
  },

  // 13. Aquecimento Motor
  aquecimentoMotor: function(slide) {
    var passosHtml = (slide.passos || []).map(function(p, idx) {
      return `
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.25rem;">
          <div style="background-color: #0d9488; color: #fff; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">${idx+1}</div>
          <div style="font-size: 1.25rem; font-weight: 600; color: #1e293b; text-align: left;">${p}</div>
        </div>
      `;
    }).join('');

    return `
      <div class="slide-body" style="max-width: 900px; margin: 0 auto;">
        <h1 class="slide-title">${slide.titulo}</h1>
        <div style="background-color: #f0fdfa; border: 2px solid #5eead4; border-radius: 20px; padding: 2rem; width: 100%; margin-top: 1rem;">
          ${passosHtml}
        </div>
      </div>
    `;
  },

  // 14. História Dialógica
  historia: function(slide) {
    var perguntasHtml = (slide.perguntas || []).map(function(p) {
      return `<li style="margin-bottom: 0.6rem; font-size: 1.15rem; color: #1e293b;">💬 ${p}</li>`;
    }).join('');

    return `
      <div class="slide-body" style="max-width: 1000px; margin: 0 auto; text-align: left;">
        <h1 class="slide-title" style="text-align: center;">${slide.titulo}</h1>
        <div style="background-color: #f0fdf4; border: 2px solid #86efac; border-radius: 20px; padding: 1.75rem 2.25rem; width: 100%; margin-top: 1rem;">
          <p style="font-size: 1.35rem; line-height: 1.6; color: #0f172a; margin-bottom: 1.5rem; font-family: var(--font-serif);">
            "${slide.texto}"
          </p>
          <div style="border-top: 2px dashed #86efac; padding-top: 1rem;">
            <strong style="color: #15803d; font-size: 1.1rem; display: block; margin-bottom: 0.5rem;">Perguntas Dialógicas:</strong>
            <ul style="list-style: none;">
              ${perguntasHtml}
            </ul>
          </div>
        </div>
      </div>
    `;
  },

  // 15. Trava-Línguas e Parlendas
  travaLingua: function(slide) {
    var perguntasHtml = (slide.perguntas || []).map(function(p) {
      return `<li style="margin-bottom: 0.5rem; font-size: 1.1rem; color: #1e293b;">⚡ ${p}</li>`;
    }).join('');

    return `
      <div class="slide-body" style="max-width: 900px; margin: 0 auto; text-align: center;">
        <h1 class="slide-title">${slide.titulo}</h1>
        <div style="background-color: #f8fafc; border: 3px solid #cbd5e1; border-radius: 20px; padding: 1.75rem 2.5rem; width: 100%; margin-top: 1rem;">
          <pre style="font-size: 1.45rem; line-height: 1.6; color: #0f172a; font-family: var(--font-main); font-weight: 700; white-space: pre-wrap; margin-bottom: 1.5rem;">${slide.texto}</pre>
          <div style="border-top: 2px dashed #cbd5e1; padding-top: 1rem; text-align: left;">
            <ul style="list-style: none;">
              ${perguntasHtml}
            </ul>
          </div>
        </div>
      </div>
    `;
  },

  // 16. Ditado Fônico com Autocorreção
  ditado: function(slide) {
    var palavras = slide.palavras || [];
    var wordsHtml = palavras.map(function(w) {
      return `<div class="word-card-large" style="background-color: #dcfce7; border-color: #86efac;">${w}</div>`;
    }).join('');

    return `
      <div class="slide-body">
        <h1 class="slide-title">${slide.titulo || 'Ditado Fônico'}</h1>
        <p class="slide-subtitle">${slide.instrucao || 'Escreva no seu caderno e depois confira as palavras!'}</p>
        
        <div class="ditado-reveal-box">
          <button class="btn-reveal" onclick="document.getElementById('ditadoItems').classList.toggle('revealed')">
            👁️ Revelar para Autocorreção
          </button>
          <div class="ditado-hidden-items" id="ditadoItems">
            ${wordsHtml}
          </div>
        </div>
      </div>
    `;
  },

  // 17. Desafio de Arrumação Japonesa (MEXT)
  arrumacao: function(slide) {
    var passosHtml = (slide.passos || []).map(function(p, idx) {
      return `
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;">
          <div style="background-color: #16a34a; color: #fff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">${idx+1}</div>
          <div style="font-size: 1.25rem; font-weight: 600; color: #1e293b; text-align: left;">${p}</div>
        </div>
      `;
    }).join('');

    return `
      <div class="slide-body" style="max-width: 900px; margin: 0 auto;">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🧹✨</div>
        <h1 class="slide-title">${slide.titulo || 'Desafio Japonês de Arrumação'}</h1>
        <p class="slide-subtitle">${slide.missao || 'Guardar tudo com contagem matemática e respeito pelo espaço!'}</p>
        <div style="background-color: #f0fdf4; border: 2px solid #86efac; border-radius: 20px; padding: 1.75rem; width: 100%; margin-top: 1rem;">
          ${passosHtml}
        </div>
      </div>
    `;
  },

  // 18. Checklist de 80% (Sexta-feira)
  checklist: function(slide, semanaData) {
    var ch = semanaData.checklist || { t4: [], t5: [] };
    var semNum = semanaData.numero || 1;

    function renderItems(items, keyPrefix) {
      return items.map(function(item, idx) {
        var storageKey = 'ch_s' + semNum + '_' + keyPrefix + '_' + idx;
        var checked = localStorage.getItem(storageKey) === 'true';
        return `
          <label class="checklist-item">
            <input type="checkbox" id="${storageKey}" ${checked ? 'checked' : ''} 
                   onchange="window.AULAS.salvarChecklist('${storageKey}', this.checked, ${semNum})" />
            <span>${item}</span>
          </label>
        `;
      }).join('');
    }

    return `
      <div class="slide-body" style="max-width: 1050px; margin: 0 auto;">
        <h1 class="slide-title">${slide.titulo || 'Checklist de Domínio de 80%'}</h1>
        <p class="slide-subtitle">Avaliação formativa baseada nos Princípios de Rosenshine</p>
        
        <div class="checklist-wrapper">
          <div class="checklist-column">
            <div class="checklist-title">
              <span>🦁 Frantiesco (4 anos)</span>
              <span class="checklist-score" id="score_t4_${semNum}">0%</span>
            </div>
            ${renderItems(ch.t4, 't4')}
          </div>
          <div class="checklist-column">
            <div class="checklist-title">
              <span>🚀 Giuseppe (5 anos)</span>
              <span class="checklist-score" id="score_t5_${semNum}">0%</span>
            </div>
            ${renderItems(ch.t5, 't5')}
          </div>
        </div>

        <div id="checklistRecommendation_${semNum}" style="margin-top: 1rem; font-size: 1.05rem; font-weight: 700; color: #475569;">
          Marque os itens conquistados para calcular a taxa de domínio.
        </div>
      </div>
    `;
  },

  // 19. Caixa Misteriosa
  caixaMisteriosa: function(slide) {
    var itensHtml = (slide.itens || []).map(function(it) {
      return `
        <div style="background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 14px; padding: 1rem 1.5rem; font-size: 1.3rem; font-weight: 800; color: #1e293b;">
          📦 ${it.nome} <span style="font-size: 0.9rem; font-weight: 600; color: ${it.pertence ? '#16a34a' : '#dc2626'};">${it.pertence ? '✓ Sim!' : '✗ Não!'}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="slide-body">
        <h1 class="slide-title">${slide.titulo || 'A Caixa Misteriosa'}</h1>
        <p class="slide-subtitle">${slide.instrucao || 'Tire um objeto da caixa e descubra com qual som ele começa!'}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 1.5rem;">
          ${itensHtml}
        </div>
      </div>
    `;
  },

  // 20. Grade Silábica de Coordenadas
  gradeSilabica: function(slide) {
    var cols = slide.colunas || ["A", "E", "I", "O", "U"];
    var linhas = slide.linhas || ["M", "F", "V", "S", "L", "N", "J", "X"];

    var headerCells = '<th></th>' + cols.map(function(c) {
      return `<th style="padding: 0.5rem 1rem; background-color: #2563eb; color: #fff; font-size: 1.25rem;">${c}</th>`;
    }).join('');

    var rowsHtml = linhas.map(function(l) {
      var cells = cols.map(function(c) {
        var sil = l + c;
        return `<td style="padding: 0.5rem 1rem; border: 1px solid #cbd5e1; font-size: 1.35rem; font-weight: 800; color: #0f172a; cursor: pointer;" onclick="alert('Sílaba: ${sil}')">${sil}</td>`;
      }).join('');
      return `<tr><th style="padding: 0.5rem 1rem; background-color: #1e293b; color: #fff; font-size: 1.25rem;">${l}</th>${cells}</tr>`;
    }).join('');

    return `
      <div class="slide-body">
        <h1 class="slide-title">${slide.titulo || 'Grade Silábica de Coordenadas'}</h1>
        <p class="slide-subtitle">${slide.instrucao || 'Cruze a consoante com a vogal para ler a sílaba!'}</p>
        <div style="overflow-x: auto; max-width: 1000px; margin-top: 1rem;">
          <table style="border-collapse: collapse; background-color: #fff; box-shadow: var(--shadow-md); border-radius: 12px; overflow: hidden; margin: 0 auto;">
            <thead><tr>${headerCells}</tr></thead>
            <tbody>${rowsHtml}</tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 21. Jogos Orais Genéricos
  jogoOral: function(slide) {
    var exemplosHtml = (slide.palavrasExemplo || []).map(function(e) {
      return `<li style="margin-bottom: 0.6rem; font-size: 1.25rem; font-weight: 700; color: #1e293b;">🎲 ${e}</li>`;
    }).join('');

    return `
      <div class="slide-body" style="max-width: 900px; margin: 0 auto; text-align: left;">
        <h1 class="slide-title" style="text-align: center;">${slide.titulo}</h1>
        <p class="slide-subtitle" style="text-align: center;">${slide.instrucao || ''}</p>
        <div style="background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 20px; padding: 2rem; width: 100%; margin-top: 1rem;">
          <ul style="list-style: none;">
            ${exemplosHtml}
          </ul>
        </div>
      </div>
    `;
  },

  // 22. Padrões Lineares (AB, AABB, ABC)
  padrao: function(slide) {
    var seq = slide.sequencia || ["🔴", "🔵", "🔴", "🔵"];
    var seqHtml = seq.map(function(item) {
      return `<div style="font-size: 3.5rem;">${item}</div>`;
    }).join('');

    return `
      <div class="slide-body">
        <h1 class="slide-title">${slide.titulo || 'Padrão Linear'}</h1>
        <p class="slide-subtitle">${slide.instrucao || 'Descubra qual é a regra do padrão!'}</p>
        
        <div style="display: flex; align-items: center; gap: 1.5rem; background-color: #f8fafc; border: 3px solid #cbd5e1; padding: 1.5rem 3rem; border-radius: 24px; margin-top: 1.5rem;">
          ${seqHtml}
          <div style="width: 70px; height: 70px; border: 3px dashed #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 800; color: #3b82f6; cursor: pointer;"
               id="patternMystery" onclick="this.textContent = '${slide.proximo || '✨'}'; this.style.borderStyle = 'solid'">
            ?
          </div>
        </div>
        <p style="font-size: 1.1rem; color: #64748b; margin-top: 1rem;">Toque no <strong>?</strong> para conferir!</p>
      </div>
    `;
  }
};
