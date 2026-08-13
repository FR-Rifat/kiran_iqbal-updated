import { trustBarItems } from "@/Content/data";

const TrustBar = () => {
  return (
    <section className="w-full bg-green-600">
      <div className="mx-auto flex w-full container items-start gap-2 px-5 py-4">
        {trustBarItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex flex-1 items-center justify-center gap-2.5 transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5 cursor-pointer">
              <Icon className="size-6 shrink-0 text-white stroke-[2]" />

              <div className="flex h-11 flex-col justify-center">
                <h3 className="text-lg font-bold uppercase leading-5 tracking-tight text-white font-['Barlow_Condensed']">
                  {item.title}
                </h3>

                <p className="text-xs font-normal leading-5 text-stone-300 font-['Inter']">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBar;