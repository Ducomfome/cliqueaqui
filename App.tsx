import React, { useState, useEffect } from 'react';
import { UnlockButton } from './components/UnlockButton';
import { FeatureList } from './components/FeatureList';
import { Flame, Clock, Users } from 'lucide-react';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 4, seconds: 59 });
  const [spotsLeft, setSpotsLeft] = useState(14);

  // Timer countdown logic to create urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev;
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Randomly decrease spots to create social proof/scarcity
  useEffect(() => {
    const spotTimer = setInterval(() => {
      setSpotsLeft((prev) => (prev > 3 ? prev - 1 : prev));
    }, 8000);
    return () => clearInterval(spotTimer);
  }, []);

  const telegramLink = "https://t.me/+UfIF_BU6VXtiYTlh";

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 transform scale-105"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/seed/nightlife/800/1200")',
          filter: 'blur(8px) brightness(0.6)'
        }}
      />
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-transparent to-black z-0 pointer-events-none" />
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-lg px-6 py-10 flex flex-col items-center text-center">
        
        {/* Urgent Badge */}
        <div className="animate-bounce mb-6">
          <span className="bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.7)] border border-red-400">
            Acesso Limitado
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight drop-shadow-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            CONTEÚDO
          </span>
          <br />
          <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
             VIP & EXCLUSIVO
          </span>
        </h1>

        <p className="text-gray-300 mt-4 mb-8 text-lg md:text-xl font-medium max-w-xs mx-auto leading-relaxed">
          Você foi selecionado para acessar nosso grupo privado. As vagas fecham em breve.
        </p>

        {/* Live Stats */}
        <div className="flex justify-center gap-4 mb-8 text-sm font-semibold w-full">
          <div className="flex items-center gap-1.5 text-red-400 bg-red-950/30 px-3 py-1.5 rounded border border-red-900/50">
            <Clock className="w-4 h-4" />
            <span>{timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
          </div>
          <div className="flex items-center gap-1.5 text-green-400 bg-green-950/30 px-3 py-1.5 rounded border border-green-900/50">
            <Users className="w-4 h-4" />
            <span>{spotsLeft} vagas restantes</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full mb-8">
          <UnlockButton 
            href={telegramLink} 
            text="ENTRAR AGORA GRÁTIS" 
          />
          <p className="mt-3 text-xs text-gray-500">
            *Acesso restrito para maiores de 18 anos
          </p>
        </div>

        {/* Feature List */}
        <FeatureList />

        {/* Social Proof / "Fake" Notifications */}
        <div className="mt-4 flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img 
                key={i}
                className="w-8 h-8 rounded-full border-2 border-black" 
                src={`https://picsum.photos/seed/${i + 50}/100/100`} 
                alt="User" 
              />
            ))}
          </div>
          <span className="text-xs text-gray-300">
            <span className="text-white font-bold">+148</span> membros online
          </span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-auto" />
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 text-center text-gray-600 text-xs">
        <div className="flex justify-center gap-4 mb-2">
          <span className="cursor-pointer hover:text-gray-400">Termos de Uso</span>
          <span className="cursor-pointer hover:text-gray-400">Privacidade</span>
          <span className="cursor-pointer hover:text-gray-400">Contato</span>
        </div>
        <p>&copy; 2024 VIP Access Group. Todos os direitos reservados.</p>
        <div className="mt-4 opacity-50 flex items-center justify-center gap-2">
          <Flame className="w-4 h-4" />
          <span>Hot Niche Marketing</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
