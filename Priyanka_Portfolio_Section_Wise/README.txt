# Priyanka Portfolio — Section-wise files

This folder contains the portfolio split into individual HTML, CSS and JavaScript pieces. The original complete files are preserved in `original-files/` so the current website can still be run without rebuilding it.

## Folder guide
- `sections/<section>/` contains that section's HTML and CSS.
- `shared/` contains site-wide base styles, shared section styles, responsive styles and JavaScript behaviors that affect multiple sections.
- Some interactive behavior is intentionally shared (navigation, scroll reveal, smooth links, back-to-top, year update).

## Important
The section files are fragments, not standalone webpages. To run the website immediately, open `original-files/index.html` with its matching `style.css` and `script.js` in the same folder (or copy those three files into one project folder). The original HTML references `style.css` and `script.js`; keep those filenames exactly.

## Suggested next step
After confirming this organization, the fragments can be wired into one clean main page with separate CSS/JS imports.
