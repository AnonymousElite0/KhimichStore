import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer(){
    return (
        <footer className="shadow-inner mt-10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
            {/* Redes Sociales */}
            <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="text-gray-600 hover:text-pink-500 w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="text-gray-600 hover:text-pink-500 w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="text-gray-600 hover:text-pink-500 w-5 h-5" />
            </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Khimich Store. Todos los derechos reservados.
            </div>

            {/* Logo y Nombre del Creador */}
            <div className="flex items-center space-x-2">
            <img
                src="../../public/assets/images/CG.png" /* Asegúrate de usar la ruta correcta */
                alt="Khimich Store Logo"
                className="w-8 h-8"
            />
            <span className="text-gray-600 text-sm">
                Creado por <strong className="text-pink-500">Cod3Genius</strong>
            </span>
            </div>
        </div>
        </footer>
    );
};


