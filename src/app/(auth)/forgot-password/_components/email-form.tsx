"use client"
import React, { useState } from "react";
import AuthInput from "../../_components/auth-input";
import ArrowBtn from "@/components/ui/arrow-btn";
import { useForgetPasswordMutation } from "@/services/auth-api";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
type Props = {
  handleNextActive: () => void;
};

function EmailForm({ handleNextActive }: Props) {
  const [email, setEmail] = useState<string>("");
  const [forgotPass] = useForgetPasswordMutation();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email) return toast.error("email is required");
    const res = await forgotPass({ email });
    //     if (!email) return toast.error("Email is required");
    //     // const res = await forgotPass({ email });
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
      Cookies.set("token", res.data.token);
      handleNextActive();
    }
  };
  return (
    <div className="bg-[#2A2929CC] rounded-2xl p-8 w-[90%] lg:w-[30%] relative  z-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center "
      >
        <div className="w-full relative">
          <AuthInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">
          <ArrowBtn title="Continue" />
        </button>
      </form>
      {/* <div className="my-4 flex flex-col gap-4 items-center text-sm">
        <Link href={"/forgot-password"}>forgot password?</Link>

        <h1>
          Don’t have an account?{" "}
          <Link href={"/sign-up"} className="text-gradient font-semibold">
            Sign Up
          </Link>{" "}
        </h1>
      </div> */}
    </div>
  );
}

export default EmailForm;
