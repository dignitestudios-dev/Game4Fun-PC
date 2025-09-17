import GradientUnderlineTitle from '@/components/ui/gradient-underlined-title'
import StyledHeader from '@/components/ui/styled-title'
import Image from 'next/image'
import React from 'react'


  const logos = [
    { src: "/images/nvidia.png", alt: "NVIDIA" },
    { src: "/images/amd.png", alt: "AMD" },
    { src: "/images/rog.png", alt: "ASUS ROG" },
    { src: "/images/logo.png", alt: "Main Logo", center: true },
    { src: "/images/giga.png", alt: "Gigabyte" },
    { src: "/images/intel.png", alt: "Intel" },
    { src: "/images/msi.png", alt: "MSI" },
  ];



function Partners() {
  return (
    <div className=' relative bg-[#0f0f0f] py-32'>
      <div className='bg-[url(/images/gradient-bg.png)] w-[100%] hidden lg:block h-full absolute top-0 bg-center  bg-no-repeat' />
           <div className="flex flex-col  items-center justify-center gap-4 w-full" >
           <div className="relative ">
          <StyledHeader title="our partners" backTitle='Partners' classname="-right-[300%] z-30" />
        </div>
            <h1 className="text-5xl font-semibold z-50 md:w-[50%] px-2 text-center">Lorem ipsum dolor sit <span className='text-center'><GradientUnderlineTitle title="Lorem ipsum dolor" classname="text-5xl" /></span> </h1>
       
        </div>
        <div className='py-12' >


    <div className="w-full  py-10 flex justify-center z-50">
      <div className="flex flex-wrap justify-center items-center gap-2">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`flex items-center justify-center bg-[#2A292959] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 rounded-2xl transition-all duration-300
              ${logo.center ? "w-72 h-72 -mx-14 relative z-10 rounded-full bg-opacity" : "w-48 h-28 bg-opacity-60 "}`}
            // style={{
            //   ...(logo.center
            //     ? {
            //         background:
            //           "radial-gradient(circle at center, rgba(193,0,255,0.4), rgba(0,0,0,0) 80%)",
            //       }
            //     : {}),
            // }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.center ? 80 : 70}
              height={logo.center ? 80 : 70}
              className={`${logo.center ? "scale-150" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>


        </div>
    </div>
  )
}

export default Partners