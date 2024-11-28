import React from 'react';
import { TreePine, Users, Building2, Sprout } from 'lucide-react';
import MetricCard from '../common/MetricCard';

const metrics = [
  {
    icon: TreePine,
    value: "50K+",
    label: "Trees Planted",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Active Investors",
  },
  {
    icon: Building2,
    value: "100+",
    label: "Local Projects",
  },
  {
    icon: Sprout,
    value: "$2M+",
    label: "Impact Generated",
  },
];

export default function ImpactMetrics() {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map(({ icon, value, label }) => (
            <MetricCard
              key={label}
              icon={icon}
              value={value}
              label={label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}