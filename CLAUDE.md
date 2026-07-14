# paolacappellazzi.github.io

Personal academic website. Plain static HTML/CSS, no build step, hosted on GitHub Pages
(user site, served from the `main` branch root). `.nojekyll` is present so GitHub does not
run its default Jekyll processing.

## Structure

- `index.html` &mdash; home page: photo, short bio, education timeline, research interests summary
- `research.html` &mdash; longer research description (MathJax loaded via CDN for inline math)
- `notes.html` &mdash; notes/resources, grouped into category blocks (`<div class="notes-category">`)
- `cv.html` &mdash; CV download link + inline PDF embed
- `style.css` &mdash; shared styling for all pages (monochrome/neutral palette, serif headings)
- `assets/CV.pdf` &mdash; the actual CV file linked from `cv.html`
- `images/avatar-placeholder.svg` &mdash; placeholder avatar on the home page

All four pages share the same `<nav>` markup block (Home / Research / Notes / CV) with
`class="active"` on the current page's link &mdash; keep that nav block in sync if you edit it
on one page.

## Common edits

**Update the CV**: replace `assets/CV.pdf` with the new file (same filename), no other changes needed.

**Add a real photo**: replace `images/avatar-placeholder.svg` with a real image (e.g. `images/photo.jpg`)
and update the `src` on the `<img class="avatar">` tag in `index.html`.

**Add a note/resource**: in `notes.html`, add an `<li>` inside the relevant
`<div class="notes-category">` block (Feynman Integrals / EFTofLSS & Cosmology /
Amplitudes & Positive Geometries), or add a new category block following the existing pattern.

**Add a publication**: research.html currently has no publications list since there are none yet.
When adding one, follow the pattern used on sites like maximilianhaensch.github.io /
dimitricorradini.github.io &mdash; a "Publications" `<h2>` section with one entry per paper
(title, authors, venue/arXiv link).

## Deploying changes

This repo has no build step. Commit and push to `main`; GitHub Pages serves directly from
the branch root within a minute or two.

```
git add -A
git commit -m "..."
git push
```
