
import { Cart } from '../../components/ProductComponent/Cart';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/pages/CartPages")({
  component: CartPages,
})

export function CartPages(){
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      <Cart />
    </div>
  );
};

