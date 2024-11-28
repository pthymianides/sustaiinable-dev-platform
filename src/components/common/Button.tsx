import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg transition-colors';
  
  const variantStyles = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    secondary: 'text-gray-600 hover:text-green-600',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
    </button>
  );
}