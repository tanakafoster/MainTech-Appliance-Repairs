#!/usr/bin/env python3
"""Generate typed content modules. Run once while rewriting; the TS files are the source of truth."""
import json
from pathlib import Path

SUFFIX = " Call 065 650 8504."

def fit(core: str) -> str:
    body = core.strip().rstrip(".")
    fillers = [" today", " with us", " on site"]
    i = 0
    while True:
        full = f"{body}.{SUFFIX}"
        if 140 <= len(full) <= 160:
            return full
        if len(full) < 140 and i < len(fillers):
            body += fillers[i]
            i += 1
            continue
        raise SystemExit(f"META {len(full)}: {full}")

def title(front: str) -> str:
    full = f"{front} | MainTech"
    if len(full) > 60:
        raise SystemExit(f"TITLE {len(full)}: {full}")
    return front

def js(value):
    return json.dumps(value, ensure_ascii=False, indent=2)

services = []

def add_service(**kwargs):
    kwargs["title"] = title(kwargs["title"])
    kwargs["metaDescription"] = fit(kwargs["metaDescription"])
    services.append(kwargs)

add_service(
    slug="refrigeration-repairs",
    nav="Fridge and freezer repairs",
    title="Fridge and Freezer Repairs in Gauteng",
    metaDescription="Fridge not cooling or freezer icing up in Gauteng? MainTech finds the fault and explains it before any repair starts",
    h1="Fridge and freezer repairs in Gauteng",
    intro="MainTech repairs fridges and freezers across Gauteng. If the cabinet is warm, the freezer is icing up, or water is pooling on the floor, call us and describe what you see. We look at household fridges, freezers and chest freezers. Refrigerator repairs sit on this same page, because people search both words for the same machine.",
    image="/refrigeration-repair-technician.png",
    imageAlt="Technician working on a household fridge",
    width=1024, height=768,
    brands=["Samsung", "LG"],
    related=["commercial-refrigeration", "cold-room-installation-repair", "appliance-repairs", "emergency-callout-service"],
    faults=[
        {"name": "Fridge not cooling", "detail": "The light may still work while the food goes warm. That can be a fan, a thermostat, a defrost fault or a cooling problem. We test the cabinet before we name a part."},
        {"name": "Freezer icing up", "detail": "A thick coat of ice often means the defrost system is not clearing the evaporator. Scraping the ice is only a short pause. We check the heater, the timer or control, and the drain."},
        {"name": "Fridge leaking water", "detail": "Water inside the fridge or on the kitchen floor is often a blocked defrost drain. We also check the door seal, because warm air makes extra moisture."},
        {"name": "Running all the time", "detail": "A fridge that never rests can be low on refrigerant, short of airflow, or sitting in a hot spot. We measure temperatures and listen to the compressor before we talk about gas."},
        {"name": "Noisy fridge or freezer", "detail": "A rattle, buzz or knock can be a fan, a loose pipe or a compressor that is struggling. Tell us when the noise happens. That saves a wrong guess."},
        {"name": "Freezer not freezing", "detail": "Soft ice cream or a chest freezer that will not hold temperature needs a temperature check, a sealed system check and a look at the lid seal."},
    ],
    work=[
        "You tell us the brand, the model if you have it, and whether the fridge, the freezer, or both are warm.",
        "On site we measure temperatures, check airflow, the door seal and the defrost drain, then listen to the fans and compressor.",
        "If refrigerant is part of the fault, we say so. Samsung and LG are brands this site already names for household refrigeration. Other makes are discussed when you call.",
        "We explain the fault and the repair before work starts. After a repair we run the unit and check that the temperature is moving the right way.",
    ],
    sections=[
        {"heading": "Fridge repairs and refrigerator repairs", "body": "You do not need two pages for the same cabinet. A refrigerator and a fridge are the same search for most homes. This page covers both, plus upright freezers and chest freezers. Commercial display fridges and walk-in cold rooms have their own pages, because the job and the equipment are different."},
        {"heading": "What to say when you call", "body": "Tell us how long it has been warm, whether the freezer still has ice, and if you heard a new noise. A photo of the model sticker helps. We cover Gauteng, including the suburbs that already have their own area pages."},
    ],
    faqs=[
        {"question": "Can you fix a fridge that is not cooling?", "answer": "Often, yes. We first find out whether the problem is airflow, defrost, the thermostat or the cooling system. We will tell you if the repair does not make sense."},
        {"question": "Do you repair freezers as well as fridges?", "answer": "Yes. Upright freezers and chest freezers are part of this page. Walk-in freezer rooms are on the cold room page."},
        {"question": "Do you cover my part of Gauteng?", "answer": "We cover Gauteng. Use the area pages for Pretoria, Johannesburg, Midrand, Sandton and the other suburbs that already have a page."},
        {"question": "How do I book a visit?", "answer": "Call 065 650 8504, use WhatsApp, or send the quote form. Tell us the fault in your own words."},
        {"question": "Will you add gas to a fridge that is warm?", "answer": "Only if the tests show that refrigerant is the problem. A warm fridge is not always a gas fault."},
    ],
)

