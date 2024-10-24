// src/components/KhimichStore.tsx


export function KhimichStore() {
    return (
        <div className="bg-white p-2 rounded-lg shadow-lg w-auto h-auto flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Khimich <span className="text-pink-500">Store</span></h2>
            <div className="flex-shrink-0">
                    <img
                        src="assets/images/logo_bg.png"
                        alt="Khimich Store"
                        className="w-40 h-40 rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex-1 mr-4 mt-4">
                    <p className="text-gray-700 text-lg leading-tight text-center">
                        Es una tienda virtual y física especializada en textiles de alta calidad para caballeros y damas. Nuestra misión es ofrecer una experiencia de compra excepcional, proporcionando prendas elegantes y cómodas que reflejen tu estilo y personalidad. 
                    </p>
                </div>
                

        </div>
    );
}