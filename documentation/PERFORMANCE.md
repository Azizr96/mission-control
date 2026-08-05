# Performance notes

Fixes for the Lighthouse audits on <https://azizr96.github.io/mission-control/>:
render-blocking requests, unused CSS/JS, unminified JS, and missing image dimensions.

## Done

### Explicit image dimensions (`index.html`)

```html
<img src="assets/images/logo.webp" alt="" width="32" height="32" decoding="async">
```

`logo.webp` is intrinsically 32×32 and no CSS rule sizes it, so these attributes match
exactly what the browser was already rendering — but now it can reserve the space before
the image arrives, which removes the header shift (CLS).

`alt` is now empty on purpose: the parent `<span class="app-title__icon">` is
`aria-hidden="true"` and the `<h1>` already reads "Mission Control", so a descriptive
`alt` here was both contradictory and redundant for screen readers.

### Dropped Popper from the Bootstrap JS (`index.html`)

```html
<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
```

`bootstrap.bundle.min.js` (80 KB) bundles Popper, which only tooltips, dropdowns and
popovers need. The only Bootstrap component this project uses is the **Modal**
(`data-bs-toggle="modal"` / `data-bs-dismiss="modal"`), so the non-bundle build is enough
— about 20 KB less JavaScript. The mode tabs look like Bootstrap pills but are driven by
our own handlers in `assets/js/`, so they are unaffected.

**If you ever add a tooltip, dropdown or popover, you must switch back to the bundle** or
those components will silently fail.

## Remaining

These need files downloaded from the internet, so they have to be run locally.

### 1. Self-host the fonts — biggest remaining win

This is what the "Maximum critical path latency: 148 ms" is measuring. The browser has to
fetch `fonts.googleapis.com/css2`, parse it, and only *then* discover the font file on
`fonts.gstatic.com` — two origins, two handshakes, in series.

1. Go to <https://gwfh.mranftl.com/fonts>, select **Inter** and **Sora**, tick **latin**
   only (the 47 KB file in the audit is mostly Cyrillic/Greek/Vietnamese we never render),
   download the `woff2` files into `assets/fonts/`.
2. In `index.html` and `404.html`, replace the three font `<link>` tags with:

   ```html
   <link rel="preload" as="font" type="font/woff2" href="assets/fonts/inter-latin.woff2" crossorigin>
   <link rel="preload" as="font" type="font/woff2" href="assets/fonts/sora-latin.woff2" crossorigin>
   ```

   The `crossorigin` attribute is required even same-origin — without it the font is
   downloaded twice.
3. Add to the top of `assets/css/style.css` (before `:root`):

   ```css
   @font-face {
     font-family: "Inter";
     src: url("../fonts/inter-latin.woff2") format("woff2");
     font-weight: 400 700;
     font-display: swap;
   }
   @font-face {
     font-family: "Sora";
     src: url("../fonts/sora-latin.woff2") format("woff2");
     font-weight: 500 700;
     font-display: swap;
   }
   ```

   Use `font-weight: 400 700` for a variable font. If the download gave you one file per
   weight, write one `@font-face` per file with a single `font-weight` value instead.

Note: `style.css` only declares weights 600 and 700, but the Google URL requests
400/500/600 for Inter — so `<strong>` in the modal is currently rendered with synthetic
(browser-faked) bold. Self-hosting a variable font with a 400–700 range fixes that for free.

### 2. Self-host and trim Bootstrap CSS

Removes the third origin from the critical path and answers the "unused CSS" audit.

```bash
curl -o assets/css/bootstrap.min.css https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css

npx purgecss \
  --css assets/css/bootstrap.min.css \
  --content index.html 404.html assets/js/*.js \
  --safelist show fade modal-open modal-backdrop collapsing is-active \
  --output assets/css/

cat assets/css/bootstrap.min.css assets/css/style.css > assets/css/app.css
```

Then ship a single stylesheet:

```html
<link rel="stylesheet" href="assets/css/app.css">
```

**The safelist is the part to get right.** Bootstrap's modal adds `show`, `fade`,
`modal-open` and `modal-backdrop` at runtime, and our mode tabs toggle `is-active` — none
of those appear in a static class attribute, so PurgeCSS would strip them. After running
it, open the page and check: the modal fades in, the backdrop dims, tabs highlight, and
missions added at runtime still look right. Add any class your JS builds by string
concatenation to the safelist.

### 3. Minify the JavaScript

`assets/js/` is four ES modules totalling ~13.5 KB shipped with comments and indentation,
and each `import` is a separate request.

```bash
npx esbuild assets/js/script.js --bundle --minify --format=esm --outfile=assets/js/script.min.js
```

```html
<script type="module" src="assets/js/script.min.js"></script>
```

`--bundle` collapses `script.js`, `timer.js`, `tasks.js` and `storage.js` into one file, so
this fixes both the minification audit and three extra round trips. Keep the readable
sources committed and re-run the command whenever they change — worth adding to the README
so nobody edits the minified file by mistake.

### 4. `404.html` still loads Bootstrap JS it never uses

The page has no modal, no tabs, no interactive component — just a button-styled link. The
`<script>` tag at the bottom can be deleted outright, saving 80 KB on that page.

Not done here because `404.html` had uncommitted local changes at the time.
