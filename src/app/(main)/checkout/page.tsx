
import React, { Suspense } from 'react'
import Checkout from './_components/checkout'


function page() {
  return (
    <Suspense><Checkout/></Suspense>
  )
}

export default page