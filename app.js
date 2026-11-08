"use strict";

/* KHRONOS 1.0 — MOTOR PRINCIPAL */
(() => {
  const KEY = "khronos-v1";
  const DEGREE_MS = 10000;

  const UNITS = [
    ["Pulso", 180],
    ["Giro", 360],
    ["Turno", 2880],
    ["Fase", 86400],
    ["Propulsão", 3628800]
  ];

  // Plurais corretos das unidades temporais.
  const UNIT_PLURALS = {
    "Pulso": "Pulsos",
    "Giro": "Giros",
    "Turno": "Turnos",
    "Fase": "Fases",
    "Propulsão": "Propulsões"
  };

  function unitLabel(name, count) {
    return count === 1
      ? name
      : (UNIT_PLURALS[name] || name + "s");
  }

  const BOSSES = [
    ["Procrastinação", "⏳"],
    ["Preguiça", "🪨"],
    ["Distração Digital", "📱"],
    ["Cansaço Mental", "🧠"],
    ["Paralisia por Análise", "🌀"],
    ["Desorganização", "🌪️"],
    ["Impaciência", "⚡"],
    ["Inconstância", "🌊"],
    ["Autossabotagem", "🕳️"],
    ["Desistência", "🏔️"]
  ];

  const ACHIEVEMENTS = [
    ["Primeiro Movimento", 1, "Bronze", "🥉"],
    ["Primeiro Pulso", 180, "Bronze", "🥉"],
    ["Primeiro Giro", 360, "Prata", "🥈"],
    ["Cinco Giros", 1800, "Prata", "🥈"],
    ["Primeiro Turno", 2880, "Ouro", "🥇"],
    ["Dez Turnos", 28800, "Ouro", "🥇"],
    ["Primeira Fase", 86400, "Platina", "🏅"],
    ["Cinco Fases", 432000, "Platina", "🏅"],
    ["Dez Fases", 864000, "Diamante", "💎"],
    ["Vinte Fases", 1728000, "Diamante", "💎"],
    ["Primeira Propulsão", 3628800, "Lendário", "👑"],
    ["Duas Propulsões", 7257600, "Lendário", "👑"],
    ["Cinco Propulsões", 18144000, "Mítico", "🌟"]
  ];

  const $ = id => document.getElementById(id);
  const app = $("app");

  const fmt = n => new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2
  }).format(n);

  const dateFmt = t => new Date(t).toLocaleString("pt-BR");

  const uid = () => crypto.randomUUID();

  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[c]);

  const round = n => Math.round(n * 100) / 100;

  const fresh = () => ({
    version: 1,
    theme: "light",
    selected: null,
    projects: []
  });

  let state = fresh();
  let page = "home";
  let timerId = null;
  let toastId = null;
  let dialogCallback = null;
  let dirty = false;

  function notify(message) {
    const el = $("toast");
    el.textContent = message;
    clearTimeout(toastId);
    toastId = setTimeout(() => el.textContent = "", 3500);
  }

  function validProject(p) {
    return p && typeof p === "object" &&
      typeof p.id === "string" &&
      typeof p.name === "string" &&
      p.name.trim().length > 0 &&
      p.name.length <= 120 &&
      Number.isFinite(p.ms) && p.ms >= 0 &&
      Array.isArray(p.entries) &&
      p.entries.length <= 100000 &&
      p.entries.every(e =>
        e &&
        Number.isFinite(e.ms) &&
        e.ms >= 0 &&
        Number.isFinite(e.at) &&
        ["timer", "manual"].includes(e.type)
      );
  }

  function validate(data) {
    if (
      !data ||
      data.version !== 1 ||
      !Array.isArray(data.projects) ||
      data.projects.length > 10000 ||
      !data.projects.every(validProject)
    ) {
      throw Error("Arquivo Khronos inválido ou incompatível.");
    }

    const ids = data.projects.map(p => p.id);

    if (new Set(ids).size !== ids.length) {
      throw Error("IDs duplicados no arquivo.");
    }

    return true;
  }

  function normalize(p) {
    return {
      id: p.id,
      name: p.name.trim(),
      created: Number.isFinite(p.created)
        ? p.created
        : Date.now(),
      ms: p.ms,
      entries: p.entries.map(e => ({
        ms: e.ms,
        at: e.at,
        type: e.type,
        note: String(e.note || "").slice(0, 300)
      })),
      runningSince: null,
      startedAt: null
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);
      validate(parsed);

      state = {
        version: 1,
        theme: parsed.theme === "dark" ? "dark" : "light",
        selected: parsed.selected,
        projects: parsed.projects.map(p => ({
          ...normalize(p),
          runningSince: Number.isFinite(p.runningSince)
            ? p.runningSince
            : null,
          startedAt: Number.isFinite(p.startedAt)
            ? p.startedAt
            : null
        }))
      };

      if (!state.projects.some(p => p.id === state.selected)) {
        state.selected = state.projects[0]?.id || null;
      }
    } catch (err) {
      console.error(err);
      notify("Dados locais inválidos. Nenhuma alteração foi feita.");
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
      dirty = false;
      return true;
    } catch (err) {
      console.error(err);
      notify("Erro ao salvar. Exporte um backup antes de continuar.");
      return false;
    }
  }

  function selected() {
    return state.projects.find(p => p.id === state.selected) || null;
  }

  function elapsed(p) {
    return p.ms + (
      p.runningSince === null
        ? 0
        : Math.max(0, Date.now() - p.runningSince)
    );
  }

  function degrees(p) {
    return elapsed(p) / DEGREE_MS;
  }

  function degreeText(ms) {
    return fmt(round(ms / DEGREE_MS)) + " graus";
  }

  function duration(ms) {
    const seconds = Math.floor(ms / 1000);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = seconds % 60;

    return [h, m, s]
      .map(n => String(n).padStart(2, "0"))
      .join(":");
  }

  function counts(ms) {
    const d = ms / DEGREE_MS;

    return UNITS.map(([name, size]) => ({
      name,
      size,
      count: Math.floor(d / size)
    }));
  }

  function boss(p) {
    const d = degrees(p);
    const index = Math.floor(d / 86400);
    const current = BOSSES[index % BOSSES.length];
    const progress = (d % 86400) / 86400;

    return {
      index,
      name: current[0],
      icon: current[1],
      progress: Math.min(100, progress * 100),
      defeated: index
    };
  }

  function achievementList(p) {
    const d = degrees(p);

    return ACHIEVEMENTS.map(
      ([name, target, rarity, icon]) => ({
        name,
        target,
        rarity,
        icon,
        unlocked: d >= target
      })
    );
  }

  function aggregate() {
    return state.projects.reduce(
      (sum, p) => sum + elapsed(p),
      0
    );
  }

  function heading(title, description = "") {
    return `<h1>${esc(title)}</h1>
      ${description
        ? `<p class="muted">${esc(description)}</p>`
        : ""}`;
  }


  function stats(ms) {
    return `<div class="grid stats">
      <div class="card">
        <div class="stat-number">${degreeText(ms)}</div>
        <div class="stat-label">Graus acumulados</div>
      </div>
      ${counts(ms).map(u => `
        <div class="card">
          <div class="stat-number">${fmt(u.count)}</div>
          <div class="stat-label">
            ${unitLabel(u.name, u.count)} completos
          </div>
        </div>
      `).join("")}
    </div>`;
  }


  function progressBar(value, label) {
    return `<div class="progress" role="progressbar"
      aria-label="${esc(label)}" aria-valuemin="0"
      aria-valuemax="100" aria-valuenow="${Math.round(value)}">
      <div style="width:${Math.max(0, Math.min(100, value))}%"></div>
    </div>`;
  }

  function projectCard(p) {
    const b = boss(p);
    const running = p.runningSince !== null;

    return `<article class="card project-card">
      <div class="project-heading">
        <h3>${esc(p.name)}</h3>
        <span class="tag">${running ? "Em andamento" : "Pausado"}</span>
      </div>

      <strong>${degreeText(elapsed(p))}</strong>

      <div class="small muted">
        Chefão: ${esc(b.name)} · Fase ${b.index + 1}
      </div>

      ${progressBar(b.progress, "Progresso contra o chefão")}

      <div class="actions">
        <button
          type="button"
          class="btn primary"
          data-open="${esc(p.id)}">
          Abrir projeto
        </button>

        <button
          type="button"
          class="btn danger"
          data-delete="${esc(p.id)}"
          aria-label="Excluir projeto ${esc(p.name)}">
          🗑 Excluir projeto
        </button>
      </div>
    </article>`;
  }

  /*
   * EXCLUSÃO INDIVIDUAL DE PROJETOS
   *
   * A exclusão exige confirmação.
   * Somente o projeto identificado pelo ID é removido.
   * Em caso de falha ao salvar, o estado anterior é restaurado.
   */

  function deleteProject(projectId) {
    const p = state.projects.find(item => item.id === projectId);

    if (!p) {
      notify("Projeto não encontrado.");
      return;
    }

    const name = p.name;

    openDialog(
      "Excluir projeto",
      `
      <p>
        Você está prestes a excluir permanentemente o projeto:
      </p>

      <p><strong>${esc(name)}</strong></p>

      <p class="muted">
        Esta operação removerá o projeto, seu tempo acumulado,
        seu histórico de atividades e suas conquistas.
      </p>

      <p>
        <strong>A exclusão não poderá ser desfeita.</strong>
      </p>

      <p class="small muted">
        Recomendamos realizar um Backup Geral antes de continuar.
      </p>
      `,
      () => {
        const currentIndex = state.projects.findIndex(
          item => item.id === projectId
        );

        if (currentIndex === -1) {
          notify("Este projeto já não existe.");
          return true;
        }

        const previousProjects = state.projects;
        const previousSelected = state.selected;
        const previousDirty = dirty;

        state.projects = state.projects.filter(
          item => item.id !== projectId
        );

        if (state.selected === projectId) {
          state.selected = state.projects[0]?.id || null;
        }

        if (!save()) {
          state.projects = previousProjects;
          state.selected = previousSelected;
          dirty = previousDirty;
          return false;
        }

        navigate("projects");
        notify(`Projeto "${name}" excluído com sucesso.`);

        return true;
      }
    );
  }

  function renderHome() {
    const ms = aggregate();

    app.innerHTML = heading(
      "Seu tempo. Sua evolução.",
      "Cada grau representa dez segundos dedicados à construção dos seus hábitos."
    ) +
      `<section class="card hero">
        <p class="muted">
          Energia acumulada em todos os projetos
        </p>

        <div class="degree">${degreeText(ms)}</div>

        <p>
          ${fmt(state.projects.length)} projetos ·
          ${duration(ms)} de dedicação
        </p>
      </section>

      <h2 class="section-title">Visão geral</h2>

      ${stats(ms)}

      <h2 class="section-title">Projetos recentes</h2>

      <div class="project-list">
        ${state.projects.length
          ? [...state.projects]
              .sort((a, b) => b.created - a.created)
              .slice(0, 4)
              .map(projectCard)
              .join("")
          : `<div class="card">
              <p>Você ainda não possui projetos.</p>
              <p class="muted">
                Abra o menu e escolha Novo Projeto para começar.
              </p>
            </div>`}
      </div>`;
  }

  function renderProjects() {
    app.innerHTML = heading(
      "Meus Projetos",
      "Todos os projetos são armazenados localmente neste navegador."
    ) +
      `<div class="project-list">
        ${state.projects.length
          ? [...state.projects]
              .sort((a, b) => b.created - a.created)
              .map(projectCard)
              .join("")
          : '<div class="card">Nenhum projeto cadastrado.</div>'}
      </div>`;
  }

  function renderProject() {
    const p = selected();

    if (!p) {
      page = "projects";
      renderProjects();
      return;
    }

    const ms = elapsed(p);
    const b = boss(p);
    const running = p.runningSince !== null;
    const units = counts(ms);

    app.innerHTML = `
      ${heading(p.name, "Criado em " + dateFmt(p.created))}

      <section class="card">
        <div class="clock-caption">Relógio de Graus</div>

        <div class="clock" id="liveClock">
          ${duration(ms)}
        </div>

        <div class="clock-caption" id="liveDegrees">
          ${degreeText(ms)}
        </div>

        <p class="clock-caption" id="clockStatus">
          ${running
            ? "Contagem em andamento"
            : "Relógio pausado"}
        </p>

        <div class="actions" style="justify-content:center">
          <button
            class="btn primary"
            data-action="toggle">
            ${running ? "⏸ Pausar" : "▶ Continuar"}
          </button>
        </div>
      </section>

      <h2 class="section-title">Progressão temporal</h2>

      <div class="grid stats">
        ${units.map(u => `
          <div class="card">
            <div class="stat-number">
              ${fmt(u.count)}
            </div>

            <div class="stat-label">
              ${unitLabel(u.name, u.count)}
            </div>
          </div>
        `).join("")}
      </div>

      <h2 class="section-title">Chefão da Fase</h2>

      <section class="card">
        <div class="boss-icon">${b.icon}</div>

        <h3 class="boss-name">${esc(b.name)}</h3>

        <p>
          Fase ${b.index + 1} ·
          ${fmt(b.defeated)} chefões derrotados
        </p>

        ${progressBar(b.progress, "Vida removida do chefão")}

        <p class="small muted" id="bossProgress">
          ${fmt(b.progress)}% do desafio concluído
        </p>

        <p class="small">
          Cada chefão exige 86.400 graus acumulados.
          Ao vencê-lo, um novo desafio aparece automaticamente.
        </p>
      </section>

      <h2 class="section-title">Conquistas do Projeto</h2>

      <section class="card">
        <p>
          ${achievementList(p).filter(a => a.unlocked).length}
          de ${ACHIEVEMENTS.length} conquistas desbloqueadas.
        </p>

        <p class="muted">
          Consulte a Galeria de Conquistas para visualizar
          medalhas e diplomas.
        </p>
      </section>

      <h2 class="section-title">Atividade recente</h2>

      <section class="card">
        ${entryHtml(p.entries.slice(-8).reverse())}
      </section>`;
  }

  function entryHtml(entries) {
    if (!entries.length) {
      return '<p class="muted">Nenhum registro finalizado.</p>';
    }

    return entries.map(e => `
      <div class="history-item">
        <strong>
          ${e.type === "manual"
            ? "Entrada manual"
            : "Sessão cronometrada"}
        </strong>

        <div>
          ${degreeText(e.ms)} · ${duration(e.ms)}
        </div>

        <div class="small muted">
          ${dateFmt(e.at)}
        </div>

        ${e.note
          ? `<p class="small">${esc(e.note)}</p>`
          : ""}
      </div>
    `).join("");
  }

  function renderGallery() {
    const p = selected();

    if (!p) {
      app.innerHTML = heading("Galeria de Conquistas") +
        `<div class="card">
          Crie ou selecione um projeto para visualizar suas conquistas.
        </div>`;
      return;
    }

    const awards = achievementList(p);

    app.innerHTML = heading(
      "Galeria de Conquistas",
      "Projeto: " + p.name
    ) +
      `<p>
        ${awards.filter(a => a.unlocked).length}
        conquistas desbloqueadas.
      </p>

      <div class="gallery">
        ${awards.map(a => `
          <article class="card medal ${a.unlocked ? "" : "locked"}">
            <div class="symbol">
              ${a.unlocked ? a.icon : "🔒"}
            </div>

            <h3>${esc(a.name)}</h3>

            <p class="small">${esc(a.rarity)}</p>
            <p class="small">${fmt(a.target)} graus</p>

            <strong>
              ${a.unlocked ? "Conquistada" : "Bloqueada"}
            </strong>
          </article>
        `).join("")}
      </div>

      <h2 class="section-title">Diplomas Honoríficos</h2>

      <div class="grid">
        ${awards
          .filter(a => a.unlocked && a.target >= 2880)
          .map(a => `
            <article class="card diploma">
              <p>KHRONOS · CERTIFICADO DE MÉRITO</p>

              <h3>${esc(a.name)}</h3>

              <p>
                Concedido ao projeto
                <strong>${esc(p.name)}</strong>
              </p>

              <p>
                Por alcançar o marco de
                ${fmt(a.target)} graus.
              </p>

              <strong>
                Distinção ${esc(a.rarity)}
              </strong>
            </article>
          `).join("") ||
          `<div class="card">
            Os diplomas serão desbloqueados
            a partir do primeiro Turno.
          </div>`}
      </div>`;
  }

  function renderHistory() {
    const items = state.projects
      .flatMap(p =>
        p.entries.map(e => ({
          ...e,
          project: p.name
        }))
      )
      .sort((a, b) => b.at - a.at);

    app.innerHTML = heading(
      "Histórico de Atividades",
      "Registros de sessões e entradas manuais de todos os projetos."
    ) +
      `<section class="card">
        ${items.length
          ? items.map(e => `
            <div class="history-item">
              <strong>${esc(e.project)}</strong>

              <p>
                ${e.type === "manual"
                  ? "Entrada manual"
                  : "Sessão cronometrada"}
                · ${degreeText(e.ms)}
              </p>

              <p class="small muted">
                ${dateFmt(e.at)}
              </p>

              ${e.note
                ? `<p>${esc(e.note)}</p>`
                : ""}
            </div>
          `).join("")
          : "<p>Nenhuma atividade registrada.</p>"}
      </section>`;
  }

  function renderAbout() {
    app.innerHTML = heading("Sobre o Khronos") + `
      <article class="card">
        <h2>Por que Khronos?</h2>
        <p>O nome Khronos é inspirado na personificação mitológica do tempo
        linear e contínuo. Aqui, o tempo não é apenas uma medida:
        é a força que multiplica os resultados das nossas escolhas.</p>
        <p>Hábitos construtivos, repetidos continuamente, produzem
        o efeito composto. Pequenas ações acumuladas podem gerar
        transformações extraordinárias. Da mesma forma, hábitos
        prejudiciais podem produzir consequências negativas ao longo do tempo.</p>
        <p>O Khronos transforma essa ideia em um jogo de progressão.
        Cada sessão adiciona graus, cada marco revela conquistas
        e cada Fase apresenta um novo chefão simbólico.</p>
        <h2>Sistema de unidades</h2>
        ${UNITS.map(([name,d])=>`<p><strong>${name}:</strong>
          ${fmt(d)} graus · ${fmt(d/6)} minutos</p>`).join("")}
        <h2>Privacidade</h2>
        <p>Os projetos são armazenados neste navegador.
        Não existe conta, servidor remoto ou sincronização automática.
        Faça backups regularmente para proteger seus dados.</p>
        <h2>Links oficiais</h2>
        <p><a href="https://magpe-stack.github.io/Khronos/">Aplicativo Khronos</a></p>
        <p><a href="https://github.com/magpe-stack/Khronos">Repositório GitHub</a></p>
        <p><a href="https://github.com/magpe-stack/Khronos/blob/main/README.md">Manual de Ajuda</a></p>
      </article>`;
  }

  function render() {
    switch(page) {
      case "projects": renderProjects(); break;
      case "project": renderProject(); break;
      case "gallery": renderGallery(); break;
      case "history": renderHistory(); break;
      case "about": renderAbout(); break;
      default: renderHome();
    }
  }

  function navigate(to) {
    page = to;
    closeMenu();
    render();
    window.scrollTo(0,0);
    app.focus({preventScroll:true});
  }

  function closeMenu() {
    $("menu").hidden = true;
    $("menuBtn").setAttribute("aria-expanded","false");
  }

  function toggleMenu() {
    const next = !$("menu").hidden;
    $("menu").hidden = next;
    $("menuBtn").setAttribute("aria-expanded",String(!next));
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
    $("themeBtn").textContent = state.theme === "light" ? "☾" : "☀";
    $("themeBtn").setAttribute("aria-label",
      state.theme === "light" ? "Ativar tema escuro" : "Ativar tema claro");
    document.querySelector('meta[name="theme-color"]')
      .setAttribute("content",state.theme === "light"?"#ffffff":"#0f162e");
  }

  function openDialog(title, fields, callback) {
    $("dialogTitle").textContent = title;
    $("dialogFields").innerHTML = fields;
    dialogCallback = callback;
    $("dialog").showModal();
    $("dialogFields").querySelector("input,select,textarea")?.focus();
  }

  function newProject() {
    openDialog("Novo Projeto", `
      <label for="projectName">Nome do projeto</label>
      <input id="projectName" name="name" maxlength="120" required
        placeholder="Ex.: Escrever meu romance" autocomplete="off">`,
      data => {
        const name = String(data.get("name")||"").trim();
        if (!name) throw Error("Informe o nome do projeto.");
        const p = {
          id:uid(),name,created:Date.now(),
          ms:0,entries:[],runningSince:null,startedAt:null
        };
        state.projects.push(p);
        state.selected=p.id;
        if (!save()) {
          state.projects.pop();
          return false;
        }
        navigate("project");
        notify("Projeto criado com sucesso.");
      });
  }

  function settle(p, restart=false) {
    if (p.runningSince === null) return;
    const now=Date.now();
    const delta=Math.max(0,now-p.runningSince);
    if (delta>0) {
      p.ms+=delta;
      p.entries.push({
        ms:delta,at:now,type:"timer",note:""
      });
    }
    p.runningSince=restart?now:null;
    p.startedAt=restart?now:null;
    dirty=true;
  }

  function toggleClock() {
    const p=selected();
    if (!p) return notify("Selecione um projeto.");
    if (p.runningSince!==null) {
      settle(p);
      if (!save()) return;
      notify("Relógio pausado.");
    } else {
      p.runningSince=Date.now();
      p.startedAt=p.runningSince;
      if (!save()) return;
      notify("Relógio iniciado.");
    }
    renderProject();
  }

  function manualEntry() {
    const p=selected();
    if (!p) return notify("Crie ou selecione um projeto primeiro.");
    openDialog("Entrada Manual", `
      <label for="manualUnit">Unidade de entrada</label>
      <select id="manualUnit" name="unit">
        <option value="minutes">Minutos</option>
        <option value="degrees">Graus</option>
      </select>
      <label for="manualAmount">Quantidade</label>
      <input id="manualAmount" name="amount" type="number"
        min="0.01" max="100000000" step="any" required>
      <label for="manualNote">Observação (opcional)</label>
      <textarea id="manualNote" name="note" maxlength="300"></textarea>`,
      data=>{
        const amount=Number(data.get("amount"));
        if (!Number.isFinite(amount)||amount<=0||amount>100000000)
          throw Error("Informe uma quantidade válida.");
        const ms=data.get("unit")==="degrees"
          ?amount*DEGREE_MS:amount*60000;
        if (!Number.isFinite(ms)) throw Error("Valor inválido.");
        p.ms+=ms;
        p.entries.push({
          ms,at:Date.now(),type:"manual",
          note:String(data.get("note")||"").slice(0,300)
        });
        if (!save()) return false;
        render();
        notify("Tempo adicionado ao projeto.");
      });
  }

  function timestamp() {
    const d=new Date();
    const pad=n=>String(n).padStart(2,"0");
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}-${pad(d.getHours())}-${pad(d.getMinutes())}`;
  }

  function download(data,name) {
    const blob=new Blob([JSON.stringify(data,null,2)],
      {type:"application/json;charset=utf-8"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;a.download=name;
    document.body.appendChild(a);
    a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),3000);
  }

  function snapshot(p) {
    const copy=structuredClone(p);
    if (copy.runningSince!==null) {
      const now=Date.now();
      const delta=Math.max(0,now-copy.runningSince);
      copy.ms+=delta;
      if(delta>0) copy.entries.push({
        ms:delta,at:now,type:"timer",note:""
      });
      copy.runningSince=null;
      copy.startedAt=null;
    }
    return copy;
  }

  function exportProject() {
    const p=selected();
    if (!p) return notify("Selecione um projeto.");
    download({
      version:1,kind:"project",
      exportedAt:new Date().toISOString(),
      projects:[snapshot(p)]
    },`export-khronos-${timestamp()}.json`);
    notify("Projeto exportado.");
  }

  function backup() {
    download({
      version:1,kind:"backup",
      exportedAt:new Date().toISOString(),
      theme:state.theme,
      selected:state.selected,
      projects:state.projects.map(snapshot)
    },`backup-khronos-${timestamp()}.json`);
    notify("Backup geral gerado.");
  }

  async function importJson(file) {
    if (!file) return;
    if(file.size>50*1024*1024)
      return notify("Arquivo muito grande (máximo de 50 MB).");
    try {
      const data=JSON.parse(await file.text());
      validate(data);
      if (!["backup","project"].includes(data.kind))
        throw Error("Tipo de arquivo desconhecido.");
      const incoming=data.projects.map(normalize);
      if(data.kind==="backup") {
        if(!confirm("Restaurar o backup substituirá todos os projetos atuais. Deseja continuar?"))
          return;
        const previous=state;
        state={
          version:1,
          theme:data.theme==="dark"?"dark":"light",
          selected:incoming.some(p=>p.id===data.selected)
            ?data.selected:incoming[0]?.id||null,
          projects:incoming
        };
        if(!save()) {state=previous;return;}
      } else {
        const p=incoming[0];
        if(!p||incoming.length!==1)
          throw Error("Exportação de projeto inválida.");
        p.id=uid();
        p.name=p.name+" (importado)";
        state.projects.push(p);
        state.selected=p.id;
        if(!save()) {state.projects.pop();return;}
      }
      applyTheme();
      navigate("projects");
      notify("Importação concluída.");
    } catch(err) {
      notify(err.message||"Falha na importação.");
    } finally {
      $("importFile").value="";
    }
  }

  function printReport() {
    const p = selected();
    if (!p) return notify("Selecione um projeto.");

    const ms = elapsed(p);
    const b = boss(p);
    const awards = achievementList(p).filter(a => a.unlocked);

    const html = `<!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="utf-8">
        <title>Relatório Khronos</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #151f41;
            margin: 35px;
            line-height: 1.5;
          }
          h1 { color: #273877; }
          h2 {
            border-bottom: 2px solid #273877;
            padding-bottom: 7px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 12px 0;
          }
          th, td {
            border: 1px solid #aaa;
            padding: 9px;
            text-align: left;
          }
          th { background: #eaf0f7; }
          .certificate {
            border: 3px double #273877;
            padding: 22px;
            margin: 15px 0;
            text-align: center;
            break-inside: avoid;
          }
          .entry {
            border-bottom: 1px solid #ccc;
            padding: 9px 0;
            break-inside: avoid;
          }
          footer {
            margin-top: 35px;
            font-size: 12px;
          }
          @media print {
            body { margin: 15mm; }
          }
        </style>
      </head>
      <body>
        <h1>Khronos</h1>
        <p>Motor de Hábitos Atômicos</p>

        <h2>Relatório do Projeto</h2>
        <p><strong>${esc(p.name)}</strong></p>
        <p>Gerado em ${esc(dateFmt(Date.now()))}</p>
        <p>Criado em ${esc(dateFmt(p.created))}</p>

        <h2>Resumo Temporal</h2>
        <p>
          <strong>${degreeText(ms)}</strong>
          · ${duration(ms)}
        </p>

        <table>
          <thead>
            <tr>
              <th>Unidade</th>
              <th>Graus por unidade</th>
              <th>Unidades completas</th>
            </tr>
          </thead>
          <tbody>
            ${counts(ms).map(u => `
              <tr>
                <td>${esc(u.name)}</td>
                <td>${fmt(u.size)}</td>
                <td>${fmt(u.count)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <h2>Chefões</h2>
        <p>${fmt(b.defeated)} chefões derrotados.</p>
        <p>
          Chefão atual: ${esc(b.name)}
          — Fase ${b.index + 1}
          (${fmt(b.progress)}%).
        </p>

        <h2>Conquistas</h2>
        ${awards.length
          ? awards.map(a => `
            <p>
              ${esc(a.name)} —
              ${esc(a.rarity)} —
              ${fmt(a.target)} graus
            </p>
          `).join("")
          : "<p>Nenhuma ainda.</p>"}

        <h2>Diplomas Honoríficos</h2>
        ${awards.filter(a => a.target >= 2880).map(a => `
          <div class="certificate">
            <h3>KHRONOS — DIPLOMA HONORÍFICO</h3>
            <p>${esc(p.name)}</p>
            <h2>${esc(a.name)}</h2>
            <p>Marco de ${fmt(a.target)} graus</p>
            <p>Distinção ${esc(a.rarity)}</p>
          </div>
        `).join("")}

        <h2>Histórico</h2>
        ${entryHtml(p.entries)}

        <footer>
          https://magpe-stack.github.io/Khronos/
        </footer>
      </body>
      </html>`;

    const w = window.open("", "_blank");

    if (!w) {
      return notify("Permita janelas pop-up para imprimir.");
    }

    w.document.open();
    w.document.write(html);
    w.document.close();

    w.addEventListener("load", () => {
      w.focus();
      w.print();
    }, { once: true });
  }

  function execute(action) {
    closeMenu();

    switch (action) {
      case "new":
        newProject();
        break;

      case "toggle":
        toggleClock();
        break;

      case "manual":
        manualEntry();
        break;

      case "export":
        exportProject();
        break;

      case "backup":
        backup();
        break;

      case "import":
        $("importFile").click();
        break;

      case "print":
        printReport();
        break;
    }
  }

  function tick() {
    if (page === "project") {
      const p = selected();

      if (p) {
        const ms = elapsed(p);

        if ($("liveClock")) {
          $("liveClock").textContent = duration(ms);
        }

        if ($("liveDegrees")) {
          $("liveDegrees").textContent = degreeText(ms);
        }

        const b = boss(p);

        if ($("bossProgress")) {
          $("bossProgress").textContent =
            fmt(b.progress) + "% do desafio concluído";
        }

        const bar = app.querySelector(
          '[aria-label="Vida removida do chefão"]'
        );

        if (bar) {
          bar.setAttribute(
            "aria-valuenow",
            Math.round(b.progress)
          );

          bar.firstElementChild.style.width =
            b.progress + "%";
        }
      }
    }

    const running = state.projects.some(
      p => p.runningSince !== null
    );

    if (running) {
      dirty = true;
    }
  }

  function bindEvents() {
    $("menuBtn").addEventListener("click", toggleMenu);

    $("homeBtn").addEventListener("click", () => {
      navigate("home");
    });

    $("themeBtn").addEventListener("click", () => {
      state.theme =
        state.theme === "light" ? "dark" : "light";

      applyTheme();
      save();
    });

    $("menu").addEventListener("click", e => {
      const btn = e.target.closest(
        "[data-page],[data-action]"
      );

      if (!btn) return;

      if (btn.dataset.page) {
        navigate(btn.dataset.page);
      } else {
        execute(btn.dataset.action);
      }
    });

    /*
     * Eventos dos cartões de projetos.
     * Abrir e excluir são operações independentes.
     */
    app.addEventListener("click", e => {
      const deleteBtn = e.target.closest("[data-delete]");

      if (deleteBtn) {
        deleteProject(deleteBtn.dataset.delete);
        return;
      }

      const openBtn = e.target.closest("[data-open]");

      if (openBtn) {
        const projectId = openBtn.dataset.open;

        if (!state.projects.some(p => p.id === projectId)) {
          notify("Projeto não encontrado.");
          return;
        }

        state.selected = projectId;
        save();
        navigate("project");
        return;
      }

      const action = e.target.closest("[data-action]");

      if (action) {
        execute(action.dataset.action);
      }
    });

    $("cancelDialog").addEventListener("click", () => {
      $("dialog").close();
    });

    $("dialogForm").addEventListener("submit", e => {
      e.preventDefault();

      if (!dialogCallback) return;

      try {
        const result = dialogCallback(
          new FormData(e.currentTarget)
        );

        if (result !== false) {
          $("dialog").close();
        }
      } catch (err) {
        notify(err.message || "Erro ao executar a operação.");
      }
    });

    $("importFile").addEventListener("change", e => {
      importJson(e.target.files[0]);
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", e => {
      if (
        !$("menu").hidden &&
        !e.target.closest("#menu,#menuBtn")
      ) {
        closeMenu();
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        tick();

        if (
          page === "home" ||
          page === "projects" ||
          page === "gallery"
        ) {
          render();
        }
      }
    });

    window.addEventListener("pagehide", () => {
      if (dirty) {
        save();
      }
    });
  }

  function init() {
    load();
    bindEvents();
    applyTheme();
    render();

    timerId = setInterval(tick, 250);

    setInterval(() => {
      if (dirty) {
        save();
      }
    }, 15000);

    const splash = $("splash");

    setTimeout(() => {
      splash.classList.add("hide");

      setTimeout(() => {
        splash.remove();
      }, 150);
    }, 3000);

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("./sw.js")
          .catch(err => {
            console.warn("Service Worker:", err);
          });
      });
    }
  }

  init();
})();
