
import HomeSection from "./Components/HomeSection";
import Cards from "./Components/Cards";
import Contact from "./Components/Contact";
import About from "./Components/About";
import ScrollSections from "./Components/ScrollSection";
import Projects from "./Components/Projects";
import Floating3D from "./Components/Floating3D";
import FloatingCamera from "./Components/FloatingCamera";
import Floating3DCamera from "./Components/FloatingCamera2";


export default function Home() {

  const sections = [
    <HomeSection/>,
    <About/>,
    <Contact/>,
    <Projects/>,
  ]

  


  return (
     <div className="relative w-full h-screen ">
      <FloatingCamera sections={sections.length} />
      <ScrollSections sections={sections} />
      
    </div>
    // <Cards/>
  
  );
}
