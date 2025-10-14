import { Button } from "@/components/ui/button";

export function Left() {
    return (
        <section className="h-full flex flex-col items-center justify-center px-6 py-12 text-left">
            <div className="max-w-3xl">
                <div className="mb-6">
                    <span className="bg-yellow-700 text-white text-xs font-semibold px-4 py-1 rounded tracking-widest">
                        WELCOME TO WELLNESS LONGEVITY MEDICAL
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                    Wellness & Longevity Medical Group
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Our clinic in La Jolla is a trusted destination for regenerative medicine, anti-aging treatments, and aesthetic enhancements.
                    Dr. George Weiss specializes in Hormone therapy, Weight management, Botox, Dermal fillers, IV nutrient therapy, and more—helping
                    patients restore balance, enhance confidence, and feel their absolute best.
                </p>

                <Button
                    size="sm"
                    className="hover:bg-amber-800 hover:text-white text-amber-800 px-3 sm:px-4 md:px-6 lg:px-10 xl:px-15 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-medium bg-transparent border border-amber-800 cursor-pointer whitespace-nowrap rounded-none"
                >
                    ABOUT THE CLINIC
                </Button>
            </div>
        </section>
    );
}
