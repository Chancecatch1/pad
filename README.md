# PAD Web

Website source for PAD - Pine At Dawn.

Live site: https://pineatdawn.me

## Current Runtime

| Area | Stack |
| --- | --- |
| Frontend | Next.js 15, React 19, TypeScript |
| Backend | Express 5, MongoDB |
| Content | Notion databases and pages |
| Deploy | Vercel frontend, Heroku backend |
| Local tutor | Mac UI plus Windows `hxi-ws01` local STT/chat/TTS over Tailscale |

## Local Development

Run commands from the `pad` conda environment.

```bash
conda activate pad
cd /Users/myungjunlee/Documents/Research/Projects/Pad/web
npm run dev
```

Frontend: http://localhost:3000
Backend: http://localhost:4000

## Build Check

```bash
npm --prefix frontend run build
npm --prefix backend run build
```

## Active Features

- Notion-driven PAD projects and Mj portfolio pages.
- Guestbook notes through the backend API.
- Local-only English Tutor at `/tutor`.
- Wedding Exhibition XR wrapper at `/xr/wedding-exhibition`; direct route is deployable, but keep it unpromoted until media/privacy polish is complete.

Tutor details live in `docs/local-first-english-tutor.md`.
