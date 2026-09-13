/**
 * Haqqımızda, HSSEQ, sertifikatlar və karyera.
 *
 * TODO(content): rəhbərlik adları, sertifikat nömrələri və tarixləri müştəri
 * tərəfindən verilməlidir. Burada heç nə fakt kimi uydurulmayıb —
 * müvəqqəti dəyərlər açıq şəkildə işarələnib.
 */

export const about = {
  meta: {
    title: "Haqqımızda",
    description:
      "Caspian Sea Line sabit günlü reyslər, öz liman agentliyi şəbəkəsi və Bakıdan idarə olunan vahid əməliyyat masası ilə işləyən Xəzəraşırı dəniz daşımaları şirkətidir.",
  },
  eyebrow: "Biz kimik",
  title: "Orta Dəhliz üçün qurulmuş Xəzər operatoru.",
  lead:
    "Bir müqavilə, bir əlaqə nöqtəsi və bir sənəd dəsti — sifarişdən təyinat məntəqəsində təhvilə qədər.",
  paragraphs: [
    "Xəzər qısa dənizdir, nəticələri isə uzun. Ələtdə buraxılmış kanar pəncərəsi Aktauda buraxılmış qatara çevrilir, buraxılmış qatar isə bir həftə gecikən çatdırılmaya. Caspian Sea Line məhz bu reallıq üzərində qurulub.",
    "Əsas Xəzəraşırı marşrutlarda sabit günlü reyslər işlədirik, çağırdığımız limanlarda öz agentlik iştirakımız var və yükü başdan-sona bir əməliyyat masası aparır. Bu quruluşun kommersiya məntiqi sadədir: daşıyıcı ilə agent eyni şirkət olanda cədvəlin əhəmiyyətini kimsəyə sübut etmək lazım gəlmir.",
    "Şirkətin baş ofisi Bakıdadır və beş Xəzəryanı ölkənin hamısında işləyir; öz ofislərimizin çatmadığı yerlərdə təyin olunmuş agentlərlə.",
  ],
  principles: [
    {
      icon: "headset",
      title: "Suala cavab verin",
      text: "Hər yükü adı bəlli operator aparır. Yükünüz barədə cavabı onun nə olduğunu artıq bilən adamdan alırsınız.",
    },
    {
      icon: "clock",
      title: "Cədvəli dərc edin",
      text: "Əvvəlcədən elan olunmuş sabit reys günləri — yükgöndərən istehsalı gəmidən geriyə doğru planlaşdıra bilir.",
    },
    {
      icon: "doc-check",
      title: "Sənədi sərhəddən əvvəl hazırlayın",
      text: "Bəyannamələr və icazələr yük hələ quruda ikən hazırlanır, keçiddə gözləyərkən yox.",
    },
    {
      icon: "shield",
      title: "Səhvi deyin",
      text: "Elə həmin gün bildirilən gecikmə problemdir. Yekun hesabatda bildirilən gecikmə mübahisədir.",
    },
  ],
};

export const leadership = {
  meta: {
    title: "Rəhbərlik",
    description: "Caspian Sea Line-ın idarəetmə komandası.",
  },
  eyebrow: "İdarəetmə",
  title: "Cədvələ cavabdeh olan insanlar.",
  lead: "TODO(content): idarəetmə komandası üçün adlar, vəzifələr, qısa bioqrafiyalar və portretlər təqdim edilməlidir.",
  // TODO(content): bu müvəqqəti dəyərləri tamamilə əvəz edin.
  people: [
    { name: "TODO", role: "Baş icraçı direktor" },
    { name: "TODO", role: "Baş əməliyyat direktoru" },
    { name: "TODO", role: "Kommersiya direktoru" },
    { name: "TODO", role: "HSSEQ meneceri" },
  ],
};

