/**
 * Trade lanes, ports and schedule.
 *
 * TODO(content): every frequency, transit time and port fact below is an
 * estimate. Confirm with operations before launch.
 */

export const lanes = [
  {
    id: "baku-aktau",
    lane: "Baku (Alat) — Aktau",
    from: "Baku (Alat)",
    to: "Aktau",
    frequency: "3 sailings / week",
    transit: "18–24 h",
    cargo: "Container, RoRo, breakbulk",
    days: ["Mon", "Wed", "Fri"],
  },
  {
    id: "baku-kuryk",
    lane: "Baku (Alat) — Kuryk",
    from: "Baku (Alat)",
    to: "Kuryk",
    frequency: "4 sailings / week",
    transit: "16–20 h",
    cargo: "RoRo, trailers, project",
    days: ["Mon", "Tue", "Thu", "Sat"],
  },
  {
    id: "baku-turkmenbashy",
    lane: "Baku (Alat) — Türkmenbaşy",
    from: "Baku (Alat)",
    to: "Türkmenbaşy",
    frequency: "2 sailings / week",
    transit: "20–26 h",
    cargo: "Container, breakbulk, bulk",
    days: ["Tue", "Sat"],
  },
  {
    id: "baku-anzali",
    lane: "Baku (Alat) — Bandar Anzali",
    from: "Baku (Alat)",
    to: "Bandar Anzali",
    frequency: "Weekly",
    transit: "30–36 h",
    cargo: "Breakbulk, general cargo",
    days: ["Thu"],
  },
  {
    id: "astrakhan-baku",
    lane: "Astrakhan / Makhachkala — Baku",
    from: "Astrakhan / Makhachkala",
    to: "Baku (Alat)",
    frequency: "On inducement",
    transit: "36–48 h",
    cargo: "Dry bulk, steel, project",
    days: ["On inducement"],
  },
];

export const ports = [
  {
    slug: "baku-alat",
    name: "Baku / Alat",
    country: "Azerbaijan",
    unlocode: "AZBAK", // TODO(content): confirm the Alat terminal code
    role: "Home port and hub for every Caspian Sea Line lane.",
    intro:
      "The Port of Baku at Alat is the western gateway of the Middle Corridor and the hub for all of our sailings. Container, RoRo and general cargo terminals sit alongside a free economic zone and a direct rail connection.",
    facilities: ["Container terminal", "RoRo ramp", "General cargo berths", "Rail connection", "Free economic zone"],
    facts: [
      { key: "Country", value: "Azerbaijan" },
      { key: "Our presence", value: "Own office" },
      { key: "Lanes served", value: "All" },
      { key: "Onward modes", value: "Rail · road" },
    ],
  },
  {
    slug: "aktau",
    name: "Aktau",
    country: "Kazakhstan",
    unlocode: "KZAAU",
    role: "Principal Kazakh gateway for containerised and general cargo.",
    intro:
      "Aktau connects the Caspian crossing to the Kazakh rail network and onward to Central Asia and China. It is the natural discharge port for containerised cargo continuing east by block train.",
    facilities: ["Container terminal", "General cargo berths", "Grain terminal", "Rail connection"],
    facts: [
      { key: "Country", value: "Kazakhstan" },
      { key: "Our presence", value: "Own office" },
      { key: "Typical transit from Baku", value: "18–24 h" },
      { key: "Onward modes", value: "Rail · road" },
    ],
  },
  {
    slug: "kuryk",
    name: "Kuryk",
    country: "Kazakhstan",
    unlocode: "KZKUR",
    role: "Dedicated RoRo and ferry terminal south of Aktau.",
    intro:
      "Kuryk was built for rolling cargo, and it is the fastest way to move trailers and wheeled machinery across the Caspian. Turnaround is measured in hours rather than days.",
    facilities: ["RoRo terminal", "Rail ferry berth", "Trailer parking", "Rail connection"],
    facts: [
      { key: "Country", value: "Kazakhstan" },
      { key: "Our presence", value: "Appointed agent" },
      { key: "Typical transit from Baku", value: "16–20 h" },
      { key: "Cargo focus", value: "RoRo · trailers · project" },
    ],
  },
  {
    slug: "turkmenbashy",
    name: "Türkmenbaşy",
    country: "Turkmenistan",
    unlocode: "TMKRW",
    role: "Turkmen gateway for containerised, breakbulk and bulk cargo.",
    intro:
      "The international seaport at Türkmenbaşy handles container, general cargo, bulk and ferry traffic, and is the entry point for cargo moving into Turkmenistan and onward to Afghanistan and Iran.",
    facilities: ["Container terminal", "General cargo berths", "Bulk terminal", "Ferry terminal"],
    facts: [
      { key: "Country", value: "Turkmenistan" },
      { key: "Our presence", value: "Appointed agent" },
      { key: "Typical transit from Baku", value: "20–26 h" },
      { key: "Onward modes", value: "Rail · road" },
    ],
  },
  {
    slug: "bandar-anzali",
    name: "Bandar Anzali",
    country: "Iran",
    unlocode: "IRBAZ",
    role: "Iranian port on the southern Caspian, served weekly.",
    intro:
      "Bandar Anzali is the principal Iranian Caspian port and our southern calling. Cargo is predominantly breakbulk and general, connecting to the Iranian road network and the North–South corridor.",
    facilities: ["General cargo berths", "Breakbulk handling", "Road connection"],
    facts: [
      { key: "Country", value: "Iran" },
      { key: "Our presence", value: "Appointed agent" },
      { key: "Typical transit from Baku", value: "30–36 h" },
      { key: "Compliance", value: "Subject to sanctions screening" },
    ],
  },
];

