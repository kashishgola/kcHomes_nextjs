"use client";

import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import { faqs } from "@/lib/sellerFaq";
import BuyingSellingProcess from "@/components/BuyingSellingProcess";
import { steps } from "@/lib/sellingProcessData";
import SellerMarketingStrategy from "@/components/SellerMarketingStrategy";

const stats = [
  { value: "200+", label: "Homes Sold" },
  { value: "15+", label: "Years Experience" },
  { value: "5★", label: "Client Rating" },
];

export default function SellerPage() {
  return (
    <main>
      {/* 🔥 HERO / BREADCRUMB */}
      <section className="relative h-[200px] w-full">
        <Image
          src="/background/hero.webp"
          alt="Seller"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(29,41,62,0.6)]" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Sell Your Property Faster
          </h1>

          <div className="flex gap-2 mt-3 text-sm">
            <Link href="/" className="hover:text-orange-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-orange-400">Seller</span>
          </div>
        </div>
      </section>

      {/* 🔥 INTRO SECTION */}
      {/* <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/listing/4.jpeg"
                alt="Seller"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                Maximize Your Property Value
              </h2>

              <p className="mt-4 text-gray-600">
                We help you sell your property quickly and at the best price
                with expert marketing strategies, professional photography, and
                a wide network of buyers.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✔ Professional property marketing</li>
                <li>✔ Access to verified buyers</li>
                <li>✔ Accurate property valuation</li>
                <li>✔ End-to-end selling support</li>
              </ul>

              <Link
                href="/contact"
                className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
              >
                List Your Property
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="w-12 h-[2px] bg-amber-400 mb-4"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Why Sellers Choose{" "}
              <span className="text-amber-500">Key Homes KC</span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Selling your home is a major financial event. You need an agent
              who will fight for every dollar, market your home aggressively,
              and communicate with you every step of the way. That's exactly
              what Rebeccah Graham and Key Homes KC deliver.
            </p>
          </div>

          {/* RIGHT STATS (NEW DESIGN) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition duration-300"
              >
                {/* Number */}
                <h3 className="text-3xl font-bold text-gray-800 group-hover:text-amber-500 transition">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
                  {item.label}
                </p>

                {/* Bottom Accent */}
                <div className="mt-4 w-6 h-[2px] bg-amber-400 mx-auto group-hover:w-12 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BuyingSellingProcess
        steps={steps}
        title="Our Proven Home Selling Process"
        subtitle="Six steps to a successful sale — from valuation to closing."
      />

      <SellerMarketingStrategy />

      <FAQSection
        faqs={faqs}
        title="Seller FAQ"
        subtitle="Common questions from Kansas City home sellers."
      />
    </main>
  );
}
