import React from "react";
import {
  EyeIcon,
  ShareIcon,
  ChatBubbleBottomCenterIcon,
  BanknotesIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Card = ({
  customerName,
  jobTitle,
  state,
  isUrgent,
  createdAt,
  category,
  profilePic,
  date,
  jobDescription,
  price,
  commentCount,
  bidCount,
  address,
  id
}) => {
  const navigate = useNavigate();
  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    const options = { month: "short", day: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date; // difference in milliseconds

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); // convert to days
    const diffMonths = Math.floor(diffDays / 30); // approximate months
    const diffYears = Math.floor(diffDays / 365); // approximate years

    if (diffYears > 0) {
      return diffYears + (diffYears === 1 ? " year" : " years") + " ago";
    } else if (diffMonths > 0) {
      return diffMonths + (diffMonths === 1 ? " month" : " months") + " ago";
    } else {
      return diffDays + (diffDays === 1 ? " day" : " days") + " ago";
    }
  }

  const viewJobDetails = (jobId) => {
    navigate(`/jobs/${jobId}`)
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-2 max-w-md text-left mb-2">
      <div className="flex space-x-2 mb-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-bold text-sm">{customerName}</div>
          <div className="text-gray-500 text-xs">{timeAgo(createdAt)}</div>
        </div>
      </div>
      <div className="border-l-4 border-green-500 pl-2 mb-4">
        <div className="text-green-600 text-xs font-bold uppercase">
          {state?.toUpperCase()}
        </div>
        <div className="text-lg font-bold">{jobTitle}</div>
        <div className="text-gray-400 text-xs font-bold uppercase">
          {isUrgent ? "Urgent" : formatDate(date)} |{" "}
          <span className="text-gray-500">{category}</span>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex-1 flex justify-center items-center text-xs font-bold pr-2">
          <BanknotesIcon className="h-5 w-5 mr-1" />{" "}
          {price ? "RS." + price : "not mentioned"}
        </div>
        <div className="flex-1 flex justify-center items-center text-xs font-bold">
          <MapPinIcon className="h-5 w-5 mr-1" />
          {address}
        </div>
      </div>
      <div className="text-sm mb-4">{jobDescription}</div>
      <div className="flex space-x-4 text-gray-500 text-sm">
        <div>{commentCount} Comments</div>
        <div>{bidCount} Applied</div>
      </div>
      <div className="flex border-t pt-4 space-x-4 text-gray-500 text-sm">
        <button className="flex-1 flex justify-center items-center" onClick={() => viewJobDetails(id)}>
          <EyeIcon className="h-5 w-5 mr-1" />
          View
        </button>
        <button className="flex-1 flex justify-center items-center">
          <ChatBubbleBottomCenterIcon className="h-5 w-5 mr-1" />
          Comment
        </button>
        <button className="flex-1 flex justify-center items-center">
          <ShareIcon className="h-6 w-6 mr-1" aria-hidden="true" />
          Share
        </button>
      </div>
    </div>
  );
};

export default Card;
