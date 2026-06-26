# Fluxo — Fintech Landing Page

Landing page institucional da fintech fictícia **Fluxo**. Projeto acadêmico de demonstração construído com HTML5, CSS modular, JavaScript vanilla e Vite.

## 🚀 Stack

- **HTML5 semântico** (header, main, section, article, footer)
- **CSS3 modular** com design tokens, BEM-like, grid 8px
- **JavaScript ES Modules** (vanilla, sem framework)
- **Vite** como dev server e bundler
- **Lucide** para ícones consistentes
- **Google Fonts** (Plus Jakarta Sans + Inter)

## 📁 Estrutura

```
Fintech/
├── index.html                # Página principal
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── styles/
    │   ├── main.css          # Entry point
    │   ├── tokens.css        # Variáveis e temas
    │   ├── base.css          # Reset + tipografia
    │   ├── components.css    # Botões, badges
    │   ├── header.css
    │   ├── hero.css
    │   ├── about.css
    │   ├── services.css
    │   ├── benefits.css
    │   └── footer.css
    └── scripts/
        ├── main.js           # Orquestrador
        ├── icons.js          # Lucide
        ├── theme.js          # Dark mode
        ├── navigation.js     # Menu mobile
        ├── reveal.js         # Animações on-scroll
        └── form.js           # Validação
```

## 🛠️ Instalação

```bash
npm install
```

## 💻 Desenvolvimento

```bash
npm run dev      # Inicia servidor em http://localhost:5173
npm run build    # Build de produção em /dist
npm run preview  # Preview do build
```

## ✨ Recursos

- ✅ Header com glassmorphism e menu mobile
- ✅ Hero com mockup realista do app
- ✅ Dark mode com persistência
- ✅ Scroll suave + animações de reveal
- ✅ 100% responsivo (mobile-first)
- ✅ Acessibilidade (skip-link, ARIA, alt, contraste)
- ✅ Validação de formulário
- ✅ SEO básico (meta description, lang, theme-color)

## 🎨 Identidade Visual

- **Cor primária:** `#5B5BF6` (indigo)
- **Acentos:** coral `#FF6B6B`, mint `#06D6A0`
- **Tipografia:** Plus Jakarta Sans (títulos) + Inter (corpo)
- **Espaçamento:** grid de 8px

---

Projeto acadêmico — demonstração.