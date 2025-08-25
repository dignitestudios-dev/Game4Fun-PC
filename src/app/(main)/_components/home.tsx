"use client"
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Banner from "./banner";
import About from "./about-us";
import Shop from "./shop";
import Benchmark from "./benchmark";
import Services from "./services";
import FAQ from "./faq";
import Partners from "./partners";
import ContactUs from "./contact-us";
import Testimonials from "./testimonials";

function Home() {
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
    < >
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

export default Home;
