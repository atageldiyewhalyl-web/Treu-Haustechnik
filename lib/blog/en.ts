/* Ratgeber articles, English: a development aid for reading along, never published (see lib/i18n). */
import type { PostSlug, PostText } from '.';

export const en: Record<PostSlug, PostText> = {
  'heizung-winterfit-machen': {
    title: 'Getting your heating ready for winter: the checklist',
    description: 'Get your heating ready for winter in 8 steps: bleed radiators, check the pressure, test the thermostats. A checklist from a Mannheim master business.',
    excerpt: 'Before it gets properly cold, a quick check of the heating pays off. Much of it you can do yourself in half an hour. Our checklist shows what matters and when to call us instead.',
    alt: 'Hand adjusting the thermostat on a radiator',
    takeaways: [
      'Test the heating on a mild autumn day: all thermostats up, run it for an hour, then walk through every room.',
      'Bleed first, then check the pressure. In many family homes it is between 1.5 and 2 bar; the manufacturer value is what counts.',
      'Work on the burner, gas pipes or a heat pump refrigerant circuit belongs in professional hands.',
    ],
    sections: [
      { heading: 'Why an autumn heating check pays off', text: ['Over the summer valves stick, air collects and the pressure drops. A short check in October or November finds these small issues before they become a nuisance.'] },
      { heading: 'Getting the heating ready: the checklist in 8 steps', text: ['Test run, thermostats, bleeding, pressure, free radiators, display, time programmes after the clock change, outdoor unit and leaks.'] },
      { heading: 'Topping up heating water correctly', text: ['Fill the hose with water first and only top up to the target value. Frequent topping up points to a leak or a faulty expansion vessel.'] },
      { heading: 'Settings that save heating costs', text: ['Keep the flow temperature as low as possible, consider hydraulic balancing, and keep stored hot water at 60 °C or more.'] },
      { heading: 'What belongs in professional hands', text: ['Burner, gas pipes, flue, refrigerant circuit, a dripping safety valve and faults that keep returning.'] },
    ],
  },
  'f-gase-verordnung-2027': {
    title: 'EU F-Gas Regulation 2027: Heat Pumps & Air Conditioning',
    description: 'From 2027 stricter refrigerant rules apply to heat pumps and air conditioners. What is new, what stays allowed and what it means for Mannheim.',
    excerpt: 'On 1 January 2027 the EU F-Gas Regulation gets stricter again. Many new heat pumps will then only be sold with climate-friendly refrigerants such as propane. Systems already running are not affected. We explain what changes and what to look out for in Mannheim.',
    alt: 'Outdoor unit of a modern heat pump in a garden in front of a house',
    takeaways: [
      'From 2027 new monoblock heat pumps up to 50 kW and new air-to-water split heat pumps up to 12 kW may only contain refrigerants with a GWP below 150, usually propane (R290).',
      'Your existing heat pump or air conditioner may keep running and be serviced and repaired as usual, also with R32 or R410A.',
      'For new split air conditioners up to 12 kW the limit only applies from 2029, so R32 units remain available until the end of 2028.',
    ],
    sections: [
      { heading: 'What does the F-Gas Regulation cover?', text: ['[Regulation (EU) 2024/573](https://eur-lex.europa.eu/eli/reg/2024/573/oj) governs fluorinated greenhouse gases used as refrigerants. It applies directly in every EU state since 11 March 2024 and bans new equipment with high-GWP refrigerants step by step while capping the total quantity on the market.'] },
      { heading: 'What changes on 1 January 2027?', text: ['New monoblock heat pumps and compact units up to 50 kW, air-to-water split heat pumps up to 12 kW and chillers up to 12 kW must use refrigerants below GWP 150; chillers above 12 kW below GWP 750.'] },
      { heading: 'What is not banned in 2027', text: ['Only placing new equipment on the market is banned. Existing systems may keep running and be serviced; R410A and R32 may still be refilled. R32 split air conditioners remain allowed until the end of 2028.'] },
      { heading: 'The timeline to 2035', text: ['Further steps follow in 2029, 2030, 2032, 2033 and 2035, ending with F-gas-free split units up to 12 kW.'] },
      { heading: 'Why refrigerants are getting scarcer from 2027', text: ['The permitted quantity of HFCs drops from about 42.9 to about 21.7 million tonnes of CO2 equivalent in 2027 to 2029, so refills are likely to get more expensive.'] },
      { heading: 'Leak checks: does this affect your system?', text: ['Checks are required from 5 tonnes of CO2 equivalent (10 tonnes for hermetically sealed units): about 7.4 kg of R32 or 2.4 kg of R410A.'] },
      { heading: 'What this means for homeowners in Mannheim', text: ['Mannheim\'s heat plan relies on district heating and heat pumps, and MVV aims to shut down the gas grid by 2035, although the council has set no fixed date.'] },
      { heading: 'Buy now or wait?', text: ['Do not buy an R32 split heat pump just to beat the deadline, start funding applications early, and keep existing systems serviced.'] },
      { heading: 'Who may work on refrigerant systems?', text: ['Only certified technicians and companies may install, service, leak-check or recover refrigerants.'] },
    ],
  },
  'waermepumpe-im-altbau': {
    title: 'A Heat Pump in an Older House: When Is It Really Worth It?',
    description: 'Does a heat pump work in an older house? What matters about flow temperature, radiators and insulation, and how to test your own home.',
    excerpt: 'A heat pump needs neither underfloor heating nor a freshly insulated house. What decides it is one number you can test yourself.',
    alt: 'Installer servicing the outdoor unit of a heat pump at a house wall',
    takeaways: [
      'The flow temperature decides: if your house gets warm at around 55 °C, it is usually suitable for a heat pump.',
      'A few larger radiators and hydraulic balancing are often enough; a full renovation is not needed.',
      'A heat load calculation stops the system from being sized too large or too small.',
    ],
    sections: [
      {
        heading: 'The myth of the unrenovated old house',
        text: ['For a long time the rule was: heat pumps are for new builds with underfloor heating. In practice they now run reliably in many older houses too, of which Mannheim and the region have thousands. Whether it fits depends less on the year of construction than on one question: how hot does the heating water have to be for the house to get warm?'],
      },
      {
        heading: 'The number that decides: the flow temperature',
        text: [
          'A heat pump works more economically the lower the flow temperature is, that is, the temperature at which the water enters the radiators. As a rule of thumb: if the house manages with around 55 °C or less even on cold days, a heat pump can be run economically.',
          'You can try this yourself. On a cold winter day, set the flow temperature of your existing heating to 55 °C and open the thermostats. If every room stays comfortably warm, that is a good sign. If individual rooms turn cool, you also know where improvements are needed.',
        ],
      },
      {
        heading: 'What can be improved with little effort',
        list: [
          'Swap individual radiators for larger ones: more surface gives more heat at a lower temperature.',
          'Hydraulic balancing: every radiator gets exactly the amount of water it needs.',
          'Insulate the top-floor ceiling or the basement ceiling: done comparatively quickly and noticeable at once.',
          'Seal or replace windows where there is a draught.',
        ],
      },
      {
        heading: 'Planning: heat load, location and noise',
        text: ['A heat load calculation comes before any quote. It shows how much heat your house really needs. A heat pump that is too large keeps switching on and off and wears out sooner; one that is too small has to top up electrically on frosty days. For terraced and semi-detached houses the location of the outdoor unit matters as well: the distances to the neighbours have to be right, and it is better not placed under a bedroom window.'],
      },
      {
        heading: 'And the subsidies?',
        text: ['There are state subsidies for replacing a heating system, and their conditions keep changing. That is why we give no figures here and check the current position for your project in a conversation. Important: clarify the subsidy before you place a binding order.'],
      },
    ],
  },

  'heizung-faellt-aus-was-tun': {
    title: 'Heating Failure: 7 Things You Can Check Yourself',
    description: 'Heating cold? Check these seven points yourself before calling the emergency service. And with these warning signs, call at once.',
    excerpt: 'Cold radiators on a Sunday evening: often something small is behind it. You can check these seven points yourself in a few minutes.',
    alt: 'Woman wrapped in a blanket warming her hands at a radiator',
    takeaways: [
      'Thermostat, water pressure and fuse are the most common causes and quickly checked.',
      'Press the reset button once only. If the heating does not start, there is a fault.',
      'If you smell gas, switch nothing, open the windows, leave the house and call the fault service from outside.',
    ],
    sections: [
      {
        heading: 'Check first, then call',
        text: ['When the heating fails, the system itself is not always broken. With the following points you can find the most common causes yourself. And if not, you can tell us on the phone exactly what you have already checked. That saves time in finding the fault.'],
      },
      {
        heading: 'The 7-point checklist',
        list: [
          'Thermostats: are the room thermostat and the radiator valves turned up? Check the batteries of wireless thermostats.',
          'Operating mode: is the controller accidentally set to summer mode, setback or holiday?',
          'Power: is the heating emergency switch on, and is the fuse in the fuse box in place?',
          'Water pressure: does the pressure gauge on the boiler show a value in the green range? In a single-family house it is usually between 1 and 2 bar.',
          'Air in the system: if the radiators gurgle or only get warm at the bottom, bleeding them helps.',
          'Fault code: does the display show an error code? Note it down; it helps with the diagnosis.',
          'Fuel: is there still oil in the tank of an oil heating system? Is the gas tap of a gas heating system open?',
        ],
      },
      {
        heading: 'The reset button: once, not more',
        text: ['Many heating systems have a reset button. Press it once and wait a few minutes. If the system goes into fault again, there is a reason. Resetting repeatedly can make the damage worse.'],
      },
      {
        heading: 'When you should call at once',
        list: [
          'There is a smell of gas or flue gas.',
          'Water is escaping from the boiler, the pipes or the radiators.',
          'The water pressure keeps dropping.',
          'The heating goes into fault again after the reset.',
        ],
        more: ['If you smell gas: do not use light switches or the doorbell, open the windows, leave the house and call the fault service of your gas network operator from outside. In all other cases you can reach our emergency service around the clock on {phone}.'],
      },
    ],
  },

  'badsanierung-ablauf-dauer-fehler': {
    title: 'Bathroom Renovation: Process, Duration and the Most Common Mistakes',
    description: 'How a bathroom renovation goes: from planning through pipework and waterproofing to handover. With the mistakes that become expensive later.',
    excerpt: 'A new bathroom should last for decades. All the more important is what happens before the tiling and what nobody sees afterwards.',
    alt: 'Freestanding white bathtub with a floor-mounted tap in a grey tiled bathroom',
    takeaways: [
      'The order matters: planning and pipework first, then waterproofing, then tiles and final fitting.',
      'Old pipes should be checked while the wall is open. Later it gets expensive.',
      'Plan level access and some reserves today and you will not have to rebuild later.',
    ],
    sections: [
      {
        heading: 'How a bathroom renovation goes',
        list: [
          'Survey on site: dimensions, pipework, wishes and budget.',
          'Planning and quote: floor plan, fittings and a clear schedule.',
          'Removal: the old bathroom comes out; hallway and stairwell are protected.',
          'First fix: water, waste and heating pipes are checked and renewed.',
          'Waterproofing: the shower and bath areas are sealed properly.',
          'Tiles and surfaces.',
          'Final fitting: sanitary ware, taps and radiators.',
          'Handover: we explain everything to you and document the work.',
        ],
      },
      {
        heading: 'How long does it take?',
        text: ['That depends on the scope. A complete bathroom with new pipework takes longer than swapping a bath for a shower. Drying times for screed, plaster and waterproofing cannot be shortened, and delivery times for sanitary ware should be settled before the first day of demolition. You receive a schedule for your bathroom from us with the quote.'],
      },
      {
        heading: 'The most common mistakes',
        list: [
          'Old pipes stay in the wall although they are at the end of their life.',
          'Savings are made on waterproofing. Damp damage often only shows after years.',
          'Too few sockets, too little storage and light planned in.',
          'Ventilation is forgotten, above all in bathrooms without a window.',
          'Accessibility is put off until later.',
        ],
      },
      {
        heading: 'Think about accessibility from the start',
        text: ['A level-access shower, a wider door and wall reinforcement for later grab rails add little extra work during a renovation. Doing it afterwards is far more involved. Even if you have no need today: your bathroom should still suit you in twenty years.'],
      },
      {
        heading: 'Settle early who does what',
        text: ['In a bathroom renovation plumbing, heating, electrics and tiling interlock. Before the start, settle who takes on which work and in what order. We discuss this with you at the site visit and set out the sequence in the quote.'],
      },
    ],
  },

  'hartes-wasser-mannheim-kalk': {
    title: 'Hard Water in Mannheim: What Limescale Does in the House',
    description: 'Mannheim drinking water is hard. What limescale does to taps, pipes and water heaters, and when a water softener is worth it.',
    excerpt: 'White marks on the tap are only the visible part. What limescale does in pipes and appliances, and what really helps against it.',
    alt: 'Close-up of the aerator on a tap',
    takeaways: [
      'According to the supplier MVV, drinking water in Mannheim is at around 20 °dH and so in the hardness range "hard".',
      'Limescale forms above all where water is heated: in the water heater, the washing machine, the shower head.',
      'A water softener protects the installation but needs regular maintenance.',
    ],
    sections: [
      {
        heading: 'How hard is the water in Mannheim?',
        text: [
          'Water hardness states how much calcium and magnesium is dissolved in the water. Germany has three hardness ranges: soft (under 8.4 °dH), medium (8.4 to 14 °dH) and hard (over 14 °dH). MVV gives a total hardness of around 20 °dH for Mannheim. You can find the current value for your address on the supplier’s website.',
          'Hard water is harmless to health. For the installation in the house, though, it is a constant strain.',
        ],
      },
      {
        heading: 'What limescale does',
        list: [
          'Water heaters and heating elements scale up and need more energy.',
          'Aerators and shower heads clog; the water jet gets weaker.',
          'Taps and thermostatic valves become stiff.',
          'Washing machine, dishwasher and coffee machine wear out sooner.',
          'White marks stay on tiles, glass and taps.',
        ],
      },
      {
        heading: 'What you can do yourself',
        text: ['Aerators and shower heads can be unscrewed and descaled in vinegar or citric acid. Dose detergent for the hardness range "hard" and descale appliances as the manufacturer states. Hot-water cylinders should be serviced regularly and descaled when needed.'],
      },
      {
        heading: 'When a water softener is worth it',
        text: [
          'A water softener is installed after the house water filter and exchanges calcium and magnesium for sodium. It protects the whole installation and every connected appliance. It makes most sense with hard water combined with new pipework, a new heating system with a hot-water cylinder or a freshly renovated bathroom.',
          'Good to know: the system needs regeneration salt and regular maintenance. The water is not softened to zero but set to a medium value. Which size and which method suit your household is something we settle at an appointment on site.',
        ],
      },
    ],
  },

  'klimaanlage-nachruesten-split-anlage': {
    title: 'Retrofitting Air Conditioning: What to Know Beforehand',
    description: 'Retrofitting a split air conditioner: split or monobloc, the right place for the outdoor unit, consent from landlord or owners’ association, installation and maintenance.',
    excerpt: 'Attic, home office, bedroom: if you no longer want to sweat in summer, settle five questions before you buy.',
    alt: 'Woman controlling a wall-mounted air conditioner in a bedroom with a tablet',
    takeaways: [
      'Permanently installed split systems cool more quietly and economically than mobile monobloc units.',
      'Installation belongs in the hands of a certified specialist business, because refrigerant is involved.',
      'Tenants and flat owners need the consent of the landlord or the owners’ association before installation.',
    ],
    sections: [
      {
        heading: 'Split system or mobile unit?',
        text: ['Mobile monobloc units are quickly bought but loud, and the exhaust hose in the tilted window lets warm air back in. A split system consists of a quiet indoor unit and an outdoor unit connected by a thin refrigerant line. It cools more evenly, uses less electricity for the same output and can hardly be heard in the bedroom.'],
      },
      {
        heading: 'The right place for the indoor and outdoor unit',
        text: ['The indoor unit should be able to blow freely into the room and not point straight at the bed or desk. The outdoor unit needs a firm, well-ventilated place on the facade, on the balcony or on the ground. We look for short pipe runs and make sure the unit disturbs neither you nor your neighbours.'],
      },
      {
        heading: 'Do I need permission?',
        text: ['In your own single-family house, usually not. In an owner-occupied flat the owners’ association has to agree, because the facade is altered. Tenants need the landlord’s permission, and listed buildings come with additional requirements. Settle this before ordering. You get the necessary details about the unit from us.'],
      },
      {
        heading: 'Cooling and heating with one unit',
        text: ['Modern split systems are air-to-air heat pumps. They cool in summer and can also heat in the months in between. That is practical for an attic, conservatory or office while the central heating is still off.'],
      },
      {
        heading: 'Installation and maintenance',
        text: ['Refrigeration systems may only be installed and commissioned by certified specialist businesses. After installation it is enough to clean the indoor unit’s filters regularly and have the system serviced at fixed intervals. That keeps the air hygienic and the output up.'],
      },
    ],
  },
};
