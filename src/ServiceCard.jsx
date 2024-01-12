import React from "react";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/outline";

const ServiceCard = () => {
  return (
    <div className="max-w-screen-sm rounded overflow-hidden shadow-lg bg-white flex flex-col sm:flex-row items-center p-4 mb-2 sm:text-left text-center">
      <div className="w-full sm:w-28 sm:h-28 mb-4 sm:mb-0 sm:mr-4 flex justify-center sm:flex-none">
        <img
          className="w-24 h-24 sm:w-28 sm:h-28 rounded" // Adjusted sizes for responsiveness
          src="../public/img/person.png"
          alt="A&D Construction Service Logo"
        />
      </div>
      <div className="flex-grow">
        <h2 className="font-bold text-lg sm:text-xl">
          A&D construction services
        </h2>
        <p className="text-gray-600 text-sm sm:text-base font-bold">
          All category |{" "}
          <span className="font-normal">Member since Oct 2019</span>
        </p>
        <p className="text-gray-800 text-sm sm:text-base">Colombo</p>
        <p className="font-bold text-sm sm:text-base">077 7455 ####</p>
      </div>
      <div className="flex-none ml-4 text-center sm:text-right">
        <div className="inline-flex items-center bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
          <CheckBadgeIcon className="h-4 w-4 mr-1" aria-hidden="true" />
          Premium
        </div>
        <div className="flex flex-col items-center sm:items-end mt-1">
          <div className="flex flex-row">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="text-yellow-400 w-4 h-4"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-gray-600 text-xs sm:text-sm ml-2">
            Job Count (75)
          </span>
        </div>
        <button className="bg-red-500 hover:bg-red-700 text-white text-xs sm:text-sm font-bold py-2 px-4 rounded mt-2">
          View profile
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
