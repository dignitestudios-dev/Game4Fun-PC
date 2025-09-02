import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./embla-crousel";
import GraphicCardIcon from "@/components/icons/graphic-card-icon";
// import { title } from "process";
import CardBtn from "@/components/ui/card-btn";
import ArrowBtn from "@/components/ui/arrow-btn";
const OPTIONS: EmblaOptionsType = {};
// const SLIDE_COUNT = 10;
const SLIDES = [
  "/images/pc.png",
  "/images/pc.png",
  "/images/pc.png",
  "/images/pc.png",
];
const specs = [
  {
    icon: <GraphicCardIcon />,
    title: "Zotac RTX 5070 Ti 16GB Graphics Card",
  },
  {
    icon: <GraphicCardIcon />,
    title: "Zotac RTX 5070 Ti 16GB Graphics Card",
  },
  {
    icon: <GraphicCardIcon />,
    title: "Zotac RTX 5070 Ti 16GB Graphics Card",
  },
  {
    icon: <GraphicCardIcon />,
    title: "Zotac RTX 5070 Ti 16GB Graphics Card",
  },
  {
    icon: <GraphicCardIcon />,
    title: "Zotac RTX 5070 Ti 16GB Graphics Card",
  },
  {
    icon: <GraphicCardIcon />,
    title: "Zotac RTX 5070 Ti 16GB Graphics Card",
  },
  {
    icon: <GraphicCardIcon />,
    title: "Zotac RTX 5070 Ti 16GB Graphics Card",
  },
];
function ShopDetail() {
  return (
    <div className="relative w-full">
      <div className="bg-[url(/images/p-img.png)] bg-no-repeat bg-contain absolute -top-32 left-0  w-full h-full" />
      {/* <div className="absolute bottom-0 left-0 w-[100vw] h-36 bg-gradient-to-t from-[#141414] via-[#14141484] to-transparent pointer-events-none z-10" /> */}

      <div className="flex flex-wrap gap-4">
        <div className="bg-[url(/images/gradient-bg.png)]  bg-no-repeat bg-contain absolute  w-[100%] h-full" />
        <div className=" md:w-[50%] px-4">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div className="md:w-[45%] px-4 z-50">
          <div className="flex flex-col gap-2">
            <div className="flex ">
              <h1 className="text-xl md:text-3xl font-bold tracking-widest pr-8 uppercase">
                Odin 1.0 – Ryzen 9 9950X & RTX 5070 Ti 16GB
              </h1>
              <span className="flex items-center gap-1 font-semibold">
                <span>
                  <sup className="text-lg mt-1">$</sup>
                </span>
                <span className="text-gradient text-4xl tracking-wider">
                  {" "}
                  1500
                </span>
              </span>
            </div>
            <p className="text-gradient">
              Typically ships within 2-3 days from purchase
            </p>
            <div className="w-full bg-custom-gradient h-[.9px] " />
            <div className="text-white flex flex-col gap-4 py-4">
              {specs.map((sp, idx) => (
                <div key={idx}>
                  <div className="flex gap-5 items-center ">
                    {sp.icon} {sp.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-8">
              <ArrowBtn title="add to cart" />{" "}
              <CardBtn title="but now" bgColor="bg-[#171616]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetail;
