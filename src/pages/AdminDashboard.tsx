import React from 'react';
import { useNavigate } from 'react-router-dom';

export function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="flex justify-between items-center px-6 py-4 w-full sticky top-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-[0_0_20px_rgba(255,180,160,0.05)] flex-shrink-0">
        <div className="flex items-center gap-md">
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-display tracking-tight">QuizPulse</span>
          <span className="px-sm py-xs bg-surface-container-high rounded text-on-surface-variant font-label-caps ml-sm">Admin</span>
        </div>
        
        <div className="flex-1 max-w-md mx-xl hidden md:block">
          <div className="relative flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-white/5 overflow-hidden border border-white/5">
            <div className="grid place-items-center h-full w-12 text-outline">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input 
              type="text" 
              id="search" 
              placeholder="Search questions, sessions..." 
              className="peer h-full w-full outline-none text-sm bg-transparent pr-2 text-on-surface placeholder-outline"
            />
          </div>
        </div>

        <div className="flex items-center gap-md">
          <button onClick={() => navigate('/lobby')} className="bg-tertiary-container text-on-tertiary-container font-label-caps px-lg py-sm rounded-full shadow-[0_0_20px_rgba(255,179,169,0.2)] hover:shadow-[0_0_30px_rgba(255,179,169,0.4)] transition-all flex items-center gap-xs border border-tertiary-container/50">
            <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>sensors</span>
            GO LIVE
          </button>
          
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-outline font-medium hover:text-on-surface hover:bg-white/5 transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-outline font-medium hover:text-on-surface hover:bg-white/5 transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined">history</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-white/10 ml-sm cursor-pointer">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF9d5QXQ3MjupmHA8BRC7OVvK93YZ19dTUv7zWNLInO3k6T1DfnGaf8SF5gHKrhOw4nNdkPSU--M9tgWiVMx-YOzIdFjz4MWWOmb668gmZUggonqw0OFK3VUDDUDNPgaZ0mYPhrg9MhMQm0j3IQ1WLgP2uxS2S9wiMGjND5RJ6hNWyG_bhC7W1zQW68hPxc-m0eq4t1di0CVWuxmuGB-szGBsO-hLHQba9NLVwROcaos7ug6UltY2eguT33Gfa6uzSAdMd2is9qwb0" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 glass-panel border-r-0 border-l-0 border-b-0 hidden md:flex flex-col py-container-padding px-md gap-sm flex-shrink-0 z-10 relative">
          <div className="px-sm pb-md">
            <p className="font-label-caps text-outline uppercase tracking-widest">Workspace</p>
          </div>
          
          <a href="#" className="flex items-center gap-md px-md py-sm rounded-lg bg-primary-container/20 text-primary border border-primary/30 shadow-[0_0_15px_rgba(255,180,160,0.1)] group relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"></div>
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>view_list</span>
            <span className="font-h3 text-body-md font-semibold">Questions</span>
          </a>
          
          <a href="#" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors group">
            <span className="material-symbols-outlined group-hover:text-secondary transition-colors">monitoring</span>
            <span className="font-body-md text-body-md">Live Monitor</span>
          </a>
          <a href="#" onClick={(e) => {e.preventDefault(); navigate('/analytics');}} className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors group">
            <span className="material-symbols-outlined group-hover:text-tertiary-container transition-colors">bar_chart</span>
            <span className="font-body-md text-body-md">Analytics</span>
          </a>
          
          <div className="mt-auto px-sm pt-xl border-t border-white/5">
            <button onClick={() => navigate('/')} className="flex items-center gap-md w-full text-on-surface-variant hover:text-error transition-colors">
              <span className="material-symbols-outlined">logout</span>
              <span className="font-body-md text-body-md">Exit Builder</span>
            </button>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto relative z-0 p-container-padding scroll-smooth">
          <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="fixed bottom-0 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto space-y-xl relative z-10 pb-xl">
            <section className="space-y-lg">
              <div>
                <h1 className="font-h1 text-h2 text-on-surface">Space Exploration Quiz</h1>
                <p className="font-body-lg text-on-surface-variant mt-xs">Build and refine your interactive session.</p>
              </div>
              
              <div className="glass-panel rounded-xl p-lg flex flex-col md:flex-row gap-md items-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
                <div className="flex-1 w-full relative">
                  <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-tertiary-container">auto_awesome</span>
                  <input 
                    type="text" 
                    placeholder="What's the topic? e.g., 'Mars Rovers' or 'Orbital Mechanics'" 
                    className="w-full bg-surface-container-highest/50 border border-outline-variant/50 rounded-lg py-sm pl-xl pr-md text-on-surface font-body-md focus:border-secondary focus:outline-none transition-all"
                  />
                </div>
                <button className="w-full md:w-auto shrink-0 bg-gradient-to-r from-primary to-secondary text-surface-container-lowest font-label-caps px-lg py-sm rounded-lg flex items-center justify-center gap-sm shadow-[0_0_20px_rgba(255,180,160,0.2)] hover:shadow-[0_0_30px_rgba(238,192,152,0.3)] transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
                  Generate with Gemini
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                </button>
              </div>
            </section>

            <section className="space-y-lg">
              <div className="flex justify-between items-end border-b border-white/5 pb-sm">
                <h2 className="font-h3 text-h3 text-on-surface">Questions (12)</h2>
                <button className="text-secondary hover:text-secondary-fixed flex items-center gap-xs font-label-caps">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  ADD BLANK
                </button>
              </div>
              
              <div className="space-y-md">
                {/* Active Question Card */}
                <div className="glass-panel rounded-xl p-0 flex flex-col relative glass-panel-glow overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-secondary"></div>
                  
                  <div className="flex items-start gap-md p-lg border-b border-white/5 bg-white/[0.01]">
                    <div className="cursor-grab mt-sm text-outline hover:text-on-surface-variant active:cursor-grabbing">
                      <span className="material-symbols-outlined">drag_indicator</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-sm">
                        <span className="font-label-caps text-secondary bg-secondary/10 px-xs py-[2px] rounded">Q1</span>
                        <div className="flex items-center gap-sm">
                          <div className="flex items-center bg-surface-container-high rounded px-sm py-xs border border-white/5 cursor-pointer hover:border-white/20 transition-colors">
                            <span className="material-symbols-outlined text-[16px] text-outline mr-xs">timer</span>
                            <span className="font-label-caps text-on-surface">20s</span>
                            <span className="material-symbols-outlined text-[16px] text-outline ml-xs">expand_more</span>
                          </div>
                          <button className="text-outline hover:text-error transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5">
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </div>
                      </div>
                      <textarea 
                        className="w-full bg-transparent border-none p-0 text-h3 font-h3 text-on-surface resize-none focus:ring-0 focus:outline-none placeholder-outline" 
                        rows={2}
                        defaultValue="Which telescope was launched into space in 1990 to observe the universe in visible, ultraviolet, and near-infrared light?"
                      />
                    </div>
                  </div>
                  
                  <div className="p-lg grid grid-cols-1 md:grid-cols-3 gap-lg">
                    <div className="md:col-span-1 h-32 md:h-full border-2 border-dashed border-outline-variant/50 rounded-lg flex flex-col items-center justify-center text-outline hover:text-secondary hover:border-secondary hover:bg-secondary/5 transition-all cursor-pointer bg-surface-container-lowest/50 relative overflow-hidden group">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnt0J0R6DOozvAP_RLFqEgC6HwG6cTZKIizhPOOrA0K_P0pNToSMxdHy5neVqaz7B0V5mchXF5JoNwN1wbA5FXJvNrO5vWz3r4WLVdfDkTGvekynLA-FjP8qsQwRSVqFs_Pxr4yKu7gKSxOyPuQ3-sKxosgSteSU6-m7FT69Ro2xnsF0m6lgLkQEHaxNJGxGRr4Hn2rp6KFa_ztxga2vKtw9AblyoAlnyEDCWpD2pjWgyyBUVmiBKiEiH19tFU3xGM58QF_qtJFHKn" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-opacity" alt="Hubble space telescope" />
                      <div className="relative z-10 flex flex-col items-center drop-shadow-md">
                        <span className="material-symbols-outlined text-[32px] mb-xs">image</span>
                        <span className="font-label-caps text-on-surface">Replace Media</span>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 space-y-sm">
                      <div className="flex items-center gap-sm p-sm rounded-lg border border-secondary bg-secondary/10 relative overflow-hidden">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-secondary text-surface-container-lowest shrink-0 cursor-pointer">
                          <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
                        </div>
                        <input type="text" defaultValue="Hubble Space Telescope" className="flex-1 bg-transparent border-none p-0 text-body-md font-body-md text-on-surface focus:ring-0 focus:outline-none" />
                      </div>
                      
                      <div className="flex items-center gap-sm p-sm rounded-lg border border-white/5 bg-surface-container-highest/30 hover:border-white/20 transition-colors">
                        <div className="w-6 h-6 rounded-full border-2 border-outline flex items-center justify-center shrink-0 cursor-pointer hover:border-on-surface"></div>
                        <input type="text" defaultValue="James Webb Space Telescope" className="flex-1 bg-transparent border-none p-0 text-body-md font-body-md text-on-surface-variant focus:ring-0 focus:outline-none focus:text-on-surface" />
                      </div>
                      
                      <div className="flex items-center gap-sm p-sm rounded-lg border border-white/5 bg-surface-container-highest/30 hover:border-white/20 transition-colors">
                        <div className="w-6 h-6 rounded-full border-2 border-outline flex items-center justify-center shrink-0 cursor-pointer hover:border-on-surface"></div>
                        <input type="text" defaultValue="Kepler Space Telescope" className="flex-1 bg-transparent border-none p-0 text-body-md font-body-md text-on-surface-variant focus:ring-0 focus:outline-none focus:text-on-surface" />
                      </div>
                      
                      <div className="flex items-center gap-sm p-sm rounded-lg border border-white/5 bg-surface-container-highest/30 hover:border-white/20 transition-colors">
                        <div className="w-6 h-6 rounded-full border-2 border-outline flex items-center justify-center shrink-0 cursor-pointer hover:border-on-surface"></div>
                        <input type="text" defaultValue="Spitzer Space Telescope" className="flex-1 bg-transparent border-none p-0 text-body-md font-body-md text-on-surface-variant focus:ring-0 focus:outline-none focus:text-on-surface" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inactive Question Card */}
                <div className="glass-panel rounded-xl p-0 flex flex-col relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-md p-md">
                    <div className="cursor-grab text-outline hover:text-on-surface-variant">
                      <span className="material-symbols-outlined">drag_indicator</span>
                    </div>
                    <span className="font-label-caps text-outline bg-white/5 px-xs py-[2px] rounded">Q2</span>
                    <div className="flex-1 truncate font-body-md text-on-surface">
                      What is the name of the first artificial Earth satellite?
                    </div>
                    <div className="flex items-center gap-md">
                      <span className="text-outline font-label-caps">15s</span>
                      <div className="w-6 h-6 rounded border border-white/10 bg-white/5 flex items-center justify-center text-outline">
                        <span className="material-symbols-outlined text-[14px]">image</span>
                      </div>
                      <button className="text-outline hover:text-on-surface">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
