import Image from "next/image";

export default function Certificate() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 md:px-12 lg:px-20">
        <div>
          <p className="text-3xl font-semibold text-black">
            We are certified in several fields to service all your real estate
            needs.
          </p>
        </div>
        <div className="relative h-64">
          <Image
            src="/website/certi.png"
            alt="Real Estate"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
