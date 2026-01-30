import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', icon: 'dashboard.svg', path: '/' },
  { name: 'Analytics', icon: 'analytics.svg', path: '/analytics' },
  { name: 'Invoice', icon: 'invoice.svg', path: '/invoice' },
  { name: 'Schedule', icon: 'schedule.svg', path: '/schedule' },
  { name: 'Calendar', icon: 'calendar.svg', path: '/calendar' },
  { name: 'Messages', icon: 'messages.svg', path: '/messages', badge: 49 },
  { name: 'Notification', icon: 'notification.svg', path: '/notification' },
  { name: 'Settings', icon: 'settings.svg', path: '/settings' },
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-[250px] h-screen bg-white flex flex-col sticky top-0 border-r border-gray-50 overflow-y-auto shrink-0 z-50">
      <div className="px-8 py-10 flex items-center gap-3">
        <img src="./assets/icons/logo.svg" alt="Base" className="h-8 w-8" />
        <span className="text-2xl font-bold text-text-main">Base</span>
      </div>

      <nav className="flex-1 px-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                isActive
                  ? 'bg-gradient-to-r from-[rgba(96,91,255,0.1)] to-transparent text-primary'
                  : 'text-text-muted hover:bg-gray-50'
              }`
            }
          >
            {({ isActive }) => (
              <>
                 {isActive && (
                    <div className="absolute left-0 w-1 h-8 bg-primary rounded-r-full" />
                 )}
                <img 
                    src={`./assets/icons/${item.icon}`} 
                    alt={item.name} 
                    className={`w-6 h-6 transition-all duration-200`}
                    style={{
                        filter: isActive 
                            ? 'brightness(0) saturate(100%) invert(38%) sepia(51%) saturate(5460%) hue-rotate(231deg) brightness(100%) contrast(106%)' // #605BFF
                            : 'grayscale(100%) opacity(0.5)'
                    }}
                />
                <span className={`font-semibold text-[16px] ${isActive ? '' : ''}`}>{item.name}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      
      <div className="px-6 py-6">
         <div className="bg-[#EBF1FF] rounded-3xl p-6 flex flex-col items-center text-center relative">
             <img src="./assets/images/upgrade-illustration.png" alt="Upgrade" className="w-full h-auto mb-4 object-contain" />
             <button className="bg-primary text-white text-sm font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full cursor-pointer">
               Upgrade Now
             </button>
         </div>
      </div>

      <div className="px-8 pb-10 pt-2">
        <button className="flex items-center gap-4 w-full text-text-muted hover:text-text-main transition-colors cursor-pointer">
            <img src="./assets/icons/logout.svg" alt="Logout" className="w-6 h-6 opacity-50" />
            <span className="font-semibold text-base">Log Out</span>
        </button>
      </div>
    </div>
  );
};