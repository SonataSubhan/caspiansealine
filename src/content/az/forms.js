/**
 * Sorğu, əlaqə və izləmə formalarının mətni və siyahıları.
 *
 * Komponentlərdən kənarda saxlanılır ki, satış üzrə məsul şəxs JSX faylı
 * açmadan etiketi dəyişə və ya yeni yük növü əlavə edə bilsin.
 */

export const quotePage = {
  meta: {
    title: "Qiymət sorğusu",
    description:
      "Yükünüzün təfərrüatlarını və tələb olunan çatdırılma tarixini göndərin. Caspian Sea Line bir iş günü ərzində marşrut təklifi və ilkin qiymətlə cavab verir.",
  },
  eyebrow: "Buradan başlayın",
  title: "Nə daşıdığınızı bizə deyin.",
  lead:
    "Nə qədər çox xana doldursanız, ilk cavab bir o qədər dəqiq olar. Hansısa təfərrüat hələ məlum deyilsə, boş buraxın — biz soruşarıq.",
  aside: {
    title: "Sonra nə olur",
    steps: [
      "Sorğunu adı bəlli operator götürür — növbə deyil.",
      "Çatdırılma tarixinizə uyğun yer, avadanlıq və bağlayıcı mərhələləri yoxlayırıq.",
      "Adətən bir iş günü ərzində marşrut təklifi və ilkin qiymət alırsınız.",
    ],
  },
  cargoTypes: [
    "Konteynerdə",
    "RoRo / təkərli yük",
    "Parça / ümumi yük",
    "Layihə / ağır yük",
    "Quru tökmə yük",
    "Maye tökmə yük",
    "Hələ dəqiq deyil",
  ],
  services: [
    "Yalnız dəniz daşıması",
    "Dəniz daşıması + quru daşıması",
    "Tam qapıdan-qapıya",
    "Yalnız liman agentliyi",
    "Yalnız gömrük rəsmiləşdirilməsi",
  ],
};

export const contactPage = {
  meta: {
    title: "Əlaqə",
    description:
      "Caspian Sea Line-ın əməliyyat masası, sifariş bölməsi və ya Bakıdakı baş ofisi ilə əlaqə saxlayın. Təcili əlaqə xətti 24 saat işləyir.",
  },
  eyebrow: "Əlaqə saxlayın",
  title: "Operatorla danışın.",
  lead: "Bir bölmə sifarişləri, əməliyyatı və agentliyi əhatə edir. İş saatlarından kənarda təcili xətt növbətçi məmura düşür.",
  desks: [
    {
      icon: "headset",
      title: "Əməliyyat və sifarişlər",
      text: "Cari yükləmələr, cədvəl sualları, sənədləşmə.",
      hours: "24 / 7",
    },
    {
      icon: "quote",
      title: "Kommersiya",
      text: "Tariflər, tenderlər, yeni müştərilər və çarter sorğuları.",
      hours: "B.e–Cümə, 09:00–18:00 (UTC+4)",
    },
    {
      icon: "ship",
      title: "Liman agentliyi",
      text: "Liman çağırışları, gəmi təchizatı, ekipaj dəyişikliyi və ödənişlər.",
      hours: "24 / 7",
    },
  ],
  subjects: ["Sifariş və ya qiymət", "Cari yükləmə", "Liman agentliyi", "Karyera", "Media", "Digər"],
};

export const trackPage = {
  meta: {
    title: "Yükü izlə",
    description: "Caspian Sea Line yükünü sifariş nömrəsi və ya konosament nömrəsi ilə izləyin.",
  },
  eyebrow: "Yükün statusu",
  title: "Yükü izlə.",
  lead: "Sifariş nömrəsini və ya konosament nömrəsini daxil edin.",
  notice:
    "TODO(build): izləmə üçün backend lazımdır. Əməliyyat sistemi API təqdim edənə qədər bu forma ya mövcud portala yönləndirilməli, ya da əməliyyat masası ilə birbaşa əlaqə ilə əvəz olunmalıdır.",
};
