// ============================================================================
// src/config/content.js
//
// SINGLE SOURCE OF TRUTH for every user-facing text string on the site,
// in English and Hindi.
//
// WHY THIS FILE EXISTS
// ---------------------------------------------------------------------------
// `constants.js` holds SITE CONFIG — things like phone numbers, addresses,
// social links — that don't change per language.
//
// This file holds CONTENT — headings, paragraphs, button labels, FAQs, SEO
// copy — the stuff a non-developer should be able to edit without touching
// any component code.
//
// HOW TO EDIT
// ---------------------------------------------------------------------------
// Every block below follows the same shape:
//
//   {
//     en: { ... English strings ... },
//     hi: { ... Hindi strings ...    },
//   }
//
// To change what visitors see, edit the text inside `en` / `hi`. Never
// rename the outer keys (e.g. `title`, `subtitle`) — components read those
// keys directly. Adding a NEW key is safe; removing one will break whatever
// component reads it.
//
// HOW TO USE IN A COMPONENT
// ---------------------------------------------------------------------------
//   import { CONTENT } from "../../config/content";
//   import { useContent } from "../../context/LanguageContext";
//
//   const t = useContent(CONTENT.hero); // picks .en or .hi automatically
//   <h1>{t.titleLine1}</h1>
//
// SEO NOTE
// ---------------------------------------------------------------------------
// Keywords below are written naturally into headings/descriptions rather
// than stuffed — this keeps Google happy and keeps Hindi-speaking searchers
// (नर्मदेश्वर शिवलिंग, असली नर्मदेश्वर शिवलिंग) finding the site too.
// ============================================================================

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const NAV = {
  en: {
    home: "Home",
    about: "About Us",
    products: "Products",
    gallery: "Gallery",
    contact: "Contact",
    wishlist: "Wishlist",
    exploreCollection: "Explore Collection",
  },
  hi: {
    home: "होम",
    about: "हमारे बारे में",
    products: "उत्पाद",
    gallery: "गैलरी",
    contact: "संपर्क करें",
    wishlist: "इच्छा-सूची",
    exploreCollection: "संग्रह देखें",
  },
};

// ---------------------------------------------------------------------------
// Language switcher labels (used by the switcher button itself)
// ---------------------------------------------------------------------------
export const LANGUAGE_LABELS = {
  en: { short: "EN", full: "English", switchTo: "हिंदी में देखें" },
  hi: { short: "हिं", full: "हिन्दी", switchTo: "View in English" },
};

// ---------------------------------------------------------------------------
// Per-page SEO copy (title / description / keywords)
// Feed these into <Seo /> on each page.
// ---------------------------------------------------------------------------
export const SEO_CONTENT = {
  home: {
    en: {
      title:
        "Namdev Narmadeshwar Shivling Art | Authentic Narmadeshwar Shivling Manufacturer",
      description:
        "Shop authentic Narmadeshwar Shivlings handcrafted from sacred Narmada River stones in Khargone, Madhya Pradesh. 4 generations of heritage, temple orders, wholesale supply and worldwide shipping.",
      keywords:
        "Narmadeshwar Shivling, Authentic Narmadeshwar Shivling, Original Narmadeshwar Shivling, Banalinga Shivling, Narmada Shivling, Shivling Manufacturer India, Temple Shivling, Marble Shivling, Khargone Shivling",
    },
    hi: {
      title:
        "नामदेव नर्मदेश्वर शिवलिंग आर्ट | असली नर्मदेश्वर शिवलिंग निर्माता",
      description:
        "मध्य प्रदेश के खरगोन में मां नर्मदा के पवित्र पत्थर से हाथ से बने असली नर्मदेश्वर शिवलिंग। 4 पीढ़ियों की विरासत, मंदिर ऑर्डर, थोक आपूर्ति और विश्वभर में डिलीवरी।",
      keywords:
        "नर्मदेश्वर शिवलिंग, असली नर्मदेश्वर शिवलिंग, मूल नर्मदेश्वर शिवलिंग, बाणलिंग शिवलिंग, नर्मदा शिवलिंग, शिवलिंग निर्माता, मंदिर शिवलिंग, संगमरमर शिवलिंग, खरगोन शिवलिंग",
    },
  },
  about: {
    en: {
      title: "About Us | Namdev Narmadeshwar Shivling Art",
      description:
        "A generations-old family of Narmadeshwar Shivling artisans from Mardana, Barwah, Khargone, Madhya Pradesh. Authentic Shivlings from 1 inch to 24 feet, handcrafted from sacred Narmada River stone.",
      keywords:
        "About Namdev Narmadeshwar Shivling Art, Narmadeshwar Shivling history, Swayambhu Shivling, Original Narmadeshwar Shivling manufacturer, Shivling artisan family Khargone",
    },
    hi: {
      title: "हमारे बारे में | नामदेव नर्मदेश्वर शिवलिंग आर्ट",
      description:
        "मध्य प्रदेश के मरदाना, बड़वाह, खरगोन के नर्मदेश्वर शिवलिंग कारीगरों का पीढ़ियों पुराना परिवार। 1 इंच से 24 फीट तक के असली शिवलिंग, मां नर्मदा के पवित्र पत्थर से हस्तनिर्मित।",
      keywords:
        "नामदेव नर्मदेश्वर शिवलिंग आर्ट, नर्मदेश्वर शिवलिंग इतिहास, स्वयंभू शिवलिंग, असली नर्मदेश्वर शिवलिंग निर्माता, खरगोन शिवलिंग कारीगर परिवार",
    },
  },
  products: {
    en: {
      title: "Our Products | Authentic Narmadeshwar Shivlings & Shiv Parivar",
      description:
        "Browse authentic Narmadeshwar Shivlings, Shiv Parivar idols and pooja accessories, handcrafted from sacred Narmada River stones. Sizes from 1 inch to 24 feet, custom orders welcome.",
      keywords:
        "Narmadeshwar Shivling for sale, buy Narmadeshwar Shivling online, Shiv Parivar idols, Nandi idol, custom Shivling order, Narmadeshwar Shivling price",
    },
    hi: {
      title: "हमारे उत्पाद | असली नर्मदेश्वर शिवलिंग व शिव परिवार",
      description:
        "मां नर्मदा के पवित्र पत्थर से हस्तनिर्मित असली नर्मदेश्वर शिवलिंग, शिव परिवार की मूर्तियां और पूजा सामग्री देखें। 1 इंच से 24 फीट तक के आकार, कस्टम ऑर्डर स्वीकार।",
      keywords:
        "नर्मदेश्वर शिवलिंग खरीदें, ऑनलाइन नर्मदेश्वर शिवलिंग, शिव परिवार मूर्तियां, नंदी मूर्ति, कस्टम शिवलिंग ऑर्डर, नर्मदेश्वर शिवलिंग कीमत",
    },
  },
  gallery: {
    en: {
      title: "Gallery | Namdev Narmadeshwar Shivling Art",
      description:
        "A visual look at our handcrafted Narmadeshwar Shivling craftsmanship — genuine Narmada River stone Shivlings, Shiv Parivar idols and temple installations.",
      keywords:
        "Narmadeshwar Shivling photos, Shivling gallery, handcrafted Shivling images, temple Shivling installation photos",
    },
    hi: {
      title: "गैलरी | नामदेव नर्मदेश्वर शिवलिंग आर्ट",
      description:
        "हमारी हस्तनिर्मित नर्मदेश्वर शिवलिंग कारीगरी की झलक — असली नर्मदा नदी पत्थर के शिवलिंग, शिव परिवार मूर्तियां और मंदिर इंस्टॉलेशन।",
      keywords:
        "नर्मदेश्वर शिवलिंग फोटो, शिवलिंग गैलरी, हस्तनिर्मित शिवलिंग तस्वीरें, मंदिर शिवलिंग इंस्टॉलेशन",
    },
  },
  contact: {
    en: {
      title: "Contact Us | Namdev Narmadeshwar Shivling Art",
      description:
        "Contact Namdev Narmadeshwar Shivling Art, a trusted manufacturer of authentic Narmadeshwar Shivlings in Khargone, Madhya Pradesh. Get expert guidance, custom orders, wholesale pricing and worldwide shipping.",
      keywords:
        "Contact Narmadeshwar Shivling Manufacturer, Shivling Supplier India, Shivling Manufacturer Madhya Pradesh, Custom Shivling Enquiry, Namdev Narmadeshwar Shivling Art contact",
    },
    hi: {
      title: "संपर्क करें | नामदेव नर्मदेश्वर शिवलिंग आर्ट",
      description:
        "मध्य प्रदेश के खरगोन में असली नर्मदेश्वर शिवलिंग के विश्वसनीय निर्माता नामदेव नर्मदेश्वर शिवलिंग आर्ट से संपर्क करें। विशेषज्ञ सलाह, कस्टम ऑर्डर, थोक मूल्य और विश्वभर डिलीवरी।",
      keywords:
        "नर्मदेश्वर शिवलिंग निर्माता संपर्क, शिवलिंग आपूर्तिकर्ता भारत, मध्य प्रदेश शिवलिंग निर्माता, कस्टम शिवलिंग पूछताछ",
    },
  },
  wishlist: {
    en: {
      title: "Your Wishlist",
      description: "Products you've saved for later.",
    },
    hi: {
      title: "आपकी इच्छा-सूची",
      description: "आपके द्वारा सहेजे गए उत्पाद।",
    },
  },
};

