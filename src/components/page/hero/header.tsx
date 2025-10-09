import logo from "@/assets/logo.png";
import contact from "@/assets/contact.png";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <div className="w-full h-fit items-center flex justify-around gap-1 sm:gap-2 md:gap-4 py-2 sm:py-4 px-1 sm:px-2 md:px-4">
            <img 
                src={contact} 
                alt="Contact Information" 
                className="w-auto h-4 sm:h-6 md:h-8 lg:h-11 max-w-[80px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[235px]" 
            />
            <img 
                src={logo} 
                alt="Company Logo" 
                className="w-auto h-8 sm:h-12 md:h-16 lg:h-20 xl:h-25 max-w-[60px] sm:max-w-[100px] md:max-w-[140px] lg:max-w-[181px]" 
            />
            <Button 
                size="sm" 
                className="hover:bg-amber-800 text-white px-2 sm:px-3 md:px-6 lg:px-12 xl:px-15 py-1 sm:py-2 md:py-3 lg:py-4 text-[10px] sm:text-xs md:text-sm lg:text-lg font-medium bg-transparent border border-white cursor-pointer whitespace-nowrap rounded-none"
            >
                CONSULT NOW
            </Button>
        </div>
    );
}