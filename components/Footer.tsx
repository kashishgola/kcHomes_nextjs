import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F33] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* ✅ COLUMN 1: ABOUT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              About KC Homes
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              KC Homes is a premier real estate team helping buyers and sellers
              across Kansas City. We specialize in delivering top-tier service,
              market expertise, and seamless real estate experiences.
            </p>

            
          </div>

          {/* ✅ COLUMN 2: LINKS */}
          <div className="md:ms-5">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#C8A96A] transition text-lg">
                  - Home
                </Link>
              </li>
              <li>
                <Link href="/buyer" className="hover:text-[#C8A96A] transition text-lg">
                  - Buy a Home
                </Link>
              </li>
              <li>
                <Link href="/seller" className="hover:text-[#C8A96A] transition text-lg">
                  - Sell Your Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C8A96A] transition text-lg">
                  - About Rebeccah
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#C8A96A] transition text-lg">
                  - KC Real Estate Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C8A96A] transition text-lg">
                  - Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ COLUMN 3: CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>

            <div className="mb-3">
              <h4 className="text-orange-400">Free Consultation:</h4>
              <Link href="tel:8166517894">- 816.651.7894</Link>
            </div>

            <div className="mb-3">
              <h4 className="text-orange-400">Office:</h4>
              <Link href="tel:8166517894">- 816-629-4494 x255</Link>
            </div>

            <div className="mb-3">
              <h4 className="text-orange-400">Email:</h4>
              <Link href="mailto:rebecca@keyhomeskc.com">- rebecca@keyhomeskc.com</Link>
            </div>

            <div className="mb-3">
              <h4 className="text-orange-400">Location:</h4>
              <Link href="mailto:rebecca@keyhomeskc.com">- 8320 N. Oak Trfy Ste. 223
Kansas City, MO 64118</Link>
            </div>

            
          </div>

        </div>

        {/* 🔥 BOTTOM */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} KC Homes. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}