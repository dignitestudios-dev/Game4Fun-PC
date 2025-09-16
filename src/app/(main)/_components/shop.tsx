"use client";
import ArrowBtn from "@/components/ui/arrow-btn";
import GradientUnderlineTitle from "@/components/ui/gradient-underlined-title";
import ShopCard from "@/components/ui/shop-card";
import StyledHeader from "@/components/ui/styled-title";
import { useGetAllProductsQuery } from "@/services/product-api";
import Link from "next/link";

function Shop() {
  const { data } = useGetAllProductsQuery({ limit: "4" });

  return (
    <div className="md:p-14 p-2 py-14 relative">
      <div className="flex flex-wrap gap-8 justify-center md:justify-between items-center">
        <div className="flex flex-col gap-2">
          <StyledHeader
            title="Shop"
            classname="left-12 top-16 text-center md:text-start"
            backTitle="Shop"
          />
          <h1 className="uppercase text-3xl md:text-5xl text-center md:text-start">
            READY TO SHIP SYSTEMS
          </h1>
          <GradientUnderlineTitle
            title="Choose Your Gaming Level"
            classname="text-3xl md:text-5xl text-center md:text-start"
          />
        </div>

        <Link href={"/shop"}>
          <ArrowBtn title="View More" />
        </Link>
      </div>
      <div className="flex gap-16 flex-wrap justify-center py-6">
        {data?.products.map((build, index) => (
          <ShopCard key={index} {...build} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
