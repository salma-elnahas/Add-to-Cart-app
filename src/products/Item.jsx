import React from 'react'

function Item({product:{name,price,items,id} ,increment,decrement,changeTheme,theme,deleteItem}) {
  return (
    <div className={`${theme ? 'bg-white text-black' :'bg-black'} flex justify-evenly w-full items-center p-4 mb-3`} >
      <h1>Name:{name}</h1>
      <h1>Price:{price}</h1>
      <h1>Item Count :{items}</h1>
      <button className="btn bg-green-700" onClick={() => increment(id)}>+</button>
      <button className="btn bg-yellow-500" onClick={() => decrement(id)} disabled={items===0}>-</button>
      <button className='btn bg-red-700 text-white' onClick={()=>deleteItem(id)}>DEL</button>
      <h1 className='text-2xl text-red-800'>Total: {price * items}</h1>
    </div>


  )
}

export default Item