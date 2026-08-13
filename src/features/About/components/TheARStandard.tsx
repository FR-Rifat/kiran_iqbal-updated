import { FiShield, FiCheckCircle, FiTarget, FiTruck, FiCreditCard, FiHeadphones } from "react-icons/fi";

const standards = [
  {
    title: "3-YEAR WARRANTY",
    description: "Unlimited-mileage warranty coverage.",
    icon: FiShield,
  },
  {
    title: "TESTED & INSPECTED",
    description: "Parts are inspected before shipping.",
    icon: FiCheckCircle,
  },
  {
    title: "VIN-VERIFIED FITMENT",
    description: "We help match the correct part to your vehicle.",
    icon: FiTarget,
  },
  {
    title: "NATIONWIDE SHIPPING",
    description: "Fast and reliable delivery across the USA.",
    icon: FiTruck,
  },
  {
    title: "FLEXIBLE PAYMENT OPTIONS",
    description: "Multiple payment options available.",
    icon: FiCreditCard,
  },
  {
    title: "REAL U.S. SUPPORT",
    description: "Talk directly with knowledgeable specialists.",
    icon: FiHeadphones,
  },
];

const TheARStandard = () => {
  return (
    <section className="w-full border-t border-b border-gray-200 bg-white px-6 py-16 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full container flex-col items-center gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
            THE A&R STANDARD
          </span>

          <h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-tight md:text-5xl">
            <span className="text-gray-900">WHAT </span>
            <span className="text-green-600">YOU </span>
            <span className="text-gray-900">CAN EXPECT </span>
            <span className="text-green-600">FROM </span>
            <span className="text-gray-900">US</span>
          </h2>

          <p className="max-w-2xl font-['Inter'] text-base font-normal leading-5 text-gray-600">
            Our mission is to make the process of finding a replacement engine or transmission simple, transparent, and reliable.
          </p>
        </div>

        {/* 6 Cards Grid (2 rows of 3 on desktop) */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex flex-col items-start gap-4 rounded-2xl bg-gray-50 p-6 border border-gray-200 transition-all duration-300 hover:border-green-600/40 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-green-100 text-green-600 transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Icon className="size-5 stroke-[2]" />
                </div>

                <div className="flex flex-col items-start gap-1.5">
                  <h3 className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 text-gray-900 transition-colors duration-200 group-hover:text-green-600">
                    {item.title}
                  </h3>
                  <p className="font-['Inter'] text-base font-normal leading-5 text-gray-600">
                    {item.description}
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

export default TheARStandard;