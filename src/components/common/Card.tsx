import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-green-100 ${className}`}>
      {children}
    </div>
  );
}