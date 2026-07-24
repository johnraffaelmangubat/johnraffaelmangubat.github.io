# John Raffael Mangubat — Portfolio Landing Page

A black-and-white, motion-rich personal landing page for international clients.
Built with **React 19 + Vite + Tailwind CSS v4 + Motion (Framer Motion)**.

The production build compiles to a **single self-contained `index.html`** —
no asset paths to worry about, hosts anywhere.

---

## 🚀 Host on GitHub Pages (recommended, automatic)

A ready-made workflow (`.github/workflows/deploy.yml`) builds and deploys the
site on **every push to `main`**. You never build locally for deployment.

### 1. Create the repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name it anything — e.g. `johnraffael-portfolio`
   (or name it `username.github.io` to use it as your root site)
3. Keep it **public**, don't add README/.gitignore (you already have them)

### 2. Push this project

From the project folder, run:

```bash
git init
git add .
git commit -m "Portfolio landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. Turn on GitHub Pages (one time only)

In the repository: **Settings → Pages → "Build and deployment" →
Source: select "GitHub Actions"**.

That's it. The workflow runs on the first push, and your site goes live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

Every future `git push` to `main` redeploys automatically. You can also
trigger a deploy anytime from the **Actions** tab → "Run workflow".

### Custom domain (optional)

1. Repo **Settings → Pages → Custom domain** → enter your domain
2. At your DNS provider, add a `CNAME` record pointing to `YOUR_USERNAME.github.io`
3. Nothing to change in the code — the build uses relative paths (`--base=./`)

---

## 📦 Alternative: manual deploy (no Actions)

Because the build is one file, you can host it anywhere:

```bash
npm install
npm run build -- --base=./
```

Then either push the contents of `dist/` to a `gh-pages` branch, or drag the
`dist/index.html` into Netlify Drop / Vercel / any static host.

---

## ✏️ Updating your content

| What                          | Where                                        |
| ----------------------------- | -------------------------------------------- |
| **Email, phone, location, links** | `src/content/contact.ts` ← start here    |
| Form inbox (recommended: free [Formspree](https://formspree.io) ID) | `FORM_ENDPOINT` in `src/content/contact.ts` |
| Hero headline & intro         | `src/components/Hero.tsx`                    |
| Work experience (GoCrayons, Growmodo) | `src/components/SocialProof.tsx`     |
| Services / expertise cards    | `src/components/Services.tsx`                |
| Journey timeline & process    | `src/components/Showcase.tsx`                |
| "Why this experience matters" | `src/components/Benefits.tsx`                |
| Quote section                 | `src/components/Testimonials.tsx`            |
| Engagement models             | `src/components/Pricing.tsx`                 |
| FAQ                           | `src/components/FAQ.tsx`                     |
| Page title & SEO description  | `index.html`                                 |

After editing, push to `main` — GitHub Actions rebuilds and redeploys.

> ⚠️ **Before going live:** replace the placeholder email, phone, and location
> in `src/content/contact.ts` with your real details.

---

## 💻 Local development

```bash
npm install
npm run dev      # → http://localhost:5173
```

## 🧱 Project structure

```
.github/workflows/deploy.yml   ← GitHub Pages auto-deploy
src/
  content/contact.ts           ← your details + form endpoint
  components/                  ← one file per page section
  App.tsx                      ← section order, scroll progress, grain
  index.css                    ← design tokens, keyframes, utilities
index.html                     ← fonts, title, meta
```
