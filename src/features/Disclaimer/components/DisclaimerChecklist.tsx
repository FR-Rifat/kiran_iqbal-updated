const engineSections = [
  {
    title: "Internal/External Preparations",
    items: [
      "Inspect and replace all gaskets and seals (front main, rear main, valve cover, intake/exhaust manifold, oil pan, etc.)",
      "Replace timing components (timing belt/chain, tensioners if required)",
      "Clean or replace oil pan if necessary",
      "Replace spark plugs and ignition components if applicable",
    ],
  },
  {
    title: "Fluids & Filters",
    items: [
      "Drain and replace all fluids (engine oil, coolant)",
      "Install a new oil filter",
      "Ensure the cooling system is flushed and filled with manufacturer-recommended coolant",
      "Replace spark plugs and ignition components if applicable",
    ],
  },
  {
    title: "Functionality Checks",
    items: [
      "Ensure all vacuum lines and electrical connectors are secure",
      "Verify oil pressure after first startup",
      "Check for leaks after running the engine",
    ],
  },
];

const transmissionSections = [
  {
    title: "Replacement of Components",
    items: [
      "Install new transmission filter",
      "Install new pan gasket",
      "Install new front and rear seals",
      "Ensure torque converter is fully seated and locked in place",
    ],
  },
  {
    title: "Fluid System Prep",
    items: [
      "Flush all coolers and transmission lines to remove debris and contaminants",
      "Use manufacturer-approved transmission fluid (OEM fluid is mandatory for CVTs)",
    ],
  },
  {
    title: "Electronics & Programming",
    items: [
      "Replace external sensors (e.g., speed sensors) if necessary",
      "Reprogram or reset TCM/ECU as required by vehicle manufacturer",
      "Clear all existing transmission-related error codes",
    ],
  },
  {
    title: "Post-Install Checks",
    items: [
      "Check for proper gear engagement before test drive",
      "Monitor fluid level and condition after test drive",
      "Recheck for leaks",
    ],
  },
];

function ChecklistGroup({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: typeof engineSections;
}) {
  return (
    <section>
      <h2 className="font-['Barlow_Condensed'] text-3xl font-extrabold capitalize text-slate-900">
        {title}
      </h2>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
      <div className="mt-6 space-y-12">
        {sections.map((section) => (
          <article
            key={section.title}
            className="border-l-2 border-green-600 pl-4"
          >
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold capitalize text-slate-900">
              {section.title}
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-600">
              {section.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-green-600"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

const DisclaimerChecklist = () => (
  <section className="bg-white px-5 py-16 sm:py-20">
    <div className="container mx-auto max-w-6xl space-y-12">
      <ChecklistGroup
        title="Pre-Installation Checklist"
        description="Required for Warranty Activation. Please have this completed and signed by an ASE-certified mechanic."
        sections={engineSections}
      />
      <ChecklistGroup
        title="Transmission Pre-Installation Checklist"
        description="To maintain transmission warranty coverage, complete the following steps:"
        sections={transmissionSections}
      />
    </div>
  </section>
);

export default DisclaimerChecklist;
