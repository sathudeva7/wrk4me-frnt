import React from 'react';
import { PhoneIcon, ChatBubbleBottomCenterIcon, ClipboardDocumentCheckIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import ReviewCard from './ReviewCard';

const ServiceDetails = () => {
  const categories = [
    'House Painting', 'Plumbing', 'Electricians', 'Masonry', 'Constructions',
    'Wood Works', 'Glass & Aluminium', 'Landscaping', 'House/Office Cleaning',
    // ... more categories
  ];

  return (
    <div className="bg-white sm:flex flex-row shadow-lg rounded-lg p-4 max-w-2xl mb-2">
      <div className="flex-none sm:w-28 sm:h-28 w-32 h-16 mb-4">
        <img
          className="w-32 h-32 sm:w-28 sm:h-28 rounded-full"
          src="../public/img/person.png"
          alt="A&D Construction Service Logo"
        />
      </div>
      <div className='sm:text-left text-center ml-4'>
      <div className="space-y-2 mb-4">
	 <h2 className="text-2xl font-bold">A&D construction services</h2>
        <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full inline-flex items-center">
          <CheckBadgeIcon className="h-4 w-4 mr-1" />
          Premium
        </div>
        <p className="text-gray-500">Last active 15d ago</p>
        <p className="text-gray-500">Member since Oct 2019</p>
        <div className="flex items-center sm:justify-start justify-center">
		<div>
          <PhoneIcon className="h-5 w-5 text-gray-500 mr-2" />
		</div>
          077 7455 ####
        </div>
        <div className="flex items-center sm:justify-start justify-center">
          <ChatBubbleBottomCenterIcon className="h-5 w-5 text-gray-500 mr-2" />
          Click here to chat
        </div>
        <div className="flex items-center sm:justify-start justify-center">
          <ClipboardDocumentCheckIcon className="h-5 w-5 text-gray-500 mr-2" />
          Invite for a job
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4">
        <h3 className="text-lg font-bold mb-2">REGISTRATIONS</h3>
        <div className="flex flex-wrap gap-2 sm:justify-start justify-center">
          {categories.map((category, index) => (
            <span key={index} className={`px-3 py-1 rounded-full text-sm ${category === 'Plumbing' ? 'bg-red-100 text-red-800' : 'bg-gray-200 text-gray-800'}`}>
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4 mt-4">
        <h3 className="text-lg font-bold">LOCATION</h3>
        <p>Colombo</p>
      </div>

      <div className="border-t border-gray-300 pt-4 mt-4">
        <h3 className="text-lg font-bold">DESCRIPTION</h3>
        <p>printing plumbing masan all work</p>
      </div>

	 <div className="border-t border-gray-300 pt-4 mt-4">
        <h3 className="text-lg font-bold">REVIEW</h3>
        <ReviewCard />
	   <ReviewCard />
      </div>
	 </div>
    </div>
  );
};

export default ServiceDetails;
