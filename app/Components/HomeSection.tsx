"use client"
import { useState } from "react";

function HomeSection() {
  const [clicked,setClicked]=useState(false)

  function handleClick(){
    setClicked(prev=>!prev)
  }

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

        {/* menu icon */}
        <div className="flex md:hidden" onClick={handleClick} >
          <img className="size-[35px] md:size-[50px]" src="menu.png" alt="" />
        </div>

        {/* sidebar */}

        <div className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/3  z-50 transform transition-transform duration-300 ease-in-out bg-[#e4946d] ${
        clicked ? "translate-x-0" : "translate-x-full"
        }`}
        >
        <div className="p-6 text-black text-2xl">
          <button onClick={handleClick} className="text-black text-3xl font-bold float-right">
            ✕
          </button>
          <div className="mt-16 flex flex-col gap-6">
            <span>Home</span>
            <span>Products</span>
            <span>About Us</span>
            <span>Contact</span>
            <div >
              <img className="size-[35px] md:size-[50px]" src="cart.png" alt="" />
            </div>
          </div>
        </div>
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






