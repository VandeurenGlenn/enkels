import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import materialSymbols from 'rollup-plugin-material-symbols';
import { glob } from 'glob';
import { mkdir, opendir, readFile, writeFile, cp, unlink } from 'fs/promises';
import { execSync } from 'child_process';
import { env } from 'process';
import { rimraf } from 'rimraf';

try {
  await opendir('./www/themes');
} catch (error) {
  await cp(
    './node_modules/@vandeurenglenn/lite-elements/exports/themes',
    './www/themes',
    { recursive: true }
  );
}
const views = await glob(['./src/views/**/*']);

let index = await readFile('./src/index.html', 'utf-8');
if (env.NODE_ENV === 'development') {
  index = index.replace(
    '<body>',
    `
  <body>
  <script>
    const ws = new WebSocket(location.protocol === 'https:' ? 'wss://' + location.host : 'ws://' + location.host, 'reload-app')
    ws.addEventListener('open', () => {
      ws.addEventListener('message', () => location.reload())
    })
    
  </script>
  `
  );
} else {
  index = index.replace(
    '<!-- service-worker-placeholder -->',
    `<script type="module">
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("./sw.js" );
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.error(error);
      }
    }
  </script>
  <link rel="manifest" href="./manifest.json">`
  );
}

writeFile('./www/index.html', index);
const files = await glob(['www/**/*'], {
  ignore: [
    'www/manifest.json',
    'www/assets',
    'www/assets/**/*',
    'www/index.html',
    'www/themes',
    'www/themes/**/*',
  ],
});
await Promise.all(files.map((file) => unlink(file)));

const generateServiceWorker = () => ({
  name: 'generate-service-worker',
  writeBundle: () => {
    if (env.NODE_ENV === 'production')
      execSync('npx workbox-cli generateSW workbox-config.cjs');
  },
});
const cleanBuild = () => ({
  name: 'clean',
  buildStart: async (dir) => {
    rimraf('./www/**/*.js', { glob: true });
    rimraf('./www/**/*.d.ts', { glob: true });
  },
});
export default [
  {
    input: ['./src/shell.ts', ...views],
    output: {
      format: 'es',
      dir: 'www',
    },
    plugins: [
      materialSymbols({
        placeholderPrefix: 'symbol',
      }),
      cleanBuild(),
      resolve(),
      typescript(),
      generateServiceWorker(),
    ],
  },
];
