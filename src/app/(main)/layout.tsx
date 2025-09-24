"use client"; // since we’re using state + useEffect

import { useEffect, useState } from "react";
import ChatWidget from "@/components/chat-widget";
import ScrollToTopButton from "@/components/scroll-to-top-btn";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white">
        <Image src="/images/loader.gif" alt="Loading..." width={500} height={500} className="" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {children}
      <ChatWidget />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
