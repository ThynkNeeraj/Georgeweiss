import oldman from  "../assets/budau.png"
import oldman2 from "../assets/mxplayer.png"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export  function MeetDrWeiss() {
  return (
    <section className="bg-[#B1976B] text-white py-16 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-10 items-center">
        {/* Left Content */}
        <div>
          <div className="text-sm font-semibold uppercase tracking-widest bg-white/20 text-white inline-block px-3 py-1 rounded-sm mb-6">
            Meet Dr. Weiss
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Board-Certified, Internationally Recognized Physician
          </h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            Dr. George Weiss is a diplomate of the American Board of Bariatric Medicine 
            and a globally respected leader in preventive, anti-aging, and integrative medicine, 
            with more than 20 years of clinical experience.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#B1976B] rounded-none px-6 py-5">
              About Dr. Weiss
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm uppercase tracking-wide">Years of Clinical Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">30,000+</p>
              <p className="text-sm uppercase tracking-wide">Lives Transformed</p>
            </div>
            <div>
              <p className="text-3xl font-bold">10,000+</p>
              <p className="text-sm uppercase tracking-wide">Aesthetic Procedures Performed</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm uppercase tracking-wide">Global Expertise</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={ oldman }
            alt="Dr. Weiss"
            className="rounded-lg w-full object-cover shadow-lg"
          />
          <img
            src={ oldman2 }
            alt="Video Thumbnail"
            className="absolute bottom-6 left-[-30px] bg-white text-[#B1976B] hover:bg-white/90  w-45 h-14"
          />
        </div>
      </div>
    </section>
  )
}
