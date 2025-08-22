import React from "react";

type Props = {
    title:string;
};

function StyledHeader({title}: Props) {
  return (
    <div className="relative w-fit mb-5">
      <h1 className="text-2xl font-semibold tracking-wide">{title}</h1>
      <div
        className="absolute left-0 -bottom-1 z-[-10] h-1 w-full "
        style={{
          background: "linear-gradient(to right, #C100FF, #FFBE96)",
        }}
      />
    </div>
  );
}

export default StyledHeader;
