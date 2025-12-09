import React from 'react';
import { ShieldCheck, Zap, Video } from 'lucide-react';
import { FeatureItem } from '../types';

export const FeatureList: React.FC = () => {
  const features: FeatureItem[] = [
    { icon: <Video className="text-red-500" />, text: "Conteúdo Exclusivo Diário" },
    { icon: <ShieldCheck className="text-green-500" />, text: "Grupo 100% Seguro e Privado" },
    { icon: <Zap className="text-yellow-400" />, text: "Acesso Imediato sem Espera" },
  ];

  return (
    <div className="space-y-4 my-8 w-full max-w-sm mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3 text-gray-200 bg-white/5 p-3 rounded-lg border border-white/10 backdrop-blur-sm">
          <div className="p-2 bg-black/40 rounded-full">
            {feature.icon}
          </div>
          <span className="font-medium text-sm md:text-base">{feature.text}</span>
        </div>
      ))}
    </div>
  );
};