import StyledHeader from "@/components/ui/styled-title";
import Image from "next/image";

function About() {
  return (
    <section id="about-us" className="flex relative items-center">
          <div className="bg-[url(/images/gradient-bg.png)] rotate-45 md:block hidden absolute z-20 w-[55%] h-full bg-contain bg-no-repeat left-[35%] top-[55%] -translate-x-1/2 -translate-y-1/2" />
      <div className=" w-full hidden lg:block ">
        <Image
          src="/images/about-us.png"
          alt="aboutus"
          width={1500}
          height={1500}
          className="rounded-xl relative z-30"
        />
      </div>

      <div className="w-full lg:w-1/2 relative lg:absolute right-0 flex flex-col  gap-4 md:pl-2">
      <div className="lg:block hidden" >
        <StyledHeader title="About us" backTitle="About us" classname="-left-44 top-0" />
        </div><h1 className="uppercase text-5xl font-bold lg:text-start text-center">WHO WE ARE</h1>
        <p className="w-[90%] lg:mx-0 mx-auto lg:text-start text-center  leading-8">
          At Game4FunPCs, we take pride in hand-building every PC from the
          ground up—no assembly lines, no mass production. Each system is
          carefully stress-tested and fully optimized to ensure a seamless
          gaming experience from the moment you power on. We use only
          high-quality, future-ready components built to support the latest
          technology and next-gen upgrades. Our pricing is honest and
          transparent—no markups, no gimmicks—just real value passed directly to
          you. As a small, dedicated team, we provide personalized service to
          every customer. Our goal is simple: deliver powerful, visually
          stunning gaming PCs at competitive prices—because gaming for fun
          should never come with compromises.
        </p>
      </div>
    </section>
  );
}

export default About;
