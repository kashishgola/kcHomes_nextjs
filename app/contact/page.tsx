import Image from "next/image";

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

              <div className="space-y-5 mt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="border-l-3 ps-3 border-rose-600">
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600 text-sm">
                      rebecca@keyhomeskc.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="border-l-3 ps-3 border-blue-600">
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600 text-sm"> MO 64118 / 816-629-4494 </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="border-l-3 ps-3 border-indigo-600">
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600 text-sm">
                      8320 N. Oak Trfy Ste. 223 KC
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div
              className="w-full max-w-md lg:max-w-lg 
                          bg-white rounded-xl shadow-xl 
                          p-4 sm:p-6 md:p-8"
            >
              <h3 className="text-lg font-semibold mb-5 text-start">
                Get in Touch
              </h3>

              <form className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border p-2 sm:p-3 rounded outline-none 
                             focus:ring-2 focus:ring-orange-400 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border p-2 sm:p-3 rounded outline-none 
                             focus:ring-2 focus:ring-orange-400 text-sm"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-2 sm:p-3 rounded outline-none 
                           focus:ring-2 focus:ring-orange-400 text-sm"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border p-2 sm:p-3 rounded outline-none 
                           focus:ring-2 focus:ring-orange-400 text-sm"
                />

                <select className="w-full border p-2 sm:p-3 rounded text-sm">
                  <option value="">Are you a Buyer or Seller?</option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-black text-white 
                           py-2 sm:py-3 rounded 
                           hover:bg-gray-800 transition text-sm sm:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
