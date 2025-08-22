import React from 'react'
import ReviewSummary from './review-summary'
import ReviewCard from './review-card';

type Props = {}
const reviews = [
  {
    name: "Jason Cruz",
    date: "27 April, 2024",
    review:
      "Amazing product! I booked on Monday and I got my order on the next day. I'm highly impressed with their services. Highly recommended!",
    rating: 4,
    avatarUrl: "/avatars/jason.png", // optional
  },
  {
    name: "Sophia Lee",
    date: "15 May, 2024",
    review:
      "Great service and quality. Delivery was faster than expected. Will purchase again.",
    rating: 5,
    avatarUrl: "/avatars/sophia.png",
  },
  {
    name: "Daniel Smith",
    date: "2 June, 2024",
    review:
      "Product quality is good, but shipping took longer than promised.",
    rating: 3,
  },
  {
    name: "Daniel Smith",
    date: "2 June, 2024",
    review:
      "Product quality is good, but shipping took longer than promised.",
    rating: 3,
  },
  {
    name: "Daniel Smith",
    date: "2 June, 2024",
    review:
      "Product quality is good, but shipping took longer than promised.",
    rating: 3,
  },
  {
    name: "Daniel Smith",
    date: "2 June, 2024",
    review:
      "Product quality is good, but shipping took longer than promised.",
    rating: 3,
  },
];

function AllReviews({}: Props) {
  return (
    <div className='px-4 md:px-10'>
 <ReviewSummary/>
 <div className='flex flex-wrap gap-5 justify-center py-5'>
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
 </div>
    </div>
  )
}

export default AllReviews