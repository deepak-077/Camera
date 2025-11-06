function HomeSection() {
  return (
    <div className=" w-full h-full bg-[#d2cabd] text-white  rounded-4xl">
      <nav className="flex justify-around p-5 text-3xl">
        {/* name and logo */}
        <div className="text-3xl md:text-5xl font-bold text-black">
          Lumora
        </div>

      
        <div className="hidden md:flex gap-4 bg-[#b7633a] p-3 rounded-4xl">
          <span>Home</span>
          <span>Products</span>
          <span>About Us</span>
          <span>Contact</span>
        </div>

        <div className="hidden md:flex">
          <img className="size-[35px] md:size-[50px]" src="cart.png" alt="" />
        </div>
        <div>
          <img className="size-[35px] md:size-[50px]" src="menu.png" alt="" />
        </div>
      </nav>

      <div className="absolute top-1/5 md:top-1/4 flex flex-col justify-center text-[50px]  xs:text-[70px] sm:text-[90px] md:text-[110px] lg:text-[150px] text-black  font-extrabold ml-10  lg:ml-20 xl:ml-60 leading-15 xs:leading-20 sm:leading-25 md:leading-35 ">
        <span>CAPTURE </span>
        <span className="ml-2 xs:ml-18 sm:ml-24 lg:ml-50 ">MOMENTS</span>
        
      </div>

      
      <div className="absolute text-black  right-16 top-[63%] md:top-[70%]">
        <p>More than Just a Camera</p>
        <p>It's your creative partner</p>
      </div>

      
      <div className="absolute text-black  left-16 top-[72%] md:top-[80%]">
        <p>Discover Lumora XI for creative professionals</p>
        <p>who want to capture every moment</p>
      </div>

    
      <div className="absolute bottom-[50px] sm:bottom-12 w-full flex justify-center">
        <button className="bg-black text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-[#b7633a] transition">
           Explore More
         </button>
       </div>

    </div>
  );
};

export default HomeSection;






