import VideoSection from "@/components/VideoSection";
import Image from "next/image";
import Team from "@/components/Team";
import Review from "@/components/Review";
import AboutHero from "@/components/AboutHero";
import CoreValues from "@/components/CoreValues";

const programs = [
  {
    img: "/icons/home.png",
    title: "First-Time Home Buyers",
    subtitle:
      "Patient, educational guidance for buyers navigating the process for the first time.",
  },
  {
    img: "/icons/relocating.png",
    title: "Relocating Families",
    subtitle:
      "Helping families moving to Kansas City find the right neighborhood and community.",
  },
  {
    img: "/icons/military.png",
    title: "Military & Veterans",
    subtitle:
      "VA loan expertise and military relocation support for those who serve.",
  },
  {
    img: "/icons/star.png",
    title: "Ameristar Employees",
    subtitle:
      "Exclusive Home Advantage program for Ameristar Casino team members.",
  },
  {
    img: "/icons/senior.png",
    title: "Senior Downsizing",
    subtitle:
      "Compassionate guidance through the Preferred Pathways Senior Program.",
  },
  {
    img: "/icons/move-up.png",
    title: "Move-Up Buyers",
    subtitle:
      "Coordinating the sale of your current home with the purchase of your next one.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      {/* 🔥 ABOUT INTRO */}
      {/* <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
      </section> */}


 <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-5 items-center">
          <div>
            <div className="w-12 h-[2px] bg-amber-400 mb-4"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              A Kansas City Agent Who Truly Knows KC

            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Rebeccah Graham is a Kansas City native with deep roots in the community she serves. As Team Leader of Key Homes KC, powered by United Real Estate KC, she has built a reputation for exceptional client service, honest communication, and consistent results.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Over her 15+ year career, Rebeccah has helped more than 200 families navigate the Kansas City real estate market — from first-time buyers in the Northland to luxury sellers in Leawood. She has been recognized as a Five Star Professional for three consecutive years, an honor given to the top real estate agents in the Kansas City area based on client satisfaction.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Beyond her certifications, Rebeccah is passionate about education — helping clients understand the process so they can make confident decisions. She has been featured on American Dream TV, Great Day KC, and Fox 4 News as a Kansas City real estate expert.
            </p>
          </div>

          <a
          href="/buyer"
          className="w-50 bg-[#986E3A]  text-sm tracking-widest text-white hover:bg-[#01304E] hover:text-white transition duration-300 p-4"
        >
         Work With Rebeccah
        </a>

        
        </div>
      </section>



      <CoreValues />


      <section className="relative py-20 bg-slate-900">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <div className="w-12 h-[2px] bg-amber-400 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Marketing Strategy Gets Results
            </h2>
            <p className="mt-3 text-gray-300 max-w-xl mx-auto">
              We don't just list your home — we market it aggressively across
              every channel to attract the most qualified buyers.
            </p>
          </div>

          {/* ✅ Responsive Grid FIX */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {programs.map((item, index) => (
              <div
                key={index}
                className="group bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/20 transition duration-300 shadow-xl"
              >
                <div className="my-3">
                  <Image src={item.img} alt="icons" width={80} height={80} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-amber-300 text-sm mt-1">{item.subtitle}</p>

                {/* Hover line */}
                <div className="mt-6 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Team />
    </main>
  );
}
