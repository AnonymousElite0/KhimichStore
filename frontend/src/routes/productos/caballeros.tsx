import { createFileRoute } from '@tanstack/react-router'
/*import ProductList from '../components/ProductComponent/ProductList';*/
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/productos/caballeros')({
  component: Caballeros
})

const caballerosProducts = [
  { id: 1, name: 'Camisa Caballero', price: 50, colors: ['Azul', 'Negro', 'Blanco'] },
  { id: 2, name: 'Pantalón Caballero', price: 70, colors: ['Gris', 'Negro'] },
];

export function Caballeros(){
  return (
    <div>
      <h1 className="text-2xl font-bold">Productos para Caballeros</h1>
      <ProductList products={caballerosProducts} />
      <Link to="/cart" className="mt-4 block text-blue-500 underline">
        Ver Carrito
      </Link>
    </div>
  );
};

