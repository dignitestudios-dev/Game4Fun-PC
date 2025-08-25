"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import ChangePassword from "./change-password";
import DeleteAccount from "./delete-account";

function Settings() {
  const [active, setActive] = useState(0);
  return (
    <div className="p-12 z-20 relative">
      <div className="bg-[#2A2929CC] rounded-2xl py-8 ">
        <div className="flex ">
          <div className="w-[20%] p-3 relative">
            <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[#1C1C1C] via-gray-500 to-[#1C1C1C] z-10" />
            <h1 className="uppercase text-gradient text-2xl font-semibold ml-8 mb-8 tracking-wider">
              SETTINGS
            </h1>
            <div className="flex flex-col items-start justify-start gap-3">
              <button
                className={cn(
                  "  w-full text-lg text-start  p-3 rounded-2xl cursor-pointer",
                  active == 0 ? "bg-custom-gradient" : "bg-transparent"
                )}
                onClick={() => setActive(0)}
              >
                {" "}
                Change Password
              </button>
              <button
                className={cn(
                  "cursor-pointer  text-start  text-lg w-full p-3 rounded-2xl",
                  active == 1 ? "bg-custom-gradient" : "bg-transparent"
                )}
                onClick={() => setActive(1)}
              >
                {" "}
                Delete Account
              </button>
            </div>
          </div>
          <div className="w-[70%%]">
            {active == 0 && <ChangePassword />}
            {active == 1 && <DeleteAccount />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