add_service(
    slug="washing-machine-repairs",
    nav="Washing machine repairs",
    title="Washing Machine Repairs in Gauteng",
    metaDescription="Washing machine not draining, not spinning or leaking in Gauteng? MainTech checks the fault and explains it before the repair",
    h1="Washing machine repairs in Gauteng",
    intro="MainTech repairs washing machines across Gauteng. If the drum will not spin, the water will not leave, or the machine leaks onto the floor, call and tell us what it does on a wash. We look at the machine in front of us. This site has not published a brand list for washing machines, so name the make when you call.",
    image="/washing_machine_repairs.jpg",
    imageAlt="Washing machine in a laundry with the door open",
    width=1024, height=432,
    brands=[],
    related=["tumble-dryer-repairs", "appliance-repairs", "plumbing-services", "electrical-services"],
    faults=[
        {"name": "Washing machine not draining", "detail": "A tub full of water can be a blocked filter, a kinked hose or a pump that is not turning. We check the easy blockages before we talk about a pump."},
        {"name": "Not spinning", "detail": "If the machine washes but will not spin, the load, the door lock or the motor circuit can be involved. An unbalanced load is not always the whole story."},
        {"name": "Leaking", "detail": "Water at the door, under the machine or from the hose are different leaks. We look at the door seal, the joints and the drain hose, and we do not treat every puddle as a failed tub."},
        {"name": "Not starting", "detail": "No lights, or lights with no programme, can be the door switch, the controls or the supply at the machine. We test at the appliance. Whole-house wiring is not this job."},
        {"name": "Shaking or walking", "detail": "A machine that bangs the cabinet can have a failed shock, a worn bearing or a load that cannot balance. We say which one the inspection supports."},
        {"name": "Bad smell", "detail": "A smell can be residue in the drawer and drum, or water sitting in the sump. We tell you what is cleaning and what is a repair."},
    ],
    work=[
        "You describe the programme it fails on: wash, rinse, spin or drain.",
        "We inspect the filter, hoses, door lock and the parts that match that symptom.",
        "Water connections that belong to the washing machine can be checked with the repair. That is not a general plumbing visit.",
        "We explain the fault before parts are fitted, then run a short cycle if the repair is done.",
    ],
    sections=[
        {"heading": "Linked appliance work", "body": "Tumble dryers, dishwashers and ovens have their own pages. The appliance repairs page is the parent list. If the washing machine also needs a water connection checked, the plumbing page describes that limited job."},
    ],
    faqs=[
        {"question": "Can you fix a washing machine that will not drain?", "answer": "We start with the filter and hose, then test the pump if those are clear. Not every full tub is a failed pump."},
        {"question": "Do you repair every brand?", "answer": "Tell us the make. This site does not publish a washing machine brand list, so we confirm the job when you call."},
        {"question": "Do you come to my area?", "answer": "Yes, across Gauteng. The area pages name the suburbs that already have their own page."},
        {"question": "How do I ask for a visit?", "answer": "Call, WhatsApp or use the contact form. Say whether it leaks, will not spin, or will not drain."},
        {"question": "Is a leak always a door seal?", "answer": "No. Hoses and joints leak as well. We look before we name the part."},
    ],
)

