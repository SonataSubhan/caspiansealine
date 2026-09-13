/**
 * Donanma.
 *
 * TODO(content): gəmi adları Bakı küləklərinin adlarından (Xəzri, Gilavar) və
 * Abşeron yarımadasından qurulmuş müvəqqəti adlardır. Bütün texniki
 * göstəricilər sözün əsl mənasında TODO-dur. Bütün massivi real donanma
 * siyahısı ilə əvəz edin.
 */

export const vessels = [
  {
    slug: "csl-absheron",
    name: "CSL Absheron",
    type: "Konteyner / ümumi yük",
    accent: "cyan",
    summary:
      "Bakı–Aktau və Bakı–Türkmənbaşı marşrutlarında konteyner və ümumi yük üçün çoxməqsədli tonaj.",
    specs: [
      { key: "Tutum", value: "TODO TEU" },
      { key: "Dedveyt", value: "TODO DWT" },
      { key: "Ümumi uzunluq", value: "TODO m" },
      { key: "Tikilib", value: "TODO" },
      { key: "Bayraq", value: "Azərbaycan" },
      { key: "IMO nömrəsi", value: "TODO" },
    ],
  },
  {
    slug: "csl-khazri",
    name: "CSL Khazri",
    type: "RoRo / treylerlər",
    accent: "red",
    summary:
      "Sürücülü və sürücüsüz treylerlər, yük maşınları və təkərli texnika üçün təkərli yük tonajı.",
    specs: [
      { key: "Zolaq metrləri", value: "TODO lm" },
      { key: "Dedveyt", value: "TODO DWT" },
      { key: "Trap tutumu", value: "TODO t" },
      { key: "Tikilib", value: "TODO" },
      { key: "Bayraq", value: "Azərbaycan" },
      { key: "IMO nömrəsi", value: "TODO" },
    ],
  },
  {
    slug: "csl-gilavar",
    name: "CSL Gilavar",
    type: "Layihə / ağır yük",
    accent: "green",
    summary:
      "Qabaritdənkənar və layihə yükləri üçün gəmiüstü kranlarla ağır yük tonajı.",
    specs: [
      { key: "Kran tutumu", value: "TODO t" },
      { key: "Dedveyt", value: "TODO DWT" },
      { key: "Trüm ölçüləri", value: "TODO m" },
      { key: "Tikilib", value: "TODO" },
      { key: "Bayraq", value: "Azərbaycan" },
      { key: "IMO nömrəsi", value: "TODO" },
    ],
  },
];

export const fleetPage = {
  meta: {
    title: "Donanma",
    description:
      "Caspian Sea Line Xəzər dənizində çoxməqsədli, RoRo və ağır yük tonajı işlədir, yoxlanılmış çarter gəmiləri ilə tamamlayır.",
  },
  eyebrow: "Tonaj",
  title: "Gəmi yükə uyğunlaşdırılır, əksi yox.",
  lead:
    "Əsas marşrutlarda öz tonajımız, təklif edilməzdən əvvəl sertifikatlaşdırma, klass statusu və əməliyyat keçmişi üzrə yoxlanılan çarter gəmiləri ilə tamamlanır.",
  charter: {
    title: "Çarter tonajı",
    paragraphs: [
      "Yük cədvəlli reysə sığmayanda çarter bölməmiz onun üçün tonaj tapır. Hər namizəd gəmi təklif edilməzdən əvvəl sertifikatlaşdırma, klass statusu, əvvəlki yükləri və əməliyyat keçmişi üzrə yoxlanılır — uyğun olmayan gəmidə ucuz çarter qənaət deyil.",
      "Çarter reysləri öz reyslərimizi aparan eyni bölmə tərəfindən idarə olunur, ona görə hesabatlılıq və eskalasiya yolu dəyişmir.",
    ],
    link: { label: "Çarter və brokerlik", href: "/services/chartering" },
  },
};
