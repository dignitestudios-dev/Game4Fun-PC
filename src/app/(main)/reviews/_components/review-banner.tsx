import GradientUnderlineTitle from '@/components/ui/gradient-underlined-title'
import StyledHeader from '@/components/ui/styled-title'
import React from 'react'

type Props = {}

function ReviewBanner({}: Props) {
  return (
     <div className="relative z-20">

      <div className="absolute bg-[url(/images/shop-bg.png)] -top-28 left-0 bg-no-repeat bg-contain w-screen h-[500px]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#141414] via-[#14141484] to-transparent pointer-events-none z-10" />

 
      <div className="flex flex-col gap-3 justify-center items-center h-[400px] relative z-20">
        <div className="relative">
          <StyledHeader title="reviews" backTitle="reviews" classname="right-[-450%]" />
        </div>
  
        <GradientUnderlineTitle title="Let Us Know What You Think" classname='text-5xl' />
      </div>
    </div>
  )
}

export default ReviewBanner