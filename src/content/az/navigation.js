/**
 * Naviqasiya ağacı, Azərbaycan dilində.
 *
 * Struktur ingiliscə ilə eynidir — yalnız etiketlər tərcümə olunub. Ünvanlar
 * (`href`) prefikssiz yazılır: `/az` prefiksini `content/index.js` avtomatik
 * əlavə edir, ona görə burada heç vaxt `/az` yazmaq lazım deyil.
 */

export const utilityNav = [
  { label: "Reys cədvəli", href: "/network/schedule", icon: "calendar" },
  { label: "Yükü izlə", href: "/track", icon: "track" },
  { label: "Agentlik şəbəkəsi", href: "/network/agents", icon: "pin" },
];

export const primaryNav = [
  {
    id: "services",
    label: "Xidmətlər",
    href: "/services",
    groups: [
      {
        title: "Dəniz nəqliyyatı",
        links: [
          { label: "Konteyner daşımaları", href: "/services/container-shipping" },
          { label: "RoRo və təkərli yük", href: "/services/roro" },
          { label: "Parça və ümumi yük", href: "/services/breakbulk" },
          { label: "Quru tökmə yük", href: "/services/dry-bulk" },
          { label: "Maye tökmə yük", href: "/services/liquid-bulk" },
        ],
      },
      {
        title: "Liman və agentlik",
        links: [
          { label: "Liman agentliyi", href: "/services/port-agency" },
          { label: "Gəmi təchizatı və ekipaj", href: "/services/husbandry" },
          { label: "Yükləmə-boşaltma koordinasiyası", href: "/services/stevedoring" },
          { label: "Yanacaq və təchizat", href: "/services/bunkering" },
        ],
      },
      {
        title: "Logistika",
        links: [
          { label: "Yük ekspedisiyası", href: "/services/freight-forwarding" },
          { label: "Gömrük rəsmiləşdirilməsi", href: "/services/customs-clearance" },
          { label: "Anbar xidmətləri", href: "/services/warehousing" },
          { label: "Quru daşımaları", href: "/services/inland-transport" },
        ],
      },
      {
        title: "İxtisaslaşmış",
        links: [
          { label: "Layihə və ağır yük", href: "/services/project-cargo" },
          { label: "Neft-qaz logistikası", href: "/services/energy-logistics" },
          { label: "Çarter və brokerlik", href: "/services/chartering" },
          { label: "Bütün xidmətlər", href: "/services", strong: true },
        ],
      },
    ],
    feature: {
      eyebrow: "Seçilmiş",
      title: "Bir müqavilə, kanardan qapıya",
      text: "Dəniz hissəsi, limanda emal, gömrük və son çatdırılma — hamısı bir əməliyyat masasından idarə olunur.",
      href: "/services",
      linkLabel: "Xidmətlərə bax",
      image: { slot: "menu-feature", width: 640, height: 360 },
    },
  },
  {
    id: "network",
    label: "Şəbəkə",
    href: "/network",
    groups: [
      {
        title: "Marşrutlar",
        links: [
          { label: "Ticarət marşrutları", href: "/network" },
          { label: "Reys cədvəli", href: "/network/schedule" },
          { label: "Agentlik şəbəkəsi", href: "/network/agents" },
        ],
      },
      {
        title: "Limanlar",
        links: [
          { label: "Bakı / Ələt, Azərbaycan", href: "/network/ports/baku-alat" },
          { label: "Aktau, Qazaxıstan", href: "/network/ports/aktau" },
          { label: "Kuryk, Qazaxıstan", href: "/network/ports/kuryk" },
          { label: "Türkmənbaşı, Türkmənistan", href: "/network/ports/turkmenbashy" },
          { label: "Bəndər-Ənzəli, İran", href: "/network/ports/bandar-anzali" },
        ],
      },
      {
        title: "Dəhlizlər",
        links: [
          { label: "Orta Dəhliz", href: "/network#middle-corridor" },
          { label: "Şimal–Cənub dəhlizi", href: "/network#north-south" },
        ],
      },
      {
        title: "Əlaqə saxlayın",
        links: [
          { label: "Qiymət sorğusu", href: "/quote" },
          { label: "Bölmə ilə əlaqə", href: "/contact" },
        ],
      },
    ],
    feature: {
      eyebrow: "Əhatə",
      title: "Beş Xəzəryanı ölkə, bir operator",
      text: "Bakıdan sabit günlü yola düşmələr, Orta Dəhliz boyunca dəmir yolu və avtomobil bağlantıları ilə.",
      href: "/network",
      linkLabel: "Şəbəkəyə bax",
      image: { slot: "network-map", width: 640, height: 360 },
    },
  },
  { id: "fleet", label: "Donanma", href: "/fleet" },
  {
    id: "company",
    label: "Şirkət",
    href: "/about",
    groups: [
      {
        title: "Haqqımızda",
        links: [
          { label: "Biz kimik", href: "/about" },
          { label: "Rəhbərlik", href: "/about/leadership" },
        ],
      },
      {
        title: "Standartlar",
        links: [
          { label: "HSSEQ siyasəti", href: "/hsseq" },
          { label: "Sertifikatlar", href: "/certifications" },
        ],
      },
      {
        title: "Media",
        links: [{ label: "Xəbərlər", href: "/news" }],
      },
      {
        title: "İnsanlar",
        links: [{ label: "Karyera", href: "/careers" }],
      },
    ],
    feature: {
      eyebrow: "Standartlar",
      title: "Auditdən keçmiş, sertifikatlı, cavabdeh",
      text: "Təhlükəsizlik və keyfiyyət idarəetməsi ISM, ISO 9001 və ISO 14001 tələblərinə uyğundur.",
      href: "/certifications",
      linkLabel: "Sertifikatlara bax",
      image: { slot: "company", width: 640, height: 360 },
    },
  },
  { id: "sustainability", label: "Davamlılıq", href: "/sustainability" },
  { id: "contact", label: "Əlaqə", href: "/contact" },
];

