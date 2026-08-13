import { paymentOptionsData } from "@/Content/data";

const PaymentOptions = () => {
  const { eyebrow, title, description, options } = paymentOptionsData;

  return (
    <section className="w-full px-6 py-20 lg:px-36">
      <div className="mx-auto flex w-full container flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-1">
          <span className="text-center text-sm font-bold uppercase leading-4 tracking-widest text-green-600 font-['Barlow_Condensed']">
            {eyebrow}
          </span>

          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-center text-5xl font-extrabold uppercase tracking-wide text-zinc-900 font-['Barlow_Condensed']">
              {title}
            </h2>

            <p className="text-center text-base font-normal text-slate-600 font-['Inter']">
              {description}
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {options.map((option, idx) => {
            const badges = ["Installments", "Flexible Terms", "Zero Risk Reserve"];

            return (
              <div
                key={option.title}
                className="group relative flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_10px_30px_0px_rgba(8,42,84,0.06)] transition-all duration-300 hover:border-green-600/50 hover:shadow-[0px_16px_36px_0px_rgba(0,153,0,0.12)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-green-600" />

                <div className="flex flex-col items-center gap-3 pt-2 w-full text-center">
                  <span className="inline-flex items-center justify-center rounded-full bg-green-600/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-600 border border-green-600/20 font-['Barlow_Condensed']">
                    {badges[idx] || "Payment Plan"}
                  </span>

                  <h3 className="text-center text-2xl font-extrabold uppercase leading-8 tracking-wide text-zinc-900 font-['Barlow_Condensed'] group-hover:text-green-600 transition-colors duration-200">
                    {option.title}
                  </h3>

                  <p className="text-center text-base font-normal leading-6 text-slate-600 font-['Inter']">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;