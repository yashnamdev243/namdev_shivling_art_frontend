// import React from "react";
// import { SITE } from "../../config/constants";

// export default function LocalBusinessSchema() {
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     name: "Namdev Narmadeshwar Shivling Art",
//     image: `${SITE.url}/images/logo.png`,
//     url: SITE.url,
//     telephone: SITE.phone,
//     email: SITE.email,

//     address: {
//       "@type": "PostalAddress",
//       streetAddress: SITE.address,
//       addressLocality: "Bakawan",
//       addressRegion: "Madhya Pradesh",
//       postalCode: "451113",
//       addressCountry: "IN"
//     },

//     geo: {
//       "@type": "GeoCoordinates",
//       latitude: "22.169555",
//       longitude: "75.8461086"
//     },

//     openingHours: "Mo-Sa 09:00-18:00",

//     priceRange: "$$",

//     sameAs: [
//       SITE.social.facebook,
//       SITE.social.instagram,
//       SITE.social.youtube
//     ]
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify(schema),
//       }}
//     />
//   );
// }

import React from "react";
import { SITE } from "../../config/constants";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",

    "@id": `${SITE.url}#business`,

    name: "Namdev Narmadeshwar Shivling Art",

    url: SITE.url,

    image: `${SITE.url}/images/logo.png`,

    logo: `${SITE.url}/images/logo.png`,

    description:
      "Manufacturer and exporter of authentic Narmadeshwar Shivlings, Marble Shivlings, Temple Shivlings, Shiva Idols, Religious Sculptures and custom handcrafted Shivlings.",

    telephone: SITE.phone,

    email: SITE.email,

    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "Bakawan",
      addressRegion: "Madhya Pradesh",
      postalCode: "451113",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.169555,
      longitude: 75.8461086,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],

    priceRange: "$$",

    areaServed: [
      "India",
      "USA",
      "Canada",
      "Australia",
      "United Kingdom",
      "Worldwide",
    ],

    hasMap: "https://maps.app.goo.gl/2jWrqE3ATYfnKpQU7",

    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.youtube,
      SITE.social.whatsapp,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
