import React from 'react';
import { StatCard } from '../components/dashboard/StatCard';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { RecentOrdersTable } from '../components/dashboard/RecentOrdersTable';
import { TopSellingList } from '../components/dashboard/TopSellingList';

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      <DashboardHeader />

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard 
          title="Save Products" 
          value="178+" 
          icon="./assets/icons/card-save.svg" 
          bgClass="bg-[#EBF1FF]" 
        />
        <StatCard 
          title="Stock Products" 
          value="20+" 
          icon="./assets/icons/card-stock.svg" 
          bgClass="bg-[#FFF8E6]" 
        />
        <StatCard 
          title="Sales Products" 
          value="190+" 
          icon="./assets/icons/card-sales.svg" 
          bgClass="bg-[#FFF0EB]" 
        />
        <StatCard 
          title="Job Application" 
          value="12+" 
          icon="./assets/icons/card-job.svg" 
          bgClass="bg-[#EBEBFF]" 
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reports Chart */}
        <div className="lg:col-span-2 bg-white rounded-[20px] p-8 shadow-[0px_4px_20px_rgba(238,238,238,0.5)] min-h-[400px]">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-text-main">Reports</h3>
              <button className="text-[#9A9AA0] hover:text-primary transition-colors font-bold text-xl pb-3">...</button>
           </div>
           <div className="w-full h-[300px] flex items-center justify-center relative">
              <img src="./assets/images/chart-reports.png" alt="Reports Chart" className="w-full h-full object-contain" />
           </div>
        </div>

        {/* Analytics Donut */}
        <div className="bg-white rounded-[20px] p-8 shadow-[0px_4px_20px_rgba(238,238,238,0.5)] flex flex-col min-h-[400px]">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-text-main">Analytics</h3>
              <button className="text-[#9A9AA0] hover:text-primary transition-colors font-bold text-xl pb-3">...</button>
           </div>
           <div className="flex-1 flex flex-col items-center justify-center relative">
              <div className="relative w-64 h-64 flex items-center justify-center">
                  <img src="./assets/images/chart-analytics.png" alt="Analytics Donut" className="w-full h-full object-contain z-10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-0 pt-2">
                      <span className="text-3xl font-extrabold text-text-main">80%</span>
                      <span className="text-sm text-text-muted font-medium">Transactions</span>
                  </div>
              </div>
               <div className="mt-8 w-full flex justify-between px-2">
                  <div className="flex items-center gap-2 text-sm text-[#9A9AA0] font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5B93FF] shadow-[0px_0px_10px_rgba(91,147,255,0.5)]"></span> Sale
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#9A9AA0] font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD66B] shadow-[0px_0px_10px_rgba(255,214,107,0.5)]"></span> Distribute
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#9A9AA0] font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF8F6B] shadow-[0px_0px_10px_rgba(255,143,107,0.5)]"></span> Return
                  </div>
               </div>
           </div>
        </div>
      </div>

      {/* Lists Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <RecentOrdersTable />
         <TopSellingList />
      </div>
    </div>
  );
};

export default Dashboard;
