import React from 'react'
type Props = {
  width?: string;
  height?: string;
};

function ScreenIcon({ width, height }: Props) {
  return (
  <svg     width={width ? width : "26"}
      height={height ? height : "26"} viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M70 3.44971H10C5.85786 3.44971 2.5 6.80757 2.5 10.9497V48.4497C2.5 52.5918 5.85786 55.9497 10 55.9497H70C74.1421 55.9497 77.5 52.5918 77.5 48.4497V10.9497C77.5 6.80757 74.1421 3.44971 70 3.44971Z" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25 70.9497H55M40 55.9497V70.9497" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )
}

export default ScreenIcon