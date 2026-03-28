import Image from "next/image";
import Link from "next/link";
import Team from "@/components/Team";
import Listing from "@/components/Listing";
import Review from "@/components/Review";

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
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

      {/* 🔥 INTRO SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* TEXT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Buying Made Simple
              </h2>

              <p className="mt-4 text-gray-600">
                We help you find the perfect home with expert guidance, market
                insights, and a seamless buying experience. Whether you're a
                first-time buyer or an experienced investor, we’ve got you
                covered.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✔ Access to exclusive listings</li>
                <li>✔ Expert negotiation support</li>
                <li>✔ Personalized property recommendations</li>
                <li>✔ End-to-end buying assistance</li>
              </ul>

              <Link
                href="/contact"
                className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
              >
                Get Started
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/listing/1.webp"
                alt="Buyer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 FEATURED PROPERTIES */}
      <Listing />

      {/* 🔥 HOW IT WORKS */}
      {/* <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-12 lg:px-20 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500">1</div>
              <h3 className="mt-3 font-semibold text-lg">Search Property</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Browse through our listings to find homes that match your needs.
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-orange-500">2</div>
              <h3 className="mt-3 font-semibold text-lg">Schedule Visit</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Book a visit and explore properties in person with our agents.
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-orange-500">3</div>
              <h3 className="mt-3 font-semibold text-lg">Close the Deal</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Finalize your purchase with expert guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-10 items-center">
            {/* IMAGE */}
            <div className="rounded-xl flex justify-center items-center">
              <Image
                src="/website/buyerroadmap.png"
                alt="Buyer"
                width={1000} 
                height={600} 
              />
            </div>
          </div>
        </div>
      </section>

      <Team />
      <Review />
    </main>
  );
}
