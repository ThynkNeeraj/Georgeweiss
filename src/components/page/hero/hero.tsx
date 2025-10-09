import hero from "@/assets/hero.png"
import { Button } from "@/components/ui/button"

import { Navbar } from "@/components/page/hero/navbar"
import { Header } from "@/components/page/hero/header"

export function Hero() {
    return (
        <div className="w-full h-[400px] sm:h-[768px] relative">
            <img
                src={hero}
                alt="Hero"
                className="object-fit w-full h-full"
            />
            <div className="w-full h-fit absolute top-0 z-20">
                <Header />
            </div>
            <div className="w-full h-fit absolute top-[60px] sm:top-[80px] md:top-[100px] lg:top-[120px] xl:top-[154px] flex justify-center items-center z-10">
                <Navbar />
            </div>
            <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center px-2 sm:px-4">
                <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-1 sm:mb-2 md:mb-4 leading-tight">
                    EVERYTHING IS POSSIBLE
                </h1>
                <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight">
                    WELLNESS & LONGEVITY MEDICAL
                </h1>
            </div>
            <div className="w-full absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-24 flex justify-center items-center px-2 sm:px-4">
                <Button
                    size="sm"
                    className="hover:bg-amber-800 text-white px-3 sm:px-4 md:px-6 lg:px-10 xl:px-15 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-medium bg-transparent border border-white cursor-pointer whitespace-nowrap rounded-none"
                >
                    CONSULT NOW
                </Button>
            </div>
        </div>
    );
}