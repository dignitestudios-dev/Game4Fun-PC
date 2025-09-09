"use client"
import React from 'react'
import CartCard from './ui/cart-card'
import Accordion from './ui/accordion'

 const accordionData = [
    {
      title: "Return Policy",
      content:
        "This is our example return policy which is everything you need to know about our returns.",
    },
    {
      title: "Shipping Options",
      content: "We offer standard and express shipping worldwide.",
    },
    {
      title: "Shipping Options",
      content: "Extra section for demonstration purposes.",
    },
  ];

function Cart({cart}:{cart:Cart}) {
  return (
    <div className='w-full md:w-[45%]' >
      <h1 className='text-5xl font-semibold'>Your cart</h1>
      <p>Not ready to checkout? Continue Shopping</p>
      {cart?.items.length > 0 ? cart?.items.map((c,idx)=>(
        <CartCard item={c} key={idx} cartId={cart._id}/>

      )): <div className='text-center py-12'>
      No Items Found
      </div>}
      <Accordion items={accordionData}/>
    </div>
  )
}

export default Cart