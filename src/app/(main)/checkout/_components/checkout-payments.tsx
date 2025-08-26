import CardBtn from "@/components/ui/card-btn";
import Input from "@/components/ui/input";
import Link from "next/link";
import React from "react";


function CheckoutPayments() {
  return (
    <div className=" mx-auto flex flex-col items-start gap-4">
      <h1 className="text-xl font-semibold ">My Cart</h1>
      {/* <div className='w-[45%]' ></div> */}
  
      <Input label="Cardholder Name" />
      <Input label="Card Number" />
      <div className="flex gap-3 items-center">
        <Input label="Month" />
        <Input label="Year" />
        <Input label="CVC" />
      </div>
      <div className="flex gap-3 items-center w-[10%]">
        <Input type="checkbox" className="bg-transparent" />
        <h1 className="text-white text-nowrap">Save card data for future payments</h1>
      </div>
      <div className="flex justify-center w-full mt-14">
        <Link href={"/review-order"} className="cursor-pointer" >
        <CardBtn title="PAY NOW" bgColor="bg-[#141414]" />
      </Link></div>
    </div>
  );
}

export default CheckoutPayments;
