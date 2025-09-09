# SecurityQ Portfolio (Static Site)

A zero-cost, modern portfolio for **securityq.org**. Deployable on Netlify, Vercel, GitHub Pages, or Cloudflare Pages.

## Quick Start
1. Replace `resume.pdf` with your actual resume (keep the same filename).
2. Edit links in `index.html` (LinkedIn, GitHub, email).
3. Deploy using one of the options below.

## Deploy Options

### Option A — Netlify (Drag & Drop — easiest)
1. Go to https://app.netlify.com and create a free account.
2. Click **Add new site → Deploy manually** and drag the **contents** of this folder.
3. After deploy, go to **Site settings → Domain management → Add custom domain** and add `securityq.org`.
4. Netlify will show the exact DNS records to add at GoDaddy. Add them and verify.
5. Optional: enable form submissions (Netlify Forms) already wired via `data-netlify="true"`.

### Option B — Vercel
1. Create a free account at https://vercel.com.
2. Click **New Project → Import** and upload the folder (or connect GitHub).
3. After deploy, go to **Settings → Domains** and add `securityq.org`.
4. Follow Vercel’s provided DNS instructions at GoDaddy.

### Option C — GitHub Pages
1. Create a new repo named `securityq.org` (or any).
2. Upload all files.
3. In **Settings → Pages**, choose **Deploy from Branch** (main, / root).
4. Add your custom domain and configure the DNS CNAME/A per GitHub’s instructions.

## GoDaddy DNS
- Keep Proton Mail MX/SPF/DKIM/DMARC as-is for `securityq.org` and `securityq.net`.
- Point **www.securityq.org** to your host using the CNAME provided by Netlify/Vercel.
- Point the **apex** `securityq.org` per your host’s instructions (the dashboard will show A/ALIAS/ANAME values to use).
- For **securityq.net** and **securityq.store**, set **Forwarding** (permanent 301) to `https://securityq.org/` for now.

## Customize
- Colors and layout live in `styles.css`.
- Projects live in the **Featured Projects** section of `index.html`.
- Contact form: uses **Netlify Forms** if you host on Netlify; otherwise it’s a normal POST endpoint you can wire later. For ProtonMail direct, use a `mailto:` link or a serverless function.

## SEO
- Edit `<title>`, `<meta name="description">`, and Open Graph tags.
- JSON-LD schema is included for a person profile.
- Add your site to **Search Console** and **Analytics** after going live.

## Local Preview
Just open `index.html` in a browser (no build step).

---
© SecurityQ — Hack Smarter. Win Bigger.
