import { readdirSync, copyFileSync, existsSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
// Next's Windows exporter can emit nested segment files instead of dotted names.
// https://github.com/vercel/next.js/issues/92339
// Copy compatibility aliases; leave all original output intact. Linux needs none.
export function normalizePagesOutput() {
  if (process.platform !== 'win32') return;
  const root = resolve('out');
  function visit(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const file = join(directory, entry.name);
      if (entry.isDirectory()) visit(file);
      else if (entry.name.endsWith('.txt')) {
        const parts = relative(root, file).split(sep);
        const segment = parts.findIndex((part) => part.startsWith('__next.'));
        if (segment >= 0 && segment < parts.length - 1) {
          const alias = join(root, ...parts.slice(0, segment), parts.slice(segment).join('.'));
          if (!existsSync(alias)) copyFileSync(file, alias);
        }
      }
    }
  }
  visit(root);
}
