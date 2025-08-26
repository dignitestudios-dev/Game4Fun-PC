"use client"
import { Suspense } from "react";
import Home from "./_components/home";

function Page() {
  return (
    <Suspense>
   <Home/>
    </Suspense>
  );
}

export default Page;
