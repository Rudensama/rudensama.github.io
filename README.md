# rudensama.github.io

Personal site for **rudensama** — solo developer making games and apps. Hosted on GitHub Pages at https://rudensama.github.io.

## What's in here

```
index.html          Landing / home page
about.html          About me
work.html           Games & apps (placeholders for now)
contact.html        Contact & support
privacy.html        Privacy Policy (link this from store listings)
terms.html          Terms of Service (link this from store listings)
copyright.html      Copyright / IP / DMCA notices
assets/css/style.css
assets/js/main.js   Nav highlight + email rendering + year stamp
```

Plain static HTML + CSS + JS. No build step, no dependencies. GitHub Pages serves it directly from the `main` branch.

## Editing the site

Open any `.html` file in a text editor and edit the content inside `<main>`. Shared styles live in `assets/css/style.css`. The contact email is rendered in one place — `assets/js/main.js` — so you only have to change it there if it ever changes.

### Updating the contact email
Edit `assets/js/main.js`:
```js
var user = 'rudensama.dev';   // change this
var domain = 'gmail.com';     // and this
```
Every `[data-email]` element on every page picks up the new address automatically.

### Updating the copyright year
The `<span data-year>` placeholders in every footer (and on the copyright page) are filled in automatically by `main.js` to the current year.

### Adding a project
Open `work.html` and copy one of the `<li>` blocks under `.list`. Update the year, title, and short description. Add store/download links inline as needed.

## Store listing links

When you submit a game to **Google Play Console** or **Apple App Store Connect**, use these URLs:

| Field | URL |
| --- | --- |
| Privacy Policy | `https://rudensama.github.io/privacy.html` |
| Terms of Service / EULA | `https://rudensama.github.io/terms.html` |
| Support email | `rudensama.dev@gmail.com` |
| Support / Marketing URL | `https://rudensama.github.io/contact.html` |
| Developer website | `https://rudensama.github.io/` |

Both Google and Apple require the Privacy Policy URL to be publicly reachable, served over HTTPS, and to mention the actual data collection of the app. The included `privacy.html` is written broadly to cover analytics, crash reports, ads (AdMob / Unity Ads / IronSource / AppLovin), and in-app purchases — trim or expand it per product.

## Deploying

GitHub Pages serves this repo automatically. Push to `main` and the site refreshes within ~1 minute.

```powershell
git add .
git commit -m "update site"
git push
```

## Custom domain (later)

If you buy a custom domain (e.g. `rudensama.games`), add a file named `CNAME` in the repo root containing just the bare domain (no `http://`), then point a DNS `ALIAS`/`ANAME` or `A` record at GitHub Pages' IPs. See: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site.

## Notes / TODOs

- Replace the placeholder entries on `work.html` with real titles as you ship them.
- Add screenshots to `assets/img/` and link them inline where useful.
- When adding a product, add a product-specific privacy section/page if its data collection differs from the generic policy.
- These legal templates are starting points, not legal advice. Have them reviewed by a lawyer for your jurisdiction before launching paid products.
