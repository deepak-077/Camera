
const Contact = () => {
  return (
    <div className="w-full h-full flex bg-[#d2cabd] text-black text-6xl font-bold rounded-4xl">
      {/* inner container */}
      <div className="flex flex-col w-full items-center justify-center gap-2 px-10">
        <h1 className="absolute transform-3d">We Capture The Moments</h1>

        {/* images */}
        <div className="flex w-full justify-between">
          <img className="h-[390px] w-[290px] rounded-3xl" src="birthday.jpg" alt="" />
          <img className="h-[390px] w-[290px] rounded-3xl" src="pre-wedding.jpg" alt="" />
        </div>

        <div className="flex w-full justify-between">
          <img className="h-[390px] w-[290px] rounded-3xl object-cover" src="birthday.jpg" alt="" />
          <img className="h-[390px] w-[290px] rounded-3xl object-cover" src="wedding.jpg" alt="" />

        </div>


      </div>
      
      
    </div>
  );
};

export default Contact;
