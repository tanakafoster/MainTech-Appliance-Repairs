# MainTech rewrite report

## Structure

Service and area copy now lives in `content/services.ts` and `content/areas.ts`. Each existing URL is a thin route that renders one shared template:

- Home: `components/templates/home-view.tsx`
- Service pages: `components/templates/service-template.tsx`
- Area pages: `components/templates/area-template.tsx`
- Services index and area index stay at `/services` and `/service-areas`
- About, contact and the 404 page were rewritten around the allowed facts
- Privacy and terms kept their legal wording. Only the business name, contact details, site address and meta description were updated

Header navigation is Services, Areas, About, Contact, plus a Call button. The footer lists services, areas and contact, then the legal links and the copyright line. On small screens a sticky Call and WhatsApp bar sits at the bottom, and the main content has padding so the bar does not cover the form.

## Domain switch

`lib/site.ts` `url` is now `https://www.maintechappliancerepairs.co.za`. Canonicals, Open Graph URLs, JSON-LD, the sitemap and `public/robots.txt` are built from that value or were updated to it.

Redirects are in `vercel.json`, because the README already names Vercel as the host and there was no other host config in the repo. The rules 301:

- `coldfix.co.za` and `www.coldfix.co.za` to the same path on `https://www.maintechappliancerepairs.co.za`
- `maintechappliancerepairs.co.za` (no www) to the www host

Outside the code: both old hosts and the new apex host must be attached to the same Vercel project, and DNS for `coldfix.co.za` must point at that project, or the redirects will not run. Add `NEXT_PUBLIC_FORM_KEY` in the Vercel project from a real Web3Forms access key. `.env` files were not edited.

## Route table

Word counts are visible words inside `<main>` after the rebuild, so they include the page copy rather than the header and footer.

