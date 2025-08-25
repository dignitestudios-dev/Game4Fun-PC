import StyledHeader from "@/components/ui/styled-title";
import React from "react";
import CreateProfileForm from "./create-profile-form";

function CreateProfile() {
  return (
    <div className="py-18 flex justify-center items-center">
      <div className="flex flex-col gap-20 items-center w-full">
        <div className="">
          <StyledHeader
            title="Create profile"
            backTitle="Create profile"
            classname="right-[5%]"
          />
        </div>
        <CreateProfileForm />
      </div>
    </div>
  );
}

export default CreateProfile;
