/**
 * The service catalogue.
 *
 * One array drives: the /services index, all sixteen /services/[slug] pages,
 * their static params, their metadata and their Service structured data. A new
 * service is one entry here plus a link in navigation.js — no new page file.
 *
 * TODO(content): confirm the company actually sells every service listed, and
 * delete the ones it does not. Each one becomes a page to maintain.
 */

/** The three pillars shown on the home page and at the top of /services. */
export const servicePillars = [
  {
    id: "ocean",
    index: "01",
    accent: "cyan",
    title: "Ocean transport",
    text: "Fixed-day sailings across the Caspian for containerised, rolling and non-standard cargo, on our own and chartered tonnage.",
    items: ["Container shipping", "RoRo, trailers and vehicles", "Breakbulk and general cargo", "Dry and liquid bulk"],
    href: "/services#ocean",
  },
  {
    id: "agency",
    index: "02",
    accent: "red",
    title: "Port & agency services",
    text: "Own agency presence in the ports we call, so berth planning, documents and disbursements stay inside one organisation.",
    items: ["Port agency and husbandry", "Stevedoring coordination", "Crew changes and supplies", "Bunkering arrangements"],
    href: "/services#agency",
  },
  {
    id: "logistics",
    index: "03",
    accent: "green",
    title: "Forwarding & customs",
    text: "The landside half of the journey: pre-carriage, clearance, storage and final delivery, planned against the sailing rather than after it.",
    items: ["Multimodal freight forwarding", "Customs clearance and permits", "Bonded and open warehousing", "Inland road and rail haulage"],
    href: "/services#logistics",
  },
];

export const serviceCategories = [
  { id: "ocean", title: "Ocean transport", accent: "cyan" },
  { id: "agency", title: "Port & agency", accent: "red" },
  { id: "logistics", title: "Logistics", accent: "green" },
  { id: "specialised", title: "Specialised", accent: "cyan" },
];

/**
 * `intro` is the lead paragraph, `body` the prose, `points` the checklist and
 * `facts` the spec panel. Every service page renders the same four slots, so
 * the pages stay consistent however many are added.
 */
