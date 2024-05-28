import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { fetchData, cartData, cartData } from './context';





function Products() {


  const [cartItems, setCartItems] = useState([])
  const [quantity, setQuantity] = useState(1)

  // useParam 
  const { productid } = useParams()

  const value = useContext(fetchData)

  // Quantity Handler
  const quantityHandler = (e) => {
    setQuantity(parseInt(e.target.value))
    console.log(quantity);
  }

  const addToCart = (product) => {
    const cartItem = {
      ...product,
      quantity: quantity
      
    }
    setCartItems([...cartItems, cartItem])
    console.log(cartItems)
   
    const cartData =useContext(cartData)
  }
  return (

    <>
    <cartData.Provider value={cartItems}>

      {value.data.map((product) => {
        if (product.title == productid) {
          return (<div key={product.id} className='flex'>
            <div className="scontainer">

              <Card className='m-5' style={{ width: '15rem' }}>
                <Card.Title>{productid}</Card.Title>
                <Card.Img variant="top" className='m-5' style={{ width: '8rem' }} src={product.image} />
                <Card.Body>
                  <p> <b>{`Price : $${product.price}`}</b></p>
                </Card.Body>
              </Card>
              {/* <label className=' flex '><h6>Quantity :</h6> 
        <input className='rounded' type="number"  min={1} max={10} onChange={quantityHandler} value={quantity} />
        </label> */}
             
              <label className='flex ' htmlFor="">quantity :
                <select onChange={quantityHandler} name="" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </label>
            </div>

            <div className="info">

              <Card className='mt-5' style={{ width: "40vw", height: "auto" }}>
                <Card.Body>
                  <h6>Product Description</h6>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                </Card.Body>
              </Card>

              <Button onClick={() => addToCart(product)} className='m-2 bg-success'>Add TO Cart</Button>
            </div>
          </div>
          )

        }

      })}
      </cartData.Provider>
    </>
  );
}

export default Products;