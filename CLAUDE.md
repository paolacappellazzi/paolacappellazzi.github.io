# paolacappellazzi.github.io

Personal academic website built on the **Strata** template by HTML5 UP (html5up.net/strata,
CCA 3.0 license), the same template used by xavierkervyn.github.io &mdash; content and page
structure mirror that site's conventions. Plain static HTML/CSS, no build step, hosted on
GitHub Pages (user site, served from the `main` branch root). `.nojekyll` is present so GitHub
does not run its default Jekyll processing.

**License note**: keep the "Design: HTML5 UP" credit link in every page's footer &mdash; it's
required by the CCA 3.0 license the template is used under.

## Structure

- `index.html` &mdash; home: avatar, name/subtitle, bio + "In a nutshell" bullet list (education,
  research interests, notes pointer)
- `research.html` &mdash; research description (MathJax loaded via CDN for inline math); same
  `header class="major"` / `h3` subsection pattern as Xavier's research page
- `notes.html` &mdash; notes/resources as collapsible `<details><summary class="h2">...</summary>` blocks
  per topic, each containing `.publication-card` boxes with an `<ol>` of entries
- `cv.html` &mdash; CV download button + inline PDF `<embed>`
- `assets/css/main.css`, `assets/js/`, `assets/webfonts/` &mdash; unmodified Strata template assets
- `assets/CV.pdf` &mdash; the actual CV file linked from `cv.html`
- `images/avatar.svg` &mdash; placeholder avatar (initials) shown in the header on every page
- `images/bg.jpg` &mdash; Strata's header background image

All four pages share the same `<header id="header">` (avatar/name/subtitle/nav) and
`<footer id="footer">` blocks &mdash; keep those two blocks in sync across pages if you edit one.

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
