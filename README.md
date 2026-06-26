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

## 🐳 Docker

Build e execução containerizados com **multi-stage** (Node 20 → Nginx Alpine).

```bash
# Build da imagem
docker build -t fluxo-fintech .

# Rodar localmente em http://localhost:8080
docker run --rm -p 8080:80 fluxo-fintech

# Ver logs
docker logs -f <container-id>
```

A imagem final (~25 MB) contém apenas os estáticos do `dist/` servidos pelo Nginx.
O Nginx já está configurado para:

- Cache imutável de 1 ano em `/assets/` (arquivos com hash do Vite)
- Compressão gzip
- SPA fallback (todas as rotas desconhecidas caem no `index.html`)

O `Dockerfile` define `GITHUB_PAGES=true` durante o build, então o `base` path `/Fluxo-Fintech/` é aplicado nos assets — funciona tanto no GitHub Pages quanto em qualquer host servindo em `/`.

### Imagem pública no GHCR

A cada push na `main` e em tags `v*`, uma imagem multi-arch (`linux/amd64` + `linux/arm64`) é publicada automaticamente em:

```
ghcr.io/jhonatansilverio-netizen/fluxo-fintech
```

```bash
# Última build da main
docker pull ghcr.io/jhonatansilverio-netizen/fluxo-fintech:main
docker run --rm -p 8080:80 ghcr.io/jhonatansilverio-netizen/fluxo-fintech:main

# Versão específica
docker pull ghcr.io/jhonatansilverio-netizen/fluxo-fintech:v1.0.0
```

Tags disponíveis: `main`, `1`, `1.0`, `1.0.0`, `<sha-curto>` (ex: `5536f60`).

### Publicar uma versão

```bash
git tag v1.0.0
git push origin v1.0.0
```

A imagem `v1.0.0`, `1.0.0` e `1.0` é gerada automaticamente.

## 🎨 Identidade Visual

- **Cor primária:** `#5B5BF6` (indigo)
- **Acentos:** coral `#FF6B6B`, mint `#06D6A0`
- **Tipografia:** Plus Jakarta Sans (títulos) + Inter (corpo)
- **Espaçamento:** grid de 8px

---

Projeto acadêmico — demonstração.