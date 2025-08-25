"use client"
import { Suspense } from "react";
import Home from "./_components/home";

function Page() {
  return (
    <Suspense fallback={"loading"}>
   <Home/>
    </Suspense>
  );
}

export default Page;
