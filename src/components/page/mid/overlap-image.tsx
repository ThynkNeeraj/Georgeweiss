import store from "@/assets/store.png";
import woman from "@/assets/girl-1.png";

export function OverlapImage() {
    return (
        <div className="flex justify-center items-center p-2 sm:p-4 h-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[600px]">
                <div className="relative w-full aspect-[6/7] overflow-hidden rounded-lg">
                    {/* Background Image (Clinic) */}
                    <img
                        src={store}
                        alt="Clinic Interior"
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Overlay Image (Woman with injection) - Positioned diagonally */}
                <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-14 lg:-bottom-16 right-2 sm:right-4 md:right-6 lg:right-8 xl:right-10 translate-x-1/2">
                    <img
                        src={woman}
                        alt="Injection"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}