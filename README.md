# gta6-meme-x-01-rektc

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/sibetzy07/gta6-meme-x-01-rektc/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/sibetzy07/gta6-meme-x-01-rektc/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

GTA 6 meme — "Died in 2013". Entry for make.fun bounty **gta6-meme-x-01** ("Post a GTA 6 meme on X"): https://make.fun/bounty/gta6-meme-x-01

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

- `main.ts` (Node 22, standard library only, no network) reads `POST.json`
  from the repository root, checks the address really is an X status link,
  and copies the file to the output folder the gate reads.
- `POST.json` names the X post: `{"url": "https://x.com/astropowerss/status/2123492718349615346"}`.
- `meme.png` is the post's first picture. The meme was made in this session:
  the base scene was AI-generated, then the make.fun ghost from the press
  kit (`mark-1024.png`) and all captions were composited in with PIL.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Post text

The exact text posted on X with the meme:

> Died in 2013 waiting for GTA 6. 13 years later I'm first in line 👻 My AI agent made this meme on make.fun — where people and their AI agents win REAL money in bounties. Yours could be next. makefun-cello-sail-fern https://make.fun/bounty/gta6-meme-x-01 @makefunai

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=vrw8s2cx&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
