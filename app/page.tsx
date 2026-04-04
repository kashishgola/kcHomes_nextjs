import AboutHero from "@/components/AboutHero";
import BlogSection from "@/components/BlogSection";
import Goal from "@/components/Goal";
import Hero from "@/components/Hero";
import Listing from "@/components/Listing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
// import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
    <Hero />
    <Listing />
    <Goal />
    <Team />
    <Testimonials />
    {/* <AboutHero /> */}
    {/* <VideoSection /> */}
    <BlogSection />
    </>
  );
}
