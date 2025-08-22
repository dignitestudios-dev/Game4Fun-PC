"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ArrowIcon from "../icons/arrow-icon";
import GraphicCardIcon from "../icons/graphic-card-icon";
import CardBtn from "./card-btn";
import Link from "next/link";

interface PCBuildCardProps {
  imageUrl: string;
  caseName: string;
  ram: string;
  gpu: string;
  productName: string;
  description: string;
  processor: string;
  graphicsCard: string;
  ramDetail: string;
  motherboard: string;
  price: number;
  onDetailsClick?: () => void;
}

function ShopCard({
  imageUrl,
  caseName,
  ram,
  gpu,
  productName,
  description,
  processor,
  graphicsCard,
  ramDetail,
  motherboard,
  price,
  onDetailsClick,
}: PCBuildCardProps) {
  return (
    <Link href={"/shop/1"} className="bg-[#2A292959] rounded-2xl group w-[300px]  text-white max-w-sm p-5 flex flex-col gap-4 shadow-lg">
      <div className="flex gap-5 relative py-2">
        <div className="absolute bg-custom-gradient w-[300px] -left-5 h-2 -top-5 rounded-t-2xl z-[10] group-hover:h-72  transition-all duration-500" />
        <div className="flex flex-col gap-8 justify-center text-xs font-semibold z-20 tracking-widest text-white/70">
          <div>
            <h3 className="text-lg text-white">CASE</h3>
            <span className=" font-normal">{caseName}</span>
          </div>
          <div>
            <h3 className="text-lg text-white">RAM</h3>
            <span className=" font-normal">{ram}</span>
          </div>
          <div>
            <h3 className="text-lg text-white">GPU</h3>
            <span className=" font-normal">{gpu}</span>
          </div>
        </div>
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt="PC Build"
          className="rounded-xl w-[100%]  object-cover z-20"
        />
      </div>

      <div>
        <h2 className="text-xl font-bold uppercase tracking-widest pt-8">
          {productName}
        </h2>
        <p className="text-xs text-white/70 leading-relaxed">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-xs text-white/90">
     
        <div className="flex gap-1 items-center">
          <GraphicCardIcon />
          <div>
            {" "}
            <p className="font-medium">Nvidia</p>
            <p>{graphicsCard}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <GraphicCardIcon />
          <div>
            {" "}
            <p className="font-medium">Nvidia</p>
            <p>{graphicsCard}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <GraphicCardIcon />
          <div>
            {" "}
            <p className="font-medium">Nvidia</p>
            <p>{graphicsCard}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <GraphicCardIcon />
          <div>
            {" "}
            <p className="font-medium">Nvidia</p>
            <p>{graphicsCard}</p>
          </div>
        </div>
      
      </div>

      <div className="flex justify-between items-center ">
        <div>
        <h4 className="text-xs" >Price</h4>
        <h1 className="text-gradient text-lg font-semibold">${price}</h1>
        </div>
        <CardBtn title="view details" bgColor="bg-[#1C1B1B]" />
      </div>
    </Link>
  );
}

export default ShopCard;
