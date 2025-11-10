const Footer = () => {
  return (
    <div className="contact-section w-full h-full md:h-2/3 flex items-center justify-center bg-[#d2cabd] text-black  font-bold rounded-4xl text-lg md:text-2xl">

      <div className="w-full h-[400px] px-[20px] py-[90px] flex flex-col justify-center items-center">

        <div className="w-full items-center md:justify-center flex flex-col md:flex-row gap-0 md:gap-5">
          <div className="w-full max-w-[400px]  h-[200px] md:h-[400px] flex flex-col items-center  ">
          <h1 className="text-center text-3xl md:text-5xl">Lumora Photography</h1>
          <img className="h-[200px] w-[250px] md:h-[200px] md:w-[300px]" src="camera.png" alt="" />

        </div>
        <div className="w-full max-w-[300px] h-[150px] md:h-[400px] flex flex-col ">
          <h1 className="text-2xl md:text-4xl">What we do</h1>
          <h2>Event Management</h2>
          <h2>For Business</h2>
          <h2>Pricing</h2>

        </div>
        <div className="w-full max-w-[300px]  h-[150px] md:h-[400px] flex flex-col ">
          <h1 className="text-2xl md:text-4xl">Need Help</h1>
          <h2 >Contact Us</h2>
          <h2>Help Center</h2>
          
        </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2 ">
          <h1>Follow Us On Socials</h1>
          <div className="flex gap-2">
            <img className="size-9 md:size-[50px] " src="instagram.png" alt="" />
          <img className="size-9 md:size-[50px]" src="facebook.png" alt="" />
          <img className="size-9 md:size-[50px]" src="twitter.png" alt="" />
          <img className="size-9 md:size-[50px]" src="youtube.png" alt="" />

          </div>
          
        </div>
        
      </div>
    </div>
  );
};
export default Footer;