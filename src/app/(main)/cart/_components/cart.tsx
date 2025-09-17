"use client";
import React from "react";
import CartCard from "./ui/cart-card";
import Accordion from "./ui/accordion";
import PolicyTable from "@/components/policy-table";
import WarrantyTable from "@/components/warranty-table";
const columns = [
  { key: "condition", label: "Condition" },
  { key: "eligible", label: "Eligible" },
  { key: "restockingFee", label: "Restocking Fee" },
  { key: "shippingFunds", label: "Shipping Funds" },
];

const data = [
  {
    condition: "Defective (30/60 days)",
    eligible: "Yes",
    restockingFee: "No",
    shippingFunds: "No",
  },
  {
    condition: "Customer remorse/ no defect",
    eligible: "Yes",
    restockingFee: "15%",
    shippingFunds: "No",
  },
  {
    condition: "Software or special orders",
    eligible: "No",
    restockingFee: "N/A",
    shippingFunds: "No",
  },
];

const columns2 = [
  { key: "systemType", label: "System Type" },
  { key: "hardwareWarranty", label: "Hardware Warranty" },
  { key: "extendable", label: "Extendable" },
  { key: "lifetimeLabor", label: "Lifetime Labor" },
  { key: "cosmeticCoverage", label: "Cosmetic Coverage" },
  { key: "doaReturn", label: "DOA Return" },
];

const data2 = [
  {
    systemType: "New Custom System",
    hardwareWarranty: "1 Year Standard",
    extendable: "Yes",
    lifetimeLabor: "Yes (G4F parts)",
    cosmeticCoverage: "Yes",
    doaReturn: "30 Days",
  },
  {
    systemType: "Open Box System",
    hardwareWarranty: "90 Days",
    extendable: "Yes",
    lifetimeLabor: "Yes (G4F parts)",
    cosmeticCoverage: "No",
    doaReturn: "7 Days",
  },
  {
    systemType: "Certified Refurbished System",
    hardwareWarranty: "90 Days",
    extendable: "Yes",
    lifetimeLabor: "Yes (G4F parts)",
    cosmeticCoverage: "No",
    doaReturn: "7 Days",
  },
];
const accordionData = [
  {
    title: "Return Policy",
    content: <PolicyTable columns={columns} data={data} />,
  },
  {
    title: "Shipping Options",
    content: (
      <div>
        <ul className="list-disc">
          <li className="ml-4 mb-2">Shipping applies to lower 48 U.S. states, ground method only</li>
        </ul>
        <h1 className="font-semibold">Florida Customers:</h1>
        <p>Free local drop-off and pickup available in Polk County, Florida.</p>
      </div>
    ),
  },
  {
    title: "Warranty Coverage By System Type",
    content: <WarrantyTable columns={columns2} data={data2} />,
  },
];

function Cart({ cart }: { cart: Cart }) {
  return (
    <div className="w-full md:w-[50%]">
      <h1 className="text-5xl font-semibold">Your cart</h1>
      <p>Not ready to checkout? Continue Shopping</p>
      {cart?.items.length > 0 ? (
        cart?.items.map((c, idx) => (
          <CartCard item={c} key={idx} cartId={cart._id} />
        ))
      ) : (
        <div className="text-center py-12">No Items Found</div>
      )}
      <Accordion items={accordionData} />
    </div>
  );
}

export default Cart;
