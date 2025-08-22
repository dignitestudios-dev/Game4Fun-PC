import ArrowBtn from "@/components/ui/arrow-btn";
import Image from "next/image";

function Banner() {
  return (
    <section className="flex items-center px-4 pb-12 md:px-12 relative overflow-hidden">
      <div className="bg-[url(/images/gradient-bg.png)] bg-no-repeat bg-contain absolute -right-32  w-[70%] h-full" />
      <div className="w-full md:w-1/2 flex flex-col gap-6 items-start z-50">
        <h3 className="text-gradient uppercase text-sm tracking-widest">
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
        <button className="flex gap-2 items-center">
     
          <ArrowBtn title="GET FREE QUOTE"/>
        </button>
      </div>
      <div className="w-1/2 z-10 hidden md:block">
      <Image src={"/images/banner.png"} alt="banner-img" width={1000} height={1000} /></div>
    </section>
  );
}

export default Banner;
