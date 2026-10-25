import type { Picture, ServiceMedia } from "@/content/types"

/*
 * Every picture on the site is listed here, so a photo can be swapped by
 * replacing the file in /public/images with one of the same name and shape.
 * Photos are 4:3 (1024x768, with a 640x480 "-sm" copy for cards).
 * Illustrations and maps are 4:3 (1200x900, with a 640x480 "-sm" copy).
 * IMAGE_PROMPTS.md has an AI image prompt for each slot.
 */

function photo(name: string, alt: string): Picture {
  return { src: `/images/${name}.webp`, alt, width: 1024, height: 768 }
}

function photoSm(name: string, alt: string): Picture {
  return { src: `/images/${name}-sm.webp`, alt, width: 640, height: 480 }
}

function art(name: string, alt: string): Picture {
  return { src: `/images/illustrations/${name}.webp`, alt, width: 1200, height: 900 }
}

function artSm(name: string, alt: string): Picture {
  return { src: `/images/illustrations/${name}-sm.webp`, alt, width: 640, height: 480 }
}

export const photos = {
  fridgeTechnician: photo("fridge-repair-technician", "MainTech technician testing a fridge compressor with a multimeter in a home kitchen"),
  callout: photo("callout-technician", "MainTech technician walking up to a house with his tool bags, the MainTech van parked in the driveway"),
  callout_sm: photoSm("callout-technician", "MainTech technician arriving at a home with his tool bags"),
  team: photo("maintech-team", "Four MainTech technicians in navy uniforms standing in front of the MainTech van"),
  team_sm: photoSm("maintech-team", "The MainTech team in front of the MainTech van"),
  aircon: photo("aircon-repair", "MainTech technician working on an indoor split aircon unit"),
}

export const illustrations = {
  appliances: art("appliances", "Illustration of a fridge, stove, washing machine and dishwasher standing side by side"),
  appliances_sm: artSm("appliances", "Illustration of a fridge, stove, washing machine and dishwasher"),
}

export const serviceMedia: Record<string, ServiceMedia> = {
  "refrigeration-repairs": {
    hero: photos.fridgeTechnician,
    card: artSm("fridge", "Illustration of a two door fridge with a thermometer and snowflake"),
  },
  "washing-machine-repairs": {
    hero: art("washing-machine", "Illustration of a front loader washing machine with water in the drum"),
    card: artSm("washing-machine", "Illustration of a front loader washing machine"),
    photo: {
      src: "/images/washing-machine-job.webp",
      alt: "Silver front loader washing machine in a kitchen, waiting for a repair",
      width: 432,
      height: 324,
      caption: "A front loader on a MainTech repair visit.",
    },
  },
  "tumble-dryer-repairs": {
    hero: art("tumble-dryer", "Illustration of a tumble dryer with warm air rising and folded towels beside it"),
    card: artSm("tumble-dryer", "Illustration of a tumble dryer"),
  },
  "dishwasher-repairs": {
    hero: art("dishwasher", "Illustration of an open dishwasher with cups on the top rack and plates below"),
    card: artSm("dishwasher", "Illustration of an open dishwasher"),
  },
  "oven-repairs": {
    hero: art("oven", "Illustration of an electric stove with hot plates and a glowing oven"),
    card: artSm("oven", "Illustration of an electric stove and oven"),
    photo: {
      src: "/images/oven-repair-job.webp",
      alt: "Stove with the oven door off and the elements laid out on the floor during a repair",
      width: 400,
      height: 300,
      caption: "An oven opened up so the element and wiring can be tested.",
    },
  },
  "appliance-repairs": {
    hero: illustrations.appliances,
    card: illustrations.appliances_sm,
    photo: {
      src: "/images/laundry-repair-job.webp",
      alt: "Technician kneeling beside a washing machine with its panels off",
      width: 432,
      height: 324,
      caption: "Laundry machines opened up for repair.",
    },
  },
  "commercial-refrigeration": {
    hero: photo("commercial-fridge-repair", "MainTech technician repairing the refrigeration unit of a shop display fridge"),
    card: photoSm("commercial-fridge-repair", "Technician repairing a shop display fridge"),
  },
  "cold-room-installation-repair": {
    hero: photo("cold-room-repair", "MainTech technician fitting a walk in cold room panel"),
    card: photoSm("cold-room-repair", "Technician working on a walk in cold room"),
  },
  "air-conditioning-services": {
    hero: photos.aircon,
    card: photoSm("aircon-repair", "Technician working on a split aircon unit"),
    photo: {
      src: "/images/aircon-service-home-sm.webp",
      alt: "Two MainTech technicians servicing an outdoor aircon unit beside a house",
      width: 640,
      height: 480,
      caption: "Checking gas pressures on an outdoor unit.",
    },
  },
  "hvac-maintenance-contracts": {
    hero: photo("aircon-maintenance", "MainTech technician testing a rooftop aircon unit with the filter removed"),
    card: photoSm("aircon-maintenance", "Technician servicing a rooftop aircon unit"),
  },
  "property-maintenance": {
    hero: art("maintenance", "Illustration of a maintenance checklist and calendar beside a fridge and washing machine"),
    card: artSm("maintenance", "Illustration of a maintenance checklist"),
  },
  "emergency-callout-service": {
    hero: photos.callout,
    card: photos.callout_sm,
  },
  "plumbing-services": {
    hero: photo("appliance-plumbing", "Technician tightening a water pipe fitting with two wrenches"),
    card: photoSm("appliance-plumbing", "Technician working on a water pipe fitting"),
  },
  "electrical-services": {
    hero: photo("appliance-electrical", "Technician checking wiring at an electrical panel"),
    card: photoSm("appliance-electrical", "Technician checking wiring"),
  },
}

export function getServiceMedia(slug: string) {
  const media = serviceMedia[slug]
  if (!media) throw new Error(`Missing media for ${slug}`)
  return media
}

export function areaMap(slug: string, name: string, small = false): Picture {
  return {
    src: `/images/areas/${slug}${small ? "-sm" : ""}.webp`,
    alt: `Map of Gauteng with ${name} marked among the areas MainTech covers`,
    width: small ? 640 : 1200,
    height: small ? 480 : 900,
  }
}

export const gautengMap: Picture = {
  src: "/images/areas/gauteng.webp",
  alt: "Map of Gauteng marking Pretoria, Centurion, Midrand, Fourways, Randburg, Sandton, Morningside, Rosebank, Johannesburg, Bedfordview and Roodepoort",
  width: 1200,
  height: 900,
}
