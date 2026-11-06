# Wekesa Ezra — Portfolio (Plain HTML / CSS / JS)

No build step. No npm. No Vite. Open `index.html` in a browser and it works —
or use a simple local server (optional, just avoids some browser file://
restrictions):

```
npx serve .
```

## Folder structure
```
├── index.html      ← all page content/sections
├── css/style.css   ← all styling + dark/light theme
├── js/script.js    ← behavior + your editable DATA (skills, projects, certs, socials)
└── assets/         ← put your photo + PDF files here
```

## Add your files
Drop these into `assets/` with these exact names (or edit the paths in
`index.html` / `js/script.js` to match whatever you name them):
- `profile.jpg` — your photo
- `resume.pdf` — your CV
- `intro-data.pdf`, `intro-AI.pdf`, `python-essentials-1.pdf` — your 3 certificates
- `attachment-report.pdf` — your Nzoia Sugar Company attachment report

## Edit content
Everything editable lives in `js/script.js` at the top — plain arrays, no
JSX, no imports. Edit a value, save, refresh the browser. Done.

## Publish it — GitHub Pages (no build step needed!)

1. Push this folder to a GitHub repository (same as before):
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. In your repo: **Settings → Pages**
3. Under "Build and deployment" → **Source**, select **Deploy from a branch**
   (NOT "GitHub Actions" this time — there's nothing to build!)
4. **Branch:** `main`, folder: `/ (root)` → **Save**
5. Wait 1-2 minutes, then your site is live at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

That's it — no `npm install`, no `npm run build`, no workflow file, no
"wrong folder" terminal errors. Every future update is just:
```
git add .
git commit -m "your message"
git push
```
GitHub Pages picks it up automatically within a minute or two.
