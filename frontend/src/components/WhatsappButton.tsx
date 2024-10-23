

export function WhatsAppButton(){
    const phoneNumber = '573206815281'; // Reemplaza con el número de WhatsApp de tu empresa
    const message = 'Hola, Quiero Comprar un producto por favor!'; // Mensaje predeterminado

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <button
        onClick={handleClick}
        className="fixed bottom-7 right-7 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors duration-300"
        >
        <img
            src="/assets/images/whatsapp.svg" // Reemplaza con la ruta de tu logo
            alt="WhatsApp Logo"
            className="w-7 h-7"
        />
        </button>
    );
};

