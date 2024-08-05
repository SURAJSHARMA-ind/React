import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from './context';

function Home() {
  const { data } = useContext(fetchData);

  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">Our Products</h2>
        
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product.id} className="relative group border border-gray-700 rounded-lg bg-gray-800 shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <Link to={`product/${product.title}`} className="block">
                <img
                  alt={product.title}
                  src={product.image}
                  className="w-full h-64 object-cover object-center group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-100">{product.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 truncate">{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
