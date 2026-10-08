import { clsx } from "clsx";

export function cn(...inputs: Array<string | false | null | undefined>) {
  return clsx(inputs);
}

export function formatPhoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function whatsappHref(number: string, message?: string) {
  const text = encodeURIComponent(
    message ?? "Hello HS Films & Photography, I would like to discuss a booking.",
  );
  return `https://wa.me/${number}?text=${text}`;
}
