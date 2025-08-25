import React from "react";
import Input from "./input";
import ArrowBtn from "@/components/ui/arrow-btn";


function DeleteAccount() {
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
      <div className="flex flex-col gap-3 w-[500px]">
        <Input label="Enter Password" />
        <p className="text-[#ADADAD] text-sm">
          You must enter your password in order to delete your account
        </p>
        <div className="flex justify-center mt-3">
          <ArrowBtn title="delete Account" />
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
