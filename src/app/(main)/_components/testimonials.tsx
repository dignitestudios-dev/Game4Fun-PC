import GradientUnderlineTitle from "@/components/ui/gradient-underlined-title";
import StyledHeader from "@/components/ui/styled-title";
import React from "react";
import TestimonialsCard from "./ui/testimonial-card";

const reviews = [
  {
    name:"David Hannigan",
    detail:
      "Highly recommend this company for all your PC needs. Very knowledgeable in everything that comes with building and services on PCs. He did an amazing job fixing my heating issue on my PC. I also saw firsthand how good he is at building a new one. Very friendly and will answer every question you have. A+",
      gender:"male"
  },
  {
    name:"S R",
    detail:
      "Great experience Customer service outstanding my custom built PC is a dream come true he took All of the things that I wanted in a PC and made it possible These guys are very knowledgeable and very experienced. I am a very satisfied customer and I recommend that anybody that wants a custom built workstation PC gaming PC or any type of PC to get in contact with them and they will deliver a dream machine that is reality very thankful for my new PC thank you games for fun PCs",
      gender:"male"
  },
  {
    name:"Dieneysh Hernandez",
    detail:
      "I’m very impressed with the overall quality of this PC build. The components were assembled with great care, cable management was clean, and everything feels solid and professional. From the moment I powered it on, the system ran smoothly without any issues.",
      gender:"female"
  },
];
function Testimonials() {
  return (
    <section
      id="testimonials"
      className=" relative md:px-12 py-32 bg-[#1c1c1c] w-full"
    >
      <div className="bg-[url(/images/gradient-bg.png)] md:block hidden absolute z-20 w-[55%] h-full bg-contain bg-no-repeat left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2" />
      <div className="flex flex-col justify-center items-center gap-3 py-5 w-full">
        <div className="relative">
          <StyledHeader
            title="testimonials"
            backTitle="testimonials"
            classname="-right-[450%] z-30"
          />
        </div>
        <h1 className="text-4xl font-semibold z-40">What our respectable</h1>
        <div className="relative z-50">
          <GradientUnderlineTitle title="client says" classname="" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        {reviews.map((m, idx) => (
          <TestimonialsCard review={m} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