export const footerNav = [
  {
    title: "Xidmətlər",
    links: [
      { label: "Konteyner daşımaları", href: "/services/container-shipping" },
      { label: "RoRo və təkərli yük", href: "/services/roro" },
      { label: "Parça yük", href: "/services/breakbulk" },
      { label: "Layihə və ağır yük", href: "/services/project-cargo" },
      { label: "Liman agentliyi", href: "/services/port-agency" },
      { label: "Yük ekspedisiyası", href: "/services/freight-forwarding" },
    ],
  },
  {
    title: "Şəbəkə",
    links: [
      { label: "Ticarət marşrutları", href: "/network" },
      { label: "Reys cədvəli", href: "/network/schedule" },
      { label: "Agentlik şəbəkəsi", href: "/network/agents" },
      { label: "Çağırdığımız limanlar", href: "/network#ports" },
    ],
  },
  {
    title: "Şirkət",
    links: [
      { label: "Haqqımızda", href: "/about" },
      { label: "Donanma", href: "/fleet" },
      { label: "Davamlılıq", href: "/sustainability" },
      { label: "HSSEQ", href: "/hsseq" },
      { label: "Sertifikatlar", href: "/certifications" },
      { label: "Karyera", href: "/careers" },
    ],
  },
  {
    title: "Müştəri alətləri",
    links: [
      { label: "Qiymət sorğusu", href: "/quote" },
      { label: "Yükü izlə", href: "/track" },
      { label: "Daşıma şərtləri", href: "/legal/terms-of-carriage" },
      { label: "Əlaqə", href: "/contact" },
    ],
  },
];

export const legalNav = [
  { label: "Məxfilik bildirişi", href: "/legal/privacy" },
  { label: "Kuki siyasəti", href: "/legal/cookies" },
  { label: "Hüquqi məlumat", href: "/legal/terms" },
  { label: "Əlçatanlıq", href: "/legal/accessibility" },
];
