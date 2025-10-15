import botoxBg from "../../../assets/Mask group2.png";
import rightImg from "../../../assets/WhatsApp Image 2025-08-19 at 6.57.16 PM 1.png";
import logo1 from "../../../assets/Group 39.png";
import logo2 from "../../../assets/Group 555.png";
import logo3 from "../../../assets/Component 19.png";
import logo4 from "../../../assets/Component 20.png";
import logo5 from "../../../assets/Component 21.png";
import logo6 from "../../../assets/Component 22.png";
import btnImg from "../../../assets/Component 4.png";

const Popular = () => {
  return (
    <div className="w-full flex flex-col items-center mt-8 text-black">
      <h2 className="text-2xl font-semibold mb-4">POPULAR PROCEDURES</h2>

      {/* Logo Row */}
      <div className="flex justify-center items-center p-4 gap-4">
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
        <img src={logo4} alt="logo4" />
        <img src={logo5} alt="logo5" />
        <img src={logo6} alt="logo6" />
      </div>

      {/* Botox Section */}
      <div className="flex items-center p-4 relative">
        <div className="flex items-center p-4 gap-8">
          {/* Left Image + Text */}
          <div className="relative">
            <div className="w-140 h-140 mr-[-150px] relative">
              <img
                src={botoxBg}
                alt="Background Image"
                className="w-180 h-140 object-cover"
              />
              <div className="absolute w-140 inset-0 flex flex-col justify-center items-start p-[70px]">
                <h1 className="text-3xl">BOTOX</h1>
                <br />
                <br />
                <p className="text-gray-500">
                  BOTOX® Cosmetic (onabotulinumtoxinA), a prescription medicine,
                  is a purified protein that temporarily improves the look of
                  moderate-to-severe frown lines between the brows, on the
                  forehead and crow’s feet in adults younger on average than 65
                  years of age. With JUVÉDERM® the injection process takes only
                  about 15 minutes to an hour and results are immediate. Plus,
                  there’s minimal recovery or downtime.
                </p>
                <br />
                <br />
                <button className="hover:stroke-background">
                  <a href="#">
                    <img src={btnImg} alt="button" />
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-justify-start size-max">
            <img
              src={rightImg}
              alt="Right Image"
              className="w-180 h-180 left-0 size-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
