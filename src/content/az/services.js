/**
 * Xidmət kataloqu.
 *
 * Bir massiv bunları idarə edir: /services indeksi, on altı /services/[slug]
 * səhifəsi, onların statik parametrləri, metadata-sı və Service
 * strukturlaşdırılmış datası. Yeni xidmət — buradakı bir yazı və navigation.js
 * içində bir keçid; yeni səhifə faylı yoxdur.
 *
 * TODO(content): şirkətin sadalanan hər xidməti həqiqətən satdığını təsdiqləyin
 * və satmadıqlarını silin. Hər biri saxlanılmalı bir səhifəyə çevrilir.
 */

/** Ana səhifədə və /services başında göstərilən üç istiqamət. */
export const servicePillars = [
  {
    id: "ocean",
    index: "01",
    accent: "cyan",
    title: "Dəniz nəqliyyatı",
    text: "Konteyner, təkərli və qeyri-standart yüklər üçün Xəzər üzərində sabit günlü reyslər — həm öz, həm çarter tonajı ilə.",
    items: ["Konteyner daşımaları", "RoRo, treylerlər və nəqliyyat vasitələri", "Parça və ümumi yük", "Quru və maye tökmə yük"],
    href: "/services#ocean",
  },
  {
    id: "agency",
    index: "02",
    accent: "red",
    title: "Liman və agentlik xidmətləri",
    text: "Çağırdığımız limanlarda öz agentlik iştirakımız — kanar planlaşdırması, sənədlər və ödənişlər bir təşkilatın içində qalır.",
    items: ["Liman agentliyi və gəmi təchizatı", "Yükləmə-boşaltma koordinasiyası", "Ekipaj dəyişikliyi və təchizat", "Yanacaqdoldurmanın təşkili"],
    href: "/services#agency",
  },
  {
    id: "logistics",
    index: "03",
    accent: "green",
    title: "Ekspedisiya və gömrük",
    text: "Səfərin quru hissəsi: limana çatdırma, rəsmiləşdirmə, saxlama və son çatdırılma — reysdən sonra deyil, reysə uyğun planlaşdırılır.",
    items: ["Multimodal yük ekspedisiyası", "Gömrük rəsmiləşdirilməsi və icazələr", "Gömrük anbarı və açıq anbar", "Quru avtomobil və dəmir yolu daşımaları"],
    href: "/services#logistics",
  },
];

export const serviceCategories = [
  { id: "ocean", title: "Dəniz nəqliyyatı", accent: "cyan" },
  { id: "agency", title: "Liman və agentlik", accent: "red" },
  { id: "logistics", title: "Logistika", accent: "green" },
  { id: "specialised", title: "İxtisaslaşmış", accent: "cyan" },
];

/**
 * `intro` giriş abzasıdır, `body` əsas mətn, `points` yoxlama siyahısı,
 * `facts` isə göstəricilər paneli. Hər xidmət səhifəsi eyni dörd bölməni
 * göstərir — neçə xidmət əlavə olunsa da, səhifələr eyni qalır.
 */
