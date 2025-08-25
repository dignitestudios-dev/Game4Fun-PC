import Image from "next/image";
import React from "react";

interface ReviewCardProps {
  name: string;
  date: string;
  review: string;
  rating: number;
  avatarUrl?: string;
}

export default function ReviewCard({
  name,
  date,
  review,
  rating,
  avatarUrl,
}: ReviewCardProps) {
  return (
    <div className="bg-[#1A1A1A] w-full lg:w-[48%] text-white p-4 rounded-lg shadow-md  space-y-3">
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill={i < rating ? "currentColor" : "none"}
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

      <p className="text-gray-300 text-sm">{review}</p>

      <div className="flex items-center gap-3">
        {avatarUrl ? (
          <Image
            width={300}
            height={300}
            src={avatarUrl}
            alt={name}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
}
