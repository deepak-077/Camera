
const Contact = () => {
  return (
    <div className="w-full h-full flex   bg-[url('/winter-decoration.jpeg')] bg-cover bg-center text-black text-6xl font-bold rounded-4xl overflow-hidden">

      {/* inner container */}
      <div className="flex flex-col w-full items-center justify-center gap-2 px-20">
        <h1 className="absolute transform-3d rotate-[-15deg] text-4xl md:text-7xl font-extrabold z-1 text-orange-400">We Capture The Moments</h1>
        

        {/* horizontal images */}
        <div className="absolute flex flex-col md:flex-row w-full justify-evenly items-center gap-2">
          <div className="relative bg-white h-[290px] w-[250px] sm:h-[350] sm:w-[350] md:h-[390px] md:w-[290px] flex justify-center rounded-2xl rotate-12">
            <img className="h-[250px] w-[210px] sm:h-[310px] sm:w-[310px]  md:h-[350px] md:w-[250px] rounded-3xl mt-2.5" src="giraffe.jpg" alt="" />
            <p className="absolute top-9/10 text-3xl font-cursive">Wildlife Photography</p>
          </div>

          <div className=" hidden md:flex relative bg-white h-[290px] w-[250px] sm:h-[350] sm:w-[270] md:h-[390px] md:w-[290px] justify-center rounded-2xl rotate-12">
            <img className="h-[250px] w-[210px] sm:h-[310px] sm:w-[230px] md:h-[350px] md:w-[250px] rounded-3xl mt-2.5" src="birthday.jpg" alt="" />
            <p className="absolute top-9/10 text-3xl font-cursive">Birthdays</p>
          </div>

        </div>

        <div className="flex flex-col w-full justify-center items-center ">

          <div className="relative bg-white h-[290px] w-[250px] sm:h-[350] sm:w-[350] md:h-[390px] md:w-[390px] flex justify-center rounded-2xl rotate-12">
            <img className="h-[250px] w-[210px] sm:h-[310px] sm:w-[310px] md:h-[350px] md:w-[350px] rounded-3xl mt-3" src="pre-wedding.jpg" alt="" />
            <p className="absolute top-9/10 text-3xl font-cursive">Pre wedding</p>
          </div>

          <div className="relative bg-white h-[290px] w-[250px] sm:h-[350] sm:w-[350] md:h-[390px] md:w-[390px] flex justify-center rounded-2xl rotate-[12]">
            <img className="h-[250px] w-[210px] sm:h-[310px] sm:w-[310px] md:h-[350px] md:w-[350px] rounded-3xl mt-3" src="wedding.jpg" alt="" />
            <p className="absolute top-9/10 text-3xl font-cursive"> Wedding</p>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Contact;



