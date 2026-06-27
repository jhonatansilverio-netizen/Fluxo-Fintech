import { defineConfig } from 'vite';
import { resolve } from 'path';

// Detecta o destino do build a partir das variáveis de ambiente:
//   GITHUB_PAGES=true  -> base "/Fluxo-Fintech/"  (GitHub Pages em subpath)
//   DOCKER=true        -> base "/"                 (Nginx servindo na raiz)
//   padrão (dev/local) -> base "/"                 (dev server usa sempre raiz)
function resolveBase() {
  if (process.env.GITHUB_PAGES === 'true') return '/Fluxo-Fintech/';
  return '/';
}

export default defineConfig({
  base: resolveBase(),
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});