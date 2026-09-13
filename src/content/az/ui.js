/**
 * İnterfeys mətnləri, Azərbaycan dilində.
 *
 * Açarlar `en/ui.js` ilə eyni olmalıdır — çatışmayan açar səhifədə `undefined`
 * kimi görünür, bu isə həm baxışda, həm QA yoxlamasında dərhal tutulur.
 */
export const ui = {
  /* Yalnız ekran oxuyucularına çatdırılır. Yenə də tərcümə olunur: azərbaycanca
     səhifədə ekran oxuyucusu ingiliscə orientir adları oxumamalıdır. */
  a11y: {
    breadcrumb: "Naviqasiya izi",
    primaryNav: "Əsas menyu",
    quickActions: "Sürətli əməliyyatlar",
    siteMenu: "Sayt menyusu",
    openMenu: "Menyunu aç",
    closeMenu: "Menyunu bağla",
    contactUs: "Bizimlə əlaqə",
    homeLink: "Caspian Sea Line — ana səhifə",
    skipToContent: "Əsas məzmuna keç",
    languageLabel: "Dil",
    laneDetails: "Marşrut təfərrüatları",
    serviceDetails: "Xidmət təfərrüatları",
    portDetails: "Liman təfərrüatları",
    otherLegalDocuments: "Digər hüquqi sənədlər",
    moreNews: "Digər xəbərlər",
    keyFigures: "Əsas göstəricilər",
    targets: "Hədəflər",
    desks: "Bölmələr",
    contactDetails: "Əlaqə məlumatları",
    whatHappensNext: "Sonra nə olur",
    laneTableCaption: "Caspian Sea Line marşrutları, tezliyi, tranzit müddəti və yük növləri",
    scheduleCaption: "Marşrutlar üzrə elan olunmuş yola düşmə günləri, tezlik və tranzit müddəti",
    certificationsCaption: "Mövcud sertifikatlar, verən qurum, əhatə dairəsi və cari status",
  },

  /* Təkrarlanan qısa sözlər. Bir sözdən çox səhifədə istifadə olunursa, o,
     buradadır — belədə iki yer bir-birindən ayrılmır. */
  common: {
    home: "Ana səhifə",
    read: "Oxu",
    readMore: "Ətraflı",
    explore: "Bax",
    allLocations: "Bütün ünvanlar",
    allReleases: "Bütün xəbərlər",
    notFound: "Tapılmadı",
    telephone: "Telefon",
    email: "E-poçt",
    hours: "İş saatları",
    operations: "Əməliyyat",
    emergency: "Təcili",
    general: "Ümumi",
    bookings: "Sifarişlər",
    headOffice: "Baş ofis",
    getQuote: "Qiymət al",
    ourApproach: "Yanaşmamız",
    rightsReserved: "Bütün hüquqlar qorunur.",
  },

  /* Səhifə faylında yazılan bölmə başlıqları — mövzunu yox, strukturu
     adlandırdıqları üçün content modulunda deyil, buradadır. */
  sections: {
    tradeLanes: "Marşrutlar",
    tradeLanesTitle: "Əsas marşrutlarda sabit günlü yola düşmələr.",
    ports: "Limanlar",
    portsWeCall: "Çağırdığımız limanlar",
    portsTitle: "Çağırdığımız limanlar.",
    portsLead: "Həcm imkan verən yerdə öz ofisimiz, qalan hər yerdə təyin olunmuş agent.",
    corridors: "Dəhlizlər",
    corridorsTitle: "Üzərində dayandığımız iki dəhliz.",
    officesAndAgents: "Ofislər və agentlər",
    officesAndAgentsSub: "Çağırdığımız hər liman üzrə birbaşa əlaqə, üstəgəl Bakıdakı baş ofis.",
    facilities: "İnfrastruktur",
    portFacts: "Liman məlumatları",
    whatIsIncluded: "Nə daxildir",
    atAGlance: "Bir baxışda",
    askQuestion: "Sual verin",
    moreIn: "Digər xidmətlər:",
    otherServicesIn: "Bu bölmədəki digər xidmətlər:",
    news: "Elanlar və yeniliklər.",
    ourPresence: "Bizim iştirakımız",
    appointedAgent: "Təyin olunmuş agent",
    portCoverage: "Liman əhatəsi",
    headOfficeBaku: "Baş ofis — Bakı",
    operationsDesk: "Əməliyyat masası",
    operationsDeskLead: "Cari yükləmələr, liman çağırışları və cədvəl sualları, 24 / 7.",
    preferToTalk: "Danışmağa üstünlük verirsiniz?",
    quickLinks: "Sürətli keçidlər",
    footerCta: "Əməliyyat masası, gecə-gündüz.",
    footerCtaMeta: "Sifarişlər və əməliyyat",
  },

  /* Cədvəl başlıqları. */
  table: {
    tradeLane: "Marşrut",
    sailingDays: "Yola düşmə günləri",
    frequency: "Tezlik",
    transit: "Tranzit",
    cargo: "Yük",
    standard: "Standart",
    issuingBody: "Verən qurum",
    scope: "Əhatə dairəsi",
    status: "Status",
    unlocode: "UN/LOCODE",
  },

  /* Dürüst bildirişlər. Hər biri ona görə var ki, nəsə həqiqətən hazır deyil —
     və bunu gizlətmək əvəzinə açıq yazır. */
  notices: {
    contentToSupply: "Məzmun təqdim olunmalıdır",
    placeholderData: "Müvəqqəti məlumat",
    verifyBeforePublishing: "Dərc etməzdən əvvəl yoxlayın",
    notConnectedYet: "Hələ qoşulmayıb",
  },

  /* Sorğu və əlaqə formaları. */
  form: {
    name: "Adınız",
    company: "Şirkət",
    email: "E-poçt",
    phone: "Telefon",
    phoneHint: "Məcburi deyil, amma cari yükləmə üçün daha sürətlidir.",
    origin: "Yükləmə yeri",
    originHint: "Şəhər, liman və ya zavod.",
    destination: "Təyinat yeri",
    cargoType: "Yükün növü",
    scope: "Tələb olunan xidmət",
    cargoDetails: "Yük haqqında təfərrüat",
    cargoDetailsHint: "Çəki, ölçülər, yer sayı, qablaşdırma və qeyri-adi olan hər şey.",
    deliveryDate: "Tələb olunan çatdırılma tarixi",
    subject: "Mövzu",
    message: "Mesaj",
    honeypot: "Bu xananı boş saxlayın",
    sending: "Göndərilir…",
    submitQuote: "Qiymət sorğusu göndər",
    submitMessage: "Mesajı göndər",
    success: "Təşəkkür edirik — operator adətən bir iş günü ərzində sizinlə əlaqə saxlayacaq.",
    failureTitle: "Göndərilmədi",
    unconfiguredTitle: "Form ünvanı qoşulmayıb",
    selectPlaceholder: "Seçin…",
    successTitle: "Göndərildi",
    failureBody: "Bizim tərəfdə nəsə səhv getdi. Zəhmət olmasa yazın:",
    unconfiguredBody:
      "TODO(build): bu formanın hələ backend-i yoxdur, ona görə heç nə göndərilmədi. NEXT_PUBLIC_FORM_ENDPOINT təyin edin — göndərmə heç bir dəyişiklik olmadan işləyəcək. Bu vaxta qədər yazın:",
    privacyNote: "Bu məlumatları yalnız sorğunuza cavab vermək üçün istifadə edirik. Baxın:",
    privacyLink: "məxfilik bildirişi",
  },

  /* Bir yazı üçün paylaşım kartındakı üst yazı. */
  card: {
    service: "Xidmət",
    news: "Xəbər",
    port: "Liman",
    legal: "Hüquqi",
  },

  /* 404. */
  notFound: {
    metaTitle: "Səhifə tapılmadı",
    eyebrow: "Xəta 404",
    title: "Bu səhifə cədvəldə yoxdur.",
    lead:
      "Keçdiyiniz ünvan mövcud deyil və ya səhifə köçürülüb. Aşağıdakı keçidlər insanların ən çox axtardığı səhifələri əhatə edir.",
    backHome: "Ana səhifəyə qayıt",
  },
};
