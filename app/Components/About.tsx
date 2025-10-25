
const About = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white text-6xl font-bold rounded-4xl overflow-hidden">
      
      {/* Diagonal background */}
      <div className="absolute inset-0 bg-diagonal"></div>

      {/* Content above the background */}
      <div className="relative z-10">
        About
      </div>
    </div>
  );
};

export default About;




