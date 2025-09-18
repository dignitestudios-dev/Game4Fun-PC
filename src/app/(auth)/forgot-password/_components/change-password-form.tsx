"use client"
import ArrowBtn from '@/components/ui/arrow-btn'
import React, { useState } from 'react'
import AuthInput from '../../_components/auth-input'
import { Eye, EyeClosed } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PasswordInput, passwordSchema } from '@/schemas/reset-password-schema'
import { useResetPasswordMutation } from '@/services/auth-api'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'



function ChangePasswordForm() {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
 const [reset] = useResetPasswordMutation()
  const { register, handleSubmit, formState: { errors } } = useForm<PasswordInput>({
    resolver: zodResolver(passwordSchema),
  });
  const router = useRouter()

  const onSubmit =async (data: PasswordInput) => {
   const res = await reset({password:data.password});
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
         router.push("/sign-in")
       }
  };

  return (
    <div className="bg-[#2A2929CC] rounded-2xl p-8 w-[90%] lg:w-[30%] relative z-50">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center">
        <div className="relative w-full">
          <AuthInput
            label="Password"
            type={visible ? "text" : "password"}
            {...register("password")}
          />
          {errors?.password && (
            <span className="text-xs text-red-500 text-start">
              {errors.password.message}
            </span>
          )}
          <div onClick={() => setVisible(!visible)} className="absolute z-50 top-[30%] right-4">
            {visible ?<Eye size={20} />  : <EyeClosed size={20} />}
          </div>
        </div>

        <div className="relative w-full">
          <AuthInput
            label="Confirm Password"
            type={visible1 ? "text" : "password"}
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword && (
            <span className="text-xs text-red-500 text-start">
              {errors.confirmPassword.message}
            </span>
          )}
          <div onClick={() => setVisible1(!visible1)} className="absolute z-50 top-[30%] right-4">
            {visible1 ?<Eye size={20} />  : <EyeClosed size={20} />}
          </div>
        </div>

        <button type="submit">
          <ArrowBtn title="Change Password" />
        </button>
      </form>
    </div>
  );
}

export default ChangePasswordForm;
