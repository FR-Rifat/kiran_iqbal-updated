import { whyChooseUsData } from "@/Content/data";

const WhyChooseUs = () => {
  const { eyebrow, title, description, features } = whyChooseUsData;

  return (
    <section className="w-full bg-[#F4F8F5] px-6 py-20 lg:px-36">
      <div className="mx-auto flex w-full container flex-col items-center gap-11">
        <div className="flex w-full flex-col items-center gap-1">
          <span className="text-center text-base font-bold uppercase tracking-widest text-green-600 font-['Barlow_Condensed']">
            {eyebrow}
          </span>

          <div className="flex w-full flex-col items-center gap-2">
            <h2 className="text-center text-5xl font-extrabold uppercase leading-[53.76px] tracking-wide text-zinc-900 font-['Barlow_Condensed']">
              {title}
            </h2>

            <p className="w-full text-center text-base font-normal text-slate-600 font-['Inter']">
              {description}
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex flex-col justify-between h-full rounded-2xl bg-white p-7 border border-slate-200/90 shadow-[0px_8px_24px_0px_rgba(8,42,84,0.06)] transition-all duration-300 hover:border-green-600/40 hover:shadow-[0px_14px_32px_0px_rgba(0,153,0,0.10)] hover:-translate-y-1"
              >
                <div className="flex flex-col items-start gap-5">
                  <div className="flex size-14 items-center justify-center rounded-full bg-green-600/10 border border-green-600/20 transition-all duration-300 group-hover:bg-green-600 group-hover:border-green-600">
                    <Icon className="size-7 text-green-600 stroke-[2] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div className="flex w-full flex-col items-start gap-2">
                    <h3 className="w-full text-xl font-bold uppercase tracking-wide text-zinc-900 font-['Barlow_Condensed'] transition-colors duration-200 group-hover:text-green-600">
                      {feature.title}
                    </h3>
                    <p className="w-full text-base font-normal leading-6 text-slate-600 font-['Inter']">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;