MORE = [
("tumble-dryer-repairs","Tumble dryer repairs","Tumble Dryer Repairs in Gauteng","Dryer not heating or not tumbling in Gauteng? MainTech checks the airflow and the heat circuit before naming a part","Tumble dryer repairs in Gauteng","MainTech repairs tumble dryers across Gauteng. If clothes stay wet, the drum will not turn, or the dryer stops mid cycle, tell us which of those you see. Vented and condenser dryers are both in scope. This site has not published a dryer brand list.","/Appliances-All-scaled-e1585943218453.webp","Row of household laundry appliances",1024,450,[],["washing-machine-repairs","appliance-repairs","electrical-services"],
 [("Not heating","A dryer that runs cold can have a failed element, a thermostat, or air that cannot move. We check airflow and the heat circuit, not just one part."),
  ("Not tumbling","A drum that stays still can be a belt, a motor or a door switch. Noise before it stopped is useful information."),
  ("Taking too long","A cycle that never feels dry is often blocked filters, a packed condenser or a weak heater. We look at airflow first."),
  ("Stopping mid cycle","If it cuts out, we check overheating protection and the controls after the simple blockages."),
  ("Noisy drum","Squealing or thumping points at rollers, the belt or the motor. We do not replace all three because of a noise."),
  ("Burning smell","Stop using it and tell us. A smell can be lint on a heater or a failing motor. We inspect before anyone runs it again.")]),
("dishwasher-repairs","Dishwasher repairs","Dishwasher Repairs in Gauteng","Dishwasher not draining or not cleaning in Gauteng? MainTech checks filters, spray arms and the pump before the repair","Dishwasher repairs in Gauteng","MainTech repairs dishwashers across Gauteng. Standing water, dirty dishes or a leak at the door are different faults. Say which one you have. This site has not published a dishwasher brand list, so tell us the make when you call.","/appliance_repairs.jpg","Household appliances including a dishwasher",1024,400,[],["washing-machine-repairs","plumbing-services","appliance-repairs"],
 [("Not draining","A dishwasher full of water is often a blocked filter or hose. The pump is tested if those are clear."),
  ("Not cleaning","Dirty results can be blocked spray arms, a weak wash pump or water that never gets hot."),
  ("Leaking","A door leak and water in the base are different. We check the seal, hoses and the base before we name a part."),
  ("Not drying","Drying problems can be heat, rinse aid use or a fan on models that have one. We say which applies."),
  ("Not filling","No water can be the inlet, the valve or the tap that feeds the machine. We check the appliance side."),
  ("Door not locking","If the programme will not start, the lock is one of the first tests.")]),
("oven-repairs","Oven and stove repairs","Oven and Stove Repairs in Gauteng","Stove plate not heating or oven not getting hot in Gauteng? MainTech tests the element and controls before any repair","Oven and stove repairs in Gauteng","MainTech repairs ovens, stoves and hobs across Gauteng. A cold plate, an oven that will not heat, or a door that will not close are all on this page. Gas stove overhauls are not offered as their own service. This site has not published an oven brand list.","/appliance_repairs.jpg","Kitchen appliances lined up for repair",1024,400,[],["appliance-repairs","electrical-services","dishwasher-repairs"],
 [("Stove plate not heating","One dead plate is not the same job as a whole oven that stays cold. We test that plate and its connection."),
  ("Oven not heating","No heat can be an element, a selector or the supply at the appliance. We test those before we change parts."),
  ("Uneven cooking","Hot spots can be a failed fan, a tired element or a door that does not seal."),
  ("Grill not working","The grill circuit is checked on its own when the oven still heats."),
  ("Door not closing","A door that hangs open lets heat out. We look at hinges and the seal."),
  ("Hob clicking","A hob that clicks and does not light is described when you call. We will say if that fault is in the work we do.")]),
("appliance-repairs","All appliance repairs","Appliance Repairs in Gauteng","Need appliance repairs in Gauteng? MainTech covers laundry and kitchen machines and links you to the right repair page","Appliance repairs in Gauteng","MainTech repairs household appliances across Gauteng. This page is the parent list. Washing machines, tumble dryers, dishwashers and ovens each have their own page, because the faults are different. Fridges are on the fridge and freezer page.","/appliance_repairs.jpg","Several household appliances together",1024,400,[],["washing-machine-repairs","tumble-dryer-repairs","dishwasher-repairs","oven-repairs","refrigeration-repairs"],
 [("Washer not draining","Use the washing machine page if the tub stays full or the machine will not spin."),
  ("Dryer not heating","Use the tumble dryer page if clothes stay wet or the drum will not turn."),
  ("Dishwasher not cleaning","Use the dishwasher page for standing water, dirty washes or leaks."),
  ("Stove plate not heating","Use the oven page for cold plates, ovens that will not heat, and hobs."),
  ("Fridge not cooling","Use the fridge and freezer page. Do not treat a warm fridge as a laundry repair."),
  ("Unsure which machine","Call and name the appliance. We will point you at the right page and the right visit.")]),
("commercial-refrigeration","Commercial refrigeration","Commercial Refrigeration in Gauteng","Display fridge warm or ice machine not making ice? MainTech repairs commercial refrigeration across Gauteng","Commercial refrigeration repairs in Gauteng","MainTech repairs commercial refrigeration across Gauteng. This page is for shops, restaurants and other businesses. It is not the page for a household fridge. Display fridges, bottle coolers, under-counter units and ice machines are the equipment this site already describes.","/commercial-refrigeration-display.png","Commercial display fridges in a shop",1024,768,[],["cold-room-installation-repair","refrigeration-repairs","emergency-callout-service","hvac-maintenance-contracts"],
 [("Display fridge warm","Stock going soft is urgent for a shop. We check temperature, fans, doors and the cooling circuit."),
  ("Bottle cooler not cold","A cooler that runs but stays warm needs airflow and temperature checks before anyone talks about gas."),
  ("Under-counter fridge warm","Kitchen units under the counter are a different shape from a household fridge. Tell us the type of cabinet."),
  ("Ice machine not making ice","Low ice can be water, a dirty condenser or a refrigeration fault. We look at the machine you have."),
  ("Unit icing up","Ice on the coil can block airflow. We check defrost and the fans."),
  ("Door left out of alignment","A door that does not seal lets heat in all day. We check the gasket and the hinges.")]),
("cold-room-installation-repair","Cold room repairs","Cold Room Repairs in Gauteng","Cold room too warm or freezer room not holding temperature? MainTech repairs walk-in rooms across Gauteng","Cold room and freezer room repairs in Gauteng","MainTech repairs and installs walk-in cold rooms and freezer rooms across Gauteng. If the room is too warm, ice is building on the evaporator, or the door does not seal, call and tell us which room it is. This is separate from a household fridge repair.","/cold-room-installation.png","Walk-in cold room panels and door",1024,768,[],["commercial-refrigeration","refrigeration-repairs","emergency-callout-service"],
 [("Room too warm","We check the set point, the fans, the door and whether the plant is running."),
  ("Ice on the evaporator","A blocked coil stops the room cooling. Defrost and airflow are the first checks."),
  ("Door not sealing","Warm air through a bad gasket or a dragging door is a common reason a room struggles."),
  ("Temperature swinging","A room that cycles too wide can be a control, a door or a plant fault. We log what it is doing."),
  ("Freezer room not holding","Freezer rooms are part of this page. Tell us the temperature you need and the temperature you have."),
  ("New room or a repair","Installation and repair both sit on this page. Say whether you need a new room or a room that has failed.")]),
("air-conditioning-services","Air conditioner repairs","Aircon Repairs in Gauteng","Aircon not cooling or leaking water in Gauteng? MainTech repairs, services and installs split and ducted units","Air conditioner repairs in Gauteng","MainTech repairs, services and installs air conditioners across Gauteng. If the unit is not cooling, it is leaking water, or it will not turn on, start with this page. Servicing and installation are sections of the same visit range, not separate websites. Brands already named here are Samsung, LG, Midea, Panasonic and Hisense.","/air-conditioning-service-gauteng.png","Technician at an indoor air conditioning unit",1024,768,["Samsung","LG","Midea","Panasonic","Hisense"],["hvac-maintenance-contracts","electrical-services","emergency-callout-service","refrigeration-repairs"],
 [("Not cooling","A unit that blows warm air can be airflow, a dirty filter, a control fault or refrigerant. We test before we add gas."),
  ("Leaking water","Water indoors is often a blocked drain or a poorly fitted tray. We clear and check the drain path."),
  ("Not turning on","No power at the unit is checked at the appliance. A new circuit for an install is described on the electrical page."),
  ("Noisy unit","Rattles can be fans, panels or pipework. Tell us if the noise is indoors or on the outdoor unit."),
  ("Short cycling","A unit that starts and stops can be a sensor, a dirty coil or a sizing question. We say what the inspection shows."),
  ("Needs a service","Filters, coils and drains are the normal service items. Say if you also want a repair looked at on the same visit.")]),
("hvac-maintenance-contracts","Aircon maintenance plans","Aircon Maintenance in Gauteng","Want aircon maintenance in Gauteng? MainTech plans filter, coil and drain checks for offices and retail sites","Air conditioner maintenance in Gauteng","MainTech sets up air conditioner maintenance for offices, retail and other commercial sites in Gauteng. This page is for planned visits, not a household fridge service. A maintenance visit covers filters, coils, drains and a check that the unit runs. It is not a promise about how fast we arrive.","/hvac-maintenance-technician.png","Technician servicing an air conditioning system",1024,768,["Samsung","LG","Midea","Panasonic","Hisense"],["air-conditioning-services","property-maintenance","commercial-refrigeration"],
 [("Filters blocked","A blocked filter is a common reason an office unit struggles. We include filter checks in a planned visit."),
  ("Coils dirty","Dirty coils make the unit work harder. Cleaning them is part of a service, not a guess at a gas fault."),
  ("Drains overflowing","A blocked drain leaks into the ceiling. Drain checks belong on this plan."),
  ("Several indoor units","Tell us how many units and where they are. The plan follows the site, not a template price."),
  ("Unit already failed","A breakdown is an aircon repair. Book that page if you need a fault found now."),
  ("Home and shop mixed","Home appliance schedules are on the maintenance contracts page. This page stays with air conditioning.")]),
("property-maintenance","Appliance maintenance plans","Appliance Maintenance in Gauteng","Need scheduled appliance maintenance in Gauteng? MainTech plans checks for home and business equipment you already use","Appliance maintenance in Gauteng","MainTech offers maintenance contracts for homes and businesses across Gauteng that want planned checks on appliances and cooling equipment. This is broader than the aircon-only plan. We agree what is on the list before any visit. There is no published price on this site.","/property-maintenance-worker-fixing-repairs-profess.jpg","Person repairing equipment inside a building",1024,768,[],["hvac-maintenance-contracts","appliance-repairs","air-conditioning-services"],
 [("Filters and seals","Planned visits look at filters, door seals and the simple parts that stop a machine struggling."),
  ("More than one appliance","Tell us which machines you want on the list. A washer and a fridge are not the same check."),
  ("Business kitchen","If you also have a cold room or display fridge, those pages describe that equipment."),
  ("Aircon on its own plan","Office air conditioning plans stay on the HVAC maintenance page so the two offers stay clear."),
  ("A machine has already failed","A breakdown is a repair visit. Use the page for that appliance."),
  ("You want a written list","We write down what the plan covers. We do not imply cover for equipment you did not name.")]),
("emergency-callout-service","Urgent breakdown calls","Emergency Repairs in Gauteng","Fridge, freezer or cold room failed in Gauteng? MainTech takes urgent repair calls and tells you when we can come","Urgent appliance and cooling repairs in Gauteng","MainTech takes urgent repair calls across Gauteng when a fridge, freezer, cold room or air conditioner has failed. Call and describe the fault. We will tell you if we can come and when. This page does not promise a time. Household and business cooling both sit here, and the detailed repair pages still apply.","/emergency-callout-technician.png","Technician arriving with tools for a repair",1024,768,[],["refrigeration-repairs","commercial-refrigeration","air-conditioning-services","cold-room-installation-repair"],
 [("Fridge failed with food inside","Say how warm it is and how long it has been off. That helps us judge the visit."),
  ("Freezer lost temperature","A thawing freezer is a fridge and freezer repair. Call this page if you need us to treat it as urgent."),
  ("Cold room too warm","A warm room with stock is a cold room job. Tell us the room temperature."),
  ("Aircon failed in a work space","Use this page to ask for an urgent aircon visit, and the aircon page for the fault detail."),
  ("Not sure it is urgent","Call anyway and describe it. We will say if it can wait for a booked visit."),
  ("After you call","Keep the doors closed. Do not keep resetting a machine that smells of burning.")]),
("plumbing-services","Appliance water connections","Appliance Plumbing in Gauteng","Need a washing machine, dishwasher or ice maker connected in Gauteng? MainTech does that appliance plumbing only","Appliance plumbing connections in Gauteng","MainTech connects water for appliances across Gauteng. This page is for washing machines, dishwashers, fridge ice makers and the drains that belong to those machines. It is not a general plumbing service for the rest of the building. If the fault is inside the appliance, use that appliance page as well.","/professional-plumber-working-on-pipes-installation.jpg","Plumber working on water pipes",1024,768,[],["washing-machine-repairs","dishwasher-repairs","appliance-repairs","commercial-refrigeration"],
 [("Washer connection","A new machine, a leaking hose or a tap that feeds the washer."),
  ("Dishwasher connection","Inlet and drain for the dishwasher, not the kitchen sink as a whole."),
  ("Ice maker water","A fridge or ice machine that needs a water feed. Tell us which machine."),
  ("Leak at the appliance","Water at the hose or valve is this page. Water inside the drum may be the appliance repair."),
  ("Drain that belongs to the machine","We look at the drain the appliance uses. We do not take on unrelated drainage."),
  ("Gas supply work","Gas stove repairs are not a published service. Ask before you assume we do that job.")]),
("electrical-services","Appliance electrical connections","Appliance Electrical in Gauteng","Need an appliance or aircon connected safely in Gauteng? MainTech does that electrical work, not general house wiring","Appliance electrical connections in Gauteng","MainTech does electrical connections for appliances and air conditioners across Gauteng. That includes the supply at the machine, an isolator, and fault finding on that circuit. It is not a general electrical service for the whole property. If the oven or aircon itself has failed, use that repair page too.","/electrician-working-on-electrical-panel-wiring-sou.jpg","Electrician working at an electrical panel",1024,768,[],["air-conditioning-services","oven-repairs","appliance-repairs","hvac-maintenance-contracts"],
 [("Appliance will not power up","We test at the machine before anyone opens the rest of the board."),
  ("Aircon needs a supply","A new unit often needs a dedicated connection. Say whether this is an install or a failed unit."),
  ("Oven circuit","A stove or oven that trips can be the appliance or the connection. We separate those."),
  ("Isolator or plug","The local isolator and the plug for the appliance are in scope. Whole-board upgrades are not assumed."),
  ("Tripping when it starts","Tell us which machine trips the power. That points the test."),
  ("Other house wiring","If the fault is not tied to an appliance or aircon, we will say it is outside this page.")]),
]

