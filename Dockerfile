# syntax=docker/dockerfile:1.6

# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Cache de deps: copia só os manifests e instala antes do código
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copia o código-fonte e gera o build de produção
COPY . .
RUN GITHUB_PAGES=true npm run build

# ---------- Runtime stage ----------
FROM nginx:1.27-alpine AS runtime

# Config Nginx ajustada para SPA/hashes em /Fluxo-Fintech/
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copia apenas os artefatos finais — imagem final fica leve (~25MB)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]