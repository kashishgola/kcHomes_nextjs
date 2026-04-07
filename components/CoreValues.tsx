"use client";

import Image from "next/image";

const values = [
  {
    img: "/icons/c1.png",
    title: "Honesty First",
    desc: "We tell you what you need to hear, not what you want to hear. Honest guidance leads to better decisions.",
  },
  {
    img: "/icons/c2.png",
    title: "Local Expertise",
    desc: "15+ years living and working in Kansas City gives us insight no out-of-town agent can match.",
  },
  {
    img: "/icons/c3.png",
    title: "Personal Attention",
    desc: "You're not a transaction to us. We build real relationships and stay in touch long after closing.",
  },
  {
    img: "/icons/c4.png",
    title: "Proven Results",
    desc: "200+ families helped, consistent 5-star reviews, and a track record of successful KC transactions.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="w-12 h-[2px] bg-amber-400 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Our Core Values
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => {
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl hover:shadow-xl transition duration-300 bg-white"
              >
                {/* Icon */}
                <div className="my-3 flex justify-center">
                  <Image src={item.img} alt="icons" width={80} height={80} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-black group-hover:text-amber-500 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover line */}
                <div className="mt-5 w-0 h-[2px] bg-amber-400 mx-auto group-hover:w-10 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
