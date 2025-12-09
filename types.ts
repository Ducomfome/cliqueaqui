import React from 'react';

export interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

export interface ButtonProps {
  href: string;
  text: string;
  className?: string;
  onClick?: () => void;
}