import React from 'react';

interface ProjectProgressProps {
  raised: number;
  goal: number;
}

export default function ProjectProgress({ raised, goal }: ProjectProgressProps) {
  const progress = (raised / goal) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Raised: ${raised.toLocaleString()}</span>
        <span className="text-gray-600">${goal.toLocaleString()}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-600 rounded-full transition-all duration-500"
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
        />
      </div>
    </div>
  );
}