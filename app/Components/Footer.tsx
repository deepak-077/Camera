
const Footer = () => {
  return (
    <div className="contact-section w-full h-2/3 flex items-center justify-center bg-[#d2cabd] text-black  font-bold rounded-4xl text-2xl">

      <div className="w-full h-[400px] px-[20px] py-[90px] flex flex-col justify-center items-center">

        <div className="flex">
          <div className="w-[400px] h-[400px] flex flex-col items-center ">
          <h1 className="text-center text-5xl">Lumora Photography</h1>
          <img className="h-[200px] w-[300px]" src="camera.png" alt="" />

        </div>
        <div className="w-[400px]  h-[400px] flex flex-col ">
          <h1 className=" text-4xl">What we do</h1>
          <h2>Event Management</h2>
          <h2>For Business</h2>
          <h2>Pricing</h2>

        </div>
        <div className="w-[400px]  h-[400px] flex flex-col ">
          <h1 className="text-4xl">Need Help</h1>
          <h2 >Contact Us</h2>
          <h2>Help Center</h2>
          

        </div>

        </div>

        <div className="flex justify-center items-center gap-2 ">
          <h1>Follow Us On Socials</h1>
          <img className="size-[50px] " src="instagram.png" alt="" />
          <img className="size-[50px]" src="facebook.png" alt="" />
          <img className="size-[50px]" src="twitter.png" alt="" />
          <img className="size-[50px]" src="youtube.png" alt="" />
        </div>
        
        


      </div>
      
      
      
    </div>
  );
};
export default Footer;