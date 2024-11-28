import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Investment } from '../../types/investment';
import ProjectProgress from '../common/ProjectProgress';

export default function InvestmentCard({
  title,
  amount,
  returnRate,
  progress,
  status,
  nextPayout,
}: Investment) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">Next payout: {nextPayout}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Invested Amount</p>
          <p className="text-lg font-semibold text-gray-900">${amount.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Expected Return</p>
          <p className="text-lg font-semibold text-green-600">+{returnRate}%</p>
        </div>
      </div>

      <ProjectProgress raised={progress.current} goal={progress.total} />

      <button className="mt-4 w-full flex items-center justify-center space-x-2 text-green-600 hover:text-green-700">
        <span>View Details</span>
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  );
}