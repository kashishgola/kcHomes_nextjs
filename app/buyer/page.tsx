import Image from "next/image";
import Link from "next/link";
import Review from "@/components/Review";
import BuyingProcess from "@/components/BuyingSellingProcess";
import SpecialBuyerPrograms from "@/components/SpecialBuyerPrograms";
import FAQSection from "@/components/FAQSection";
import { faqs } from "@/lib/buyerFaq";
import { steps } from "@/lib/buyingProcessData";

const stats = [
  { img: "/icons/medal.png", label: "Local KC Expert" },
  { img: "/icons/chat.png", label: "Always Communicating" },
  { img: "/icons/early-access.png", label: "Full MLS Access" },
  { img: "/icons/approaches.png", label: "No Pressure Approach" },
];

export default function BuyerPage() {
  return (
    <main>
      {/* 🔥 HERO / BREADCRUMB */}
      <section className="relative h-[200px] w-full">
        <Image
          src="/background/hero.webp"
          alt="Buyer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(29,41,62,0.6)]" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Find Your Dream Home
          </h1>

          <div className="flex gap-2 mt-3 text-sm">
            <Link href="/" className="hover:text-orange-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-orange-400">Buyer</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid  gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="w-12 h-[2px] bg-amber-400 mb-4"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Why Choose <span className="text-amber-500">Key Homes KC </span>{" "}
              as Your Buyer's Agent?
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Buying a home is one of the largest financial decisions you'll
              ever make. You deserve an agent who is 100% in your corner — not
              just trying to close a deal. Rebeccah Graham and the Key Homes KC
              team provide honest, expert guidance from your first search to
              closing day and beyond.
            </p>
          </div>

          {/* RIGHT STATS (NEW DESIGN) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="my-3 flex justify-center">
                  <Image src={item.img} alt="icons" width={80} height={80} />
                </div>

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

      <BuyingProcess
        steps={steps}
        title="The Key Homes KC Home Buying Process"
        subtitle="We've helped 200+ families navigate this process. Here's exactly how it works."
      />
      <SpecialBuyerPrograms />
      <FAQSection
        faqs={faqs}
        title="Buyer FAQ"
        subtitle="Common questions from Kansas City home buyers."
      />
      <Review />
    </main>
  );
}
