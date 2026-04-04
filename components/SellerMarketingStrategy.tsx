"use client";

interface Program {
  title: string;
  subtitle: string;
  desc?: string; // optional if you plan to add descriptions later
}

const programs: Program[] = [
  {
    title: "Professional Photography",
    subtitle: "High-quality photos that showcase your home's best features and attract more buyers online.",
  },
  {
    title: "MLS + Online Syndication",
    subtitle: "Your listing on the MLS, Zillow, Realtor.com, Trulia, and 100+ real estate websites.",
  },
  {
    title: "Social Media Promotion",
    subtitle: "Targeted Facebook and Instagram campaigns reaching active KC home buyers in your area.",
  },
  {
    title: "Digital Advertising",
    subtitle: "Paid digital ads targeting buyers actively searching for homes in your neighborhood.",
  },
  {
    title: "Open Houses",
    subtitle: "Strategically scheduled open houses to maximize buyer exposure and create urgency.",
  },
  {
    title: "Agent Network Outreach",
    subtitle: "Direct outreach to our network of KC buyer's agents to match your home with qualified buyers.",
  },
];

export default function SpecialBuyerPrograms() {
  return (
    <section className="relative py-20 bg-slate-900">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="w-12 h-[2px] bg-amber-400 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Marketing Strategy Gets Results
          </h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            We don't just list your home — we market it aggressively across every channel to attract the most qualified buyers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/20 transition duration-300 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition">
                {item.title}
              </h3>

              <p className="text-amber-300 text-sm mt-1">
                {item.subtitle}
              </p>

              {item.desc && (
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              )}

              <div className="mt-6 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}