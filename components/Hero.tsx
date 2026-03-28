import Image from "next/image";

export default function Hero() {
  return (
    <section className="">
    <div className="relative w-full min-h-screen bg-gray-800">
      {/* Background Image */}
      <Image
        src="/background/hero.webp"
        alt="Real Estate"
        fill
        priority
        className="object-cover hidden md:block"
      />

      {/* Overlay */}
      <div className="hidden md:block absolute inset-0 bg-black/60" />

      {/* Content */}
      <div
        className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between 
                      px-4 sm:px-6 md:px-12 lg:px-20 
                      py-16 lg:py-0 min-h-screen gap-10"
      >
        {/* LEFT CONTENT */}
        <div className="text-white w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to Key Homes KC
          </h1>

          <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg">
            Kansas City's elite Real Estate Team is here to answer your
            questions. The best thing you can do RIGHT NOW is start the
            conversation. We can't wait to talk with you!
          </p>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="tel:"
              className="mt-6 flex items-center gap-3 bg-orange-500 hover:bg-orange-600 
                               transition px-5 sm:px-6 py-2 sm:py-3 
                               rounded-full text-sm sm:text-base"
            >
              CALL US @ 816-629-4494 X 255
            </a>
          </div>
        </div>

        {/* RIGHT SEARCH BOX */}
        <div
          className="w-full max-w-md justify-self-center lg:justify-self-end 
                        bg-white rounded-xl shadow-xl p-4 sm:p-6"
        >
          <h3 className="text-lg font-semibold mb-5 text-start">
            Get in Touch
          </h3>

          {/* FORM */}
          <form className="space-y-3 sm:space-y-4">
            {/* First + Last Name */}
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

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 sm:p-3 rounded outline-none 
                         focus:ring-2 focus:ring-orange-400 text-sm"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border p-2 sm:p-3 rounded outline-none 
                         focus:ring-2 focus:ring-orange-400 text-sm"
            />

            {/* Buyer or Seller */}
            <select className="w-full border p-2 sm:p-3 rounded text-sm">
              <option value="">Are you a Buyer or Seller?</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white 
                         py-2 sm:py-3 rounded 
                         hover:bg-gray-800 transition text-sm sm:text-base"
            >
                Submit  
              {/* Click here for a no obligation and free consultation */}
            </button>
          </form>
        </div>
      </div>
    </div>
     </section>
  );
}
