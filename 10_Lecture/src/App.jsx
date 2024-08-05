
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Outlet} from 'react-router-dom' 
import Header from './components/Header';
import { useEffect,useState } from 'react';
import { fetchData } from './components/context';

function App() {
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
    <fetchData.Provider value={{data,setData}}>

    <Header/>
    {/* <Products/> */}
    <Outlet />
    {/* <Footer/>     */}
    </fetchData.Provider>
    
    </>
  )
}

export default App


