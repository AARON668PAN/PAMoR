# PAMoR Project Website

Project page for **PAMoR: Parameterized Affective Motion Generation in Real Time for Humanoid Robots**.

- Paper: https://arxiv.org/abs/2608.28213
- Website: https://aaron668pan.github.io/PAMoR_web_page/

Built with [vinext](https://www.npmjs.com/package/vinext) (Next.js App Router on Vite) and deployed to GitHub Pages from `main` by `.github/workflows/deploy-pages.yml`.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build        # Cloudflare Workers output (dist/server + dist/client)
npm run build:pages  # prerenders routes to static HTML for GitHub Pages
```

`build:pages` is what CI runs. It sets `GITHUB_PAGES=true` and a base path
matching the repository name, so the published site works under
`/<repo>/`; the workflow reads that name from `GITHUB_REPOSITORY`, meaning
a repository rename needs no change here.