// ---------------------------------------------------------------------------
// Home — Hero section
// ---------------------------------------------------------------------------
export const HERO_CONTENT = {
  en: {
    badge: "🕉 Authentic Narmadeshwar Shivlings",
    titleLine1: "Namdev Narmadeshwar",
    titleLine2: "Shivling Art",
    subtitle:
      "Discover handcrafted Narmadeshwar Shivlings made from sacred stones collected from the holy Narmada River. Every Shivling represents devotion, spirituality and traditional craftsmanship.",
    ctaPrimary: "Explore Collection",
    ctaSecondary: "Contact Us",
    counters: [
      ["4", "Generations of Heritage"],
      ["5000+", "Happy Customers"],
      ["100+", "Unique Designs"],
    ],
  },
  hi: {
    badge: "🕉 असली नर्मदेश्वर शिवलिंग",
    titleLine1: "नामदेव नर्मदेश्वर",
    titleLine2: "शिवलिंग आर्ट",
    subtitle:
      "मां नर्मदा के पवित्र पत्थरों से हाथ से बने नर्मदेश्वर शिवलिंग देखें। हर शिवलिंग भक्ति, आध्यात्मिकता और पारंपरिक कारीगरी का प्रतीक है।",
    ctaPrimary: "संग्रह देखें",
    ctaSecondary: "संपर्क करें",
    counters: [
      ["4", "पीढ़ियों की विरासत"],
      ["5000+", "संतुष्ट ग्राहक"],
      ["100+", "अनूठे डिज़ाइन"],
    ],
  },
};

// ---------------------------------------------------------------------------
// Home — Categories section
// ---------------------------------------------------------------------------
export const CATEGORIES_CONTENT = {
  en: {
    subtitle: "Explore Sacred Collections",
    title: "Our Categories",
    emptyTitle: "Categories Coming Soon",
    emptyDescription:
      "We're adding beautiful handcrafted collections. Please check back shortly.",
  },
  hi: {
    subtitle: "पवित्र संग्रह देखें",
    title: "हमारी श्रेणियां",
    emptyTitle: "श्रेणियां जल्द आ रही हैं",
    emptyDescription:
      "हम सुंदर हस्तनिर्मित संग्रह जोड़ रहे हैं। कृपया थोड़ी देर बाद फिर देखें।",
  },
};

// ---------------------------------------------------------------------------
// Home — Featured products section
// ---------------------------------------------------------------------------
export const FEATURED_PRODUCTS_CONTENT = {
  en: {
    subtitle: "Handcrafted Sacred Collection",
    title: "Featured Products",
    viewAll: "View All",
  },
  hi: {
    subtitle: "हस्तनिर्मित पवित्र संग्रह",
    title: "विशेष उत्पाद",
    viewAll: "सभी देखें",
  },
};

