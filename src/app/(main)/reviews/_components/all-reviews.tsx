"use client"
import React from 'react'
import ReviewSummary from './review-summary'
import ReviewCard from './review-card';
import { useGetAllReviewsQuery } from '@/services/review-api';
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
    name: "Ava Johnson",
    date: "12 June, 2024",
    review:
      "Customer support was very responsive and helped me track my order. Packaging was neat as well.",
    rating: 4,
    avatarUrl: "/avatars/ava.png",
  },
  {
    name: "Michael Brown",
    date: "20 June, 2024",
    review:
      "Decent product for the price. Not perfect, but worth it overall. Delivery could be faster.",
    rating: 3,
    avatarUrl: "/avatars/michael.png",
  },
  {
    name: "Emily Davis",
    date: "5 July, 2024",
    review:
      "Absolutely love it! Exceeded my expectations. Will definitely recommend to my friends.",
    rating: 5,
    avatarUrl: "/avatars/emily.png",
  },
];


function AllReviews() {
  const {data} = useGetAllReviewsQuery({})
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