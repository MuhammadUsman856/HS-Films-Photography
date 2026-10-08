export type Package = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  priceLabel: string;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    slug: "essential",
    name: "Essential",
    tagline: "For smaller events and simple photography coverage.",
    description:
      "A focused photography package for intimate gatherings, portraits and shorter celebrations.",
    features: [
      "Dedicated photographer",
      "Coverage window tailored to the event",
      "Professionally edited highlights",
      "Online private gallery",
      "High-resolution digital delivery",
    ],
    priceLabel: "Quote on request",
  },
  {
    slug: "classic",
    name: "Classic",
    tagline: "Photography + videography coverage.",
    description:
      "A balanced photography and videography experience for weddings, birthdays and signature events.",
    features: [
      "Photography + videography team",
      "Cinematic highlight film",
      "Full event still coverage",
      "Color-graded delivery",
      "Private online gallery",
    ],
    priceLabel: "Quote on request",
    featured: true,
  },
  {
    slug: "premium",
    name: "Premium",
    tagline: "Extended coverage + cinematic video + album.",
    description:
      "Our most complete experience — longer coverage, cinematic storytelling and a designed heirloom album.",
    features: [
      "Extended multi-event coverage",
      "Cinematic film + highlight cut",
      "Premium album design",
      "Advanced color grading",
      "Priority editing timeline",
      "Social media reels",
    ],
    priceLabel: "Quote on request",
  },
  {
    slug: "custom",
    name: "Custom",
    tagline: "A fully customized package based on the client's event.",
    description:
      "Designed around your calendar, family traditions, locations and creative brief. Travel, extra days and specialty films can all be included.",
    features: [
      "Tailored team size",
      "Flexible coverage hours",
      "Mixed photography & film",
      "Album, reels or restoration add-ons",
      "Direct creative consultation",
    ],
    priceLabel: "Custom quote",
  },
];
