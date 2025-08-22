"use client";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";
import UserDropdown from "../user-dropdown";
import { usePathname, useRouter } from "next/navigation";
const routes = [
  {
    href: "/",
    pathname: "HOME",
  },
  {
    href: "#about-us",
    pathname: "ABOUT US",
  },
  {
    href: "#services",
    pathname: "SERVICES",
  },
  {
    href: "#benchmark",
    pathname: "BECNCHMARK",
  },
  {
    href: "/shop",
    pathname: "SHOP",
  },
  {
    href: "#testimonials",
    pathname: "TESTIMONIALS",
  },
  {
    href: "#faq",
    pathname: "FAQ",
  },
  {
    href: "#contact",
    pathname: "CONTACT",
  },
  {
    href: "/ai-pc-builder",
    pathname: "AI PC BUILDER",
  },
  {
    href: "/reviews",
    pathname: "REVIEWS",
  },
];

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSectionClick = (section: string) => {
    if (pathname !== "/") {
      router.push(`/?scroll=${section}`);
    } else {
      const el = document.querySelector(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="flex p-5 md:p-8 md:px-16 items-center relative w-full z-30 justify-between">
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
        <div className="flex items-center gap-8 z-50">
          <Logo />
          <div className="hidden md:flex  gap-4 font-bold text-sm z-50">
             {routes.map((r, idx) => {
            const isSection = r.href.startsWith("#");
            return isSection ? (
              <button
                key={idx}
                className={cn(
                  "cursor-pointer bg-transparent border-none outline-none",
                  r.href === pathname ? "text-gradient" : "text-white"
                )}
                onClick={() => handleSectionClick(r.href)}
              >
                {r.pathname}
              </button>
            ) : (
              <Link
                key={idx}
                className={cn(
                  "cursor-pointer",
                  r.href === pathname ? "text-gradient" : "text-white"
                )}
                href={r.href}
              >
                {r.pathname}
              </Link>
            );
          })}
          </div>
        </div>
     
        <div className="hidden md:flex items-center z-50 gap-2">
          <Link
            href="/cart"
            className="bg-[linear-gradient(to_right,#C100FF,#FFBE96)] p-[1.2px] rounded-full flex"
          >
            <div className="bg-white dark:bg-black rounded-full w-12 h-12 flex items-center justify-center">
              <Image
                src="/images/cart-icon.png"
                alt="cart"
                width={23}
                height={23}
              />
            </div>
          </Link>
          {/* <div className="flex items-center gap-2">
            <div
              className="bg-[linear-gradient(to_right,#C100FF,#FFBE96)] p-[1.2px] rounded-full flex"
            >
              <div className="bg-white dark:bg-black rounded-full w-10 h-10 flex items-center justify-center">
                <Image
                  src="/images/cart-icon.png"
                  alt="cart"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <h3 className="text-sm">HI JOHN ALEX</h3>
          </div> */}
          <UserDropdown />
        </div>
      <div
  className={cn(
    "bg-[url(/images/top-right-shadow.png)] z-10 w-[600px] bg-no-repeat absolute top-0 right-0 h-screen pointer-events-none select-none"
  )}
/>

      </div>
    </>
  );
}

export default Navbar;
