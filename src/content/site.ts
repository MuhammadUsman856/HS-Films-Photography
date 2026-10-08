export const site = {
  name: "HS Films & Photography",
  shortName: "HS Films",
  tagline: "We Capture Moments. You Keep the Memories.",
  description:
    "HS Films & Photography provides professional wedding photography, videography, event coverage, cinematic films, video editing and premium album design.",
  url: "https://www.hsfilmsphotography.com",
  email: "hs305515@gmail.com",
  phone: "+92 316 5334409",
  whatsapp: "923165334409",
  location: {
    line: "Studio location coming soon",
    city: "Pakistan",
    region: "Punjab",
    country: "PK",
  },
  hours: "By appointment · Daily 10:00 AM – 8:00 PM",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  youtube: "https://youtube.com/",
  tiktok: "https://tiktok.com/",
} as const;

export const stats = [
  { value: 100, suffix: "+", label: "Events Captured" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 1000, suffix: "+", label: "Moments Preserved" },
  { value: 1, suffix: "", label: "Professional Creative Team" },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/packages", label: "Packages" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/packages", label: "Packages" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/resources", label: "Resources" },
] as const;

export const footerServices = [
  { href: "/services", label: "Wedding Photography" },
  { href: "/services", label: "Videography" },
  { href: "/services", label: "Events" },
  { href: "/services", label: "Editing" },
  { href: "/services", label: "Album Design" },
  { href: "/services", label: "Portraits" },
] as const;
