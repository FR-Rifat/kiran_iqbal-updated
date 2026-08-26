import { business } from "@/lib/business";

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${business.phone}`}
      aria-label={`Call A&R Auto Parts at ${business.phone}`}
      className="fixed bottom-5 left-5 z-50 inline-flex min-h-12 items-center justify-center rounded-md bg-green-600 px-6 font-['Inter'] text-base font-medium text-white shadow-[0_8px_22px_rgba(0,153,0,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-green-700 active:translate-y-0 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-green-600 sm:bottom-7 sm:left-7"
    >
      Call: {business.phone}
    </a>
  );
}
