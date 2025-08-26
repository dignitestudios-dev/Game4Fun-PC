import { SquarePen } from "lucide-react";
import Image from "next/image";
import React from "react";

function ProfileDetail() {
  return (
    <div className="bg-[#2A2929CC] p-5 px-10 rounded-3xl mb-20 w-[90%] mx-auto ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/images/man.png"}
            alt="man"
            width={150}
            height={150}
            className="border-dashed border rounded-full border-pink-600 p-1"
          />
          <h1>JOHN ALEX</h1>
        </div>
        <div className="border rounded-full p-2 border-pink-600">
          <SquarePen />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-32 py-10" >
        <div className="text-sm">
          <h3 className="text-[#959393]">Email Address</h3>
          <h1>store@mail.com</h1>
        </div>
        <div className="text-sm">
          <h3 className="text-[#959393]">Phone Number</h3>
          <h1>+000 000 0000</h1>
        </div>
        <div className="text-sm">
          <h3 className="text-[#959393]">Address</h3>
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;
