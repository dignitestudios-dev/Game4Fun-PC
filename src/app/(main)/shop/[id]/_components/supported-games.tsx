import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

// const img = [
//    {img: "/images/forza.png", title:"Forza Horizon 5"},
//    {img: "/images/forza.png", title:"Forza Horizon 5"},
//    {img: "/images/forza.png", title:"Forza Horizon 5"},
//    {img: "/images/forza.png", title:"Forza Horizon 5"},
//    {img: "/images/forza.png", title:"Forza Horizon 5"},

// ]
function SupportedGames({product}:{product:Product}) {
  return (
    <div className='py-8'>
        <h1 className='text-2xl font-semibold uppercase mb-4'>supported GAMES </h1>
    <Marquee autoFill>
        {product.supportedGames.map((i,idx)=>(
            <div key={idx} className='bg-[#2A292959] p-4 rounded-2xl mx-2'>
            <Image src={i.image}  alt='img' width={100} height={100} className='w-[100px] h-[60px] object-contain' />
            <h1 className='text-xs text-center pt-3'>{i.gameName}</h1>
        </div>))}
    </Marquee>
  </div>)
}

export default SupportedGames