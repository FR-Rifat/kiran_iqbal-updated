import { FiCheckCircle } from "react-icons/fi";

const policies = [
  {
    title: "Warranty and Return Eligibility",
    items: [
      "Used-part mileage is not certified.",
      "A return is not accepted when the customer ordered the wrong part or no longer needs the part.",
      "Unauthorized disassembly, alteration, or installation outside the applicable requirements voids warranty and return eligibility.",
      "Claims and returns must include the customer invoice and satisfy the applicable warranty period and written authorization requirements.",
    ],
  },
  {
    title: "Fees and Freight",
    items: [
      "Returns or refused orders are subject to a 25% restocking or processing fee plus freight charges in both directions, as applicable.",
      "Mis-ordered or misdiagnosed parts are assessed a 25% processing charge and the customer is responsible for freight both ways.",
      "Installed parts returned under an approved process are subject to a 25% handling and processing fee, with shipping costs paid by the customer.",
      "Cancellations before shipment are subject to a 25% processing and handling fee plus any shipping expense already incurred.",
    ],
  },
  {
    title: "Freight Damage",
    items: [
      "Inspect the shipment before signing the carrier’s delivery receipt or bill of lading.",
      "Visible damage must be written on the carrier document and reported to both A&R Auto Parts and the freight carrier within 48 hours.",
      "Photograph the shipment and keep all packaging. A refund is not available when delivery damage was not documented as required.",
    ],
  },
  {
    title: "Transmission Conditions",
    items: [
      "A transmission is warranted to operate properly at the time of purchase, subject to the written coverage terms.",
      "Broken or sheared teeth in a standard transmission are excluded.",
      "A transmission taken apart by the customer or a representative cannot be returned and has no warranty.",
      "The customer must use the original transmission pan and replace required seals and fluids; seals and bolts are not covered.",
    ],
  },
  {
    title: "Replacement, Credit, and Refund Timing",
    items: [
      "An approved defective-part claim may be resolved with one like-kind replacement, a store credit, or a refund of the purchase price, depending on availability and the applicable written terms.",
      "After 30 days in the customer’s possession, available remedies are limited to an exchange or store credit. Store credits expire after six months.",
      "No refund is issued after three months from purchase; an available replacement or six-month store credit may be offered instead.",
      "A warranty-replacement part must be ready for pickup within seven working days. An approved uninstalled return must be ready within three working days.",
    ],
  },
  {
    title: "Refund Method",
    items: [
      "Approved refunds are returned only to the original payment method.",
      "If the original card or account was changed or closed, the customer must work with the issuing financial institution or payment provider to receive the funds.",
    ],
  },
  {
    title: "How to Start a Claim",
    items: [
      "Contact A&R Auto Parts with the order number, proof of purchase, photographs when applicable, and a clear description of the issue.",
      "Do not ship, install, alter, disassemble, or discard the part until the support team confirms eligibility and provides written instructions.",
      "Approved claims are processed after the part and documentation satisfy the warranty and return criteria.",
    ],
  },
];

const RefundsReturnsPolicy = () => (
  <section className="bg-white px-5 py-16 sm:py-20">
    <div className="container mx-auto max-w-6xl">
      <div className="space-y-5">
        {policies.map((policy) => (
          <article key={policy.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-gray-900">{policy.title}</h2>
            <ul className="mt-4 space-y-3">
              {policy.items.map((item) => (
                <li key={item} className="flex gap-3 font-['Inter'] text-sm leading-6 text-slate-600 sm:text-base">
                  <FiCheckCircle aria-hidden className="mt-1 size-4 shrink-0 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center font-['Inter'] text-sm leading-6 text-slate-500">
        The written quote, invoice, return authorization, and order-specific warranty documents control if they differ from this general policy summary.
      </p>
    </div>
  </section>
);

export default RefundsReturnsPolicy;
