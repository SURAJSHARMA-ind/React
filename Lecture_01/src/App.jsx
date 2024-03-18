
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
   <Navbar/>
   <div className="cardcontainer">
   <Card name="Card 1" desc ="card 1 desc" /> 
   <Card name="Card 2" desc ="card 2 desc"/>
   <Card name="Card 3" desc ="card 3 desc"/>
   </div>
   <Footer/>
    </>
  )
}

export default App
