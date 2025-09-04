"use client";

import React from "react";
import ShopDetail from "./_components/shop-detail";
import Specification from "./_components/specification";
import SupportedGames from "./_components/supported-games";
import BenchmarkScore from "./_components/benchmark-score";
import SuggestedPcBuilds from "./_components/suggested-pc-builds";
import { useGetSingleProductQuery } from "@/services/product-api";

function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id  } = React.use(params);

  const { data , isLoading } = useGetSingleProductQuery(id);
  console.log(data);
if(isLoading) return null;
  return (
    <>
      <ShopDetail />
      <div className="w-[90%] mx-auto">
        <Specification />
        <SupportedGames />
        <BenchmarkScore />
        <SuggestedPcBuilds />
      </div>
    </>
  );
}

export default Page;
