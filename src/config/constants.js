// // Central place for static, non-secret app configuration.
// // Update contact details / brand copy here -- nothing else in the app
// // should hardcode these values.

// // export const SITE = {
// //   name: "Namdev Narmadeshwar Shivling Art",
// //   shortName: "Namdev Narmadeshwar",
// //   tagline: "Shivling Art",
// //   description:
// //     "Authentic, handcrafted Narmadeshwar Shivlings, marble murtis and pooja accessories -- sourced from the sacred Narmada river and finished with devotion.",
// //   phone: "+91 99999 99999",
// //   phoneRaw: "919999999999",
// //   email: "info@namdevshivlingart.com",
// //   address: "Namdev Narmadeshwar Shivling Art, Omkareshwar, Madhya Pradesh, India",
// //   social: {
// //     facebook: "#",
// //     instagram: "#",
// //     youtube: "#",
// //     whatsapp: "https://wa.me/919999999999",
// //   },
// // };
// export const SITE = {
//   name: "Namdev Narmadeshwar Shivling Art",
//   shortName: "Namdev Narmadeshwar",
//   title: "Shivling Art",
//   tagline: "Authentic Narmadeshwar Shivling Manufacturer",

//   description:
//     "Namdev Narmadeshwar Shivling Art is a trusted manufacturer and exporter of authentic Narmadeshwar Shivlings, Marble Shivlings, Temple Shivlings, Shiva Idols, Religious Sculptures and custom handcrafted Shivlings from Bakawan, Khargone, Madhya Pradesh.",

//   url: "https://yourdomain.com",

//   phone: "+91 9691089549",
//   phoneRaw: "916262529295",

//   email: "info@namdevshivlingart.com",

//   address:
//     "Namdev Narmadeshwar Shivling Art, Ram Mandir, Bakawan Village, Pitamali, Khargone, Madhya Pradesh 451113, India",

//   social: {
//     facebook: "https://facebook.com/yourpage",
//     instagram: "https://instagram.com/yourpage",
//     youtube: "https://youtube.com/@yourchannel",
//     whatsapp: "https://wa.me/9691089549",
//   },
// };

// // LocalStorage keys -- kept in one place so nothing typos a raw string.
// export const STORAGE_KEYS = {
//   token: "nds_auth_token",
//   user: "nds_auth_user",
// };

// // Used as a fallback only while the categories API hasn't returned yet,
// // or if the admin hasn't created categories yet. Never used to fabricate
// // product data.
// export const FALLBACK_CATEGORIES = [
//   "Narmadeshwar Shivling",
//   "Parad Shivling",
//   "Marble Shivling",
//   "Shiv Parivar",
//   "Nandi",
//   "Shiv Accessories",
// ];

// export const PAGE_SIZE = 12;

// export const MAX_IMAGE_SIZE_MB = 5;
// export const MAX_VIDEO_SIZE_MB = 50;




// Central place for static, non-secret app configuration.
// Update contact details / brand copy here -- nothing else in the app
// should hardcode these values.

export const SITE = {
  name: "Namdev Narmadeshwar Shivling Art",
  shortName: "Namdev Narmadeshwar",
  title: "Shivling Art",
  tagline: "Authentic Narmadeshwar Shivling Manufacturer",

  description:
    "Namdev Narmadeshwar Shivling Art is a trusted, multi-generation manufacturer of authentic Narmadeshwar (Banalinga) Shivlings, Shiv Parivar idols and pooja accessories, handcrafted from sacred Narmada River stones in Mardana, Barwah, Khargone, Madhya Pradesh.",

  url: import.meta.env.VITE_SITE_URL || "https://yourdomain.com",

  // Founder / current custodian — used in structured data and the
  // bilingual heritage story on the About page.
  founder: "Arvind Namdev",
  founderHindi: "अरविंद नामदेव",

  // IMPORTANT: phone and phoneRaw must always refer to the SAME number.
  // phoneRaw drives every `tel:` and `wa.me` link across the site, so a
  // mismatch here silently sends real customers to the wrong number.
  phone: "+91 96910 89549",
  phoneRaw: "919691089549",

  email: "info@namdevshivlingart.com",

  // Real registered address as provided by the business owner.
  village: "Mardana",
  tehsil: "Barwah",
  district: "Khargone",
  state: "Madhya Pradesh",
  pincode: "451113",
  country: "India",
  address:
    "Namdev Narmadeshwar Shivling Art, Post Mardana, Tehsil Barwah, District Khargone, Madhya Pradesh 451113, India",

  social: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    youtube: "https://youtube.com/@yourchannel",
    // wa.me requires the FULL international number with country code and
    // no "+", spaces, or leading zero — must match phoneRaw exactly.
    whatsapp: "https://wa.me/919691089549",
  },
};

