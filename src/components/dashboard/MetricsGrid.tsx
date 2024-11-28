import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight, PiggyBank } from 'lucide-react';

const metrics = [
  {
    label: 'Total Invested',
    value: '$25,000',
    change: '+12.5%',
    isPositive: true,
    icon: PiggyBank,
  },
  {
    label: 'Total Returns',
    value: '$3,240',
    change: '+8.2%',
    isPositive: true,
    icon: TrendingUp,
  },
  {
    label: 'Active Projects',
    value: '5',
    change: '+2',
    isPositive: true,
    icon: ArrowUpRight,
  },
  {
    label: 'Pending Returns',
    value: '$850',
    change: '-2.1%',
    isPositive: false,
    icon: ArrowDownRight,
  },
];

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {metrics.map(({ label, value, change, isPositive, icon: Icon }) => (
        <div key={label} className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
            </div>
            <Icon className={`h-6 w-6 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
          </div>
          <div className={`mt-2 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </div>
        </div>
      ))}
    </div>
  );
}