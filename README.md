# MainTech Appliance Repairs — Website

Marketing website for **MainTech Appliance Repairs**, a home appliance repair business serving Gauteng, South Africa. The site leads with household appliances (fridges and freezers, washing machines, tumble dryers, dishwashers, ovens and stoves). Commercial fridges, cold rooms, aircons and appliance connections are secondary services.

- **Live URL:** https://www.maintechappliancerepairs.co.za
- **Framework:** Next.js 16 (App Router, static export to `out/`) + TypeScript + Tailwind CSS v4
- **Package manager:** pnpm
- **Deployment:** Vercel

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

```bash
pnpm build          # production build (static export in out/)
pnpm lint           # eslint
node scripts/qa.mjs # checks titles, descriptions, H1s, alt text, links and banned words in out/
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORM_KEY` to a [Web3Forms](https://web3forms.com) access key. The quote form posts to Web3Forms with that key. Without it, the form shows an error and a WhatsApp fallback instead of a success message.

---

## Brand Reference

| | |
|---|---|
| **Company name** | MainTech Appliance Repairs |
| **Phone and WhatsApp** | 065 650 8504 (https://wa.me/27656508504) |
| **Email** | info@maintechappliancerepairs.co.za |
| **Location** | Gauteng, South Africa (no public street address) |
| **Primary colour** | `#0E2A47` navy, with ice blue `#4FB3E8` and amber `#FFB703` accents (see `app/globals.css`) |
| **Logo** | `/public/logo-mark.svg` (star mark), `/public/logo-square.png` (mark with wordmark) |
| **Positioning** | Home appliance repairs at your home. We find the fault and explain it before any work starts. |

Copy rules:

- Do not publish prices, call out fees, opening hours, arrival or same day promises, years in business, customer counts, reviews, certifications, insurance or guarantees unless the owner confirms them.
- Written copy avoids the "-" character (and en or em dashes) in body text.
- Do not reintroduce the old Cold Fix, ZECO Construction or Goshen Projects Solutions branding, their phone numbers, or a street address.

---

## Project Structure

```
app/
├── layout.tsx                    # Root layout, global metadata, LocalBusiness JSON-LD
├── page.tsx                      # Home
├── services/  service-areas/     # Index pages
├── about/  contact/              # About and contact pages
├── privacy-policy/  terms-of-service/
├── <service-slug>/page.tsx       # 14 thin service routes, each renders ServiceTemplate
└── service-areas/<area>/page.tsx # 11 thin area routes, each renders AreaTemplate

components/
├── site/header.tsx  site/footer.tsx  site/call-actions.tsx
├── site/blocks.tsx               # Shared sections: cards, FAQ accordion, steps, CTA band
├── templates/home-view.tsx
├── templates/service-template.tsx
├── templates/area-template.tsx
├── breadcrumbs.tsx  contact-form.tsx
└── ui/                           # Form primitives used by the contact form

content/
├── services.ts                   # All service copy ("home" and "more" groups)
├── areas.ts                      # All area copy
├── media.ts                      # Every picture used on the site, by page
└── types.ts

public/
├── images/                       # Photos (4:3 WebP, plus -sm card copies)
├── images/illustrations/         # Appliance illustrations
├── images/areas/                 # Gauteng map per area
├── logo-mark.svg  logo-square.png  og-image.jpg  favicons
└── robots.txt  llms.txt  site.webmanifest
```

---

## Editing content

- **Service or area copy:** edit `content/services.ts` or `content/areas.ts`. Titles must stay at 49 characters or fewer (the site adds " | MainTech") and meta descriptions between 140 and 160 characters, or `scripts/qa.mjs` fails.
- **Adding a service:** add it to `content/services.ts`, add its pictures to `content/media.ts`, create `app/<slug>/page.tsx` like the others, and add the slug to `app/sitemap.ts` and `public/llms.txt`.
- **Adding an area:** add it to `content/areas.ts`, create `app/service-areas/<slug>/page.tsx`, add a map at `public/images/areas/<slug>.webp` (and `-sm`), and update `app/sitemap.ts` and `public/llms.txt`.
- **Contact details:** `lib/site.ts`.

## Pictures

The technician photos are AI generated images rebranded with MainTech badges and van lettering. The appliance pictures and area maps are drawn illustrations. To swap any picture for a real photo, replace the file in `public/images/` with one of the same name and the same 4:3 shape. `IMAGE_PROMPTS.md` has a ready AI prompt for each picture.

## Known TODOs

- [ ] **Search verification code** placeholder (`your-google-verification-code`) is still in `app/layout.tsx`.
- [ ] **Web3Forms key** must be set in Vercel as `NEXT_PUBLIC_FORM_KEY`.
- [ ] **Real job photos** would be stronger than AI images. See `IMAGE_PROMPTS.md`.
