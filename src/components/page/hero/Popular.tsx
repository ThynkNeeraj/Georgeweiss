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
  return (
    <div className="w-full flex flex-col items-center mt-8 text-black">
      <h2 className="text-2xl font-semibold mb-4">POPULAR PROCEDURES</h2>

      <div className="flex justify-center items-center p-4">
        <img src={Group38} />
        <img src={Group555} />
        <img src={Component19} />
        <img src={Component20} />
        <img src={Component21} />
        <img src={Component22} />
      </div>

      <div className="flex items-center p-4 relative">
        <div className="flex items-start p-4 gap-8">
          <div className="relative">
            <div className=" w-140 h-140 ml-auto">
              <img src={MaskGroup} alt="Background Image" className="w-180 h-140 object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
                <h1 className="text-3xl">BOTOX</h1>
                <br />
                <br />
                <p className="text-gray-500">
                  BOTOX® Cosmetic (onabotulinumtoxinA), a prescription medicine, is a purified protein that temporarily improves the look of moderate-to-severe frown lines between the brows, on the forehead and crow’s feet in adults younger on average than 65 years of age. With JUVÉDERM® the injection process takes only about 15 minutes to an hour and results are immediate. Plus, there’s minimal recovery or downtime.
                </p>
                <br />
                <br />
                <button className="hover:stroke-background">
                  <a href="http://"><img src={Component4} alt="" /></a>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-justify-start size-max">
            <img src={RightImage} alt="Right Image" className="w-180 h-180 left-0 size-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
