/**
 * Ticarət marşrutları, limanlar və cədvəl.
 *
 * TODO(content): aşağıdakı hər tezlik, tranzit müddəti və liman məlumatı
 * təxminidir. Dərc etməzdən əvvəl əməliyyat bölməsi ilə təsdiqləyin.
 */

export const lanes = [
  {
    id: "baku-aktau",
    lane: "Bakı (Ələt) — Aktau",
    from: "Bakı (Ələt)",
    to: "Aktau",
    frequency: "Həftədə 3 reys",
    transit: "18–24 s",
    cargo: "Konteyner, RoRo, parça yük",
    days: ["B.e", "Ç.a", "Cümə"],
  },
  {
    id: "baku-kuryk",
    lane: "Bakı (Ələt) — Kuryk",
    from: "Bakı (Ələt)",
    to: "Kuryk",
    frequency: "Həftədə 4 reys",
    transit: "16–20 s",
    cargo: "RoRo, treylerlər, layihə",
    days: ["B.e", "Ç.a", "C.a", "Şənbə"],
  },
  {
    id: "baku-turkmenbashy",
    lane: "Bakı (Ələt) — Türkmənbaşı",
    from: "Bakı (Ələt)",
    to: "Türkmənbaşı",
    frequency: "Həftədə 2 reys",
    transit: "20–26 s",
    cargo: "Konteyner, parça yük, tökmə yük",
    days: ["Ç.a", "Şənbə"],
  },
  {
    id: "baku-anzali",
    lane: "Bakı (Ələt) — Bəndər-Ənzəli",
    from: "Bakı (Ələt)",
    to: "Bəndər-Ənzəli",
    frequency: "Həftəlik",
    transit: "30–36 s",
    cargo: "Parça yük, ümumi yük",
    days: ["C.a"],
  },
  {
    id: "astrakhan-baku",
    lane: "Həştərxan / Mahaçqala — Bakı",
    from: "Həştərxan / Mahaçqala",
    to: "Bakı (Ələt)",
    frequency: "Tələb olduqda",
    transit: "36–48 s",
    cargo: "Quru tökmə yük, polad, layihə",
    days: ["Tələb olduqda"],
  },
];

export const ports = [
  {
    slug: "baku-alat",
    name: "Bakı / Ələt",
    country: "Azərbaycan",
    unlocode: "AZBAK", // TODO(content): Ələt terminalının kodunu təsdiqlə
    role: "Bütün Caspian Sea Line marşrutları üçün əsas liman və mərkəz.",
    intro:
      "Ələtdəki Bakı Limanı Orta Dəhlizin qərb qapısı və bütün reyslərimizin mərkəzidir. Konteyner, RoRo və ümumi yük terminalları azad iqtisadi zona və birbaşa dəmir yolu bağlantısı ilə yanaşı yerləşir.",
    facilities: ["Konteyner terminalı", "RoRo trapı", "Ümumi yük kanarları", "Dəmir yolu bağlantısı", "Azad iqtisadi zona"],
    facts: [
      { key: "Ölkə", value: "Azərbaycan" },
      { key: "Bizim iştirakımız", value: "Öz ofisimiz" },
      { key: "Xidmət edilən marşrutlar", value: "Hamısı" },
      { key: "Davam nəqliyyatı", value: "Dəmir yolu · avtomobil" },
    ],
  },
  {
    slug: "aktau",
    name: "Aktau",
    country: "Qazaxıstan",
    unlocode: "KZAAU",
    role: "Konteyner və ümumi yük üçün əsas Qazaxıstan qapısı.",
    intro:
      "Aktau Xəzər keçidini Qazaxıstan dəmir yolu şəbəkəsinə, oradan da Mərkəzi Asiya və Çinə bağlayır. Blok qatarla şərqə davam edən konteyner yükü üçün təbii boşaltma limanıdır.",
    facilities: ["Konteyner terminalı", "Ümumi yük kanarları", "Taxıl terminalı", "Dəmir yolu bağlantısı"],
    facts: [
      { key: "Ölkə", value: "Qazaxıstan" },
      { key: "Bizim iştirakımız", value: "Öz ofisimiz" },
      { key: "Bakıdan tipik tranzit", value: "18–24 s" },
      { key: "Davam nəqliyyatı", value: "Dəmir yolu · avtomobil" },
    ],
  },
  {
    slug: "kuryk",
    name: "Kuryk",
    country: "Qazaxıstan",
    unlocode: "KZKUR",
    role: "Aktaudan cənubda yerləşən ixtisaslaşmış RoRo və bərə terminalı.",
    intro:
      "Kuryk təkərli yük üçün tikilib və treylerləri, təkərli texnikanı Xəzər üzərindən keçirməyin ən sürətli yoludur. Dövriyyə günlərlə yox, saatlarla ölçülür.",
    facilities: ["RoRo terminalı", "Dəmir yolu bərə kanarı", "Treyler dayanacağı", "Dəmir yolu bağlantısı"],
    facts: [
      { key: "Ölkə", value: "Qazaxıstan" },
      { key: "Bizim iştirakımız", value: "Təyin olunmuş agent" },
      { key: "Bakıdan tipik tranzit", value: "16–20 s" },
      { key: "Yük istiqaməti", value: "RoRo · treylerlər · layihə" },
    ],
  },
  {
    slug: "turkmenbashy",
    name: "Türkmənbaşı",
    country: "Türkmənistan",
    unlocode: "TMKRW",
    role: "Konteyner, parça və tökmə yük üçün Türkmənistan qapısı.",
    intro:
      "Türkmənbaşıdakı beynəlxalq dəniz limanı konteyner, ümumi yük, tökmə yük və bərə hərəkətini emal edir və Türkmənistana, oradan da Əfqanıstan və İrana gedən yüklər üçün giriş nöqtəsidir.",
    facilities: ["Konteyner terminalı", "Ümumi yük kanarları", "Tökmə yük terminalı", "Bərə terminalı"],
    facts: [
      { key: "Ölkə", value: "Türkmənistan" },
      { key: "Bizim iştirakımız", value: "Təyin olunmuş agent" },
      { key: "Bakıdan tipik tranzit", value: "20–26 s" },
      { key: "Davam nəqliyyatı", value: "Dəmir yolu · avtomobil" },
    ],
  },
  {
    slug: "bandar-anzali",
    name: "Bəndər-Ənzəli",
    country: "İran",
    unlocode: "IRBAZ",
    role: "Cənubi Xəzərdə həftəlik xidmət göstərdiyimiz İran limanı.",
    intro:
      "Bəndər-Ənzəli İranın əsas Xəzər limanı və bizim cənub çağırışımızdır. Yük əsasən parça və ümumi yükdür; İran avtomobil şəbəkəsinə və Şimal–Cənub dəhlizinə bağlanır.",
    facilities: ["Ümumi yük kanarları", "Parça yükün emalı", "Avtomobil bağlantısı"],
    facts: [
      { key: "Ölkə", value: "İran" },
      { key: "Bizim iştirakımız", value: "Təyin olunmuş agent" },
      { key: "Bakıdan tipik tranzit", value: "30–36 s" },
      { key: "Uyğunluq", value: "Sanksiya yoxlamasına tabedir" },
    ],
  },
];

