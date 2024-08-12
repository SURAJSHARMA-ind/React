import React, { useEffect, useState } from 'react';
import { fetchApi } from '../Services/Api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setproducts] = useState([]);

  const loadProduct = async () => {
    try {
      const productData = await fetchApi();
      setproducts(productData);
    } catch (error) {
      console.error(`error is ${error}`);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div className="home-container bg-gray-900 text-white">
      <section
        className="hero-section  bg-cover bg-center hover: text-white py-20 px-8"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-content text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ShopEase</h1>
          <p className="text-lg md:text-xl mb-8">Discover the best deals on your favorite products!</p>
          <button className=" hover:from-orange-500 hover: bg-purple-600 bg-gradient-to-r from-teal-400 to-blue-500 ... py-2 px-4 rounded"><Link to='/shop'>Shop Now</Link></button>
        </div>
      </section>

      <section className="featured-products py-16 px-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-300">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            if (product.id < 27 && product.id !== 17 && product.id !== 18) {
              return (
                <div key={product.id} className="product-card  transition-transform transform hover:scale-105 bg-gray-800 p-4 shadow-lg rounded flex flex-col">
                  {product.images.map((img, index) => {
                    if (index === 0) return <img key={index} src={img} alt="Product image" className="w-full h-48 object-cover mb-4 rounded" />;
                  })}
                  <h3 className="text-lg font-semibold mb-2 flex-grow text-white">{product.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{`$${product.price}`}</p>
                  <div className="mt-auto">
                    <button className="  py-2  rounded w-1/3 hover:from-orange-500 hover: bg-purple-600 bg-gradient-to-r from-teal-400 to-blue-500 ...">Add to Cart</button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>

        <section className="categories-section py-16 px-8 bg-gray-800">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-300">Shop by Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => {
           if(product.category.name=="Electronics" ) return<div className="category-card bg-gray-700 p-4 shadow-lg rounded text-center">
              <img src="/path-to-category-image.jpg" alt="Category Name" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold mb-2 text-white">{product.category.name}</h3>
            </div>
          })}
          </div>
        </section>
    </div>
  );
};

export default Home;
