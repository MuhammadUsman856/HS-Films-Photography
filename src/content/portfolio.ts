export const categories = [
  "Weddings",
  "Pre-Weddings",
  "Birthdays",
  "Events",
  "Portraits",
  "Cinematic Films",
  "Commercial",
  "Albums",
] as const;

export type Category = (typeof categories)[number];

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  date: string;
  location: string;
  description: string;
  cover: string;
  video?: {
    type: "youtube" | "vimeo" | "self" | "background";
    src: string;
  };
  gallery: string[];
};

export const portfolio: PortfolioProject[] = [
  {
    slug: "sarah-ahmed-wedding",
    title: "A Day to Remember — Sarah & Ahmed",
    subtitle: "Wedding Photography & Cinematic Film",
    category: "Weddings",
    date: "February 2025",
    location: "Lahore",
    description:
      "A luminous winter wedding woven with gold, garden florals and quiet family rituals. We followed the couple from morning preparations through a candlelit reception, creating both a still story and a cinematic film.",
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    video: { type: "youtube", src: "" },
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "noor-hassan-mehndi",
    title: "Saffron Evening — Noor & Hassan",
    subtitle: "Mehndi & Event Coverage",
    category: "Events",
    date: "November 2024",
    location: "Islamabad",
    description:
      "Color, movement and music. This mehndi night was photographed like a fashion editorial — rich in texture, gesture and light.",
    cover:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "prewedding-kaghan",
    title: "Light Over the Valley",
    subtitle: "Pre-Wedding Session",
    category: "Pre-Weddings",
    date: "April 2025",
    location: "Kaghan Valley",
    description:
      "A slow morning in mountain light. This session was designed around landscape, wardrobe and the couple’s quiet chemistry.",
    cover:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "aisha-thirty",
    title: "Thirty in Gold",
    subtitle: "Birthday Celebration",
    category: "Birthdays",
    date: "August 2025",
    location: "Karachi",
    description:
      "An intimate birthday dinner photographed with the same care as a wedding — candlelight, guest portraits and the small rituals of a milestone night.",
    cover:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "family-portraits-lahore",
    title: "Sunday Light",
    subtitle: "Family Portraits",
    category: "Portraits",
    date: "January 2026",
    location: "Lahore",
    description:
      "A family session shaped by natural window light, unhurried direction and a refined, editorial finish.",
    cover:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "cinematic-film-reels",
    title: "The Night Unfolds",
    subtitle: "Cinematic Highlight Film",
    category: "Cinematic Films",
    date: "December 2024",
    location: "Lahore",
    description:
      "A wedding film built on sound, color and pacing — less recap, more emotion. Replace the placeholder with your YouTube, Vimeo or self-hosted film.",
    cover:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
    video: { type: "youtube", src: "" },
    gallery: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "atelier-lookbook",
    title: "Atelier Lookbook",
    subtitle: "Commercial Photography",
    category: "Commercial",
    date: "March 2025",
    location: "Studio",
    description:
      "A controlled-light commercial series for a fashion atelier — texture, silhouette and color treated with cinematic restraint.",
    cover:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "heirloom-album",
    title: "Heirloom Volume I",
    subtitle: "Album Design",
    category: "Albums",
    date: "May 2025",
    location: "Studio",
    description:
      "A linen-bound wedding album sequenced as a story rather than a catalogue. Layouts, paper and image selection were designed for the next generation.",
    cover:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];
