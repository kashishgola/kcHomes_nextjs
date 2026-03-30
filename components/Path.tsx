import Image from "next/image";

export default function Path() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 relative py-16 sm:px-6 md:px-12 lg:px-20 ">
      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          What’s your Path?
        </h2>
        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Choose your journey and let us guide you forward
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        
        {/* BUYER CARD */}
        <div className="relative shadow-lg">
          
          <Image
            src="/website/buyerroadmap.png"
            alt="Buyer"
            width={800}
            height={600}
            className="object-cover rounded-lg w-full h-auto"  
          />
        </div>

        {/* SELLER CARD */}
        <div className="relative h-full shadow-lg">
        
          <Image
            src="/website/sellerroadmap.png"
            alt="Seller"
            width={800}
            height={600}
            className="object-cover rounded-lg w-full h-auto"
          />

          
        </div>

      </div>
      </div>
    </section>
  );
}