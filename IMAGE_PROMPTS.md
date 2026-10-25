# MainTech image prompts

Every picture on the site has a fixed file name in `public/images/`. To use a new AI photo, generate it with the prompt below (ChatGPT, Gemini, Midjourney or similar), then replace the file with one of the same name.

## How to generate

- Ask for **landscape 4:3** (for example 1536x1152). The site crops to 4:3.
- Add this to every prompt so the style matches across the site:

  > Photorealistic photo, natural daylight, shot on a 35mm lens, shallow depth of field. South African suburban home in Gauteng. The technician wears plain navy blue work overalls with no text, no logos and no name badges. No text anywhere in the image. No watermarks.

- AI tools garble lettering, so keep uniforms and vans **plain**. A MainTech badge can be added afterwards (the current photos had their badges painted in this way).
- Save as WebP at about 80% quality. Each photo also needs a `-sm` copy at 640x480 for the cards. If you would rather not do this yourself, send the images over and they can be cropped, compressed and swapped in for you.

## Photo slots (1024x768, plus a 640x480 `-sm` copy)

| File | Used on | Prompt |
|---|---|---|
| `fridge-repair-technician.webp` | Home hero, fridge page, About | A friendly appliance technician kneeling in a sunny South African kitchen, testing the back of a silver two door fridge with a multimeter. The fridge's bottom panel is off, showing the compressor. Toolbox open on the tiled floor. |
| `callout-technician.webp` | Urgent breakdowns, home page, Contact | A technician walking up the paved path to a face brick house carrying two tool bags, a plain white panel van parked in the driveway behind him, late afternoon light, jacaranda tree in the street. |
| `maintech-team.webp` | About, call to action panels | Four smiling appliance technicians (two women, two men, mixed ethnicities) standing with arms folded in front of a plain white panel van on a suburban Gauteng street. |
| `commercial-fridge-repair.webp` | Commercial fridges | A technician kneeling beside a row of glass door display fridges in a small supermarket, working on the refrigeration unit with pressure gauges connected. |
| `cold-room-repair.webp` | Cold rooms | A technician on one knee fixing the door seal of a stainless steel walk in cold room in a restaurant storeroom, tools laid out on the floor. |
| `aircon-repair.webp` | Aircon repairs | A technician on a step ladder working on an open indoor split aircon unit mounted high on a lounge wall, cover off, using a screwdriver. |
| `aircon-service-home.webp` | Aircon repairs (side photo) | Two technicians servicing an outdoor aircon unit beside a modern South African house, pressure gauges connected, aloe and strelitzia plants nearby. |
| `aircon-maintenance.webp` | Aircon maintenance | A technician on an office rooftop in Johannesburg servicing a large rooftop aircon unit with its filter panel removed, city skyline behind. |
| `appliance-plumbing.webp` | Appliance water connections | Close up of a technician's hands fitting a washing machine inlet hose to a wall tap in a laundry, spanner in hand. |
| `appliance-electrical.webp` | Appliance electrical connections | A technician testing a wall plug point behind a stove with a multimeter, stove pulled slightly away from the wall. |

## Appliance pictures (currently illustrations, 1200x900 in `public/images/illustrations/`, plus `-sm` at 640x480)

These are drawn illustrations today. You can keep them, or replace them with photos of the same shape:

| File | Used on | Prompt |
|---|---|---|
| `washing-machine.webp` | Washing machine page, cards | A technician kneeling in front of a white front loader washing machine in a bright laundry, door open, draining the pump filter into a tray. |
| `tumble-dryer.webp` | Tumble dryer page, cards | A technician cleaning the lint filter of a tumble dryer stacked on top of a washing machine in a home laundry. |
| `dishwasher.webp` | Dishwasher page, cards | A technician kneeling at an open built in dishwasher in a modern kitchen, lower rack pulled out, checking the filter at the bottom of the tub. |
| `oven.webp` | Oven and stove page, cards | A technician replacing the element inside an electric oven in a South African kitchen, oven door open, stove plates on top. |
| `fridge.webp` | Fridge cards | A modern silver fridge in a bright kitchen with the doors closed, a technician's toolbox on the floor beside it. |
| `appliances.webp` | All home appliances page, Services page, 404 | A row of household appliances in a bright kitchen and laundry: fridge, electric stove, washing machine and dishwasher. |
| `maintenance.webp` | Maintenance plans | A technician holding a clipboard with a checklist, standing beside a fridge and washing machine in a home. |

## Real job photos (keep if they are your own work)

`washing-machine-job.webp`, `oven-repair-job.webp` and `laundry-repair-job.webp` come from photos that were already on the old site. Real photos from your own jobs build the most trust, so these are good slots for new pictures of your team at work.

## Area maps

`public/images/areas/*.webp` are drawn maps of Gauteng with each area marked. They don't need AI photos.
