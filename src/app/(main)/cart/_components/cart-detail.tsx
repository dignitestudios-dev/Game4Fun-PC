"use client"
import { useGetCartQuery } from '@/services/product-api'
import Cart from './cart'
import OrderSummary from './order-summary'
import Loader from '@/components/ui/loader';


function CartDetails() {
  const {data ,isLoading } =  useGetCartQuery();
  if(isLoading && !data) return <Loader/>
  if(data)
  return (
    <div className='flex md:flex-row flex-col gap-4 justify-between flex-wrap px-4 md:px-16 pb-28' >
        <Cart cart={data.cart!} />
        <OrderSummary cart={data.cart!}/>
    </div>
  )
}

export default CartDetails