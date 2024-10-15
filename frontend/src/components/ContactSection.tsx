export function  ContactSection(){
    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-10 ">
            {/* Formulario de Contacto */}
            <div className="w-full md:w-1/2 p-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Contáctanos
            </h2>
            <form className="space-y-4">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Tu nombre"
                    className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
                </div>
    
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo Electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Tu correo electrónico"
                    className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
                </div>
                <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                    Telefono
                </label>
                <input
                    type="text"
                    id="ciudad"
                    placeholder="Telefono"
                    className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
                </div>
                <div>
                <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
                    Ciudad
                </label>
                <input
                    type="tel"
                    id="tel"
                    placeholder="Telefono"
                    className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
                </div>
                <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
                >
                Enviar Mensaje
                </button>
            </form>
            </div>
    
            {/* Mapa de Ubicación */}
            <div className="w-full md:w-1/2 p-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Nuestra Ubicación
            </h2>
            <div className="w-full h-80 rounded-md overflow-hidden shadow-lg">
                <iframe
                title="Ubicacion"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d750.9088467714236!2d-75.90254511528754!3d8.7640273427756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smonteria%20barrio%20el%20dorado!5e1!3m2!1ses-419!2sco!4v1728948748291!5m2!1ses-419!2sco" 
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                ></iframe>
            </div>
            </div>
        </section>
    );
};