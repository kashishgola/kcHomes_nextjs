"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/team/1.png" // replace
            alt="Rebeccah Graham"
            className="w-full h-[500px] md:h-[600px] object-cover object-top rounded-3xl shadow-lg"
          />

          {/* Badge */}
          <div className="absolute bottom-6 left-6 bg-amber-400 text-black px-5 py-3 rounded-xl shadow-md">
            <p className="text-lg font-bold">15+</p>
            <p className="text-xs uppercase">Years in KC</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
          
          <p className="text-amber-500 text-sm font-semibold uppercase mb-2">
            About Key Homes KC
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Meet Rebeccah Graham
            <br />
            <span className="text-amber-500">
              Your Kansas City Real Estate Expert
            </span>
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            With 15+ years of experience and 200+ families helped across the KC metro,
            Rebeccah brings deep local knowledge, honest guidance, and a personal touch
            to every real estate transaction.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-amber-400 text-black font-medium rounded-lg hover:bg-amber-500 transition"
            >
              Schedule a Free Consultation
            </Link>

            <a
              href="tel:8166517894"
              className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition"
            >
              Call 816.651.7894
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}