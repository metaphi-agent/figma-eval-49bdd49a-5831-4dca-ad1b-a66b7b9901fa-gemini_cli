import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  bgClass: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, bgClass }) => {
  return (
    <div className="bg-white rounded-[20px] p-6 flex items-center justify-between shadow-[0px_4px_20px_rgba(238,238,238,0.5)] cursor-default hover:translate-y-[-2px] transition-transform h-full">
      <div className="flex flex-col gap-1">
        <h3 className="text-[28px] font-extrabold text-text-main leading-tight">{value}</h3>
        <p className="text-[15px] text-text-muted font-medium">{title}</p>
      </div>
      <div className={`w-[60px] h-[60px] rounded-[24px] flex items-center justify-center ${bgClass} shrink-0`}>
         <img src={icon} alt={title} className="w-7 h-7" />
      </div>
    </div>
  );
};
