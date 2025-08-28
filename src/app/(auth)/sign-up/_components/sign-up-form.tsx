"use client";
import { useState } from "react";
import AuthInput from "../../_components/auth-input";
import ArrowBtn from "@/components/ui/arrow-btn";
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { SignUpFormData, signUpSchema } from "@/schemas/sign-up-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSignUpMutation } from "@/services/auth-api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; 
function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });
  const [signUp] = useSignUpMutation();
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const router = useRouter();
  const submit = async (data: SignUpFormData) => {
    const res = await signUp(data);
    if (res.error) {
      if ("data" in res.error) {
        toast.error((res.error.data as any)?.message); // eslint-disable-line
      } else {
        toast.error("Something went wrong.");
      }
      return;
    }
    if (res.data) {
      Cookies.set('token', res.data.data.token)
      toast.success(res.data.message);
      router.push("verification");
    }
  };
  return (
    <div className="bg-[#2A2929CC] rounded-2xl p-8 w-[90%] lg:w-[30%] relative  z-50">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-4 items-center "
      >
        <div className="relative w-full">
          <AuthInput label="Email" {...register("email")} />
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
            className="absolute z-50 top-[30%] right-4"
          >
            {" "}
            {visible ? <EyeClosed size={20} /> : <Eye size={20} />}
          </div>
        </div>
        <div className="relative w-full">
          <AuthInput
            label="Confirm Password"
            {...register("confirmPassword")}
            type={visible1 ? " text " : "password"}
          />
          {errors?.confirmPassword && (
            <span className="text-xs text-red-500 text-start">
              {errors?.confirmPassword.message}
            </span>
          )}
          <div
            onClick={() => setVisible1(!visible1)}
            className="absolute z-50 top-[30%] right-4"
          >
            {" "}
            {visible1 ? <EyeClosed size={20} /> : <Eye size={20} />}
          </div>
        </div>
        <div className="flex justify-start w-full gap-3">
          <input type="checkbox" {...register("terms")} />{" "}
          <p className="text-xs">
            I accept the{" "}
            <span className="text-gradient">
              <Link href={"/terms-conditions"}> Terms & conditions </Link>
            </span>
            and{" "}
            <span className="text-gradient">
              <Link href={"/privacy-policy"}> Privacy policy</Link>
            </span>
          </p>
        </div>
        <div className="relative w-full">
          {errors?.terms && (
            <span className="text-xs block text-red-500 text-start">
              {errors?.terms.message}
            </span>
          )}
        </div>
        <button type="submit">
          <ArrowBtn title="sign up" />
        </button>
      </form>
      <div className="my-4 flex flex-col gap-4 items-center text-sm">
        <h1>
          Already have an account?{" "}
          <Link href={"/sign-in"} className="text-gradient font-semibold">
            Sign In
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
}

export default SignUpForm;
