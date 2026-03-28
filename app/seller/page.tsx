import Image from "next/image";
import Link from "next/link";
import Team from "@/components/Team";
import VideoSection from "@/components/VideoSection";

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
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* IMAGE */}
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/listing/4.jpeg"
                alt="Seller"
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
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
      </section>

      {/* 🔥 WHY CHOOSE US */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Sell With Us?
              </h2>

              <p className="mt-4 text-gray-600">
                Our proven strategies and deep market knowledge ensure that your
                property gets maximum visibility and the best price.
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>✔ High-quality property listings</p>
              <p>✔ Social media & digital marketing</p>
              <p>✔ Expert negotiation skills</p>
              <p>✔ Transparent and smooth process</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-10 items-center">
            {/* IMAGE */}
            <div className="rounded-xl flex justify-center items-center">
              <Image
                src="/website/sellerroadmap2.jpg"
                alt="Buyer"
                width={1000}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      <Team />
      <VideoSection />
    </main>
  );
}
