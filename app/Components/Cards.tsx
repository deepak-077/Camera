import { StickyCard002 } from "@/components/ui/skiper-ui/skiper17";

function Cards() {
  const customCards = [
    {
      id: "1",
      image: "img14.png",
      alt: "Project 1",
    },
    {
      id: "2",
      image: "img15.png",
      alt: "Project 2",
    },
    {
      id: "3",
      image: "img27.png",
      alt: "Project 3",
    },
    {
      id: "4",
      image: "img29.png",
      alt: "Project 4",
    },
  ];

  return (
    <div className="h-screen w-full bg-gray-900">
      <StickyCard002
        cards={customCards}
        className="bg-gradient-to-br from-gray-900 to-black"
        containerClassName="rounded-2xl shadow-2xl"
        imageClassName="object-cover"
      />
    </div>
  );
};

export default Cards
