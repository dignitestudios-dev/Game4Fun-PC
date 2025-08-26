"use client"
import React, { useState } from 'react'
import CheckoutBanner from './checkout-banner'
import CheckoutCart from './checkout-cart'
import CheckoutPayments from './checkout-payments'
import CartDetail from './ui/cart-detail'


function Checkout() {
  const [active , setActive] = useState<number>(1)
  const handleNextActive = () =>{
    setActive(prev => prev+1)
  }
  return (
    <div>
      <CheckoutBanner/>
        <h1 className='px-20 text-3xl font-semibold' >Checkout</h1>
      <div className='w-[90%] mx-auto flex flex-wrap justify-between py-4' >
        <div className='w-[45%]' >

      {active == 1 && <CheckoutCart handleNext={handleNextActive} />}
      {active == 2 && <CheckoutPayments  />}
        </div>
        <div className='w-[45%]' >
          <h1 className='text-xl font-semibold' >My Cart</h1>
     <CartDetail/>
        </div>
      </div>
      {/* {active == 2 && <CheckoutPayments/>} */}
    </div>
  )
}

export default Checkout