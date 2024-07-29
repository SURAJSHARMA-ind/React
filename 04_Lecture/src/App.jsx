import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let a = await fetch("https://dummyjson.com/products");
      let data = await a.json();
      setCard(data.products);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
<div className="container">
      {card.length > 0 ? (
        card.map((item) => {
          return (<div key={item.id} className="card">
              <h1>{item.title}</h1>
              <img src={item.images} alt=""  width={"30%"} />
            </div>
          );
        })
      ) : (
        <p>loading</p>
      )}
      </div>
    </>
  );
}

export default App;
