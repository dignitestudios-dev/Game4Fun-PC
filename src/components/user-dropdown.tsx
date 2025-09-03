"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Cookies from "js-cookie";
import Image from "next/image";
import { useLogoutMutation } from "@/services/auth-api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [logout] = useLogoutMutation();
  const dropdownRef = useRef(null);
  const data = JSON.parse(Cookies.get("userData")!);
  const router = useRouter();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-[999999999999999999]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none"
      >
        <div className="bg-[linear-gradient(to_right,#C100FF,#FFBE96)] p-[1.2px] rounded-full flex">
          <div className="bg-white dark:bg-black rounded-full w-12 h-12 flex items-center justify-center">
            <Image
              src={data?.profilePicture ?? ""}
              alt="cart"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <h3 className="text-sm font-medium text-foreground">Hi John Alex</h3>
          <ChevronDown />
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 my-2 py-2 w-48 rounded-2xl  bg-white dark:bg-neutral-900 shadow-lg ring-1 ring-black/10 z-50">
          <ul className="py-1 text-sm text-foreground dark:text-white">
            <li>
              <Link
                href="/profile"
                onClick={() => setIsOpen(!isOpen)}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                onClick={() => setIsOpen(!isOpen)}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                My Orders
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                onClick={() => setIsOpen(!isOpen)}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                Settings
              </Link>
            </li>
            <li>
              <button
                onClick={async () => {
                  const res = await logout({});
                  toast.success(res.data.message);
                  setIsOpen(!isOpen);
                  router.push("/sign-in")
                }}
                className="w-full text-red-600 text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
