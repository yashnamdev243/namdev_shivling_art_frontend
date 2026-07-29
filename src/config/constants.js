// Central place for static, non-secret app configuration.
// Update contact details / brand copy here -- nothing else in the app
// should hardcode these values.

// export const SITE = {
//   name: "Namdev Narmadeshwar Shivling Art",
//   shortName: "Namdev Narmadeshwar",
//   tagline: "Shivling Art",
//   description:
//     "Authentic, handcrafted Narmadeshwar Shivlings, marble murtis and pooja accessories -- sourced from the sacred Narmada river and finished with devotion.",
//   phone: "+91 99999 99999",
//   phoneRaw: "919999999999",
//   email: "info@namdevshivlingart.com",
//   address: "Namdev Narmadeshwar Shivling Art, Omkareshwar, Madhya Pradesh, India",
//   social: {
//     facebook: "#",
//     instagram: "#",
//     youtube: "#",
//     whatsapp: "https://wa.me/919999999999",
//   },
// };
export const SITE = {
  name: "Namdev Narmadeshwar Shivling Art",
  shortName: "Namdev Narmadeshwar",
  title: "Shivling Art",
  tagline: "Authentic Narmadeshwar Shivling Manufacturer",

  description:
    "Namdev Narmadeshwar Shivling Art is a trusted manufacturer and exporter of authentic Narmadeshwar Shivlings, Marble Shivlings, Temple Shivlings, Shiva Idols, Religious Sculptures and custom handcrafted Shivlings from Bakawan, Khargone, Madhya Pradesh.",

  url: "https://yourdomain.com",

  phone: "+91 9691089549",
  phoneRaw: "916262529295",

  email: "info@namdevshivlingart.com",

  address:
    "Namdev Narmadeshwar Shivling Art, Ram Mandir, Bakawan Village, Pitamali, Khargone, Madhya Pradesh 451113, India",

  social: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    youtube: "https://youtube.com/@yourchannel",
    whatsapp: "https://wa.me/9691089549",
  },
};

// LocalStorage keys -- kept in one place so nothing typos a raw string.
export const STORAGE_KEYS = {
  token: "nds_auth_token",
  user: "nds_auth_user",
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
