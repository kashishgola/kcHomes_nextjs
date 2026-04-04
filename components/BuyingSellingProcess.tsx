"use client";
import Image from "next/image";

export default function BuyingProcess({ steps, title, subtitle }) {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {title}
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">{subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Number Circle */}
              <div className="absolute -top-5 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold shadow-md">
                {step.id}
              </div>

              <div className="my-3">
                <Image src={step.img} alt="icons" width={80} height={80} />
              </div>

              {/* Content */}
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
