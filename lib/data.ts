export const COMPANY = {
  name: "Merciful Industrial Tools Co.",
  short: "Merciful Tools",
  tagline: "Precision Engineering, Trusted Wholesale Supply Since 2004.",
  phone: "+91 88008 08346",
  phoneHref: "tel:+918800808346",
  whatsapp: "918800093346",
  address:
    "881/A, Gali No. 30/4, Indra Chowk, Jafrabad, Shahdara, North East Delhi, Delhi — 110053",
  contacts: ["Haji Mohd Irfan (Owner)"],
  gstin: "07AIHPM2161K1Z6",
  gstinSince: "Registered 01 July 2017",
  hsn: [
    {
      code: "82051000",
      desc: "Hand tools, clamps, vices, blow lamps & manual drilling / threading / tapping implements",
    },
    {
      code: "61179000",
      desc: "Secondary components & custom auxiliary industrial attachments",
    },
  ],
  indiamart:
    "https://www.indiamart.com/merciful-industrialtoolscompany/",
};

export const WA_RFQ_LINK = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  "Hello Merciful Industrial Tools, I would like to request a quote."
)}`;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Products", href: "/products" },
  { label: "Quality & Compliance", href: "/#quality" },
  { label: "Contact Us", href: "/#contact" },
];

export const MARQUEE_PRODUCTS = [
  { img: "/assets/products/hardened-ground-v-blocks.jpg", name: "V-Block" },
  { img: "/assets/products/ci-angle-plate-plain.jpg", name: "Angle Plate" },
  { img: "/assets/products/adjustable-hand-reamers.jpg", name: "Adjustable Hand Reamer" },
  { img: "/assets/p02.jpg", name: "Adjustable Tap Wrench" },
  { img: "/assets/p05.jpg", name: "Radius Gauge Set" },
];

export const STATS = [
  { value: 2004, label: "Established in New Delhi", isYear: true },
  { value: 20, suffix: "+", label: "Years of wholesale supply" },
  { value: 4, label: "Specialised product families" },
  { value: 35, suffix: "+", label: "Tool lines in catalogue" },
];
