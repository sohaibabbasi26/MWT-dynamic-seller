import React from "react";

const StarRating = ({ rating , totalStars = 5 }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1; // 1-based index for stars
        return (
          <svg
            key={starIndex}
            xmlns="http://www.w3.org/2000/svg"
            fill={starIndex <= rating ? "currentColor" : "none"} // Fill based on rating
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-5 h-5 ${
              starIndex <= rating ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.164 6.65a1 1 0 00.95.69h6.999c.969 0 1.371 1.24.588 1.81l-5.687 4.138a1 1 0 00-.364 1.118l2.165 6.651c.3.921-.755 1.688-1.538 1.118l-5.686-4.138a1 1 0 00-1.176 0l-5.686 4.138c-.783.57-1.838-.197-1.538-1.118l2.165-6.65a1 1 0 00-.364-1.119L2.297 12.08c-.783-.57-.381-1.81.588-1.81h6.999a1 1 0 00.95-.69l2.164-6.65z"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
