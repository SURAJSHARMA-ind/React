import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product(props) {
  const [count , setCount] =useState(0)
  const counter = () => {
    setCount(count+1)
  }
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static.toiimg.com/thumb/101136807.cms?width=680&height=512&imgsize=92736" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={counter} variant="primary">Add TO Cart </Button>
        <span className='m-5'>{count}</span>
      </Card.Body>
    </Card>
  );
}

export default Product;