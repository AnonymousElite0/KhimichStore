import React, { useState } from 'react';
import ProductList from './ProductList';

const products = [
  { id: 1, name: 'Vestido de Dama', price: 50, category: 'dama' },
  { id: 2, name: 'Blusa de Dama', price: 30, category: 'dama' },
  { id: 3, name: 'Pantalón de Caballero', price: 40, category: 'caballero' },
  { id: 4, name: 'Camisa de Caballero', price: 35, category: 'caballero' },
];

export function CategoryMenu(){
  const [selectedCategory, setSelectedCategory] = useState<'dama' | 'caballero'>('dama');

  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setSelectedCategory('dama')}
          className={`mr-4 px-4 py-2 rounded-md ${selectedCategory === 'dama' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Dama
        </button>
        <button
          onClick={() => setSelectedCategory('caballero')}
          className={`px-4 py-2 rounded-md ${selectedCategory === 'caballero' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Caballero
        </button>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

