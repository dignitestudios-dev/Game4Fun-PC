"use client";

import React from "react";
import Image from "next/image";
import GraphicCardIcon from "../icons/graphic-card-icon";
import CardBtn from "./card-btn";
import Link from "next/link";
import ProcessorIcon from "../icons/processor-icon";
import RamIcon from "../icons/ram-icon";
import MotherboardIcon from "../icons/mother-board-icon";

function ShopCard({
  _id,
  productName,
  description,
  price,
  images,
  details,
}: Product) {
  return (
    <Link
      href={`/shop/${_id}`}
      className="bg-[#2A292959] rounded-2xl group w-[300px] text-white max-w-sm p-5 flex flex-col gap-4"
    >
      <div className="flex justify-between relative py-2">
        <div className="absolute bg-custom-gradient w-[300px] -left-5 h-2 -top-5 rounded-t-2xl z-[10] group-hover:h-72 transition-all duration-500" />
        <div className="flex flex-col gap-8 justify-center text-xs font-semibold z-20 tracking-widest text-white/70">
          <div>
            <h3 className="text-lg text-white">CASE</h3>
            <span className="font-normal line-clamp-2 block w-24">
              {details?.cpuCase}
            </span>
          </div>
          <div>
            <h3 className="text-lg text-white">RAM</h3>
            <span className="font-normal line-clamp-2 block w-24">
              {details?.pcRam} GB
            </span>
          </div>
          <div>
            <h3 className="text-lg text-white">GPU</h3>
            <span className="font-normal line-clamp-2 block w-24">
              {details?.gpu} GB
            </span>
          </div>
        </div>
        <Image
          src={images?.[0]?.file ? images?.[0].file : ""}
          width={500}
          height={500}
          alt="PC Build"
          className="rounded-xl w-40 h-52 object-cover z-20"
        />
      </div>

      <div>
        <h2 className="text-xl font-bold uppercase tracking-widest pt-12 line-clamp-2">
          {productName}
        </h2>
        <p className="text-xs h-[50px] text-white/70  line-clamp-2">
          {description}
        </p>
      </div>

      <div className="grid h-[150px] grid-cols-2 gap-4 text-xs text-white/90">
        <div className="flex gap-1 items-center">
          <div className="w-1/5">
            <ProcessorIcon />
          </div>
          <div>
            <p className="font-light line-clamp-2">{details?.processorManufactured}</p>
            <p className="text-[14px] line-clamp-2">{details?.processor}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-1/5">
            <GraphicCardIcon />
          </div>
          <div>
            <p className="font-light line-clamp-2">{details?.gpuManufactured}</p>
            <p className="text-[14px] line-clamp-2">{details?.graphicCards}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-1/5">
            <RamIcon />
          </div>
          <div>
            <p className="font-light line-clamp-2">{details?.ramManufactured}</p>
            <p className="text-[14px] line-clamp-2">{details?.ram}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-1/5">
            <MotherboardIcon />
          </div>
          <div>
            <p className="font-light">Motherboard</p>
            <p className="text-[14px] line-clamp-2">{details?.motherboard}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-xs">Price</h4>
          <h1 className="text-gradient text-lg font-semibold">${price}</h1>
        </div>
        <CardBtn title="view details" bgColor="bg-[#1C1B1B]" />
      </div>
    </Link>
  );
}

export default ShopCard;
