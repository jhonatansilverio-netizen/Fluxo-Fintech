/**
 * FLUXO — Script principal (ES Module)
 * Funciona tanto via Vite quanto aberto direto no navegador (Live Server).
 * Os ícones Lucide são carregados via CDN no index.html (window.lucide).
 */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* =========================================================
   ÍCONES — Lucide (CDN global)
   ========================================================= */
function initIcons() {
  const lucide = window.lucide;
  if (lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons({ attrs: { 'stroke-width': 2 } });
  } else {
    window.addEventListener('load', () => {
      if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 2 } });
    });
  }
}

/* =========================================================
   TEMA — Dark / Light com persistência
   ========================================================= */
function initTheme() {
  const root = document.documentElement;
  const toggle = $('#themeToggle');
  if (!toggle) return;

  const STORAGE_KEY = 'fluxo-theme';

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
    toggle.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'
    );
  };

  let stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (_) {}
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

/* =========================================================
   NAVEGAÇÃO — Menu mobile + header scroll
   ========================================================= */
function initNavigation() {
  const menuToggle = $('#menuToggle');
  const nav = $('.nav');
  const header = $('#header');
  if (!menuToggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  $$('a', nav).forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) closeMenu();
  });

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* =========================================================
   REVEAL — Animações ao entrar na viewport
   ========================================================= */
function initReveal() {
  const targets = $$('.section-head, .about__card, .service-card, .benefit-card, .hero__content, .hero__visual');

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach((el) => observer.observe(el));
}

/* =========================================================
   FORMULÁRIO — Validação de e-mail
   ========================================================= */
function initForm() {
  const form = $('#contactForm');
  const note = $('#formNote');
  if (!form || !note) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!valid) {
      note.textContent = 'Por favor, insira um e-mail válido.';
      note.style.color = '#FFD1D1';
      return;
    }

    note.textContent = '✓ Recebemos seu e-mail! Em breve entraremos em contato.';
    note.style.color = '#C8FFE8';
    form.reset();

    setTimeout(() => { note.textContent = ''; }, 5000);
  });
}

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  initTheme();
  initNavigation();
  initReveal();
  initForm();
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});