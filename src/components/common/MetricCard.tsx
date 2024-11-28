import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export default function MetricCard({ icon: Icon, value, label }: MetricCardProps) {
  return (
    <div className="text-center">
      <Icon className="h-8 w-8 mx-auto text-green-600 mb-4" />
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}