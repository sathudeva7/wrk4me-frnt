import React from 'react';
import { MagnifyingGlassIcon, ChevronDownIcon, ChevronUpIcon, MapPinIcon, ComputerDesktopIcon, BriefcaseIcon,  } from '@heroicons/react/24/outline';

const FilterSidebar = () => {
  // Dummy state for accordion-like behavior
  const [openCategory, setOpenCategory] = React.useState('');

  const toggleCategory = (category) => {
    if (openCategory === category) {
      setOpenCategory('');
    } else {
      setOpenCategory(category);
    }
  };

  return (
    <div className="w-64 bg-white p-4 shadow rounded-lg">
      <div className="mb-4">
        <div className="flex items-center bg-gray-100 p-2 rounded">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 mr-2" />
          <input
            className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search by name"
          />
        </div>
      </div>
      <div className="mb-4">
        <button className="text-sm font-semibold text-gray-600 hover:text-red-600">Reset all</button>
      </div>
      <div className="mb-4">
        <h3 className="font-bold text-lg mb-2">Filters</h3>
        <div className="flex items-center justify-between text-gray-800 mb-2 cursor-pointer" onClick={() => toggleCategory('location')}>
          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5 mr-2" />
            Location
          </div>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
        <div className="flex items-center justify-between text-gray-800 mb-2 cursor-pointer" onClick={() => toggleCategory('technicians')}>
          <div className="flex items-center">
            <BriefcaseIcon className="w-5 h-5 mr-2" />
            Technicians
          </div>
          {openCategory === 'technicians' ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )}
        </div>
        {openCategory === 'technicians' && (
          <div className="pl-8">
            {/* List subcategories here */}
          </div>
        )}
        {/* Repeat for other categories */}
        <div className="flex items-center justify-between text-gray-800 mb-2 cursor-pointer" onClick={() => toggleCategory('it')}>
          <div className="flex items-center">
            <ComputerDesktopIcon className="w-5 h-5 mr-2" />
            IT
          </div>
          {openCategory === 'it' ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )}
        </div>
        {openCategory === 'it' && (
          <div className="pl-8 text-left font-light">
            <div className="text-red-600 mb-1">Computer Repairs</div>
            <div className="mb-1">Data Entry</div>
            <div className="mb-1">Design & Creative</div>
            {/* ... more items */}
          </div>
        )}
        {/* ... Repeat for other categories */}
      </div>
    </div>
  );
};

export default FilterSidebar;
