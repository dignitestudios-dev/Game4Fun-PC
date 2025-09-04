"use client";
import ArrowBtn from "@/components/ui/arrow-btn";
import GradientUnderlineTitle from "@/components/ui/gradient-underlined-title";
import ShopCard from "@/components/ui/shop-card";
import StyledHeader from "@/components/ui/styled-title";
import { useGetAllProductsQuery } from "@/services/product-api";
import Link from "next/link";
// const pcBuildsData = [
//   {
//     imageUrl: "/images/pc.png",
//     caseName: "Corsair iCUE",
//     ram: "16 GB",
//     gpu: "8 GB",
//     productName: "Gaming Beast X",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Malesuada arcu nibh magna mi. Quis rhoncus fringilla ac elit.",
//     processor: "i7 12 Gen",
//     graphicsCard: "RTX 5090",
//     ramDetail: "2x 8 GB",
//     motherboard: "MSI 321",
//     price: 1500,
//     onDetailsClick: () => console.log("Clicked Gaming Beast X"),
//   },
//   {
//     imageUrl: "/images/pc.png",
//     caseName: "NZXT H510",
//     ram: "32 GB",
//     gpu: "12 GB",
//     productName: "Creator Pro Z",
//     description:
//       "Powerful setup for creators and professionals. Run any software with ease and speed.",
//     processor: "i9 13 Gen",
//     graphicsCard: "RTX 4080",
//     ramDetail: "2x 16 GB",
//     motherboard: "ASUS Prime Z690",
//     price: 2100,
//     onDetailsClick: () => console.log("Clicked Creator Pro Z"),
//   },
//   {
//     imageUrl: "/images/pc.png",
//     caseName: "Lian Li PC-O11",
//     ram: "64 GB",
//     gpu: "24 GB",
//     productName: "AI Developer Rig",
//     description:
//       "Built for machine learning and high-performance computing tasks. Perfect for developers.",
//     processor: "Threadripper Pro",
//     graphicsCard: "RTX 4090",
//     ramDetail: "4x 16 GB",
//     motherboard: "Gigabyte TRX40",
//     price: 3500,
//     onDetailsClick: () => console.log("Clicked AI Developer Rig"),
//   },
//   {
//     imageUrl: "/images/pc.png",
//     caseName: "Lian Li PC-O11",
//     ram: "64 GB",
//     gpu: "24 GB",
//     productName: "AI Developer Rig",
//     description:
//       "Built for machine learning and high-performance computing tasks. Perfect for developers.",
//     processor: "Threadripper Pro",
//     graphicsCard: "RTX 4090",
//     ramDetail: "4x 16 GB",
//     motherboard: "Gigabyte TRX40",
//     price: 3500,
//     onDetailsClick: () => console.log("Clicked AI Developer Rig"),
//   },
// ];
function Shop() {
  const { data } = useGetAllProductsQuery({ limit: "4" });
  console.log(data);
  return (
    <div className="md:p-14 p-2 py-14 relative">
      <div className="flex flex-wrap gap-8 justify-center md:justify-between items-center">
        <div className="flex flex-col gap-2">
          <StyledHeader
            title="Shop"
            classname="left-12 top-16 text-center md:text-start"
            backTitle="Shop"
          />
          <h1 className="uppercase text-3xl md:text-5xl text-center md:text-start">
            READY TO SHIP SYSTEMS
          </h1>
          <GradientUnderlineTitle
            title="Choose Your Gaming Level"
            classname="text-3xl md:text-5xl text-center md:text-start"
          />
        </div>

        <Link href={"/shop"}>
          <ArrowBtn title="View More" />
        </Link>
      </div>
      <div className="flex gap-16 flex-wrap justify-center py-6">
        {data?.products.map((build, index) => (
          <ShopCard key={index} {...build} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
