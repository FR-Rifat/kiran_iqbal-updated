const policies = [
  { title: "Before You Purchase", paragraphs: ["A quote request is not an order or reservation. Before payment, review the specific part, included components, price, shipping method, destination requirements, taxes, fees, core charge (if any), warranty terms, and return conditions in the written quote."] },
  { title: "Freight Inspection", paragraphs: ["Inspect the shipment while the carrier is present. Note visible damage on the bill of lading or delivery receipt, photograph the shipment, and retain packaging. Follow the reporting instructions in your order documentation before moving, installing, altering, or discarding the part."] },
  { title: "Returns and Cancellations", paragraphs: ["Return eligibility, cancellation conditions, restocking charges, freight costs, and deadlines depend on the specific written quote and order documentation. Do not send a part back without written return instructions."] },
  { title: "Warranty Claims", paragraphs: ["Warranty availability, coverage, exclusions, required installation steps, and claim deadlines vary by quoted part. Keep your invoice, quote, installation records, and delivery documents, and use the contact process provided with your order if you need to make a claim."] },
  { title: "Policy Updates", paragraphs: ["This page summarizes the information customers should review before purchase. The written quote and order documentation for the specific part control if there is a difference. Last updated August 22, 2026."] },
];

const RefundsReturnsPolicy = () => (
  <section className="bg-white px-5 py-16 sm:py-20">
    <div className="container mx-auto max-w-6xl space-y-12">
      {policies.map((policy, index) => (
        <article key={`${policy.title}-${index}`} className="border-l-4 border-green-600 pl-4 sm:pl-5">
          <h2 className="font-['Barlow_Condensed'] text-2xl font-bold capitalize text-gray-900">{policy.title}</h2>
          <div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            {policy.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default RefundsReturnsPolicy;
