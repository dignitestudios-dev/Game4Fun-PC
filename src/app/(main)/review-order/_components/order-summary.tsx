import CardBtn from '@/components/ui/card-btn'
import React from 'react'


function OrderSummary() {
  return (
       <div className='w-[45%]' >
      <h1 className='text-2xl font-semibold'>Order Summary</h1>
         <div className="mt-4">
        <div className="flex justify-between py-2 text-sm">
          <span>Subtotal</span>
          <span>$1500</span>
        </div>
        <div className="flex justify-between py-2 text-sm border-b border-white/20">
          <span>Shipping</span>
          <span>{"free"}</span>
        </div>
        <div className="flex justify-between py-2 font-semibold">
          <span>Total</span>
          <span>${1500}</span>
        </div>
      </div>
      <div className='flex justify-center items-center py-6'>
      <CardBtn title='place order' bgColor='bg-[#141414]'/>
      {/* <CartCard/>
      <Accordion items={accordionData}/> */}
    </div>
    </div>
  )
}

export default OrderSummary