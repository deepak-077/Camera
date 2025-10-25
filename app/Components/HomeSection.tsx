function HomeSection() {
  return (
    <div className="w-full h-full bg-[#d2cabd] text-white  rounded-4xl">
      <nav className="flex justify-around">
        {/* name and logo */}
        <div>
          Lumora
        </div>
        <div className="flex gap-2 bg-[#b7633a]">
          <span>Home</span>
          <span>Products</span>
          <span>About Us</span>
          <span>Contact</span>
        </div>

        <div>
          Cart
        </div>
      </nav>

      <div className="absolute top-1/4 flex flex-col justify-center text-[150px] text-black  font-extrabold  ml-60 leading-35">
        <span>CAPTURE </span>
        <span className="ml-50">MOMENTS</span>
        
      </div>

      {/* to the right side of the camera */}
      <div className="absolute text-black  right-16 top-[70%]">
        <p>More than Just a Camera</p>
        <p>It's your creative partner</p>
      </div>

      {/* to the left side of the camera */}
      <div className="absolute text-black  left-16 top-[80%]">
        <p>Discover Lumora XI for creative professionals</p>
        <p>who want to capture every moment</p>
      </div>

    {/* at the center but bottom of the page  */}
      <div className="absolute bottom-12 w-full flex justify-center">
        <button className="bg-black text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-[#b7633a] transition">
           Explore More
         </button>
       </div>

    </div>
  );
};

export default HomeSection;






