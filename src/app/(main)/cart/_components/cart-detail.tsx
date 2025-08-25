
import Cart from './cart'
import OrderSummary from './order-summary'


function CartDetails() {
  return (
    <div className='flex gap-4 justify-between  px-16 pb-28' >
        <Cart/>
        <OrderSummary/>
    </div>
  )
}

export default CartDetails