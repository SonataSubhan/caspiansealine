/**
 * About, HSSEQ, certifications and careers.
 *
 * TODO(content): leadership names, certification numbers and dates must all
 * come from the client. Nothing here is invented as fact — the placeholders
 * are visibly marked.
 */

export const about = {
  meta: {
    title: "About us",
    description:
      "Caspian Sea Line is a Trans-Caspian shipping company operating fixed-day sailings, its own port agency network and a single operations desk from Baku, Azerbaijan.",
  },
  eyebrow: "Who we are",
  title: "A Caspian operator built for the Middle Corridor.",
  lead:
    "One contract, one point of contact and one set of documents — from the booking to the release at destination.",
  paragraphs: [
    "The Caspian is a short sea with long consequences. A missed berth window in Alat becomes a missed train in Aktau, and a missed train becomes a delivery that slips by a week. Caspian Sea Line is built around that reality.",
    "We operate fixed-day sailings on the main Trans-Caspian lanes, hold our own agency presence in the ports we call, and run a single operations desk that owns the shipment end to end. The commercial argument for that structure is simple: when the carrier and the agent are the same company, nobody has to be persuaded that the schedule matters.",
    "The company is headquartered in Baku and works across all five Caspian littoral states, with appointed agents where our own offices do not reach.",
  ],
  principles: [
    {
      icon: "headset",
      title: "Answer the question",
      text: "A named operator owns each shipment. You get an answer about your cargo from someone who already knows what it is.",
    },
    {
      icon: "clock",
      title: "Publish the schedule",
      text: "Fixed sailing days, published in advance, so a shipper can plan production backwards from the vessel.",
    },
    {
      icon: "doc-check",
      title: "Document before the border",
      text: "Declarations and permits prepared while the cargo is still inland, not while it waits at a crossing.",
    },
    {
      icon: "shield",
      title: "Say what went wrong",
      text: "A delay reported the same day is a problem. A delay reported in the final account is a dispute.",
    },
  ],
};

export const leadership = {
  meta: {
    title: "Leadership",
    description: "The management team of Caspian Sea Line.",
  },
  eyebrow: "Management",
  title: "The people accountable for the schedule.",
  lead: "TODO(content): supply names, titles, short biographies and portraits for the management team.",
  // TODO(content): replace these placeholders entirely.
  people: [
    { name: "TODO", role: "Chief Executive Officer" },
    { name: "TODO", role: "Chief Operating Officer" },
    { name: "TODO", role: "Commercial Director" },
    { name: "TODO", role: "HSSEQ Manager" },
  ],
};

export const hsseq = {
  meta: {
    title: "HSSEQ policy",
    description:
      "Health, safety, security, environment and quality management at Caspian Sea Line: one management system across the fleet and the agency offices, externally audited.",
  },
  eyebrow: "Standards",
  title: "One management system, audited on one cycle.",
  lead:
    "Health, safety, security, environment and quality are not four programmes. They are one system, applied to the fleet and the shore offices alike.",
  paragraphs: [
    "Procedures are written to be used at three in the morning by someone under pressure, which means they are short, specific and rehearsed. Drills are run on a published programme and the findings are closed out with a named owner and a date.",
    "Incidents and near-misses are reported without blame and reviewed for cause rather than fault. An organisation that punishes reporting stops hearing about the problems it most needs to know about.",
  ],
  commitments: [
    { icon: "shield", title: "Safety", text: "Safety management aligned to the ISM Code, with drills, audits and close-out tracked to a named owner." }, // TODO(content): confirm ISM applicability
    { icon: "doc-check", title: "Quality", text: "Documented procedures for every recurring operation, reviewed annually and after any incident." },
    { icon: "leaf", title: "Environment", text: "Prevention-first environmental standard for a closed sea. See our sustainability approach." },
    { icon: "headset", title: "Security", text: "Access control, cargo screening and sanctions compliance applied to every booking." },
  ],
};

export const certifications = {
  meta: {
    title: "Certifications",
    description:
      "Certifications and external audits held by Caspian Sea Line, including safety, quality and environmental management standards.",
  },
  eyebrow: "Assurance",
  title: "Audited by people who do not work for us.",
  lead:
    "A management system nobody checks is a document. These are the external audits and certifications we hold.",
  notice:
    "TODO(content): confirm which certifications are actually held, the issuing body, the certificate number and the validity dates. Remove any that are not current — an unverifiable certification claim is worse than none.",
  items: [
    { name: "ISM Code", body: "TODO — issuing authority", scope: "Safety management, fleet", status: "TODO" },
    { name: "ISO 9001", body: "TODO — certification body", scope: "Quality management", status: "TODO" },
    { name: "ISO 14001", body: "TODO — certification body", scope: "Environmental management", status: "TODO" },
    { name: "ISO 45001", body: "TODO — certification body", scope: "Occupational health and safety", status: "TODO" },
  ],
};

export const careers = {
  meta: {
    title: "Careers",
    description:
      "Seagoing and shore-based careers at Caspian Sea Line — operations, agency, chartering, customs and HSSEQ roles across the Caspian.",
  },
  eyebrow: "Work with us",
  title: "Shipping is a people business with ships in it.",
  lead:
    "Shore-based roles in Baku and the agency offices, and seagoing positions across the fleet.",
  paragraphs: [
    "We hire for judgement. Most of what goes wrong on a Caspian crossing is not in a procedure, and the people who handle it well are the ones who understand why the procedure exists.",
    "TODO(content): describe the actual hiring process, benefits and training offered, and link to real vacancies or an application mailbox.",
  ],
  areas: [
    { icon: "ship", title: "Seagoing", text: "Deck and engine positions across the fleet. TODO(content): list ranks and requirements." },
    { icon: "headset", title: "Operations & agency", text: "Port call handling, booking desk and customer operations." },
    { icon: "doc-check", title: "Customs & compliance", text: "Declarations, permits and sanctions screening." },
    { icon: "route", title: "Commercial", text: "Chartering, pricing and business development." },
  ],
};
