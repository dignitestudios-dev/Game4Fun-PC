"use client";
import { useState } from "react";
import AuthInput from "../../_components/auth-input";
import ArrowBtn from "@/components/ui/arrow-btn";
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignInMutation } from "@/services/auth-api";
import { SignInInput, signInSchema } from "@/schemas/sign-in-schema";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
function SignInForm() {
  const [visible, setVisible] = useState(false);
  const [signIn] = useSignInMutation();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: zodResolver(signInSchema) });
  const router = useRouter();
  const submit = async (data: SignInInput) => {
    const res = await signIn(data);
    if (res.error) {
      if ("data" in res.error && res.error.data) {
        const errorData = res.error.data as Record<string, any>; // eslint-disable-line

        if (errorData.message == "Please complete your profile") {
          toast.error(errorData.message);
          Cookies.set("token", errorData.token);
          router.push("create-profile");
        }else if (errorData.message == "Please verify your email") {
          Cookies.set("token", errorData.token);
          router.push("verification");
        }else{
          toast.error(errorData.message)
        }

       
      } else {
        toast.error("Something went wrong.");
      }
      return;
    }

    if (res.data) {
      toast.success(res.data.message);
      Cookies.set("token", res.data.token);
      router.push("/");
    }
  };
  return (
    <div className="bg-[#2A2929CC] rounded-2xl p-8 w-[90%] lg:w-[30%] relative  z-50">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-4 items-center "
      >
        <div className="w-full relative">
          <AuthInput label="Email" type="email" {...register("email")} />
          {errors?.email && (
            <span className="text-xs text-red-500 text-start">
              {errors?.email.message}
            </span>
          )}
        </div>
        <div className="relative w-full">
          <AuthInput
            label="Password"
            type={visible ? " text " : "password"}
            {...register("password")}
          />
          {errors?.password && (
            <span className="text-xs text-red-500 text-start">
              {errors?.password.message}
            </span>
          )}
          <div
            onClick={() => setVisible(!visible)}
            className="absolute z-50 top-[20%] right-4"
          >
            {" "}
            {visible ? <EyeClosed size={20} /> : <Eye size={20} />}
          </div>
        </div>
        <button type="submit">
          <ArrowBtn title="sign in" />
        </button>
      </form>
      <div className="my-4 flex flex-col gap-4 items-center text-sm">
        <Link href={"/forgot-password"}>forgot password?</Link>

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
