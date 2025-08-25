import GradientUnderlineTitle from "@/components/ui/gradient-underlined-title";
import StyledHeader from "@/components/ui/styled-title";
import React from "react";
import TestimonialsCard from "./ui/testimonial-card";

function Testimonials() {
  return (
    <section id="testimonials" className=" relative md:px-12 py-32 bg-[#1c1c1c] w-full">
         <div className="bg-[url(/images/gradient-bg.png)] md:block hidden absolute z-20 w-[55%] h-full bg-contain bg-no-repeat left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2" />
      <div className="flex flex-col justify-center items-center gap-3 py-5 w-full">
        <div className="relative">
          <StyledHeader title="testimonials" backTitle="testimonials" classname="-right-[450%] z-30" />
        </div>
        <h1 className="text-4xl font-semibold z-40">What our respectable</h1>
        <div className="relative z-50">
        <GradientUnderlineTitle title="client says" classname="" />
      </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        {[1, 2, 3].map((m, idx) => (
          <TestimonialsCard key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
