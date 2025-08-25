import GoogleIcon from "@/components/icons/google-icon";
import Image from "next/image";
import React from "react";

function TestimonialsCard() {
  return (
    <div className="relative w-[350px] text-[#A3A3A3] z-20  bg-[#1C1C1C] overflow-hidden rounded-2xl border-t border-t-[#34303f]">

      <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-[#1C1C1C] via-gray-500 to-[#1C1C1C]" />
      <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[#1C1C1C] via-gray-500 to-[#1C1C1C] z-10" />


      <div className="relative z-20 flex flex-col gap-4 p-6">
        <div className="flex gap-2 items-center">
          <Image
            src="/images/author-2.png"
            alt="author"
            width={50}
            height={50}
          />
          <div>
            <h2 className="text-white font-semibold text-lg">User name</h2>
            <div className="flex gap-1 mt-1">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Image
                    key={i}
                    src="/images/Symbol.png"
                    width={10}
                    height={10}
                    alt="star"
                  />
                ))}
            </div>
          </div>
        </div>
          <p className="text-[#A3A3A3] text-sm">
            Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam
            in hendrerit Pellentesque si amet sapien fringilla, mattis ligula
            consectetur, ultrices mauris. Maecenas vitae attis tellus. Nullam
            quis imperdiet augue.
          </p>
        <div>
            <div className="flex justify-between text-sm items-center">
                <div className="flex items-center gap-2">
            <GoogleIcon/>
            <div>
            <h3 >Posted On</h3>
            <h1>Google</h1>
            </div>
            </div>
            <h3>1 week ago</h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
