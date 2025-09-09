"use client";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./embla-crousel";
import GraphicCardIcon from "@/components/icons/graphic-card-icon";
// import { title } from "process";
import CardBtn from "@/components/ui/card-btn";
import ArrowBtn from "@/components/ui/arrow-btn";
import ProcessorIcon from "@/components/icons/processor-icon";
import CpuCase from "@/components/icons/cpu-case";
import RamIcon from "@/components/icons/ram-icon";
import MotherboardIcon from "@/components/icons/mother-board-icon";
import PsuIcon from "@/components/icons/psu-icon";
import StorageIcon from "@/components/icons/storage-icon";
import { useAddToCartMutation } from "@/services/product-api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const OPTIONS: EmblaOptionsType = {};
// const SLIDE_COUNT = 10;
// const SLIDES = [
//   "/images/pc.png",
//   "/images/pc.png",
//   "/images/pc.png",
//   "/images/pc.png",
// ];
// const specs = [
//   {
//     icon: <GraphicCardIcon />,
//     title: "Zotac RTX 5070 Ti 16GB Graphics Card",
//   },
//   {
//     icon: <GraphicCardIcon />,
//     title: "Zotac RTX 5070 Ti 16GB Graphics Card",
//   },
//   {
//     icon: <GraphicCardIcon />,
//     title: "Zotac RTX 5070 Ti 16GB Graphics Card",
//   },
//   {
//     icon: <GraphicCardIcon />,
//     title: "Zotac RTX 5070 Ti 16GB Graphics Card",
//   },
//   {
//     icon: <GraphicCardIcon />,
//     title: "Zotac RTX 5070 Ti 16GB Graphics Card",
//   },
//   {
//     icon: <GraphicCardIcon />,
//     title: "Zotac RTX 5070 Ti 16GB Graphics Card",
//   },
//   {
//     icon: <GraphicCardIcon />,
//     title: "Zotac RTX 5070 Ti 16GB Graphics Card",
//   },
// ];
function ShopDetail({ product }: { product: Product }) {
  const [addToCart] = useAddToCartMutation();
  const router = useRouter();
  const handleAddCart = async () => {
    try {
      const res = await addToCart({
        action: "add",
        quantity: 1,
        productId: product._id,
      }).unwrap();
      toast.success(res.message, {
        style: {
          border: "2px solid #d744d9",
          background: "black",
          color: "white",
          padding: "16px",
        },
        iconTheme: {
          primary: "#d744d9", // checkmark color
          secondary: "black", // circle background
        },
      });
    } catch (error: any) {//eslint-disable-line
      

      console.log(error);
      // toast.error(error.data.message);
    }
  };
  return (
    <div className="relative w-full">
      <div className="bg-[url(/images/p-img.png)] bg-no-repeat bg-contain absolute -top-32 left-0  w-full h-full" />
      {/* <div className="absolute bottom-0 left-0 w-[100vw] h-36 bg-gradient-to-t from-[#141414] via-[#14141484] to-transparent pointer-events-none z-10" /> */}

      <div className="flex flex-wrap gap-4">
        <div className="bg-[url(/images/gradient-bg.png)]  bg-no-repeat bg-contain absolute  w-[100%] h-full" />
        <div className=" md:w-[50%] px-4">
          <EmblaCarousel slides={product.images} options={OPTIONS} />
        </div>
        <div className="md:w-[45%] px-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-xl md:text-3xl font-bold tracking-widest pr-8 uppercase">
                {product.productName}
              </h1>
              <span className="flex items-center gap-1 font-semibold">
                <span>
                  <sup className="text-lg mt-1">$</sup>
                </span>
                <span className="text-gradient text-4xl tracking-wider">
                  {" "}
                  {product.price}
                </span>
              </span>
            </div>
            <p className="text-gradient">
              Typically ships within 2-3 days from purchase
            </p>
            <div className="w-full bg-custom-gradient h-[.9px] " />
            <div className="text-white flex flex-col gap-4 py-4">
              <div>
                <div className="flex gap-5 items-center ">
                  <ProcessorIcon /> {product.details.cpu}
                </div>
              </div>
              <div>
                <div className="flex gap-5 items-center ">
                  <CpuCase /> {product.details.cpuCase}
                </div>
              </div>
              <div>
                <div className="flex gap-5 items-center ">
                  <CpuCase /> {product.details.cpuCooler}
                </div>
              </div>
              <div>
                <div className="flex gap-5 items-center ">
                  <GraphicCardIcon /> {product.details.gpuManufactured}{" "}
                  {product.details.graphicCards}
                </div>
              </div>
              <div>
                <div className="flex gap-5 items-center ">
                  <MotherboardIcon /> {product.details.motherboard}
                </div>
              </div>
              <div>
                <div className="flex gap-5 items-center ">
                  <RamIcon /> {product.details.ram}
                </div>
              </div>
              <div>
                <div className="flex gap-5 items-center ">
                  <StorageIcon /> {product.details.storage}
                </div>
              </div>
              <div>
                <div className="flex gap-5 items-center ">
                  <PsuIcon /> {product.details.powerSupply}
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <button onClick={handleAddCart}>
                <ArrowBtn title="add to cart" />{" "}
              </button>
              <button
                onClick={async () => {
                  try {
                    const res = await addToCart({
                      action: "add",
                      quantity: 1,
                      productId: product._id,
                    }).unwrap();
                    toast.success(res.message, {
                      style: {
                        border: "2px solid #d744d9",
                        background: "black",
                        color: "white",
                        padding: "16px",
                      },
                      iconTheme: {
                        primary: "#d744d9",
                        secondary: "black",
                      },
                    });
                    router.push("/cart");
                  } catch (error: any) {       //eslint-disable-line
             

                    console.log(error);
                    // toast.error(error.data.message);
                  }
                }}
              >
                <CardBtn title="buy now" bgColor="bg-[#171616]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetail;
