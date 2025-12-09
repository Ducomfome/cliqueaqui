import React from 'react';
import { LockOpen, ChevronRight } from 'lucide-react';
import { ButtonProps } from '../types';

export const UnlockButton: React.FC<ButtonProps> = ({ href, text, className = "", onClick }) => {
  return (
    <a 
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center w-full max-w-md mx-auto py-4 px-6 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold text-xl rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden ${className}`}
    >
      {/* Shine effect */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out_infinite]" />
      
      <span className="flex items-center gap-2 relative z-10">
        <LockOpen className="w-6 h-6 animate-pulse" />
        {text}
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </span>
      
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </a>
  );
};