
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Product from './components/products';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar/>
    <div className='flex m-5'>
    <Product title="Card1"/>
    <Product title="Card2"/>
    <Product title="Card3"/>
    <Product title="Card4"/>
    
    </div>
    </>
  )
}

export default App
