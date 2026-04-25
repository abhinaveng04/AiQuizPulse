import React from 'react';
import { useNavigate } from 'react-router-dom';

export function FinalResults() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background">
      {/* Dynamic light beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80vh] flex justify-center pointer-events-none z-0 opacity-50">
        <div className="w-[20vw] h-full bg-gradient-to-b from-secondary/30 to-transparent rotate-[-15deg] blur-[40px] transform origin-top"></div>
        <div className="w-[30vw] h-full bg-gradient-to-b from-primary/30 to-transparent blur-[60px]"></div>
        <div className="w-[20vw] h-full bg-gradient-to-b from-tertiary-container/30 to-transparent rotate-[15deg] blur-[40px] transform origin-top"></div>
      </div>

      <header className="p-xl text-center relative z-20">
        <h1 className="font-h1 text-[48px] md:text-[64px] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-black tracking-tighter drop-shadow-[0_0_20px_rgba(255,181,156,0.3)] mb-sm">
          Final Results
        </h1>
        <p className="font-label-caps text-outline tracking-widest uppercase">Space Exploration Quiz</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-end p-lg pb-0 relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex items-end justify-center w-full max-w-3xl h-[400px] mb-xl px-sm relative">
          
          {/* Rank 2 */}
          <div className="w-1/3 flex flex-col items-center group relative z-10">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-outline bg-surface-container overflow-hidden mb-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] relative z-20 drop-shadow-2xl">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJTqXSlbyiqDfIWoe-atG6oWs1nYmiorShaLxd3JyKq7XMLE9RpZ5Epp5_QRzERi19eIyHpM_FCO2XELP7n0ikySvVzlx4zDMs-4b-hnHVt00dsbhxdaT_-Fk81zWl1M3_VcZa7ND0M3S9AlzrwtAWuZqxVBR7DYP3fpzbCilE2pbHVZWBWjuKlPPyiIebRvnxyyjQf6X2mmBgwzPP3Bkp6G4xkd4Obaviq3qw3btMkvW9SujDXkEAG2XcAuC_0FTHlR44RfyaCWSL" className="w-full h-full object-cover" alt="AlexM" />
            </div>
            <span className="font-h3 text-on-surface mb-xs drop-shadow-md">AlexM</span>
            <span className="font-label-caps text-outline mb-md">11,200 pts</span>
            <div className="w-full h-[150px] md:h-[200px] bg-gradient-to-t from-surface-container to-surface-container-high rounded-t-xl border-t border-l border-r border-white/10 flex items-start justify-center pt-md relative overflow-hidden">
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-display text-[48px] font-black text-outline/30 select-none">2</span>
            </div>
          </div>

          {/* Rank 1 */}
          <div className="w-1/3 flex flex-col items-center group relative z-20 -mx-sm md:-mx-md">
            <div className="absolute -top-12 text-secondary animate-bounce flex items-center justify-center filter drop-shadow-[0_0_15px_rgba(239,187,169,0.8)]">
              <span className="material-symbols-outlined text-[48px]" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
            </div>
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-secondary bg-surface-container overflow-hidden mb-sm shadow-[0_0_30px_rgba(239,187,169,0.5)] relative z-20 drop-shadow-2xl ring-4 ring-secondary/20">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuADistXv6nkPxPw0g-DxA_vViQurUYaeqIMDqPxIdI0fAH_FOh5dNwPqsIX4KrqrbfwZHrDaM-9B4c91a4iYKs1m5nBJkPsNBwzRJqRCsuGDjQ9VIOuYflP2OLOXLsYYUvcwPxSC-0n6_hlAXuBdJB017MGhpmtTjuWVVj6iiVZqSZBYfZpE0SXZ6kvIoEGKPXYP3MOcu-i_X5P0fhSWT8Xrz4FPI-8UTZY4GCB1KYsRywWdKj_v9Q2iCZz6HiOr5qirZHcAEf9uSBd" className="w-full h-full object-cover" alt="NeonNinja" />
            </div>
            <span className="font-h2 text-on-surface mb-xs drop-shadow-md">NeonNinja</span>
            <span className="font-label-caps text-secondary mb-md font-bold">12,540 pts</span>
            <div className="w-full h-[200px] md:h-[280px] bg-gradient-to-t from-secondary/10 to-secondary/30 rounded-t-xl border-t border-l border-r border-secondary/50 flex items-start justify-center pt-md shadow-[0_-10px_30px_rgba(239,187,169,0.15)] relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-display text-[64px] font-black text-secondary/40 select-none">1</span>
            </div>
          </div>

          {/* Rank 3 */}
          <div className="w-1/3 flex flex-col items-center group relative z-10">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-[#CD8032] bg-surface-container overflow-hidden mb-sm shadow-[0_0_20px_rgba(205,128,50,0.3)] relative z-20 drop-shadow-2xl">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHf56LyFo_6vyAxE6V_B1mz7jvBO9CqVRqrybvPj9vDlZrNOq4f7JTkMC4qoEGhv2LsESJT1HCF6rbK2adrpNI6N5ZEKWkBIEvHfqEcjl1hKdfVqmM4fJFbQ6XlbB6eZrLX1FKF1BxAScinvBeoHLDnbe5goY961IVPRHJlI9316OD3W3gjI3-35DejWl8JiM7LIfC1CecVXSf2JNLhZmuxAewQeEmt4QhgzsC0IGZ-2dMsxmJOaKhxXICcndKYKwPcw0V0tftZisL" className="w-full h-full object-cover" alt="SarahK" />
            </div>
            <span className="font-h3 text-on-surface mb-xs drop-shadow-md">SarahK</span>
            <span className="font-label-caps text-outline mb-md">10,950 pts</span>
            <div className="w-full h-[120px] md:h-[160px] bg-gradient-to-t from-surface-container to-surface-container-high rounded-t-xl border-t border-l border-r border-white/10 flex items-start justify-center pt-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-display text-[40px] font-black text-outline/30 select-none">3</span>
            </div>
          </div>
          
        </div>
      </main>

      {/* Action Footer */}
      <footer className="p-xl border-t border-white/10 bg-background/80 backdrop-blur-xl relative z-20 flex flex-col sm:flex-row justify-center items-center gap-md">
        <button 
          onClick={() => navigate('/')}
          className="w-full sm:w-auto px-xl py-sm rounded-lg border border-outline hover:bg-white/5 text-on-surface transition-colors font-label-caps"
        >
          Exit to Home
        </button>
        <button 
          onClick={() => navigate('/analytics')}
          className="w-full sm:w-auto px-xl py-sm rounded-lg bg-primary hover:bg-inverse-primary text-on-primary transition-colors font-label-caps flex items-center justify-center gap-xs shadow-[0_0_20px_rgba(255,181,156,0.3)]"
        >
          <span className="material-symbols-outlined text-[18px]">analytics</span>
          View Analytics
        </button>
      </footer>
    </div>
  );
}
