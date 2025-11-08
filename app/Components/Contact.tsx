const Contact = () => {
  return (
    <div className="w-full h-full flex  bg-[url('/winter-decoration.jpeg')] bg-cover bg-center text-black text-6xl font-bold rounded-4xl ">

      {/* inner container */}
      <div className="flex flex-col w-full items-center justify-center gap-2 px-20">
        <h1 className="absolute transform-3d">We Capture The Moments</h1>

        {/* images */}
        <div className="flex w-full justify-between">
          <div className="relative bg-white h-[390px] w-[290px] flex justify-center rounded-2xl">
            <img className="h-[350px] w-[250px] rounded-3xl mt-2.5" src="birthday.jpg" alt="" />
            <p className="absolute top-9/10 text-3xl font-cursive">Birthdays</p>
          </div>

          <div className="relative bg-white h-[390px] w-[390px] flex justify-center rounded-2xl">
            <img className="h-[350px] w-[350px] rounded-3xl mt-3" src="pre-wedding.jpg" alt="" />
            <p className="absolute top-9/10 text-3xl font-cursive">Pre wedding</p>
          </div>


        </div>

        <div className="flex w-full justify-between">

          <div className="relative bg-white h-[390px] w-[290px] flex justify-center rounded-2xl">
            <img className="h-[350px] w-[250px] rounded-3xl mt-3" src="wedding.jpg" alt="" />
            <p className="absolute top-9/10 text-3xl font-cursive"> Wedding</p>
          </div>

          <div className="relative bg-white h-[390px] w-[390px] flex justify-center rounded-2xl">
            <img className="h-[350px] w-[350px] rounded-3xl mt-3" src="wedding.jpg" alt="" />
            <p className="absolute top-9/10 text-3xl font-cursive ">Wedding</p>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Contact;
