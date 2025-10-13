import homeImage from "@/assets/home-1-4 1.png";
import maskImage from "@/assets/Mask group.png";
import healthyImage from "@/assets/being-healthy-gets-me-excited-2025-04-06-08-20-35-utc.png";

function Girl() {
  const items = [
    { img: homeImage, text: "FACE & NECK" },
    { img: maskImage, text: "BODY" },
    { img: healthyImage, text: "RESHAPE YOUR LIFE" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
      {items.map((item, i) => (
        <div key={i} className="relative group overflow-hidden rounded-2xl shadow-lg">
          <img
            src={item.img}
            alt={item.text}
            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
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
}

export default Girl;
