import CartCard from '@/app/(main)/cart/_components/ui/cart-card';
// import { useGetCartQuery, useRemoveFromCartMutation } from '@/services/product-api';
// import Image from 'next/image'
import React from 'react'

// type Props = {}

function CartDetail({data}:{data:Cart}) {
    
  return (
    <div>
      {data?.items.map((c,idx)=>(

       <CartCard item={c} key={idx} cartId={data._id}/>
      ))}
              <div className="mt-4">
        <div className="flex justify-between py-2 text-sm">
          <span>Subtotal</span>
          <span>${data?.totalPrice}</span>
        </div>
        <div className="flex justify-between py-2 text-sm border-b border-white/20">
          <span>Shipping</span>
          <span>{"free"}</span>
        </div>
        <div className="flex justify-between py-2 font-semibold">
          <span>Total</span>
          <span>${data?.totalPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default CartDetail