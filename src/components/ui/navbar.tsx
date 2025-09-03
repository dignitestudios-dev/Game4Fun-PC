"use client";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";
import UserDropdown from "../user-dropdown";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useGetProfileQuery } from "@/services/auth-api";
import Cookies from "js-cookie";
import ArrowBtn from "./arrow-btn";

const routes = [
  { href: "/", pathname: "HOME" },
  { href: "#about-us", pathname: "ABOUT US" },
  { href: "#services", pathname: "SERVICES" },
  { href: "#benchmark", pathname: "BENCHMARK" },
  { href: "/shop", pathname: "SHOP" },
  { href: "#testimonials", pathname: "TESTIMONIALS" },
  { href: "#faq", pathname: "FAQ" },
  { href: "#contact", pathname: "CONTACT" },
  { href: "/ai-pc-builder", pathname: "AI PC BUILDER" },
  { href: "/reviews", pathname: "REVIEWS" },
];

function Navbar() {
  const { data } = useGetProfileQuery({});
  if (data) {
    Cookies.set("userData", JSON.stringify(data?.user));
  }
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSectionClick = (section: string) => {
    if (pathname !== "/") {
      router.push(`/?scroll=${section}`);
    } else {
      const el = document.querySelector(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex p-5 md:p-8 md:px-16 items-center relative w-full z-30 justify-between">
        <div className="flex items-center gap-8 z-50">
          <div className="flex items-center gap-4 z-50 relative">
            {pathname !== "/" && (
              <ArrowLeft
                onClick={() => router.back()}
                className="cursor-pointer"
              />
            )}
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden xl:flex gap-4 font-bold text-sm z-50">
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

        {/* Right side buttons */}
        <div className="hidden lg:flex items-center z-50 gap-2">
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
          {Cookies.get("token") && data ? (
            <UserDropdown />
          ) : (
            <Link href={"/sign-in"}>
              <ArrowBtn title="login" />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 w-64 h-full  bg-clip-padding backdrop-filter bg-opacity-10 bg-black/60 backdrop-blur-lg z-[60] p-6 transform transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6 mt-8 text-white font-semibold text-lg">
          {routes.map((r, idx) => {
            const isSection = r.href.startsWith("#");
            return isSection ? (
              <button
                key={idx}
                onClick={() => handleSectionClick(r.href)}
                className="text-left hover:text-gradient transition"
              >
                {r.pathname}
              </button>
            ) : (
              <Link
                key={idx}
                href={r.href}
                onClick={() => setSidebarOpen(false)}
                className="hover:text-gradient transition"
              >
                {r.pathname}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
