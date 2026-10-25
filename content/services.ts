import type { ServiceContent } from "@/content/types"

export const services: ServiceContent[] = [
  {
    slug: "refrigeration-repairs",
    group: "home",
    nav: "Fridges and freezers",
    title: "Fridge and Freezer Repairs in Gauteng",
    metaDescription: "Fridge warm or freezer icing up? MainTech repairs fridges and freezers at your home across Gauteng and explains the fault before any work. Call 065 650 8504.",
    eyebrow: "Fridges and freezers",
    h1: "Fridge and freezer repairs in Gauteng",
    lead: "Fridge gone warm, freezer packed with ice, or water creeping across the kitchen floor? We come to your home anywhere in Gauteng, find the fault and explain the repair before any work starts.",
    short: "Fridges and freezers that are warm, iced up, leaking or noisy.",
    faults: [
      {
        name: "Fridge not cooling",
        detail: "The light comes on but the milk is warm. This is often a fan, a thermostat or the defrost system rather than the compressor, so we test before we name a part.",
      },
      {
        name: "Freezer icing up",
        detail: "A thick wall of ice on the back panel usually means the defrost system has stopped clearing it. Scraping it off buys you time, but the ice comes back until the heater, sensor or drain is fixed.",
      },
      {
        name: "Water on the floor",
        detail: "Puddles under the fridge or water pooling under the salad drawers usually come from a blocked defrost drain. A tired door seal can add to it by letting warm, damp air in.",
      },
      {
        name: "Running all the time",
        detail: "A fridge that never switches off may have dusty condenser coils, poor airflow or a cooling fault. We measure temperatures and listen to the compressor before we suggest anything.",
      },
      {
        name: "Clicking, buzzing or rattling",
        detail: "A new noise often points to a fan catching on ice, a loose pipe or a compressor that keeps trying to start. Tell us when you hear it, because that narrows things down quickly.",
      },
      {
        name: "Chest freezer not freezing",
        detail: "Soft ice cream or meat thawing at the edges calls for a look at the lid seal, the thermostat and the cooling system. Chest freezers and upright freezers are both part of what we do.",
      },
    ],
    work: [
      {
        title: "Tell us the symptoms",
        detail: "Call or WhatsApp us with the make and model if you can see the sticker, and say whether the fridge, the freezer or both are warm.",
      },
      {
        title: "We check it properly",
        detail: "At your home we measure temperatures, check the airflow, door seals and defrost drain, and listen to the fans and compressor.",
      },
      {
        title: "You decide",
        detail: "We explain what has failed and what the repair involves. Nothing gets replaced until you say go ahead.",
      },
      {
        title: "Tested before we leave",
        detail: "After the repair we run the fridge and check that the temperature is dropping the way it should.",
      },
    ],
    brands: ["Samsung", "LG"],
    sections: [
      {
        heading: "Every kind of home fridge and freezer",
        paragraphs: [
          "We repair the fridges and freezers you find in Gauteng homes: fridge freezer combinations, side by side models, upright freezers, chest freezers and bar fridges. If it keeps your food cold at home, we can look at it.",
          "Shop display fridges and walk in cold rooms are a different kind of equipment, so we treat those as commercial work. If you are not sure which you have, just call and describe it.",
        ],
      },
      {
        heading: "Is it worth fixing?",
        paragraphs: [
          "Plenty of warm fridges come down to one small part: a fan motor, a thermostat, a defrost heater or a blocked drain. Repairs like these usually make good sense.",
          "If the compressor or the sealed cooling system has failed on an older fridge, the picture changes. We will tell you honestly when a repair is not worth it, so you can decide whether to fix it or replace it.",
        ],
      },
      {
        heading: "Keeping your food safe while you wait",
        paragraphs: [
          "Keep the doors shut. A closed fridge or freezer holds its cold far longer than one that keeps being opened to check on it. If you have a cooler box and some ice, move the most perishable food into it first.",
        ],
      },
    ],
    tips: [
      "Keep the fridge and freezer doors closed as much as you can until we arrive.",
      "Photograph the model sticker, usually on an inside wall or behind the salad drawer, and send it to us on WhatsApp.",
      "Clear the space in front of the fridge so the technician can pull it out and reach the back.",
      "If you smell burning or the plug point feels hot, switch off at the wall and leave it off.",
    ],
    faqs: [
      {
        question: "Can you fix a fridge that is not cooling?",
        answer: "Usually, yes. Most warm fridges turn out to be a fan, thermostat, defrost or airflow fault. We find the cause first and tell you what the repair involves before we start.",
      },
      {
        question: "Do you repair freezers too?",
        answer: "Yes. Upright freezers, chest freezers and the freezer section of a combination fridge are all part of the job. Walk in freezer rooms are handled as cold room work.",
      },
      {
        question: "Will you just top up the refrigerant?",
        answer: "Only if our tests show that refrigerant is the problem. A warm fridge is often a fan or defrost fault, and adding refrigerant would not fix that.",
      },
      {
        question: "Can load shedding damage my fridge?",
        answer: "Power cuts, and the surge when the power comes back, can upset electronic controls and strain the compressor. If your fridge has played up since a power cut, tell us, because it helps us know where to look.",
      },
      {
        question: "Do you come to my area?",
        answer: "We cover Gauteng, including Pretoria, Johannesburg, Centurion, Midrand, Sandton and Fourways. Call or WhatsApp us and we will let you know when we can come.",
      },
    ],
    related: ["commercial-refrigeration", "cold-room-installation-repair", "appliance-repairs", "emergency-callout-service"],
  },
  {
    slug: "washing-machine-repairs",
    group: "home",
    nav: "Washing machines",
    title: "Washing Machine Repairs in Gauteng",
    metaDescription: "Washing machine not draining, not spinning or leaking? MainTech repairs front and top loaders at your home in Gauteng and finds the fault. Call 065 650 8504.",
    eyebrow: "Laundry",
    h1: "Washing machine repairs in Gauteng",
    lead: "Drum full of water, stuck before the spin, or leaking across the laundry floor? We repair washing machines at your home across Gauteng, find the real fault and tell you what the repair involves before we touch a part.",
    short: "Front and top loaders that will not drain, spin, start or stop leaking.",
    faults: [
      {
        name: "Not draining",
        detail: "Water left sitting in the drum is often a blocked pump filter or a kinked drain hose. We clear the easy causes first and only test the pump once those are ruled out.",
      },
      {
        name: "Not spinning",
        detail: "If the machine washes but will not spin, the door lock, the motor, the carbon brushes or the belt could be involved. An unbalanced load is sometimes the cause, but not always the whole story.",
      },
      {
        name: "Leaking water",
        detail: "A leak at the door, under the machine or behind it points to different parts. We check the door seal, hoses, internal joints and the soap drawer before we name the cause.",
      },
      {
        name: "Will not start",
        detail: "No lights at all, or lights with no programme, can be the door lock, the controls or the power reaching the machine. We test at the appliance so you know which it is.",
      },
      {
        name: "Banging on spin",
        detail: "A machine that thumps, shakes or walks across the floor may have worn shock absorbers, loose counterweights or failing drum bearings. A loud rumble during the spin is often the bearings.",
      },
      {
        name: "Door will not open",
        detail: "A door that stays locked after a wash usually means water is still inside or the lock has failed. Try not to force it, as that can break the handle and the lock.",
      },
    ],
    work: [
      {
        title: "Describe what happens",
        detail: "Tell us where in the cycle it goes wrong: filling, washing, rinsing, draining or spinning. A short video on WhatsApp helps a lot.",
      },
      {
        title: "We find the fault",
        detail: "We check the filter, hoses, door lock and the parts that match your symptom, then run the machine to see the fault for ourselves.",
      },
      {
        title: "Your go ahead",
        detail: "We explain what has failed and what the repair involves. Work only starts once you are happy to go ahead.",
      },
      {
        title: "A test wash",
        detail: "After the repair we run a short cycle to check that the machine fills, drains and spins properly before we leave.",
      },
    ],
    brands: [],
    sections: [
      {
        heading: "Front loaders and top loaders",
        paragraphs: [
          "We repair front loaders, top loaders and washer dryer combinations. They fail in different ways. A front loader relies heavily on its door lock and door seal, while a top loader is more likely to have trouble with its lid switch, belt or drive.",
          "Tell us which type you have when you call, along with the make and model. That way the technician arrives knowing what to look for.",
        ],
      },
      {
        heading: "Repair or replace?",
        paragraphs: [
          "Most washing machine faults are well worth repairing. Pumps, door locks, hoses and seals are everyday fixes. Drum bearings take more work, and on some machines the drum and bearings are sealed together as one unit.",
          "When that happens on an older machine, we will tell you plainly whether the repair still makes sense, so you do not spend money on work that is not worth it.",
        ],
      },
      {
        heading: "Sometimes it is the tap or the hose",
        paragraphs: [
          "A tap that is only half open, a cracked inlet hose or a drain that backs up can all look like a washing machine fault. We check the water connections that belong to the machine and can sort them out on the same visit.",
        ],
      },
    ],
    tips: [
      "If the machine is leaking, turn off the tap that feeds it.",
      "If water is still in the drum, leave the door shut and put towels down to protect the floor.",
      "Clear washing baskets and anything stored on top of or beside the machine so we can move it.",
      "Photograph the model sticker, usually on the door rim or the back, and send it on WhatsApp.",
    ],
    faqs: [
      {
        question: "Why is my washing machine not draining?",
        answer: "The usual causes are a blocked pump filter, a kinked or blocked drain hose, or a pump that has failed. We check the simple blockages first, so you do not end up with a new pump you did not need.",
      },
      {
        question: "Is a leak always the door seal?",
        answer: "No. Hoses, the soap drawer, the pump and internal joints can all leak. We find where the water is really coming from before we name the part.",
      },
      {
        question: "Why does my washing machine smell?",
        answer: "A musty smell usually comes from soap residue and lint in the drawer, the door seal and the filter. A hot cleaning wash and a clean filter often fix it. If the smell keeps coming back, water may be sitting in the machine because of a drain fault.",
      },
      {
        question: "Can I keep using it until you come?",
        answer: "If it leaks, trips the power or smells of burning, please stop using it. If it only fails on one part of the cycle, ask us when you call and we will tell you whether it is sensible to carry on.",
      },
      {
        question: "Do you repair washing machines in my area?",
        answer: "We cover Gauteng, including Pretoria, Johannesburg, Centurion, Midrand, Sandton, Randburg and Roodepoort. Call or WhatsApp us and we will confirm when we can come.",
      },
    ],
    related: ["tumble-dryer-repairs", "appliance-repairs", "plumbing-services", "electrical-services"],
  },
  {
    slug: "tumble-dryer-repairs",
    group: "home",
    nav: "Tumble dryers",
    title: "Tumble Dryer Repairs in Gauteng",
    metaDescription: "Tumble dryer not heating, not turning or cutting out halfway? MainTech repairs vented and condenser dryers at your home across Gauteng. Call 065 650 8504.",
    eyebrow: "Laundry",
    h1: "Tumble dryer repairs in Gauteng",
    lead: "Clothes still damp after a full cycle, a drum that will not turn, or a dryer that cuts out halfway? We repair vented and condenser tumble dryers at your home across Gauteng, and we explain the fault before any work starts.",
    short: "Vented and condenser dryers that run cold, cut out or will not tumble.",
    faults: [
      {
        name: "Not heating",
        detail: "If the drum turns but the air stays cold, the element, a thermostat or the thermal fuse may have failed. Poor airflow can trip a safety cutout as well, so we check that too.",
      },
      {
        name: "Drum not turning",
        detail: "If you can hear the motor but the drum stays still, a snapped drive belt is the usual suspect. If there is no sound at all, we look at the door switch, the motor and the controls.",
      },
      {
        name: "Takes too long",
        detail: "Two cycles for one load usually means the air is not getting through. A packed lint filter, a crushed vent hose or a clogged condenser are the first things we check.",
      },
      {
        name: "Stops mid cycle",
        detail: "A dryer that cuts out partway through is often overheating and switching itself off to stay safe. Clearing the blockage and testing the thermostats usually finds the cause.",
      },
      {
        name: "Squealing or thumping",
        detail: "A high squeal often points to worn drum rollers or a tired belt tensioner, and a steady thump can be a flat spot on a roller. We find which part is worn before replacing anything.",
      },
      {
        name: "Condenser tank warnings",
        detail: "On a condenser dryer, a tank that barely fills or a warning light that stays on after you empty it can be a pump or sensor fault. We test the water path from the drum to the tank.",
      },
    ],
    work: [
      {
        title: "Tell us the symptom",
        detail: "Let us know whether the dryer is vented or condenser, and whether it runs cold, stops or will not turn. A photo of the model sticker on WhatsApp helps.",
      },
      {
        title: "Airflow and heat checks",
        detail: "We check the filter, the vent or condenser and the heating circuit together, because a dryer's heat and airflow depend on each other.",
      },
      {
        title: "You approve the repair",
        detail: "We show you what we found and explain the repair. No parts are fitted until you agree.",
      },
      {
        title: "A full test run",
        detail: "We run the dryer with heat to make sure it warms up, tumbles and keeps running.",
      },
    ],
    brands: [],
    sections: [
      {
        heading: "Vented or condenser, we repair both",
        paragraphs: [
          "A vented dryer pushes warm, damp air out through a hose, usually through a wall or a window. A condenser dryer cools that air inside the machine and collects the water in a tank or sends it down a drain. They dry clothes the same way but fail in slightly different places.",
          "With vented dryers, a squashed or blocked vent hose causes a lot of slow drying. With condenser dryers, a condenser packed with fluff is the usual culprit. Many of these faults are simple to fix once they are found.",
        ],
      },
      {
        heading: "Lint, heat and safety",
        paragraphs: [
          "Lint burns easily, and a dryer running hot behind a blocked filter or vent is working harder than it should. Cleaning the filter after every load is the most useful habit you can give your dryer.",
          "If you notice a burning smell, scorch marks on clothes or a drum that feels much hotter than usual, stop using the dryer and unplug it. Tell us what you noticed so we can check the heater and thermostats first.",
        ],
      },
      {
        heading: "Laundry problems often come in pairs",
        paragraphs: [
          "If your washing machine is leaving clothes soaking wet, even a healthy dryer will struggle. We can check the washer's spin and the dryer on the same visit, so you get to the real cause.",
        ],
      },
    ],
    tips: [
      "Clean the lint filter before we come, as a blocked filter alone can stop a dryer drying.",
      "Check that the vent hose behind a vented dryer is not crushed against the wall.",
      "If you smell burning, unplug the dryer and do not run it again until it has been checked.",
      "Clear space around the dryer, especially if it is stacked on top of a washing machine.",
    ],
    faqs: [
      {
        question: "Why is my tumble dryer not heating?",
        answer: "The usual causes are the heating element, a thermostat or the thermal fuse. A blocked filter or vent can also trip the safety cutout. We test all of these, so the cause gets fixed and not just the symptom.",
      },
      {
        question: "Why does my dryer take so long to dry clothes?",
        answer: "Usually the air is not getting through. Clean the lint filter and check the vent hose first. On a condenser dryer, the condenser needs a rinse now and then. If it is still slow, the heater or a sensor may be at fault.",
      },
      {
        question: "Is a noisy dryer safe to keep using?",
        answer: "A squeal from worn rollers is not usually dangerous straight away, but it will get worse. A grinding noise, a burning smell or a drum that jams is a reason to stop and call us.",
      },
      {
        question: "Do you repair condenser dryers?",
        answer: "Yes. We repair vented and condenser tumble dryers, including faults with the water tank, the pump and the condenser itself.",
      },
      {
        question: "Can you look at my washing machine on the same visit?",
        answer: "Yes. If your washer and dryer are both giving trouble, tell us when you book and we will plan to look at both while we are there.",
      },
    ],
    related: ["washing-machine-repairs", "appliance-repairs", "electrical-services"],
  },
  {
    slug: "dishwasher-repairs",
    group: "home",
    nav: "Dishwashers",
    title: "Dishwasher Repairs in Gauteng",
    metaDescription: "Dishwasher not draining, not cleaning or leaking at the door? MainTech repairs freestanding and built in dishwashers at your home in Gauteng. Call 065 650 8504.",
    eyebrow: "Kitchen",
    h1: "Dishwasher repairs in Gauteng",
    lead: "Standing water in the bottom, dishes coming out dirty, or a puddle at the door? We repair dishwashers at your home across Gauteng, find the fault first and explain the repair before any work starts.",
    short: "Dishwashers that will not drain, clean, fill or dry, or that leak.",
    faults: [
      {
        name: "Not draining",
        detail: "Dirty water left in the base is usually a blocked filter, a kinked drain hose or something stuck in the drain pump. We clear the blockages first and test the pump if they are clean.",
      },
      {
        name: "Dishes not clean",
        detail: "Gritty glasses and food left on plates can come from blocked spray arms, a weak wash pump or water that never heats up. We check all three, because each one needs a different fix.",
      },
      {
        name: "Leaking at the door",
        detail: "Water on the floor in front of the machine often comes from a worn door seal, a loose spray arm or too much foam. Water under the machine is a different leak, usually from a hose or the pump.",
      },
      {
        name: "Not filling",
        detail: "If you hear the dishwasher humming but no water comes in, the inlet valve, the inlet hose or the tap that feeds it may be the problem. We check the water supply first.",
      },
      {
        name: "Dishes still wet",
        detail: "Wet dishes at the end of a cycle can come down to rinse aid, a heating fault or a drying fan that has stopped on models that use one. We tell you which it is before suggesting a repair.",
      },
      {
        name: "Will not start",
        detail: "Lights that come on but no wash often means the door latch is not registering as closed. If nothing lights up at all, we test the power at the machine and the controls.",
      },
    ],
    work: [
      {
        title: "Tell us the fault",
        detail: "Let us know if there is water in the base, dirty dishes, a leak or no power. A photo of the model sticker on the edge of the door helps us prepare.",
      },
      {
        title: "On site checks",
        detail: "We look at the filter, spray arms, hoses and door seal, and run a short programme to watch the fault happen.",
      },
      {
        title: "A clear explanation",
        detail: "We explain what has failed and what the repair involves, and wait for your go ahead before starting.",
      },
      {
        title: "A tested wash",
        detail: "Once it is repaired, we run the dishwasher to check that it fills, heats, washes and drains properly.",
      },
    ],
    brands: [],
    sections: [
      {
        heading: "Freestanding and built in dishwashers",
        paragraphs: [
          "We repair freestanding dishwashers and built in models that sit behind a kitchen cabinet door. A built in machine has to slide out so we can reach the hoses and the base, and we fit it neatly back in place when we are done.",
          "Slimline and full size machines fail in much the same ways. Tell us which you have and the technician will come prepared.",
        ],
      },
      {
        heading: "Small habits that prevent big faults",
        paragraphs: [
          "Most draining and cleaning problems start with food and grease building up in the filter. Scraping plates before loading and rinsing the filter every week or two keeps a lot of these faults away.",
          "If your water is hard, limescale can build up on the heater and spray arms and stop the machine heating properly. Dishwasher salt and rinse aid, where your machine uses them, really do help.",
        ],
      },
      {
        heading: "When the problem is the connection",
        paragraphs: [
          "Sometimes the dishwasher is fine and the fault is in the tap, the inlet hose or the drain under the sink. We can sort out the water connections that belong to the dishwasher on the same visit, so you do not need someone else for that part.",
        ],
      },
    ],
    tips: [
      "Check that the tap feeding the dishwasher, usually under the sink, is fully open.",
      "If water is standing in the base, scoop out what you can with a cup and dry the rest with a towel.",
      "Unload the dishes and clear the cupboard under the sink so we can reach the hoses.",
      "If the dishwasher has tripped the power, leave it switched off at the wall until we have checked it.",
    ],
    faqs: [
      {
        question: "Why is there water left in my dishwasher?",
        answer: "Most often the filter or drain hose is blocked, or something small like a piece of glass or a bottle cap is stuck in the drain pump. We check the simple causes first.",
      },
      {
        question: "Why are my dishes coming out dirty?",
        answer: "Blocked spray arm holes, a clogged filter, overloading and a weak wash pump are the usual causes. If the water is not getting hot, the heater may have failed too.",
      },
      {
        question: "Can I clean the filter myself?",
        answer: "Yes. On most machines the filter twists out of the base. Rinse it under the tap and lock it firmly back in place. If that does not fix the fault, give us a call.",
      },
      {
        question: "Do you repair built in dishwashers?",
        answer: "Yes. We slide the machine out carefully to reach the hoses and base, then fit it back in place once the repair is done.",
      },
      {
        question: "Is it worth repairing an older dishwasher?",
        answer: "Often it is. Pumps, seals, valves and heaters can usually be replaced. If the repair does not make sense for the age of the machine, we will tell you honestly.",
      },
    ],
    related: ["washing-machine-repairs", "plumbing-services", "appliance-repairs"],
  },
  {
    slug: "oven-repairs",
    group: "home",
    nav: "Ovens and stoves",
    title: "Oven and Stove Repairs in Gauteng",
    metaDescription: "Oven not heating or stove plate gone cold? MainTech repairs electric ovens, stoves and hobs at your home in Gauteng and explains the fault. Call 065 650 8504.",
    eyebrow: "Kitchen",
    h1: "Oven and stove repairs in Gauteng",
    lead: "Oven not heating, a stove plate gone cold, or a grill that will not come on? We repair electric ovens, stoves and hobs at your home across Gauteng, and explain the fault before any work starts.",
    short: "Electric ovens, stoves, plates and hobs that will not heat or keep tripping.",
    faults: [
      {
        name: "Oven not heating",
        detail: "An oven that stays cold, or only gets warm, often has a failed element, thermostat or selector switch. We test each one before replacing anything.",
      },
      {
        name: "Stove plate not working",
        detail: "One dead plate is usually the plate itself or its switch. If several plates stopped at the same time, we check the supply and the connections to the stove.",
      },
      {
        name: "Uneven cooking",
        detail: "Cakes that burn on one side and stay raw on the other can point to a failed fan, a fan element or a door that does not seal. We check the heat and airflow inside the oven.",
      },
      {
        name: "Grill not working",
        detail: "If the oven heats but the grill does not, the top element or its switch is the first thing we test.",
      },
      {
        name: "Tripping the power",
        detail: "A stove that trips the electricity when you switch on a plate or the oven often has an element that has developed a fault to earth. We find the exact part so you are not left guessing.",
      },
      {
        name: "Door or seal problems",
        detail: "A door that will not close, a broken hinge or a perished seal lets heat escape and makes cooking slow. Hinges and seals can usually be replaced so the oven holds its heat again.",
      },
    ],
    work: [
      {
        title: "Describe the fault",
        detail: "Tell us which part is not working: the oven, the grill, one plate or the whole stove. Send a photo of the model sticker, usually on the door frame or the back, on WhatsApp.",
      },
      {
        title: "Safe testing",
        detail: "We isolate the power, then test the elements, switches, thermostat and connections that match your fault.",
      },
      {
        title: "Your decision",
        detail: "We explain what has failed and what the repair involves. Work starts only once you agree.",
      },
      {
        title: "A heat test",
        detail: "After the repair we heat the oven or plate and check that it reaches temperature and holds it.",
      },
    ],
    brands: [],
    sections: [
      {
        heading: "Electric ovens, stoves and hobs",
        paragraphs: [
          "We repair freestanding electric stoves, built in ovens, eye level ovens and separate hobs, including solid plate hobs and ceramic glass hobs. If it cooks with electricity, we can usually help.",
        ],
      },
      {
        heading: "One dead plate is not a dead stove",
        paragraphs: [
          "A stove has several separate circuits: each plate, the oven element, the grill and the fan. When one fails, the rest usually carry on working. That makes the fault easier to find, and the repair is often a single element or switch.",
          "When everything stops at once, the cause is more likely to be the supply, a connection or a main control. That is a different job, so we check the power at the stove before opening up the appliance.",
        ],
      },
      {
        heading: "Looking after your oven",
        paragraphs: [
          "Spills that bake onto the oven floor and door seal slowly wear them down. Wiping up big spills once the oven has cooled, and keeping the seal clean, helps the oven heat evenly and keeps the door closing properly.",
          "If the glass on a ceramic hob cracks, stop using it straight away and switch it off at the wall. Cracked glass can let spills reach the parts underneath.",
        ],
      },
    ],
    tips: [
      "If the stove trips the power or smells of burning, switch it off at the wall isolator and leave it off.",
      "Leave the oven off on the day of the visit so it is cool enough to work on safely.",
      "Clear the stove top and take pots, pans and trays out of the oven and the drawer.",
      "Note which plates, settings or functions still work, as this helps us test faster.",
    ],
    faqs: [
      {
        question: "Why is my oven not heating?",
        answer: "The most common causes are a failed element, a faulty thermostat or a selector switch that no longer makes contact. If the oven light and fan work but there is no heat, an element is the likely culprit.",
      },
      {
        question: "Can you fix one stove plate that is not working?",
        answer: "Yes. A single dead plate is usually the plate itself or its control switch. Both can normally be replaced without affecting the rest of the stove.",
      },
      {
        question: "Do you repair ceramic glass hobs?",
        answer: "Yes. We repair electric ceramic hobs where a zone will not heat or the controls do not respond. If the glass itself is cracked, stop using the hob and tell us when you call.",
      },
      {
        question: "Why does my stove trip the electricity?",
        answer: "Usually an element has developed a fault to earth, often after a spill or simply with age. We test each element and connection to find the part that is causing the trip.",
      },
      {
        question: "Can you connect a new stove or oven?",
        answer: "Yes. We handle the electrical connection for a stove or oven at the appliance. Tell us what you are installing when you call and we will talk you through it.",
      },
    ],
    related: ["appliance-repairs", "electrical-services", "dishwasher-repairs"],
  },
  {
    slug: "appliance-repairs",
    group: "home",
    nav: "All home appliances",
    title: "Home Appliance Repairs in Gauteng",
    metaDescription: "Fridge, washing machine, dryer, dishwasher or stove playing up? MainTech repairs home appliances on site in Gauteng and explains the fault. Call 065 650 8504.",
    eyebrow: "Home appliances",
    h1: "Home appliance repairs in Gauteng",
    lead: "When the fridge, washing machine, tumble dryer, dishwasher or stove stops working, the whole house feels it. MainTech repairs household appliances at your home across Gauteng, finds the fault first and explains the repair before any work starts.",
    short: "Fridges, washers, dryers, dishwashers and stoves repaired at your home.",
    faults: [
      {
        name: "Fridge or freezer warm",
        detail: "Food going soft, ice building up or water under the drawers. Our fridge and freezer repairs page explains the common causes and what we check.",
      },
      {
        name: "Washing machine not draining",
        detail: "Water left in the drum, no spin or a puddle on the floor. Our washing machine repairs page covers front loaders and top loaders.",
      },
      {
        name: "Tumble dryer not heating",
        detail: "Damp clothes, a drum that will not turn or a dryer that cuts out halfway. Our tumble dryer repairs page covers vented and condenser models.",
      },
      {
        name: "Dishwasher not cleaning",
        detail: "Dirty dishes, standing water or a leak at the door. Our dishwasher repairs page covers freestanding and built in machines.",
      },
      {
        name: "Oven or plate cold",
        detail: "An oven that will not heat, a dead plate or a stove that trips the power. Our oven and stove repairs page covers electric ovens, stoves and hobs.",
      },
      {
        name: "Not sure what is wrong",
        detail: "Call or WhatsApp us and describe what the appliance is doing. We will help you work out the likely fault and book the right visit.",
      },
    ],
    work: [
      {
        title: "Call or WhatsApp",
        detail: "Tell us which appliance it is, the make and model if you can see the sticker, and what it is doing.",
      },
      {
        title: "We come to you",
        detail: "A technician visits your home, checks the appliance and finds the actual cause of the fault.",
      },
      {
        title: "You approve first",
        detail: "We explain what has failed and what the repair involves. Nothing is done without your go ahead.",
      },
      {
        title: "Tested and working",
        detail: "We test the appliance after the repair, so you know it works properly before we leave.",
      },
    ],
    brands: [],
    sections: [
      {
        heading: "One call for the whole house",
        paragraphs: [
          "Most homes rely on the same handful of machines: a fridge and freezer and a dishwasher and stove in the kitchen, with a washing machine and tumble dryer in the laundry. When one breaks, you should not need a different company for each.",
          "MainTech repairs all of them. If two machines are playing up, tell us when you book and we can look at both on one visit.",
        ],
      },
      {
        heading: "Straight answers, no guesswork",
        paragraphs: [
          "Every visit starts with finding the fault, not guessing at a part. Once we know what has failed, we explain it in plain language and tell you what the repair involves before anything is done.",
          "Some appliances are not worth fixing. If a repair does not make sense for the age or condition of the machine, we say so, and you can decide what to do next.",
        ],
      },
      {
        heading: "Power, water and the appliance",
        paragraphs: [
          "Not every fault is inside the machine. A worn plug point, a half closed tap or a crushed drain hose can stop a perfectly good appliance. We check the connections that belong to the appliance as part of the visit and can put those right too.",
          "Power cuts and surges can damage the electronics in modern appliances. If a machine stopped working after the power went off and came back on, mention it when you call.",
        ],
      },
    ],
    tips: [
      "Find the make and model on the appliance sticker and send us a photo on WhatsApp if you can.",
      "Write down what the appliance is doing, including any error code or flashing lights.",
      "Switch off and unplug any appliance that smells of burning or has tripped the power.",
      "Clear space around the machine so the technician can move it and reach the back.",
    ],
    faqs: [
      {
        question: "Which home appliances do you repair?",
        answer: "We repair fridges, freezers, washing machines, tumble dryers, dishwashers, electric ovens, stoves and hobs. Each one has its own page with the common faults and what we check.",
      },
      {
        question: "Do you come to my home?",
        answer: "Yes. Our technician comes to you anywhere in Gauteng, including Pretoria, Johannesburg, Midrand, Sandton, Centurion, Fourways, Randburg and Roodepoort.",
      },
      {
        question: "Can you look at more than one appliance on a visit?",
        answer: "Yes. Tell us about every appliance that is giving trouble when you book, so the technician can plan for all of them.",
      },
      {
        question: "Do I need to know what is wrong before I call?",
        answer: "Not at all. Just describe what the appliance is doing, or not doing. We will ask a few questions and find the fault on site.",
      },
      {
        question: "What happens if my appliance cannot be repaired?",
        answer: "We tell you honestly and explain why. You will never be pushed into a repair that does not make sense.",
      },
    ],
    related: ["washing-machine-repairs", "tumble-dryer-repairs", "dishwasher-repairs", "oven-repairs", "refrigeration-repairs"],
  },
  {
    slug: "commercial-refrigeration",
    group: "more",
    nav: "Commercial fridges",
    title: "Commercial Fridge Repairs in Gauteng",
    metaDescription: "Display fridge, bottle cooler or ice machine not cold? MainTech repairs commercial fridges on site for shops and restaurants across Gauteng. Call 065 650 8504.",
    eyebrow: "Commercial",
    h1: "Commercial fridge repairs in Gauteng",
    lead: "When a display fridge or bottle cooler goes warm, your stock is on the line. MainTech also repairs commercial refrigeration for shops, restaurants and other businesses across Gauteng, on site at your premises.",
    short: "Display fridges, bottle coolers, under counter units and ice machines.",
    faults: [
      {
        name: "Display fridge warm",
        detail: "Stock that is going soft needs quick attention. We check the temperature, fans, door seals and cooling circuit to find out why the cabinet cannot hold its setting.",
      },
      {
        name: "Bottle cooler not cold",
        detail: "A cooler that runs but stays warm often has a dirty condenser or a fan that has stopped. We check the airflow before anyone talks about refrigerant.",
      },
      {
        name: "Under counter fridge warm",
        detail: "Kitchen units work hard in hot spaces next to ovens and fryers. Grease on the condenser and worn door seals are common causes.",
      },
      {
        name: "Ice machine not making ice",
        detail: "Little or no ice can be the water supply, a dirty condenser or a refrigeration fault. Tell us the type of machine when you call.",
      },
      {
        name: "Coil icing up",
        detail: "Ice on the evaporator coil blocks the airflow and warms the cabinet. We check the defrost system and the fans.",
      },
      {
        name: "Doors not sealing",
        detail: "A door that does not close properly lets warm air in all day. We check the gaskets, hinges and door closers.",
      },
    ],
    work: [
      {
        title: "Tell us the unit",
        detail: "Let us know the type of fridge, what it is holding and the temperature it is showing.",
      },
      {
        title: "We check on site",
        detail: "We measure temperatures, check the airflow, fans, seals and condenser, and see how the system is running.",
      },
      {
        title: "Agree the repair",
        detail: "We explain the fault and the repair, and get your go ahead before work starts.",
      },
      {
        title: "Back to temperature",
        detail: "After the repair we run the unit and check that it is pulling down to the right temperature.",
      },
    ],
    brands: [],
    sections: [
      {
        heading: "Equipment that keeps you trading",
        paragraphs: [
          "We work on glass door display fridges, bottle coolers, under counter fridges and freezers in commercial kitchens, and ice machines. These units run hard, often in warm spaces, and they wear differently from a fridge at home.",
        ],
      },
      {
        heading: "Fewer surprises",
        paragraphs: [
          "Condenser coils in shops and kitchens collect dust and grease quickly, and a choked condenser is behind many warm cabinets. Keeping them clean prevents a lot of breakdowns, and we can add your fridges to a planned maintenance visit.",
          "If the problem is a walk in cold room rather than a cabinet, we repair and install those too.",
        ],
      },
    ],
    tips: [
      "Move stock from a warm unit into a working fridge or cold room if you have one.",
      "Keep the faulty unit's doors closed so it holds whatever cold it still has.",
      "Note the temperature on the display and when you first noticed it rising.",
      "Clear boxes away from the unit and its condenser so the technician can get to it.",
    ],
    faqs: [
      {
        question: "Do you repair commercial fridges as well as home ones?",
        answer: "Yes. We repair display fridges, bottle coolers, under counter units and ice machines for businesses, as well as fridges and freezers at home.",
      },
      {
        question: "Can you come to my shop or restaurant?",
        answer: "Yes. We work on site at your premises across Gauteng, so the unit does not need to be moved.",
      },
      {
        question: "My display fridge is warm. What should I do first?",
        answer: "Keep the doors closed, move the most valuable stock to another fridge if you can, and call us with the temperature it is showing.",
      },
      {
        question: "Do you repair ice machines?",
        answer: "Yes. We look at ice machines that make little or no ice, leak, or stop running. Tell us the make and model when you call.",
      },
      {
        question: "What if it is urgent?",
        answer: "Call and tell us what stock is at risk. We take urgent breakdown calls and will tell you when we can come.",
      },
    ],
    related: ["cold-room-installation-repair", "refrigeration-repairs", "emergency-callout-service", "hvac-maintenance-contracts"],
  },
  {
    slug: "cold-room-installation-repair",
    group: "more",
    nav: "Cold rooms",
    title: "Cold Room Repairs and Installation in Gauteng",
    metaDescription: "Cold room too warm or freezer room icing up? MainTech repairs and installs walk in cold rooms and freezer rooms on site across Gauteng. Call 065 650 8504.",
    eyebrow: "Commercial",
    h1: "Cold room repairs and installation in Gauteng",
    lead: "A cold room that will not hold temperature puts everything inside it at risk. MainTech also repairs and installs walk in cold rooms and freezer rooms for businesses across Gauteng.",
    short: "Walk in cold rooms and freezer rooms repaired, and new rooms installed.",
    faults: [
      {
        name: "Room too warm",
        detail: "We check the set point, the fans, the door and whether the condensing unit outside is running as it should.",
      },
      {
        name: "Ice on the evaporator",
        detail: "A coil covered in ice cannot cool the room. The defrost system and the airflow are the first things we check.",
      },
      {
        name: "Door not sealing",
        detail: "A torn gasket, a dragging door or a strip curtain that has come down lets warm air pour in. It is one of the most common reasons a room struggles.",
      },
      {
        name: "Temperature swinging",
        detail: "A room that drifts too warm and then too cold can have a control, sensor or door fault. We watch how it cycles before naming a cause.",
      },
      {
        name: "Freezer room not holding",
        detail: "Freezer rooms work harder than cold rooms. Tell us the temperature you need and the temperature the display shows.",
      },
      {
        name: "Water on the floor",
        detail: "Water under the evaporator usually means a blocked or frozen drain line. Left alone, it can turn into a sheet of ice on the floor.",
      },
    ],
    work: [
      {
        title: "Describe the room",
        detail: "Let us know if it is a cold room or a freezer room, the temperature it shows and what is stored inside.",
      },
      {
        title: "Inspect the system",
        detail: "We check the door, evaporator, fans, defrost and the condensing unit outside, and see how the whole system is running.",
      },
      {
        title: "Explain and agree",
        detail: "We explain what has failed and what the repair involves, then wait for your go ahead.",
      },
      {
        title: "Cooling checked",
        detail: "After the repair we check that the room is cooling down properly before we leave.",
      },
    ],
    brands: [],
    sections: [
      {
        heading: "Repairs and new installations",
        paragraphs: [
          "We repair existing walk in cold rooms and freezer rooms, and we install new ones. If you are planning a new room, tell us the space you have, what you want to store and the temperature you need. We will talk you through the options before anything is agreed.",
        ],
      },
      {
        heading: "Protecting what is inside",
        paragraphs: [
          "Every time the door opens on a struggling room, more warm air gets in. Keep it closed, check the strip curtain is in place, and only go in when you have to.",
          "If stock is at risk, say so when you call so we understand how urgent the job is.",
        ],
      },
    ],
    tips: [
      "Keep the cold room door closed and limit trips inside until we arrive.",
      "Note the temperature on the controller and roughly when it started to rise.",
      "Make sure we can reach the outdoor condensing unit, including any locked gates or roof access.",
      "Do not chip ice off the evaporator coil, as that can puncture the pipes.",
    ],
    faqs: [
      {
        question: "Do you install new cold rooms?",
        answer: "Yes. We install walk in cold rooms and freezer rooms as well as repairing them. Tell us the size of the space and what you need to store.",
      },
      {
        question: "Why is my cold room icing up?",
        answer: "Ice on the evaporator usually points to a defrost fault, a door that lets in damp air, or a fan that has stopped. We check all three.",
      },
      {
        question: "Can you repair freezer rooms?",
        answer: "Yes. Freezer rooms run colder and work harder, but the checks are similar. Tell us the temperature you need to hold.",
      },
      {
        question: "What should I do if the room is warm right now?",
        answer: "Keep the door shut, move the most sensitive stock elsewhere if you can, and call us. We will tell you when we can come.",
      },
      {
        question: "Do you repair home fridges too?",
        answer: "Yes. Household fridges and freezers are at the heart of what we do, and we repair them at your home across Gauteng.",
      },
    ],
    related: ["commercial-refrigeration", "refrigeration-repairs", "emergency-callout-service"],
  },
  {
    slug: "air-conditioning-services",
    group: "more",
    nav: "Aircon repairs",
    title: "Aircon Repairs and Servicing in Gauteng",
    metaDescription: "Aircon not cooling, dripping water or not switching on? MainTech repairs, services and installs split and ducted aircons across Gauteng. Call 065 650 8504.",
    eyebrow: "Air conditioning",
    h1: "Aircon repairs and servicing in Gauteng",
    lead: "Aircon blowing warm air, dripping water down the wall, or refusing to switch on? MainTech also repairs, services and installs split and ducted air conditioners in homes and businesses across Gauteng.",
    short: "Split and ducted aircons repaired, serviced and installed.",
    faults: [
      {
        name: "Not cooling",
        detail: "Warm air can come from a dirty filter, a blocked coil, a control fault or low refrigerant. We test the system before adding any refrigerant.",
      },
      {
        name: "Water dripping indoors",
        detail: "Water running down the wall or dripping from the indoor unit usually means a blocked drain line or an overflowing tray. We clear and check the full drain path.",
      },
      {
        name: "Will not switch on",
        detail: "No response to the remote can be the remote itself, the power to the unit or the control board. We check the simple things first.",
      },
      {
        name: "Noisy unit",
        detail: "Rattles and buzzing can come from fans, loose panels or pipework. Tell us whether the noise is inside or at the outdoor unit.",
      },
      {
        name: "Keeps switching on and off",
        detail: "A unit that keeps starting and stopping can have a sensor fault or a dirty coil, or it may be too small for the room. We tell you what the inspection shows.",
      },
      {
        name: "Musty smell",
        detail: "A stale smell when the aircon starts usually comes from a dirty filter and coil. A proper service with a thorough clean normally sorts it out.",
      },
    ],
    work: [
      {
        title: "Describe the problem",
        detail: "Tell us the make, whether it is a split or ducted system, and what it is doing. A photo of the sticker on the indoor unit helps.",
      },
      {
        title: "Inspect both units",
        detail: "We check the filters, coils, drain, fans and controls on the indoor unit, and look at the outdoor unit too.",
      },
      {
        title: "Agree the work",
        detail: "We explain the fault and what the repair involves before any work starts.",
      },
      {
        title: "Test the cooling",
        detail: "After the repair or service we run the aircon and check that cold air is coming through properly.",
      },
    ],
    brands: ["Samsung", "LG", "Midea", "Panasonic", "Hisense"],
    sections: [
      {
        heading: "Repairs, servicing and installation",
        paragraphs: [
          "We repair aircons that have stopped working properly, service units that need a clean and a check, and install new split units and ducted systems.",
          "If a new unit needs its own power supply, we can handle that electrical connection as part of the same job.",
        ],
      },
      {
        heading: "Why a service matters",
        paragraphs: [
          "A filter clogged with dust makes the aircon work harder and cool less. Dirty coils do the same, and a blocked drain is what sends water down your wall. A regular service keeps all three in check and lets us spot small faults before they become a breakdown.",
          "Businesses with several units may prefer a planned maintenance schedule, which we also offer.",
        ],
      },
    ],
    tips: [
      "If water is dripping from the indoor unit, switch the aircon off and put a towel underneath.",
      "Check that the remote has working batteries before you call.",
      "Move furniture away from the indoor unit and make sure we can reach the outdoor unit.",
      "Rinse the indoor filter if you can reach it easily, as a dirty filter alone can stop it cooling.",
    ],
    faqs: [
      {
        question: "Why is my aircon not cooling?",
        answer: "The most common causes are dirty filters, blocked coils and low refrigerant from a leak. We test the system to find the real cause rather than just topping up refrigerant.",
      },
      {
        question: "Why is my aircon leaking water inside?",
        answer: "Usually the condensate drain is blocked or the drain tray is overflowing. We clear the drain and make sure the water has a clear path out.",
      },
      {
        question: "How often should my aircon be serviced?",
        answer: "It depends on how much you use it and how dusty the room is. Units that run every day need more frequent attention. We can advise once we have seen your system.",
      },
      {
        question: "Which aircon brands do you work on?",
        answer: "We work on Samsung, LG, Midea, Panasonic and Hisense aircons. If you have a different make, tell us when you call.",
      },
      {
        question: "Do you install new aircons?",
        answer: "Yes. We install split units and ducted systems. Tell us the size of the room and where you would like the indoor and outdoor units to go.",
      },
    ],
    related: ["hvac-maintenance-contracts", "electrical-services", "emergency-callout-service", "refrigeration-repairs"],
  },
  {
    slug: "hvac-maintenance-contracts",
    group: "more",
    nav: "Aircon maintenance",
    title: "Aircon Maintenance Plans in Gauteng",
    metaDescription: "Planned aircon maintenance for offices and shops in Gauteng. MainTech cleans filters, checks coils and clears drains on a regular schedule. Call 065 650 8504.",
    eyebrow: "Business aircon",
    h1: "Aircon maintenance plans in Gauteng",
    lead: "Aircons in an office or shop work hard every day. MainTech also sets up planned aircon maintenance for businesses across Gauteng, with regular visits to clean filters, check coils and clear drains before they cause trouble.",
    short: "Planned aircon servicing for offices, shops and other business premises.",
    faults: [
      {
        name: "Blocked filters",
        detail: "Dusty filters are the most common reason an office aircon struggles to cool. Every planned visit includes a filter check and clean.",
      },
      {
        name: "Dirty coils",
        detail: "Coils coated in dust make the system work harder and cool less. Cleaning them is part of the service.",
      },
      {
        name: "Overflowing drains",
        detail: "A blocked drain can leak into a ceiling or onto desks and stock. We clear and check the drains on each visit.",
      },
      {
        name: "Several units on site",
        detail: "Tell us how many units you have and where they are. The plan is built around your premises, not a fixed template.",
      },
      {
        name: "Small faults found early",
        detail: "Regular visits let us spot worn parts, noisy fans or weak cooling before they turn into a breakdown.",
      },
      {
        name: "A unit has failed",
        detail: "A breakdown between visits is a repair job. Call us and we will book it as an aircon repair.",
      },
    ],
    work: [
      {
        title: "Describe your site",
        detail: "Let us know how many units you have, the makes, where they are and how often they run.",
      },
      {
        title: "Agree the plan",
        detail: "We agree which units are included and what each visit covers, so everyone knows what to expect.",
      },
      {
        title: "Regular visits",
        detail: "On each visit we check the filters, coils, drains and controls, and confirm that every unit is running properly.",
      },
      {
        title: "Report back",
        detail: "We tell you what we found and flag any repairs, which only go ahead with your approval.",
      },
    ],
    brands: ["Samsung", "LG", "Midea", "Panasonic", "Hisense"],
    sections: [
      {
        heading: "What a maintenance visit covers",
        paragraphs: [
          "Each visit focuses on the parts behind most aircon complaints: filters, coils, drains and controls. We clean what needs cleaning and check that every unit on the plan cools the way it should.",
          "If we find a fault that needs a repair, we explain it and get your approval first, so there are no surprises.",
        ],
      },
      {
        heading: "Who it suits",
        paragraphs: [
          "Planned maintenance suits offices, shops and other business premises with several units that need to keep running. If you also want fridges, cold rooms or other equipment looked after on a schedule, ask about our wider appliance maintenance plans.",
        ],
      },
    ],
    tips: [
      "List every unit on site, with its location and the make if you know it.",
      "Arrange access to ceilings, roofs or yards where the outdoor units are fitted.",
      "Let staff know we are coming so rooms with indoor units can be opened.",
      "Point out any units that are noisy, leaking or not cooling so we can look at them first.",
    ],
    faqs: [
      {
        question: "What is included in an aircon maintenance plan?",
        answer: "Filter cleaning, coil checks, drain clearing and a check that each unit runs properly. We agree the exact list for your premises before the first visit.",
      },
      {
        question: "How often will you visit?",
        answer: "That depends on how many units you have, how hard they run and how dusty the space is. We agree a schedule that suits your premises.",
      },
      {
        question: "Which brands do you maintain?",
        answer: "We work on Samsung, LG, Midea, Panasonic and Hisense units. Tell us about any other makes you have on site.",
      },
      {
        question: "What happens if a unit breaks down between visits?",
        answer: "Call us and describe the fault. We will treat it as a repair and tell you when we can come.",
      },
      {
        question: "Will you repair faults you find during a visit?",
        answer: "We explain the fault and what the repair involves. Nothing is done without your approval.",
      },
    ],
    related: ["air-conditioning-services", "property-maintenance", "commercial-refrigeration"],
  },
  {
    slug: "property-maintenance",
    group: "more",
    nav: "Maintenance plans",
    title: "Appliance Maintenance Plans in Gauteng",
    metaDescription: "Planned checks for your fridges, washers, cold rooms and aircons. MainTech sets up maintenance plans for homes and businesses in Gauteng. Call 065 650 8504.",
    eyebrow: "Planned maintenance",
    h1: "Appliance maintenance plans in Gauteng",
    lead: "Planned checks catch small problems before they turn into breakdowns. MainTech also offers maintenance plans for homes and businesses across Gauteng, covering the appliances and cooling equipment you rely on.",
    short: "Scheduled checks for your appliances and cooling equipment, at home or work.",
    faults: [
      {
        name: "Seals and filters",
        detail: "Worn fridge seals, blocked lint filters and dirty dishwasher filters make machines work harder. Planned visits keep them in good order.",
      },
      {
        name: "Several appliances",
        detail: "Tell us which machines you want on the plan. A fridge, a washing machine and a cold room each need different checks.",
      },
      {
        name: "Business kitchens",
        detail: "Display fridges, under counter units, ice machines and cold rooms can all go on one plan with your other equipment.",
      },
      {
        name: "Aircons included",
        detail: "Aircons can be part of a wider plan. If aircons are all you need looked after, our aircon maintenance plan may suit you better.",
      },
      {
        name: "Early warning signs",
        detail: "Noisy compressors, slow draining and weak cooling are easier to sort out early. We point them out on each visit.",
      },
      {
        name: "A clear written list",
        detail: "We write down exactly which equipment the plan covers, so you always know what is included.",
      },
    ],
    work: [
      {
        title: "List your equipment",
        detail: "Tell us which appliances and cooling equipment you want included, and where they are.",
      },
      {
        title: "Agree the plan",
        detail: "We agree the list, and what each visit covers, before the first visit.",
      },
      {
        title: "Planned visits",
        detail: "On each visit we check, clean and test the equipment on your list.",
      },
      {
        title: "Repairs with approval",
        detail: "If something needs repairing, we explain it first and only go ahead once you agree.",
      },
    ],
    brands: [],
    sections: [
      {
        heading: "What a plan can include",
        paragraphs: [
          "A plan can cover household appliances such as fridges, freezers, washing machines, tumble dryers, dishwashers and ovens, as well as commercial fridges, cold rooms and aircons. You choose what goes on the list.",
          "Each visit focuses on the parts that wear or clog: seals, filters, coils, drains and hoses. Keeping those in good order often stops a breakdown before it starts.",
        ],
      },
      {
        heading: "When something has already broken",
        paragraphs: [
          "If a machine has stopped working, there is no need to wait for a planned visit. Call us and we will book it as a repair.",
        ],
      },
    ],
    tips: [
      "Make a list of the equipment you want covered, with makes and models if you have them.",
      "Note any machine that is already giving trouble so we can look at it first.",
      "Make sure we can reach each appliance, including outdoor units and locked rooms.",
      "Let us know who on site can show the technician around.",
    ],
    faqs: [
      {
        question: "What does an appliance maintenance plan cover?",
        answer: "Only the equipment you choose. We agree a written list together, then check, clean and test those items on each visit.",
      },
      {
        question: "Is this for homes or businesses?",
        answer: "Both. Homes can include their kitchen and laundry appliances. Businesses can add commercial fridges, cold rooms and aircons.",
      },
      {
        question: "How is this different from your aircon maintenance plan?",
        answer: "The aircon plan covers air conditioners only. This plan can cover appliances, refrigeration and aircons together.",
      },
      {
        question: "What if you find a fault during a visit?",
        answer: "We explain what we found and what the repair involves. Repairs go ahead only with your approval.",
      },
      {
        question: "Can I add equipment later?",
        answer: "Yes. Tell us what you want to add and we will update your list.",
      },
    ],
    related: ["hvac-maintenance-contracts", "appliance-repairs", "air-conditioning-services"],
  },
  {
    slug: "emergency-callout-service",
    group: "more",
    nav: "Urgent breakdowns",
    title: "Emergency Fridge and Aircon Repairs in Gauteng",
    metaDescription: "Fridge, freezer, cold room or aircon broken down in Gauteng? Tell MainTech what has failed and we will let you know when we can come. Call 065 650 8504.",
    eyebrow: "Urgent breakdowns",
    h1: "Urgent breakdown repairs in Gauteng",
    lead: "When a fridge full of food goes warm, or a cold room starts losing temperature, you need help quickly. Call MainTech, describe the breakdown, and we will tell you honestly when we can get to you.",
    short: "Help when a fridge, freezer, cold room or aircon breaks down.",
    faults: [
      {
        name: "Fridge failed with food",
        detail: "Tell us how warm it is and how long it has been off. That helps us judge how urgent the visit is.",
      },
      {
        name: "Freezer thawing",
        detail: "Keep the lid or door shut. A closed freezer holds its cold much longer than one that keeps being opened.",
      },
      {
        name: "Cold room too warm",
        detail: "A warm room full of stock is a real business risk. Tell us the temperature on the display and what is stored inside.",
      },
      {
        name: "Aircon down at work",
        detail: "An office or shop without cooling on a hot day is hard going. Describe the fault and we will tell you when we can come.",
      },
      {
        name: "Burning smell or tripping",
        detail: "Switch the machine off at the wall and leave it off. Do not keep resetting it, and tell us exactly what happened.",
      },
      {
        name: "Not sure it is urgent",
        detail: "Call anyway and describe it. If it can safely wait for a booked visit, we will say so.",
      },
    ],
    work: [
      {
        title: "Call or WhatsApp",
        detail: "Tell us what has failed, what is at risk and where you are in Gauteng.",
      },
      {
        title: "Honest timing",
        detail: "We tell you when we can come. We will not promise a time we cannot keep.",
      },
      {
        title: "Find and explain",
        detail: "On site we find the fault and explain the repair before any work starts.",
      },
      {
        title: "Cold again",
        detail: "After the repair we test the unit and check that it is cooling down again.",
      },
    ],
    brands: [],
    sections: [
      {
        heading: "What counts as urgent",
        paragraphs: [
          "We treat a breakdown as urgent when food, stock or comfort is at real risk: a home fridge or freezer full of food, a commercial fridge or cold room full of stock, or an aircon that has failed in a busy workspace.",
          "We take urgent calls from homes and businesses alike, for fridges, freezers, cold rooms and aircons.",
        ],
      },
      {
        heading: "While you wait",
        paragraphs: [
          "Keep fridge, freezer and cold room doors closed. Every time a door opens, cold air falls out and warm air rushes in. If you have another fridge or a cooler box with ice, move the most perishable food or stock there first.",
          "If a machine smells of burning, has tripped the power or is sparking, switch it off at the wall and do not turn it back on until it has been checked.",
        ],
      },
    ],
    tips: [
      "Keep fridge, freezer and cold room doors closed as much as possible.",
      "Move the most perishable food or stock to a working fridge or a cooler box.",
      "Note the temperature on any display and when the problem started.",
      "Send a photo of the model sticker and the fault on WhatsApp so we can prepare.",
    ],
    faqs: [
      {
        question: "Do you take urgent repair calls?",
        answer: "Yes. Call or WhatsApp us when a fridge, freezer, cold room or aircon breaks down. We will tell you when we can come.",
      },
      {
        question: "Can you promise a time?",
        answer: "We would rather give you an honest answer than a promise we cannot keep. When you call, we tell you when a technician can get to you.",
      },
      {
        question: "Do you help homes and businesses?",
        answer: "Yes. We take urgent calls for household fridges and freezers, and for commercial fridges, cold rooms and aircons.",
      },
      {
        question: "Should I keep checking the fridge?",
        answer: "No. Opening the door lets the cold out. Leave it closed and only check the temperature when you really need to.",
      },
      {
        question: "What should I tell you when I call?",
        answer: "Which machine has failed, what is inside it, how warm it is, how long it has been off and where you are. A photo of the model sticker helps too.",
      },
    ],
    related: ["refrigeration-repairs", "commercial-refrigeration", "air-conditioning-services", "cold-room-installation-repair"],
  },
  {
    slug: "plumbing-services",
    group: "more",
    nav: "Appliance water connections",
    title: "Appliance Water Connections in Gauteng",
    metaDescription: "Washing machine, dishwasher or ice maker to connect in Gauteng? MainTech does appliance water and drain connections, not general plumbing. Call 065 650 8504.",
    eyebrow: "Water connections",
    h1: "Appliance water connections in Gauteng",
    lead: "A new washing machine to connect, a dishwasher hose that drips, or a fridge ice maker that needs a water line? MainTech also handles the water connections for your appliances across Gauteng.",
    short: "Water and drain connections for washing machines, dishwashers and ice makers.",
    faults: [
      {
        name: "New washing machine",
        detail: "We connect the inlet hose to the tap and set the drain hose at the right height so the machine drains properly.",
      },
      {
        name: "Dishwasher connection",
        detail: "We connect the inlet and the drain for your dishwasher under the sink, then check for leaks once it runs.",
      },
      {
        name: "Fridge ice maker line",
        detail: "Fridges with an ice maker or water dispenser need a water feed. We fit and connect it so nothing leaks behind the fridge.",
      },
      {
        name: "Commercial ice machine",
        detail: "Ice machines in bars and restaurants need a steady water supply and a drain. We connect both.",
      },
      {
        name: "Leak at the hose",
        detail: "Water around the tap, the hose or the drain point is a connection job. Water from inside the machine is an appliance repair, and we can look at both.",
      },
      {
        name: "Drain backing up",
        detail: "If the appliance drain backs up or smells, we look at the standpipe or trap the machine drains into.",
      },
    ],
    work: [
      {
        title: "Tell us the appliance",
        detail: "Let us know which machine needs connecting and whether it is new or already installed.",
      },
      {
        title: "Check the supply",
        detail: "We check the tap, the drain point and the space, so the hoses fit without kinks.",
      },
      {
        title: "Connect with approval",
        detail: "We explain what is needed and get your go ahead, then make the connections.",
      },
      {
        title: "Leak test",
        detail: "We run the appliance and check every joint for leaks before we leave.",
      },
    ],
    brands: [],
    sections: [
      {
        heading: "Connections for appliances only",
        paragraphs: [
          "Our water work is all about appliances. We connect and fix the water supply and drains for washing machines, dishwashers, fridge ice makers and commercial ice machines. We do not take on general plumbing such as geysers, bathrooms or burst pipes elsewhere in the house.",
          "Because we repair the appliances too, we can tell whether a leak is coming from the connection or the machine, and sort out either one on the same visit.",
        ],
      },
      {
        heading: "Getting the drain right",
        paragraphs: [
          "A drain hose pushed too far down a standpipe, or fitted too low, can siphon water out of a washing machine while it is filling. The machine then seems to fill forever. Small details like hose height and a tight clamp make a big difference.",
        ],
      },
    ],
    tips: [
      "Make sure there is a tap and a drain point close to where the appliance will stand.",
      "If a hose or connection is leaking, turn off the tap that feeds the appliance.",
      "Keep the hoses that came with a new appliance, because we may use them.",
      "Clear the cupboard under the sink if the connection is for a dishwasher.",
    ],
    faqs: [
      {
        question: "Can you connect my new washing machine?",
        answer: "Yes. We connect the water supply and the drain, then run a short cycle to check that it fills and drains without leaks.",
      },
      {
        question: "Do you do general plumbing?",
        answer: "No. We only handle the water and drain connections that belong to appliances such as washing machines, dishwashers and ice makers.",
      },
      {
        question: "Can you connect a fridge with an ice maker?",
        answer: "Yes. We run and connect the water line for fridges with an ice maker or water dispenser, and check it for leaks.",
      },
      {
        question: "My dishwasher is leaking. Is it the connection or the machine?",
        answer: "It could be either. We check both, and because we repair dishwashers too, we can fix whichever it turns out to be.",
      },
      {
        question: "Do you connect ice machines for businesses?",
        answer: "Yes. We connect the water supply and drain for commercial ice machines in bars, restaurants and shops.",
      },
    ],
    related: ["washing-machine-repairs", "dishwasher-repairs", "appliance-repairs", "commercial-refrigeration"],
  },
  {
    slug: "electrical-services",
    group: "more",
    nav: "Appliance electrical connections",
    title: "Appliance Electrical Connections in Gauteng",
    metaDescription: "Oven, stove or aircon to connect, or an appliance tripping the power? MainTech handles appliance electrical connections across Gauteng. Call 065 650 8504.",
    eyebrow: "Electrical connections",
    h1: "Appliance electrical connections in Gauteng",
    lead: "An oven that needs connecting, an aircon that needs its own supply, or an appliance that keeps tripping the power? MainTech also handles the electrical connections for appliances and aircons across Gauteng.",
    short: "Supplies, isolators and plug points for your appliances and aircons.",
    faults: [
      {
        name: "Appliance not powering up",
        detail: "Before anyone opens the machine, we test the plug point, isolator and supply that feed it, so we know which side the fault is on.",
      },
      {
        name: "New aircon supply",
        detail: "A new aircon often needs its own dedicated supply and isolator. Tell us where the indoor and outdoor units will go.",
      },
      {
        name: "Stove or oven connection",
        detail: "A new stove or built in oven needs connecting to its supply. We also check the connection when a stove trips or several plates stop at once.",
      },
      {
        name: "Tripping the power",
        detail: "Tell us which appliance trips the electricity and when. We find out whether the fault is in the appliance or the circuit that feeds it.",
      },
      {
        name: "Worn plug points",
        detail: "We replace the isolator or plug point that serves an appliance when it is worn, scorched or loose.",
      },
      {
        name: "After load shedding",
        detail: "Power cuts and the surge when the power returns can damage plug points and appliance electronics. If something stopped working after the power came back, we can test both.",
      },
    ],
    work: [
      {
        title: "Tell us the appliance",
        detail: "Let us know which appliance or aircon is involved, and what is happening or what you need connected.",
      },
      {
        title: "Test the supply",
        detail: "We test the plug point, isolator and circuit that serve the appliance before touching anything else.",
      },
      {
        title: "Agree the work",
        detail: "We explain the fault or the connection needed and get your go ahead first.",
      },
      {
        title: "Switch on and test",
        detail: "We power up the appliance and check that it runs properly without tripping.",
      },
    ],
    brands: [],
    sections: [
      {
        heading: "Connections for appliances and aircons",
        paragraphs: [
          "Our electrical work covers the supply at the appliance: plug points, isolators and the connections that feed ovens, stoves, washing machines, dishwashers, fridges and aircons. It also covers finding faults on those circuits.",
          "We do not take on general house wiring, lighting or distribution board upgrades. If a fault turns out to be elsewhere in the house, we will tell you so you can call the right person.",
        ],
      },
      {
        heading: "Appliance or circuit?",
        paragraphs: [
          "When a machine will not start or keeps tripping, it is hard to tell whether the appliance or the supply is to blame. Because we repair the appliances as well, we can test both and fix the right one, without you having to call two different people.",
        ],
      },
    ],
    tips: [
      "If an appliance trips the power, leave it switched off until we have tested it.",
      "Do not use a plug point that is scorched, loose or warm to the touch.",
      "Note which appliance trips the power and what it was doing at the time.",
      "Make sure we can reach the distribution board as well as the appliance.",
    ],
    faqs: [
      {
        question: "Can you connect my new stove or oven?",
        answer: "Yes. We connect stoves and ovens to their supply and test them once they are connected.",
      },
      {
        question: "Do you install the power supply for aircons?",
        answer: "Yes. We install the dedicated supply and isolator a new aircon needs, and we can install the aircon itself too.",
      },
      {
        question: "Why does my appliance keep tripping the power?",
        answer: "A failed element, a damaged cable, moisture inside the machine or a faulty plug point can all cause it. We test each one to find the cause.",
      },
      {
        question: "Do you do general electrical work?",
        answer: "No. We focus on the electrical connections for appliances and aircons. If the fault is somewhere else, we will tell you.",
      },
      {
        question: "Can you fix the appliance as well as the connection?",
        answer: "Yes. We repair fridges, washing machines, tumble dryers, dishwashers, ovens and aircons, so we can sort out whichever part is at fault.",
      },
    ],
    related: ["air-conditioning-services", "oven-repairs", "appliance-repairs", "hvac-maintenance-contracts"],
  },
]

export const homeServices = services.filter((service) => service.group === "home")
export const moreServices = services.filter((service) => service.group === "more")

export function getService(slug: string) {
  const service = services.find((item) => item.slug === slug)
  if (!service) throw new Error(`Missing service ${slug}`)
  return service
}
