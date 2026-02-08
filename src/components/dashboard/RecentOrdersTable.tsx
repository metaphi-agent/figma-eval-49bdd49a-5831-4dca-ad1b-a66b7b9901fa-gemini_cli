import React from 'react';

// Data would typically come from props/api
const orders = [
  { id: '#876364', product: 'Camera Lens', price: '$178', total: 325, amount: '$1,46,660', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
  { id: '#876368', product: 'Black Headphone', price: '$1,190', total: 50, amount: '$60,950', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
  { id: '#876412', product: 'Mobile', price: '$8,000', total: 20, amount: '$1,60,000', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
];

export const RecentOrdersTable: React.FC = () => {
  return (
    <div className="lg:col-span-2 bg-white rounded-[20px] p-8 shadow-[0px_4px_20px_rgba(238,238,238,0.5)]">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-text-main">Recent Orders</h3>
        <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md hover:bg-opacity-90 transition-all cursor-pointer">
          View All
        </button>
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
            {orders.map((order) => (
              <tr key={order.id} className="group hover:bg-gray-50 transition-colors">
                <td className="py-5 pl-2 text-text-main font-bold">{order.id}</td>
                <td className="py-5 flex items-center gap-3 text-text-main font-medium">
                  <div 
                    className="w-10 h-10 rounded-xl bg-cover bg-center shadow-sm"
                    style={{ backgroundImage: `url('${order.image}')` }}
                  />
                  {order.product}
                </td>
                <td className="py-5 text-text-main font-bold">{order.price}</td>
                <td className="py-5">
                  <span className="bg-[#EBF1FF] text-primary px-4 py-2 rounded-full font-bold text-xs">
                    {order.total}
                  </span>
                </td>
                <td className="py-5 text-text-main font-bold">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
