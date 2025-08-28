"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ArrowBtn from "@/components/ui/arrow-btn";
import {
  VerificationFormData,
  verificationSchema,
} from "@/schemas/verification-schema";
import {
  useResendOtpMutation,
  useVerifyOtpMutation,
} from "@/services/auth-api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function VerificationForm() {
  const [verify] = useVerifyOtpMutation();
  const [resend] = useResendOtpMutation();
  const [values, setValues] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema),
    defaultValues: { otp: "" },
  });

  const handleChange = (value: string, index: number) => {
    const newValues = [...values];
    newValues[index] = value.slice(-1);
    setValues(newValues);

    // Update RHF form value
    setValue("otp", newValues.join(""));

    if (value && index < newValues.length - 1) {
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

  const onSubmit = async (data: VerificationFormData) => {
    const res = await verify({ type: "signup", ...data });
    if (res.error) {
      if ("data" in res.error) {
        toast.error((res.error.data as any)?.message); // eslint-disable-line
      } else {
        toast.error("Something went wrong.");
      }
      return;
    }
    if (res.data) {
      toast.success(res.data.message);
      router.push("create-profile");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#2A2929CC] rounded-2xl p-8 mb-2 w-[30%] relative z-50"
    >
      <div className="flex w-full flex-col gap-4 items-center">
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

        {errors.otp && (
          <p className="text-red-500 text-sm">{errors.otp.message}</p>
        )}

        <h1 className="text-xs">
          Didn’t receive code?
          <button
            type="button"
            onClick={async () => {
              const res = await resend({ type: "signup" });
              if (res.error) {
                if ("data" in res.error) {
                  toast.error((res.error.data as any)?.message); // eslint-disable-line
                } else {
                  toast.error("Something went wrong.");
                }
                return;
              }
              if (res.data) {
                toast.success(res.data.message);
              }
            }}
            className="text-gradient cursor-pointer font-semibold"
          >
            Resend now
          </button>
        </h1>
        <button type="submit">
          <ArrowBtn title="verify" />
        </button>
      </div>
    </form>
  );
}

export default VerificationForm;
