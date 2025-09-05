"use client";

import React, { Suspense } from "react";
import ShopDetail from "./_components/shop-detail";
import Specification from "./_components/specification";
import SupportedGames from "./_components/supported-games";
import SuggestedPcBuilds from "./_components/suggested-pc-builds";
import { useGetSingleProductQuery } from "@/services/product-api";
import Loader from "@/components/ui/loader";
// import GamePerformanceCard from "@/components/game-performance-card";

function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  const { data, isLoading } = useGetSingleProductQuery(id);
  if (isLoading && !data) return <Loader />;
  if (data) {
    return (
      <Suspense fallback={<Loader />}>
        <ShopDetail product={data.product!} />
        <div className="w-[90%] mx-auto">
          <Specification product={data.product!} />
          <SupportedGames product={data.product!} />
          {/* <BenchmarkScore product={data?.product!} /> */}
          {/* <GamePerformanceCard/> */}
          <SuggestedPcBuilds />
        </div>
      </Suspense>
    );
  }
}
export default Page;
