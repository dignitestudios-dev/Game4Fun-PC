"use client";
import React, { useState } from "react";
import Input from "./input";
import ArrowBtn from "@/components/ui/arrow-btn";
import toast from "react-hot-toast";
import { useDeleteProfileMutation } from "@/services/auth-api";
import { useRouter } from "next/navigation";

function DeleteAccount() {
  const [pass, setPass] = useState("");
  const router = useRouter();
  const [deleteProfile] = useDeleteProfileMutation();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!pass) return toast.error("Password is required");
    try {
      const res = await deleteProfile(pass).unwrap();
      toast.success(res.message);
      router.push("/sign-in");
    } catch (error: any) { // eslint-disable-line
      toast.error(error?.data.message);
    }
  };
  return (
    <div className="py-2 pl-8 w-full h-screen">
      <h1 className="uppercase text-gradient text-2xl font-semibold mb-4 tracking-wider">
        Delete Account
      </h1>
      <p className="mb-4 text-sm w-[80%]">
        Deleting your account is permanent and cannot be undone. All your data,
        including your profile, account information, and any saved preferences,
        will be removed from our system.{" "}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[500px]">
        <Input label="Enter Password" value={pass} onChange={e=>setPass(e.target.value)} />
        <p className="text-[#ADADAD] text-sm">
          You must enter your password in order to delete your account
        </p>
        <button type="submit" className="flex justify-center mt-3">
          <ArrowBtn title="delete Account" />
        </button>
      </form>
    </div>
  );
}

export default DeleteAccount;
