import { FaWhatsapp } from "react-icons/fa";
import { business } from "@/lib/business";

const WHATSAPP_MESSAGE = "Hi! I need help finding a used engine or transmission.";

export default function WhatsAppButton() {
  const rawNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    (business.phone ? business.phone.replace(/\D/g, "") : "18882904476");

  // Ensure international format for US (10 digits -> prepend 1)
  const whatsappNumber =
    rawNumber.length === 10 ? `1${rawNumber}` : rawNumber;

  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with A&R Auto Parts on WhatsApp"
      title="Chat on WhatsApp"
      className="whatsapp-intro fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_22px_rgba(37,211,102,.38)] transition duration-200 hover:scale-105 hover:bg-[#20bd5a] active:scale-95 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-7 sm:right-7"
    >
      <FaWhatsapp aria-hidden className="size-8" />
      <span className="sr-only">Open WhatsApp chat</span>
    </a>
  );
}
