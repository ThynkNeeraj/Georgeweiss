import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex w-full">
                <NavigationMenuList className="w-full justify-around items-center">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/" className="bg-transparent hover:bg-transparent hover:text-amber-700 transition-colors duration-200 px-2 xl:px-4 py-2 rounded-md text-sm xl:text-md font-medium text-white">
                                HOME
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/about" className="bg-transparent hover:bg-transparent hover:text-amber-700 transition-colors duration-200 px-2 xl:px-4 py-2 rounded-md text-sm xl:text-md font-medium text-white">
                                ABOUT
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-amber-700 transition-colors duration-200 px-2 xl:px-4 py-2 rounded-md text-sm xl:text-md font-medium text-white">
                            OUR SERVICES
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="grid gap-3 p-4 w-[400px] bg-white rounded-md shadow-lg">
                                <Link to="/services/facial-treatments" className="block px-3 py-2 text-sm text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md">
                                    Facial Treatments
                                </Link>
                                <Link to="/services/skin-rejuvenation" className="block px-3 py-2 text-sm text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md">
                                    Skin Rejuvenation
                                </Link>
                                <Link to="/services/laser-treatments" className="block px-3 py-2 text-sm text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md">
                                    Laser Treatments
                                </Link>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/specials" className="bg-transparent hover:bg-transparent hover:text-amber-700 transition-colors duration-200 px-2 xl:px-4 py-2 rounded-md text-sm xl:text-md font-medium text-white">
                                SPECIALS
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/before-after" className="bg-transparent hover:bg-transparent hover:text-amber-700 transition-colors duration-200 px-2 xl:px-4 py-2 rounded-md text-sm xl:text-md font-medium text-white">
                                BEFORE & AFTER
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/video" className="bg-transparent hover:bg-transparent hover:text-amber-700 transition-colors duration-200 px-2 xl:px-4 py-2 rounded-md text-sm xl:text-md font-medium text-white">
                                VIDEO
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/products" className="bg-transparent hover:bg-transparent hover:text-amber-700 transition-colors duration-200 px-2 xl:px-4 py-2 rounded-md text-sm xl:text-md font-medium text-white">
                                PRODUCTS
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/knowledgebase" className="bg-transparent hover:bg-transparent hover:text-amber-700 transition-colors duration-200 px-2 xl:px-4 py-2 rounded-md text-sm xl:text-md font-medium text-white">
                                KNOWLEDGEBASE
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation */}
            <div className="lg:hidden w-full">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center w-10 h-10 text-white hover:text-amber-700 transition-colors duration-200"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm z-50">
                        <nav className="flex flex-col items-center py-4 space-y-2">
                            <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-700 transition-colors duration-200 py-2 px-4 text-sm font-medium">
                                HOME
                            </Link>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-700 transition-colors duration-200 py-2 px-4 text-sm font-medium">
                                ABOUT
                            </Link>
                            <Link to="/services" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-700 transition-colors duration-200 py-2 px-4 text-sm font-medium">
                                OUR SERVICES
                            </Link>
                            <Link to="/specials" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-700 transition-colors duration-200 py-2 px-4 text-sm font-medium">
                                SPECIALS
                            </Link>
                            <Link to="/before-after" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-700 transition-colors duration-200 py-2 px-4 text-sm font-medium">
                                BEFORE & AFTER
                            </Link>
                            <Link to="/video" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-700 transition-colors duration-200 py-2 px-4 text-sm font-medium">
                                VIDEO
                            </Link>
                            <Link to="/products" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-700 transition-colors duration-200 py-2 px-4 text-sm font-medium">
                                PRODUCTS
                            </Link>
                            <Link to="/knowledgebase" onClick={() => setIsOpen(false)} className="text-white hover:text-amber-700 transition-colors duration-200 py-2 px-4 text-sm font-medium">
                                KNOWLEDGEBASE
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
}