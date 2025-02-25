import React from 'react'

function Header({products, addedProducts,addingProduct,theme }) {
     
  return (
    <div className={`${theme ? 'bg-white ':'bg-black'} navbar bg-black shadow-sm p-2`}>
      <div className="flex justify-evenly w-full">
        {addedProducts.map((product, index) => (
          <button key={index} className="btn bg-green-700" onClick={() => addingProduct(product.id)}>
            {product.name}
          </button>
        ))}</div>
    <div className="flex-none">
      
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`${theme?'stroke-black':'stroke-white'}h-5 w-5`}fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
            <span className="badge badge-sm indicator-item">
              {products.reduce((total,product)=> total + product.items,0)} </span>
          </div>
        </div>
        
      
      
    </div>
  </div>
        
  )
}

export default Header