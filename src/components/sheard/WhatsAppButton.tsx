import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const WHATSAPP_MESSAGE = "Hi! I need help finding a used engine or transmission.";

export default function WhatsAppButton() {
  const hasWhatsAppNumber = Boolean(WHATSAPP_NUMBER);
  const href = hasWhatsAppNumber
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : "/contact";

  return (
    <a
      href={href}
      target={hasWhatsAppNumber ? "_blank" : undefined}
      rel={hasWhatsAppNumber ? "noopener noreferrer" : undefined}
      aria-label={hasWhatsAppNumber ? "Chat with A&R Auto Parts on WhatsApp" : "Contact A&R Auto Parts"}
      title={hasWhatsAppNumber ? "Chat on WhatsApp" : "Contact us"}
      className="whatsapp-intro fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_22px_rgba(37,211,102,.38)] transition duration-200 hover:scale-105 hover:bg-[#20bd5a] active:scale-95 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-7 sm:right-7"
    >
      <FaWhatsapp aria-hidden className="size-8" />
      <span className="sr-only">
        {hasWhatsAppNumber ? "Open WhatsApp chat" : "Open contact page"}
      </span>
    </a>
  );
}
