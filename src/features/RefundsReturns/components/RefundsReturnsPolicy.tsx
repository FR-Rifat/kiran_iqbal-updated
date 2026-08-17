const policies = [
  { title: "A&R Auto Parts", paragraphs: ["Miles are not certified on any used parts.", "There's a 25% restocking fee on all returns plus freight charges on both ways for the orders returned or refused under any circumstances."] },
  { title: "Damaged Items Policy", paragraphs: ["If the engine or transmission is damaged at the time of delivery, any damages must be reported and listed on the Bill of Lading or delivery receipt that the freight company has. There are absolutely no refunds if damages are not listed on the Bill of Lading or delivery receipt."] },
  { title: "Transmission Warranty Details", paragraphs: ["Transmissions are guaranteed to work properly at the time of purchase. Shearing or breaking of teeth in standard transmissions is not warrantied under any circumstances. Transmissions that are taken apart by a customer or their representative will have no warranty and cannot be returned. The customer must use their own transmission pan. The customer must replace all seals and fluids of the transmission. The warranty does not cover any seals or bolts."] },
  { title: "Warranty Limitations", paragraphs: ["Unauthorized disassembly of any component for any reason will void the warranty. Returns made after the warranty period has expired will not be accepted or honored under this policy."] },
  { title: "Return Requirements", paragraphs: ["All claims and returned goods must be accompanied by a customer invoice and are subject to a 25% restocking fee.", "It is the customer’s responsibility to know and order the exact part needed before a purchase is made. Return is not accepted if the customer purchased the wrong part or the customer no longer needed the part."] },
  { title: "Return Requirements", paragraphs: ["All claims and returned goods must be accompanied by a customer invoice and are subject to a 25% restocking fee.", "It is the customer’s responsibility to know and order the exact part needed before a purchase is made. Return is not accepted if the customer purchased the wrong part or the customer no longer needed the part."] },
  { title: "How to Claim a Warranty", paragraphs: ["To validate your warranty, simply reach A&R Auto Parts Customer Support with your order number, manifestation of your purchase and an overview of the situation. Our support staff will confirm your warranty then assist with the return or replacement. Items must meet warranty criteria; which is that the item remains unchanged, unaltered or uninstalled. Claims are handled in a timely manner once approved; ensuring you are replaced or remedied quickly and effectively while still covered under warranty."] },
];

const RefundsReturnsPolicy = () => (
  <section className="bg-white px-5 py-16 sm:py-20">
    <div className="container mx-auto max-w-6xl space-y-7">
      {policies.map((policy, index) => (
        <article key={`${policy.title}-${index}`} className="border-l-4 border-green-600 pl-4 sm:pl-5">
          <h2 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase tracking-tight text-slate-900">{policy.title}</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {policy.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default RefundsReturnsPolicy;
