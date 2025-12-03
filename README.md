# CA-Firm (SBCPL)

A small Vite React/Preact-based site for the CA firm (SBCPL).

This repository includes the homepage, a marquee of quick-links, services pages (including an Income Tax service page), and site-wide components such as the `Navbar` and `Footer`.

## Quick overview

- Main entry: `src/main.jsx` (app bootstrap)
- Home component: `src/Home.jsx`
- Styles: `src/Home.css`
- Navbar: `src/components/Navbar.jsx`
- Services pages: `src/` and the `Ak/CAfirmServices-main/src/components` modules

The project is built with Vite and uses React/Preact-style components and React Router `Link` for navigation.

## Features added / notable behaviors

- Seamless marquee under the hero on the homepage implemented using a two-track approach:
  - The markup contains a single track (`.marquee-track`); at runtime the code clones that track once to create a side-by-side duplicate and compute an exact pixel translation distance for a seamless loop.
  - The marquee animation uses CSS keyframes but the translation distance and duration are set via CSS variables by the JS in `src/Home.jsx` (so the animation avoids rounding gaps).
  - The marquee: pauses on hover and `focus-within` (keyboard users), supports pointer cursor and hover/focus visual effects, and is full-bleed across the viewport.
  - The marquee items include: `Home`, `About`, `Services` (links to Income Tax page), `PAN`, and `Contact`.
  - Clicking `Home` (navbar or marquee) will reload the page if you are already on `/`.

## How to run

Prerequisites:
- Node.js 18+ (or compatible)
- npm (or yarn)

Install and start dev server:

```powershell
npm install
npm run dev
```

Open the printed local URL in your browser (usually `http://localhost:5173`).

Build for production:

```powershell
npm run build
npm run preview
```

## Key files to know

- `src/Home.jsx`
  - Contains the hero and the marquee. The marquee mount-effect clones the `.marquee-track`, sets `--marquee-translate` and `--marquee-duration`, and restarts the animation so it always starts from the left.
  - `pxPerSec` controls speed: a simple px/sec → duration calculation is used. Change this value to tune speed.

- `src/Home.css`
  - Styling for hero, marquee, and the rest of the homepage.
  - `.marquee-inner.marquee-running { animation: marqueeMove var(--marquee-duration) linear infinite; }` is used for the loop.
  - Pause-on-hover is implemented with `.marquee-wrapper:hover .marquee-inner.marquee-running` and `.marquee-wrapper:focus-within`.
  - Full-bleed marquee uses `width: 100vw` and `margin-left: calc(50% - 50vw)` trick to break out of constrained containers.

- `src/components/Navbar.jsx`
  - Navbar links include `Home`, `About`, `PAN`, and a `Services` dropdown; `Income Tax` points to `/services/income-tax`.
  - Home link contains a small handler to reload when clicked while already on `/`.

## How to customize marquee behavior

- Speed:
  - Edit `pxPerSec` in `src/Home.jsx` (inside the `useEffect` that computes `--marquee-duration`). Lower px/sec = slower movement; higher = faster.
  - Alternatively, you can always set a fixed `--marquee-duration` in CSS if you prefer a constant time regardless of content width.

- Items:
  - Modify the items in the marquee track in `src/Home.jsx` (search for `.marquee-track` in that file). The code clones that DOM node at runtime; you only need to change the source track.

- Pause on touch (mobile):
  - Currently the marquee pauses on hover and focus (keyboard). To support tap-to-pause on touch devices, add a small `touchstart`/`touchend` handler in `src/Home.jsx` to toggle `animation-play-state` or to add/remove the `.marquee-running` class.

## Accessibility notes

- The cloned track is marked `aria-hidden="true"` and tabbable children inside the clone have `tabindex="-1"` so keyboard and screen reader users interact with only the original set of items.
- `.marquee-wrapper:focus-within` pauses the animation when a child receives focus.
- Marquee items use visual focus styles to remain keyboard-accessible.

## Developer notes & common tweaks

- If you see a small seam in the marquee loop, it is usually because `--marquee-translate` is not matching the track width — the JS computes it at mount by measuring `inner.scrollWidth` and using half the width; ensure the code runs after layout (it currently runs in a `useEffect` on mount).
- To change the hero (SBCPL) section height: edit `.hero` in `src/Home.css` (it was reduced to `min-height: calc(50vh - 5rem)` in recent changes).

## Contributing

- Create a branch, make changes, and open a pull request. Keep changes focused and follow the existing CSS and JSX conventions.

## License & contact

This repository does not contain a license file by default. Add a `LICENSE` if you want to declare a license.

For questions, provide details and mention the file(s) you edited; I can help iterate quickly.

---

*README generated and added to the repo.*
