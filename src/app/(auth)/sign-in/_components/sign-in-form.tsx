"use client";
import { useState } from "react";
import AuthInput from "../../_components/auth-input";
import ArrowBtn from "@/components/ui/arrow-btn";
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
function SignInForm() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-[#2A2929CC] rounded-2xl p-8 w-[30%] relative  z-50">
      <div className="flex flex-col gap-4 items-center ">
        <AuthInput label="Email" />
        <div className="relative w-full">
          <AuthInput label="Password" type={visible ? " text " : "password"} />
          <div onClick={()=>setVisible(!visible)} className="absolute z-50 top-[30%] right-4">
            {" "}
            {visible ? <EyeClosed size={20} /> : <Eye size={20}/>}
          </div>
        </div>
        <ArrowBtn title="sign in" />
      </div>
      <div className="my-4 flex flex-col gap-4 items-center text-sm">
        <Link href={"forgot"}>forgot password?</Link>

        <h1>
          Don’t have an account?{" "}
          <Link href={"/sign-up"} className="text-gradient font-semibold">
            Sign Up
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
}

export default SignInForm;