export const additionalPorts = ["Amirabad", "Astrakhan", "Makhachkala"];

export const corridors = [
  {
    id: "middle-corridor",
    title: "Middle Corridor",
    text: "The Trans-Caspian International Transport Route: China and Central Asia to Europe via Kazakhstan, the Caspian crossing, Azerbaijan and Georgia. Our sailings are the sea link in the middle of it, and the connecting rail slots are booked with the sea leg rather than after it.",
  },
  {
    id: "north-south",
    title: "North–South corridor",
    text: "Russia and the northern Caspian to Iran and the Gulf. Served on inducement from Astrakhan and Makhachkala, and weekly to Bandar Anzali, with sanctions and compliance screening applied to every booking.",
  },
];

export const networkPage = {
  meta: {
    title: "Network & trade lanes",
    description:
      "Caspian Sea Line trade lanes, ports and transit times: Baku (Alat), Aktau, Kuryk, Türkmenbaşy, Bandar Anzali, Amirabad, Astrakhan and Makhachkala.",
  },
  eyebrow: "Where we sail",
  title: "Five Caspian states, one operator.",
  lead:
    "Fixed-day departures on the core lanes with additional callings on inducement. Transit times are port to port and exclude terminal dwell.",
};

export const schedulePage = {
  meta: {
    title: "Sailing schedule",
    description:
      "Published sailing days and transit times for every Caspian Sea Line trade lane, with booking cut-offs and contact details for schedule updates.",
  },
  eyebrow: "Departures",
  title: "Sailing schedule.",
  lead:
    "Published sailing days for the current season. Actual departures are confirmed at booking and can shift with weather, ice and berth availability on the Caspian.",
  notice:
    "TODO(content): this page should be driven by a live schedule feed or a CMS entry the operations team updates. The table below is the structure, not the data.",
};

export const agentsPage = {
  meta: {
    title: "Agency network",
    description:
      "Caspian Sea Line offices and appointed port agents across Azerbaijan, Kazakhstan, Turkmenistan, Iran and Russia.",
  },
  eyebrow: "Offices & agents",
  title: "Someone of ours in every port we call.",
  lead:
    "Own offices where the volume justifies it, appointed agents everywhere else — held to the same reporting standard either way.",
};
