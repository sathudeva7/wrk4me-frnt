import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo and brand name */}
          <img
            src="https://i.pinimg.com/originals/61/e6/15/61e6153ec69f341620edd7311a6e2463.jpg" 
            alt="OnaWadak"
            className="h-8 w-auto sm:h-10"
          />
          <span className="ml-3 text-xl font-bold text-red-500">WorkForMe</span>
        </div>
        <nav className="flex space-x-4">
          {/* Navigation Links */}
          <button className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium">
            Post Job
          </button>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Jobs
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
