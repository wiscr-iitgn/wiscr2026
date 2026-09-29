# WISCr — Winter School in Soft & Continuum Robotics

Website for WISCr 2026, IIT Gandhinagar's inaugural Winter School in Soft &
Continuum Robotics: a Day 0 national symposium plus a five-day hands-on
school. Plain HTML/CSS/JS, no build step, built to deploy directly to
GitHub Pages.

**Status: draft, not yet public.** Every page carries a "draft site" banner
and a `noindex` meta tag. See [Before you go public](#before-you-go-public)
for what to change when it's ready.

## Structure

```
.
├── index.html             Home
├── programme.html         Day 0 symposium + the Mon–Fri school schedule
├── sprints.html           "Team Projects" — how the five open-problem projects work
├── faculty.html           Faculty, invited speakers, mentor/staffing structure
├── apply.html             Fees, selection criteria, composition targets, timeline
├── faq.html                Frequently asked questions
├── contact.html             Contact form (placeholder) + contact details
├── css/style.css            Shared stylesheet (single file, no preprocessor)
├── js/main.js                Mobile nav toggle, active-page highlighting, footer year
├── assets/favicon.svg        Site icon, built from the brand blue/red
├── assets/logos/              Official WISCr logo files (color, black, white, source SVG)
├── assets/fonts/               Chelsy (the logo's display typeface), self-hosted
└── .nojekyll                  Tells GitHub Pages not to run Jekyll on this repo
```

There's no templating — each page repeats the same header/nav/footer markup.
For a site this size that's a deliberate simplicity trade-off; if the page
count grows a lot, consider moving to Jekyll (native on GitHub Pages) or a
static site generator.

## Brand

- **Colours**, sampled from the official logo files: brand blue `#00A0E3`,
  brand red `#E31E24`, ink `#434242`. Defined as CSS custom properties at the
  top of `css/style.css` (`--blue-600`, `--red-600`, `--ink-700`, etc.) — change
  them there, once, rather than hunting through each page.
- **Typography:** "Chelsy" (self-hosted from `assets/fonts/`, the wordmark's
  own hand-drawn display face) is used sparingly — the `.display` utility
  class — since it's a display face, not built for paragraph reading. Page
  headings use "Baloo 2" (Google Fonts, rounded and playful to match the
  logo); body text uses "Inter" for readability.
- **Logo:** `assets/logos/wiscr-logo-color.png` is used in the header and
  footer. Black and white variants are included for dark or constrained
  backgrounds if needed. The original vector is `assets/logos/wiscr-logo.svg`
  (re-encoded from UTF-16 to UTF-8 for web use — if you replace it with a
  fresh export from Illustrator/CorelDRAW, re-check the encoding).
- **Font licence:** confirm the usage rights for Chelsy cover a public
  website before this goes live — the font files here came from the shared
  Logos folder without an explicit licence note attached.

## Preview locally

Any static file server works. From this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just double-click `index.html` — the site has no server-side dependencies,
though a local server avoids some browser quirks with relative paths.

## Deploying to GitHub Pages

1. Create a new **private** GitHub repository (keep it private until you're
   ready to go public — see below).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial WISCr site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo's **Settings → Pages**, set the source to the `main` branch,
   root folder. GitHub will publish it at
   `https://<your-username>.github.io/<repo-name>/` — note that GitHub Pages
   sites are **public URLs by default even on a private repo**, once Pages is
   enabled. If you want the live preview to stay hidden too, either leave
   Pages disabled until launch, or use a GitHub Pages plan/setting that
   restricts access (private Pages requires GitHub Enterprise; on a normal
   account, treat "Pages enabled" as equivalent to "public").

## Before you go public

A checklist of what's still open in this draft:

- [ ] Remove `<meta name="robots" content="noindex, nofollow">` from every
      page once the content is final and you want it indexed.
- [ ] Remove the `.draft-banner` div from every page's header.
- [ ] Name the faculty, invited symposium speakers, and team mentors on
      `faculty.html` — including confirming (or dropping) the tentative
      Day 0 keynote mention.
- [ ] Double-check the registration total on `apply.html` — the four listed
      fee-category amounts sum to ₹2,35,000, not the ₹2,77,300 given as the
      total in the source planning note (`WISCr-2026-Note.pdf`). Flagged
      on-page too; resolve before this is public.
- [ ] Confirm the application timeline dates on `apply.html` — the symposium
      (6 Dec) and school (7–11 Dec) dates are fixed, but the surrounding
      open/close/offer dates are a working estimate, not sourced from the
      note itself.
- [ ] Wire `contact.html`'s form to a real backend (Formspree, Netlify Forms,
      a Google Form embed, or a `mailto:` fallback) — it currently submits
      nowhere.
- [ ] Set a real contact mailbox (currently a placeholder on `contact.html`).
- [ ] Confirm the Chelsy font's licence covers public web use (see Brand,
      above).
- [ ] Replace illustrative SVG icons with real photos once available
      (lab shots, past demos, in-house robots) — the layout already
      accommodates an `<img>` in place of each icon/illustration.
- [ ] Add a custom domain (optional) via a `CNAME` file, if IITGN wants one
      instead of the default `github.io` URL.

## Content source

Primary source for programme structure, dates and fees is
`WISCr-2026-Note.pdf` (the circulated planning note, read into this project
in September 2026) — used as the source of truth wherever it's explicit.
Supplementary detail (selection composition targets, staffing structure, the
tentative Day 0 keynote) is carried over from the project's earlier planning
docs (`programme-design-v1.md` and related) where the note doesn't cover it
and nothing contradicts it. Update the docs and the site together as
decisions lock, and re-check this site against the note if a newer version
of it is circulated.
