"use client";
import ArrowBtn from "@/components/ui/arrow-btn";

import React, { useRef, useState } from "react";

type Props = {};

function VerificationForm({}: Props) {
  const [values, setValues] = useState<string[]>(Array(5).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleOTPChange = (otp: string) => {
    console.log("OTP:", otp);
  };

  const handleChange = (value: string, index: number) => {
    const newValues = [...values];
    newValues[index] = value.slice(-1); // only take last digit
    setValues(newValues);
    handleOTPChange(newValues.join(""));

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };
  return (
    <div className="bg-[#2A2929CC] rounded-2xl p-8 mb-2 w-[30%] relative  z-50">
      <div className="flex w-full flex-col gap-4 items-center ">
        <p className="text-sm text-center w-full">
          Please enter OTP code sent to designer@dignitestudios.com
        </p>
        <div className="flex gap-2">
          {values.map((val, index) => (
            <input
              key={index}
              type="text"
              value={val}
              maxLength={1}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center rounded-full border border-gray-500 bg-[#52525226] text-white text-lg focus:outline-none focus:border-purple-500"
            />
          ))}
        </div>
        <h1 className="text-xs">
          Didn’t receive code?
          <button className="text-gradient cursor-pointer font-semibold">
            {" "}
            Resend now
          </button>{" "}
        </h1>

        <ArrowBtn title="verify" />
      </div>
      <div className="my-4 flex flex-col gap-4 items-center text-sm"></div>
    </div>
  );
}

export default VerificationForm;