for slug, nav, ttl, meta, h1, intro, image, alt, width, height, brands, related, faults in MORE:
    add_service(
        slug=slug, nav=nav, title=ttl, metaDescription=meta, h1=h1, intro=intro,
        image=image, imageAlt=alt, width=width, height=height, brands=brands, related=related,
        faults=[{"name": n, "detail": d} for n, d in faults],
        work=[
            f"You call {nav.lower()} and describe the fault in plain words.",
            "We look at the parts that match that symptom before we name a replacement.",
            "We explain what we found and what the repair involves before work starts.",
            "If a repair is completed, we test the appliance or plant before we leave.",
        ],
        sections=[{"heading": "Where this page fits", "body": intro + " Use the area pages if you want to confirm that your suburb already has a page. Use the contact page to send the fault in writing."}],
        faqs=[
            {"question": f"Can you help with {faults[0][0].lower()}?", "answer": faults[0][1]},
            {"question": "Do you cover Gauteng?", "answer": "Yes. Area pages list the suburbs that already have their own page, including Pretoria, Johannesburg, Midrand and Sandton."},
            {"question": "How do I book?", "answer": "Call 065 650 8504, use WhatsApp, or send the form on the contact page."},
            {"question": "Will you name a price on the phone?", "answer": "This site does not publish prices. We explain the fault and the work before a repair starts."},
            {"question": "What if you cannot repair it?", "answer": "We say so. We do not claim that every fault can be repaired."},
        ],
    )

