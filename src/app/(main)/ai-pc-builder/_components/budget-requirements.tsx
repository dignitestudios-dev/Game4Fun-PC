import ArrowBtn from "@/components/ui/arrow-btn";
import Input from "@/components/ui/input";
import React from "react";


function BudgetRequirements() {
  return (
    <div className="flex p-12 justify-between">
      <div className="w-[45%]">
        <h1 className="uppercase mb-4 font-bold tracking-wider text-3xl">budget & REQUIREMENT </h1>
        <div className="flex flex-col gap-4">
          <Input label="Budget" />
          <Input label="Budget" />
          <Input label="Budget" />
          <textarea
           className="w-full px-4 py-3 rounded-2xl bg-[#1d1d1d] border border-[#FFFFFF36] text-[#FFFFFF] placeholder-[#FFFFFF36] focus:outline-none focus:border-purple-500 transition"
          />
        
          <div className="flex justify-start items-center">
            <ArrowBtn title="submit" />
          </div>
        </div>
      </div>
      <div className="w-[45%]">
        <h1 className="uppercase mb-4">Extra</h1>
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-2 items-center" ><input type="checkbox" /> <h1>Monitor</h1></div>
          <div className="flex gap-2 items-center" ><input type="checkbox" /> <h1>Monitor</h1></div>
          <div className="flex gap-2 items-center" ><input type="checkbox" /> <h1>Monitor</h1></div>
          <div className="flex gap-2 items-center" ><input type="checkbox" /> <h1>Monitor</h1></div>
          <div className="flex gap-2 items-center" ><input type="checkbox" /> <h1>Monitor</h1></div>
          <div className="flex gap-2 items-center" ><input type="checkbox" /> <h1>Monitor</h1></div>
        </div>
      </div>
    </div>
  );
}

export default BudgetRequirements;
