"use client";
import { useState } from "react";
import AuthInput from "../../_components/auth-input";
import ArrowBtn from "@/components/ui/arrow-btn";
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
function SignUpForm() {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
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
        <div className="relative w-full">
          <AuthInput label="Confirm Password" type={visible1 ? " text " : "password"} />
          <div onClick={()=>setVisible1(!visible1)} className="absolute z-50 top-[30%] right-4">
            {" "}
            {visible1 ? <EyeClosed size={20} /> : <Eye size={20}/>}
          </div>
        </div>
        <div className="flex justify-start w-full gap-3">
        <input type="checkbox"  /> <p className="text-xs">I accept the  <span className="text-gradient" >Terms & conditions </span>and <span className="text-gradient">Privacy policy</span></p>
        </div>
        <ArrowBtn title="sign up" />
      </div>
      <div className="my-4 flex flex-col gap-4 items-center text-sm">
        {/* <Link href={"forgot"}>forgot password?</Link> */}

        <h1>
          Already have an account?{" "}
          <Link href={"/sign-ip"} className="text-gradient font-semibold">
            Sign In
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
}

export default SignUpForm;
