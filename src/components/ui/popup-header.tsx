import React from "react";

type Props = {
  title: string;
};

function PopupHeader({ title }: Props) {
  return (
    <div className="relative w-fit mb-5">
      <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-white">
        {title}
      </h1>
      <div
        className="absolute left-0 -bottom-1 h-1 w-full rounded-md"
        style={{
          background: "linear-gradient(to right, #C100FF, #FFBE96)",
        }}
      />
    </div>
  );
}

export default PopupHeader;
