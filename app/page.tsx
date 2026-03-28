import BlogSection from "@/components/BlogSection";
import Certificate from "@/components/Certificate";
import Hero from "@/components/Hero";
import Listing from "@/components/Listing";
import Path from "@/components/Path";
import Team from "@/components/Team";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
    <Hero />
    <Listing />
    <Team />
    <Path />
    <Certificate />
    <VideoSection />
    <BlogSection />
    </>
  );
}
