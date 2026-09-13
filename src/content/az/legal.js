/**
 * Hüquqi səhifələr.
 *
 * TODO(content): aşağıdakı hər sənəd struktur şablonudur. Məxfilik, kukilər və
 * xüsusilə daşıma şərtləri dərc edilməzdən əvvəl hüquqşünas tərəfindən
 * yazılmalı və ya yoxlanılmalıdır — daşıyıcının daşıma şərtləri müqavilədir.
 */

export const legalDocuments = [
  {
    slug: "privacy",
    title: "Məxfilik bildirişi",
    updated: "2026-09-01",
    intro: "Caspian Sea Line şəxsi məlumatları necə toplayır, istifadə edir və qoruyur.",
    sections: [
      { heading: "Biz kimik", body: ["TODO(content): nəzarətçinin kimliyi, qeydiyyat ünvanı və məlumatların qorunması üzrə əlaqə."] },
      { heading: "Nə toplayırıq", body: ["TODO(content): sayt, qiymət sorğusu forması və kommersiya yazışması vasitəsilə toplanan şəxsi məlumat kateqoriyaları."] },
      { heading: "Niyə toplayırıq", body: ["TODO(content): hər emal məqsədi üçün hüquqi əsas."] },
      { heading: "Kimlərlə paylaşırıq", body: ["TODO(content): emalçılar, agentlər və dövlət orqanları; beynəlxalq ötürmələr."] },
      { heading: "Nə qədər saxlayırıq", body: ["TODO(content): saxlanma müddətləri."] },
      { heading: "Hüquqlarınız", body: ["TODO(content): giriş, düzəliş, silinmə, etiraz və bunlardan necə istifadə etmək."] },
    ],
  },
  {
    slug: "cookies",
    title: "Kuki siyasəti",
    updated: "2026-09-01",
    intro: "Bu sayt cihazınızda nə saxlayır və niyə.",
    sections: [
      {
        heading: "Hazırda nə istifadə edirik",
        body: [
          "Bu sayt hazırda heç bir analitika, reklam və ya izləmə kukisi yerləşdirmir. Üçüncü tərəf skriptləri və xarici şriftlər yüklənmir — lazım olan hər şey bu domendən verilir.",
          "TODO(content): sonradan analitika əlavə olunarsa, bu səhifə və razılıq mexanizmi də onunla birlikdə əlavə edilməlidir.",
        ],
      },
      { heading: "Ciddi zəruri saxlama", body: ["TODO(content): formalar backend-ə qoşulduqdan sonra ciddi zəruri kukiləri sadalayın."] },
    ],
  },
  {
    slug: "terms",
    title: "Hüquqi bildiriş",
    updated: "2026-09-01",
    intro: "Saytdan istifadə şərtləri, şirkət məlumatları və məsuliyyətdən imtina.",
    sections: [
      { heading: "Şirkət məlumatları", body: ["TODO(content): qeydiyyat adı, qeydiyyat nömrəsi, hüquqi ünvan, VÖEN."] },
      { heading: "Bu saytdan istifadə", body: ["TODO(content): icazə verilən istifadə, əqli mülkiyyət və sayt məzmununa görə məsuliyyətin məhdudlaşdırılması."] },
      { heading: "Cədvəllər və tariflər", body: ["TODO(content): dərc olunmuş cədvəl və ilkin qiymətlərin məcburi təklif olmadığına dair bildiriş."] },
      { heading: "Tətbiq olunan hüquq", body: ["TODO(content): tətbiq olunan hüquq və yurisdiksiya."] },
    ],
  },
  {
    slug: "terms-of-carriage",
    title: "Daşıma şərtləri",
    updated: "2026-09-01",
    intro: "Caspian Sea Line-ın yükü daşıdığı müqavilə şərtləri.",
    sections: [
      {
        heading: "Bu səhifəni dərc etməzdən əvvəl",
        body: [
          "TODO(legal): daşıma şərtləri marketinq mətni deyil, müqavilədir. Bu səhifə dəniz hüququ üzrə hüquqşünas tərəfindən hazırlanmalı və ya yoxlanılmalı, faktiki verilən konosament və dəniz qaiməsi ilə uzlaşdırılmalıdır.",
          "Müvəqqəti şərtləri dərc etmək heç nə dərc etməməkdən pisdir.",
        ],
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Əlçatanlıq bəyanatı",
    updated: "2026-09-01",
    intro: "Bu sayt hər kəs üçün istifadə oluna bilən şəkildə necə qurulub və problem olduqda bizə necə bildirmək olar.",
    sections: [
      {
        heading: "Nə etmişik",
        body: [
          "Sayt WCAG 2.2 AA tələblərinə sonradan uyğunlaşdırma kimi yox, dizayn şərti kimi qurulub: ardıcıl semantik başlıqlar, keçid linki, hər interaktiv elementdə görünən fokus halqası, ən azı 46px hündürlükdə idarəetmə elementləri, brend palitrasına qarşı yoxlanılmış rəng kontrastı, naviqasiya menyuları daxil olmaqla tam klaviatura ilə idarəetmə və azaldılmış hərəkət tərcihlərinə dəstək.",
          "Kiçik ekranlarda cədvəllər yana sürüşdürmə tələb etmək əvəzinə etiketli sətirlərə çevrilir və hər şəkil yerinin mətn alternativi var.",
        ],
      },
      {
        heading: "Məlum məhdudiyyətlər",
        body: ["TODO(content): testlərdə tapılan, hələ düzəldilməmiş nöqsanları hədəf tarixi ilə birlikdə sadalayın."],
      },
      {
        heading: "Problem barədə bizə bildirin",
        body: ["TODO(content): əlçatanlıq üzrə əlaqə ünvanı və gözlənilən cavab müddəti."],
      },
    ],
  },
];
