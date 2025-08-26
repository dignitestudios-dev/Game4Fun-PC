import { SquarePen } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

function ProfileDetail({}: Props) {
  return (
    <div className="bg-[#2A2929CC] p-5 rounded-3xl w-[90%] mx-auto ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-433">
          <Image
            src={"/images/man.png"}
            alt="man"
            width={100}
            height={100}
            className="border-dashed border-pink-600 p-2"
          />
          <h1>JOHN ALEX</h1>
        </div>
        <div className="border border-pink-600">
          <SquarePen />
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;
