import React from 'react';

export const DashboardHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-text-main">Dashboard</h1>
      
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-12 pr-4 py-3 rounded-2xl bg-white border-none outline-none text-sm font-semibold text-text-main placeholder:text-[#B0B0B0] w-[300px] shadow-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <svg 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B0B0B0]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Profile / Notification - Placeholder or standard pattern */}
        <div className="flex items-center gap-4">
            {/* Notification Bell (using existing icon if possible, else standard) */}
             <button className="relative p-2 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
                <img src="./assets/icons/notification.svg" alt="Notifications" className="w-6 h-6" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>

            {/* Profile */}
            <div className="flex items-center gap-3 pl-2">
                <img 
                    src="./assets/images/profile-photo.png" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-xl object-cover cursor-pointer"
                />
            </div>
        </div>
      </div>
    </div>
  );
};
