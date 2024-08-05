import React from 'react';
import { cartData } from './context';
import { useContext } from 'react';

function Cart() {
  const value = useContext(cartData);
  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Cart</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {value.cartItems.map((product) => (
          <div
            key={product.id}
            className="w-80 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src={product.images}
              alt={product.title}
            />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-green-600">${product.price}</span>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
