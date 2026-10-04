import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { normalizePagesOutput } from './normalize-pages-output.mjs';
const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, GITHUB_PAGES: 'true' },
});
if (result.status !== 0) process.exit(result.status ?? 1);
normalizePagesOutput();
writeFileSync('out/.nojekyll', '');
