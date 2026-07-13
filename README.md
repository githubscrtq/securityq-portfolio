# SecurityQ Portfolio

Public portfolio for **Quenton “SecurityQ” Carr** — Cybersecurity Engineer and Threat Hunter.

- Live: <https://www.securityq.org>
- Email: `contact@securityq.org`
- GitHub: <https://github.com/githubscrtq>
- LinkedIn: <https://www.linkedin.com/in/securityq>

## Purpose

Static, zero-build portfolio presenting SecurityQ's threat-hunting, DFIR, cloud-identity, AI-security, and lab-engineering work.

## Brand assets

| File | Purpose |
| --- | --- |
| `assets/brand-mark.svg` | Full-color standalone Q Pulse mark |
| `assets/brand-mark-mono.svg` | One-color design-mark reference |
| `assets/logo.svg` | Horizontal SecurityQ logo |
| `assets/favicon.svg` | Primary browser favicon |
| `assets/favicon.png` | Legacy favicon fallback |
| `assets/social-card.svg` | Editable 1200×630 social-card source |
| `assets/social-card.png` | Open Graph and Twitter image |

The web identity uses midnight navy, electric cyan, blue, and ultraviolet. The standalone mark has a deterministic one-color version for print, embroidery, and trademark-review workflows.

## Local preview

No build step is required. Serve the repository root to test asset paths and metadata:

```powershell
python -m http.server 4173
```

Then open <http://127.0.0.1:4173/>.

## Validation

```powershell
# Confirm the expected brand assets exist.
Get-Item assets\brand-mark.svg, assets\brand-mark-mono.svg, assets\logo.svg, assets\favicon.svg, assets\social-card.png

# Review local changes.
git status --short
git diff --check
```

Visual validation should cover desktop and mobile widths, keyboard focus, logo legibility, favicon rendering, résumé download, and the obfuscated email link.

## Deployment

- **Netlify:** connect the repository and publish `.`; configuration is in `netlify.toml`.
- **GitHub Pages:** deploy the repository root from the selected branch.

## Files touched by the 2026 brand refresh

- `assets/logo.svg`
- `assets/brand-mark.svg`
- `assets/brand-mark-mono.svg`
- `assets/favicon.svg`
- `assets/social-card.svg`
- `assets/social-card.png`
- `index.html`
- `styles.css`
- `README.md`

## Rollback

Before the refresh, timestamped `.bak` copies were created beside each pre-existing modified file. To restore one file, copy its backup over the active file after confirming the timestamp:

```powershell
Copy-Item -LiteralPath index.html.bak.<UTC_TIMESTAMP> -Destination index.html
```

Do not deploy backup files. They are local rollback artifacts and should remain untracked.
