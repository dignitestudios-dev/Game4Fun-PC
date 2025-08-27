import Link from "next/link";
import Logo from "./logo";
import { cn } from "@/lib/utils";

function Footer() {
  return (
    <div className="flex flex-wrap gap-4 pt-36 p-4 w-full justify-center md:justify-between items-center px-14 relative overflow-hidden">
      
      {/* Bottom Left Gradient */}
     <div
  className={cn(
    "bg-[url(/images/bottom-left-gradient-bg.png)]",
    "md:block hidden z-0 absolute -bottom-20 left-0",
    "bg-no-repeat bg-contain w-[100%] h-[300px]"
  )}
/>

{/* Bottom Right Gradient */}
<div
  className={cn(
    "bg-[url(/images/bottom-right-gradient-bg.png)]",
    "md:block hidden z-0 absolute -bottom-28 right-0",
    "bg-no-repeat bg-contain w-[50%] h-[250px]"
  )}
/>

      <div>
        <h1 className="text-center text-white/80">
          © 2025 - Game4Fun - All Rights Reserved.
        </h1>
      </div>

      <Logo />

      <div className="flex flex-wrap justify-center gap-4 z-40">
        <Link href={"/privacy-policy"} className="text-white hover:text-purple-400 transition">
          Privacy Policy
        </Link>
        <Link href={"/terms-conditions"} className="text-white hover:text-purple-400 transition">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
}

export default Footer;
