"use client"
import Image from "next/image"
import Link from "next/link"

function Logo() {
  return (
    <Link href={"/"} className="">
    <Image src={"/images/logo.png"} alt="logo" width={1000} height={1000} className="z-50 w-[100px]"  />
    </Link>
  )
}

export default Logo