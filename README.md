# Tailwind Studio Website

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project" and import this repo
4. Vercel auto-detects Vite — just click "Deploy"
5. Once deployed, go to Settings → Domains → add `tailwindstudio.co`
6. Update your DNS: add the CNAME or A records Vercel gives you

## Deploy to Netlify (alternative)

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. "Add new site" → "Import an existing project" → select this repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add custom domain in Site settings → Domain management

## Notes

- The Senja testimonial carousel requires the external script to load, so it won't render in local dev if the widget ID is invalid or the domain isn't whitelisted
- All CTA buttons link to `#book` — swap with your Calendly link when ready
- Headshot placeholder in the About section — replace with an actual image
