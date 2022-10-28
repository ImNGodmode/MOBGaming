import React from 'react'
import Cart from '../components/Cart'

function CartPage({cart, setCart, amountOfItems}) {
  return (
    <>
    <Cart cart={cart} setCart={setCart} amountOfItems={amountOfItems}/>
    
    </>
  )
}

export default CartPage