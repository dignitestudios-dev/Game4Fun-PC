"use client";
import React, { useState } from "react";
import ShopBanner from "./_components/shop-banner";
import SidebarFilter from "./_components/sidebar-filter";
import ShopCard from "@/components/ui/shop-card";
import { X } from "lucide-react";
import SortDropdown from "./_components/ui/sort-dropdown";
import { motion, AnimatePresence } from "framer-motion";
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

  const params: Record<string, any> = {   //eslint-disable-line
 
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
          <div className="flex justify-center lg:justify-between pr-20 items-center py-4">
            <h1 className="text-2xl font-semibold lg:block hidden">
              ALL PC BUILDS
            </h1>
            <SortDropdown setSortBy={setSortBy} sortBy={sortBy} />
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-10">
            {isLoading && filterLoader && <Loader />}
            {data && data?.products.length>0 ? data?.products.map((build, idx) => (
              <ShopCard {...build} key={idx} />
            )) : <div className="text-center" >No Products Found</div>}
          </div>
          {data && data.products.length >0 && (
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
  <AnimatePresence>
    {/* Overlay */}
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      onClick={() => setIsFilterOpen(false)}
    />

    {/* Sidebar Drawer */}
    <motion.div
      key="drawer"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed right-0 top-0 z-50 h-full w-72 sm:w-80 bg-[#1b1b1d]/95 backdrop-blur-lg text-white shadow-2xl flex flex-col rounded-l-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <h2 className="text-lg font-semibold tracking-wider text-gradient">Filters</h2>
        <button
          className="hover:scale-110 transition-transform"
          onClick={() => setIsFilterOpen(false)}
        >
          <X className="w-6 h-6 text-gray-300 hover:text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {sections.map((section, idx) => (
          <div key={idx} className="relative">
            <h3 className="uppercase text-sm tracking-widest font-semibold mb-4 text-gray-200">
              {section.title}
            </h3>
            <div className="space-y-3">
              {section.options.map((opt, optIdx) => (
                <label
                  key={optIdx}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selected[section.title]?.includes(opt.value) || false}
                    onChange={() => toggleOption(section.title, opt.value)}
                    className="hidden"
                  />

                  {/* Custom checkbox */}
                  <span
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${
                      selected[section.title]?.includes(opt.value)
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 border-pink-400"
                        : "bg-transparent border-gray-500 group-hover:border-pink-400"
                    }`}
                  >
                    {selected[section.title]?.includes(opt.value) && (
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 8l4 4 8-8" />
                      </svg>
                    )}
                  </span>

                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Divider */}
            {idx !== sections.length - 1 && (
              <div className="mt-6 h-px w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60" />
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-5 border-t border-white/10">
        <button
          className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold tracking-wide shadow-lg hover:opacity-90 transition-all"
          onClick={() => setIsFilterOpen(false)}
        >
          Apply Filters
        </button>
      </div>
    </motion.div>
  </AnimatePresence>
)}


    </div>
  );
}

export default Page;
