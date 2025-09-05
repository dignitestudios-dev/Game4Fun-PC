import React from "react";
type Props = {
  width?: string;
  height?: string;
};

function CpuCase({ width, height }: Props) {
  return (
    <svg
           width={width ? width : "26"}
      height={height ? height : "26"}
      viewBox="0 0 22 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6667 1.66667H4.33341C2.86066 1.66667 1.66675 2.86058 1.66675 4.33333V25.6667C1.66675 27.1394 2.86066 28.3333 4.33341 28.3333H17.6667C19.1395 28.3333 20.3334 27.1394 20.3334 25.6667V4.33333C20.3334 2.86058 19.1395 1.66667 17.6667 1.66667Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 17.6667H15.0133M7 7H15M7 12.3333H15"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CpuCase;
