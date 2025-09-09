import CardBtn from "@/components/ui/card-btn";
import Link from "next/link";
import React from "react";

function OrderSummary({ cart }: { cart: Cart }) {
  return (
    <div className="w-full md:w-[45%] py-12">
      <h1 className="text-3xl font-semibold">Order Summary</h1>
      <div className="mt-4">
        <div className="flex justify-between py-2 text-sm">
          <span>Subtotal</span>
          <span>${cart.totalPrice}</span>
        </div>
        <div className="flex justify-between py-2 text-sm border-b border-white/20">
          <span>Shipping</span>
          <span>{"free"}</span>
        </div>
        <div className="flex justify-between py-2 font-semibold">
          <span>Total</span>
          <span>${cart.totalPrice}</span>
        </div>
      </div>
      <div className="flex justify-center items-center py-6">
        {cart.items.length > 0 && (
          <Link href={"/checkout"} className="cursor-pointer">
            <CardBtn title="contunue to checkout" bgColor="bg-[#141414]" />
          </Link>
        )}
        {/* <CartCard/>
      <Accordion items={accordionData}/> */}
      </div>
    </div>
  );
}

export default OrderSummary;
