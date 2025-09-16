import React, { Suspense } from "react";
import ReviewOrder from "./_components/review-order";
import Loader from "@/components/ui/loader";

function page() {
  return (
    <Suspense fallback={<Loader />}>
      <ReviewOrder />
    </Suspense>
  );
}

export default page;
