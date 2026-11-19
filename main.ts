// GTA 6 meme entry: the meme itself lives on X, and this program is only the
// courier that hands the gate the post's address. It reads POST.json from the
// repo root, checks the address really is an X status link, and copies the
// file into the output folder the gate reads. A placeholder or malformed
// address stops the run instead of being submitted as a broken entry.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(BOT_DIR, 'POST.json');
let postUrl = '';
try {
  const post = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: unknown };
  if (typeof post.url === 'string') {
    postUrl = post.url;
  }
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

if (postUrl === '') {
  console.error(`No url in ${postPath}: POST.json must name the X post address.`);
  process.exit(1);
}

if (!/^https:\/\/x\.com\/[^/]+\/status\/\d{15,}$/.test(postUrl)) {
  console.error(`Bad post address in ${postPath}: ${postUrl} is not an https://x.com/<handle>/status/<digits> address.`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`Entry post: ${postUrl}`);
