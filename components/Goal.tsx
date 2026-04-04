"use client";

import Link from "next/link";

const programs = [
  {
    title: "Buying a Home in KC",
    desc: "From first-time buyers to relocating families, we guide you through every step of the Kansas City home buying process with expert local knowledge.",
    subcat: [
      "Free Buyer Consultation",
      "Ameristar Home Advantage Program",
      "Preferred Pathways Senior Program",
      "VA Loan Specialists",
    ],
    linkData: "/buyer",
  },
  {
    title: "Selling Your KC Home",
    desc: "Our proven marketing strategy — professional photography, targeted digital ads, and deep agent network — gets your home sold faster and for more money.",
    subcat: [
      "Free Home Valuation",
      "Professional Photography",
      "Strategic Pricing",
      "Targeted Digital Marketing",
    ],
    linkData: "/seller",
  },
];

export default function Goal() {
  return (
    <section className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/background/hero.webp"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="w-12 h-[2px] bg-amber-400 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What's Your Real Estate Goal?
          </h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Whether you're buying your first home or selling your current one, Key Homes KC has a proven path to get you there.
          </p>
        </div>

        {/* ✅ Responsive Grid FIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/20 transition duration-300 shadow-xl"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-2">
                {item.subcat.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-200">
                    <span className="text-amber-400">✔</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={item.linkData}
                className="inline-block mt-6 px-5 py-2 rounded-lg bg-amber-400 text-black font-medium hover:bg-amber-500 transition"
              >
                Explore Buyer Services
              </Link>

              {/* Hover line */}
              <div className="mt-6 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}