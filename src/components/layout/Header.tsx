import React from 'react';
import { Leaf, Search } from 'lucide-react';
import Button from '../common/Button';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#invest', label: 'Invest' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-green-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-semibold text-gray-900">EcoVenture</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-600 hover:text-green-600"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm" icon={Search} />
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}