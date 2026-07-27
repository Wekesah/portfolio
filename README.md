# Wekesa Ezra — Portfolio

## Run locally
```
npm install
npm run dev
```

## Publish it (get a real website link)

### Option A — Netlify (easiest, no account setup needed upfront)
1. Go to https://app.netlify.com/drop
2. Run `npm install && npm run build` locally — this creates a `dist` folder.
3. Drag that `dist` folder onto the Netlify Drop page.
4. Netlify gives you a live URL immediately (e.g. `your-site-name.netlify.app`).
   You can rename it or connect a custom domain in Site Settings.

### Option B — Vercel (best if you want auto-redeploy from GitHub)
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new and import that repository.
3. Vercel auto-detects Vite — click Deploy.
4. You get a live URL (e.g. `your-project.vercel.app`), and every future
   `git push` automatically redeploys it.

### Option C — GitHub Pages
1. Push this folder to a GitHub repository.
2. In `vite.config.js`, add `base: '/your-repo-name/'`.
3. Run `npm run build`, then deploy the `dist` folder using the
   `gh-pages` package or GitHub Actions.

Vercel or Netlify are recommended — GitHub Pages requires the extra
`base` path step above.
