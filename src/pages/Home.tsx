import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed top-[40%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <nav className="hidden md:flex justify-between items-center px-6 py-4 w-full sticky top-0 z-50 bg-background/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(179,96,68,0.15)]">
        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary font-display font-bold tracking-tight active:scale-95 duration-200">
          QuizPulse
        </div>
        <div className="flex items-center gap-4">
          <button className="text-outline font-medium hover:text-on-surface hover:bg-white/5 transition-all p-2 rounded-full active:scale-95 duration-200 flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-outline font-medium hover:text-on-surface hover:bg-white/5 transition-all p-2 rounded-full active:scale-95 duration-200 flex items-center justify-center">
            <span className="material-symbols-outlined">history</span>
          </button>
        </div>
      </nav>

      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-container-padding py-xl md:py-[80px] pb-32">
        <header className="text-center mb-xl md:mb-[64px] max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="font-h1 text-h1 text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary mb-md drop-shadow-[0_0_15px_rgba(255,181,156,0.2)]">
            QuizPulse: The Future of Live Quizzes
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Experience adrenaline-fueled real-time trivia. Jump straight into the action or broadcast your own interactive showdown to the world.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg w-full">
          {/* Join Flow */}
          <div className="md:col-span-6 glass-panel rounded-xl p-lg shadow-[0_0_30px_rgba(179,96,68,0.15)] relative overflow-hidden flex flex-col h-full group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="flex items-center gap-sm mb-sm">
              <span className="material-symbols-outlined text-secondary text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>login</span>
              <h2 className="font-h2 text-h2 text-on-surface">Join a Quiz</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
              Enter the access PIN provided by your host to connect instantly.
            </p>
            <form className="flex flex-col gap-md mt-auto">
              <div className="relative">
                <label className="font-label-caps text-label-caps text-secondary mb-xs block tracking-widest">GAME PIN</label>
                <input 
                  type="text" 
                  maxLength={6} 
                  placeholder="6-Digit PIN" 
                  className="w-full bg-surface-container-high border border-outline-variant rounded-lg px-md py-md font-h3 text-h3 text-center text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-outline-variant/50 tracking-widest"
                />
              </div>
              <div className="relative">
                <label className="font-label-caps text-label-caps text-primary mb-xs block tracking-widest">DISPLAY NAME</label>
                <input 
                  type="text" 
                  placeholder="Your Nickname" 
                  className="w-full bg-surface-container-high border border-outline-variant rounded-lg px-md py-sm font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline-variant/50"
                 />
              </div>
              <button 
                type="button" 
                onClick={() => navigate('/lobby')}
                className="mt-sm w-full bg-gradient-to-r from-primary-container to-secondary text-surface-container-lowest font-h3 text-[20px] font-bold py-md rounded-lg hover:shadow-[0_0_25px_rgba(231,189,174,0.4)] transition-all relative overflow-hidden group-hover:scale-[1.02] duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-sm">
                  Enter Arena <span className="material-symbols-outlined">arrow_forward</span>
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          {/* Host Flow */}
          <div className="md:col-span-6 glass-panel rounded-xl p-lg shadow-[0_0_30px_rgba(179,96,68,0.05)] relative overflow-hidden flex flex-col h-full group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="flex items-center gap-sm mb-sm">
              <span className="material-symbols-outlined text-primary text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
              <h2 className="font-h2 text-h2 text-on-surface">Host a Quiz</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
              Create a new session, manage your question library, and broadcast live to your audience.
            </p>
            <div className="flex flex-col gap-md mt-auto">
              <div className="w-full h-[140px] rounded-lg bg-surface-container border border-outline-variant/50 flex flex-col items-center justify-center relative overflow-hidden mb-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                <span className="material-symbols-outlined text-[48px] text-primary/60 mb-xs">dashboard_customize</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">Host Dashboard</span>
              </div>
              <button 
                type="button" 
                onClick={() => navigate('/admin')}
                className="w-full bg-surface-container-highest border border-outline-variant text-on-surface font-body-lg text-body-lg font-bold py-md rounded-lg hover:bg-surface-bright hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center gap-sm group-hover:scale-[1.02] duration-300"
              >
                <span className="material-symbols-outlined">launch</span>
                <span>Open Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile nav for demo */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 border-t border-white/10 rounded-t-2xl bg-background/80 backdrop-blur-lg shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex justify-around items-center h-20 pb-safe w-full">
          <button onClick={() => navigate('/')} className="flex flex-col items-center justify-center text-primary drop-shadow-[0_0_10px_rgba(255,181,156,0.5)] scale-110 w-1/4">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>grid_view</span>
            <span className="font-display text-[10px] font-bold uppercase tracking-tighter mt-1">Home</span>
          </button>
          <button onClick={() => navigate('/lobby')} className="flex flex-col items-center justify-center text-outline hover:text-primary transition-colors w-1/4">
            <span className="material-symbols-outlined">bolt</span>
            <span className="font-display text-[10px] font-bold uppercase tracking-tighter mt-1">Live</span>
          </button>
          <button onClick={() => navigate('/analytics')} className="flex flex-col items-center justify-center text-outline hover:text-primary transition-colors w-1/4">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-display text-[10px] font-bold uppercase tracking-tighter mt-1">Library</span>
          </button>
          <button className="flex flex-col items-center justify-center text-outline hover:text-primary transition-colors w-1/4">
            <span className="material-symbols-outlined">person</span>
            <span className="font-display text-[10px] font-bold uppercase tracking-tighter mt-1">Profile</span>
          </button>
        </div>
      </nav>
    </>
  );
}
