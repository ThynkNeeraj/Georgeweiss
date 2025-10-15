import { StackedProfile } from "@/components/girl"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export  function WellnessSection() {
  const services = [
    ["Personalized weight management", "Age management solutions"],
    ["Hormone optimization", "Sexual health & vitality"],
    ["Preventive & integrative medicine", "Aesthetic medicine"],
  ]

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-sm font-semibold uppercase tracking-widest text-white bg-[#B1976B] inline-block px-3 py-1 rounded-sm mb-6">
        Why Choose Us
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Dr. Weiss for Your Wellness Journey
      </h1>
      <p className="text-gray-700 mb-10 leading-relaxed max-w-3xl">
        Our expertise goes beyond traditional medicine. Dr. Weiss combines over 30 years of clinical experience 
        with advanced, science-backed therapies to help you achieve optimal health, vitality, and longevity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 mb-10">
        {services.map(([left, right], i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#B1976B] mt-1" />
              <span className="text-gray-800">{left}</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#B1976B] mt-1" />
              <span className="text-gray-800">{right}</span>
            </div>
          </div>
        ))}
      </div>

      <Button className="border border-[#B1976B] text-[#B1976B] hover:bg-[#B1976B] hover:text-white transition font-medium rounded-none px-8 py-5">
        Find Out More
      </Button>
    </section>
  )
}
export function Textandimage() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full bg-gray-50 px-6">
            <StackedProfile />
            <WellnessSection />
        </div>
    )
}
