import Link from "next/link";
import Logo from "./logo";
import { cn } from "@/lib/utils";

function Footer() {
  return (
    <div className="flex flex-wrap gap-4 p-4 w-full justify-center md:justify-between items-center  px-14 relative overflow-hidden">
 
      <div>
        <h1 className="text-center">© 2025 - Game4Fun - All Rights Reserved.</h1>
      </div>
      <Logo />
      <div className="flex flex-wrap justify-center gap-4 z-50">
        <Link href={"/privacy-policy"}>Privacy Policy</Link>
        <Link href={"/terms-conditions"}>Terms & Conditions</Link>
      </div>
    </div>
  );
}

export default Footer;
