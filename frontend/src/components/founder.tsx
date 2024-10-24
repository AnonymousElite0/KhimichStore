// src/components/MichelleFernandez.tsx


export function Founder() {
    return (
        <div className="bg-white p-2 rounded-lg shadow-lg w-auto h-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4"><span className="text-pink-500">Fundadora</span></h2>
        <div className="flex-shrink-0">
                <img
                    src="assets/images/CG.png"
                    alt="Founder"
                    className="w-40 h-40 rounded-lg shadow-lg"
                />
            </div>
            <div className="flex-1 mr-4 mt-4">
            <p className="text-gray-700 text-lg leading-tight text-center">
                Fundada por <span className="text-pink-500">Michelle Fernández</span>, Khimich Store nació de una pasión por la moda y la calidad. Michelle ha sido la mente creativa detrás de nuestra colección de textiles, asegurándose de que cada prenda cumpla con los más altos estándares.
            </p>
            </div>
            
        </div>
    );
}