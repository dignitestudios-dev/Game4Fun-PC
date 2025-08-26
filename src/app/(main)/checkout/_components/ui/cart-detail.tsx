import Image from 'next/image'
import React from 'react'

type Props = {}

function CartDetail({}: Props) {
  return (
    <div>
         <div>
              <div className="flex items-center py-4 gap-4">
                <div className="border border-[#5a5a5a] p-2 rounded-3xl">
                  <Image src={"/images/pc-2.png"} alt="pc" width={100} height={100} />
                </div>
                <div className="flex justify-between w-full" >
                  <div className="space-y-1">
                    <h1 className="text-lg font-semibold">
                      Odin 1.0 – Ryzen 9 9950X & RTX 5070 Ti 16GB
                    </h1>
                    <h5 className="text-sm">Quantity: 1</h5>
                    <sup>$</sup> <span className="text-gradient text-lg font-bold">1500</span>
                  </div>
                  <div>
                    <button className="text-red-600 underline" >Remove</button>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  )
}

export default CartDetail