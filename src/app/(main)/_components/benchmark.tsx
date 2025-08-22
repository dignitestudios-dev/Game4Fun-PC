import GradientUnderlineTitle from "@/components/ui/gradient-underlined-title";
import React from "react";
import BenchmarkDropdown from "./ui/benchmark-dropdown";
import ArrowBtn from "@/components/ui/arrow-btn";
const benchmarks = [
  {
    icon: "processor",
    items: [
      "Ryzen 9 9950X Processor",
      "Ryzen 7 9700X Processor",
      "Ryzen 5 9600X Processor",
    ],
  },
  {
    icon: "nvidia",
    items: [
      "NVIDIA GeForce RTX 4090",
      "NVIDIA GeForce RTX 4080 Super",
      "NVIDIA GeForce RTX 4070 Ti",
    ],
  },
  {
    icon: "resolution",
    items: [
      "1920x1080 (Full HD)",
      "2560x1440 (QHD)",
      "3840x2160 (4K UHD)",
    ],
  },
  {
    icon: "games",
    items: [
      "Call of Duty: Modern Warfare III",
      "Cyberpunk 2077",
      "Elden Ring",
    ],
  },
];

function Benchmark() {
  return (
    <section className="p-8 w-full" id="benchmark">
      <div className="flex flex-col items-center">
        <h4 className="uppercase leading-8 text-gradient tracking-widest font-semibold text-sm">
          pc benchmark
        </h4>
        <div className="text-5xl w-[40%] text-center font-semibold leading-16">
          <span>
            <GradientUnderlineTitle title="Performance" classname="text-5xl"  />
          </span>{" "}
      
        </div>
        <div className="flex gap-8 flex-wrap justify-center w-full py-10">
            {benchmarks.map((b,idx)=>(
                <BenchmarkDropdown benchmark={b} key={idx} />

            ))}
        </div>
        <div>
        <ArrowBtn title="get results" />
        </div>
      </div>
    </section>
  );
}

export default Benchmark;
