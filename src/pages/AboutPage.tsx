import React from 'react';
import { Leaf, Heart, Globe2, Users } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability First',
    description: 'We prioritize projects that create lasting positive impact on our environment and communities.',
  },
  {
    icon: Heart,
    title: 'Community-Driven',
    description: 'Local communities are at the heart of every project we support and promote.',
  },
  {
    icon: Globe2,
    title: 'Global Impact',
    description: 'While focusing locally, our collective actions contribute to global sustainability goals.',
  },
  {
    icon: Users,
    title: 'Inclusive Investment',
    description: 'Making sustainable investment opportunities accessible to everyone, regardless of portfolio size.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting conscious investors with impactful local projects to create
            a sustainable future for generations to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center p-6 rounded-lg bg-green-50">
              <Icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2024, EcoVenture emerged from a simple yet powerful idea:
                  making sustainable investment accessible to everyone while supporting
                  local environmental initiatives.
                </p>
                <p>
                  We believe that by connecting conscious investors with carefully
                  vetted local projects, we can create meaningful impact that benefits
                  both communities and the environment.
                </p>
                <p>
                  Today, we're proud to have facilitated numerous successful projects
                  and built a community of passionate investors committed to
                  sustainable development.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}