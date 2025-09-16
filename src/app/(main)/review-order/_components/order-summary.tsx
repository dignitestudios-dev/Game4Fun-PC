"use client"
import Popup from '@/components/popup';
import CardBtn from '@/components/ui/card-btn'
import { useRouter } from 'next/navigation';
import React, { SetStateAction } from 'react'

interface Props {
  handlePlaceOrder:()=> void
  showPopup:boolean;
  setShowPopup:React.Dispatch<SetStateAction<boolean>>;
  data: Cart
}
function OrderSummary({handlePlaceOrder , showPopup ,data}:Props) {
  const router = useRouter()


  return (
       <div className='md:w-[45%]' >
      <h1 className='text-2xl font-semibold'>Order Summary</h1>
         <div className="mt-4">
        <div className="flex justify-between py-2 text-sm">
          <span>Subtotal</span>
          <span>${data.totalPrice}</span>
        </div>
        <div className="flex justify-between py-2 text-sm border-b border-white/20">
          <span>Shipping</span>
          <span>{"free"}</span>
        </div>
        <div className="flex justify-between py-2 font-semibold">
          <span>Total</span>
          <span>${data.totalPrice}</span>
        </div>
      </div>
      <div className='flex justify-center items-center py-6'>
        <button onClick={handlePlaceOrder}>
      <CardBtn title='place order' bgColor='bg-[#141414]'/>
      </button>
      {/* <CartCard/>
      <Accordion items={accordionData}/> */}
    </div>
    {showPopup && <Popup title='Order Placed Successfully' description='Figma ipsum component variant main layer. Pixel vector boolean vector device vector.' onClose={()=>router.push("/")} />}
    </div>
  )
}

export default OrderSummary