// The authentic family history, kept in one place (both languages) so any
// page — About, Home, footer, structured data — can reuse it instead of
// re-typing or re-translating it. Written for the web (short paragraphs)
// while staying faithful to the story as given by the owner.
export const HERITAGE_STORY = {
  en: {
    heading: "Our Heritage",
    subheading: "A Legacy Since the Time of Devi Ahilyabai",
    paragraphs: [
      "Namdev Narmadeshwar Shivling Art has been crafting Shivlings from the sacred stones of the Narmada River since the era of Devi Ahilyabai Holkar — a tradition carried forward through generations of the Namdev family.",
      "The very first Narmadeshwar Shivling in our lineage was crafted by the late Shri Mangilal Namdev, who presented a Narmadeshwar Shivling made from Narmada river stone to former Prime Minister Shri Atal Bihari Vajpayee, and to several revered saints — carrying this sacred craft not only across India but abroad as well.",
      "That legacy is now carried forward by his son, Shri Deepak Namdev, and his brother, Shri Shivnarayan Namdev, together with the next generation of the family, who continue to handcraft authentic Narmadeshwar Shivlings from Narmada river stone.",
      "A Shivling formed from Narmada river stone is considered Swayambhu (self-manifest) — it does not require Pran Pratishtha (consecration) or ritual worship to be sanctified, as it is already spiritually complete in itself.",
      "These naturally formed stones often reveal their own sacred patterns — Ardhanarishwar Shivling, the Janeu (sacred thread) motif, the Om symbol, the Trishul, Lord Ganesha's form, and Tilakdhari markings — all occurring naturally in the stone.",
      "We craft Narmadeshwar Shivlings in every size, from 1 inch to 24 feet, and take custom orders for any size or purpose. Alongside the Shivling, we also provide the Jaldhara, and idols of Nandi ji, Ganesh ji, Parvati ji and Kartik ji, along with copper and brass items such as the Naag, Trishul and Jalpatra — and the complete Shiv Parivar for your home or temple.",
      "It is believed that keeping a Narmadeshwar Shivling crafted from the sacred Narmada stone at home brings peace, happiness and prosperity to the household.",
    ],
  },
  hi: {
    heading: "हमारी विरासत",
    subheading: "देवी अहिल्याबाई के समय से चली आ रही परंपरा",
    paragraphs: [
      "नामदेव नर्मदेश्वर शिवलिंग आर्ट, मां नर्मदा के पवित्र पत्थर से शिवलिंग निर्माण का कार्य देवी अहिल्याबाई के समय से करता आ रहा है — यह परंपरा नामदेव परिवार की कई पीढ़ियों से आगे बढ़ती आ रही है।",
      "हमारे परिवार में सबसे पहला नर्मदेश्वर शिवलिंग स्वर्गीय श्री मांगीलाल जी नामदेव द्वारा निर्मित किया गया था। उन्होंने मां नर्मदा के पत्थर से बना नर्मदेश्वर शिवलिंग पूर्व प्रधानमंत्री श्री अटल बिहारी वाजपेई जी को भेंट किया, और साथ ही कई बड़े-बड़े संतों को भी भेंट किया — इस पवित्र कला को देश ही नहीं, विदेश तक भी पहुंचाया।",
      "यह विरासत अब उनके पुत्र श्री दीपक जी नामदेव और भाई श्री शिवनारायण जी नामदेव, तथा परिवार की अगली पीढ़ी द्वारा आगे बढ़ाई जा रही है, जो आज भी मां नर्मदा के पत्थर से प्रामाणिक नर्मदेश्वर शिवलिंग हाथों से तैयार करते हैं।",
      "मां नर्मदा के पत्थर से निर्मित शिवलिंग स्वयंभू माना जाता है — इसे न तो प्राण प्रतिष्ठा की आवश्यकता होती है और न ही पूजा की, क्योंकि यह शिवलिंग स्वयं में सिद्ध है।",
      "इन प्राकृतिक पत्थरों में स्वयं ही पवित्र आकृतियां उभर आती हैं — अर्धनारीश्वर शिवलिंग, जनेऊ की आकृति, ओम की आकृति, त्रिशूल की आकृति, गणेश जी की आकृति और तिलकधारी चिन्ह — यह सब पत्थर में स्वाभाविक रूप से प्राप्त होता है।",
      "हम 1 इंच से लेकर 24 फीट तक के नर्मदेश्वर शिवलिंग बनाते हैं और किसी भी आकार या आवश्यकता के अनुसार ऑर्डर भी लेते हैं। शिवलिंग के साथ ही जलधारा, नंदी जी, गणेश जी, पार्वती जी और कार्तिक जी की मूर्तियां, तथा नाग, त्रिशूल, जलपात्र जैसे तांबे-पीतल के सामान भी उपलब्ध हैं — और साथ ही घर या मंदिर के लिए संपूर्ण शिव परिवार भी।",
      "मान्यता है कि मां नर्मदा के पवित्र पत्थर से निर्मित नर्मदेश्वर शिवलिंग घर में रखने से सुख, शांति और धन की प्राप्ति होती है।",
    ],
  },
};

// LocalStorage keys -- kept in one place so nothing typos a raw string.
export const STORAGE_KEYS = {
  token: "nds_auth_token",
  user: "nds_auth_user",
  cart: "nds_cart",
  wishlist: "nds_wishlist",
};

// Used as a fallback only while the categories API hasn't returned yet,
// or if the admin hasn't created categories yet. Never used to fabricate
// product data.
export const FALLBACK_CATEGORIES = [
  "Narmadeshwar Shivling",
  "Parad Shivling",
  "Marble Shivling",
  "Shiv Parivar",
  "Nandi",
  "Shiv Accessories",
];

export const PAGE_SIZE = 12;

export const MAX_IMAGE_SIZE_MB = 5;
export const MAX_VIDEO_SIZE_MB = 50;