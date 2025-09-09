"use client";
import React, { useState } from "react";
import ShopBanner from "./_components/shop-banner";
import SidebarFilter from "./_components/sidebar-filter";
import ShopCard from "@/components/ui/shop-card";
import { X } from "lucide-react";
import SortDropdown from "./_components/ui/sort-dropdown";
import {
  useFilterProductsQuery,
  useGetFiltersQuery,
} from "@/services/product-api";
import Loader from "@/components/ui/loader";
import Pagination from "./_components/ui/pagination";

function Page() {
  const [page, setPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState({ label: "Latest", val: "latest" });
  const [selected, setSelected] = useState<{ [key: string]: string[] }>({});

  const params: Record<string, any> = { //eslint-disable-line
    page,
    limit: 10,
    sortBy: sortBy.val,
  };

  Object.entries(selected).forEach(([section, values]) => {
    if (values.length > 0) {
      switch (section) {
        case "Performance":
          values.forEach((val, idx) => (params[`cpu[${idx}]`] = val));
          break;
        case "Graphics Card":
          values.forEach((val, idx) => (params[`graphicCards[${idx}]`] = val));
          break;
        case "GPU Memory":
          values.forEach((val, idx) => (params[`gpu[${idx}]`] = val));
          break;
        case "Price":
          const lastPrice = values[values.length - 1];
          const [minPrice, maxPrice] = lastPrice.split("-").map(Number);
          params.minPrice = minPrice;
          params.maxPrice = maxPrice;
          break;
        default:
          break;
      }
    }
  });

  const { data, isLoading } = useFilterProductsQuery(params);
  const { data: filterData, isLoading: filterLoader } = useGetFiltersQuery();
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
      options:
        filterData?.data?.cpus?.map((cpu) => ({
          label: cpu,
          value: cpu,
        })) || [],
    },
    {
      title: "Graphics Card",
      options:
        filterData?.data?.graphicCards?.map((gpu) => ({
          label: gpu,
          value: gpu,
        })) || [],
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
          <h1 className="text-2xl font-semibold uppercase py-4 mb-2">Filter</h1>
          <SidebarFilter
            sections={sections}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between pr-20 items-center py-4">
            <h1 className="text-2xl font-semibold ">ALL PC BUILDS</h1>
            <SortDropdown setSortBy={setSortBy} sortBy={sortBy} />
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-10">
            {isLoading && filterLoader && <Loader />}
            {data?.products.map((build, idx) => (
              <ShopCard {...build} key={idx} />
            ))}
          </div>
          {data && (
            <div className="flex justify-end">
              <Pagination
                currentPage={page}
                totalPages={data.totalPages || Math.ceil(data.totalPages / 10)} // adapt to your API response
                onPageChange={setPage}
              />
            </div>
          )}
        </div>
      </div>
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black text-white bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-72 p-5 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              {/* <h2 className="text-xl font-semibold">Filters</h2> */}
              <button
                className="absolute right-2 top-4"
                onClick={() => setIsFilterOpen(false)}
              >
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
             <div key={idx} className="relative">
  <h3 className="uppercase text-md tracking-widest pb-1 mb-3">
    {section.title}
  </h3>
  <div className="space-y-2">
    {section.options.map((opt, optIdx) => (
      <label key={optIdx} className="flex items-center gap-2 cursor-pointer text-sm relative">
        {/* Hidden native checkbox */}
        <input
          type="checkbox"
          checked={selected[section.title]?.includes(opt.value) || false}
          onChange={() => toggleOption(section.title, opt.value)}
          className="absolute opacity-0 w-4 h-4"
        />
        
        {/* Custom checkbox */}
        <span className={`w-4 h-4 rounded-sm border-2 border-pink-500 flex-shrink-0 flex items-center justify-center ${
          selected[section.title]?.includes(opt.value) 
            ? 'bg-pink-500' 
            : 'bg-black'
        }`}>
          {/* Checkmark - only show when checked */}
          {selected[section.title]?.includes(opt.value) && (
            <svg
              className="w-3 h-3 text-white"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 8l4 4 8-8" />
            </svg>
          )}
        </span>
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
