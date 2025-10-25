
const About = () => {
  return (
    <div className="relative w-full h-screen flex  justify-center text-white text-4xl font-bold rounded-4xl overflow-hidden">
      
      {/* Diagonal background */}
      <div className="absolute inset-0 bg-diagonal"></div>

      {/* Content above the background */}
      <div className="relative z-10">
        <div className="flex mt-8 text-[170px] text-black font-extrabold gap-20 transform rotate-[13deg] origin-left-top">
          <span>ULTRA </span>
          <span className="">HD</span>
        </div>
      </div>


      <div className="absolute text-black  right-16 top-[65%]">
        <p>More than Just a Camera</p>
        <p>It's your creative partner</p>
      </div>

      
      <div className="absolute text-black  left-16 top-[40%] w-[400px]">
        <p>Discover Lumora XI for creative professionals</p>
        <p>who want to capture every moment</p>
      </div>

    
      <div className="absolute bottom-12 w-full flex justify-center">
        <button className="bg-black text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-[#b7633a] transition">
           Explore More
         </button>
       </div>

    </div>
  );
};

export default About;




