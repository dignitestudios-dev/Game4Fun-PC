"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Cookies from "js-cookie";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import TermsPopup from "./terms-popup";
import WarrantyPopup from "./warranty-popup";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const [warrantyPopup, setWarrantyPopup] = useState(false);
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

  useEffect(() => {
    if (popup) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [popup]);

  return (
    <div className="relative z-[999999999999999999]" ref={dropdownRef}>
      <TermsPopup isOpen={popup} onClose={() => setPopup(false)} />
      <WarrantyPopup
        isOpen={warrantyPopup}
        onClose={() => setWarrantyPopup(false)}
      />
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
        <div className=" hidden md:flex items-center gap-1">
          <h3 className="text-sm font-medium text-foreground">Hi {data.fullName}</h3>
          <ChevronDown />
        </div>
      </button>

      {isOpen && (
      <div className="absolute right-0 my-2 py-2 w-48 rounded-2xl 
  bg-white/90 dark:bg-neutral-900/90 shadow-lg 
  ring-1 ring-black/10 backdrop-blur-sm z-50">

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
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setPopup(!popup);
                }}
                className="block w-full cursor-pointer text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                Terms and Conditions
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setWarrantyPopup(!warrantyPopup);
                  setIsOpen(!isOpen);
                }}
                className="block w-full text-start cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                Warranty
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block w-full text-start cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                PC Guide
              </button>
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
                  Cookies.remove("token");
                  toast.success("Logout Successfully");
                  setIsOpen(!isOpen);
                  router.push("/sign-in");
                }}
                className="w-full cursor-pointer text-red-600 text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
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
