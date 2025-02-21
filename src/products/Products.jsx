import React from 'react'
import Item from './Item'
import {  MdSunny , MdDarkMode } from "react-icons/md";


function Products({ products, increment, decrement, changeTheme, theme, resetButton,deleteButton,deleteItem }) {
    const calcTotal =  products.reduce((total, product) => {return total + product.items * product.price}, 0);
    
    
    return ( 
            <div className='flex justify-evenly flex-col gap-3 mb-2'>
                <h1 className='text-4xl font-extrabold text-white uppercase m-2'>Items</h1>
                <div className='flex justify-center gap-2 ' >
                    <button className="btn bg-green-700" onClick={resetButton}>Reset</button>
                    <button className="btn bg-red-700" onClick={deleteButton}> Delete</button>
                    <button className="btn bg-black text-white" onClick={changeTheme}>
                       { theme? <MdDarkMode/> :<MdSunny />}
                    </button>     
                </div>
                {products.length === 0 ? (
                        <div>
                          <h1 className=' font-bold text-2xl text-red-500 uppercase'>Empty Cart</h1>
                        </div>
                ) : <div>
                     {products.map((product, index) => (
                          <Item key={index} product={product} increment={increment} decrement={decrement} changeTheme={changeTheme} theme={theme} deleteItem={deleteItem} />
                     ))}
                    <h1 className='text-3xl text-red-600'>Total paid : {calcTotal} </h1>
                </div>}
                
            </div>
             
    )
  
}

export default Products