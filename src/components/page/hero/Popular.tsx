
const Popular = () => {


  return (
    <div className="w-full flex flex-col items-center mt-8 text-black">
      <h2 className="text-2xl font-semibold mb-4">POPULAR PROCEDURES</h2>
      <div className="flex justify-center items-center p-4 ">
      <img src="src/assets/Group 38 (1).png">
      </img>
      <img src="src/assets/Group 555.png"></img>
      <img src="src/assets/Component 19.png"></img>
      <img src="src/assets/Component 20.png"></img>
      <img src="src/assets/Component 21.png"></img>
      <img src="src/assets/Component 22.png"></img>
  
  
</div>
<div className="flex items-center p-4 relative ">
  {/* First image (left, overlapping) */}
<div className="flex items-start p-4 gap-8">
  {/* Image */}
  <div className="relative">
   
 <div className=" w-140 h-140 ml-auto">
  {/* Image */}
  <img
    src="src/assets/Mask group (1).png"
    alt="Background Image"
    className="w-180 h-140 object-cover"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-start p-6 ">
    <h1 className="text-3xl ">
      BOTOX
    </h1>
    <br />
    <br />
    <p className="text-gray-500 ">
      BOTOX® Cosmetic (onabotulinumtoxinA), a prescription medicine, is a purified protein that temporarily improves the look of moderate-to-severe frown lines between the brows, on the forehead and crow’s feet in adults younger on average than 65 years of age. With JUVÉDERM® the injection process takes only about 15 minutes to an hour and results are immediate. Plus, there’s minimal recovery or downtime.
    </p>
    <br />
    <br />
   <button className="hover:stroke-background"> <a href="http://"><img src="src/assets/Component 4.png" alt=""  /></a></button>
  </div>



  {/* Text content */}
 
  </div>
</div>


  {/* Second image (right, background) */}
  <div className="flex-justify-start size-max">
  <img
    src="src/assets/WhatsApp Image 2025-08-19 at 6.57.16 PM 1.png "
    alt="Right Image"
    className="w-180 h-180 left-0 size-16"
  />
  </div>
</div>
</div>

    </div>
  )
}

export default Popular;
