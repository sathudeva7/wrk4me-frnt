import React from "react";
import { UserCircleIcon, StarIcon } from "@heroicons/react/24/outline";

const ReviewCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 max-w-md w-full text-left mb-2">
      <div className="flex items-center">
	 <div className="flex-none w-16 h-16 mr-4">
        <img
          className="w-16 h-16 rounded-full"
          src="../public/img/person.png"
          alt="A&D Construction Service Logo"
        />
      </div>
	 <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <span className="font-semibold text-sm">Sampath rubasinghe</span>
        <span className="text-gray-500 text-xs">3M ago</span>
      </div>
	 <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className="text-yellow-400 w-4 h-4"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-sm text-gray-600">
	 for the job Repair my Gas cocker Thanks "Hasaranga"👍
      </p>
	 </div>
	 </div>
    </div>
  );
};

export default ReviewCard;