// ---------------------------------------------------------------------------
// Home — Why Choose Us section
// ---------------------------------------------------------------------------
export const WHY_CHOOSE_US_CONTENT = {
  en: {
    subtitle: "Why Choose Us",
    title: "Trusted by Thousands of Devotees",
    badge: "Premium Quality",
    features: [
      {
        title: "100% Authentic",
        description:
          "Every Narmadeshwar Shivling is sourced from the sacred Narmada River and carefully verified.",
      },
      {
        title: "Customer Support",
        description:
          "Our team is always available to guide you in selecting the perfect Shivling for your temple or home.",
      },
      {
        title: "Premium Craftsmanship",
        description:
          "Each product is handcrafted with precision and devotion by experienced artisans.",
      },
      {
        title: "Fast Delivery",
        description:
          "Secure packaging and quick delivery across India with complete safety.",
      },
    ],
  },
  hi: {
    subtitle: "हमें क्यों चुनें",
    title: "हज़ारों भक्तों का भरोसा",
    badge: "प्रीमियम गुणवत्ता",
    features: [
      {
        title: "100% असली",
        description:
          "हर नर्मदेश्वर शिवलिंग मां नर्मदा नदी से प्राप्त और सावधानीपूर्वक सत्यापित है।",
      },
      {
        title: "ग्राहक सहायता",
        description:
          "हमारी टीम आपके मंदिर या घर के लिए सही शिवलिंग चुनने में हमेशा मार्गदर्शन के लिए उपलब्ध है।",
      },
      {
        title: "उत्कृष्ट कारीगरी",
        description:
          "हर उत्पाद अनुभवी कारीगरों द्वारा सटीकता और भक्ति के साथ हस्तनिर्मित है।",
      },
      {
        title: "तेज़ डिलीवरी",
        description:
          "पूरी सुरक्षा के साथ सुरक्षित पैकेजिंग और पूरे भारत में तेज़ डिलीवरी।",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Home — About preview section
// ---------------------------------------------------------------------------
export const ABOUT_PREVIEW_CONTENT = {
  en: {
    badge: "About Namdev Narmadeshwar Shivling Art",
    titleLine1: "Authentic",
    titleLine2: "Narmadeshwar Shivling Manufacturer",
    paragraph1:
      "Namdev Narmadeshwar Shivling Art is a trusted Narmadeshwar Shivling manufacturer, carrying a family legacy since the era of Devi Ahilyabai. Based in Mardana, Barwah, Khargone, Madhya Pradesh, four generations of the Namdev family have preserved this sacred craftsmanship to create authentic Narmada Shivlings (Banalinga Shivlings) using naturally formed holy stones from the sacred Narmada River.",
    paragraph2:
      "Every Narmadeshwar Shivling is carefully hand-shaped, polished, and crafted according to ancient Vedic Shastra traditions, ensuring spiritual purity, authenticity, and divine energy. Our handcrafted Shivlings are trusted by temples, spiritual organizations, and devotees across India and worldwide for home worship, temple installation, and religious ceremonies.",
    cta: "Discover Our Story",
    stats: [
      ["4", "Generations of Artisans"],
      ['1" – 24 ft', "Sizes Handcrafted"],
      ["100%", "Authentic Narmada Stone"],
      ["Worldwide", "Trusted Delivery"],
    ],
  },
  hi: {
    badge: "नामदेव नर्मदेश्वर शिवलिंग आर्ट के बारे में",
    titleLine1: "असली",
    titleLine2: "नर्मदेश्वर शिवलिंग निर्माता",
    paragraph1:
      "नामदेव नर्मदेश्वर शिवलिंग आर्ट एक विश्वसनीय नर्मदेश्वर शिवलिंग निर्माता है, जो देवी अहिल्याबाई के समय से पारिवारिक विरासत निभा रहा है। मध्य प्रदेश के मरदाना, बड़वाह, खरगोन में स्थित, नामदेव परिवार की चार पीढ़ियों ने इस पवित्र कारीगरी को संरक्षित रखते हुए मां नर्मदा के प्राकृतिक पवित्र पत्थरों से असली नर्मदा शिवलिंग (बाणलिंग शिवलिंग) तैयार किए हैं।",
    paragraph2:
      "हर नर्मदेश्वर शिवलिंग को प्राचीन वैदिक शास्त्र परंपराओं के अनुसार सावधानी से हाथ से आकार, पॉलिश और तैयार किया जाता है, जिससे आध्यात्मिक शुद्धता, प्रामाणिकता और दिव्य ऊर्जा सुनिश्चित होती है। हमारे हस्तनिर्मित शिवलिंग भारत और विदेशों में मंदिरों, आध्यात्मिक संगठनों और भक्तों द्वारा घर पूजा, मंदिर स्थापना और धार्मिक अनुष्ठानों के लिए भरोसेमंद हैं।",
    cta: "हमारी कहानी जानें",
    stats: [
      ["4", "कारीगर पीढ़ियां"],
      ['1" – 24 फीट', "हस्तनिर्मित आकार"],
      ["100%", "असली नर्मदा पत्थर"],
      ["विश्वभर", "भरोसेमंद डिलीवरी"],
    ],
  },
};

// ---------------------------------------------------------------------------
// Home — Gallery preview section
// ---------------------------------------------------------------------------
export const GALLERY_PREVIEW_CONTENT = {
  en: {
    subtitle: "Gallery",
    title: "Explore Our Divine Collection",
    cardTitle: "Sacred Collection",
    cardSubtitle: "Handcrafted Narmadeshwar Shivling",
    emptyTitle: "Gallery Coming Soon",
    emptyDescription:
      "We're curating photos of our latest handcrafted Shivlings. Please check back shortly.",
  },
  hi: {
    subtitle: "गैलरी",
    title: "हमारा दिव्य संग्रह देखें",
    cardTitle: "पवित्र संग्रह",
    cardSubtitle: "हस्तनिर्मित नर्मदेश्वर शिवलिंग",
    emptyTitle: "गैलरी जल्द आ रही है",
    emptyDescription:
      "हम अपने नवीनतम हस्तनिर्मित शिवलिंगों की तस्वीरें तैयार कर रहे हैं। कृपया थोड़ी देर बाद फिर देखें।",
  },
};

// ---------------------------------------------------------------------------
// Home — Testimonials section
// ---------------------------------------------------------------------------
export const TESTIMONIALS_CONTENT = {
  en: {
    subtitle: "Testimonials",
    title: "What Our Customers Say",
    items: [
      {
        name: "Rahul Sharma",
        city: "Indore",
        rating: 5,
        review:
          "The Shivling quality is exceptional. The stone is genuine and beautifully polished. Packaging was excellent.",
      },
      {
        name: "Amit Patel",
        city: "Ahmedabad",
        rating: 5,
        review:
          "Amazing craftsmanship. The delivery was fast and the Shivling exceeded our expectations.",
      },
      {
        name: "Priya Verma",
        city: "Bhopal",
        rating: 5,
        review:
          "Very satisfied with the purchase. Authentic Narmadeshwar Shivling with premium finishing.",
      },
    ],
  },
  hi: {
    subtitle: "ग्राहक समीक्षाएं",
    title: "हमारे ग्राहक क्या कहते हैं",
    items: [
      {
        name: "राहुल शर्मा",
        city: "इंदौर",
        rating: 5,
        review:
          "शिवलिंग की गुणवत्ता असाधारण है। पत्थर असली और खूबसूरती से पॉलिश किया हुआ है। पैकेजिंग बहुत अच्छी थी।",
      },
      {
        name: "अमित पटेल",
        city: "अहमदाबाद",
        rating: 5,
        review:
          "अद्भुत कारीगरी। डिलीवरी तेज़ थी और शिवलिंग हमारी उम्मीदों से बेहतर निकला।",
      },
      {
        name: "प्रिया वर्मा",
        city: "भोपाल",
        rating: 5,
        review:
          "खरीदारी से बहुत संतुष्ट हूं। असली नर्मदेश्वर शिवलिंग, प्रीमियम फिनिशिंग के साथ।",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Home — Contact CTA section
// ---------------------------------------------------------------------------
export const CONTACT_CTA_CONTENT = {
  en: {
    subtitle: "Contact Us",
    title: "Bring Divine Energy Into Your Home",
    description:
      "Looking for an authentic Narmadeshwar Shivling or a custom spiritual idol? Our team is happy to help you choose the perfect sacred piece for your home or temple.",
    whatsapp: "WhatsApp Us",
    call: "Call Now",
    email: "Email Us",
    cards: {
      phone: { title: "Call Us", hint: "Mon - Sat • 9:00 AM - 7:00 PM" },
      whatsapp: {
        title: "WhatsApp",
        hint: "Get instant assistance",
        value: "Usually replies in minutes",
      },
      email: { title: "Email", hint: "Send us your requirements" },
    },
  },
  hi: {
    subtitle: "संपर्क करें",
    title: "अपने घर में दिव्य ऊर्जा लाएं",
    description:
      "असली नर्मदेश्वर शिवलिंग या कस्टम आध्यात्मिक मूर्ति चाहिए? हमारी टीम आपके घर या मंदिर के लिए सही पवित्र वस्तु चुनने में मदद करने के लिए तैयार है।",
    whatsapp: "व्हाट्सएप करें",
    call: "अभी कॉल करें",
    email: "ईमेल करें",
    cards: {
      phone: { title: "कॉल करें", hint: "सोम - शनि • सुबह 9:00 - शाम 7:00" },
      whatsapp: {
        title: "व्हाट्सएप",
        hint: "तुरंत सहायता प्राप्त करें",
        value: "आमतौर पर कुछ ही मिनटों में जवाब",
      },
      email: { title: "ईमेल", hint: "अपनी आवश्यकताएं भेजें" },
    },
  },
};

// ---------------------------------------------------------------------------
// About page
// ---------------------------------------------------------------------------
export const ABOUT_PAGE_CONTENT = {
  en: {
    heroBadge: "A Legacy Since Devi Ahilyabai's Era",
    heroTitleLine1: "Namdev Narmadeshwar",
    heroTitleLine2: "Shivling Art",
    heroSubheading:
      "Trusted Manufacturer of Authentic Narmadeshwar Shivlings crafted from Sacred Narmada River Stones.",
    heroParagraph1:
      "Namdev Narmadeshwar Shivling Art proudly carries a sacred legacy passed down through generations in the traditional art of manufacturing authentic Narmadeshwar Shivlings, also known as Banalinga Shivlings. Based in Mardana, Barwah, Khargone, Madhya Pradesh, near the holy Narmada River, our family has preserved generations of spiritual craftsmanship by creating original Narmada Shivlings using naturally formed sacred stones.",
    heroParagraph2:
      "Every Shivling is carefully selected, hand-shaped, polished, and finished according to ancient Vedic Shastra and traditional methods passed down through generations. Each creation reflects devotion, purity, authenticity, and the divine energy of Lord Shiva, making it ideal for home worship, temple installation, religious ceremonies, spiritual gifting, and sacred rituals.",
    heroParagraph3:
      "Today, Namdev Narmadeshwar Shivling Art is trusted by thousands of devotees, temples, spiritual organizations, and collectors across India. Our commitment to quality craftsmanship, genuine Narmadeshwar Shivlings, secure delivery, and customer satisfaction has made us one of the most respected names in traditional Narmadeshwar Shivling manufacturing.",
    trustBadges: [
      "Generations-Old Heritage",
      "100% Authentic Narmada Stones",
      "Handcrafted by Skilled Artisans",
      "Vedic Shastra Based",
      "Temple Quality Finish",
      "Trusted Across India",
      "Sizes: 1 inch to 24 ft",
      "Secure Payments",
    ],
    languageToggleLabel: "Read in Your Language",
    storyBadge: "Our Story",
    storyTitleLine1: "A Legacy of",
    storyTitleLine2: "Faith, Tradition & Craftsmanship",
    storyParagraph1:
      "Namdev Narmadeshwar Shivling Art has preserved one of India's oldest traditions of crafting authentic Narmadeshwar Shivlings. Based in Mardana, Barwah, Khargone, Madhya Pradesh, our family has dedicated generations to transforming naturally formed sacred Narmada River stones into spiritually powerful Narmadeshwar Shivlings that embody devotion, purity, and timeless craftsmanship.",
    storyParagraph2:
      "Every Shivling is individually selected, hand-shaped, polished, and finished according to ancient Vedic Shastra and traditional artisan methods. These sacred creations are ideal for home worship, temple installation, meditation, spiritual gifting, and religious ceremonies, bringing the divine blessings of Lord Shiva into every home.",
    storyParagraph3:
      "Today, devotees, temples, spiritual organizations, and collectors from across India trust Namdev Narmadeshwar Shivling Art for original Narmadeshwar Shivlings, premium craftsmanship, safe nationwide delivery, and exceptional customer service. Every Shivling reflects our unwavering commitment to authenticity, quality, devotion, and the sacred heritage of the holy Narmada River.",
    heritageHighlightBadge: "Trusted by Thousands of Devotees",
    heritageHighlightTitleLine1: "Experience the Divine Craftsmanship of",
    heritageHighlightTitleLine2: "Namdev Narmadeshwar Shivling Art",
    heritageHighlightDescription:
      "Discover our collection of authentic Narmadeshwar Shivlings, handcrafted from sacred Narmada River stones using traditional Vedic craftsmanship. Every Shivling is created with devotion, carefully inspected, and safely delivered to bring the divine blessings of Lord Shiva into your home or temple.",
    heritageHighlightBadges: [
      "Generations of Heritage",
      "100% Original",
      "Temple Quality",
      "Free Delivery",
    ],
    heritageHighlightCta: "Explore Authentic Shivlings",
    heritageHighlightNote:
      "Secure Payments • Safe Packaging • Pan India Delivery",
    missionBadge: "Our Commitment",
    missionTitleLine1: "Guided by",
    missionTitleLine2: "Faith, Tradition & Excellence",
    missionDescription:
      "Every Narmadeshwar Shivling we create reflects our family's long-standing commitment to authenticity, devotion, and traditional craftsmanship. From sacred Narmada River stones to careful finishing by skilled artisans, every Shivling carries the divine blessings of Lord Shiva.",
    missionCards: [
      {
        title: "Authentic Heritage",
        desc: "Carried forward from Shri Mangilal Namdev through Shri Deepak Namdev and Shri Shivnarayan Namdev, Namdev Narmadeshwar Shivling Art preserves a sacred family legacy of crafting authentic Narmadeshwar Shivlings using traditional artisan techniques.",
      },
      {
        title: "Sacred Narmada River Stones",
        desc: "Every Shivling is handcrafted from naturally formed Banalinga stones collected from the holy Narmada River, revered for their spiritual significance in Hindu tradition.",
      },
      {
        title: "Our Promise of Quality",
        desc: "We ensure every original Narmadeshwar Shivling is handcrafted according to Vedic Shastra, quality inspected, securely packaged, and safely delivered across India with complete authenticity.",
      },
    ],
    missionCardBadge: "Namdev Heritage",
    missionCardFooter: "Authentic Family Craft",
    whyBadge: "Why Choose Us",
    whyTitleLine1: "Trusted Heritage,",
    whyTitleLine2: "Authentic Craftsmanship",
    whyDescription:
      "Discover why thousands of devotees, temples, and spiritual organizations trust Namdev Narmadeshwar Shivling Art for original Narmadeshwar Shivlings handcrafted from sacred Narmada River stones.",
    whyFeatures: [
      {
        title: "Temple Quality",
        desc: "Trusted by temples, ashrams, and spiritual institutions across India for authentic Narmadeshwar Shivlings.",
      },
      {
        title: "Sacred Narmada Stones",
        desc: "Every Shivling is handcrafted from naturally formed sacred Narmada River Banalinga stones.",
      },
      {
        title: "Vedic Shastra Crafted",
        desc: "Traditional artisan techniques and Vedic Shastra principles are followed during every stage of craftsmanship.",
      },
      {
        title: "Generations of Heritage",
        desc: "Four generations of the Namdev family preserving the sacred tradition of Narmadeshwar Shivling craftsmanship.",
      },
      {
        title: "Safe Pan India Delivery",
        desc: "Secure packaging and reliable doorstep delivery across India to protect every sacred Shivling.",
      },
      {
        title: "Trusted by Thousands",
        desc: "Preferred by devotees, temples, spiritual organizations, and collectors across India.",
      },
    ],
    whyFeatureFooter: "Trusted Heritage",
    statsBadge: "Our Legacy",
    statsTitleLine1: "Trusted Heritage,",
    statsTitleLine2: "Crafted with Devotion",
    statsDescription:
      "For generations, Namdev Narmadeshwar Shivling Art has been preserving the sacred tradition of crafting original Narmadeshwar Shivlings from naturally formed Narmada River stones for devotees, temples, and spiritual seekers across India and abroad.",
    stats: [
      {
        number: '1"–24 ft',
        title: "Sizes Crafted",
        desc: "From home worship pieces to temple installations.",
      },
      {
        number: "4",
        title: "Generations",
        desc: "Of the Namdev family in this sacred craft.",
      },
      {
        number: "100%",
        title: "Authentic Stones",
        desc: "Sacred Narmada River Banalinga.",
      },
      {
        number: "Pan India",
        title: "& Worldwide",
        desc: "Trusted delivery across India and abroad.",
      },
    ],
    ctaBadge: "Begin Your Spiritual Journey",
    ctaTitleLine1: "Bring Home the",
    ctaTitleLine2: "Divine Blessings of Lord Shiva",
    ctaDescription:
      "Explore our exclusive collection of authentic Narmadeshwar Shivlings, handcrafted from sacred Narmada River stones by skilled artisans carrying forward a generations-old family heritage. Every original Banalinga Shivling is carefully selected, traditionally polished, and crafted according to Vedic Shastra, making it ideal for home worship, temple installation, meditation, spiritual gifting, and sacred rituals dedicated to Lord Shiva.",
    ctaTrustTags: [
      "100% Original Narmadeshwar Shivling",
      "Sacred Narmada River Stones",
      "Temple Quality Finish",
      "Handcrafted by Skilled Artisans",
      "Safe Delivery Across India",
      "Secure Payments",
    ],
    ctaPrimary: "Explore Authentic Shivlings",
    ctaSecondary: "Contact Our Experts",
    ctaFootnote:
      "Trusted by thousands of devotees, temples, and spiritual organizations across India for authentic Narmadeshwar Shivlings, premium craftsmanship, and secure doorstep delivery.",
  },
  hi: {
    heroBadge: "देवी अहिल्याबाई के समय से चली आ रही विरासत",
    heroTitleLine1: "नामदेव नर्मदेश्वर",
    heroTitleLine2: "शिवलिंग आर्ट",
    heroSubheading:
      "मां नर्मदा के पवित्र पत्थरों से बने असली नर्मदेश्वर शिवलिंग के विश्वसनीय निर्माता।",
    heroParagraph1:
      "नामदेव नर्मदेश्वर शिवलिंग आर्ट को असली नर्मदेश्वर शिवलिंग, जिन्हें बाणलिंग शिवलिंग भी कहा जाता है, बनाने की पारंपरिक कला में पीढ़ियों से चली आ रही पवित्र विरासत पर गर्व है। पवित्र नर्मदा नदी के पास मध्य प्रदेश के मरदाना, बड़वाह, खरगोन में स्थित, हमारे परिवार ने प्राकृतिक पवित्र पत्थरों से असली नर्मदा शिवलिंग बनाकर पीढ़ियों की आध्यात्मिक कारीगरी को संरक्षित रखा है।",
    heroParagraph2:
      "हर शिवलिंग को सावधानी से चुना, हाथ से आकार दिया, पॉलिश किया और पीढ़ियों से चली आ रही प्राचीन वैदिक शास्त्र व पारंपरिक विधियों के अनुसार तैयार किया जाता है। हर रचना भक्ति, पवित्रता, प्रामाणिकता और भगवान शिव की दिव्य ऊर्जा को दर्शाती है, जो घर पूजा, मंदिर स्थापना, धार्मिक अनुष्ठान, आध्यात्मिक उपहार और पवित्र कर्मकांडों के लिए आदर्श है।",
    heroParagraph3:
      "आज, नामदेव नर्मदेश्वर शिवलिंग आर्ट पर पूरे भारत में हज़ारों भक्त, मंदिर, आध्यात्मिक संगठन और संग्रहकर्ता भरोसा करते हैं। गुणवत्तापूर्ण कारीगरी, असली नर्मदेश्वर शिवलिंग, सुरक्षित डिलीवरी और ग्राहक संतुष्टि के प्रति हमारी प्रतिबद्धता ने हमें पारंपरिक नर्मदेश्वर शिवलिंग निर्माण में सबसे सम्मानित नामों में से एक बना दिया है।",
    trustBadges: [
      "पीढ़ियों पुरानी विरासत",
      "100% असली नर्मदा पत्थर",
      "कुशल कारीगरों द्वारा हस्तनिर्मित",
      "वैदिक शास्त्र आधारित",
      "मंदिर गुणवत्ता फिनिश",
      "पूरे भारत में भरोसेमंद",
      "आकार: 1 इंच से 24 फीट तक",
      "सुरक्षित भुगतान",
    ],
    languageToggleLabel: "अपनी भाषा में पढ़ें",
    storyBadge: "हमारी कहानी",
    storyTitleLine1: "आस्था, परंपरा और",
    storyTitleLine2: "कारीगरी की विरासत",
    storyParagraph1:
      "नामदेव नर्मदेश्वर शिवलिंग आर्ट ने असली नर्मदेश्वर शिवलिंग बनाने की भारत की सबसे पुरानी परंपराओं में से एक को संरक्षित रखा है। मध्य प्रदेश के मरदाना, बड़वाह, खरगोन में स्थित, हमारे परिवार ने पीढ़ियों को प्राकृतिक पवित्र नर्मदा नदी के पत्थरों को आध्यात्मिक रूप से शक्तिशाली नर्मदेश्वर शिवलिंग में बदलने के लिए समर्पित किया है, जो भक्ति, पवित्रता और कालातीत कारीगरी को दर्शाते हैं।",
    storyParagraph2:
      "हर शिवलिंग को व्यक्तिगत रूप से चुना, हाथ से आकार दिया, पॉलिश किया और प्राचीन वैदिक शास्त्र व पारंपरिक कारीगर विधियों के अनुसार तैयार किया जाता है। ये पवित्र रचनाएं घर पूजा, मंदिर स्थापना, ध्यान, आध्यात्मिक उपहार और धार्मिक अनुष्ठानों के लिए आदर्श हैं, जो हर घर में भगवान शिव का दिव्य आशीर्वाद लाती हैं।",
    storyParagraph3:
      "आज, पूरे भारत के भक्त, मंदिर, आध्यात्मिक संगठन और संग्रहकर्ता असली नर्मदेश्वर शिवलिंग, उत्कृष्ट कारीगरी, सुरक्षित राष्ट्रव्यापी डिलीवरी और असाधारण ग्राहक सेवा के लिए नामदेव नर्मदेश्वर शिवलिंग आर्ट पर भरोसा करते हैं। हर शिवलिंग प्रामाणिकता, गुणवत्ता, भक्ति और पवित्र नर्मदा नदी की पवित्र विरासत के प्रति हमारी अटूट प्रतिबद्धता को दर्शाता है।",
    heritageHighlightBadge: "हज़ारों भक्तों का भरोसा",
    heritageHighlightTitleLine1: "दिव्य कारीगरी का अनुभव करें",
    heritageHighlightTitleLine2: "नामदेव नर्मदेश्वर शिवलिंग आर्ट के साथ",
    heritageHighlightDescription:
      "पारंपरिक वैदिक कारीगरी का उपयोग करके मां नर्मदा के पवित्र पत्थरों से हस्तनिर्मित असली नर्मदेश्वर शिवलिंग का हमारा संग्रह देखें। हर शिवलिंग भक्ति के साथ बनाया, सावधानी से जांचा और आपके घर या मंदिर में भगवान शिव का दिव्य आशीर्वाद लाने के लिए सुरक्षित रूप से पहुंचाया जाता है।",
    heritageHighlightBadges: [
      "पीढ़ियों की विरासत",
      "100% असली",
      "मंदिर गुणवत्ता",
      "मुफ्त डिलीवरी",
    ],
    heritageHighlightCta: "असली शिवलिंग देखें",
    heritageHighlightNote:
      "सुरक्षित भुगतान • सुरक्षित पैकेजिंग • पूरे भारत में डिलीवरी",
    missionBadge: "हमारी प्रतिबद्धता",
    missionTitleLine1: "आस्था, परंपरा और",
    missionTitleLine2: "उत्कृष्टता से प्रेरित",
    missionDescription:
      "हमारे द्वारा बनाया गया हर नर्मदेश्वर शिवलिंग प्रामाणिकता, भक्ति और पारंपरिक कारीगरी के प्रति हमारे परिवार की दीर्घकालिक प्रतिबद्धता को दर्शाता है। पवित्र नर्मदा नदी के पत्थरों से लेकर कुशल कारीगरों द्वारा सावधानीपूर्वक फिनिशिंग तक, हर शिवलिंग भगवान शिव का दिव्य आशीर्वाद लेकर आता है।",
    missionCards: [
      {
        title: "प्रामाणिक विरासत",
        desc: "स्वर्गीय श्री मांगीलाल नामदेव से लेकर श्री दीपक नामदेव और श्री शिवनारायण नामदेव तक आगे बढ़ी, नामदेव नर्मदेश्वर शिवलिंग आर्ट पारंपरिक कारीगर तकनीकों का उपयोग करके असली नर्मदेश्वर शिवलिंग बनाने की पवित्र पारिवारिक विरासत को संरक्षित रखता है।",
      },
      {
        title: "पवित्र नर्मदा नदी के पत्थर",
        desc: "हर शिवलिंग पवित्र नर्मदा नदी से एकत्रित प्राकृतिक रूप से बने बाणलिंग पत्थरों से हस्तनिर्मित है, जो हिंदू परंपरा में अपने आध्यात्मिक महत्व के लिए पूजनीय हैं।",
      },
      {
        title: "हमारा गुणवत्ता वादा",
        desc: "हम सुनिश्चित करते हैं कि हर असली नर्मदेश्वर शिवलिंग वैदिक शास्त्र के अनुसार हस्तनिर्मित, गुणवत्ता जांचा, सुरक्षित रूप से पैक और पूरे भारत में पूर्ण प्रामाणिकता के साथ सुरक्षित रूप से पहुंचाया जाए।",
      },
    ],
    missionCardBadge: "नामदेव विरासत",
    missionCardFooter: "असली पारिवारिक कला",
    whyBadge: "हमें क्यों चुनें",
    whyTitleLine1: "भरोसेमंद विरासत,",
    whyTitleLine2: "असली कारीगरी",
    whyDescription:
      "जानें कि क्यों हज़ारों भक्त, मंदिर और आध्यात्मिक संगठन मां नर्मदा के पवित्र पत्थरों से हस्तनिर्मित असली नर्मदेश्वर शिवलिंग के लिए नामदेव नर्मदेश्वर शिवलिंग आर्ट पर भरोसा करते हैं।",
    whyFeatures: [
      {
        title: "मंदिर गुणवत्ता",
        desc: "पूरे भारत में मंदिरों, आश्रमों और आध्यात्मिक संस्थानों द्वारा असली नर्मदेश्वर शिवलिंग के लिए भरोसेमंद।",
      },
      {
        title: "पवित्र नर्मदा पत्थर",
        desc: "हर शिवलिंग प्राकृतिक रूप से बने पवित्र नर्मदा नदी के बाणलिंग पत्थरों से हस्तनिर्मित है।",
      },
      {
        title: "वैदिक शास्त्र निर्मित",
        desc: "कारीगरी के हर चरण में पारंपरिक कारीगर तकनीकों और वैदिक शास्त्र सिद्धांतों का पालन किया जाता है।",
      },
      {
        title: "पीढ़ियों की विरासत",
        desc: "नामदेव परिवार की चार पीढ़ियां नर्मदेश्वर शिवलिंग कारीगरी की पवित्र परंपरा को संरक्षित रख रही हैं।",
      },
      {
        title: "सुरक्षित पैन इंडिया डिलीवरी",
        desc: "हर पवित्र शिवलिंग की सुरक्षा के लिए सुरक्षित पैकेजिंग और भरोसेमंद डोरस्टेप डिलीवरी।",
      },
      {
        title: "हज़ारों का भरोसा",
        desc: "पूरे भारत में भक्तों, मंदिरों, आध्यात्मिक संगठनों और संग्रहकर्ताओं की पहली पसंद।",
      },
    ],
    whyFeatureFooter: "भरोसेमंद विरासत",
    statsBadge: "हमारी विरासत",
    statsTitleLine1: "भरोसेमंद विरासत,",
    statsTitleLine2: "भक्ति से निर्मित",
    statsDescription:
      "पीढ़ियों से, नामदेव नर्मदेश्वर शिवलिंग आर्ट भारत और विदेशों में भक्तों, मंदिरों और आध्यात्मिक साधकों के लिए प्राकृतिक नर्मदा नदी के पत्थरों से असली नर्मदेश्वर शिवलिंग बनाने की पवित्र परंपरा को संरक्षित रख रहा है।",
    stats: [
      {
        number: '1"–24 फीट',
        title: "आकार",
        desc: "घर पूजा से लेकर मंदिर स्थापना तक।",
      },
      {
        number: "4",
        title: "पीढ़ियां",
        desc: "इस पवित्र कला में नामदेव परिवार की।",
      },
      {
        number: "100%",
        title: "असली पत्थर",
        desc: "पवित्र नर्मदा नदी बाणलिंग।",
      },
      {
        number: "पैन इंडिया",
        title: "व विश्वभर",
        desc: "भारत और विदेशों में भरोसेमंद डिलीवरी।",
      },
    ],
    ctaBadge: "अपनी आध्यात्मिक यात्रा शुरू करें",
    ctaTitleLine1: "घर लाएं",
    ctaTitleLine2: "भगवान शिव का दिव्य आशीर्वाद",
    ctaDescription:
      "पीढ़ियों पुरानी पारिवारिक विरासत को आगे बढ़ाने वाले कुशल कारीगरों द्वारा मां नर्मदा के पवित्र पत्थरों से हस्तनिर्मित असली नर्मदेश्वर शिवलिंग का हमारा विशेष संग्रह देखें। हर असली बाणलिंग शिवलिंग सावधानी से चुना, पारंपरिक रूप से पॉलिश और वैदिक शास्त्र के अनुसार तैयार किया गया है, जो घर पूजा, मंदिर स्थापना, ध्यान, आध्यात्मिक उपहार और भगवान शिव को समर्पित पवित्र कर्मकांडों के लिए आदर्श है।",
    ctaTrustTags: [
      "100% असली नर्मदेश्वर शिवलिंग",
      "पवित्र नर्मदा नदी के पत्थर",
      "मंदिर गुणवत्ता फिनिश",
      "कुशल कारीगरों द्वारा हस्तनिर्मित",
      "पूरे भारत में सुरक्षित डिलीवरी",
      "सुरक्षित भुगतान",
    ],
    ctaPrimary: "असली शिवलिंग देखें",
    ctaSecondary: "हमारे विशेषज्ञों से बात करें",
    ctaFootnote:
      "पूरे भारत में हज़ारों भक्त, मंदिर और आध्यात्मिक संगठन असली नर्मदेश्वर शिवलिंग, उत्कृष्ट कारीगरी और सुरक्षित डोरस्टेप डिलीवरी के लिए भरोसा करते हैं।",
  },
};

// ---------------------------------------------------------------------------
// Contact page
// ---------------------------------------------------------------------------
export const CONTACT_PAGE_CONTENT = {
  en: {
    badge: "✨ Contact Our Workshop",
    titleLine1: "Namdev Narmadeshwar Shivling Art.",
    titleLine2: "Authentic Narmadeshwar Shivling Manufacturer",
    description:
      "Speak directly with our experienced artisans for authentic Narmadeshwar Shivlings, Temple Shivlings, Marble Shivlings, Custom Shivlings, Wholesale Orders, and Worldwide Shipping. We have been serving devotees, temples, and spiritual organizations with genuine handcrafted Shivlings for over 100 years.",
    trustPills: ["✅ Generations of Heritage", "🚚 Worldwide Shipping", "🛕 Temple Orders", "⭐ Genuine Narmadeshwar Stone"],
    locationBadge: "Our Location",
    locationTitle: "Visit Our Narmadeshwar Shivling Workshop",
    locationNote:
      "Visit our workshop in Khargone, Madhya Pradesh, where skilled artisans craft authentic Narmadeshwar Shivlings, Shiv Parivar idols, and customized spiritual sculptures using traditional craftsmanship.",
    contactCardLabel: "Contact Us",
    contactCardCta: "Connect Now →",
    contactCardTitles: { phone: "Call Us", email: "Email", whatsapp: "WhatsApp" },
    contactCardValues: { whatsapp: "Chat with us" },
    formBadge: "Contact Our Shivling Experts",
    formTitle: "Send an Inquiry",
    formSubtitle: "We'll get back to you within 24 hours.",
    formFields: {
      name: "Full Name",
      namePlaceholder: "John Doe",
      phone: "Mobile Number",
      phonePlaceholder: "9876543210",
      email: "Email Address",
      emailPlaceholder: "example@gmail.com",
      subject: "Inquiry Type",
      subjectPlaceholder: "Select Inquiry",
      subjectOptions: ["Temple Order", "Wholesale Inquiry", "Custom Shivling", "Export Inquiry", "General Inquiry"],
      message: "Message",
      messagePlaceholder: "Tell us about your requirement...",
      validation: {
        nameRequired: "Please enter your full name.",
        nameMin: "Name must be at least 3 characters.",
        nameMax: "Name cannot exceed 50 characters.",
        namePattern: "Only letters, spaces, hyphens and apostrophes are allowed.",
        phoneRequired: "Please enter your mobile number.",
        phonePattern: "Enter a valid 10-digit Indian mobile number.",
        emailRequired: "Please enter your email address.",
        emailInvalid: "Please enter a valid email address.",
        subjectRequired: "Please select inquiry type.",
        messageRequired: "Please enter your message.",
        messageMin: "Message should contain at least 20 characters.",
        messageMax: "Message cannot exceed 500 characters.",
      },
    },
    whyContactTitle: "Why Contact Us?",
    whyContactDescription:
      "Receive expert guidance on authentic Narmadeshwar Shivlings, wholesale orders, customization, and worldwide shipping assistance.",
    submitButton: "Get Free Shivling Consultation",
    submitButtonLoading: "Sending...",
    privacyNote: "🔒 Your information is kept secure and will never be shared with third parties.",
    faqBadge: "Frequently Asked Questions",
    faqTitleLine1: "Everything You Need to Know About",
    faqTitleLine2: "Narmadeshwar Shivlings",
    faqDescription:
      "Learn more about authentic Narmadeshwar Shivlings, custom orders, worldwide shipping, wholesale supply, Marble Shivlings, Temple Shivlings, Stone Shivlings, and Religious Sculptures.",
    faqAnswerBadge: "Helpful Answer",
    faqs: [
      {
        question: "How can I order an Authentic Narmadeshwar Shivling?",
        answer:
          "You can contact us by phone, WhatsApp, email, or by submitting the inquiry form on this page. Our team will help you choose the right Narmadeshwar Shivling based on size, weight, purpose, and budget.",
      },
      {
        question: "Do you provide worldwide shipping?",
        answer:
          "Yes. We safely ship authentic Narmadeshwar Shivlings, Shiva Idols, Temple Shivlings, and Religious Sculptures across India and internationally using secure packaging.",
      },
      {
        question: "Can I order custom sizes or handmade Shivlings?",
        answer:
          "Absolutely. We manufacture custom handmade Shivlings in different sizes, weights, and finishes for homes, temples, businesses, and spiritual organizations.",
      },
      {
        question: "Are your Narmadeshwar Shivlings original?",
        answer:
          "Yes. Every Narmadeshwar Shivling is sourced and crafted with traditional methods. We are a trusted Narmadeshwar Shivling manufacturer and supplier from Khargone, Madhya Pradesh.",
      },
      {
        question: "Do you manufacture Marble Shivlings and Stone Shivlings?",
        answer:
          "Yes. Along with authentic Narmadeshwar Shivlings, we also manufacture Marble Shivlings, Stone Shivlings, Shiva Idols, Temple Shivlings, and customized religious sculptures.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery within India generally takes 3–7 business days depending on your location. International shipping times vary by destination and customs clearance.",
      },
      {
        question: "Do you supply wholesale orders?",
        answer:
          "Yes. We are a leading Narmadeshwar Shivling supplier and exporter offering wholesale pricing for retailers, temples, spiritual organizations, and distributors.",
      },
    ],
    mapBadge: "Visit Our Workshop",
    mapTitleLine1: "Visit",
    mapTitleLine2: "Namdev Narmadeshwar Shivling Art",
    mapDescription:
      "Located in Khargone, Madhya Pradesh, our workshop has been crafting authentic Narmadeshwar Shivlings for over 100 years.",
    directions: "Get Directions",
    mapFeatureCards: [
      { title: "Location", desc: "Khargone, Madhya Pradesh" },
      { title: "Authentic Shivlings", desc: "Genuine Narmadeshwar Shivlings" },
      { title: "Heritage", desc: "100+ Years Traditional Craftsmanship" },
      { title: "Experience", desc: "Serving devotees for generations" },
    ],
  },
  hi: {
    badge: "✨ हमारी कार्यशाला से संपर्क करें",
    titleLine1: "नामदेव नर्मदेश्वर शिवलिंग आर्ट।",
    titleLine2: "असली नर्मदेश्वर शिवलिंग निर्माता",
    description:
      "असली नर्मदेश्वर शिवलिंग, मंदिर शिवलिंग, संगमरमर शिवलिंग, कस्टम शिवलिंग, थोक ऑर्डर और विश्वभर डिलीवरी के लिए हमारे अनुभवी कारीगरों से सीधे बात करें। हम 100 से अधिक वर्षों से भक्तों, मंदिरों और आध्यात्मिक संगठनों को असली हस्तनिर्मित शिवलिंग प्रदान कर रहे हैं।",
    trustPills: ["✅ पीढ़ियों की विरासत", "🚚 विश्वभर डिलीवरी", "🛕 मंदिर ऑर्डर", "⭐ असली नर्मदेश्वर पत्थर"],
    locationBadge: "हमारा स्थान",
    locationTitle: "हमारी नर्मदेश्वर शिवलिंग कार्यशाला देखें",
    locationNote:
      "मध्य प्रदेश के खरगोन में हमारी कार्यशाला देखें, जहां कुशल कारीगर पारंपरिक कारीगरी का उपयोग करके असली नर्मदेश्वर शिवलिंग, शिव परिवार की मूर्तियां और कस्टम आध्यात्मिक मूर्तियां बनाते हैं।",
    contactCardLabel: "संपर्क करें",
    contactCardCta: "अभी जुड़ें →",
    contactCardTitles: { phone: "कॉल करें", email: "ईमेल", whatsapp: "व्हाट्सएप" },
    contactCardValues: { whatsapp: "हमसे चैट करें" },
    formBadge: "हमारे शिवलिंग विशेषज्ञों से संपर्क करें",
    formTitle: "पूछताछ भेजें",
    formSubtitle: "हम 24 घंटे के भीतर आपसे संपर्क करेंगे।",
    formFields: {
      name: "पूरा नाम",
      namePlaceholder: "राम शर्मा",
      phone: "मोबाइल नंबर",
      phonePlaceholder: "9876543210",
      email: "ईमेल पता",
      emailPlaceholder: "example@gmail.com",
      subject: "पूछताछ का प्रकार",
      subjectPlaceholder: "पूछताछ चुनें",
      subjectOptions: ["मंदिर ऑर्डर", "थोक पूछताछ", "कस्टम शिवलिंग", "निर्यात पूछताछ", "सामान्य पूछताछ"],
      message: "संदेश",
      messagePlaceholder: "अपनी आवश्यकता के बारे में बताएं...",
      validation: {
        nameRequired: "कृपया अपना पूरा नाम दर्ज करें।",
        nameMin: "नाम कम से कम 3 अक्षरों का होना चाहिए।",
        nameMax: "नाम 50 अक्षरों से अधिक नहीं हो सकता।",
        namePattern: "केवल अक्षर, स्पेस, हाइफ़न और अपॉस्ट्रॉफी की अनुमति है।",
        phoneRequired: "कृपया अपना मोबाइल नंबर दर्ज करें।",
        phonePattern: "एक मान्य 10-अंकीय भारतीय मोबाइल नंबर दर्ज करें।",
        emailRequired: "कृपया अपना ईमेल पता दर्ज करें।",
        emailInvalid: "कृपया एक मान्य ईमेल पता दर्ज करें।",
        subjectRequired: "कृपया पूछताछ का प्रकार चुनें।",
        messageRequired: "कृपया अपना संदेश दर्ज करें।",
        messageMin: "संदेश में कम से कम 20 अक्षर होने चाहिए।",
        messageMax: "संदेश 500 अक्षरों से अधिक नहीं हो सकता।",
      },
    },
    whyContactTitle: "हमसे संपर्क क्यों करें?",
    whyContactDescription:
      "असली नर्मदेश्वर शिवलिंग, थोक ऑर्डर, कस्टमाइज़ेशन और विश्वभर शिपिंग सहायता पर विशेषज्ञ सलाह प्राप्त करें।",
    submitButton: "मुफ्त शिवलिंग परामर्श लें",
    submitButtonLoading: "भेजा जा रहा है...",
    privacyNote: "🔒 आपकी जानकारी सुरक्षित रखी जाती है और किसी तीसरे पक्ष के साथ साझा नहीं की जाएगी।",
    faqBadge: "अक्सर पूछे जाने वाले प्रश्न",
    faqTitleLine1: "नर्मदेश्वर शिवलिंग के बारे में",
    faqTitleLine2: "आपको जो कुछ जानना चाहिए",
    faqDescription:
      "असली नर्मदेश्वर शिवलिंग, कस्टम ऑर्डर, विश्वभर डिलीवरी, थोक आपूर्ति, संगमरमर शिवलिंग, मंदिर शिवलिंग, पत्थर शिवलिंग और धार्मिक मूर्तियों के बारे में और जानें।",
    faqAnswerBadge: "सहायक उत्तर",
    faqs: [
      {
        question: "मैं असली नर्मदेश्वर शिवलिंग कैसे ऑर्डर कर सकता हूं?",
        answer:
          "आप फ़ोन, व्हाट्सएप, ईमेल के ज़रिए या इस पेज पर पूछताछ फॉर्म भरकर हमसे संपर्क कर सकते हैं। हमारी टीम आकार, वज़न, उद्देश्य और बजट के आधार पर सही नर्मदेश्वर शिवलिंग चुनने में आपकी मदद करेगी।",
      },
      {
        question: "क्या आप विश्वभर डिलीवरी करते हैं?",
        answer:
          "हां। हम सुरक्षित पैकेजिंग का उपयोग करके असली नर्मदेश्वर शिवलिंग, शिव मूर्तियां, मंदिर शिवलिंग और धार्मिक मूर्तियों को भारत और विदेशों में सुरक्षित रूप से भेजते हैं।",
      },
      {
        question: "क्या मैं कस्टम आकार या हस्तनिर्मित शिवलिंग ऑर्डर कर सकता हूं?",
        answer:
          "बिल्कुल। हम घरों, मंदिरों, व्यवसायों और आध्यात्मिक संगठनों के लिए अलग-अलग आकार, वज़न और फिनिश में कस्टम हस्तनिर्मित शिवलिंग बनाते हैं।",
      },
      {
        question: "क्या आपके नर्मदेश्वर शिवलिंग असली हैं?",
        answer:
          "हां। हर नर्मदेश्वर शिवलिंग पारंपरिक विधियों से प्राप्त और निर्मित है। हम मध्य प्रदेश के खरगोन के एक विश्वसनीय नर्मदेश्वर शिवलिंग निर्माता और आपूर्तिकर्ता हैं।",
      },
      {
        question: "क्या आप संगमरमर शिवलिंग और पत्थर शिवलिंग भी बनाते हैं?",
        answer:
          "हां। असली नर्मदेश्वर शिवलिंग के साथ-साथ, हम संगमरमर शिवलिंग, पत्थर शिवलिंग, शिव मूर्तियां, मंदिर शिवलिंग और कस्टम धार्मिक मूर्तियां भी बनाते हैं।",
      },
      {
        question: "डिलीवरी में कितना समय लगता है?",
        answer:
          "भारत में डिलीवरी आमतौर पर आपके स्थान के आधार पर 3–7 कार्य दिवस लेती है। अंतरराष्ट्रीय शिपिंग का समय गंतव्य और सीमा शुल्क निकासी के अनुसार अलग-अलग होता है।",
      },
      {
        question: "क्या आप थोक ऑर्डर की आपूर्ति करते हैं?",
        answer:
          "हां। हम एक अग्रणी नर्मदेश्वर शिवलिंग आपूर्तिकर्ता और निर्यातक हैं जो रिटेलरों, मंदिरों, आध्यात्मिक संगठनों और वितरकों के लिए थोक मूल्य प्रदान करते हैं।",
      },
    ],
    mapBadge: "हमारी कार्यशाला देखें",
    mapTitleLine1: "देखें",
    mapTitleLine2: "नामदेव नर्मदेश्वर शिवलिंग आर्ट",
    mapDescription:
      "मध्य प्रदेश के खरगोन में स्थित, हमारी कार्यशाला 100 से अधिक वर्षों से असली नर्मदेश्वर शिवलिंग बना रही है।",
    directions: "दिशा-निर्देश प्राप्त करें",
    mapFeatureCards: [
      { title: "स्थान", desc: "खरगोन, मध्य प्रदेश" },
      { title: "असली शिवलिंग", desc: "प्रामाणिक नर्मदेश्वर शिवलिंग" },
      { title: "विरासत", desc: "100+ वर्षों की पारंपरिक कारीगरी" },
      { title: "अनुभव", desc: "पीढ़ियों से भक्तों की सेवा" },
    ],
  },
};


// ---------------------------------------------------------------------------
// Gallery page
// ---------------------------------------------------------------------------
export const GALLERY_PAGE_CONTENT = {
  en: {
    badge: "Our Work",
    title: "Gallery",
    view: "View",
    imageAlt: "Handcrafted Narmadeshwar Shivling — gallery item",
    emptyTitle: "Gallery is empty",
    emptyDescription: "Photos will appear here once the admin adds products.",
  },
  hi: {
    badge: "हमारा काम",
    title: "गैलरी",
     view: "देखें",
    imageAlt: "हस्तनिर्मित नर्मदेश्वर शिवलिंग — गैलरी आइटम",
    emptyTitle: "गैलरी खाली है",
    emptyDescription:
      "एडमिन द्वारा उत्पाद जोड़ने के बाद यहां तस्वीरें दिखाई देंगी।",
  },
};

// ---------------------------------------------------------------------------
// Products listing page
// ---------------------------------------------------------------------------
export const PRODUCTS_PAGE_CONTENT = {
  en: { badge: "Our Collection", title: "Products" },
  hi: { badge: "हमारा संग्रह", title: "उत्पाद" },
};

// ---------------------------------------------------------------------------
// Wishlist page
// ---------------------------------------------------------------------------
export const WISHLIST_CONTENT = {
  en: {
    badge: "Your Wishlist",
    savedCount: (n) => `${n} saved item${n > 1 ? "s" : ""}`,
    emptyCount: "Nothing saved yet",
    emptyTitle: "Your wishlist is empty",
    emptyDescription:
      "Tap the heart icon on any product to save it here for later.",
    browseButton: "Browse Products",
  },
  hi: {
    badge: "आपकी इच्छा-सूची",
    savedCount: (n) => `${n} सहेजा गया उत्पाद`,
    emptyCount: "अभी तक कुछ सहेजा नहीं गया",
    emptyTitle: "आपकी इच्छा-सूची खाली है",
    emptyDescription:
      "किसी भी उत्पाद पर हार्ट आइकन दबाकर उसे बाद के लिए यहां सहेजें।",
    browseButton: "उत्पाद देखें",
  },
};

// ---------------------------------------------------------------------------
// Footer / announcement bar
// ---------------------------------------------------------------------------
export const ANNOUNCEMENT_CONTENT = {
  en: [
    "Free Shipping Across India",
    "Bulk Order Discount Available",
    "100% Original Narmadeshwar Shivlings",
    "Custom Shivling Orders Accepted",
  ],
  hi: [
    "पूरे भारत में मुफ्त शिपिंग",
    "बल्क ऑर्डर पर छूट उपलब्ध",
    "100% असली नर्मदेश्वर शिवलिंग",
    "कस्टम शिवलिंग ऑर्डर स्वीकार",
  ],
};

// ---------------------------------------------------------------------------
// Floating contact widget
// ---------------------------------------------------------------------------
export const FLOATING_WIDGET_CONTENT = {
  en: {
    whatsapp: "Chat with us on WhatsApp",
    bookConsultation: "Book a Consultation",
    scrollTop: "Scroll back to top",
  },
  hi: {
    whatsapp: "व्हाट्सएप पर हमसे चैट करें",
    bookConsultation: "परामर्श बुक करें",
    scrollTop: "ऊपर वापस जाएं",
  },
};