export const additionalPorts = ["Əmirabad", "Həştərxan", "Mahaçqala"];

export const corridors = [
  {
    id: "middle-corridor",
    title: "Orta Dəhliz",
    text: "Xəzəraşırı Beynəlxalq Nəqliyyat Marşrutu: Çin və Mərkəzi Asiyadan Qazaxıstan, Xəzər keçidi, Azərbaycan və Gürcüstan vasitəsilə Avropaya. Bizim reyslərimiz onun ortasındakı dəniz halqasıdır və bağlayıcı dəmir yolu yerləri dəniz hissəsindən sonra yox, onunla birlikdə sifariş olunur.",
  },
  {
    id: "north-south",
    title: "Şimal–Cənub dəhlizi",
    text: "Rusiya və şimali Xəzərdən İrana və Körfəzə. Həştərxan və Mahaçqaladan tələb olduqda, Bəndər-Ənzəliyə isə həftəlik xidmət göstərilir; hər sifarişə sanksiya və uyğunluq yoxlaması tətbiq olunur.",
  },
];

export const networkPage = {
  meta: {
    title: "Şəbəkə və marşrutlar",
    description:
      "Caspian Sea Line marşrutları, limanları və tranzit müddətləri: Bakı (Ələt), Aktau, Kuryk, Türkmənbaşı, Bəndər-Ənzəli, Əmirabad, Həştərxan və Mahaçqala.",
  },
  eyebrow: "Hara üzürük",
  title: "Beş Xəzəryanı ölkə, bir operator.",
  lead:
    "Əsas marşrutlarda sabit günlü yola düşmələr, tələb olduqda əlavə liman çağırışları ilə. Tranzit müddətləri limandan-limanadır və terminalda gözləmə daxil deyil.",
};

export const schedulePage = {
  meta: {
    title: "Reys cədvəli",
    description:
      "Caspian Sea Line-ın hər marşrutu üzrə elan olunmuş yola düşmə günləri və tranzit müddətləri, sifariş son müddətləri və cədvəl yeniliyi üçün əlaqə məlumatları.",
  },
  eyebrow: "Yola düşmələr",
  title: "Reys cədvəli.",
  lead:
    "Cari mövsüm üçün elan olunmuş yola düşmə günləri. Faktiki yola düşmə sifariş zamanı təsdiqlənir və Xəzərdə hava, buz və kanar imkanına görə dəyişə bilər.",
  notice:
    "TODO(content): bu səhifə canlı cədvəl axını və ya əməliyyat komandasının yenilədiyi CMS yazısı ilə idarə olunmalıdır. Aşağıdakı cədvəl strukturdur, məlumat deyil.",
};

export const agentsPage = {
  meta: {
    title: "Agentlik şəbəkəsi",
    description:
      "Caspian Sea Line-ın Azərbaycan, Qazaxıstan, Türkmənistan, İran və Rusiyadakı ofisləri və təyin olunmuş liman agentləri.",
  },
  eyebrow: "Ofislər və agentlər",
  title: "Çağırdığımız hər limanda bizim adamımız var.",
  lead:
    "Həcm imkan verən yerdə öz ofisimiz, qalan hər yerdə təyin olunmuş agent — hər iki halda eyni hesabatlılıq standartı ilə.",
};
