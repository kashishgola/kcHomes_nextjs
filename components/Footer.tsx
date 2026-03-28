import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F33] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* ✅ COLUMN 1: ABOUT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              About KC Homes
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              KC Homes is a premier real estate team helping buyers and sellers
              across Kansas City. We specialize in delivering top-tier service,
              market expertise, and seamless real estate experiences.
            </p>

            
          </div>

          {/* ✅ COLUMN 2: LINKS */}
          <div className="md:ms-5">
            <h3 className="text-lg font-semibold mb-4">
              Important Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#C8A96A] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/buyer" className="hover:text-[#C8A96A] transition">
                  Buyer
                </Link>
              </li>
              <li>
                <Link href="/seller" className="hover:text-[#C8A96A] transition">
                  Seller
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#C8A96A] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C8A96A] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ COLUMN 3: CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                📞 MO 64118 / 816-629-4494
              </li>
              <li>
                📍 8320 N. Oak Trfy Ste. 223 KC
              </li>
              <li>
                ✉️ rebecca@keyhomeskc.com
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block mt-4 bg-[#C8A96A] text-black px-4 py-2 rounded hover:bg-[#b89655] transition text-sm"
            >
              Get in Touch
            </Link>
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