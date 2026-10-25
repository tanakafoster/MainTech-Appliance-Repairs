# MainTech Appliance Repairs — Website

Marketing website for **MainTech Appliance Repairs**, an appliance, air conditioning, and refrigeration repair company serving Gauteng, South Africa (Pretoria, Johannesburg, Midrand, and surrounds).

- **Live URL:** https://www.maintechappliancerepairs.co.za
- **Framework:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
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
pnpm build   # production build
pnpm start   # run the production build locally
pnpm lint    # run eslint
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORM_KEY` to a [Web3Forms](https://web3forms.com) access key. The quote form posts to Web3Forms with that key. Without it, the form shows an error and a WhatsApp fallback instead of a success message.

---

## Brand Reference

| | |
|---|---|
| **Company name** | MainTech Appliance Repairs |
| **Phone** | 065 650 8504 |
| **WhatsApp** | https://wa.me/27656508504 |
| **Email** | info@maintechappliancerepairs.co.za |
| **Location** | Gauteng, South Africa (Pretoria, Johannesburg, Midrand and surrounds — no public street address) |
| **Primary color (theme/mask-icon)** | `#0F2C59` (deep navy) |
| **Logo mark** | See `/public/logo-icon.png`, `/public/logo-square.png` |
| **Positioning** | Certified, fully insured technicians; same day quotes and 24/7 emergency callouts |
| **Years in operation** | 10+ |

Keep any new copy consistent with this reference. Do not reintroduce the old ZECO Construction or Goshen Projects Solutions branding, their phone numbers, or a specific street address. Written copy on the site intentionally avoids the "-" character in body text.

---

## Project Structure

```
app/
├── layout.tsx                          # Root layout, metadata, JSON-LD, WhatsApp button
├── page.tsx                            # Homepage
├── about/                              # About page
├── contact/                            # Contact page
├── services/                           # Services overview (/services)
├── service-areas/                      # Service area hub + per-suburb pages
├── privacy-policy/
├── terms-of-service/
│
├── air-conditioning-services/          # Service page
├── refrigeration-repairs/              # Service page
├── cold-room-installation-repair/      # Service page
├── commercial-refrigeration/           # Service page
├── appliance-repairs/                  # Service page
├── hvac-maintenance-contracts/         # Service page
├── emergency-callout-service/          # Service page
├── plumbing-services/                  # Service page
├── electrical-services/                # Service page
└── property-maintenance/               # Service page (Maintenance Contracts)

components/
├── header.tsx                          # Nav, services dropdown, contact bar
├── footer.tsx                          # Footer nav, service list, contact info
├── whatsapp-button.tsx                 # Floating WhatsApp CTA (rendered in layout.tsx)
├── breadcrumbs.tsx                     # Shared breadcrumb trail
├── contact-form.tsx                    # Contact / quote request form
├── service-page-template.tsx           # Shared wrapper for all /service pages
├── service-area-template.tsx           # Shared wrapper for all /service-areas/[suburb] pages
├── theme-provider.tsx
└── home/
    ├── hero-section.tsx
    ├── services-overview.tsx
    ├── why-choose-us.tsx
    ├── service-areas-preview.tsx
    └── cta-section.tsx

public/
├── favicon.ico, favicon-16x16.png, favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png, android-chrome-512x512.png
├── safari-pinned-tab.svg
├── site.webmanifest
├── logo-icon.png, logo-square.png
├── og-image.png
├── robots.txt, llms.txt
└── service + area photography (aircon, refrigeration, appliance, plumbing, electrical, etc.)
```

---

## Current Services (10)

The active service list, consistent across the header nav, homepage grid, and `/services` page:

1. Air Conditioning Services
2. Refrigeration Repairs
3. Cold Room Installation and Repair
4. Commercial Refrigeration
5. Appliance Repairs
6. HVAC Maintenance Contracts
7. Emergency Callout Service
8. Plumbing Services (appliance and refrigeration related)
9. Electrical Services (appliance and refrigeration related)
10. Maintenance Contracts (`/property-maintenance`)

---

## Service Areas (11)

Each area has its own page at `/service-areas/[suburb]`, rendered via `ServiceAreaTemplate`:

Pretoria, Johannesburg, Midrand, Sandton, Centurion, Fourways, Randburg, Bedfordview, Rosebank, Roodepoort, Morningside.

Every area page uses a distinct `introImage` so the pages stay visually unique. The default image (`/technicians-servicing-air-conditioner.png`) is only used as a fallback when no `introImage` prop is passed.

---

## URL Structure

- Service pages: `/service-name` (e.g. `/refrigeration-repairs`)
- Service areas: `/service-areas/[suburb]` (e.g. `/service-areas/sandton`)

---

## SEO Files

- **`app/sitemap.ts`** — generates `/sitemap.xml`. Includes the homepage, core pages, all 10 service pages, and all 11 service areas. Update it whenever a page is added or removed.
- **`public/robots.txt`** — points crawlers to the sitemap at `https://www.maintechappliancerepairs.co.za/sitemap.xml`.
- **`public/llms.txt`** — plain language summary of the business, services, and service areas for LLM consumption. Keep it in sync with the live service and area lists.
- **`app/layout.tsx`** — global metadata, Open Graph/Twitter tags, and Organization + LocalBusiness JSON-LD.

---

## Known TODOs

- [ ] **Search verification codes** — placeholder values (e.g. `your-google-verification-code`) still in `layout.tsx` metadata.
- [ ] **Unconfirmed stats** — figures such as "100s of clients served" and "10+ years experience" carried through the templates should be confirmed as accurate.
- [ ] **`safari-pinned-tab.svg`** — placeholder silhouette, not a true vector trace of the real logo. Replace if you want pixel perfect accuracy.

---

## Notes for Future Edits

- The **`ServicePageTemplate`** and **`ServiceAreaTemplate`** components in `components/` are shared wrappers. Editing them affects *every* service page or every service area page at once, so check there first before assuming a bug is page specific.
- When adding or removing a service, update it in **all** of these places: `components/header.tsx`, `components/footer.tsx`, `components/home/services-overview.tsx`, `app/services/page.tsx`, `app/sitemap.ts`, `public/llms.txt`, and any `relatedServices` arrays on individual service pages that might link to it.
- When adding or removing a service area, update `app/service-areas/` (the page), the service areas hub, `components/home/service-areas-preview.tsx`, `app/sitemap.ts`, and `public/llms.txt`.
- Contact details live in `lib/site.ts`. Change the phone, WhatsApp link, and email there.
- Bulk find and replace across the repo works well from Git Bash:
  ```bash
  find . -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "*/node_modules/*" \
    -exec sed -i 's/OLD_VALUE/NEW_VALUE/g' {} +
  ```
  Always `grep -r` first to preview matches before running the replace.
