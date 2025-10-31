"use client";
import React, { useState, useMemo } from "react";
import CheckoutBanner from "./checkout-banner";
import CheckoutCart from "./checkout-cart";
import CheckoutPayments from "./checkout-payments";
import CartDetail from "./ui/cart-detail";
import { useGetCartQuery } from "@/services/product-api";
import Loader from "@/components/ui/loader";
import { useSearchParams } from "next/navigation";

function Checkout() {
  const { data, isLoading } = useGetCartQuery();
  const [active, setActive] = useState<number>(1);
  const searchParams = useSearchParams();
  const warrantyPlan = searchParams.get("warrantyPlan");
  const warrantyPrice = Number(searchParams.get("warrantyPrice") || 0);

  const handleNextActive = () => {
    setActive((prev) => prev + 1);
  };

  // ✅ Compute updated cart total (without mutating the original cart)
  const updatedCart = useMemo(() => {
    if (!data?.cart) return null;

    return {
      ...data.cart,
      totalPrice: data.cart.totalPrice + warrantyPrice,
      warrantyPlan: warrantyPlan || null,
      totalpricewithoutwarranty :data.cart.totalPrice,
      warrantyPrice,
    };
  }, [data, warrantyPlan, warrantyPrice]);

  if (isLoading && !data) return <Loader />;

  return (
    <div>
      <CheckoutBanner />
      <h1 className="md:px-20 px-4 text-3xl font-semibold">Checkout</h1>
      <div className="w-[90%] mx-auto flex md:flex-row flex-col justify-between py-4">
        <div className="md:w-[45%] relative z-50">
          {active === 1 && <CheckoutCart handleNext={handleNextActive} />}
          {active === 2 && updatedCart && (
            <CheckoutPayments data={updatedCart} />
          )}
        </div>

        <div className="md:w-[45%]">
          <h1 className="text-xl font-semibold">My Cart</h1>
          {updatedCart && <CartDetail data={updatedCart} warrantyname={warrantyPlan} warrantytotalprice={warrantyPrice}  />}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
