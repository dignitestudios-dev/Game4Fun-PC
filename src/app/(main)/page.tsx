"use client"
import { useSearchParams } from "next/navigation";
import About from "./_components/about-us";
import Banner from "./_components/banner";
import Benchmark from "./_components/benchmark";
import ContactUs from "./_components/contact-us";
import FAQ from "./_components/faq";
import Partners from "./_components/partners";
import Services from "./_components/services";
import Shop from "./_components/shop";
import Testimonials from "./_components/testimonials";
import { useEffect } from "react";

function page() {
    const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scroll");
    if (scrollTo) {
      setTimeout(() => {
        const el = document.querySelector(scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [searchParams]);
  return (
    <>
      <Banner />
      <About />
      <Shop />
      <Benchmark />
      <Services />
      <Testimonials />
      <FAQ />
      <Partners />
      <ContactUs />
    </>
  );
}

export default page;
