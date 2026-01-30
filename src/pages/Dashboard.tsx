import React from 'react';
import { StatCard } from '../components/dashboard/StatCard';

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-text-main">Dashboard</h1>
        <div className="flex items-center gap-4">
             {/* Placeholder for date/search */}
        </div>
      </div>

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
               {/* Use the exported image but ensure it scales well */}
              <img src="./assets/images/chart-reports.png" alt="Reports Chart" className="w-full h-full object-contain" />
              {/* Add axes labels manually if needed, but image should suffice for prototype */}
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
         {/* Recent Orders */}
         <div className="lg:col-span-2 bg-white rounded-[20px] p-8 shadow-[0px_4px_20px_rgba(238,238,238,0.5)]">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-text-main">Recent Orders</h3>
              <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md hover:bg-opacity-90 transition-all">View All</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                        <tr className="text-left text-[#B5B7C0] text-sm">
                            <th className="pb-6 font-medium pl-2">Tracking no</th>
                            <th className="pb-6 font-medium">Product Name</th>
                            <th className="pb-6 font-medium">Price</th>
                            <th className="pb-6 font-medium">Total Order</th>
                            <th className="pb-6 font-medium">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        <tr className="group hover:bg-gray-50 transition-colors">
                            <td className="py-5 pl-2 text-text-main font-bold">#876364</td>
                            <td className="py-5 flex items-center gap-3 text-text-main font-medium">
                                <div className="w-10 h-10 rounded-xl bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80')] bg-cover bg-center shadow-sm" />
                                Camera Lens
                            </td>
                            <td className="py-5 text-text-main font-bold">$178</td>
                            <td className="py-5"><span className="bg-[#EBF1FF] text-primary px-4 py-2 rounded-full font-bold text-xs">325</span></td>
                            <td className="py-5 text-text-main font-bold">$1,46,660</td>
                        </tr>
                        <tr className="group hover:bg-gray-50 transition-colors">
                            <td className="py-5 pl-2 text-text-main font-bold">#876368</td>
                            <td className="py-5 flex items-center gap-3 text-text-main font-medium">
                                <div className="w-10 h-10 rounded-xl bg-[url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80')] bg-cover bg-center shadow-sm" />
                                Black Headphone
                            </td>
                            <td className="py-5 text-text-main font-bold">$1,190</td>
                            <td className="py-5"><span className="bg-[#EBF1FF] text-primary px-4 py-2 rounded-full font-bold text-xs">50</span></td>
                            <td className="py-5 text-text-main font-bold">$60,950</td>
                        </tr>
                        <tr className="group hover:bg-gray-50 transition-colors">
                            <td className="py-5 pl-2 text-text-main font-bold">#876412</td>
                            <td className="py-5 flex items-center gap-3 text-text-main font-medium">
                                <div className="w-10 h-10 rounded-xl bg-[url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80')] bg-cover bg-center shadow-sm" />
                                Mobile
                            </td>
                            <td className="py-5 text-text-main font-bold">$8,000</td>
                            <td className="py-5"><span className="bg-[#EBF1FF] text-primary px-4 py-2 rounded-full font-bold text-xs">20</span></td>
                            <td className="py-5 text-text-main font-bold">$1,60,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
         </div>

         {/* Top Selling */}
         <div className="bg-white rounded-[20px] p-8 shadow-[0px_4px_20px_rgba(238,238,238,0.5)]">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-text-main">Top Selling Products</h3>
            </div>
            <div className="space-y-6">
                 <div className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all -mx-2">
                    <div className="w-[70px] h-[70px] rounded-[14px] bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80')] bg-cover bg-center shrink-0 shadow-sm" />
                    <div className="flex-1">
                        <h4 className="font-bold text-text-main text-base mb-1 group-hover:text-primary transition-colors">Nike Shoes Black Pattern</h4>
                        <div className="flex items-center gap-1 text-[#FFD66B] text-sm mb-1">
                            ★★★★☆
                        </div>
                        <div className="font-extrabold text-text-main text-lg">$87</div>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all -mx-2">
                    <div className="w-[70px] h-[70px] rounded-[14px] bg-[url('https://images.unsplash.com/photo-1605236453806-6ff36a8653f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80')] bg-cover bg-center shrink-0 shadow-sm" />
                    <div className="flex-1">
                        <h4 className="font-bold text-text-main text-base mb-1 group-hover:text-primary transition-colors">iPhone 12</h4>
                        <div className="flex items-center gap-1 text-[#FFD66B] text-sm mb-1">
                            ★★★★☆
                        </div>
                        <div className="font-extrabold text-text-main text-lg">$987</div>
                    </div>
                 </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;