export const hsseq = {
  meta: {
    title: "HSSEQ siyasəti",
    description:
      "Caspian Sea Line-da sağlamlıq, təhlükəsizlik, mühafizə, ətraf mühit və keyfiyyət idarəetməsi: donanma və agentlik ofisləri üzrə vahid, kənar auditdən keçən idarəetmə sistemi.",
  },
  eyebrow: "Standartlar",
  title: "Bir idarəetmə sistemi, bir audit dövriyyəsi.",
  lead:
    "Sağlamlıq, təhlükəsizlik, mühafizə, ətraf mühit və keyfiyyət dörd ayrı proqram deyil. Bu, donanmaya və sahil ofislərinə eyni cür tətbiq olunan bir sistemdir.",
  paragraphs: [
    "Prosedurlar elə yazılıb ki, gecə üçdə təzyiq altında olan adam onlardan istifadə edə bilsin — yəni qısa, konkret və məşq edilmişdir. Təlimlər elan olunmuş proqram üzrə keçirilir, aşkarlanan nöqsanlar isə adı bəlli məsul şəxs və tarixlə bağlanır.",
    "Hadisələr və az qala baş verəcək hallar günahlandırmadan bildirilir və təqsir yox, səbəb baxımından təhlil olunur. Bildirişi cəzalandıran təşkilat ən çox bilməli olduğu problemləri eşitməyi dayandırır.",
  ],
  commitments: [
    { icon: "shield", title: "Təhlükəsizlik", text: "ISM Məcəlləsinə uyğun təhlükəsizlik idarəetməsi — təlimlər, auditlər və adı bəlli məsul şəxsə bağlanan nöqsanlarla." }, // TODO(content): ISM tətbiqini təsdiqlə
    { icon: "doc-check", title: "Keyfiyyət", text: "Təkrarlanan hər əməliyyat üçün sənədləşdirilmiş prosedurlar — hər il və hər hadisədən sonra yenidən baxılır." },
    { icon: "leaf", title: "Ətraf mühit", text: "Qapalı dəniz üçün qarşısının alınmasına əsaslanan ekoloji standart. Davamlılıq yanaşmamıza baxın." },
    { icon: "headset", title: "Mühafizə", text: "Hər sifarişə tətbiq olunan giriş nəzarəti, yük yoxlaması və sanksiya uyğunluğu." },
  ],
};

export const certifications = {
  meta: {
    title: "Sertifikatlar",
    description:
      "Caspian Sea Line-ın sahib olduğu sertifikatlar və kənar auditlər — təhlükəsizlik, keyfiyyət və ətraf mühit idarəetməsi standartları daxil olmaqla.",
  },
  eyebrow: "Zəmanət",
  title: "Bizim üçün işləməyən insanlar tərəfindən auditdən keçirilir.",
  lead:
    "Heç kimin yoxlamadığı idarəetmə sistemi sadəcə sənəddir. Bunlar sahib olduğumuz kənar auditlər və sertifikatlardır.",
  notice:
    "TODO(content): hansı sertifikatların həqiqətən mövcud olduğunu, verən qurumu, sertifikat nömrəsini və etibarlılıq tarixlərini təsdiqləyin. Qüvvədə olmayanları silin — yoxlanıla bilməyən sertifikat iddiası heç bir iddiadan pisdir.",
  items: [
    { name: "ISM Məcəlləsi", body: "TODO — verən orqan", scope: "Təhlükəsizlik idarəetməsi, donanma", status: "TODO" },
    { name: "ISO 9001", body: "TODO — sertifikatlaşdırma orqanı", scope: "Keyfiyyət idarəetməsi", status: "TODO" },
    { name: "ISO 14001", body: "TODO — sertifikatlaşdırma orqanı", scope: "Ətraf mühitin idarə olunması", status: "TODO" },
    { name: "ISO 45001", body: "TODO — sertifikatlaşdırma orqanı", scope: "Əməyin təhlükəsizliyi və sağlamlığı", status: "TODO" },
  ],
};

export const careers = {
  meta: {
    title: "Karyera",
    description:
      "Caspian Sea Line-da dənizdə və sahildə karyera — Xəzər boyunca əməliyyat, agentlik, çarter, gömrük və HSSEQ vəzifələri.",
  },
  eyebrow: "Bizimlə işləyin",
  title: "Dəniz daşımaları içində gəmi olan insan işidir.",
  lead:
    "Bakıda və agentlik ofislərində sahil vəzifələri, donanma üzrə dəniz vəzifələri.",
  paragraphs: [
    "Biz mühakimə qabiliyyətinə görə işə götürürük. Xəzər keçidində baş verən nasazlıqların çoxu heç bir prosedurda yazılmayıb, onları yaxşı həll edənlər isə prosedurun niyə mövcud olduğunu anlayanlardır.",
    "TODO(content): real işə qəbul prosesini, təklif olunan şərtləri və təlimləri təsvir edin, real vakansiyalara və ya müraciət poçtuna keçid verin.",
  ],
  areas: [
    { icon: "ship", title: "Dənizdə", text: "Donanma üzrə göyərtə və maşın komandası vəzifələri. TODO(content): rütbələri və tələbləri sadalayın." },
    { icon: "headset", title: "Əməliyyat və agentlik", text: "Liman çağırışlarının aparılması, sifariş bölməsi və müştəri əməliyyatları." },
    { icon: "doc-check", title: "Gömrük və uyğunluq", text: "Bəyannamələr, icazələr və sanksiya yoxlaması." },
    { icon: "route", title: "Kommersiya", text: "Çarter, qiymətləndirmə və biznesin inkişafı." },
  ],
};
