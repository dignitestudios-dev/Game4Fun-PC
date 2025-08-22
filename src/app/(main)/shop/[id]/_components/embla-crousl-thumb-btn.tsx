import Image from 'next/image'
import React from 'react'

type PropType = {
  selected: boolean
  index: number
  onClick: () => void
  img:string
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick , img } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
       <Image src={img} alt='image' width={50} height={50} />
      </button>
    </div>
  )
}
