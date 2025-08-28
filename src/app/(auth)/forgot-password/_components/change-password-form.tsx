"use client"
import ArrowBtn from '@/components/ui/arrow-btn'
import React, { useState } from 'react'
import AuthInput from '../../_components/auth-input'
import { Eye, EyeClosed } from 'lucide-react'

type Props = {
    handleNextActive: () =>void
}

function ChangePasswordForm({handleNextActive}: Props) {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
    // const handleSubmit = async() =>{
    //           handleNextActive()
    // }
  return (
   <div className="bg-[#2A2929CC] rounded-2xl p-8 w-[90%] lg:w-[30%] relative  z-50">
      <form
        // onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-4 items-center "
      >
   
        <div className="relative w-full">
          <AuthInput
            label="Password"
            type={visible ? " text " : "password"}
            // {...register("password")}
          />
          {/* {errors?.password && (
            <span className="text-xs text-red-500 text-start">
              {errors?.password.message}
            </span>
          )} */}
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
            // {...register("confirmPassword")}
            type={visible1 ? " text " : "password"}
          />
          {/* {errors?.confirmPassword && (
            <span className="text-xs text-red-500 text-start">
              {errors?.confirmPassword.message}
            </span>
          )} */}
          <div
            onClick={() => setVisible1(!visible1)}
            className="absolute z-50 top-[30%] right-4"
          >
            {" "}
            {visible1 ? <EyeClosed size={20} /> : <Eye size={20} />}
          </div>
        </div>
        {/* <div className="flex justify-start w-full gap-3">
          <input type="checkbox"
        //    {...register("terms")}
            />{" "}
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
        </div> */}
        <div className="relative w-full">
          {/* {errors?.terms && (
            <span className="text-xs block text-red-500 text-start">
              {errors?.terms.message}
            </span>
          )} */}
        </div>
        <button type="submit">
          <ArrowBtn title="change password" />
        </button>
      </form>
      {/* <div className="my-4 flex flex-col gap-4 items-center text-sm">
        <h1>
          Already have an account?{" "}
          <Link href={"/sign-ip"} className="text-gradient font-semibold">
            Sign In
          </Link>{" "}
        </h1>
      </div> */}
    </div>
  )
}

export default ChangePasswordForm