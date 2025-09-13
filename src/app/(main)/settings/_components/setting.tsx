"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import ChangePassword from "./change-password";
import DeleteAccount from "./delete-account";

function Settings() {
  const [active, setActive] = useState(0);

  return (
    <div className="p-6 md:p-12 relative">
      <div className="bg-[#2A2929CC] rounded-2xl py-6 md:py-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 p-3 relative">
            {/* Divider only on desktop */}
            <div className="hidden md:block absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[#1C1C1C] via-gray-500 to-[#1C1C1C] z-10" />
            <h1 className="uppercase text-gradient text-xl md:text-2xl font-semibold ml-4 md:ml-8 mb-6 md:mb-8 tracking-wider">
              SETTINGS
            </h1>
            <div className="flex flex-col items-start justify-start gap-3">
              <button
                className={cn(
                  "w-full text-base md:text-lg text-start p-2 md:p-3 rounded-2xl cursor-pointer",
                  active == 0 ? "bg-custom-gradient" : "bg-transparent"
                )}
                onClick={() => setActive(0)}
              >
                Change Password
              </button>
              <button
                className={cn(
                  "w-full text-base md:text-lg text-start p-2 md:p-3 rounded-2xl cursor-pointer",
                  active == 1 ? "bg-custom-gradient" : "bg-transparent"
                )}
                onClick={() => setActive(1)}
              >
                Delete Account
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-3/4 mt-6 md:mt-0 px-2 md:px-6">
            {active === 0 && <ChangePassword />}
            {active === 1 && <DeleteAccount />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
