"use client";
import React from "react";
import Input from "./input";
import ArrowBtn from "@/components/ui/arrow-btn";
import { useChangePasswordMutation } from "@/services/auth-api";
import { useForm } from "react-hook-form";
import {
  changePasswordSchema,
  ChangePasswordSchema,
} from "@/schemas/change-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorMessage } from "@/components/error-message";
import toast from "react-hot-toast";

function ChangePassword() {
  const [changePassword] = useChangePasswordMutation();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data: ChangePasswordSchema) => {
    try {
      const res = await changePassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      }).unwrap();

      toast.success(res.message);
      reset();
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };
  return (
    <div className="py-2 pl-8 w-full h-screen">
      <h1 className="uppercase text-gradient text-2xl font-semibold mb-8 tracking-wider">
        Change password
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-[400px]"
      >
        <Input label="Old Password" {...register("oldPassword")} />
        <FormErrorMessage message={errors?.oldPassword?.message} />
        <Input label="New Password" {...register("newPassword")} />
        <FormErrorMessage message={errors?.newPassword?.message} />
        <Input label="Confirm Password" {...register("confirmNewPassword")} />
        <FormErrorMessage message={errors?.confirmNewPassword?.message} />
        <button type="submit" className="flex justify-center ">
          <ArrowBtn title="save" />
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
