import { FiPhone, FiShield, FiTruck, FiCheckCircle, FiCreditCard } from "react-icons/fi";
import Button from "@/components/ui/button";
import QuoteForm from "@/components/sheard/QuoteForm";

const Hero = () => {
  const trustItems = [
    { label: "3-Year Warranty", icon: FiShield },
    { label: "Tested & Inspected", icon: FiCheckCircle },
    { label: "Nationwide Shipping", icon: FiTruck },
    { label: "Financing Available", icon: FiCreditCard },
  ];

  return (
    <section className="w-full overflow-hidden bg-radial-[at_85%_-10%] from-green-600/10 to-green-600/0 to-60%">
      <div className="mx-auto flex w-full container items-start gap-12 py-20">
        <QuoteForm />

        <div className="flex flex-1 flex-col items-start gap-5">
          <div className="rounded-full bg-white px-3.5 py-1.5 outline outline-1 outline-offset-[-1px] outline-green-600">
            <span className="text-sm font-semibold uppercase leading-5 tracking-widest text-green-600 font-['Barlow_Condensed']">
              ● Trusted U.S. Used-Parts Supplier
            </span>
          </div>

          <h1 className="text-8xl font-extrabold uppercase text-zinc-900 font-['Barlow_Condensed']">
            Quality Used{" "}
            <span className="text-green-600">Engines</span>  & {" "}
            <span className="text-green-600">Transmissions</span>, <br /> Shipped Fast
          </h1>

          <p className="py-3 text-xl text-slate-600 font-['Inter']">
            Low-mileage, Tested & Inspected Units Backed by a{" "}
            <span className="font-semibold">3-year Unlimited</span>-mileage
            Warranty. Get a Firm Quote in Minutes Most Orders Ship in 5–7
            Business Days.
          </p>

          <div className="flex w-full flex-wrap items-center gap-3">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 outline outline-1 outline-offset-[-1px] outline-green-600">
                  <Icon className="size-3.5 text-green-600" />
                  <span className="text-sm font-semibold leading-5 text-green-600 font-['Inter']">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button variant="primary" showIcon={false}>
              Get My Free Quote
            </Button>

            <Button variant="secondary">
              (855)-430-6250
            </Button>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-base tracking-widest text-green-600">
              ★★★★★
            </span>
            <span className="text-sm leading-6 text-slate-600 font-['Inter']">
              Rated by hundreds of shops & DIY buyers nationwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;