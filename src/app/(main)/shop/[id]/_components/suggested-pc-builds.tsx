import ShopCard from '@/components/ui/shop-card'
import React from 'react'

type Props = {}
const pc=  {
    imageUrl: '/images/pc.png',
    caseName: 'Corsair iCUE',
    ram: '16 GB',
    gpu: '8 GB',
    productName: 'Gaming Beast X',
    description:
      'Lorem ipsum dolor sit amet consectetur. Malesuada arcu nibh magna mi. Quis rhoncus fringilla ac elit.',
    processor: 'i7 12 Gen',
    graphicsCard: 'RTX 5090',
    ramDetail: '2x 8 GB',
    motherboard: 'MSI 321',
    price: 1500,
    onDetailsClick: () => console.log('Clicked Gaming Beast X'),
  }
function SuggestedPcBuilds({}: Props) {
  return (
    <div className='py-10'>
        <h1 className='text-2xl uppercase font-semibold mb-4'>Suggested Pc Builds</h1>
        <div className='flex justify-between px-12'>
    {([1,2,3,4]).fill(0).map((_,idx)=>(
            <ShopCard {...pc} key={idx} />
        ))}
</div>
    </div>
  )
}

export default SuggestedPcBuilds