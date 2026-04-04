import Image from "next/image";
import Link from "next/link";


export default function ContactUs() {
  return (
    <>
      {/* 🔥 HERO / BREADCRUMB SECTION */}
      <section className="relative h-[200px] sm:h-[250px] w-full">
        {/* Background */}
        <Image
          src="/background/hero.webp"
          alt="Contact"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(29,41,62,0.6)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-3 text-sm sm:text-base">
            <span className="hover:text-orange-400 cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-orange-400">Contact Us</span>
          </div>
        </div>
      </section>

      {/* 🔥 MAIN CONTACT SECTION */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>

              <p className="text-gray-600 max-w-md">
                Have questions or want to work with us? Reach out and our team
                will get back to you as soon as possible.
              </p>

              <div className="mb-4 border-l-3 ps-3 border-blue-600">
                <h4 className="text-orange-400">Free Consultation — Call or Text:</h4>
                <Link href="tel:8166517894">- 816.651.7894</Link>
              </div>

              <div className="mb-4 border-l-3 ps-3 border-rose-600">
                <h4 className="text-orange-400">Office:</h4>
                <Link href="tel:8166517894">- 816-629-4494 x255</Link>
              </div>

              <div className="mb-4 border-l-3 ps-3 border-indigo-600">
                <h4 className="text-orange-400">Email:</h4>
                <Link href="mailto:rebecca@keyhomeskc.com">- rebecca@keyhomeskc.com</Link>
              </div>

              <div className="mb-4 border-l-3 ps-3 border-red-600">
                <h4 className="text-orange-400">Location:</h4>
                <Link href="mailto:rebecca@keyhomeskc.com">- 8320 N. Oak Trfy Ste. 223
                  Kansas City, MO 64118</Link>
              </div>

              <div className="mb-4 border-l-3 ps-3 border-mauve-600">
                <h4 className="text-orange-400">Availability:</h4>
                <p className="mb-0">Monday–Friday: 8am–7pm</p>
                <p className="mb-0">Saturday: 9am–5pm</p>
                <p className="mb-0">Sunday: By Appointment</p>
              </div>


            </div>

            {/* RIGHT SIDE FORM */}
            <div
              className="w-full max-w-md lg:max-w-lg 
                          bg-white rounded-xl shadow-xl 
                          p-4 sm:p-6 md:p-8"
            >
              <h3 className="text-2xl font-semibold mb-1 text-start">
                Send a Message
              </h3>
              <p>Fill out the form below and Rebeccah will respond within 24 hours.

              </p>

              <form className="space-y-3 sm:space-y-4 mt-5" >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300  p-2 sm:p-3 rounded outline-none 
                             focus:ring-2 focus:ring-orange-400 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300  p-2 sm:p-3 rounded outline-none 
                             focus:ring-2 focus:ring-orange-400 text-sm"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300  p-2 sm:p-3 rounded outline-none 
                           focus:ring-2 focus:ring-orange-400 text-sm"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border border-gray-300  p-2 sm:p-3 rounded outline-none 
                           focus:ring-2 focus:ring-orange-400 text-sm"
                />

                <select className="w-full border border-gray-300  p-2 sm:p-3 rounded text-sm">
                  <option value="">I'm Interested In</option>
                  <option value="Buying a Home">Buying a Home</option>
                  <option value="Selling a Home">Selling a Home</option>
                  <option value="Home Valuation">Home Valuation</option>
                  <option value="Ameristar Home Advantage Program">Ameristar Home Advantage Program</option>
                  <option value="Preferred Pathways Senior Program">Preferred Pathways Senior Program</option>
                  <option value="VA Loan / Military Relocation">VA Loan / Military Relocation</option>
                  <option value="Relocating to Kansas City">Relocating to Kansas City</option>
                  <option value="General Question">General Question</option>
                </select>

                <textarea placeholder="Message" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"></textarea>

                <button
                  type="submit"
                  className="w-full bg-black text-white 
                           py-2 sm:py-3 rounded 
                           hover:bg-gray-800 transition text-sm sm:text-base"
                >
                  Submit
                </button>

                <p className="text-sm text-gray-400">By submitting, you agree to be contacted by Key Homes KC. We respect your privacy and will never share your information.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
