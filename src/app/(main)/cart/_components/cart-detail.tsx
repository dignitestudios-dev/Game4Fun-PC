
import Cart from './cart'
import OrderSummary from './order-summary'

type Props = {}

function CartDetails({}: Props) {
  return (
    <div className='flex gap-4 justify-between  px-16 pb-28' >
        <Cart/>
        <OrderSummary/>
    </div>
  )
}

export default CartDetails