import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface AnimationConfig {
  enter: {
    x?: string | number;
    y?: string | number;
    scale?: number;
    rotate?: number;
    opacity: number;
  };
  exit: {
    x?: string | number;
    y?: string | number;
    scale?: number;
    rotate?: number;
    opacity: number;
  };
  delay: number;
}

interface ImageConfig {
  src: string;
  alt: string;
  className: string;
  width: number;
  height: number;
  animationConfig: AnimationConfig;
}

type AnimationPhase = "in" | "visible" | "out";

const CyclingImageAnimation: React.FC = () => {
  const [currentImageSet, setCurrentImageSet] = useState<number>(0);
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>("in");
  
  // Define your image sets with multiple images
  const imageSets: ImageConfig[][] = [
    // First set of images
    [
      {
        src: "/images/hero/img-pc1.png",
        alt: "pc1",
        className: "absolute right-20 top-0",
        width: 500,
        height: 500,
        animationConfig: {
          enter: { x: "100%", opacity: 0 },
          exit: { x: "100%", opacity: 0 },
          delay: 0.3
        }
      },
      {
        src: "/images/hero/img-pc2.png",
        alt: "pc2",
        className: "absolute left-0 top-40",
        width: 300,
        height: 300,
        animationConfig: {
          enter: { x: "-100%", opacity: 0 },
          exit: { x: "-100%", opacity: 0 },
          delay: 0
        }
      },
    ],
    // Second set of images
    [
        {
            src: "/images/hero/motherboard.png",
            alt: "pc6",
            className: "absolute left-0 top-12",
            width: 500,
            height: 500,
            animationConfig: {
                enter: { x: "-100%", opacity: 0 },
                exit: { x: "-100%", opacity: 0 },
                delay: 0
            }
        },
        {
          src: "/images/hero/ram.png",
          alt: "pc5",
          className: "absolute right-24 -bottom-8",
          width: 400,
          height: 400,
          animationConfig: {
            enter: { x: "100%", opacity: 0 },
            exit: { x: "100%", opacity: 0 },
            delay: 0.3
          }
        },
    
    ],
    // Third set of images
    [
      {
        src: "/images/hero/gp1.png",
        alt: "pc8",
        className: "absolute right-32 bottom-32  ",
        width: 400,
        height: 400,
        animationConfig: {
               enter: { x: "100%", opacity: 0 },
            exit: { x: "100%", opacity: 0 },
          delay: 0.2
        }
      },
      {
        src: "/images/hero/gp2.png",
        alt: "pc9",
        className: "absolute left-10 top-20",
        width: 400,
        height: 400,
        animationConfig: {
          enter: { x: "-100%", y: "100%", opacity: 0 },
          exit: { x: "-100%", y: "100%", opacity: 0 },
          delay: 0.5
        }
      }
    ],
    [
      
      {
        src: "/images/hero/fans.png",
        alt: "pc8",
        className: "absolute right-32 top-0  ",
        width: 400,
        height: 400,
        animationConfig: {
               enter: { x: "100%", opacity: 0 },
            exit: { x: "100%", opacity: 0 },
          delay: 0.2
        }
      },
      {
        src: "/images/hero/psu.png",
        alt: "pc9",
        className: "absolute -left-10 top-20 z-50",
        width: 350,
        height: 350,
        animationConfig: {
          enter: { x: "-100%", y: "100%", opacity: 0 },
          exit: { x: "-100%", y: "100%", opacity: 0 },
          delay: 0.5
        }
      },
      {
        src: "/images/hero/fans2.png",
        alt: "pc9",
        className: "absolute -left-10 bottom-0",
        width: 700,
        height: 700,
        animationConfig: {
          enter: { x: "-100%", y: "100%", opacity: 0 },
          exit: { x: "-100%", y: "100%", opacity: 0 },
          delay: 0.5
        }
      }
    ]
  ];

  useEffect(() => {
    const phaseTimer = setTimeout(() => {
      if (animationPhase === "in") {
        setAnimationPhase("visible");
      } else if (animationPhase === "visible") {
        setAnimationPhase("out");
      } else if (animationPhase === "out") {
        setCurrentImageSet((prev: number) => (prev + 1) % imageSets.length);
        setAnimationPhase("in");
      }
    }, animationPhase === "visible" ? 3000 : 1500); // Stay visible for 3s, transitions take 1.5s

    return () => clearTimeout(phaseTimer);
  }, [animationPhase, imageSets.length]);

  const getAnimationProps = (imageConfig: ImageConfig) => {
    const { animationConfig } = imageConfig;
    
    switch (animationPhase) {
      case "in":
        return {
          initial: animationConfig.enter,
          animate: { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 },
          transition: { 
            duration: 1.2, 
            ease: "easeOut" as const, 
            delay: animationConfig.delay 
          }
        };
      case "visible":
        return {
          initial: { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 },
          animate: { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 },
          transition: { duration: 0 }
        };
      case "out":
        return {
          initial: { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 },
          animate: animationConfig.exit,
          transition: { 
            duration: 1.2, 
            ease: "easeOut" as const, 
            delay: animationConfig.delay 
          }
        };
      default:
        return {};
    }
  };

  return (
    <div className="w-1/2 relative h-[80vh] z-10 hidden md:block overflow-hidden">
      {imageSets[currentImageSet].map((imageConfig: ImageConfig, index: number) => (
        <motion.div
          key={`image-${currentImageSet}-${index}-${animationPhase}`}
          className={imageConfig.className}
          {...getAnimationProps(imageConfig)}
        >
          <Image
            src={imageConfig.src}
            alt={imageConfig.alt}
            width={imageConfig.width}
            height={imageConfig.height}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CyclingImageAnimation;