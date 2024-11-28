import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function PortfolioChart() {
  return (
    <div className="relative h-64">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <p className="text-gray-500">Portfolio visualization coming soon</p>
        </div>
      </div>
    </div>
  );
}