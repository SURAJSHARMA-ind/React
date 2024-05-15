// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {

  const [count, setCount] = useState(0)

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setData(jsonData)
    }
    fetchData()
  }, [])

  return (
    <>
    <div className='flex'>
    {data.map((product) => {
      return<Card key={product.id} style={{ width: '12rem ', backgroundColor:"#D3D3D3" }}>
        <Card.Img variant="top" style={{width:"9.8rem", objectFit:"fit"}} src={product.image} />
        <Card.Body>
          <Card.Title style={{fontSize:"medium"}}>{product.title}</Card.Title>
        </Card.Body>
      </Card>
       })}
    </div>
      
    </>

  );
}

export default Products;