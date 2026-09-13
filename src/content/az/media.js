import { withSources } from "../media-sources";

/**
 * Alternativ mətn, Azərbaycan dilində.
 *
 * Hər kadrda əslində nə olduğunu təsvir edir — bəzək deyil, ucadan oxunur.
 * Real fotolar gələndə bu mətnlər onlara uyğun yenidən yazılmalıdır; fayl
 * yolları `../media-sources.js` faylındadır.
 */
const alt = {
  hero: "Alaqaranlıqda terminal kanarında dayanmış konteyner gəmisi, portal kranlar yığınlarla işləyir.",
  sustainability: "Mavi saatda kanarda dayanmış yüklü konteyner gəmisi, işıqlar sakit suda əks olunur.",

  "menu-feature": "Yükləmə zamanı konteyner lyuk qapağının üstündə işıq qaytaran geyimdə iki ekipaj üzvü.",
  "network-map": "Sudan görünən konteyner terminalı — kanar boyunca yığınlar və portal kranlar.",
  company: "Gün batımında yüklə işləyən konteyner gəmisi, arxada terminalın kran cərgəsi.",

  "csl-absheron": "Aydın havada terminal kanarına burnu ilə bağlanmış konteyner gəmisi.",
  "csl-khazri": "Sakit suda portal kranlar cərgəsinin yanında konteyner gəmisi.",
  "csl-gilavar": "Buludlu səma altında tam yüklü konteyner gəmisi ilə işləyən portal kranlar.",

  "news-fourth-weekly-departure-baku-kuryk": "Alaqaranlıqda dörd portal kranın işlədiyi konteyner gəmisi.",
  "news-transformer-shipment-central-asian-grid": "Konteyner gəmisinin lyuk qapaqlarında yük əməliyyatlarına nəzarət edən ekipaj.",
  "news-agency-office-opened-aktau": "Kanarda dayanmış konteyner gəmisi, kranlar yığınların üzərində.",

  "service-container-shipping": "Terminal sahəsi boyunca konteyner yığınları və portal kranlar.",
  "service-project-cargo": "Qaldırma əməliyyatı zamanı göyərtədə ekipaj, ətrafda lyuk qapaqlarına bərkidilmiş konteynerlər.",

  "port-baku-alat": "Alaqaranlıqda terminal kanarında dayanmış konteyner gəmisi.",

  about: "Gün batımında yüklə işləyən konteyner gəmisi.",
  hsseq: "Göyərtədə yük əməliyyatlarına nəzarət edən, işıq qaytaran geyimdə iki ekipaj üzvü.",
  careers: "Terminal kanarında konteyner gəmisi ilə işləyən portal kranlar.",
};

export const media = withSources(alt);
