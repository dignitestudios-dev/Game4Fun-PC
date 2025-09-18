import { useRemoveFromCartMutation } from "@/services/product-api";
import Image from "next/image";
import React from "react";

function CartCard({
  item,
  cartId,
  removeBtn,
}: {
  item: CartItem;
  cartId: string;
  removeBtn?: boolean;
}) {
  const [remove] = useRemoveFromCartMutation();
  const handleRemove = async () => {
    await remove({ cartId, productId: item.productId });
  };
  return (
    <div className="relative z-50">
      <div className="flex items-center py-4 gap-4">
        <div className="border w-[150px] h-[120px] border-[#5a5a5a] p-2 rounded-3xl">
          <Image
            src={item.productImages[0]?.file}
            alt="pc"
            width={150}
            height={120}
            className="object-cover"
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
            {!removeBtn && (
              <button
                onClick={handleRemove}
                className="text-red-600 hover:underline cursor-pointer"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
