
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Outlet} from 'react-router-dom' 
import Header from './components/Header';
import Products from './components/Products'

function App() {

  return (
    <>
    <Header/>
    
    {/* <Products/> */}
    <Outlet/>
    {/* <Footer/>     */}
    
    </>
  )
}

export default App
