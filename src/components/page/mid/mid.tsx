import { Left } from "@/components/page/mid/left";
import { OverlapImage } from "@/components/page/mid/overlap-image";
import background from "@/assets/background.png";

export function Mid() {
    return (
        <div className="w-full h-[400px] sm:h-[768px] relative">
            <img
                src={background}
                alt="Background"
                className="object-cover w-full h-full absolute inset-0"
            />

            <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-2">
                    <Left />
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-1">
                    <OverlapImage />
                </div>
            </div>
        </div>
    );
}