import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Episodes from "@/components/sections/Episodes";
import Shorts from "@/components/sections/Shorts";
import About from "@/components/sections/About";
import MediaRecognition from "@/components/sections/MediaRecognition";
import Achievements from "@/components/sections/Achievements";
import Impact from "@/components/sections/Impact";
import Journey from "@/components/sections/Journey";
import Social from "@/components/sections/Social";
import Brands from "@/components/sections/Brands";
import Contact from "@/components/sections/Contact";
import Blogs from "@/components/sections/Blogs";
import Reviews from "@/components/sections/Reviews";
import Projects from "@/components/sections/Projects";
import Foundation from "@/components/sections/Foundation";
import Team from "@/components/sections/Team";
import Careers from "@/components/sections/Careers";
import GetStarted from "@/components/sections/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Episodes />
      <Shorts />
      <About />
      <MediaRecognition />
      <Achievements />
      <Impact />
      <Journey />
      <Social />
      <Brands />
      <Contact />
      <Blogs />
      <Reviews />
      {/* <Projects /> */}
      <Foundation />
      <Team />
      <Careers />
      <GetStarted />
      <Footer />
    </>
  );
}
