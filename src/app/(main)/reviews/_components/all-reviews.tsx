"use client"
import React from 'react'
import ReviewSummary from './review-summary'
import ReviewCard from './review-card';
import { useGetAllReviewsQuery } from '@/services/review-api';

function AllReviews() {
  const {data} = useGetAllReviewsQuery();
  const calculateReviewStats = (reviews: any[]) => { //eslint-disable-line
  if (!reviews || reviews.length === 0) {
    return {
      ratingsBreakdown: [
        { stars: 5, count: 0 },
        { stars: 4, count: 0 },
        { stars: 3, count: 0 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
      ],
      averageRating: 0,
    };
  }

  const ratingCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const ratingsBreakdown = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: ratingCounts[stars] || 0,
  }));

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  return { ratingsBreakdown, averageRating };
};

const { ratingsBreakdown, averageRating } = calculateReviewStats(
  data?.data || []
);
  return (
    <div className='px-4 md:px-10'>
 <ReviewSummary
      totalCount={data?.totalCount || 0}
      averageRating={averageRating}
      ratingsBreakdown={ratingsBreakdown}
    />
 <div className='flex flex-wrap gap-5 justify-center py-5'>
      {data?.data.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
 </div>
    </div>
  )
}

export default AllReviews