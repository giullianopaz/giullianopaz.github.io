// ============================================================================
// AULAS EM CASA — CONTROLADOR PRINCIPAL & ROTEADOR (SPA)
// ============================================================================

window.AULAS = window.AULAS || {};
window.AULAS._semanasBuffer = window.AULAS._semanasBuffer || {};

(function() {
  var state = {
    semanas: window.AULAS._semanasBuffer,
    currentSemana: 1,
    currentDia: 1,
    currentSlideIndex: 0,
    flatSlides: [],
    timerSeconds: 15 * 60,
    timerRunning: false,
    timerInterval: null,
    teacherNotesVisible: true
  };

  // Registro de semanas pelos scripts externos
  window.AULAS.registrarSemana = function(dados) {
    state.semanas[dados.numero] = dados;
    window.AULAS._semanasBuffer[dados.numero] = dados;
  };

  // Inicialização após o DOM carregar
  document.addEventListener('DOMContentLoaded', function() {
    initApp();
  });

  function initApp() {
    setupEventListeners();
    setupRouting();
    handleHashChange();
  }

  function setupRouting() {
    window.addEventListener('hashchange', handleHashChange);
  }

  function handleHashChange() {
    var hash = window.location.hash || '#/';
    
    // Rota: #/ (Dashboard)
    if (hash === '#/' || hash === '#' || hash === '') {
      renderDashboard();
      return;
    }

    // Rota: #/s{W} ou #/s{W}/d{D} ou #/s{W}/d{D}/{S}
    var parts = hash.replace(/^#\//, '').split('/');
    var semNum = parseInt(parts[0].replace('s', ''), 10) || 1;
    var diaNum = parts[1] ? (parseInt(parts[1].replace('d', ''), 10) || 1) : 1;
    var slideIdx = parts[2] ? (parseInt(parts[2], 10) || 0) : 0;

    if (state.semanas[semNum]) {
      state.currentSemana = semNum;
      state.currentDia = diaNum;
      carregarDia(semNum, diaNum, slideIdx);
    } else {
      renderDashboard();
    }
  }

  // Prepara o array linear de slides para o dia selecionado
  function carregarDia(semNum, diaNum, slideIdx) {
    var semData = state.semanas[semNum];
    if (!semData || !semData.dias || !semData.dias[diaNum - 1]) {
      renderDashboard();
      return;
    }

    var diaData = semData.dias[diaNum - 1];
    var flat = [];

    // Achata os 4 blocos em um único array sequencial mantendo os metadados do bloco
    diaData.blocos.forEach(function(bloco, bIdx) {
      bloco.slides.forEach(function(slide, sIdx) {
        flat.push({
          blocoTipo: bloco.tipo,
          blocoIndex: bIdx + 1,
          blocoTempoMin: bloco.tempoMin || 15,
          slide: slide,
          semanaNum: semNum,
          diaNum: diaNum
        });
      });
    });

    state.flatSlides = flat;
    state.currentSlideIndex = Math.max(0, Math.min(slideIdx, flat.length - 1));
    renderSlideView();
  }

  // Renderiza a visualização do slide ativo
  function renderSlideView() {
    var stage = document.getElementById('mainStage');
    var navBar = document.getElementById('navbarContainer');
    if (!stage) return;

    navBar.style.display = 'flex';
    updateHeaderControls();

    var currentItem = state.flatSlides[state.currentSlideIndex];
    if (!currentItem) {
      renderDashboard();
      return;
    }

    var slide = currentItem.slide;
    var semData = state.semanas[state.currentSemana];
    var renderFn = window.AULAS.Componentes[slide.tipo] || window.AULAS.Componentes.capa;
    var contentHtml = renderFn(slide, semData);

    var blocoNomeMap = {
      matematica: 'Bloco 1 · Matemática Singapura (CPA)',
      fonica: 'Bloco 2 · Alfabetização Fônica & Onomatopeias',
      motor: 'Bloco 3 · Grafomotricidade & Prática Guiada',
      leitura: 'Bloco 4 · Leitura Dialógica & Arrumação MEXT'
    };

    var html = `
      <div class="slide-card bloco-${currentItem.blocoTipo}">
        <div class="slide-header">
          <div class="bloco-pill">
            ${blocoNomeMap[currentItem.blocoTipo] || currentItem.blocoTipo}
          </div>
          ${slide.porque ? `
            <div class="porque-badge">
              <span>🧠</span> ${slide.porque}
            </div>
          ` : ''}
        </div>

        ${contentHtml}

        <div class="slide-footer">
          ${slide.guia && state.teacherNotesVisible ? `
            <div class="teacher-notes-bar" id="teacherNotesBar">
              <strong>👨‍🏫 Para você (Pai-Educador):</strong>
              <span>${slide.guia}</span>
            </div>
          ` : ''}
          
          <div class="slide-navigation-bar">
            <div class="nav-arrows">
              <button class="btn-nav-arrow" onclick="window.AULAS.slideAnterior()" ${state.currentSlideIndex === 0 ? 'disabled' : ''} title="Slide anterior (Seta Esquerda)">←</button>
              <button class="btn-nav-arrow" onclick="window.AULAS.proximoSlide()" ${state.currentSlideIndex >= state.flatSlides.length - 1 ? 'disabled' : ''} title="Próximo slide (Espaço / Seta Direita)">→</button>
            </div>

            <div class="progress-track">
              <div class="progress-bar-fill" style="width: ${((state.currentSlideIndex + 1) / state.flatSlides.length) * 100}%;"></div>
            </div>

            <div class="slide-counter">
              Slide ${state.currentSlideIndex + 1} de ${state.flatSlides.length}
            </div>
          </div>
        </div>
      </div>
    `;

    stage.innerHTML = html;

    // Se for o slide de checklist, calcula as notas acumuladas
    if (slide.tipo === 'checklist') {
      window.AULAS.atualizarScoresChecklist(state.currentSemana);
    }
  }

  // Renderiza o Dashboard com a lista de semanas
  function renderDashboard() {
    var stage = document.getElementById('mainStage');
    var navBar = document.getElementById('navbarContainer');
    if (!stage) return;

    navBar.style.display = 'flex';
    document.getElementById('semanaSelect').value = '';
    document.getElementById('diasNav').style.display = 'none';

    var cardsHtml = '';
    for (var i = 1; i <= 9; i++) {
      var s = state.semanas[i];
      if (!s) continue;
      cardsHtml += `
        <div class="week-card" onclick="window.location.hash = '#/s${s.numero}/d1/0'">
          <div class="week-num-badge">Semana ${s.numero} de 9</div>
          <div class="week-card-title">${s.titulo}</div>
          <div class="week-card-desc">${s.focoGeral || ''}</div>
          <div class="week-card-footer">
            <span>5 Aulas diárias (1h cada)</span>
            <span style="color: #60a5fa; font-weight: 700;">Iniciar Semana →</span>
          </div>
        </div>
      `;
    }

    stage.innerHTML = `
      <div class="dashboard-container">
        <div class="dash-header">
          <h1>Aulas em Casa · Educação Infantil</h1>
          <p>Currículo baseado em evidências: Matemática de Singapura (CPA) & Método das Onomatopeias</p>
        </div>
        <div class="weeks-grid">
          ${cardsHtml}
        </div>
      </div>
    `;
  }

  // Atualiza controles do cabeçalho (seletores e dias)
  function updateHeaderControls() {
    var semanaSelect = document.getElementById('semanaSelect');
    var diasNav = document.getElementById('diasNav');
    
    if (semanaSelect) {
      semanaSelect.value = state.currentSemana;
    }

    if (diasNav) {
      diasNav.style.display = 'flex';
      var buttons = diasNav.querySelectorAll('.dia-btn');
      buttons.forEach(function(btn, idx) {
        if (idx + 1 === state.currentDia) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }

  // Navegação entre slides
  window.AULAS.proximoSlide = function() {
    if (state.currentSlideIndex < state.flatSlides.length - 1) {
      state.currentSlideIndex++;
      window.location.hash = `#/s${state.currentSemana}/d${state.currentDia}/${state.currentSlideIndex}`;
    }
  };

  window.AULAS.slideAnterior = function() {
    if (state.currentSlideIndex > 0) {
      state.currentSlideIndex--;
      window.location.hash = `#/s${state.currentSemana}/d${state.currentDia}/${state.currentSlideIndex}`;
    }
  };

  window.AULAS.mudarSemana = function(semNum) {
    if (!semNum) {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/s${semNum}/d1/0`;
    }
  };

  window.AULAS.mudarDia = function(diaNum) {
    window.location.hash = `#/s${state.currentSemana}/d${diaNum}/0`;
  };

  // Interatividade do Flash na Subitização
  window.AULAS.executarFlash = function() {
    var frame = document.getElementById('subitizarFrame');
    if (!frame) return;
    frame.style.opacity = '1';
    setTimeout(function() {
      frame.style.opacity = '0';
    }, 1500);
  };

  window.AULAS.proximaQuantidadeSubitizar = function() {
    var frame = document.getElementById('subitizarFrame');
    if (!frame) return;
    var quantidades = JSON.parse(frame.getAttribute('data-quantidades') || '[1, 2, 3]');
    var currIdx = parseInt(frame.getAttribute('data-index') || '0', 10);
    var nextIdx = (currIdx + 1) % quantidades.length;
    var nextQ = quantidades[nextIdx];

    frame.setAttribute('data-index', nextIdx);
    frame.style.opacity = '1';

    // Gera novos pontos
    var dots = '';
    for (var i = 0; i < nextQ; i++) {
      dots += '<div class="math-dot"></div>';
    }
    var cols = nextQ === 4 ? 2 : (nextQ >= 5 ? 3 : nextQ);
    frame.innerHTML = `<div class="dot-container" style="grid-template-columns: repeat(${cols}, auto);">${dots}</div>`;
  };

  // Checklist e cálculo do domínio de 80%
  window.AULAS.salvarChecklist = function(key, checked, semNum) {
    localStorage.setItem(key, checked ? 'true' : 'false');
    window.AULAS.atualizarScoresChecklist(semNum);
  };

  window.AULAS.atualizarScoresChecklist = function(semNum) {
    var semData = state.semanas[semNum];
    if (!semData || !semData.checklist) return;

    var ch = semData.checklist;
    var t4Total = (ch.t4 || []).length;
    var t5Total = (ch.t5 || []).length;

    var t4Checked = 0;
    for (var i = 0; i < t4Total; i++) {
      if (localStorage.getItem('ch_s' + semNum + '_t4_' + i) === 'true') t4Checked++;
    }

    var t5Checked = 0;
    for (var j = 0; j < t5Total; j++) {
      if (localStorage.getItem('ch_s' + semNum + '_t5_' + j) === 'true') t5Checked++;
    }

    var t4Pct = t4Total > 0 ? Math.round((t4Checked / t4Total) * 100) : 0;
    var t5Pct = t5Total > 0 ? Math.round((t5Checked / t5Total) * 100) : 0;

    var t4Badge = document.getElementById('score_t4_' + semNum);
    var t5Badge = document.getElementById('score_t5_' + semNum);
    var recBox = document.getElementById('checklistRecommendation_' + semNum);

    if (t4Badge) {
      t4Badge.textContent = t4Pct + '%';
      t4Badge.className = 'checklist-score ' + (t4Pct >= 80 ? 'score-badge-success' : (t4Pct > 0 ? 'score-badge-review' : ''));
    }
    if (t5Badge) {
      t5Badge.textContent = t5Pct + '%';
      t5Badge.className = 'checklist-score ' + (t5Pct >= 80 ? 'score-badge-success' : (t5Pct > 0 ? 'score-badge-review' : ''));
    }

    if (recBox) {
      if (t4Pct >= 80 && t5Pct >= 80) {
        recBox.innerHTML = '🎉 <span style="color: #15803d;">Excelente! Domínio acima de 80% atingido por ambos. Prontos para avançar para a próxima semana!</span>';
      } else if (t4Pct > 0 || t5Pct > 0) {
        recBox.innerHTML = '⚠️ <span style="color: #b91c1c;">Regra do Rosenshine: Se alguma criança estiver abaixo de 80%, reforce os pontos frágeis na próxima semana antes de acelerar!</span>';
      }
    }
  };

  // Cronômetro do Bloco (15 Minutos)
  window.AULAS.toggleTimer = function() {
    var btn = document.getElementById('timerBtn');
    if (state.timerRunning) {
      clearInterval(state.timerInterval);
      state.timerRunning = false;
      if (btn) btn.classList.remove('timer-active');
    } else {
      state.timerRunning = true;
      if (btn) btn.classList.add('timer-active');
      state.timerInterval = setInterval(function() {
        if (state.timerSeconds > 0) {
          state.timerSeconds--;
          updateTimerDisplay();
        } else {
          clearInterval(state.timerInterval);
          state.timerRunning = false;
          if (btn) btn.classList.remove('timer-active');
          alert('⏱️ Fim do Bloco de 15 minutos! Transição de atividade.');
          state.timerSeconds = 15 * 60;
          updateTimerDisplay();
        }
      }, 1000);
    }
  };

  function updateTimerDisplay() {
    var btn = document.getElementById('timerBtn');
    if (!btn) return;
    var min = Math.floor(state.timerSeconds / 60);
    var sec = state.timerSeconds % 60;
    btn.innerHTML = `⏱️ ${min}:${sec < 10 ? '0' : ''}${sec}`;
  }

  // Modais (Materiais, Fundamentos, Atalhos)
  window.AULAS.abrirMateriais = function() {
    var semData = state.semanas[state.currentSemana] || state.semanas[1];
    var listHtml = (semData.materiais || []).map(function(m) {
      return `<li>📦 ${m}</li>`;
    }).join('');

    abrirModal(`Materiais da Semana ${semData.numero}`, `
      <p style="margin-bottom: 1rem; color: #475569;">
        Separe estes materiais manipulativos no início da semana para que fiquem ao alcance das mãos durante as aulas:
      </p>
      <ul>${listHtml}</ul>
    `);
  };

  window.AULAS.abrirFundamentos = function() {
    abrirModal('Fundamentos Científicos do Currículo', `
      <h3>1. Os Quatro Pilares da Aprendizagem (Stanislas Dehaene)</h3>
      <p>Decodificação fônica e retenção neural exigem: <strong>Atenção Seletiva</strong> (eliminar distrações), <strong>Engajamento Ativo</strong> (fazer perguntas, tocar objetos), <strong>Feedback de Erro Imediato</strong> (corrigir sem julgar) e <strong>Consolidação</strong> (sono e repetição espaçada).</p>
      
      <h3>2. Os 10 Princípios de Instrução (Barak Rosenshine)</h3>
      <p>Passos pequenos, modelagem com exemplos trabalhados, verificação constante de compreensão e a <strong>Regra dos 80% de Sucesso</strong>: só avançar quando a criança demonstrar 80% de acerto consistente na sexta-feira.</p>

      <h3>3. Matemática de Singapura (Abordagem CPA)</h3>
      <p><strong>Concreto</strong> (cubos e objetos reais) ➔ <strong>Pictórico</strong> (desenhos e diagramas de ligação numérica) ➔ <strong>Abstrato</strong> (numerais e equações formais). Nunca queime etapas!</p>

      <h3>4. Alfabetização Fônica e Método das Onomatopeias (Dra. Sandra Puliezi)</h3>
      <p>Ensine o <em>som puro</em> das letras ancorado em histórias naturais de sons (A-tchim!, Mmmmm, Fffff), evitando nomes confusos como "éme" ou "efe".</p>

      <h3>5. Recursos Gratuitos Oficiais</h3>
      <ul>
        <li><a href="https://sandrapuliezi.com/alfabetize-com-onomatopeias/" target="_blank" style="color: #2563eb;">PDFs Gratuitos do Método das Onomatopeias (Sandra Puliezi)</a></li>
        <li><a href="https://nel.moe.edu.sg/tl/all-resources/educators--guide-for-numeracy-/" target="_blank" style="color: #2563eb;">Educators' Guide for Numeracy (MOE Singapura)</a></li>
        <li><a href="https://www.aft.org/sites/default/files/Rosenshine.pdf" target="_blank" style="color: #2563eb;">Principles of Instruction (Barak Rosenshine, PDF 10 páginas)</a></li>
      </ul>
    `);
  };

  window.AULAS.abrirAtalhos = function() {
    abrirModal('Atalhos do Teclado', `
      <ul>
        <li><strong>Seta Direita / Espaço</strong>: Avançar para o próximo slide</li>
        <li><strong>Seta Esquerda</strong>: Voltar para o slide anterior</li>
        <li><strong>F</strong>: Alternar tela cheia (Fullscreen)</li>
        <li><strong>T</strong>: Iniciar / Pausar cronômetro de 15 minutos</li>
        <li><strong>G</strong>: Mostrar / Ocultar notas do professor ("Para você")</li>
        <li><strong>Esc</strong>: Fechar modais / Voltar ao Dashboard</li>
      </ul>
    `);
  };

  function abrirModal(titulo, corpoHtml) {
    var existing = document.getElementById('modalContainer');
    if (existing) existing.remove();

    var modal = document.createElement('div');
    modal.id = 'modalContainer';
    modal.className = 'modal-backdrop';
    modal.onclick = function(e) {
      if (e.target === modal) modal.remove();
    };

    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <div class="modal-title">${titulo}</div>
          <button class="btn-close-modal" onclick="document.getElementById('modalContainer').remove()">✕</button>
        </div>
        <div class="modal-body">
          ${corpoHtml}
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  // Teclado e Gestos Touch
  function setupEventListeners() {
    document.addEventListener('keydown', function(e) {
      // Ignora se estiver digitando em input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        window.AULAS.proximoSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        window.AULAS.slideAnterior();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 't' || e.key === 'T') {
        window.AULAS.toggleTimer();
      } else if (e.key === 'g' || e.key === 'G') {
        state.teacherNotesVisible = !state.teacherNotesVisible;
        var bar = document.getElementById('teacherNotesBar');
        if (bar) bar.style.display = state.teacherNotesVisible ? 'flex' : 'none';
      } else if (e.key === 'Escape') {
        var modal = document.getElementById('modalContainer');
        if (modal) {
          modal.remove();
        } else {
          window.location.hash = '#/';
        }
      }
    });

    // Touch Swipe
    var touchStartX = 0;
    var touchEndX = 0;
    document.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 60) {
        if (diff < 0) {
          window.AULAS.proximoSlide();
        } else {
          window.AULAS.slideAnterior();
        }
      }
    }, false);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(function() {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(function() {});
      }
    }
  }

  window.AULAS.toggleFullscreen = toggleFullscreen;
})();
