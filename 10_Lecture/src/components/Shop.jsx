import {React,useState,useEffect} from 'react'
import { fetchApi } from '../Services/Api';


function Shop() {
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
    <section className="featured-productshome-container bg-gray-900 text-white py-16 px-8">
        <h2 className="text-2xl font-semibold mt-10 mb-6 text-center text-gray-300"> Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            if (product.id !== 17 && product.id !== 18) {
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
  )
}

export default Shop
