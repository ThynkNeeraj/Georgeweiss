import client from "../assets/Component 24.png"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialSection() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full h-screen">
        <Card className="bg-transparent border-0 shadow-none w-full h-220">
          <CardContent className="p-0 w-full h-full">
            <div className="w-full h-screen">
              <img
                src={client}
                alt="Client testimonial"
                className="w-full h-220 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