| Route | Type | Title | Meta description | H1 | Words |
|---|---|---|---|---|---|
| / | home | Appliance Repairs in Gauteng \| MainTech | Fridge not cooling or washer not draining in Gauteng? MainTech repairs appliances and explains the fault before work starts. Call 065 650 8504. | Appliance repairs in Gauteng | about 750 after the last home paragraph |
| /about | about | About Our Repair Team \| MainTech | MainTech Appliance Repairs fixes fridges, laundry, ovens, cold rooms and aircons across Gauteng. Ask us to visit you now. Call 065 650 8504. | About MainTech Appliance Repairs | 131 |
| /contact | contact | Contact Us for a Repair \| MainTech | Book a MainTech repair in Gauteng by phone, WhatsApp or the quote form. Name the appliance and the fault. We cover the province. Call 065 650 8504. | Contact MainTech | 61 |
| /services | other | Our Repair Services in Gauteng \| MainTech | See every MainTech repair page: fridges, laundry, ovens, cold rooms and aircons in Gauteng. Pick the machine that failed. Call 065 650 8504. | Repair services in Gauteng | 218 |
| /service-areas | other | Repair Areas in Gauteng \| MainTech | MainTech covers Gauteng, with pages for Pretoria, Johannesburg, Midrand and Sandton. Find your area and book a visit today. Call 065 650 8504. | Areas we cover in Gauteng | 70 |
| /refrigeration-repairs | service | Fridge and Freezer Repairs in Gauteng \| MainTech | Fridge not cooling or freezer icing up in Gauteng? MainTech finds the fault and explains it before any repair starts today. Call 065 650 8504. | Fridge and freezer repairs in Gauteng | 945 |
| /washing-machine-repairs | service | Washing Machine Repairs in Gauteng \| MainTech | Washing machine not draining, not spinning or leaking in Gauteng? MainTech checks the fault and explains it before the repair. Call 065 650 8504. | Washing machine repairs in Gauteng | 810 |
| /tumble-dryer-repairs | service | Tumble Dryer Repairs in Gauteng \| MainTech | Dryer not heating or not tumbling in Gauteng? MainTech checks the airflow and the heat circuit before naming a part today. Call 065 650 8504. | Tumble dryer repairs in Gauteng | 759 |
| /dishwasher-repairs | service | Dishwasher Repairs in Gauteng \| MainTech | Dishwasher not draining or not cleaning in Gauteng? MainTech checks filters, spray arms and the pump before the repair today. Call 065 650 8504. | Dishwasher repairs in Gauteng | 714 |
| /oven-repairs | service | Oven and Stove Repairs in Gauteng \| MainTech | Stove plate not heating or oven not getting hot in Gauteng? MainTech tests the element and controls before any repair today. Call 065 650 8504. | Oven and stove repairs in Gauteng | 750 |
| /appliance-repairs | service | Home Appliance Repairs in Gauteng \| MainTech | Need appliance repairs in Gauteng? MainTech covers laundry and kitchen machines and links you to the right repair page today. Call 065 650 8504. | Appliance repairs in Gauteng | 704 |
| /commercial-refrigeration | service | Commercial Refrigeration in Gauteng \| MainTech | Display fridge warm or ice machine not making ice? MainTech repairs commercial refrigeration across Gauteng today with us. Call 065 650 8504. | Commercial refrigeration repairs in Gauteng | 728 |
| /cold-room-installation-repair | service | Cold Room Repairs in Gauteng \| MainTech | Cold room too warm or freezer room not holding temperature? MainTech repairs walk-in rooms across Gauteng today with us on site. Call 065 650 8504. | Cold room and freezer room repairs in Gauteng | 740 |
| /air-conditioning-services | service | Aircon Repairs in Gauteng \| MainTech | Aircon not cooling or leaking water in Gauteng? MainTech repairs, services and installs split and ducted units today with us. Call 065 650 8504. | Air conditioner repairs in Gauteng | 778 |
| /hvac-maintenance-contracts | service | Aircon Maintenance in Gauteng \| MainTech | Want aircon maintenance in Gauteng? MainTech plans filter, coil and drain checks for offices and retail sites today with us. Call 065 650 8504. | Air conditioner maintenance in Gauteng | 741 |
| /property-maintenance | service | Appliance Maintenance in Gauteng \| MainTech | Need scheduled appliance maintenance in Gauteng? MainTech plans checks for home and business equipment you already use today. Call 065 650 8504. | Appliance maintenance in Gauteng | 728 |
| /emergency-callout-service | service | Emergency Repairs in Gauteng \| MainTech | Fridge, freezer or cold room failed in Gauteng? MainTech takes urgent repair calls and tells you when we can come today with us. Call 065 650 8504. | Urgent appliance and cooling repairs in Gauteng | 768 |
| /plumbing-services | service | Appliance Plumbing in Gauteng \| MainTech | Need a washing machine, dishwasher or ice maker connected in Gauteng? MainTech does that appliance plumbing only today with us. Call 065 650 8504. | Appliance plumbing connections in Gauteng | 725 |
| /electrical-services | service | Appliance Electrical in Gauteng \| MainTech | Need an appliance or aircon connected safely in Gauteng? MainTech does that electrical work, not general house wiring today. Call 065 650 8504. | Appliance electrical connections in Gauteng | 736 |
| /service-areas/pretoria | area | Appliance Repairs in Pretoria \| MainTech | Need appliance repairs in Pretoria? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there today. Call 065 650 8504. | Appliance repairs in Pretoria | 415 |
| /service-areas/johannesburg | area | Appliance Repairs in Johannesburg \| MainTech | Need appliance repairs in Johannesburg? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there. Call 065 650 8504. | Appliance repairs in Johannesburg | 422 |
| /service-areas/midrand | area | Appliance Repairs in Midrand \| MainTech | Need appliance repairs in Midrand? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there today. Call 065 650 8504. | Appliance repairs in Midrand | 411 |
| /service-areas/sandton | area | Appliance Repairs in Sandton \| MainTech | Need appliance repairs in Sandton? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there today. Call 065 650 8504. | Appliance repairs in Sandton | 420 |
| /service-areas/morningside | area | Appliance Repairs in Morningside \| MainTech | Need appliance repairs in Morningside? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there. Call 065 650 8504. | Appliance repairs in Morningside | 405 |
| /service-areas/centurion | area | Appliance Repairs in Centurion \| MainTech | Need appliance repairs in Centurion? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there today. Call 065 650 8504. | Appliance repairs in Centurion | 401 |
| /service-areas/fourways | area | Appliance Repairs in Fourways \| MainTech | Need appliance repairs in Fourways? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there today. Call 065 650 8504. | Appliance repairs in Fourways | 404 |
| /service-areas/randburg | area | Appliance Repairs in Randburg \| MainTech | Need appliance repairs in Randburg? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there today. Call 065 650 8504. | Appliance repairs in Randburg | 400 |
| /service-areas/bedfordview | area | Appliance Repairs in Bedfordview \| MainTech | Need appliance repairs in Bedfordview? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there. Call 065 650 8504. | Appliance repairs in Bedfordview | 402 |
| /service-areas/rosebank | area | Appliance Repairs in Rosebank \| MainTech | Need appliance repairs in Rosebank? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there today. Call 065 650 8504. | Appliance repairs in Rosebank | 399 |
| /service-areas/roodepoort | area | Appliance Repairs in Roodepoort \| MainTech | Need appliance repairs in Roodepoort? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there today. Call 065 650 8504. | Appliance repairs in Roodepoort | 396 |
| /privacy-policy | legal | Privacy Policy \| MainTech | Read how MainTech handles personal information under POPIA, including what we collect and how to reach us in Gauteng today. Call 065 650 8504. | Privacy Policy | 1344 |
| /terms-of-service | legal | Terms of Service \| MainTech | Read the MainTech terms for quotations and appliance, refrigeration and aircon work on this website. Ask us if you are unsure. Call 065 650 8504. | Terms of Service | 1000 |
| /404 | 404 | Page not found \| MainTech | That page is not on the MainTech website. Return to appliance repairs in Gauteng, or call and describe the fault right now. Call 065 650 8504. | Page not found | 27 |

## Decisions made without asking

