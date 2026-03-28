import VideoSection from "@/components/VideoSection";
import Image from "next/image";
import Team from "@/components/Team";
import Path from "@/components/Path";
import TeamDetails from "@/components/TeamDetails";
import Review from "@/components/Review";

export default function AboutPage() {
  return (
    <main>
      {/* 🔥 HERO / BREADCRUMB */}
      <section className="relative h-[200px] w-full">
        <Image
          src="/background/hero.webp"
          alt="About"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(29,41,62,0.6)]" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About Us
          </h1>

          <div className="flex gap-2 mt-3 text-sm">
            <span className="hover:text-orange-400 cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-orange-400">About</span>
          </div>
        </div>
      </section>

      {/* 🔥 ABOUT INTRO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>

              <p className="mt-4 text-gray-600">
                We are a modern real estate platform helping buyers and sellers
                connect seamlessly. Our mission is to simplify property
                discovery and provide expert guidance at every step.
              </p>

              <p className="mt-4 text-gray-600">
                With years of experience and a dedicated team, we deliver
                trusted solutions for all your real estate needs.
              </p>

              <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
                Explore Properties
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className=" w-full">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/v93iZUJAIWE"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamDetails />
      <Path />
      <Team />
      <Review />
      <VideoSection />
    </main>
  );
}
