"use client";
import React, { useState } from "react";
import ShopBanner from "./_components/shop-banner";
import SidebarFilter from "./_components/sidebar-filter";
import ShopCard from "@/components/ui/shop-card";
import { X } from "lucide-react";

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

function Page() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selected, setSelected] = useState<{ [key: string]: string[] }>({});

  const toggleOption = (sectionTitle: string, value: string) => {
    setSelected((prev) => {
      const current = prev[sectionTitle] || [];
      return {
        ...prev,
        [sectionTitle]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  return (
    <div className="">
      <ShopBanner />


      <div className="lg:hidden flex justify-end p-4">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-400 text-white rounded-lg"
        >
          Filter
        </button>
      </div>

      <div className="lg:p-12 flex gap-10">
        <div className="lg:block hidden">
          <h1 className="text-2xl font-semibold uppercase mb-2">Filter</h1>
          <SidebarFilter sections={sections} />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-2">ALL PC BUILDS</h1>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-10">
            {Array.from({ length: 10 }).map((_, idx) => (
              <ShopCard {...pc} key={idx} />
            ))}
          </div>
        </div>
      </div>
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black text-white bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-72 p-5 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              {/* <h2 className="text-xl font-semibold">Filters</h2> */}
              <button className="absolute right-2 top-4" onClick={() => setIsFilterOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* <SidebarFilter sections={sections} /> */}
          </div>
          <div
  className="text-white block overflow-x-hidden rounded-2xl p-4 py-8 w-full 
  space-y-6 top-4 max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent "
>

      {/* Top Gradient Strip */}
      <div className="absolute bg-custom-gradient w-full -left-0 h-2 top-1 rounded-t-2xl z-[10]" />

      {sections.map((section, idx) => (
        <div key={idx} className=" relative">
          <h3 className="uppercase text-md tracking-widest pb-1 mb-3">
            {section.title}
          </h3>
          <div className="space-y-2">
            {section.options.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="accent-pink-500"
                  checked={selected[section.title]?.includes(opt.value) || false}
                  onChange={() => toggleOption(section.title, opt.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>

          {/* Gradient Border Divider */}
          {idx !== sections.length - 1 && (
            <div className="mt-4 h-px w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
          )}
        </div>
      ))}
    </div>
        </div>
      )}
    </div>
  );
}

export default Page;
