// OrderSummary.tsx - Update this
import CardBtn from "@/components/ui/card-btn";
import Link from "next/link";
import React, { useState } from "react";

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
    priceValue: 0,
  },
  {
    planName: "Gamer Pro",
    price: "$150",
    hardwareDuration: "2 Years",
    freeLabor: "Yes",
    freeShipping: "60 Days",
    expeditedRepairs: "No",
    priceValue: 150,
  },
  {
    planName: "Gamer Elite",
    price: "$350",
    hardwareDuration: "3 Years",
    freeLabor: "Yes",
    freeShipping: "1 Claim (Year 1)",
    expeditedRepairs: "Yes",
    priceValue: 350,
  },
  {
    planName: "Gamer Legendary",
    price: "$600",
    hardwareDuration: "4 Years",
    freeLabor: "Yes",
    freeShipping: "1 Claim (Year 1)",
    expeditedRepairs: "Yes",
    priceValue: 600,
  },
];

function OrderSummary({
  cart,
  onWarrantySelect
}: {
  cart: Cart;
  onWarrantySelect?: (warranty: typeof data[0] | null) => void;
}) {
  const [selectedWarranty, setSelectedWarranty] = useState<typeof data[0] | null>(null);

  const handleSelectWarranty = (plan: typeof data[0]) => {
    setSelectedWarranty(plan);
    onWarrantySelect?.(plan); // Pass to parent
  };

  const warrantyPrice = selectedWarranty?.priceValue || 0;
  const totalWithWarranty = cart.totalPrice + warrantyPrice;

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
          <span>Free</span>
        </div>

        {/* Warranty Line */}
        {selectedWarranty && (
          <div className="flex justify-between py-2 text-sm text-blue-400 border-b border-white/20">
            <span>Warranty ({selectedWarranty.planName})</span>
            <span>${warrantyPrice}</span>
          </div>
        )}

        <div className="flex justify-between py-2 font-semibold">
          <span>Total</span>
          <span>${totalWithWarranty}</span>
        </div>
      </div>

      <div className="flex justify-center items-center py-6">
        {cart.items.length > 0 && (
          <Link
            href={{
              pathname: "/checkout",
              query: {
                warrantyPlan: selectedWarranty?.planName || "",
                warrantyPrice: selectedWarranty?.priceValue || 0,
              },
            }}
            className="cursor-pointer"
          >
            <CardBtn title="continue to checkout" bgColor="bg-[#141414]" />
          </Link>
        )}
      </div>

      {/* Warranty Plans Table */}
      <div>
        <h1 className="mb-1 font-semibold">Warranty Plan Options</h1>
        <div className="overflow-x-auto border border-white/10 rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {columns.map((col) => (
                  <th key={col.key} className="px-4 py-3 text-left font-semibold">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((plan) => (
                <tr
                  key={plan.planName}
                  onClick={() => handleSelectWarranty(plan)}
                  className={`border-b border-white/10 cursor-pointer transition ${selectedWarranty?.planName === plan.planName
                      ? "bg-blue-500/20 border-l-4 border-l-blue-500"
                      : "hover:bg-white/5"
                    }`}
                >
                  <td className={`px-4 py-3 font-semibold ${selectedWarranty?.planName === plan.planName ? "text-blue-400" : ""}`}>
                    {plan.planName}
                  </td>
                  <td className="px-4 py-3">{plan.price}</td>
                  <td className="px-4 py-3">{plan.hardwareDuration}</td>
                  <td className="px-4 py-3">{plan.freeLabor}</td>
                  <td className="px-4 py-3">{plan.freeShipping}</td>
                  <td className="px-4 py-3">{plan.expeditedRepairs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;