"use client";
import ArrowBtn from "@/components/ui/arrow-btn";
import CyclingImageAnimation from "@/components/cycling-image-animation";
import { useState } from "react";
import GetFreeQuote from "./ui/get-free-quote";
import Popup from "@/components/popup";

function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  return (
    <section className="flex  items-center px-4 pb-12 md:px-12 relative overflow-hidden">
      <div className="bg-[url(/images/gradient-bg.png)] bg-no-repeat bg-contain absolute -right-32  w-[70%] h-full" />
      <div className="w-full lg:w-1/2 flex flex-col gap-6 items-start ">
        <h3 className="text-gradient uppercase font-semibold text-sm tracking-widest">
          Welcome to Game4FunPCs
        </h3>
        <div className="space-y-3 font-bold">
          <h1 className="text-3xl md:text-5xl">Custom-Built Gaming Pcs.</h1>
          <h1 className="text-3xl md:text-5xl"> Zero Compromises. All Fun.</h1>
        </div>
        <p className="leading-8  md:w-[85%]">
          At Game4FunPCs, we hand-build every PC with presicion, passion, and
          performance in mind. Whether you’re a casual gamer, competitive
          player, or content creator, we deliver powerful pcs designed around
          your style—and built to last.
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex gap-2 items-center"
        >
          <ArrowBtn title="GET FREE QUOTE" />
        </button>
      </div>
      <CyclingImageAnimation />
      <GetFreeQuote isOpen={isOpen} setIsOpen={setIsOpen} setPopup={setPopup} />
      {popup && (
        <Popup
          title="Submitted"
          description="Quote Submitted Successfully"
          onClose={() => setPopup(false)}
        />
      )}
    </section>
  );
}

export default Banner;
