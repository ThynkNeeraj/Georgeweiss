import generalmap from "../assets/ssmap.png"
import generalmap2 from "../assets/wellingness.png"


import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Form */}
        <div>
          <Button
            className="mb-6 border border-[#b29a60] text-[#b29a60] bg-transparent hover:bg-[#b29a60] hover:text-white rounded-none px-10 py-5 text-xs tracking-[0.2em] uppercase"
            >
        
            Book an appointment
          </Button>

          <h3 className=" text text-5xl font- text-black tracking- mb-8">
            GET IN TOUCH
          </h3>

          <p className="text-gray-500 mb-10 leading-relaxed">
            We are more than a locksmith brand. We are your Real-Life Security Interface — connecting
            craftsmanship with technology to make protection both reliable and human.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name*
                </Label>
                <Input
                  id="name"
                  placeholder="Full Name"
                  className="bg-gray-100 border-none text-sm text-gray-800 focus:ring-0"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email*
                </Label>
                <Input
                  id="email"
                  placeholder="Email"
                  className="bg-gray-100 border-none text-sm text-gray-800 focus:ring-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number*
                </Label>
                <Input
                  id="phone"
                  placeholder="Phone"
                  className="bg-gray-100 border-none text-sm text-gray-800 focus:ring-0"
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                  Service*
                </Label>
                <Input
                  id="service"
                  placeholder="Service"
                  className="bg-gray-100 border-none text-sm text-gray-800 focus:ring-0"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Comment Or Message
              </Label>
              <Textarea
                id="message"
                placeholder="Message"
                className="bg-gray-100 border-none text-sm text-gray-800 h-28 focus:ring-0 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="mt-4 border border-[#b29a60] text-[#b29a60] bg-transparent hover:bg-[#b29a60] hover:text-white rounded-none px-10 py-5 text-xs tracking-[0.2em] uppercase"
            >
              Submit
            </Button>
          </form>
        </div>

        {/* Right Column - Google Map */}
        <div className="relative w-full">
          <img
            src={generalmap}
            alt="map upper"
            className="w-full h-auto object-cover"
          />
          <img
            src={generalmap2}
            alt="map overlay"
            className="absolute left-2 top-[65px] z-30 w-3/4 md:w-2/3 "
          />
        </div>


      </div>
    </section>
  )
}
