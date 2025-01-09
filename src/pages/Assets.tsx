import React from 'react';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const AssetAllocation = () => {
  const pieData = [
    { name: 'Banks', value: 25, color: '#00BFA6' },
    { name: 'Investments', value: 15, color: '#4F46E5' },
    { name: 'Insurance', value: 15, color: '#818CF8' },
    { name: 'Credits', value: 20, color: '#EC4899' },
    { name: 'Loans', value: 15, color: '#FB923C' },
    { name: 'Assets', value: 10, color: '#FBBF24' }
  ];

  const categories = [
    {
      title: 'Banks',
      amount: '10,500',
      items: [
        {
          name: 'HDFC Bank',
          accountNo: '01234562087',
          amount: '5.2 K',
          logo: '/api/placeholder/40/40'
        },
        {
          name: 'Bank Of Baroda',
          accountNo: '01234562087',
          amount: '5.2 K',
          logo: '/api/placeholder/40/40'
        }
      ]
    },
    {
      title: 'Investments',
      amount: '10,500',
      items: [
        {
          name: 'Muthoot Finance',
          accountNo: '01234562087',
          amount: '5.2 K',
          logo: '/api/placeholder/40/40'
        },
        {
          name: 'Muthoot Finance',
          accountNo: '01234562087',
          amount: '5.2 K',
          logo: '/api/placeholder/40/40'
        }
      ]
    },
    {
      title: 'Insurance',
      amount: '10,500',
      items: [
        {
          name: 'TATA AIG Insurance',
          accountNo: '01234562087',
          amount: '5.2 K',
          logo: '/api/placeholder/40/40'
        }
      ]
    }
  ];

  

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 flex items-center space-x-4 sticky top-0 z-10">
        <button className="p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">Asset Allocation</h1>
      </div>

      <div className="p-4 space-y-4">
        {/* Time Period Selector */}
        <div className="bg-white rounded-lg p-4 flex justify-between items-center">
          <span>Last 30 days</span>
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>

        {/* Summary */}
        <div className="flex justify-between text-sm p-2">
          <div>
            <div className="text-gray-600">Expense</div>
            <div className="text-red-500">₹ 1.5 Lac</div>
          </div>
          <div>
            <div className="text-gray-600">Income</div>
            <div className="text-green-500">₹ 3 Lac</div>
          </div>
          <div>
            <div className="text-gray-600">Total</div>
            <div className="text-red-500">₹ 1.5 Lac</div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-lg p-6">
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-lg font-semibold">Assets</div>
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {pieData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg">
            <div className="p-4 border-b flex justify-between items-center">
              <span className="font-semibold text-blue-700">{category.title}</span>
              <span className="text-gray-900">₹ {category.amount}</span>
            </div>
            <div className="divide-y">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.accountNo}</div>
                    </div>
                  </div>
                  <div className="font-semibold">₹ {item.amount}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetAllocation;