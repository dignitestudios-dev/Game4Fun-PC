import React from 'react'
import OrderSummary from './order-placed-summary'
import Image from 'next/image'
import Input from '@/components/ui/input'
import Banner from './banner'

function OrderPlaced() {
  return (
       <div>
      <Banner />
      <div className="w-[90%] mx-auto flex justify-between">
        <div className="w-[45%] flex flex-col gap-3">
            <div>
                 <h1 className="text-2xl font-semibold mb-2">Thank you for placing an order!</h1>
                 <div>
                    <h3>Order ID: <span className='text-[#808080]'>26413</span></h3>
                    <h3>Order Placed: <span className='text-[#808080]'>21 Jan, 2024</span></h3>
                 </div>
            </div>
          <h1 className="text-2xl font-semibold">Delivery Address</h1>
          <Input label="Address" />
          <h1 className="text-2xl font-semibold">Payment Method</h1>
          {/* <div className="relative" >
            <Image src={"/images/master.png"} alt="master" width={50} height={50} className=" absolute top-[20%] left-5" />
             <input
        placeholder=""
        className="w-full px-4 py-3 pl-20 rounded-full bg-[#1d1d1d] border border-[#FFFFFF36] text-[#FFFFFF] placeholder-[#FFFFFF36] focus:outline-none focus:border-purple-500 transition"
      />
      </div> */}
          <div className="w-full flex px-4 py-3 gap-2 items-center rounded-full bg-[#1d1d1d] border border-[#FFFFFF36] text-[#FFFFFF] placeholder-[#FFFFFF36] focus:outline-none focus:border-purple-500 transition">
      
            <div className="w-10 h-8">
                   <Image src={"/images/master.png"} alt="master" width={50} height={50} className=" " />
            </div>

            {/* Masked Number */}
            <span className="tracking-widest text-sm">
              **** **** **** {1234}
            </span>
          </div>
          <h1  className="text-2xl font-semibold">Order</h1>
              <div>
                <div className="flex items-center gap-4">
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
                    {/* <div>
                      <button className="text-red-600 underline" >Remove</button>
                    </div> */}
                  </div>
                </div>
              </div>
        </div>
        <OrderSummary />
      </div>
    </div>
  )
}

export default OrderPlaced