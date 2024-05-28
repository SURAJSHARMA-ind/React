import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { fetchData } from './context';


function Home() {

  const value = useContext(fetchData)

  return (
    <>
    <div className='flex'>
    {value.data.map((products) => {
      return<Card key={products.id} style={{ width: '10rem'}}>
        <Card.Img variant="top" className='m-3'style={{width:"6rem", objectFit:"fit"}} src={products.image} />
        <Card.Body>
          <Card.Title className='align-item-bottom' style={{fontSize:"medium"}}><Link to={`product/${products.title}`}>{products.title}</Link></Card.Title>
        </Card.Body>
      </Card>
      
      
       })}
    </div>
      
    </>

  );
}

export default Home;