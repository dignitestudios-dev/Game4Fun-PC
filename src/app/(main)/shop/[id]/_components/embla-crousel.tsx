import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    if (emblaThumbsApi) {
      emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="flex flex-col items-center">
      {/* Main Carousel */}
      <div className="embla w-full max-w-[650px]">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {slides.map((img, index) => (
              <div className="embla__slide flex justify-center" key={index}>
                <div className=" flex items-center justify-center rounded-xl">
                  <Image
                    src={img}
                    alt="carousel-img"
                    width={500}
                    height={500}
                    className="rounded-xl w-[500px]  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 h-[500px] object-contain p-10"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="embla-thumbs mt-4 w-full max-w-[650px] mx-auto">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex gap-3 justify-center">
            {slides.map((img, index) => (
              <button
                key={index}
                onClick={() => onThumbClick(index)}
                className={`rounded-lg overflow-hidden border-2 transition 
                  ${
                    index === selectedIndex
                      ? "border-purple-500"
                      : "border-transparent"
                  }`}
              >
                <Image
                  src={img}
                  alt={`thumb-${index}`}
                  width={100}
                  height={80}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
