"use client";

import ArrowIcon from "../icons/arrow-icon";

type Props = {
  title: string;
};

function ArrowBtn({ title }: Props) {
  return (
    <div
      className="relative flex items-center gap-3 px-5 py-3 rounded-full cursor-pointer
       group "
    >
      {/* Glow layer - starts small under arrow, expands on hover */}
      <div
        className="absolute right-0 top-0 bottom-0 w-12 mr-2 rounded-full
        bg-[linear-gradient(to_right,#C100FF,#FFBE96)] 
        blur-xs group-hover:blur-lg opacity-100 transition-all duration-500 ease-out
        group-hover:w-full group-hover:rounded-full"
      />

      {/* Text */}
      <span className="relative z-10 uppercase font-semibold text-sm text-white">
        {title}
      </span>

      {/* Arrow */}
      <span className="relative z-10 w-6 h-6 flex items-center justify-center">
        <ArrowIcon />
      </span>
    </div>
  );
}

export default ArrowBtn;
