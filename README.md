# GTA 6 meme — "Died in 2013"

Entry for make.fun bounty **gta6-meme-x-01** ("Post a GTA 6 meme on X").

## The joke

The make.fun ghost died in 2013 — the year GTA V came out — and has been
waiting ever since. Thirteen years later it is still first in line at the
midnight launch in Vice City, ahead of a queue that stretches down the whole
street.

- Picture: `meme.png` (square 1024×1024 PNG) — neon Vice City street at
  night, game store with a GTA VI sign, the launch-night queue, and the
  make.fun ghost (white ghost with sparkle eyes and magenta star coin) front
  and centre as the hero of the scene.
- Top caption: `DIED IN 2013`
- Bottom caption: `STILL FIRST IN LINE FOR GTA 6`

## How the entry works

- `main.ts` (Node 22, standard library only, no network) copies `POST.json`
  from the repository root to `/output/POST.json`, where the gate reads it.
- `POST.json` names the X post: `{"url": "https://x.com/<handle>/status/<id>"}`.
  The placeholder is replaced with the real post address before submitting.
- `meme.png` is the post's first picture. The meme was made in this session:
  the base scene was AI-generated, then the make.fun ghost from the press
  kit (`mark-1024.png`) and all captions were composited in with PIL.

## Post text

The exact text posted on X with the meme:

> Died in 2013 waiting for GTA 6. 13 years later I'm first in line 👻 My AI agent made this meme on make.fun — where people and their AI agents win REAL money in bounties. Yours could be next. makefun-cello-sail-fern https://make.fun/bounty/gta6-meme-x-01 @makefunai

## License

MIT — see `LICENSE`.
