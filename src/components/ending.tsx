import ending from "../assets/lips.png"
import ending2 from "../assets/brown girl.png"
import ending3 from "../assets/cutegirl.png"
import ending4 from "../assets/blackgirls.png"
import ending5 from "../assets/eyebrow.png"
import ending6 from "../assets/oldgirl.png"
import ending7 from "../assets/GeorgeWeissFinalLogo 1.png"

import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#faf8f5] text-gray-700">
      {/* Instagram Row */}
<div className="bg-white text-left py-3 pl-6 border-b border-gray-100 text-xs tracking-wide uppercase text-gray-600">
  Instagram <span className="font-text-not black">@George Weiss MD</span>
</div>


      {/* Top Image Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0">
        <img src={ending} alt="ending1" className="w-full h-48 object-cover" />
        <img src={ending2} alt="ending2" className="w-full h-48 object-cover" />
        <img src={ending3} alt="ending3" className="w-full h-48 object-cover" />
        <img src={ending4} alt="ending4" className="w-full h-48 object-cover" />
        <img src={ending5} alt="ending5" className="w-full h-48 object-cover" />
        <img src={ending6} alt="ending6" className="w-full h-48 object-cover" />
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo + Socials */}
        <div className="flex flex-col items-start">
          <img src={ending7 } alt="Wellness & Longevity Medical" className="w-48 mb-6" />
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#b29a60] transition"><Facebook size={25} /></a>
            <a href="#" className="hover:text-[#b29a60] transition"><Twitter size={25} /></a>
            <a href="#" className="hover:text-[#b29a60] transition"><Instagram size={25} /></a>
            <a href="#" className="hover:text-[#b29a60] transition"><Youtube size={25} /></a>
            <a href="#" className="hover:text-[#b29a60] transition"><Linkedin size={25} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-black font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#b29a60] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#b29a60] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#b29a60] transition">Specials</a></li>
            <li><a href="#" className="hover:text-[#b29a60] transition">Products</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-black font-semibold mb-4 border-round">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Weight Loss/Nutrition</li>
            <li>Aesthetic Cosmetic Medicine</li>
            <li>Vitamins Injectables & Peptides</li>
            <li>Age Management/Hormone Replacement Therapies</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-black font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2"><Phone size={16} /> <span>+1 858 459 7100</span></li>
            <li className="flex items-start space-x-2"><Mail size={16} /> <span>georgeweissmd@gmail.com</span></li>
            <li className="flex items-start space-x-2"><MapPin size={16} /> <span>7634 Girard Ave, La Jolla, CA 92037, United States</span></li>
            <li className="flex items-start space-x-2"><Clock size={16} /> <span>Mon–Fri: 9am – 5pm<br />Sat: By Appointment Only</span></li>
          </ul>
        </div>
      </div>

      {/* Tailwind Separator Replacement */}
      <div className="border-t border-gray-300" />

      {/* Bottom Copyright */}
      <div className="mt-10 text-center py-6 text-sm text-gray-600">
        Copyright © <span className="font-semi text-not black">George Weiss MD</span> 2025. All Rights Reserved.
      </div>
    </footer>
  )
}
