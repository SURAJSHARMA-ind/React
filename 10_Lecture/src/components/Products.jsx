import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { fetchData, cartData } from './context';

function Products() {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const { productid } = useParams();
  const value = useContext(fetchData);

  // Quantity Handler
  const quantityHandler = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const addToCart = (product) => {
    const cartItem = {
      ...product,
      quantity: quantity,
    };
    setCartItems([...cartItems, cartItem]);
  };

  return (
    <>
      <cartData.Provider value={cartItems}>
        {value.data.map((product) => {
          if (product.title === productid) {
            return (
              <div key={product.id} className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-12 bg-gray-900 text-gray-200 -lg shadow-lg space-y-6 md:space-y-0'>
                {/* Product Image and Details */}
                <div className="flex-shrink-0 w-full md:w-1/3 mb-6 md:mb-0">
                  <Card className='w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden'>
                    <Card.Img variant="top" className='w-full h-64 object-cover' src={product.image} />
                    <Card.Body className='p-4'>
                      <Card.Title className='text-3xl font-bold mb-2 text-gray-100'>{product.title}</Card.Title>
                      <p className='text-2xl font-semibold text-green-400 mb-4'>${product.price}</p>
                      <label className='block text-sm mb-4'>
                        <span className='block text-gray-300 font-medium mb-1'>Quantity:</span>
                        <select
                          onChange={quantityHandler}
                          value={quantity}
                          className='border border-gray-600 bg-gray-700 text-gray-200 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500'>
                          {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>{num + 1}</option>
                          ))}
                        </select>
                      </label>
                      <Button
                        onClick={() => addToCart(product)}
                        className='w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600'>
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </div>

                {/* Product Description */}
                <div className="flex-grow w-full md:w-2/3 md:pl-6">
                  <Card className='w-full bg-gray-800 shadow-lg rounded-lg'>
                    <Card.Body className='p-6'>
                      <h6 className='text-2xl font-semibold mb-4 text-gray-100'>Product Description</h6>
                      <Card.Text className='text-gray-300 leading-relaxed'>
                        {product.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            );
          }
          return null;
        })}
      </cartData.Provider>
    </>
  );
}

export default Products;
