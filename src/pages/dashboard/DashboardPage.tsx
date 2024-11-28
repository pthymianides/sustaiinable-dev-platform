import React from 'react';
import { PieChart, ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';
import InvestmentCard from '../../components/dashboard/InvestmentCard';
import MetricsGrid from '../../components/dashboard/MetricsGrid';
import PortfolioChart from '../../components/dashboard/PortfolioChart';
import { investments } from '../../data/investments';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Investment Dashboard</h1>
            <p className="text-gray-600">Track and manage your sustainable investments</p>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            New Investment
          </button>
        </div>

        <MetricsGrid />

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Portfolio Performance</h2>
                <select className="border border-gray-300 rounded-lg px-3 py-1">
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>Last Year</option>
                </select>
              </div>
              <PortfolioChart />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Distribution</h2>
            <div className="flex items-center justify-center h-64">
              <PieChart className="h-full w-full text-green-600" />
            </div>
            <div className="space-y-4 mt-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Solar Projects</span>
                <span className="font-semibold">45%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Reforestation</span>
                <span className="font-semibold">30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Agriculture</span>
                <span className="font-semibold">25%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Active Investments</h2>
          <div className="grid gap-6">
            {investments.map((investment) => (
              <InvestmentCard key={investment.id} {...investment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}