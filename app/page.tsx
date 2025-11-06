
// import HomeSection from "./Components/HomeSection";
// import Cards from "./Components/Cards";
// import Contact from "./Components/Contact";
// import About from "./Components/About";
// import ScrollSections from "./Components/ScrollSection";
// import Projects from "./Components/Projects";
// import Floating3D from "./Components/Floating3D";
// import FloatingCamera from "./Components/FloatingCamera";
// import Floating3DCamera from "./Components/FloatingCamera2";


// export default function Home() {

//   const sections = [
//     <HomeSection/>,
//     <About/>,
//     <Contact/>,
//     <Projects/>,
//   ]

//   return (
//      <div className="relative w-full h-screen ">
//       <FloatingCamera sections={sections.length} />
//       <ScrollSections sections={sections} />
      
    
//     </div>
//     // <Cards/>
  
//   );
// }








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
    // <About key="about" />,
    // <Contact key="contact" />,
    // <Projects key="projects" />,
    // <Footer key="footer"/>
  ];

  return (
    <div className="relative w-full">
      {/* Floating camera overlay */}
      <FloatingCamera sections={sections.length} />
      

      {/* Sections stacked normally */}
      <div className="flex flex-col w-full">
        {sections.map((Section, i) => (
          <div key={i} className="h-screen w-full relative">
            {Section}
          </div>
        ))}
      </div>
    </div>
  );
}
