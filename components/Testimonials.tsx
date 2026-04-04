"use client";

const testimonials = [
  {
    message:"Rebeccah made our first home purchase so smooth and stress-free. She knew exactly what we were looking for and found us the perfect home in Lee's Summit within our budget. Highly recommend!",
    name: "Sarah M.",
    location: "Lee's Summit",
    rating: 5,
  },
  {
    message: "We sold our home in 8 days above asking price. Rebeccah's marketing strategy and local knowledge are unmatched. She kept us informed every step of the way. We couldn't be happier.",
    name: "David & Kim T.",
    location: "Overland Park",
    rating: 5,
  },
  {
    message:       "As a veteran, I was nervous about the VA loan process. Rebeccah walked me through everything and made sure I got every benefit I was entitled to. She's a true advocate for her clients.",
    name: "Marcus J.",
    location: "Northland KC",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="w-12 h-[2px] bg-amber-400 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-gray-600">
            Real experiences from happy homeowners.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 group"
            >
              {/* ⭐ Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed relative">
                <span className="text-3xl text-amber-200 absolute -top-3 left-0">“</span>
                {item.message}
              </p>

              {/* Divider */}
              <div className="mt-6 h-[1px] bg-gray-200"></div>

              {/* User */}
              <div className="mt-4 flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-gray-800 group-hover:text-amber-500 transition">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}