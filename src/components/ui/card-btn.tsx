import React from 'react'
import ArrowIcon from '../icons/arrow-icon'
import { cn } from '@/lib/utils';

type Props = {
    bgColor?: string;
    title:string
}

function CardBtn({bgColor , title}: Props) {
  return (
    <button
          //   onClick={onDetailsClick}
          className="flex items-center gap-2 mr-3 cursor-pointer text-white font-medium "
        >
          <span className={cn(bgColor? bgColor : "bg-transparent"," text-sm uppercase -mr-4 z-50 p-2 px-1" )}>
            {title}
          </span>{" "}
          <div className="bg-[linear-gradient(to_right,#C100FF,#FFBE96)] p-[1.2px] rounded-full flex">
            <div className={cn(bgColor? bgColor : "bg-transparent"," rounded-full  w-10 h-10 flex  items-center justify-center")}>
              <ArrowIcon />
            </div>
          </div>
        </button>
  )
}

export default CardBtn