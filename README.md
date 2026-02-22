# Dhanush — Portfolio

A modern, dark-mode-first developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a particle hero, bento grid projects, glassmorphism nav, and MDX blog.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Particles:** @tsparticles/react
- **Theme:** next-themes (dark/light)
- **Blog:** next-mdx-remote + rehype-pretty-code

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

### Deploy to Vercel

1. **Push your code** to GitHub (or GitLab/Bitbucket) if you haven’t already:
   ```bash
   git add .
   git commit -m "Portfolio ready for deploy"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git   # if needed
   git push -u origin main
   ```

2. **Connect the repo** at [vercel.com](https://vercel.com): sign in → **Add New Project** → import your repo. Vercel will detect Next.js; leave **Build Command** and **Output Directory** as default.

3. **Set environment variables** in the project **Settings → Environment Variables**:

   | Variable | Required | Description |
   |----------|----------|-------------|
   | `NEXT_PUBLIC_SITE_URL` | Optional | Production URL (e.g. `https://dhanush.dev`) for sitemap, robots, OG. |
   | `RESEND_API_KEY` | For contact form | API key from [resend.com](https://resend.com). Without it, the contact form will error. |
   | `CONTACT_EMAIL_TO` | Optional | Email for contact submissions. Defaults to `dhanuskanth.ac@gmail.com`. |

4. **Deploy** — Vercel will build and deploy. Later, every push to `main` will trigger a new deployment.

No `vercel.json` is required; Next.js is auto-detected.

## Updating Content

### Profile & assets

1. **Headshot:** Add your photo as `public/images/headshot.jpg`, then in `src/components/sections/Hero.tsx` change the Image `src` to `"/images/headshot.jpg"` and remove the `unoptimized` prop.
2. **Resume:** Add your PDF at `public/resume.pdf` (download button in header/footer uses it).
3. **Links:** In `src/components/layout/Footer.tsx` and `src/components/sections/Contact.tsx`, set:
   - `GITHUB_URL`
   - `LINKEDIN_URL`
   - `EMAIL`

### Projects

Edit `src/content/projects.ts`: add/update entries (slug, title, description, tech, tags, metrics, links). Project detail pages are at `/projects/[slug]`.

### Experience

Edit `src/content/experience.ts`: company, role, dates, achievements.

### Skills

Edit `src/content/skills.ts`: categories and items.

### Blog posts

Add MDX files under `content/blog/` with frontmatter:

```yaml
---
title: Your Post Title
date: 2025-01-15
excerpt: Short summary (2 lines)
tags: [tag1, tag2]
readTime: 5 min read
---

Your content here. Code blocks get syntax highlighting.
```

Filename becomes the slug (e.g. `my-post.mdx` → `/blog/my-post`).

## Project structure

```
src/
├── app/              # Routes (page, layout, blog, projects)
├── components/       # Layout, sections, UI, animations
├── content/          # projects, experience, skills data
├── lib/              # blog helpers
public/
├── images/           # headshot, project images
content/
└── blog/             # MDX posts
```

## Accessibility & SEO

- Skip link, focus-visible styles, semantic HTML, ARIA where needed
- `prefers-reduced-motion` respected (particles and some animations disabled)
- Metadata, Open Graph, Twitter card, JSON-LD, sitemap, robots.txt

## License

Private — replace with your own when publishing.
