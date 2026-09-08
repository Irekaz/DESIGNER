# DESIGNER Waitlist Landing

Premium waitlist page for Drop 01.

## Run locally

```bash
cd waitlist
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

## Waitlist storage

- **Without** `VITE_WAITLIST_ENDPOINT`: emails are stored in the browser `localStorage` (demo / local only).
- **With** endpoint: POSTs JSON `{ email, source, drop }` to your provider (Formspree, Buttondown, custom API, etc.).

Create `.env.local`:

```bash
VITE_WAITLIST_ENDPOINT=https://formspree.io/f/your-id
```

## Brand

- Colours: Ink / Indigo / Ochre / Lime
- Type: Syne + Sora
- Model: scarcity waitlist — not an always-on shop

## Build

```bash
npm run build
npm run preview
```
