"use client";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CardBtn from "@/components/ui/card-btn";
import Input from "@/components/ui/input";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

function CheckoutPayments({ data }: { data: Cart }) {
  const searchParams = useSearchParams();
  const stripe = useStripe();
  const router = useRouter();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const handlePayment = async () => {
    if (!stripe || !elements) {
      toast.error("Stripe has not loaded yet.");
      return;
    }

    setLoading(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement)!,
        billing_details: {
          name: cardHolderName || "Guest User",
        },
      });

      if (error) {
        toast.error(error.message || "Failed to create payment method");
        return;
      }

      // const payload = {
      //   paymentMethodId: paymentMethod.id,
      //   cartId: data._id,
      //   firstName: params.get("firstName")!,
      //   lastName: params.get("lastName")!,
      //   address: params.get("address")!,
      //   appartment: params.get("appartment")!,
      //   country: params.get("country")!,
      //   city: params.get("city")!,
      //   zipCode: params.get("zipCode")!,
      // };

      const params = new URLSearchParams(searchParams.toString());
      params.set("paymentMethodId", paymentMethod!.id);
      params.set("cartId", data._id);
      params.set("cardHolder", cardHolderName);
      params.set("last4", paymentMethod.card?.last4 ?? "");
      params.set("brand", paymentMethod.card?.brand ?? "");

      // push to next page
      router.push(`/review-order?${params.toString()}`);
    } catch (err: any) {   //eslint-disable-line
   
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-50 mx-auto flex flex-col items-start gap-4">
      <h1 className="text-xl font-semibold">Payment Details</h1>

      {/* Cardholder name (your own input) */}
      <Input
        label="Cardholder Name"
        value={cardHolderName}
        onChange={(e) => setCardHolderName(e.target.value)}
      />

      {/* Card number from Stripe */}
      <div className="w-full  px-6 p-2 rounded-full bg-[#1d1d1d] text-white">
        <label className="text-sm text-white">Card Number</label>
        <CardNumberElement
          options={{
            style: { base: { backgroundColor: "#1d1d1d", color: "#ffffff" } },
          }}
          className="mt-1"
        />
      </div>

      {/* Expiry + CVC custom layout */}
      <div className="flex gap-3 items-center w-full">
        <div className="w-1/3  p-2 rounded-full bg-[#1d1d1d] text-white">
          <label className="text-sm text-gray-600">Expiry</label>
          <CardExpiryElement
            options={{
              style: { base: { backgroundColor: "#1d1d1d", color: "#ffffff" } },
            }}
            className="mt-1"
          />
        </div>
        <div className="w-1/3  p-2 rounded-full bg-[#1d1d1d] text-white">
          <label className="text-sm text-gray-600">CVC</label>
          <CardCvcElement
            options={{
              style: { base: { backgroundColor: "#1d1d1d", color: "#ffffff" } },
            }}
            className="mt-1 "
          />
        </div>
      </div>

      {/* Pay button */}
      <div className="flex justify-center w-full mt-14">
        <button
          type="button"
          onClick={handlePayment}
          disabled={loading || !stripe}
          className="cursor-pointer w-full"
        >
          <CardBtn
            title={loading ? "Processing..." : "PAY NOW"}
            bgColor="bg-[#141414]"
          />
        </button>
      </div>
    </div>
  );
}

export default CheckoutPayments;
