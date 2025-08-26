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

function Cart() {
  return (
    <div className='w-[45%]' >
      <h1 className='text-5xl font-semibold'>Your cart</h1>
      <p>Not ready to checkout? Continue Shopping</p>
      <CartCard/>
      <Accordion items={accordionData}/>
    </div>
  )
}

export default Cart