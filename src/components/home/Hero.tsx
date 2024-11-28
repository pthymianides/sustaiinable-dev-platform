import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Invest in a
            <span className="text-green-600"> Sustainable</span>
            <br />
            Future Today
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Connect with impactful local projects and initiatives. Make sustainable investments that benefit communities and our planet.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
              <span>Explore Projects</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}