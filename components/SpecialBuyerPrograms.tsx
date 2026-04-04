"use client";

import Link from "next/link";

const programs = [
  {
    title: "Ameristar Home Advantage",
    subtitle: "Exclusive Program for Ameristar Casino Employees",
    desc: "Key Homes KC is proud to offer the Ameristar Home Advantage program — an exclusive real estate benefit for Ameristar Casino employees and their families. This program provides special guidance, resources, and dedicated support to help Ameristar team members achieve homeownership in the Kansas City area.",
    subcat: [
      "Dedicated buyer consultation for Ameristar employees",
      "Guidance through employer housing benefit programs",
      "Priority scheduling and personalized service",
      "Full KC metro home search support",
    ],
    linkData: "Learn About Ameristar Benefits",
  },
  {
    title: "Preferred Pathways Senior Program",
    subtitle: "Specialized Guidance for Seniors Downsizing",
    desc: "Downsizing is one of the most significant life transitions a person can make. Our Preferred Pathways Senior Program provides compassionate, patient, and expert guidance to help seniors find the right next home — whether that's a smaller house, a condo, or a 55+ community in the Kansas City area.",
    subcat: [
      "Patient, unhurried process tailored to your timeline",
      "Expertise in 55+ communities and senior-friendly homes",
      "Coordination with estate planning and moving services",
      "Family-inclusive consultations available",
    ],
    linkData: "Explore Senior Downsizing Options",
  },
  {
    title: "First-Time Home Buyer Program",
    subtitle: "Step-by-Step Guidance for First-Time Buyers",
    desc: "Buying your first home is exciting and overwhelming at the same time. Our First-Time Buyer Program breaks down every step of the process, connects you with down payment assistance resources, and ensures you never feel lost or pressured throughout your home search.",
    subcat: [
      "Complete walkthrough of the KC home buying process",
      "Down payment assistance program connections",
      "First-time buyer education and resources",
      "No-pressure, educational approach",
    ],
    linkData: "Start Your Home Buying Journey",
  },
  {
    title: "Military & Veteran Buyer Program",
    subtitle: "VA Loan Specialists Serving KC Veterans",
    desc: "As a Military Relocation Professional (MRP), Rebeccah Graham is certified to help veterans and active-duty military navigate the VA loan process and find the right home in Kansas City. We understand the unique challenges of military relocation and are honored to serve those who serve.",
    subcat: [
      "VA loan expertise and lender connections",
      "Military relocation specialist certification (MRP)",
      "Understanding of PCS timelines and requirements",
      "Serving all branches across the KC metro",
    ],
    linkData: "Connect With Our VA Loan Expert",
  },
];

export default function SpecialBuyerPrograms() {
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
            Special Buyer Programs
          </h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Key Homes KC offers specialized programs for specific buyer needs.
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

              {/* Subtitle */}
              <p className="text-amber-300 text-sm mt-1">
                {item.subtitle}
              </p>

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
                href="/contact"
                className="inline-block mt-6 px-5 py-2 rounded-lg bg-amber-400 text-black font-medium hover:bg-amber-500 transition"
              >
                {item.linkData}
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