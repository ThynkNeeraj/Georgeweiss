function Girl ()  {
  const items = [
    {
      img: "src/assets/home-1-4 1.png", // Replace with your image URL
      text: "FACE & NECK",
    },
    {
      img: "src/assets/Mask group.png",
      text: "BODY",
    },
    {
      img: "src/assets/being-healthy-gets-me-excited-2025-04-06-08-20-35-utc.png",
      text: "RESHAPE YOUR LIFE",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 p-0">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative group overflow-hidden rounded-0 shadow-lg"
        >
          <img
            src={item.img}
            alt={item.text}
            className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-6">
            <h2 className="text-white text-xl font-semibold tracking-wide text-center">
              {item.text}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Girl;