
import { useCart } from '../../context/CartContext';

export function Cart(){
    const { cart, removeFromCart } = useCart();

    return (
        <div className="border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>
        {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
        ) : (
            <ul>
            {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} x {item.quantity}</span>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600"
                >
                    Eliminar
                </button>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};

