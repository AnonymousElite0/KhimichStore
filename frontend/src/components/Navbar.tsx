import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export function Navbar(){
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className=" shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-semibold text-gray-900">
            Khimich <span className="text-pink-500">Store</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="hover:text-pink-500">
                Conocenos
            </Link>
            <div className="relative">
                <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 hover:text-pink-500"
                >
                <span>Productos</span>
                <FaChevronDown className="w-4 h-4" />
                </button>
                {isDropdownOpen && (
                <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md">
                    <Link
                    to="/productos/damas"
                    className="block px-4 py-2 hover:bg-pink-100"
                    >
                    Damas
                    </Link>
                    <Link
                    to="/productos/caballeros"
                    className="block px-4 py-2 hover:bg-pink-100"
                    >
                    Caballeros
                    </Link>
                </div>
                )}
            </div>
            <Link to="/contact" className="hover:text-pink-500">
                Contacto
            </Link>
            
            </div>
        </div>
        </nav>
    );
};


