

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
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 text-center text-white px-4">
        <p className="tracking-[0.3em] text-sm mb-4 opacity-80">
          #MORE THAN A HOME
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
         Welcome to Key Homes KC
        </h1>

        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-sm max-w-md lg:max-w-2xl mx-auto text-center">
          Kansas City's elite Real Estate Team is here to answer your
          questions. The best thing you can do RIGHT NOW is start the
            conversation. We can't wait to talk with you!
        </p>

        <a href="/contact" className="border border-white px-6 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition duration-300">
          Contact Us
        </a>
      </div>
    </section>
  );
}
