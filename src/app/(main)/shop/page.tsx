"use client";
import React from "react";
import ShopBanner from "./_components/shop-banner";
import SidebarFilter from "./_components/sidebar-filter";
import ShopCard from "@/components/ui/shop-card";

type Props = {};
const sections = [
  {
    title: "Price",
    options: [
      { label: "$300 - $1000", value: "300-1000" },
      { label: "$1000 - $2500", value: "1000-2500" },
      { label: "$2500 - $5000", value: "2500-5000" },
      { label: "$5000 - $10000", value: "5000-10000" },
    ],
  },
  {
    title: "Performance Tier",
    options: [
      { label: "Ultra", value: "ultra" },
      { label: "Extreme", value: "extreme" },
    ],
  },
  {
    title: "CPU",
    options: [
      { label: "Intel", value: "intel" },
      { label: "AMD", value: "amd" },
    ],
  },
  {
    title: "Performance",
    options: [
      { label: "Core i5 12400F", value: "i5-12400f" },
      { label: "Core i5 14400F", value: "i5-14400f" },
      { label: "Core i9 14900K", value: "i9-14900k" },
      { label: "Ryzen 5 2600", value: "r5-2600" },
      { label: "Ryzen 5 5600", value: "r5-5600" },
      { label: "Ryzen 5 7500F", value: "r5-7500f" },
      { label: "Ryzen 5 8400F", value: "r5-8400f" },
    ],
  },
  {
    title: "Graphics Card",
    options: [
      { label: "GTX 1660 Super", value: "gtx-1660-super" },
      { label: "RTX 2060", value: "rtx-2060" },
      { label: "RX 6600", value: "rx-6600" },
      { label: "RX 6900 XT", value: "rx-6900-xt" },
    ],
  },
  {
    title: "GPU Memory",
    options: [
      { label: "4 GB", value: "4gb" },
      { label: "8 GB", value: "8gb" },
      { label: "12 GB", value: "12gb" },
      { label: "24 GB", value: "24gb" },
    ],
  },
];

const pc = {
  imageUrl: "/images/pc.png",
  caseName: "Corsair iCUE",
  ram: "16 GB",
  gpu: "8 GB",
  productName: "Gaming Beast X",
  description:
    "Lorem ipsum dolor sit amet consectetur. Malesuada arcu nibh magna mi. Quis rhoncus fringilla ac elit.",
  processor: "i7 12 Gen",
  graphicsCard: "RTX 5090",
  ramDetail: "2x 8 GB",
  motherboard: "MSI 321",
  price: 1500,
  onDetailsClick: () => console.log("Clicked Gaming Beast X"),
};
function page({}: Props) {
  return (
    <div className="">
      <ShopBanner />
      <div className="p-12 flex gap-10">
        <div>
          <h1 className="text-2xl font-semibold uppercase mb-2">Filter</h1>
          <SidebarFilter sections={sections} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">ALL PC BUILDS</h1>
          <div className="flex flex-wrap justify-start items-center gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].fill(0).map((_, idx) => (
              <ShopCard {...pc} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