export const services = [
  {
    slug: "container-shipping",
    category: "ocean",
    icon: "container",
    title: "Konteyner daşımaları",
    summary: "Xəzər üzərində sabit günlü konteyner reysləri, hər iki tərəfdə avadanlıq təchizatı və quru bağlantısı ilə.",
    intro:
      "Bakı, Aktau, Kuryk və Türkmənbaşı arasında elan olunmuş reys günlərində standart və xüsusi avadanlıq daşınır; sifariş, dəniz hissəsi və təhvil bir bölmə tərəfindən aparılır.",
    body: [
      "Konteyner yükündə Xəzər keçidi dəniz vaxtı ilə yox, sənədlə udulur və ya itirilir. Sifarişlər konkret reysə qarşı təsdiqlənir, avadanlıq son müddətdən əvvəl yerinə qoyulur, sənədlər isə konteyner hələ quruda ikən hazırlanır.",
      "Refrijerator, açıq üstlü, flat-rack və tank konteynerlər yer və dayanıqlıq şərti ilə daşınır. Təhlükəli yüklər IMDG üzrə qəbul olunur — bəyannamə darvazada yox, sifariş təsdiqlənməzdən əvvəl yoxlanılır.",
    ],
    points: [
      "20 fut və 40 fut standart, high-cube və refrijerator avadanlığı",
      "Konteyner ölçüləri daxilində qabaritdənkənar üçün açıq üstlü və flat-rack",
      "IMDG təhlükəli yüklər, sifariş təsdiqlənməzdən əvvəl yoxlanılır",
      "Avadanlığın yerləşdirilməsi və müştəri daşıması ilə quru mərhələləri",
    ],
    facts: [
      { key: "Marşrutlar", value: "Bakı · Aktau · Kuryk · Türkmənbaşı" },
      { key: "Sifariş son müddəti", value: "TODO" },
      { key: "Sənədləşmə", value: "Konosament / dəniz qaiməsi" },
    ],
  },
  {
    slug: "roro",
    category: "ocean",
    icon: "truck",
    title: "RoRo və təkərli yük",
    summary: "Treylerlər, yük maşınları, avtobuslar, kənd təsərrüfatı və tikinti texnikası — sürülərək və ya yedəklənərək yüklənir.",
    intro:
      "Təkərli yük təkərindən düşmədikdə ən sürətli keçir. Sürücülü və sürücüsüz vahidlər Bakı–Kuryk və Bakı–Aktau marşrutlarında gəminin təsdiqlənmiş bərkitmə planı üzrə daşınır.",
    body: [
      "Sürücüsüz treylerlər əsas həcmi verir: vahid terminalda buraxılır, keçidi biz aparırıq, qarşı tərəfdə qəbul edən daşıyıcı götürür. Sürücülü vahidlərdə sürücü nəqliyyat vasitəsi ilə qalır — bu, vaxta həssas yüklərdə sərhəd formalıqlarını qısaldır.",
      "Öz hərəkət qabiliyyəti olan texnika vəziyyət yoxlaması, yanacaq səviyyəsi və yükləmədən əvvəl razılaşdırılmış bərkitmə planı şərti ilə qəbul olunur. İşləməyən vahidlər mafi treyler ilə yedəklənir.",
    ],
    points: [
      "Sürücülü və sürücüsüz treylerlər",
      "Yük maşınları, avtobuslar və özüyeriyən texnika",
      "İşləməyən və qabaritdənkənar vahidlər üçün mafi treylerlər",
      "Gəminin təsdiqlənmiş yük bərkitmə təlimatına uyğun bərkitmə",
    ],
    facts: [
      { key: "Əsas marşrut", value: "Bakı (Ələt) — Kuryk" },
      { key: "Tezlik", value: "Həftədə 4 reys" },
      { key: "Sürücü yeri", value: "Sürücülü vahidlərdə mövcuddur" },
    ],
  },
  {
    slug: "breakbulk",
    category: "ocean",
    icon: "crane",
    title: "Parça və ümumi yük",
    summary: "Polad, boru, taxta, kisəli və paletli yüklər — trümdə və ya göyərtədə sərbəst daşınır.",
    intro:
      "Nə qutuya sığan, nə də təkərlə gedən yük. Yerləşdirmə, altlıq və bərkitmə hər daşıma üçün ayrıca — gəminin dayanıqlığına və yükün öz dözümlülüyünə görə planlaşdırılır.",
    body: [
      "Parça yük sifariş olunmur, planlaşdırılır. Ölçülər, çəkilər və ağırlıq mərkəzləri yer təsdiqlənməzdən əvvəl trümə qarşı yoxlanılır və sifarişlə birlikdə yerləşdirmə planı verilir.",
      "Yükün açıq havaya dözdüyü hallarda göyərtədə daşıma təklif olunur — əvvəlcədən razılaşdırılmış göyərtə yükü şərti ilə, heç vaxt sonradan tətbiq edilmədən.",
    ],
    points: [
      "Polad məmulatlar, boru, rulon və profillər",
      "Taxta, kisəli və paletli yük",
      "Hər daşıma üçün ayrıca yerləşdirmə və bərkitmə planı",
      "Yük imkan verdikdə göyərtədə daşıma",
    ],
    facts: [
      { key: "Planlaşdırma məlumatı", value: "Ölçülər, çəki, ağırlıq mərkəzi" },
      { key: "Sənədləşmə", value: "Yerləşdirmə planı ilə konosament" },
      { key: "Ekspertiza", value: "Sorğu ilə və ya yükün dəyəri tələb etdikdə" },
    ],
  },
  {
    slug: "dry-bulk",
    category: "ocean",
    icon: "warehouse",
    title: "Quru tökmə yük",
    summary: "Taxıl, filiz, inert materiallar və digər quru tökmə yüklər — tökmə trümlərdə və ya big-bag-larda.",
    intro:
      "Xəzər üzərində tələb olduqda daşınan tökmə partiyalar; yükləmə və boşaltma normaları fraxtdan əvvəl razılaşdırılır ki, staliya sonradan mübahisə mövzusu olmasın.",
    body: [
      "Yük IMSBC təsnifatı və material tələb edərsə rütubət sertifikatı şərti ilə qəbul olunur. Yükləmə və boşaltma terminalla elə koordinasiya edilir ki, gəmi sahil avadanlığını gözləməsin.",
      "Kiçik partiyalar parça yük reysində big-bag-larda gedə bilər — bu, tam tökmə fraxtı gözləməkdən qurtarır.",
    ],
    points: [
      "Taxıl, filiz, inert materiallar və sənaye mineralları",
      "Qəbuldan əvvəl IMSBC təsnifatı və rütubət sertifikatının yoxlanılması",
      "Razılaşdırılmış yükləmə və boşaltma normaları",
      "Hissəvi yüklər üçün big-bag alternativi",
    ],
    facts: [
      { key: "Əsas", value: "Tələb olduqda" },
      { key: "Sənədləşmə", value: "Çarter müqaviləsi / konosament" },
      { key: "Yük bəyannaməsi", value: "IMSBC tələb olunur" },
    ],
  },
  {
    slug: "liquid-bulk",
    category: "ocean",
    icon: "droplet",
    title: "Maye tökmə yük",
    summary: "Neft məhsulları və təhlükəsiz mayelər — tank konteynerlərdə və ya çarter tonajında.",
    intro:
      "Maye yük öz reyslərimizdə ISO tank konteynerlərdə, partiya həcmi buna əsas verdikdə isə çarter tonajında tökmə şəkildə daşınır.",
    body: [
      "Tank konteyner daşımaları quru konteynerlərlə eyni sifariş prosesindən keçir; əlavə olaraq sifariş təsdiqlənməzdən əvvəl məhsulun texniki pasportu və tankın uyğunluğu yoxlanılır.",
      "Tökmə partiyalar çarter bölməmiz vasitəsilə yoxlanılmış tonajda təşkil olunur. Fraxtdan əvvəl məhsul uyğunluğu, son üç yük və tank təmizliyi standartları təsdiqlənir.",
    ],
    points: [
      "Cədvəlli reyslərdə ISO tank konteynerlər",
      "Tökmə partiyalar üçün çarter tonajı",
      "Məhsulun texniki pasportu və tank uyğunluğunun yoxlanılması",
      "Son üç yükün və təmizləmənin təsdiqlənməsi",
    ],
    facts: [
      { key: "Rejimlər", value: "Tank konteyner · çarter tonajı" },
      { key: "Qəbuldan əvvəl", value: "Məhsulun texniki pasportu tələb olunur" },
      { key: "Yoxlama", value: "Tonaj fraxtdan əvvəl yoxlanılır" },
    ],
  },

  {
    slug: "port-agency",
    category: "agency",
    icon: "ship",
    title: "Liman agentliyi",
    summary: "Çağırdığımız limanlarda tam agentlik: kanar sifarişi, formalıqlar, ödənişlərə nəzarət və hesabatlılıq.",
    intro:
      "Daşıyıcı ilə eyni şirkətin tərkibində olan agent eyni cədvələ cavabdehdir. Gəlişdən əvvəl, liman çağırışı zamanı və sonra işi yükü artıq tanıyan işçilər aparır.",
    body: [
      "Gəlişdən əvvəl: kanar müraciəti, bildirişlər, bələdçilik, yedək gəmiləri və gömrük ilkin rəsmiləşdirməsi. Çağırış zamanı: gəmidə iştirak, faktlar aktı, yük sənədləri və plandan hər hansı kənarlaşma yekun ödəniş hesabatında yox, elə həmin gün bildirilir.",
      "Ödənişlər çağırışdan əvvəl proforma kimi təqdim olunur, sonra isə ilkin qiymətə qarşı maddə-maddə uzlaşdırılır.",
    ],
    points: [
      "Kanar müraciəti, bələdçilik və yedəkləmənin təşkili",
      "Gömrük, miqrasiya və liman formalıqları",
      "Proforma və yekun ödəniş hesabatları, sətir-sətir uzlaşdırılır",
      "Faktlar aktı və gündəlik liman çağırışı hesabatı",
    ],
    facts: [
      { key: "Əhatə", value: "Öz ofislərimiz və təyin olunmuş agentlər" },
      { key: "Hesabatlılıq", value: "Çağırış müddətində gündəlik" },
      { key: "Ödənişlər", value: "Əvvəl proforma, sonra uzlaşdırma" },
    ],
  },
  {
    slug: "husbandry",
    category: "agency",
    icon: "headset",
    title: "Gəmi təchizatı və ekipaj xidmətləri",
    summary: "Ekipaj dəyişikliyi, tibbi yardım, kapitana nağd vəsait, ehtiyat hissələrinin rəsmiləşdirilməsi və sahibkarın təmsilçiliyi.",
    intro:
      "Təchizat çağırışları kiçik şeylərə görə pozulur — viza, katerin sifarişi, gömrükdə ilişən ehtiyat hissə. Bu iş məhz onların baş verməməsini təmin etməkdir.",
    body: [
      "Ekipaj dəyişikliyi təqvimə görə yox, gəminin gözlənilən gəliş vaxtına görə planlaşdırılır; viza, nəqliyyat və yerləşmə əvvəlcədən təşkil olunur və cədvəl dəyişəndə yenidən planlaşdırılır.",
      "Ehtiyat hissələr və təchizat düzgün rejim altında rəsmiləşdirilir ki, göndəriş gəmi yola düşməzdən əvvəl gəmidə olsun, növbəti limanda onu qovmasın.",
    ],
    points: [
      "Ekipaj dəyişikliyi, vizalar, nəqliyyat və yerləşmə",
      "Tibbi yardım və repatriasiya",
      "Kapitana nağd vəsait",
      "Ehtiyat hissə, təchizat və ərzağın rəsmiləşdirilməsi",
    ],
    facts: [
      { key: "Əlçatanlıq", value: "24 / 7" },
      { key: "Əhatə", value: "Yalnız təchizat və ya tam agentlik" },
      { key: "Sahibkarın təmsilçiliyi", value: "Sorğu ilə" },
    ],
  },
  {
    slug: "stevedoring",
    category: "agency",
    icon: "crane",
    title: "Yükləmə-boşaltma koordinasiyası",
    summary: "Terminal və yükləyici briqadalarla koordinasiya, briqada planlaşdırması, yükləmə və boşaltmaya nəzarət.",
    intro:
      "Kranlar bizim deyil, amma plan bizimdir. Briqadalar, avadanlıq və ardıcıllıq gəmi kanara yanaşmazdan əvvəl terminalla razılaşdırılır.",
    body: [
      "Əməliyyatlarda iştirak edirik ki, dayanma gəmi hələ işləyərkən bildirilib həll olunsun və staliya üçün faktlar aktında qeyd edilsin.",
      "Zədə baş verdiyi anda sənədləşdirilir — fotoşəkillər və terminalın da imzaladığı yazılı qeydlə. Sonradan iddianın ödənilə bilməsini məhz bu təmin edir.",
    ],
    points: [
      "Terminalla briqada və avadanlıq planlaşdırması",
      "Yükləmə və boşaltmaya nəzarət",
      "Dayanma və zədənin baş verdiyi anda qeydə alınması",
      "Staliya üçün faktlar aktı",
    ],
    facts: [
      { key: "İştirak", value: "Əməliyyat boyunca" },
      { key: "Hesabatlılıq", value: "Faktlar aktı + foto sənədləşmə" },
      { key: "Ekspertiza", value: "Sorğu ilə müstəqil ekspert" },
    ],
  },
  {
    slug: "bunkering",
    category: "agency",
    icon: "droplet",
    title: "Yanacaq və təchizat",
    summary: "Yanacaqdoldurmanın təşkili, kəmiyyət və keyfiyyət ekspertizası, çağırdığımız limanlarda gəmi təchizatı.",
    intro:
      "Yanacaq yazılı spesifikasiyaya uyğun təşkil olunur, ekspertiza altında verilir və nümunə götürülür ki, sonrakı keyfiyyət mübahisəsinin arxasında sübut olsun.",
    body: [
      "Təchizat liman çağırışına əlavə edilmir, onunla koordinasiya olunur — belədə yanacaqdoldurma dayanma müddətini uzatmır. Kəmiyyət ekspertiza ilə təsdiqlənir, nümunələr gəminin iştirakı ilə götürülüb möhürlənir.",
      "Cədvəl imkan verdikdə təchizat və ərzaq bir çatdırılmada birləşdirilir — bu həm xərci, həm də tələb olunan buraxılış vərəqələrinin sayını azaldır.",
    ],
    points: [
      "Yazılı spesifikasiyaya uyğun yanacaq təchizatı",
      "Kəmiyyət ekspertizası və möhürlənmiş nümunə götürülməsi",
      "Mövcud liman çağırışı daxilində koordinasiya",
      "Birləşdirilmiş təchizat və ərzaq çatdırılması",
    ],
    facts: [
      { key: "Nümunə", value: "Möhürlənmiş, gəminin şahidliyi ilə" },
      { key: "Ekspertiza", value: "Standart kəmiyyət ekspertizası" },
      { key: "Vaxt", value: "Mümkün olduqda liman çağırışı daxilində" },
    ],
  },

  {
    slug: "freight-forwarding",
    category: "logistics",
    icon: "route",
    title: "Yük ekspedisiyası",
    summary: "Dəniz hissəsini avtomobil, dəmir yolu və hava ilə birləşdirən qapıdan-qapıya multimodal daşımalar.",
    intro:
      "Bütün səfəri əhatə edən bir müqavilə: əvvəlcə dəniz hissəsi planlaşdırılır, qalan hər mərhələ onun ətrafında qurulur — gəmisi olmayan ekspeditorun işləmək məcburiyyətində olduğunun tam əksi.",
    body: [
      "Marşrutlar tələb olunan çatdırılma tarixindən geriyə doğru qurulur: əvvəlcə reys seçilir, sonra ona çatmaq üçün ilkin daşıma və davam mərhələsi sifariş olunur. Gəmi dəyişərsə, bağlayıcı mərhələləri eyni bölmə yenidən planlaşdırır.",
      "Orta Dəhlizdə bu, qiymətdən daha vacibdir. Aktauda blok qatarı buraxan konteyner növbətisini gözləyir və bu gözləmə adətən dəniz keçidindən uzun olur.",
    ],
    points: [
      "Qapıdan-qapıya və limandan-qapıya marşrutlar",
      "Dəniz, avtomobil, dəmir yolu və hava — bir müqavilə altında",
      "Reys dəyişəndə bağlayıcı mərhələlərin yenidən planlaşdırılması",
      "Sorğu ilə yük sığortasının təşkili",
    ],
    facts: [
      { key: "Əhatə", value: "Qapı · liman · terminal, istənilən kombinasiyada" },
      { key: "Dəhlizlər", value: "Orta Dəhliz · Şimal–Cənub" },
      { key: "Sığorta", value: "Sorğu ilə təşkil olunur" },
    ],
  },
  {
    slug: "customs-clearance",
    category: "logistics",
    icon: "doc-check",
    title: "Gömrük rəsmiləşdirilməsi",
    summary: "İdxal, ixrac və tranzit bəyannamələri, icazələr və təhlükəli yük sənədləri.",
    intro:
      "Bəyannamələr keçidin hər iki tərəfində şirkət daxilində hazırlanır — belədə təsnifat sualı yük sərhəddə gözləyərkən yox, gəlməzdən əvvəl cavablandırılır.",
    body: [
      "Tarif təsnifatı, dəyər və mənşə sifariş anında nəzərdən keçirilir. Güzəştli mənşə və ya icazə söhbəti varsa, təsdiqedici sənəd yük hərəkət etməzdən əvvəl veriləcək qədər erkən tələb olunur.",
      "Sərhəddə qalma müddətini qısaldan hallarda tranzit prosedurlarından istifadə edilir və zəmanət ayrıca iş kimi yox, sifarişin bir hissəsi kimi təşkil olunur.",
    ],
    points: [
      "İdxal, ixrac və tranzit bəyannamələri",
      "Tarif təsnifatı, dəyər və mənşənin yoxlanılması",
      "İcazələr, lisenziyalar və sertifikatlar",
      "IMDG və təhlükəli yük sənədləşməsi",
    ],
    facts: [
      { key: "Əhatə", value: "Keçidin hər iki tərəfi" },
      { key: "Rejimlər", value: "İdxal · ixrac · tranzit · müvəqqəti idxal" },
      { key: "Zəmanətlər", value: "Sifarişlə birlikdə təşkil olunur" },
    ],
  },
  {
    slug: "warehousing",
    category: "logistics",
    icon: "warehouse",
    title: "Anbar xidmətləri",
    summary: "Gömrük anbarı və açıq saxlama, konsolidasiya və limanda, quruda yükün emalı.",
    intro:
      "Reysə xidmət etmək üçün mövcud olan saxlama: yük son müddətdən əvvəl hazır saxlanılır, tam vahid yaradan hallarda birləşdirilir və sabit tarixlə yox, göstərişə əsasən buraxılır.",
    body: [
      "Rüsumun təxirə salınması vacib olduqda gömrük anbarı, olmadıqda açıq saxlama istifadə olunur. Hər iki halda qalıqlar bizim yox, sizin öz istinadlarınıza görə hesabatlanır.",
      "Konsolidasiya və dekonsolidasiya quru daşımasından qurtardığı hallarda limanda, yük vahid alıcıya gedirsə quruda aparılır.",
    ],
    points: [
      "Gömrük anbarı və açıq saxlama",
      "Konsolidasiya və dekonsolidasiya",
      "Sizin istinadlarınıza görə qalıq hesabatı",
      "Göstərişə əsasən buraxılış",
    ],
    facts: [
      { key: "Yerlər", value: "TODO" },
      { key: "Rejimlər", value: "Gömrük anbarı · açıq" },
      { key: "Hesabatlılıq", value: "Müştəri istinadlarına görə" },
    ],
  },
  {
    slug: "inland-transport",
    category: "logistics",
    icon: "truck",
    title: "Quru daşımaları",
    summary: "Limana və limandan avtomobil və dəmir yolu daşımaları — reysə uyğun planlaşdırılır.",
    intro:
      "İlkin daşıma və davam çatdırılması eyni sifarişin bir hissəsi kimi təşkil olunur — belədə maşın son müddətdən əvvəl gəlir, vaqon isə gəmi kanara yanaşmazdan əvvəl sifariş olunur.",
    body: [
      "Avtomobil daşıması vaxta həssas və qısa məsafəli mərhələlər üçün, dəmir yolu isə dəhliz boyunca həcm üçün istifadə olunur. Seçim standart qayda ilə yox, hər daşıma üçün çatdırılma tarixinə görə edilir.",
      "Bağlayıcı blok qatar söhbəti varsa, konteyner sifariş anında konkret yola düşməyə planlaşdırılır — gələndə terminala təklif olunub yer axtarmağa buraxılmır.",
    ],
    points: [
      "Yükləmə limanına ilkin daşıma",
      "Boşaltma limanından davam çatdırılması",
      "Hər daşıma üçün seçilən avtomobil və dəmir yolu",
      "Reyslə birlikdə sifariş olunan blok qatar yerləri",
    ],
    facts: [
      { key: "Rejimlər", value: "Avtomobil · dəmir yolu" },
      { key: "Planlaşdırma", value: "Dəniz hissəsi ilə birlikdə sifariş olunur" },
      { key: "Əhatə", value: "Xəzəryanı ölkələr və Mərkəzi Asiya" },
    ],
  },

  {
    slug: "project-cargo",
    category: "specialised",
    icon: "crane",
    title: "Layihə və ağır yük",
    summary: "Qabaritdənkənar və ağır yüklər — marşrut araşdırmasından son quraşdırmaya qədər.",
    intro:
      "Layihə yükü ortasında gəmi olan mühəndislik işidir. İş marşrut araşdırması və qaldırma hesablaması ilə başlayır — hər hansı hərəkətdən aylar əvvəl.",
    body: [
      "Marşrutdakı hər məhdudiyyət ehtimal edilmir, ölçülür: körpü hündürlükləri, ox yükləri, dönmə radiusları, kanar tutumu və kranın çatma məsafəsi. Nəqliyyat planı sonra onların ən sərtinə görə qurulur.",
      "Qaldırma planları, bərkitmə hesablamaları və metod bəyanatları səfərbərlikdən əvvəl təsdiqə verilir; icazələr müvəqqəti plana yox, təsdiqlənmiş plana əsasən alınır.",
    ],
    points: [
      "Marşrut araşdırması və mümkünlük təhlili",
      "Qaldırma planları və bərkitmə hesablamaları",
      "İcazələr və müşayiətin təşkili",
      "Quraşdırmaya qədər yerində nəzarət",
    ],
    facts: [
      { key: "Hazırlıq müddəti", value: "Erkən planlaşdırın — cədvəli icazələr müəyyən edir" },
      { key: "Nəticələr", value: "Marşrut araşdırması · qaldırma planı · metod bəyanatı" },
      { key: "Nəzarət", value: "Yükləmə, reys və boşaltma" },
    ],
  },
  {
    slug: "energy-logistics",
    category: "specialised",
    icon: "shield",
    title: "Neft-qaz logistikası",
    summary: "Qazma, sualtı və yataq işlənməsi yükləri — sektorun audit etdiyi standartlara uyğun daşınır.",
    intro:
      "Enerji yükü özü ilə audit izi gətirir. Sənədləşmə, HSSE uyğunluğu və izlənilə bilmə işin əlavəsi deyil, tərkib hissəsidir.",
    body: [
      "Daşımalar operatorun öz HSSE tələblərinə uyğun icra olunur; icazələr, təlimat müzakirələri və qaldırma planları qeydə alınır və saxlanılır. Subpodratçılar eyni standartda saxlanılır və eyni dövriyyə ilə auditdən keçirilir.",
      "Material idarəetməsi, toplanma və geri yükləmə elə aparılır ki, yataqdan qayıdan avadanlıq gedən avadanlıq qədər diqqətlə izlənilsin.",
    ],
    points: [
      "Qazma, sualtı və yataq işlənməsi yükləri",
      "Operatorun HSSE uyğunluğu və sənədləşməsi",
      "Toplanma sahələri və material idarəetməsi",
      "Geri yükləmə və avadanlığın qayıdışının izlənilməsi",
    ],
    facts: [
      { key: "Uyğunluq", value: "Operatorun HSSE tələblərinə görə" },
      { key: "İzlənilə bilmə", value: "Tam sənədli audit izi" },
      { key: "Subpodratçılar", value: "Eyni standartda auditdən keçirilir" },
    ],
  },
  {
    slug: "chartering",
    category: "specialised",
    icon: "ship",
    title: "Çarter və brokerlik",
    summary: "Xəzərdə reys və vaxt çarterləri — orada işləyən insanlar tərəfindən təşkil olunur və idarə edilir.",
    intro:
      "Cədvəlli reys yükə uyğun gəlmirsə, onun üçün tonaj tapırıq — və sonra sadəcə razılaşmanı təhvil verib getmirik, reysi özümüz idarə edirik.",
    body: [
      "Tonaj təklif olunmazdan əvvəl yoxlanılır: sertifikatlaşdırma, klass statusu, əvvəlki yüklər və əməliyyat keçmişi. Uyğun olmayan gəmidə ucuz çarter qənaət deyil.",
      "Çarter müqavilələri staliya və demeraj şərtləri ilə real liman şəraitinə uyğun danışılır — çünki o şəraitin necə olduğunu bilirik.",
    ],
    points: [
      "Reys və vaxt çarterləri",
      "Təklifdən əvvəl tonajın yoxlanılması",
      "Çarter müqaviləsi və staliya şərtlərinin danışıqları",
      "Reysin idarə olunması və fraxtdan sonrakı iş",
    ],
    facts: [
      { key: "Əhatə", value: "Xəzər dənizi tonajı" },
      { key: "Yoxlama", value: "Sertifikat · klass · əməliyyat keçmişi" },
      { key: "Fraxtdan sonra", value: "Sadəcə fraxt yox, idarəetmə" },
    ],
  },
];

export const servicesPage = {
  meta: {
    title: "Xidmətlər",
    description:
      "Xəzər dənizi üzrə dəniz nəqliyyatı, liman agentliyi və yük ekspedisiyası — konteyner, RoRo, parça yük, layihə yükü, gömrük rəsmiləşdirilməsi və quru daşımaları.",
  },
  eyebrow: "Nə edirik",
  title: "Sifarişlə təhvil arasındakı hər şey.",
  lead:
    "Dörd istiqamət üzrə on altı xidmət, bir operator tərəfindən. Yükgöndərənlərin çoxu onlardan bir neçəsini vahid müqavilə ilə istifadə edir — məsələ də elə budur.",
};
