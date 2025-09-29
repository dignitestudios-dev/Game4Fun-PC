import Image from "next/image";
import React from "react";

interface ReviewCardProps {
  title: string;
  review: string;
  rating: number;
  userData: {
    fullName: string;
    email: string;
    profilePicture: string | null;
  };
  createdAt: string;

}

export default function ReviewCard({
  title,
  review,
  rating,
 
  userData,
  createdAt,
 
}: ReviewCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-[#1A1A1A] w-full lg:w-[48%] text-white p-4 rounded-lg shadow-md space-y-3">
      {/* Review Image */}
      {/* {picture && (
        <div className="w-full h-48 rounded-lg overflow-hidden mb-3">
          <Image
            width={500}
            height={300}
            src={picture}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )} */}

      {/* Title */}
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      {/* Star Rating */}
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

      {/* Review Text */}
      <p className="text-gray-300 text-sm line-clamp-3">{review}</p>

      {/* User Info */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-700">
        <div className="flex items-center gap-3">
          {userData.profilePicture ? (
            <Image
              width={300}
              height={300}
              src={userData.profilePicture}
              alt={userData.fullName}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
              {userData.fullName.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="text-sm font-semibold">{userData.fullName}</p>
            <p className="text-xs text-gray-500">{formatDate(createdAt)}</p>
          </div>
        </div>

        {/* Status Badge */}
        {/* <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === "pending"
              ? "bg-yellow-500/20 text-yellow-500"
              : status === "accepted"
              ? "bg-green-500/20 text-green-500"
              : "bg-red-500/20 text-red-500"
          }`}
        >
          {status}
        </span> */}
      </div>
    </div>
  );
}