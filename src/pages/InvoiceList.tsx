import React from 'react';
import { Search, Plus, MoreHorizontal, Filter } from 'lucide-react';

const invoices = [
  { id: '#876364', name: 'Arrora Gaur', email: 'arroragaur@gmail.com', date: '12 Dec, 2020', status: 'Complete', amount: '$ 178' },
  { id: '#876621', name: 'James Mullican', email: 'jamesmullican@gmail.com', date: '10 Dec, 2020', status: 'Pending', amount: '$ 190' },
  { id: '#876412', name: 'Robert Bacins', email: 'robertbacins@gmail.com', date: '09 Dec, 2020', status: 'Complete', amount: '$ 230' },
  { id: '#876523', name: 'Bethany Jackson', email: 'bethanyjackson@gmail.com', date: '09 Dec, 2020', status: 'Cancel', amount: '$ 450' },
  { id: '#876222', name: 'Anne Jacob', email: 'annejacob@gmail.com', date: '09 Dec, 2020', status: 'Complete', amount: '$ 120' },
  { id: '#876364', name: 'Arrora Gaur', email: 'arroragaur@gmail.com', date: '12 Dec, 2020', status: 'Complete', amount: '$ 178' },
  { id: '#876621', name: 'James Mullican', email: 'jamesmullican@gmail.com', date: '10 Dec, 2020', status: 'Pending', amount: '$ 190' },
  { id: '#876412', name: 'Robert Bacins', email: 'robertbacins@gmail.com', date: '09 Dec, 2020', status: 'Complete', amount: '$ 230' },
  { id: '#876523', name: 'Bethany Jackson', email: 'bethanyjackson@gmail.com', date: '09 Dec, 2020', status: 'Cancel', amount: '$ 450' },
  { id: '#876222', name: 'Anne Jacob', email: 'annejacob@gmail.com', date: '09 Dec, 2020', status: 'Complete', amount: '$ 120' },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Complete': return 'bg-[rgba(51,214,159,0.1)] text-[#33D69F]';
        case 'Pending': return 'bg-[rgba(255,143,107,0.1)] text-[#FF8F6B]';
        case 'Cancel': return 'bg-[rgba(255,76,97,0.1)] text-[#FF4C61]';
        default: return 'bg-gray-100 text-gray-500';
    }
};

const InvoiceList: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center shrink-0">
        <h1 className="text-2xl font-bold text-text-main">Invoice List</h1>
        <div className="flex items-center gap-4">
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="pl-4 pr-10 py-3 rounded-[10px] bg-white text-sm text-text-main placeholder-[#B5B7C0] focus:outline-none focus:ring-2 focus:ring-primary/20 w-[230px] shadow-sm"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B5B7C0] hover:text-primary transition-colors cursor-pointer">
                   <Search size={18} />
                </button>
            </div>
            <button className="bg-primary text-white text-sm font-bold px-6 py-3 rounded-[10px] shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all cursor-pointer flex items-center gap-2">
                <Plus size={18} strokeWidth={3} />
                Add New
            </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[20px] p-8 shadow-[0px_4px_20px_rgba(238,238,238,0.5)] flex-1 overflow-hidden flex flex-col">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-text-main">Invoices</h2>
            <button className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-semibold border border-gray-200 px-3 py-2 rounded-lg hover:border-primary cursor-pointer">
                <Filter size={16} />
                Filter
            </button>
         </div>
         <div className="overflow-auto flex-1">
            <table className="w-full min-w-[1000px] border-collapse relative">
                <thead className="sticky top-0 bg-white z-10">
                    <tr className="text-left text-[#B5B7C0] text-sm border-b border-gray-100">
                        <th className="pb-4 pl-4 font-semibold w-[50px]">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                        </th>
                        <th className="pb-4 font-semibold">Invoice ID</th>
                        <th className="pb-4 font-semibold">Name</th>
                        <th className="pb-4 font-semibold">Email</th>
                        <th className="pb-4 font-semibold">Date</th>
                        <th className="pb-4 font-semibold">Status</th>
                        <th className="pb-4 font-semibold">Amount</th>
                        <th className="pb-4 pr-4 font-semibold text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {invoices.map((invoice, index) => (
                        <tr key={index} className="group hover:bg-gray-50 transition-colors">
                            <td className="py-4 pl-4">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            </td>
                            <td className="py-4 font-bold text-text-main">{invoice.id}</td>
                            <td className="py-4 font-semibold text-text-main">{invoice.name}</td>
                            <td className="py-4 text-text-muted">{invoice.email}</td>
                            <td className="py-4 font-semibold text-text-main">{invoice.date}</td>
                            <td className="py-4">
                                <span className={`px-4 py-2 rounded-lg font-bold text-xs ${getStatusColor(invoice.status)}`}>
                                    {invoice.status}
                                </span>
                            </td>
                            <td className="py-4 font-bold text-text-main">{invoice.amount}</td>
                            <td className="py-4 pr-4 text-right">
                                <button className="p-2 rounded-lg bg-[#EBF1FF] text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                    <MoreHorizontal size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};

export default InvoiceList;
