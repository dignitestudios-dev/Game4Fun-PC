import { useRemoveFromCartMutation } from "@/services/product-api";
import Image from "next/image";
import React from "react";

function CartCard({ item, cartId }: { item: CartItem; cartId: string }) {
  const [remove] = useRemoveFromCartMutation();
  const handleRemove = async () => {
    await remove({ cartId, productId: item.productId });
  };
  return (
    <div>
      <div className="flex items-center py-4 gap-4">
        <div className="border border-[#5a5a5a] p-2 rounded-3xl">
          <Image
            src={item.productImages[0]?.file}
            alt="pc"
            width={100}
            height={100}
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="space-y-1">
            <h1 className="text-lg font-semibold">{item.productName}</h1>
            <h5 className="text-sm">Quantity: {item.quantity}</h5>
            <sup>$</sup>{" "}
            <span className="text-gradient text-lg font-bold">
              {item.price}
            </span>
          </div>
          <div>
            <button onClick={handleRemove} className="text-red-600 hover:underline cursor-pointer">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
