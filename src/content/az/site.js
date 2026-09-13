import { brand, contact, siteUrl, social } from "../site-shared";

/**
 * Sayt üzrə ümumi məlumatlar, Azərbaycan dilində.
 *
 * Nömrələr, poçt ünvanları və domen `site-shared.js` faylındadır — bütün sayt
 * üçün bir dəfə. Burada yalnız mətn var.
 */
export const site = {
  ...brand,
  descriptor: "Dəniz daşımaları şirkəti",
  locale: "az",
  url: siteUrl,

  tagline: "Xəzəraşırı dəniz daşımaları və logistika",
  summary:
    "Xəzəraşırı dəniz daşımaları və multimodal logistika. Dəniz nəqliyyatı, liman agentliyi, ekspedisiya və gömrük — bir müqavilə çərçivəsində.",
  metaDescription:
    "Caspian Sea Line Xəzər dənizi üzərindən konteyner, təkərli, parça və layihə yüklərini daşıyır. Dəniz nəqliyyatı, liman agentliyi, gömrük və quru daşımaları bir müqavilə altında.",

  contact: {
    ...contact,
    address: {
      street: contact.street,
      locality: "Bakı",
      region: "Bakı",
      postalCode: contact.postalCode,
      country: "Azərbaycan",
      countryCode: contact.countryCode,
    },
    hours: "Əməliyyat masası 24 / 7 işləyir",
  },

  /** Haqqımızda, Əlaqə səhifələrində və strukturlaşdırılmış datada işlənir. */
  facts: [
    { key: "Baş ofis", value: "Bakı, Azərbaycan" },
    { key: "Fəaliyyət başlanğıcı", value: "TODO" },
    { key: "Öz agentlik ofisləri", value: "TODO" },
    { key: "İdarəetmə sistemi", value: "ISM · ISO 9001 · ISO 14001" }, // TODO(content): təsdiq
  ],

  social,
};

export default site;