areas_raw = [
("pretoria","Pretoria",["Montana","Hatfield","Menlyn","Brooklyn","Waterkloof","Lynnwood","Moreleta Park"],["centurion","midrand","johannesburg"],"Pretoria is one of the main areas already published on this site. The suburb names on this page come from the existing Pretoria page, including Hatfield, Menlyn, Brooklyn and Moreleta Park."),
("johannesburg","Johannesburg",["Sandton","Rosebank","Fourways","Randburg","Parktown","Melrose","Bryanston"],["sandton","rosebank","randburg","fourways","roodepoort","bedfordview","morningside"],"Johannesburg is the city page. It links to the suburb pages that already exist, including Sandton, Rosebank, Fourways, Randburg, Roodepoort, Bedfordview and Morningside."),
("midrand","Midrand",["Carlswald","Halfway House","Vorna Valley","Kyalami","Waterfall"],["sandton","centurion","pretoria","johannesburg"],"Midrand sits between Johannesburg and Pretoria on our existing area list. Suburbs already named here include Carlswald, Halfway House, Vorna Valley, Kyalami and Waterfall."),
("sandton","Sandton",["Morningside","Rivonia","Sunninghill","Bryanston","Hyde Park","Sandown"],["morningside","johannesburg","fourways","rosebank","midrand"],"Sandton has its own page and also links to Morningside, which has a separate page. Other names already published for Sandton include Rivonia, Sunninghill, Bryanston, Hyde Park and Sandown."),
("morningside","Morningside",["Sandton Central","Atholl","Inanda","Sandown","Benmore"],["sandton","johannesburg","rosebank"],"Morningside keeps its own URL even though it sits with Sandton. Names already published with this page include Atholl, Inanda, Sandown and Benmore."),
("centurion","Centurion",["Highveld","Eldoraigne","Irene","Wierdapark","Lyttelton"],["pretoria","midrand","johannesburg"],"Centurion is published as its own area, next to Pretoria. Suburbs already named include Highveld, Eldoraigne, Irene, Wierdapark and Lyttelton."),
("fourways","Fourways",["Lonehill","Dainfern","Broadacres","Cedar Lakes","Douglasdale"],["sandton","randburg","johannesburg","midrand"],"Fourways is its own area page. Names already published here include Lonehill, Dainfern, Broadacres, Cedar Lakes and Douglasdale."),
("randburg","Randburg",["Ferndale","Blairgowrie","Northcliff","Fairland"],["fourways","johannesburg","roodepoort","sandton"],"Randburg is separate from Fourways and Roodepoort. Suburbs already named include Ferndale, Blairgowrie, Northcliff and Fairland."),
("bedfordview","Bedfordview",["Edenvale","Germiston","Kensington","Kempton Park"],["johannesburg","rosebank","sandton"],"Bedfordview is the east-side page already on the site. Names already published with it include Edenvale, Germiston, Kensington and Kempton Park."),
("rosebank","Rosebank",["Parktown","Saxonwold","Dunkeld","Parkhurst"],["johannesburg","sandton","morningside","bedfordview"],"Rosebank has its own page. Nearby names already published include Parktown, Saxonwold, Dunkeld and Parkhurst."),
("roodepoort","Roodepoort",["Wilgeheuwel","Honeydew","Constantia Kloof","Florida"],["randburg","johannesburg","fourways"],"Roodepoort is the west-side page. Names already published include Wilgeheuwel, Honeydew, Constantia Kloof and Florida."),
]

