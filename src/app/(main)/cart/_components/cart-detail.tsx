
import Cart from './cart'
import OrderSummary from './order-summary'


function CartDetails() {
  return (
    <div className='flex md:flex-row flex-col gap-4 justify-between flex-wrap px-4 md:px-16 pb-28' >
        <Cart/>
        <OrderSummary/>
    </div>
  )
}

export default CartDetails