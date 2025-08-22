import GradientUnderlineTitle from "@/components/ui/gradient-underlined-title";
import StyledHeader from "@/components/ui/styled-title";
import React from "react";

type Props = {};

function CartBanner({}: Props) {
  return (
    <div className="relative z-20">
      {/* Background Image */}
      <div className="absolute bg-[url(/images/shop-bg.png)] -top-28 left-0 bg-no-repeat bg-contain w-screen h-[500px]" />

      {/* Bottom Shadow for Smooth Merge */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#141414] via-[#14141484] to-transparent pointer-events-none z-10" />

      {/* Banner Content */}
      <div className="flex flex-col gap-3 justify-center items-center h-[400px] relative z-20">
        <div className="relative">
          <StyledHeader title="my cart" backTitle="my cart" classname="right-[-450%] top-4" />
        </div>
        {/* <h1 className="text-5xl font-semibold">Lorem ipsum dolor sit</h1>
        <GradientUnderlineTitle title="Lorem ipsum dolor sit" /> */}
      </div>
    </div>
  );
}

export default CartBanner;
