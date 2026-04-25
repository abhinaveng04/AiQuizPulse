import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function IncorrectReveal() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto advance to leaderboard after 3 seconds for demo purposes
    const timer = setTimeout(() => {
      navigate('/leaderboard');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-error/10">
      <div className="absolute inset-0 bg-gradient-to-b from-error/10 via-background to-background"></div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-error/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <main className="flex-1 flex flex-col items-center justify-center p-lg relative z-10 w-full max-w-3xl mx-auto text-center space-y-xl">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-error/80 flex items-center justify-center shadow-[0_0_80px_rgba(255,100,100,0.4)] shrink-0">
          <span className="material-symbols-outlined text-[80px] md:text-[120px] text-surface-container-lowest" style={{fontVariationSettings: "'FILL' 1"}}>cancel</span>
        </div>
        
        <div>
          <h1 className="font-display text-[64px] md:text-[96px] text-on-surface font-black tracking-tighter drop-shadow-lg leading-none mb-sm text-transparent bg-clip-text bg-gradient-to-b from-white to-error/50">
            Incorrect
          </h1>
          <p className="font-h3 text-outline">You answered: Kepler Space Telescope</p>
        </div>

        <div className="w-full mt-xl p-md rounded-xl bg-surface-container/50 backdrop-blur border border-error/30 flex flex-col items-center">
          <span className="font-label-caps text-on-surface-variant mb-xs">Correct Answer</span>
          <div className="flex items-center gap-xs text-primary font-h3">
            Hubble Space Telescope
          </div>
        </div>
      </main>
      
      {/* Footer Info */}
      <footer className="p-md text-center relative z-20 flex justify-between items-center bg-background/50 backdrop-blur border-t border-white/5">
        <span className="font-label-caps text-on-surface-variant">AlexM</span>
        <span className="font-label-caps text-error font-bold bg-surface-container px-sm py-[2px] rounded border border-white/10">Rank: 4rd</span>
        <span className="font-label-caps text-on-surface-variant group flex items-center gap-xs cursor-pointer hover:text-white transition-colors" onClick={() => navigate('/leaderboard')}>
          Next Demo <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </span>
      </footer>
    </div>
  );
}
