
"use client";

import HomeSection from "./Components/HomeSection";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import FloatingCamera from "./Components/FloatingCamera";
import Footer from "./Components/Footer";


export default function Home() {
  const sections = [
    <HomeSection key="home" />,
    <About key="about" />,
    <Contact key="contact" />,
    <Projects key="projects" />,
    <Footer key="footer"/>
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Floating camera overlay */}
      <FloatingCamera sections={sections.length} />
      

      {/* Sections stacked normally */}
      <div className="flex flex-col w-full">
        {sections.map((Section, i) => (
          <div key={i} className="h-screen w-full relative overflow-hidden">
            {Section}
          </div>
        ))}
      </div>
    </div>
  );
}
