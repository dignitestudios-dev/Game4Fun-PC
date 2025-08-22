import React from 'react'
import ReviewBanner from './review-banner'
import AllReviews from './all-reviews'

type Props = {}

function Review({}: Props) {
  return (
    <div>
        <ReviewBanner/>
        <AllReviews/>
    </div>
  )
}

export default Review