import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
const root = resolve('out');
const prefix = '/Sri-Chakra';
const mime = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
};
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname !== prefix && !pathname.startsWith(prefix + '/')) {
      res.writeHead(404);
      return res.end();
    }
    let file = resolve(root, '.' + pathname.slice(prefix.length));
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403);
      return res.end();
    }
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) {
        res.writeHead(301, {
          Location: pathname + '/' + new URL(req.url, 'http://localhost').search,
        });
        return res.end();
      }
      file = resolve(file, 'index.html');
    }
    const content = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream' });
    res.end(content);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(await readFile(resolve(root, '404.html')));
  }
}).listen(3100, '127.0.0.1', () => console.log('Pages preview: http://127.0.0.1:3100/Sri-Chakra/'));
