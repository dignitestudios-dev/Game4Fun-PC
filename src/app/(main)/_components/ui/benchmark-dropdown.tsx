import GraphicCardIcon from "@/components/icons/graphic-card-icon";
import ProcessorIcon from "@/components/icons/processor-icon";
import React from "react";

interface Props {
    benchmark : {
        icon:string;
        items: string[]
    }
}


function BenchmarkDropdown({benchmark}:Props) {
  return (
    <div className="bg-[#1b1a1a] p-3 rounded-2xl md:w-[40%] w-[80%] ">
      <div className="flex gap-4 items-center">
        {
            benchmark.icon  == "processor" && <ProcessorIcon width="90" height="90" />
        }
        {
            benchmark.icon  == "nvidia" && <GraphicCardIcon width="90" height="90" />
        }
        {
            benchmark.icon  == "resolution" && <ProcessorIcon width="90" height="90" />
        }
        {
            benchmark.icon  == "games" && <ProcessorIcon width="90" height="90" />
        }
        
        <div>
          <h5 className="mb-4 capitalize">{benchmark.icon}*</h5>
          <div className="relative w-full">
            <select className="appearance-none text-sm  rounded-full border border-gray-600 bg-[#242323] text-white px-4 py-4 pr-10 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500">
                {benchmark.items.map((i,idx)=>(

              <option key={idx}>{i}</option>
                ))}
            
            </select>

            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.555121 0.75C0.445303 0.750104 0.337977 0.785353 0.246697 0.851295C0.155417 0.917237 0.0842787 1.01091 0.0422661 1.12049C0.000253604 1.23007 -0.0107485 1.35064 0.0106494 1.46697C0.0320474 1.5833 0.0848854 1.69017 0.16249 1.77409L4.60737 6.57451C4.71155 6.68688 4.85276 6.75 5 6.75C5.14724 6.75 5.28845 6.68688 5.39263 6.57451L9.83751 1.77409C9.91512 1.69017 9.96795 1.5833 9.98935 1.46697C10.0107 1.35064 9.99975 1.23007 9.95774 1.12049C9.91572 1.01091 9.84458 0.917237 9.7533 0.851295C9.66202 0.785353 9.5547 0.750104 9.44488 0.75L0.555121 0.75Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenchmarkDropdown;
