import Group38 from "@/assets/Group 38 (1).png";
import Group555 from "@/assets/Group 555.png";
import Component19 from "@/assets/Component 19.png";
import Component20 from "@/assets/Component 20.png";
import Component21 from "@/assets/Component 21.png";
import Component22 from "@/assets/Component 22.png";
import MaskGroup from "@/assets/Mask group (1).png";
import RightImage from "@/assets/WhatsApp Image 2025-08-19 at 6.57.16 PM 1.png";
import Component4 from "@/assets/Component 4.png";

const Popular = () => {
  const popularImages = [
    Group38,
    Group555,
    Component19,
    Component20,
    Component21,
    Component22,
  ];

  return (
    <div className="w-full flex flex-col items-center mt-8 text-black">
      <h2 className="text-2xl font-semibold mb-4">POPULAR PROCEDURES</h2>

      {/* Top row of small images */}
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        {popularImages.map((img, idx) => (
          <img key={idx} src={img} alt={`Popular ${idx}`} className="w-24 h-24 object-cover" />
        ))}
      </div>

      {/* Main featured section */}
      <div className="flex flex-col md:flex-row items-start p-4 gap-8 relative">
        {/* Left image with text overlay */}
        <div className="relative w-[350px] h-[350px]">
          <img src={MaskGroup} alt="BOTOX" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 bg-black/30 text-white">
            <h1 className="text-3xl font-bold">BOTOX</h1>
            <p className="mt-4 text-sm text-gray-200">
              BOTOX® Cosmetic (onabotulinumtoxinA), a prescription medicine, is a purified protein that temporarily improves the look of moderate-to-severe frown lines between the brows, on the forehead and crow’s feet in adults younger than 65 years of age. With JUVÉDERM® the injection process takes only about 15 minutes to an hour and results are immediate. Minimal recovery or downtime.
            </p>
            <a href="#" className="mt-4 inline-block">
              <img src={Component4} alt="Button" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Right background image */}
        <div className="w-[350px] h-[350px]">
          <img src={RightImage} alt="Right" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Popular;
