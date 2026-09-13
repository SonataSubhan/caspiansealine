/**
 * Ana səhifə mətni.
 *
 * TODO(content): `stats`, `lanes` və `targets` içindəki hər rəqəm ağlabatan
 * müvəqqəti dəyərdir, təsdiqlənmiş fakt deyil. Bax: prototype/CONTENT-TODO.md.
 */

export const home = {
  meta: {
    title: "Xəzəraşırı dəniz daşımaları və logistika",
    description:
      "Caspian Sea Line Xəzər dənizi üzərindən konteyner, təkərli, parça və layihə yüklərini daşıyır. Dəniz nəqliyyatı, liman agentliyi, gömrük və quru daşımaları bir müqavilə altında.",
  },

  hero: {
    eyebrow: "Xəzəraşırı dəniz daşımaları və logistika",
    titleLead: "Xəzər üzərindən dəniz daşımaları,",
    titleAccent: "başdan-sona",
    titleTail: " qurulmuş.",
    lead:
      "Bakı, Aktau, Kuryk, Türkmənbaşı və Bəndər-Ənzəli arasında konteyner, təkərli, parça və layihə yükləri — liman agentliyi, gömrük və quru daşımaları bir müqavilə çərçivəsində.",
    actions: [
      { label: "Qiymət al", href: "/quote", variant: "primary", arrow: true },
      { label: "Reys cədvəli", href: "/network/schedule", variant: "secondary" },
    ],
    image: { slot: "hero", width: 1600, height: 1200, note: "dənizdə gəmi" },
  },

  quickActions: [
    {
      title: "Qiymət sorğusu",
      sub: "24 saat ərzində ilkin cavab",
      href: "/quote",
      icon: "quote",
    },
    {
      title: "Reys cədvəli",
      sub: "Yola düşmələr və tranzit müddətləri",
      href: "/network/schedule",
      icon: "calendar",
    },
    {
      title: "Yükü izlə",
      sub: "Sifariş və ya konosament nömrəsi",
      href: "/track",
      icon: "track",
    },
    {
      title: "Agent tap",
      sub: "Ofislər və liman agentləri",
      href: "/network/agents",
      icon: "pin",
    },
  ],

  intro: {
    eyebrow: "Biz kimik",
    title: "Orta Dəhliz üçün qurulmuş Xəzər operatoru.",
    statement:
      "Xəzər qısa dənizdir, nəticələri isə uzun. Ələtdə buraxılmış kanar pəncərəsi Aktauda buraxılmış qatara çevrilir, buraxılmış qatar isə bir həftə gecikən çatdırılmaya.",
    paragraphs: [
      "Caspian Sea Line məhz bu reallıq üzərində qurulub. Əsas Xəzəraşırı marşrutlarda sabit günlü reyslər işlədirik, çağırdığımız limanlarda öz agentlik iştirakımız var və yükü sifariş anından təyinat məntəqəsində təhvil verilənə qədər bir əməliyyat masası aparır.",
      "Bu o deməkdir ki, bir müqavilə, bir əlaqə nöqtəsi və bir sənəd dəsti olur — qırx konteyner, bir park treyler və ya zavoddan çıxmazdan əvvəl marşrut araşdırması tələb edən transformator daşımağınızdan asılı olmayaraq.",
    ],
    link: { label: "Şirkət haqqında ətraflı", href: "/about" },
  },

  stats: [
    { value: "5", label: "Bir əməliyyat masasından xidmət göstərilən Xəzəryanı ölkə" },
    { value: "12", unit: "+", label: "Öz ofisimiz və ya təyin olunmuş agentlə əhatə olunan liman və terminal" },
    { value: "18", unit: "s", label: "Bakı (Ələt) – Aktau tipik limandan-limana tranzit" },
    { value: "24/7", label: "Əməliyyat, agentlik və təcili reaksiya əhatəsi" },
  ],

  services: {
    eyebrow: "Nə edirik",
    title: "Üç istiqamət, bir cavabdeh operator.",
    action: { label: "Bütün xidmətlər", href: "/services" },
  },

  network: {
    eyebrow: "Hara üzürük",
    title: "Xəzər üzrə ticarət marşrutları.",
    lead:
      "Əsas marşrutlarda sabit günlü yola düşmələr, tələb olduqda əlavə liman çağırışları ilə. Tranzit müddətləri limandan-limanadır və terminalda gözləmə daxil deyil.",
    action: { label: "Tam reys cədvəli", href: "/network/schedule" },
  },

  fleet: {
    eyebrow: "Tonaj",
    title: "Gəmi yükə uyğunlaşdırılır, əksi yox.",
    action: { label: "Donanmaya bax", href: "/fleet" },
  },

  capabilities: {
    eyebrow: "Yükgöndərənlər niyə qalır",
    title: "Cədvəli həll edən əməliyyat təfərrüatı.",
    items: [
      {
        icon: "headset",
        title: "Bir əməliyyat masası",
        text: "Sifarişi, dəniz hissəsini, liman çağırışını və təhvili eyni komanda aparır. Təhvil-təslim yoxdur, yükü təkrar izah etmək yoxdur.",
      },
      {
        icon: "clock",
        title: "Sabit günlü yola düşmələr",
        text: "Əsas marşrutlarda elan olunmuş reys günləri — istehsal və dəmir yolu sifarişləri gəmidən geriyə doğru planlaşdırıla bilir.",
      },
      {
        icon: "crane",
        title: "Layihə yükü mühəndisliyi",
        text: "Qabaritdənkənar və ağır yüklər üçün marşrut araşdırması, qaldırma planı, bərkitmə hesablamaları və icazələrin alınması.",
      },
      {
        icon: "doc-check",
        title: "Gömrük və sərhəd təcrübəsi",
        text: "Bəyannamələr, tranzit sənədləri və təhlükəli yük sənədləri keçidin hər iki tərəfində şirkət daxilində hazırlanır.",
      },
      {
        icon: "shield",
        title: "Auditdən keçmiş təhlükəsizlik idarəetməsi",
        text: "Təhlükəsizlik, keyfiyyət və ətraf mühit idarəetməsi beynəlxalq standartlara uyğundur və kənar auditlə yoxlanılır.",
      },
      {
        icon: "route",
        title: "Dəhliz bağlantısı",
        text: "Orta Dəhliz boyunca dəmir yolu və avtomobil davamı — gəmi gəldikdən sonra deyil, gəmiyə uyğunlaşdırılaraq əvvəlcədən koordinasiya olunur.",
      },
    ],
  },

  news: {
    eyebrow: "Xəbər otağı",
    title: "Caspian Sea Line-dan son xəbərlər.",
    action: { label: "Bütün xəbərlər", href: "/news" },
  },

  cta: {
    eyebrow: "Buradan başlayın",
    title: "Nə daşıdığınızı bizə deyin.",
    lead:
      "Yükün təfərrüatlarını, yükləmə yerini və çatdırılma tarixini göndərin. Bilet nömrəsi yox, adı bəlli operatordan marşrut təklifi və ilkin qiymət alacaqsınız.",
    actions: [
      { label: "Qiymət al", href: "/quote", variant: "primary", arrow: true },
      { label: "Operatorla danış", href: "/contact", variant: "secondary" },
    ],
  },
};

export default home;