export const services = [
  {
    slug: "container-shipping",
    category: "ocean",
    icon: "container",
    title: "Container shipping",
    summary: "Fixed-day container sailings across the Caspian, with equipment supply and inland connection at both ends.",
    intro:
      "Standard and special equipment moved on published sailing days between Baku, Aktau, Kuryk and Türkmenbaşy, with the booking, the sea leg and the release handled by one desk.",
    body: [
      "Container cargo is where a Caspian crossing is won or lost on paperwork rather than sea time. Bookings are confirmed against a named sailing, equipment is positioned before the cut-off, and documentation is prepared while the box is still inland.",
      "Reefer, open-top, flat-rack and tank containers are carried subject to space and stability. Dangerous goods are accepted under IMDG with a declaration reviewed before the booking is confirmed, not at the gate.",
    ],
    points: [
      "20 ft and 40 ft standard, high-cube and reefer equipment",
      "Open-top and flat-rack for out-of-gauge inside container dimensions",
      "IMDG dangerous goods, reviewed before booking confirmation",
      "Equipment positioning and merchant-haulage inland legs",
    ],
    facts: [
      { key: "Lanes", value: "Baku · Aktau · Kuryk · Türkmenbaşy" },
      { key: "Booking cut-off", value: "TODO" },
      { key: "Documentation", value: "Bill of lading / sea waybill" },
    ],
  },
  {
    slug: "roro",
    category: "ocean",
    icon: "truck",
    title: "RoRo & rolling cargo",
    summary: "Trailers, trucks, buses, agricultural and construction machinery driven or towed on and off.",
    intro:
      "Rolling cargo crosses fastest when it never leaves its wheels. Accompanied and unaccompanied units are carried on the Baku–Kuryk and Baku–Aktau lanes with lashing to the vessel's approved securing plan.",
    body: [
      "Unaccompanied trailers are the volume case: the unit is dropped at the terminal, we handle the crossing and the receiving haulier collects on the other side. Accompanied units keep the driver with the vehicle, which shortens border formalities for time-critical loads.",
      "Self-propelled machinery is accepted subject to a condition check, fuel level and a securing plan agreed before loading. Non-running units are towed on with a mafi trailer.",
    ],
    points: [
      "Accompanied and unaccompanied trailers",
      "Trucks, buses and self-propelled machinery",
      "Mafi trailers for non-running and out-of-gauge units",
      "Lashing to the vessel's approved cargo securing manual",
    ],
    facts: [
      { key: "Primary lane", value: "Baku (Alat) — Kuryk" },
      { key: "Frequency", value: "4 sailings / week" },
      { key: "Driver accommodation", value: "Available on accompanied units" },
    ],
  },
  {
    slug: "breakbulk",
    category: "ocean",
    icon: "crane",
    title: "Breakbulk & general cargo",
    summary: "Steel, pipe, timber, bagged and palletised cargo carried loose in the hold or on deck.",
    intro:
      "Cargo that does not fit a box and does not roll. Stowage, dunnage and securing are planned per shipment against the vessel's stability and the cargo's own tolerance.",
    body: [
      "Breakbulk is planned rather than booked. Dimensions, weights and centres of gravity are checked against the hold before space is confirmed, and a stowage plan is issued with the booking.",
      "Deck carriage is offered where the cargo tolerates exposure, under a deck-cargo clause agreed in advance and never applied retrospectively.",
    ],
    points: [
      "Steel products, pipe, coils and profiles",
      "Timber, bagged and palletised cargo",
      "Per-shipment stowage and securing plans",
      "Deck carriage where the cargo allows",
    ],
    facts: [
      { key: "Planning input", value: "Dimensions, weight, centre of gravity" },
      { key: "Documentation", value: "Bill of lading with stowage plan" },
      { key: "Survey", value: "On request or where cargo value requires" },
    ],
  },
  {
    slug: "dry-bulk",
    category: "ocean",
    icon: "warehouse",
    title: "Dry bulk",
    summary: "Grain, ore, aggregates and other dry bulk carried in bulk holds or in big bags.",
    intro:
      "Bulk parcels moved on inducement across the Caspian, with loading and discharge rates agreed before fixture so laytime is not an argument after the fact.",
    body: [
      "Cargo is accepted subject to an IMSBC classification and a moisture certificate where the material requires one. Loading and discharge are coordinated with the terminal so the vessel does not wait on shore equipment.",
      "Smaller parcels can move in big bags on a breakbulk sailing, which avoids waiting for a full bulk fixture.",
    ],
    points: [
      "Grain, ore, aggregates and industrial minerals",
      "IMSBC classification and moisture certification checked before acceptance",
      "Agreed load and discharge rates",
      "Big-bag alternative for part cargoes",
    ],
    facts: [
      { key: "Basis", value: "On inducement" },
      { key: "Documentation", value: "Charter party / bill of lading" },
      { key: "Cargo declaration", value: "IMSBC required" },
    ],
  },
  {
    slug: "liquid-bulk",
    category: "ocean",
    icon: "droplet",
    title: "Liquid bulk",
    summary: "Petroleum products and non-hazardous liquids in tank containers or on chartered tonnage.",
    intro:
      "Liquid cargo is carried in ISO tank containers on our own sailings, and in bulk on chartered tonnage where the parcel size justifies it.",
    body: [
      "Tank container movements follow the same booking process as dry containers, with the addition of a product data sheet and a tank suitability check before the booking is confirmed.",
      "Bulk parcels are arranged through our chartering desk against vetted tonnage. Product compatibility, last three cargoes and tank cleaning standards are confirmed before fixture.",
    ],
    points: [
      "ISO tank containers on scheduled sailings",
      "Chartered tonnage for bulk parcels",
      "Product data sheet and tank suitability review",
      "Last-three-cargoes and cleaning verification",
    ],
    facts: [
      { key: "Modes", value: "Tank container · chartered tonnage" },
      { key: "Pre-acceptance", value: "Product data sheet required" },
      { key: "Vetting", value: "Tonnage vetted before fixture" },
    ],
  },

  {
    slug: "port-agency",
    category: "agency",
    icon: "ship",
    title: "Port agency",
    summary: "Full agency at the ports we call: berth booking, formalities, disbursement control and reporting.",
    intro:
      "An agent who is part of the same company as the carrier answers to the same schedule. Pre-arrival, port call and post-call are handled by staff who already know the cargo.",
    body: [
      "Pre-arrival: berth application, notices, pilotage, tugs and customs pre-clearance. During the call: attendance on board, statement of facts, cargo documents and any deviation from the plan reported the same day, not in the final disbursement account.",
      "Disbursements are quoted before the call as a proforma and reconciled after it against the original quotation, item by item.",
    ],
    points: [
      "Berth application, pilotage and towage arrangement",
      "Customs, immigration and port formalities",
      "Proforma and final disbursement accounts, reconciled line by line",
      "Statement of facts and daily port-call reporting",
    ],
    facts: [
      { key: "Coverage", value: "Own offices and appointed agents" },
      { key: "Reporting", value: "Daily during the call" },
      { key: "Disbursements", value: "Proforma before, reconciled after" },
    ],
  },
  {
    slug: "husbandry",
    category: "agency",
    icon: "headset",
    title: "Husbandry & crew services",
    summary: "Crew changes, medical assistance, cash to master, spares clearance and owner's representation.",
    intro:
      "Husbandry calls fail on small things — a visa, a launch booking, a spare part stuck in customs. This is the work of making sure they do not.",
    body: [
      "Crew changes are planned against the vessel's ETA rather than the calendar, with visas, transport and accommodation arranged in advance and re-planned if the schedule moves.",
      "Spares and stores are cleared under the correct regime so the parcel is on board before departure, not chasing the vessel to the next port.",
    ],
    points: [
      "Crew change, visas, transport and accommodation",
      "Medical assistance and repatriation",
      "Cash to master",
      "Spares, stores and provisions clearance",
    ],
    facts: [
      { key: "Availability", value: "24 / 7" },
      { key: "Scope", value: "Husbandry-only or full agency" },
      { key: "Owner's representation", value: "On request" },
    ],
  },
  {
    slug: "stevedoring",
    category: "agency",
    icon: "crane",
    title: "Stevedoring coordination",
    summary: "Terminal and stevedore coordination, gang planning, and supervision of load and discharge.",
    intro:
      "We do not own the cranes, but we own the plan. Gangs, equipment and sequence are agreed with the terminal before the vessel is alongside.",
    body: [
      "Operations are attended so that a stoppage is reported and resolved while the vessel is still working, and recorded in the statement of facts for laytime purposes.",
      "Damage is documented at the point it occurs, with photographs and a written note countersigned by the terminal — which is what makes a claim recoverable later.",
    ],
    points: [
      "Gang and equipment planning with the terminal",
      "Load and discharge supervision",
      "Stoppage and damage recorded as it happens",
      "Statement of facts for laytime",
    ],
    facts: [
      { key: "Attendance", value: "For the duration of the operation" },
      { key: "Reporting", value: "Statement of facts + photographic record" },
      { key: "Surveys", value: "Independent surveyor on request" },
    ],
  },
  {
    slug: "bunkering",
    category: "agency",
    icon: "droplet",
    title: "Bunkering & supplies",
    summary: "Bunker arrangement, quantity and quality survey, and ship's stores at the ports we call.",
    intro:
      "Bunkers arranged against a written specification, delivered under survey, and sampled so a later quality dispute has evidence behind it.",
    body: [
      "Supply is coordinated with the port call rather than added to it, so bunkering does not extend the stay. Quantity is verified by survey and samples are drawn and sealed in the presence of the vessel.",
      "Stores and provisions are consolidated into one delivery where the schedule allows, which reduces both cost and the number of gate passes required.",
    ],
    points: [
      "Bunker supply against a written specification",
      "Quantity survey and sealed sampling",
      "Coordination inside the existing port call",
      "Consolidated stores and provisions delivery",
    ],
    facts: [
      { key: "Sampling", value: "Sealed, witnessed by the vessel" },
      { key: "Survey", value: "Quantity survey standard" },
      { key: "Scheduling", value: "Inside the port call where possible" },
    ],
  },

  {
    slug: "freight-forwarding",
    category: "logistics",
    icon: "route",
    title: "Freight forwarding",
    summary: "Door-to-door multimodal movements combining the sea leg with road, rail and air.",
    intro:
      "One contract covering the whole journey, with the sea leg planned first and every other leg planned around it — which is the opposite of how a forwarder without a vessel has to work.",
    body: [
      "Routings are built backwards from the required delivery date: the sailing is chosen first, then the pre-carriage and the onward leg are booked to meet it. If the vessel moves, the connecting legs are re-planned by the same desk.",
      "Across the Middle Corridor this matters more than price. A container that misses a block train in Aktau waits for the next one, and that wait is usually longer than the sea crossing.",
    ],
    points: [
      "Door-to-door and port-to-door routings",
      "Sea, road, rail and air combined under one contract",
      "Connecting legs re-planned when the sailing moves",
      "Cargo insurance arranged on request",
    ],
    facts: [
      { key: "Scope", value: "Door · port · terminal, in any combination" },
      { key: "Corridors", value: "Middle Corridor · North–South" },
      { key: "Insurance", value: "Arranged on request" },
    ],
  },
  {
    slug: "customs-clearance",
    category: "logistics",
    icon: "doc-check",
    title: "Customs clearance",
    summary: "Import, export and transit declarations, permits and dangerous-goods documentation.",
    intro:
      "Declarations prepared in-house on both sides of the crossing, so a classification question is answered before the cargo arrives rather than while it sits at the border.",
    body: [
      "Tariff classification, valuation and origin are reviewed at booking. Where a preferential origin or a permit is involved, the supporting document is requested early enough to be issued before the cargo moves.",
      "Transit procedures are used where they shorten the border stay, and the guarantee is arranged as part of the booking rather than as a separate exercise.",
    ],
    points: [
      "Import, export and transit declarations",
      "Tariff classification, valuation and origin review",
      "Permits, licences and certificates",
      "IMDG and dangerous-goods documentation",
    ],
    facts: [
      { key: "Coverage", value: "Both sides of the crossing" },
      { key: "Regimes", value: "Import · export · transit · temporary admission" },
      { key: "Guarantees", value: "Arranged with the booking" },
    ],
  },
  {
    slug: "warehousing",
    category: "logistics",
    icon: "warehouse",
    title: "Warehousing",
    summary: "Bonded and open storage, consolidation, and cargo handling at the port and inland.",
    intro:
      "Storage that exists to serve the sailing: cargo staged before the cut-off, consolidated where it makes a full unit, and released against instruction rather than on a fixed date.",
    body: [
      "Bonded storage is used where duty deferral matters, open storage where it does not. Either way stock is reported against your own references, not ours.",
      "Consolidation and deconsolidation are done at the port where that avoids an inland movement, and inland where the cargo is going to a single receiver.",
    ],
    points: [
      "Bonded and open storage",
      "Consolidation and deconsolidation",
      "Stock reporting against your references",
      "Release against instruction",
    ],
    facts: [
      { key: "Locations", value: "TODO" },
      { key: "Regimes", value: "Bonded · open" },
      { key: "Reporting", value: "Against customer references" },
    ],
  },
  {
    slug: "inland-transport",
    category: "logistics",
    icon: "truck",
    title: "Inland transport",
    summary: "Road and rail haulage to and from the port, planned against the sailing.",
    intro:
      "Pre-carriage and onward delivery arranged as part of the same booking, so the truck arrives before the cut-off and the wagon is booked before the vessel berths.",
    body: [
      "Road haulage is used for time-critical and short-haul legs; rail for volume across the corridor. The choice is made per shipment against the delivery date, not by default.",
      "Where a connecting block train is involved, the container is planned onto a specific departure at the time of booking — not offered to the terminal on arrival and left to find a slot.",
    ],
    points: [
      "Pre-carriage to the loading port",
      "Onward delivery from the discharge port",
      "Road and rail, chosen per shipment",
      "Block-train slots booked with the sailing",
    ],
    facts: [
      { key: "Modes", value: "Road · rail" },
      { key: "Planning", value: "Booked with the sea leg" },
      { key: "Coverage", value: "Caspian littoral and Central Asia" },
    ],
  },

  {
    slug: "project-cargo",
    category: "specialised",
    icon: "crane",
    title: "Project & heavy lift",
    summary: "Out-of-gauge and heavy-lift consignments, from route survey to final positioning.",
    intro:
      "Project cargo is an engineering exercise with a vessel in the middle of it. The work starts with a route survey and a lifting study, months before anything moves.",
    body: [
      "Every constraint on the route is measured rather than assumed: bridge clearances, axle loadings, turning radii, quay capacity and crane reach. The transport plan is then built to the tightest of them.",
      "Lifting plans, lashing calculations and method statements are issued for approval before mobilisation, and permits are applied for against the approved plan rather than a provisional one.",
    ],
    points: [
      "Route survey and feasibility study",
      "Lifting plans and lashing calculations",
      "Permits and escort arrangement",
      "On-site supervision through to positioning",
    ],
    facts: [
      { key: "Lead time", value: "Plan early — permits govern the schedule" },
      { key: "Deliverables", value: "Route survey · lifting plan · method statement" },
      { key: "Supervision", value: "Load, voyage and discharge" },
    ],
  },
  {
    slug: "energy-logistics",
    category: "specialised",
    icon: "shield",
    title: "Oil & gas logistics",
    summary: "Drilling, subsea and field-development cargo moved to the standards the sector audits against.",
    intro:
      "Energy cargo comes with an audit trail attached. Documentation, HSSE compliance and traceability are part of the scope, not an add-on to it.",
    body: [
      "Movements are executed against the operator's own HSSE requirements, with permits, toolbox talks and lift plans recorded and retained. Subcontractors are held to the same standard and audited on the same cycle.",
      "Materials management, marshalling and back-loading are handled so equipment returning from the field is tracked as carefully as equipment going out.",
    ],
    points: [
      "Drilling, subsea and field-development cargo",
      "Operator HSSE compliance and documentation",
      "Marshalling yards and materials management",
      "Back-load and equipment return tracking",
    ],
    facts: [
      { key: "Compliance", value: "To operator HSSE requirements" },
      { key: "Traceability", value: "Full documentary audit trail" },
      { key: "Subcontractors", value: "Audited to the same standard" },
    ],
  },
  {
    slug: "chartering",
    category: "specialised",
    icon: "ship",
    title: "Chartering & brokerage",
    summary: "Voyage and time charters on the Caspian, arranged and supervised by people who operate there.",
    intro:
      "Where a scheduled sailing does not fit the cargo, we fix tonnage for it — and then operate the voyage rather than handing over a recap and walking away.",
    body: [
      "Tonnage is vetted before it is offered: certification, class status, previous cargoes and operational record. A cheap fixture on an unsuitable ship is not a saving.",
      "Charter parties are negotiated with the laytime and demurrage terms the actual port conditions justify, because we know what those conditions are.",
    ],
    points: [
      "Voyage and time charters",
      "Tonnage vetting before offer",
      "Charter party negotiation and laytime terms",
      "Voyage operation and post-fixture management",
    ],
    facts: [
      { key: "Coverage", value: "Caspian Sea tonnage" },
      { key: "Vetting", value: "Certification · class · operational record" },
      { key: "Post-fixture", value: "Operated, not just fixed" },
    ],
  },
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export function servicesByCategory(categoryId) {
  return services.filter((service) => service.category === categoryId);
}

export const servicesPage = {
  meta: {
    title: "Services",
    description:
      "Ocean transport, port agency and freight forwarding across the Caspian Sea — container, RoRo, breakbulk, project cargo, customs clearance and inland haulage.",
  },
  eyebrow: "What we do",
  title: "Everything between the booking and the release.",
  lead:
    "Sixteen services across four disciplines, delivered by one operator. Most shippers use several of them under a single contract — which is the point.",
};
