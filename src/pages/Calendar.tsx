import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const days = Array.from({ length: 35 }, (_, i) => {
    const day = i - 2; // Start from previous month
    return day > 0 && day <= 31 ? day : '';
});

const Calendar: React.FC = () => {
  return (
    <div className="p-8 h-full flex flex-col max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-8 shrink-0">
        <h1 className="text-2xl font-bold text-text-main">Calendar</h1>
        <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm">
            <button className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors cursor-pointer">Day</button>
            <button className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors cursor-pointer">Week</button>
            <button className="px-4 py-2 text-sm font-bold text-primary bg-[#EBF1FF] rounded-md shadow-sm transition-colors cursor-pointer">Month</button>
            <button className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors cursor-pointer">Year</button>
        </div>
      </div>

      <div className="flex gap-8 flex-1 overflow-hidden">
        {/* Main Calendar */}
        <div className="flex-1 bg-white rounded-[20px] p-6 shadow-[0px_4px_20px_rgba(238,238,238,0.5)] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-6 shrink-0">
                <h2 className="text-xl font-bold text-text-main">December 2021</h2>
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"><ChevronLeft size={20} /></button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"><ChevronRight size={20} /></button>
                </div>
            </div>
            
            <div className="grid grid-cols-7 mb-4 shrink-0">
                {daysOfWeek.map(day => (
                    <div key={day} className="text-center font-semibold text-text-muted py-2">{day}</div>
                ))}
            </div>
            
            <div className="grid grid-cols-7 flex-1 auto-rows-fr gap-px bg-gray-100 border border-gray-100 rounded-lg overflow-hidden">
                 {days.map((day, i) => (
                    <div key={i} className="bg-white p-2 lg:p-4 min-h-[80px] flex flex-col items-start relative hover:bg-gray-50 transition-colors">
                        <span className={`font-semibold text-sm lg:text-lg ${day === 2 ? 'text-white bg-primary w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded-full shadow-lg' : 'text-text-main'}`}>
                            {day}
                        </span>
                        {day === 2 && (
                             <div className="mt-2 w-full bg-[#EBF1FF] text-primary text-[10px] font-bold px-2 py-1 rounded border-l-2 border-primary truncate hidden lg:block">
                                Design Sprint
                             </div>
                        )}
                         {day === 15 && (
                             <div className="mt-2 w-full bg-[#FFF0EB] text-[#FF8F6B] text-[10px] font-bold px-2 py-1 rounded border-l-2 border-[#FF8F6B] truncate hidden lg:block">
                                Client Meeting
                             </div>
                        )}
                    </div>
                 ))}
            </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[300px] flex flex-col gap-6 hidden xl:flex shrink-0">
             <div className="bg-white rounded-[20px] p-6 shadow-[0px_4px_20px_rgba(238,238,238,0.5)] flex flex-col">
                <h3 className="font-bold text-lg mb-4 text-text-main">Schedule</h3>
                <div className="space-y-6 flex-1 overflow-auto">
                    {/* Mock events */}
                    <div className="flex gap-4 items-start">
                        <div className="w-1 h-10 bg-primary rounded-full shrink-0"></div>
                        <div>
                            <h4 className="font-bold text-sm text-text-main">Design Sprint</h4>
                            <p className="text-xs text-text-muted mt-1">10:00 AM - 12:00 PM</p>
                            <div className="flex -space-x-2 mt-2">
                                <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt=""/>
                                <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt=""/>
                                <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[8px] font-bold">+3</div>
                            </div>
                        </div>
                    </div>
                     <div className="flex gap-4 items-start">
                        <div className="w-1 h-10 bg-[#FF8F6B] rounded-full shrink-0"></div>
                        <div>
                            <h4 className="font-bold text-sm text-text-main">Client Meeting</h4>
                            <p className="text-xs text-text-muted mt-1">02:00 PM - 03:00 PM</p>
                            <div className="flex -space-x-2 mt-2">
                                <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                 <button className="w-full mt-6 bg-primary text-white font-bold py-3 rounded-xl shadow-lg hover:bg-opacity-90 transition-all cursor-pointer">
                    Create Schedule
                </button>
             </div>
             
             <div className="bg-white rounded-[20px] p-6 shadow-[0px_4px_20px_rgba(238,238,238,0.5)] h-[200px]">
                <h3 className="font-bold text-lg mb-4 text-text-main">People</h3>
                {/* Mock people list or generic placeholder */}
                 <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                             <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/100?img=4" alt=""/>
                             <div className="text-sm font-semibold">Eddie Lobanovskiy</div>
                         </div>
                         <button className="text-primary text-xs font-bold">Add</button>
                    </div>
                     <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                             <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/100?img=5" alt=""/>
                             <div className="text-sm font-semibold">Alexey Stave</div>
                         </div>
                         <button className="text-text-muted text-xs font-bold">Remove</button>
                    </div>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