def emit_services():
    for service in services:
        names = ", ".join(item["name"].lower() for item in service["faults"])
        service["sections"].append({
            "heading": "Before you call",
            "body": (
                f"When you ask for {service['nav'].lower()}, tell us which of these matches what you see: {names}. "
                "Add the brand and the model if the sticker is easy to read. Say how long it has been happening and whether anyone has already replaced a part. "
                "If a fridge, freezer or cold room is warm, keep the door closed until the visit. If a machine smells of burning, switch it off and say so when you call. "
                "Those details let the technician start with your symptom instead of a general inspection. "
                "If the problem is a different appliance, open that appliance's page so the visit is booked against the right fault. "
                "MainTech covers Gauteng. The area links on this page are the suburbs that already have their own page. "
                "You can call, use WhatsApp, or send the contact form. We explain the fault before repair work starts, and we will say if a repair does not make sense."
            ),
        })
    lines = ['import type { ServiceContent } from "@/content/types"', "", "export const services: ServiceContent[] = " + js(services), "",
             "export function getService(slug: string) {",
             "  const service = services.find((item) => item.slug === slug)",
             "  if (!service) throw new Error(`Missing service ${slug}`)",
             "  return service",
             "}", ""]
    Path("content/services.ts").write_text("\n".join(lines))

