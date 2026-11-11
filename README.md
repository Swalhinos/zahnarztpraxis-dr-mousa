# Zahnarztpraxis Dr. Safwan Mousa — Practice Website (Berlin-Mitte)

Static Next.js website for **Zahnarztpraxis Dr. Safwan Mousa**, Berlin-Mitte.
Built from the upgraded clinic template (4 languages, independent local
chatbot, consistent SVG icon system, performance-hardened).

## Practice data (single source of truth: `CLINIC` in `lib/translations.ts`)

- Doctor: Dr. Safwan Mousa — Zahnarzt & Fachzahnarzt für Oralchirurgie, Implantologie, Privatpraxis
- Address: Schillingstr. 12, 10179 Berlin (U-Bhf Schillingstraße, U5; near Alexanderplatz)
- WhatsApp / mobile: +49 176 3631 3068 (wa.me/4917636313068) — ALL booking/chat links
- Landline (KZV Berlin roster): 030 5588626 — secondary phone
- Instagram: https://www.instagram.com/safwan_87m · TikTok: @safwan.mousa ·
  Doctolib: https://www.doctolib.de/zahnmedizin/berlin/safwan-mousa
- The practice plans to move in ~1 year: edit `CLINIC` once and every page,
  link, the chat assistant and the legal pages update everywhere.

## Languages

German (default, LTR), Arabic (RTL), English, French — full UI translations,
header switcher, `document.lang`/`dir` switch automatically.

## Chatbot — independent & multilingual

100% local FAQ engine (`lib/chat-faq.ts`): 30 topics × 4 languages
(regex intents + normalized keyword scoring + off-list WhatsApp handoff).
NO external API, NO Google/Gemini, NO network calls at all — verified by
code inspection (zero `fetch`/XHR in the whole codebase). Guardrails by
construction: prices are never invented (deflect to WhatsApp with a
transparent cost-plan explanation), medical questions deflect to the team,
booking intent offers the form + WhatsApp cards. Quick-reply chips included.

## Media (his own public photos)

- 4 × before/after case composites (Zahnersatz) from his own Instagram
  @safwan_87m posts, in the dedicated "Ergebnisse" section with lightbox.
- 1 × practice/lab photo (implant model) from the same Instagram account,
  used in "Über uns".
- Hero: original generated illustration of a Berlin practice interior
  (Fernsehturm view) — no clinical close-ups in the hero.
- Practice tour video: **PLACEHOLDER** — an 11 s Ken Burns walkthrough
  rendered from the hero illustration (209 KB, poster + click-to-play).
  To be replaced by his real practice footage when available.
- Blocked sources: TikTok video list/thumbnails (API empty, mirrors
  bot-walled), jameda media (no retrievable public media). His TikTok
  profile avatar was retrieved but NOT used (personal gym photo).

## Legal pages (mandatory for Germany)

`/impressum.html` and `/datenschutz.html`, in all 4 languages, data driven
from `CLINIC`. Placeholders the practice must confirm before go-live are
marked `[PLATZHALTER]` in the text: chamber/degree details, VAT ID,
professional liability insurer. Opening hours (Mo–Fr 09:00–18:00) are a
PLACEHOLDER — not published anywhere by the practice.

## Logo

Newly designed original mark (the practice has no public logo): white
molar + smile arc on a sky→navy gradient tile (`components/logo-mark.tsx`,
`public/images/logo.svg` + PNG favicons).

## Performance (measured on the production build, headless Chrome/CDP)

- Pure static export: routes `/`, `/impressum`, `/datenschutz` — zero API
  routes, zero server functions; trivially CDN-scalable.
- First load: 982 KB raw from a local uncompressed server; text assets
  (HTML+CSS+JS) gzip to 284 KB, so a realistic Vercel first load is
  ≈ 470 KB incl. fonts and hero. FCP/LCP ≈ 268 ms (headless, unthrottled).
- Lazy by default: case photos + video poster load below the fold; the
  video (209 KB) loads only on click; the Google Maps iframe loads only
  on an explicit "Karte laden" click (also a DSGVO plus); fonts
  `display=swap`, Arabic font diet (400/700, no preload).

## Security pass (Cloudflare security-audit skill, guidance mode)

- No secrets, tokens or credentials anywhere in source (grep-verified).
- No third-party scripts/fonts/analytics: the only external requests a
  visitor can trigger are user-clicked links (WhatsApp, Maps, Instagram,
  TikTok, Doctolib) — all `target=_blank rel="noopener noreferrer"`.
- Form composes the WhatsApp text locally with `encodeURIComponent`;
  nothing is stored or transmitted to any server.
- Chat renders answers as React text (no HTML injection surface).
- `vercel.json` ships security headers: `X-Content-Type-Options: nosniff`,
  `Referrer-Policy: strict-origin-when-cross-origin`,
  `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy` (camera/mic/geo off),
  HSTS. (No CSP `script-src` — Next static exports rely on inline
  bootstrap scripts; a strict CSP would break hydration.)

## Verification

`verification/click-test.mjs` — 38/38 CDP click-through checks passed on
the final build (languages ×4 incl. RTL flip, nav, lightbox, video play,
map click-to-load, form validation + wa.me compose, chat quick replies +
DE/AR answers + price deflection, legal pages, mobile menu, zero console
errors). Screenshots: `verification/mousa-desktop-1280-clean.png`,
`verification/mousa-mobile-390-clean.png` (+ chat-open variants).

## Deploy

See `deploy/DEPLOY-STEPS.md` (target repo: `zahnarztpraxis-dr-mousa`).
Do NOT deploy from this folder directly; use the zip + extract workflow.
