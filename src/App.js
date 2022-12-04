import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const products = [
    { id: 1, name: 'Laptop', Price: 35000, brands: 'Dell' },
    { id: 2, name: 'Mobile', Price: 25000, brands: 'Samnsang' },
    { id: 3, name: 'Pad', Price: 30000, brands: 'Apple' },
    { id: 4, name: 'Watch', Price: 35000, brands: 'Rolex' },
    { id: 5, name: 'Airpod', Price: 3000, brands: 'Apple' },
    { id: 6, name: 'Show', Price: 35000, brands: 'Nike' }
  ]
  const [card,setCard] = useState(0)
  const [item, setItem]= useState('')
  const addToCard = () =>{
    const newCard = card +1
    const newItem= products.map((product)=>(
      product.keys
    ) )
    const addItem = item+newItem
    setCard(newCard)
    setItem(addItem)
  }
  const removeCard = ()=>{
    const previousCard = card -1;
    const previousItem = products.map((product)=>(
      product.keys
    ) )
    const removeItem = item-previousItem;

    setCard(previousCard)
    setItem(removeItem)
  }

  return (
    <div className="App">
      <div className='container'>
        <h1> Product Item</h1>
        <div className='card-container'>
          {
            products.map((product) => (

              <div className='card'>
                <h3> Id:{product.id}</h3>
                <h2> Name:{product.name}</h2>
                <h3> Brands: {product.brands}</h3>
                <h5> Price:{product.Price}</h5>
                <button onClick={addToCard}>Add Card</button>
                <button onClick={removeCard} >Remove Card</button>
              </div>

            ))
          }
        </div>


      </div>


      <div className='Shop-container'>
        <h1>Card</h1>
      <div className='show-product'>
      <h3> Product:{item.kyes}</h3>
        <h3>Quantity:{card}</h3>
      </div>
      </div>
    </div>
  );
}

export default App;
