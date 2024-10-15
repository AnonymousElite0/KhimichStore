// src/components/Header.tsx


export function Header(){
  return (
    <header className="w-full h-screen flex items-center ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-24">
        
        {/* Texto a la izquierda */}
        <div className="text-left">
          <h1 className="text-6xl lg:text-7xl font-bold text-black mb-6">
            khimich store
          </h1>
          <div className="text-lg text-gray-800 space-y-2">
            <p className="font-semibold">TIENDA VIRTUAL 🌸</p>
            <p className="flex items-center">
              <span role="img" aria-label="lock" className="mr-2">🔒</span>Entrega inmediata
            </p>
            <p className="flex items-center">
              <span role="img" aria-label="pin" className="mr-2">📍</span>Montería - Córdoba
            </p>
            <p className="flex items-center">
              <span role="img" aria-label="truck" className="mr-2">🚚</span>Envíos a todo el país / pagos contraentrega MONTERÍA
            </p>
          </div>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition duration-300">
            Compra ahora
          </button>
        </div>

        {/* Logo a la derecha */}
        <div className="mt-10 lg:mt-0">
          <img 
            src="../../public/assets/images/logo_bg.png" 
            alt="Khimich Store Logo" 
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>
    </header>
  );
}


