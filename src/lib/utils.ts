import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/55${cleanPhone}?text=${encodedMsg}`;
}
