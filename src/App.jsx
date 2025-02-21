import { useState } from 'react'
import './App.css'
import Products from './products/Products'
import Header from './Header'

function App() {
  const [products, setProducts] = useState([
    { id: 0, name: 'shipcy', price: 100, items: 1 },
    { id: 1, name: 'pepsi', price: 200, items: 1 },
    { id: 2, name: 'molto', price: 300, items: 1 },
    { id: 3, name: 'kranshy', price: 400, items: 1 },
    { id: 4, name: 'cigaretes', price: 500, items: 1 }
  ])

  const increment = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        product.items += 1;
      }
      return product;
    }
    );
    setProducts(updatedProducts);
  };
  const decrement = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id && product.items > 0) {
        product.items -= 1;

      }
      return product;
     
    } 
    );
    setProducts(updatedProducts);
 
  };

  const [theme, setTheme] = useState(false)
  const changeTheme = () => {
    setTheme(!theme);
  };
  const resetButton = () => {
    setProducts(
      [
        {id:0, name:'shipcy', price: 100, items:1},
        {id:1, name:'pepsi', price: 200, items:1},
        {id:2, name:'molto', price: 300, items:1},
        {id:3, name:'kranshy', price: 400, items:1},
        {id:4, name:'cigaretes', price: 500, items:1}
      ]  
    );
   }
  const deleteButton =() => {
   setProducts([])
  };
  const deleteItem = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id ) 
    setProducts(updatedProducts);
  };
  const addingProduct = (name,price) => {
    const updatedProducts = products.map((product) => {
      if (product.name === name) {
      product.items += 1;
    }
      return product;
    })
    if (!updatedProducts.some((product) => product.name === name && product.items > 0)) {
      updatedProducts.push({ name,price, items:1});
    }
    setProducts(updatedProducts);
     
  };

  return (
    <div >
      <Header products={products} addingProduct={addingProduct} theme={theme} />
      <Products products={products} increment={increment} decrement={decrement} changeTheme={changeTheme} theme={theme} resetButton={resetButton} deleteButton={deleteButton} deleteItem={ deleteItem}  />
    </div>
     
  )
}

export default App
