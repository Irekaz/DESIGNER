# DESIGNER

A lightweight, browser-based canvas studio. Add rectangles, ellipses, and text to a
canvas, recolor them from a palette, drag them around, and tweak the background — a
small but real design tool built with **Vite + React + TypeScript**.

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:5173
```

## Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the Vite dev server (port 5173)        |
| `npm run build`     | Type-check and build the production bundle    |
| `npm run preview`   | Preview the production build (port 4173)      |
| `npm run typecheck` | Type-check the project with `tsc`             |
| `npm run lint`      | Lint the source with `oxlint`                 |

## Features

- Add **rectangle**, **ellipse**, and **text** elements to the canvas
- Recolor the selected element from a 12-color palette
- Drag elements around the canvas with pointer events
- Change the canvas background color
- Inspect and delete the current selection
- Double-click a text element to edit its content

## Cloud Agent environment

`.cursor/environment.json` configures the Cursor Cloud Agent environment:
`npm ci` installs dependencies and the `dev` terminal runs the Vite server on
port 5173.
