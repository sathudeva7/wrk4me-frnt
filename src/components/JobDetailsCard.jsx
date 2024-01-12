import React from "react";
import {
  PhoneIcon,
  ClockIcon,
  CalendarIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import ReviewCard from "../ReviewCard";

const JobDetailsCard = ({customerName, location, jobDescription}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-full md:max-w-3xl mb-2">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-4">
          <div className="flex-none w-16 h-16 mr-4">
            <img
              className="w-16 h-16 rounded-full"
              src="../public/img/person.png"
              alt="A&D Construction Service Logo"
            />
          </div>
          <div>
            <h2 className="font-bold text-lg">{customerName}</h2>
            <div className="flex flex-col items-center mt-1">
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
              <div className="rounded-full p-2 bg-slate-300">
                <PhoneIcon className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow sm:text-left text-center">
          <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full w-12 text-center mb-4 md:mb-0">
            New
          </div>
          <h3 className="font-bold text-xl mb-2">need a Electricians</h3>
          <p className="text-gray-600">Electricians</p>
          <div className="flex my-2">
            <MapPinIcon className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-800">{location?.address}</span>
          </div>
          <div className="flex font-semibold mb-2">
            <div className="flex flex-col items-left">
              <div className="text-gray-500">DUE DATE</div>
              <div className="flex">
                <CalendarIcon className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-800">October 16</span>
              </div>
            </div>
            <div className="flex flex-col items-left ml-4">
              <div className="text-gray-500">POSTED</div>
              <div className="flex">
                <ClockIcon className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-800">15 Sep 23</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-left font-semibold mb-4">
            <div className="text-gray-500">DESCRIPTION</div>
            <span className="text-gray-800">
              {jobDescription}
            </span>
          </div>
          <div className="flex flex-col items-left font-semibold mb-4">
            <div className="text-gray-500">IMAGE</div>
            <img
              className="w-full h-auto"
              src="../public/img/person.png"
              alt="Job Description"
            />
          </div>
		<div className="flex flex-col items-left font-semibold mb-4">
            <div className="text-gray-500">ASSIGNED TO</div>
            <span className="text-gray-800">
              <ReviewCard />
            </span>
          </div>
          <div className="flex flex-col items-left font-semibold mb-4">
            <div className="text-gray-500">COMMENTS</div>
            <div className="text-center rounded-lg border p-4">
              <button className="text-blue-600 hover:text-blue-800">
                Please login to post a comment for this job
              </button>
            </div>
          </div>

          {/* ... other contents ... */}
        </div>
        <div className="flex-none md:ml-8 md:mt-0 rounded-sm border p-2 h-32 item-center">
          <div className="text-gray-800 font-semibold mb-2 flex flex-col items-center justify-between">
            <span>TASK BUDGET</span>
            <span>RS 2500</span>
          </div>
          <hr></hr>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full mt-2">
            Apply
          </button>
        </div>
      </div>
      {/* Responsive image container */}
      {/* ... other contents ... */}
    </div>
  );
};

export default JobDetailsCard;
