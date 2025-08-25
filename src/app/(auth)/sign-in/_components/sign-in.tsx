import StyledHeader from "@/components/ui/styled-title";
import React from "react";
import SignInForm from "./sign-in-form";

function SignIn() {
  return (
    <div className="py-18 flex justify-center items-center">
      <div className="flex flex-col gap-20 items-center w-full">
        <div className="">
          <StyledHeader
            title="sign in"
            backTitle="sign in"
            classname="right-[30%]"
          />
        </div>
        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn;
