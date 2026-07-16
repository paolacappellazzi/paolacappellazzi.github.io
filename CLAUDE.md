# paolacappellazzi.github.io

Personal academic website built on a customized fork of the **Strata** template by HTML5 UP
(html5up.net/strata, CCA 3.0 license) &mdash; same base layout family as xavierkervyn.github.io
(fixed left sidebar), but deliberately de-styled from it: different accent color, different
fonts, and an independently-scrolling right pane instead of whole-page scroll (see "Layout
mechanics" below). Plain static HTML/CSS, no build step, hosted on GitHub Pages (user site,
served from the `main` branch root). `.nojekyll` is present so GitHub does not run its default
Jekyll processing.

**License note**: keep the "Design: HTML5 UP" credit link in every page's footer &mdash; it's
required by the CCA 3.0 license the template is used under.

**Theme**: accent color is `#c9974a` (warm amber, was Strata's default teal `#49bf9d`) &mdash;
defined via direct hex throughout `assets/css/main.css`, not a CSS variable, so a further color
change means find/replacing that hex. Headings use `Lora` (serif); body text uses `Inter` (sans),
both loaded via the Google Fonts `@import` at the top of `assets/css/main.css`.

## Structure

- `index.html` &mdash; home: avatar, name/subtitle, then three separate sections (`#about`,
  `#education`, `#research-interests`), each its own `<h2>`-headed block
- `research.html` &mdash; research description (MathJax loaded via CDN for inline math); same
  `header class="major"` / `h3` subsection pattern as Xavier's research page
- `notes.html` &mdash; notes/resources as collapsible `<details><summary class="h2">...</summary>` blocks
  per topic, each containing `.publication-card` boxes with an `<ol>` of entries
- `cv.html` &mdash; CV download button + inline PDF `<embed>`
- `assets/css/main.css` &mdash; forked Strata stylesheet (accent color, fonts, and the
  `#content-scroll` layout rules are non-stock changes; everything else is unmodified template CSS)
- `assets/js/`, `assets/webfonts/` &mdash; unmodified Strata template assets
- `assets/CV.pdf` &mdash; the actual CV file linked from `cv.html`
- `images/avatar.svg` &mdash; placeholder avatar (initials) shown in the header on every page
- `images/bg.jpg` &mdash; Strata's header background image

All four pages share the same `<header id="header">` (avatar/name/subtitle/nav) and
`<footer id="footer">` blocks &mdash; keep those two blocks in sync across pages if you edit one.

## Layout mechanics

`#header` is `position: fixed; width: 35%` (the dark sidebar) and never scrolls. Unlike stock
Strata (where the rest of the page just scrolls normally under the fixed sidebar), `#main` and
`#footer` are wrapped together in a `<div id="content-scroll">` that is itself the scrollable
element (`height: 100vh; overflow-y: auto; margin-left: 35%`), with `html, body { overflow:
hidden }` so the page itself never scrolls &mdash; only the right pane does. This only applies
above the 980px breakpoint; below it, Strata's existing mobile media query stacks the sidebar on
top and `#content-scroll` reverts to normal block flow (see the `@media screen and (max-width:
980px)` block in `main.css`). **When adding a page**, wrap its `#main` + `#footer` in
`<div id="content-scroll">…</div>` exactly like the existing four pages, or it will render full-width
under the fixed sidebar instead of scrolling correctly.

## Common edits

**Update the CV**: replace `assets/CV.pdf` with the new file (same filename), no other changes needed.

**Add a real photo**: replace `images/avatar.svg` with a real image (e.g. `images/avatar.jpg`) and
update the `src` on the `<img>` inside `.image.avatar` in the header block, on all four pages.

**Add a note/resource**: in `notes.html`, add an `<li>` inside the relevant `.publication-card`'s
`<ol>`, or add a new `<details>` block following the existing pattern for a new topic.

**Add a publication**: once there are papers to list, add a `.publication-card` block to
`research.html` following the pattern used on xavierkervyn.github.io/research.html and
dimitricorradini.github.io &mdash; title (`h4`), authors/description paragraph, and a line with
`(year) venue` plus `[InspireHEP]` / `[arXiv]` links.

## Deploying changes

No build step. Commit and push to `main`; GitHub Pages serves directly from the branch root
within a minute or two.

```
git add -A
git commit -m "..."
git push
```
