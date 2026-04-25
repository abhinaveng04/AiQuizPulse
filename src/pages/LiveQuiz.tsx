import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function LiveQuiz() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/reveal/correct');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-tertiary-container/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-surface-container relative z-20">
        <div className="h-full bg-gradient-to-r from-primary to-secondary w-[80%] transition-all duration-1000 ease-linear shadow-[0_0_10px_rgba(255,180,160,0.5)]"></div>
      </div>

      <header className="flex justify-between items-center p-md relative z-20 bg-background/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-sm">
          <span className="font-label-caps text-on-surface-variant tracking-widest px-sm py-xs bg-surface-container-high rounded border border-white/5">Q1 / 12</span>
        </div>
        <div className="flex items-center gap-xs text-error font-h3">
          <span className="material-symbols-outlined shrink-0" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
          <span className="w-8 text-center">{timeLeft}s</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-lg relative z-10 w-full max-w-5xl mx-auto space-y-xl">
        <h2 className="font-h1 text-[40px] md:text-[64px] text-center text-on-surface leading-tight tracking-tight drop-shadow-lg">
          Which telescope was launched into space in 1990?
        </h2>

        <div className="w-full relative aspect-video max-h-[300px] md:max-h-[400px] border border-outline-variant/30 rounded-xl overflow-hidden glass-panel-glow shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnt0J0R6DOozvAP_RLFqEgC6HwG6cTZKIizhPOOrA0K_P0pNToSMxdHy5neVqaz7B0V5mchXF5JoNwN1wbA5FXJvNrO5vWz3r4WLVdfDkTGvekynLA-FjP8qsQwRSVqFs_Pxr4yKu7gKSxOyPuQ3-sKxosgSteSU6-m7FT69Ro2xnsF0m6lgLkQEHaxNJGxGRr4Hn2rp6KFa_ztxga2vKtw9AblyoAlnyEDCWpD2pjWgyyBUVmiBKiEiH19tFU3xGM58QF_qtJFHKn" alt="Hubble space telescope" className="w-full h-full object-cover relative z-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md w-full">
          <button className="h-20 bg-surface-container-high border-[0.5px] border-white/20 rounded-xl font-h3 text-on-surface shadow-lg hover:bg-white/10 transition-colors relative overflow-hidden flex items-center p-md group">
            <div className="w-12 h-12 rounded bg-error/20 border border-error text-error flex items-center justify-center mr-md shrink-0">
              <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>change_history</span>
            </div>
            <span className="truncate">James Webb Space Telescope</span>
          </button>
          
          <button className="h-20 bg-surface-container-high border-[0.5px] border-white/20 rounded-xl font-h3 text-on-surface shadow-lg hover:bg-white/10 transition-colors relative overflow-hidden flex items-center p-md group">
            <div className="w-12 h-12 rounded bg-tertiary-container/30 border border-tertiary-container text-tertiary-container flex items-center justify-center mr-md shrink-0">
              <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>square</span>
            </div>
            <span className="truncate">Kepler Space Telescope</span>
          </button>

          <button className="h-20 bg-surface-container-high border-[0.5px] border-white/20 rounded-xl font-h3 text-on-surface shadow-lg hover:bg-white/10 transition-colors relative overflow-hidden flex items-center p-md group">
            <div className="w-12 h-12 rounded bg-primary-container/30 border border-primary text-primary flex items-center justify-center mr-md shrink-0 rounded-full">
              <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>circle</span>
            </div>
            <span className="truncate">Hubble Space Telescope</span>
          </button>

          <button className="h-20 bg-surface-container-high border-[0.5px] border-white/20 rounded-xl font-h3 text-on-surface shadow-lg hover:bg-white/10 transition-colors relative overflow-hidden flex items-center p-md group">
            <div className="w-12 h-12 rounded bg-secondary/20 border border-secondary text-secondary flex items-center justify-center mr-md shrink-0 rotate-45 transform">
              <span className="material-symbols-outlined text-[32px] -rotate-45" style={{fontVariationSettings: "'FILL' 1"}}>square</span>
            </div>
            <span className="truncate">Spitzer Space Telescope</span>
          </button>
        </div>
      </main>
      
      {/* Footer Info */}
      <footer className="p-md text-center relative z-20">
        <span className="font-label-caps text-outline bg-surface-container px-sm py-xs border border-white/5 rounded">PIN: 452 901</span>
      </footer>
    </div>
  );
}