- The site folder was not a git repository. Git was initialised there so the requested commits could exist. Remotes were not added and nothing was pushed.
- The nested `maintech-appliance-repairs` folder was left out of this repo.
- Vercel is the host, based on the README. Redirects went into `vercel.json` rather than a multi-host migration file.
- Call buttons use the navy primary colour with light text. White text on the safety orange failed contrast. WhatsApp uses an outline button for the same reason.
- Trading hours stay in `lib/site.ts` because that file could not be edited beyond the URL, but they are not shown. Hours were listed as unknown.
- LocalBusiness schema no longer publishes a price range, opening hours, map pin or a Johannesburg street address.
- Old Facebook, Instagram and Twitter profile URLs were removed. No replacements were supplied.
- `_not-found.html` is the same screen as `404.html`, so the QA script checks `404.html` and does not treat the pair as duplicate titles.
- Laundry, dishwasher and oven pages do not name brands. Only Samsung, LG, Midea, Panasonic and Hisense were already on the site, and only on fridge and aircon copy.
- Gas stove repairs stay unpublished.
- Some meta descriptions gained the words "today" or "with us" so they would land between 140 and 160 characters.

## Claims removed

These were on the site before this rewrite. Wording is from the pre-rewrite snapshot.

- README: "Certified, fully insured technicians; same day quotes and 24/7 emergency callouts"
- README: "Years in operation | 10+"
- README note: "100s of clients served" and "10+ years experience"
- About: "Over 10 years serving Pretoria, Johannesburg, and Midrand."
- About: "With over 10 years of experience"
- About stats: "100s Clients Served", "10+ Years Experience", "5 Star Client Rating"
- About: "skilled, certified professionals"
- About: "Licensed and Insured"
- Services page: "10+ Service Categories", "100s Clients Served", "10+ Years Experience"
- Services page: "With over 10 years of experience and hundreds of satisfied clients"
- Services page: "Certified Professionals"
- Services page: "Same day Quotes • Licensed and Insured"
- Air conditioning: "Same day service available" and "same day emergency repairs"
- Home hero: "Quality Guaranteed" and "24 Hour Emergency Callout"
- Home services: "Same day and 24 hour breakdown response"
- CTA: "Same Day Response"
- Why choose us: "same day and urgent breakdown callouts" and "5 Star Reviews"
- Why choose us: "Join hundreds of satisfied clients"
- Footer: "Insured Callouts" and "Trusted by hundreds of clients"
- Service areas: "Same day quotes", "Same Day Callouts Available Daily", "Licensed, insured"
- Contact: "same day quotes" and "Get Your Free Quote in 24 Hours"
- Contact: "Certified Technicians"
- Several service pages passed `responseTime="Same day"` into the old template
- Cold room page: "Same Day Response"

Legal wording about record-keeping periods and "cannot guarantee absolute security" was left in place because it is part of the legal text, not a marketing claim.

## Facts needed but not available

- Trading hours
- Call-out fees and repair prices
- Warranty or guarantee terms
- Arrival or same-day promises
- Years in business, job counts, customer counts
- Reviews, star ratings, certifications, awards, insurance
- Brand lists for washing machines, dryers, dishwashers and ovens
- New logo, favicon and social profile URLs
- A Web3Forms access key (`NEXT_PUBLIC_FORM_KEY`)
- Whether a gas hob is work MainTech actually does

## Area pages

All 11 area pages are in the 350–600 word band inside `<main>`. They differ by the suburb names already published and by a short local paragraph. They do not have landmarks, because none were supplied. Morningside is the thinnest story: it sits next to Sandton and its own suburb list is short. It was kept because the URL already existed.

## Images to replace

Old brand artwork, not redrawn:

- `public/logo-icon.png`
- `public/logo-square.png`
- `public/og-image.png`
- `public/favicon.ico`
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/apple-touch-icon.png`
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`
- `public/safari-pinned-tab.svg`

Photos over 300 KB:

- `public/emergency-callout-technician.png` (2.5 MB)
- `public/technicians-servicing-air-conditioner.png` (2.1 MB)
- `public/hvac-maintenance-technician.png` (2.1 MB)
- `public/commercial-refrigeration-display.png` (2.2 MB)
- `public/cold-room-installation.png` (1.8 MB)
- `public/refrigeration-repair-technician.png` (1.7 MB)
- `public/technician-team-in-gauteng.png` (1.7 MB)
- `public/air-conditioning-service-gauteng.png` (1.2 MB)
- `public/og-image.png` (1.2 MB)
- `public/gauteng-service-areas-map.webp` (423 KB)

## Checks

`tsc --noEmit`, `pnpm lint` and `pnpm build` passed. `node scripts/qa.mjs` reported clean. `qa/routes-after.txt` matches `qa/routes-before.txt`.

## Not completed

- A live Web3Forms submission, because no access key was in the repo.
- DNS and domain attachment on Vercel.
- New logo and favicon artwork.
- Browser screenshots at 360, 768 and 1280 were not captured in this run. The templates use a single column below `md`, a 44px minimum tap height, and bottom padding so the mobile bar does not cover the form.
