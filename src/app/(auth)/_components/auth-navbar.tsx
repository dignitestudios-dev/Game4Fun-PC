"use client";
import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function AuthNavbar() {
  const router = useRouter();
  return (
    <div className="p-4">
      <div
        className={cn(
          "bg-[url(/images/top-left-shadow.png)] md:block hidden z-10 w-full h-[565px] bg-no-repeat bg-contain absolute top-0 left-0 "
        )}
      />
      <div
        className={cn(
          "bg-[url(/images/top-mid-shadow.png)] md:block hidden z-10 w-full bg-no-repeat  absolute top-0 left-1/5 "
        )}
      />
      <div
        className={cn(
          "bg-[url(/images/top-right-shadow.png)] z-10 w-[600px] bg-no-repeat absolute top-0 right-0 h-screen pointer-events-none select-none"
        )}
      />
        <div className="absolute bg-[url(/images/shop-bg.png)] -top-28 left-0 bg-no-repeat bg-contain w-screen h-[500px]" />

      <div className="absolute top-[40%] left-0 w-full h-32 bg-gradient-to-t from-[#141414] via-[#14141484] to-transparent pointer-events-none z-10" />
      <div className="flex items-center gap-4 z-50 relative">
        <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
        <Logo />
      </div>
    </div>
  );
}

export default AuthNavbar;
