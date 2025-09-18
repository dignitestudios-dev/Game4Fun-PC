"use client";
import React, { useState } from "react";
import ReviewBanner from "./review-banner";
import OrderSummary from "./order-summary";
import { useGetCartQuery } from "@/services/product-api";
import CartCard from "../../cart/_components/ui/cart-card";

import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useStripe } from "@stripe/react-stripe-js";
import { useCheckoutMutation } from "@/services/checkout-api";
import CardNumberWithBrand from "./ui/card-number-brand";
import Loader from "@/components/ui/loader";

function ReviewOrder() {
  const { data } = useGetCartQuery();
  const params = useSearchParams();
  const last4 = params.get("last4");
  const brand = params.get("brand");
  const stripe = useStripe();
  const [checkout, { isLoading }] = useCheckoutMutation();

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    if (!stripe) {
      toast.error("Stripe not loaded yet");
      return;
    }
    if (!data?.cart?._id) {
      toast.error("Cart not found");
      return;
    }

    setLoading(true);

    try {
      const paymentMethodId = params.get("paymentMethodId");
      if (!paymentMethodId) {
        toast.error("Missing payment method");
        return;
      }

      const payload = {
        paymentMethodId,
        cartId: data.cart._id,
        firstName: params.get("firstName")!,
        lastName: params.get("lastName")!,
        address: params.get("address")!,
        appartment: params.get("appartment")!,
        country: params.get("country")!,
        city: params.get("city")!,
        zipCode: params.get("zipCode")!,
      };

      const res = await checkout(payload);

      if (res?.data?.success) {
        const clientSecret = res.data.data.clientSecret;
        const { error: confirmError, paymentIntent } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethodId,
          });

        if (confirmError) {
          toast.error(confirmError.message || "Payment confirmation failed");
          return;
        }

        if (paymentIntent?.status === "succeeded") {
          toast.success("Payment successful 🎉");
          setShowPopup(true);
        }
      } else if (res.error) {
        if ("data" in res.error && res.error.data) {
          toast.error((res.error.data as any)?.message); //eslint-disable-line
        }
      }
    } catch (err: any) {  //eslint-disable-line
    
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (loading || isLoading) return <Loader />;

  return (
    <div>
      <ReviewBanner />
      <div className="w-[90%] mx-auto flex md:flex-row flex-col justify-between">
        <div className="md:w-[45%] flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">Delivery Address</h1>
          <p className="w-full bg-[#1d1d1d] px-2 py-4 rounded-full border border-[#4d4d4d]">{params.get("address")}</p>

          <h1 className="text-2xl font-semibold">Payment Method</h1>

          {/* Show masked card from params */}
          <CardNumberWithBrand last4={last4} brand={brand!} />

          <h1 className="text-2xl font-semibold mt-4">Order</h1>
          {data?.cart.items.map((c, idx) => (
            <CartCard key={idx} cartId={data?.cart._id} item={c} removeBtn={true} />
          ))}
        </div>
        {/* 
       
        <button onClick={handlePlaceOrder} disabled={loading}>
          <CardBtn
            title={loading ? "Processing..." : "Place Order"}
            bgColor="bg-[#141414]"
          />
        </button> */}
{data?.cart &&       <OrderSummary
        data={data.cart}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          handlePlaceOrder={handlePlaceOrder}
        />  }
     
      </div>
    </div>
  );
}

export default ReviewOrder;
