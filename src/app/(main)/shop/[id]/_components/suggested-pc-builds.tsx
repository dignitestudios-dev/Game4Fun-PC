import ShopCard from "@/components/ui/shop-card";
import { useGetAllProductsQuery } from "@/services/product-api";
import React from "react";

function SuggestedPcBuilds() {
  const { data } = useGetAllProductsQuery({ limit: "4" });
  return (
    <div className="py-10">
      <h1 className="text-2xl uppercase font-semibold mb-4">
        Suggested Pc Builds
      </h1>
      <div className="flex flex-wrap gap-4 justify-center  md:px-12">
        {data?.products.map((build, idx) => (
          <ShopCard {...build} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default SuggestedPcBuilds;
