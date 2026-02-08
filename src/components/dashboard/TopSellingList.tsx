import React from 'react';

const products = [
  { name: 'Nike Shoes Black Pattern', price: '$87', rating: 4, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'iPhone 12', price: '$987', rating: 4, image: 'https://images.unsplash.com/photo-1605236453806-6ff36a8653f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
];

export const TopSellingList: React.FC = () => {
  return (
    <div className="bg-white rounded-[20px] p-8 shadow-[0px_4px_20px_rgba(238,238,238,0.5)] h-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-text-main">Top Selling Products</h3>
      </div>
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.name} className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all -mx-2">
            <div 
                className="w-[70px] h-[70px] rounded-[14px] bg-cover bg-center shrink-0 shadow-sm"
                style={{ backgroundImage: `url('${product.image}')` }}
            />
            <div className="flex-1">
              <h4 className="font-bold text-text-main text-base mb-1 group-hover:text-primary transition-colors">
                {product.name}
              </h4>
              <div className="flex items-center gap-1 text-[#FFD66B] text-sm mb-1">
                {'★'.repeat(product.rating)}
                <span className="text-gray-300">☆</span>
              </div>
              <div className="font-extrabold text-text-main text-lg">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
