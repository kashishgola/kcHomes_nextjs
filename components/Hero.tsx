export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/website/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 text-center text-white px-4">
        <p className="tracking-[0.3em] text-sm mb-4 opacity-80">
          Kansas City's Trusted Real Estate Experts
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Perfect <br></br> Kansas City Home
        </h1>

        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-sm max-w-md lg:max-w-2xl mx-auto text-center">
          Rebeccah Graham and the Key Homes KC team have helped 200+ families
          buy and sell homes across the KC metro. Let's find yours.
        </p>

        <a
          href="/buyer"
          className=" bg-[#986E3A] px-6 py-3 text-sm tracking-widest text-white hover:bg-[#01304E] hover:text-white transition duration-300 me-3"
        >
          I'm Looking to Buy
        </a>

        <a
          href="/seller"
          className=" bg-[#01304E] px-6 py-3 text-sm tracking-widest text-white hover:bg-[#986E3A] hover:text-white transition duration-300"
        >
          I Want to Sell
        </a>
      </div>
    </section>
  );
}