def emit_areas():
    areas = []
    for slug, name, suburbs, nearby, local in areas_raw:
        front = title(f"Appliance Repairs in {name}")
        meta = fit(f"Need appliance repairs in {name}? MainTech fixes fridges, laundry, kitchen appliances, cold rooms and aircons there")
        areas.append({
            "slug": slug,
            "name": name,
            "title": front,
            "metaDescription": meta,
            "h1": f"Appliance repairs in {name}",
            "intro": f"MainTech repairs appliances in {name} and the rest of Gauteng. If a fridge is not cooling, a washing machine will not drain, or an aircon is not cooling, you can call us for that area.",
            "local": local + " We do not add landmarks that were not already published. If your street is not in the list, call and ask. Cover is Gauteng, and this page only repeats suburbs the old page already named.",
            "suburbs": suburbs,
            "nearby": nearby,
            "faqs": [
                {"question": f"Do you repair appliances in {name}?", "answer": f"Yes. {name} is one of the area pages already on this site. Call and name the appliance and the fault."},
                {"question": f"Which repairs can I book in {name}?", "answer": "Fridge and freezer repairs, washing machines, tumble dryers, dishwashers, ovens, commercial refrigeration, cold rooms and air conditioners. Each has its own page."},
                {"question": "How do I get you to visit?", "answer": "Call 065 650 8504, use WhatsApp, or send the contact form. Say you are in " + name + " and describe the fault."},
                {"question": f"What if I am near {name} but in another suburb?", "answer": "Check the nearby area links on this page. If your suburb has no page, call and ask. We still describe cover as Gauteng."},
            ],
            "image": "/gauteng-service-areas-map.webp",
            "imageAlt": f"Map graphic used for the {name} service area page",
            "width": 1600,
            "height": 900,
        })
    text = 'import type { AreaContent } from "@/content/types"\n\nexport const areas: AreaContent[] = ' + js(areas) + """

export function getArea(slug: string) {
  const area = areas.find((item) => item.slug === slug)
  if (!area) throw new Error(`Missing area ${slug}`)
  return area
}
"""
    Path("content/areas.ts").write_text(text)

emit_services()
emit_areas()
print("services", len(services), "areas", len(areas_raw))

