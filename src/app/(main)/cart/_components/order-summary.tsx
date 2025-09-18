import CardBtn from "@/components/ui/card-btn";
import WarrantyTable from "@/components/warranty-table";
import Link from "next/link";
import React from "react";
const columns = [
  { key: "planName", label: "Plan Name" },
  { key: "price", label: "Price" },
  { key: "hardwareDuration", label: "Hardware Duration" },
  { key: "freeLabor", label: "Free Labor" },
  { key: "freeShipping", label: "Free Shipping" },
  { key: "expeditedRepairs", label: "Expedited Repairs" },
];

const data = [
  {
    planName: "Gamer Standard",
    price: "Free",
    hardwareDuration: "1 Year",
    freeLabor: "Yes",
    freeShipping: "60 Days",
    expeditedRepairs: "No",
  },
  {
    planName: "Gamer Pro",
    price: "$150",
    hardwareDuration: "2 Years",
    freeLabor: "Yes",
    freeShipping: "60 Days",
    expeditedRepairs: "No",
  },
  {
    planName: "Gamer Elite",
    price: "$350",
    hardwareDuration: "3 Years",
    freeLabor: "Yes",
    freeShipping: "1 Claim (Year 1)",
    expeditedRepairs: "Yes", // use dash if nothing is listed
  },
  {
    planName: "Gamer Legendary",
    price: "$600",
    hardwareDuration: "4 Years",
    freeLabor: "Yes",
    freeShipping: "1 Claim (Year 1)",
    expeditedRepairs: "Yes",
  },
];

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
        <div>
        <h1 className="mb-1 font-semibold">Warranty Plan Options</h1>
        <WarrantyTable columns={columns} data={data}/>
       </div>
    </div>
  );
}

export default OrderSummary;
