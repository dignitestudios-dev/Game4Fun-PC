import React from "react";

interface RatingData {
  stars: number;
  count: number;
}

interface Props {
  totalCount: number;
  averageRating: number;
  ratingsBreakdown: RatingData[];
}

export default function ReviewSummary({
  totalCount,
  averageRating,
  ratingsBreakdown,
}: Props) {
  const totalReviews = ratingsBreakdown.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className="p-4 rounded-lg w-full space-y-3">
      <div className="flex items-center gap-2">
        <p className="font-semibold">Reviews</p>
        <span className="text-gray-400 text-sm">({totalCount})</span>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill={i < Math.floor(averageRating) ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.974 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.974-2.888a1 1 0 00-1.176 0l-3.974 2.888c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.987 9.101c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z"
              />
            </svg>
          ))}
        </div>
        <p className="text-gray-300 text-sm font-semibold">
          {averageRating.toFixed(1)}
        </p>
        <p className="text-gray-400 text-sm">out of 5</p>
      </div>

      <div className="space-y-2">
        {ratingsBreakdown
          .sort((a, b) => b.stars - a.stars)
          .map(({ stars, count }) => {
            const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
            return (
              <div key={stars} className="flex items-center gap-2">
                <span className="text-sm text-gray-300 w-12">
                  {stars} star{stars !== 1 ? "s" : ""}
                </span>
                <div className="flex-1 bg-[#D9D9D980] h-2 rounded">
                  <div
                    className="bg-yellow-400 h-2 rounded transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-300 w-6 text-right">
                  {count}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}