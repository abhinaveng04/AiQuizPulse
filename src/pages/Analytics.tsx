import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function Analytics() {
  const navigate = useNavigate();

  const mockData = [
    { name: 'Q1', correct: 85, incorrect: 15 },
    { name: 'Q2', correct: 40, incorrect: 60 },
    { name: 'Q3', correct: 92, incorrect: 8 },
    { name: 'Q4', correct: 70, incorrect: 30 },
    { name: 'Q5', correct: 55, incorrect: 45 },
    { name: 'Q6', correct: 88, incorrect: 12 },
    { name: 'Q7', correct: 30, incorrect: 70 },
    { name: 'Q8', correct: 95, incorrect: 5 },
  ];

  const difficultQuestions = [
    { id: 'Q7', text: 'Which equation correctly describes the conservation of momentum in a closed system?', accuracy: '30%' },
    { id: 'Q2', text: 'What is the primary function of the James Webb Space Telescope\'s sunshield?', accuracy: '40%' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-x-hidden">
      <header className="flex justify-between items-center px-6 py-4 w-full sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-md">
          <button onClick={() => navigate('/admin')} className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:text-white hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="font-h3 text-on-surface">Session Analytics</h1>
            <p className="font-label-caps text-outline">Space Exploration Quiz • March 14, 2024</p>
          </div>
        </div>
        <button className="bg-surface-container border border-white/10 px-md py-sm rounded-lg font-label-caps text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-sm">
          <span className="material-symbols-outlined text-[18px]">download</span>
          <span className="hidden sm:inline">Export CSV</span>
        </button>
      </header>

      <main className="flex-1 p-container-padding max-w-7xl mx-auto w-full space-y-xl relative z-10 pb-xl">
        <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-tertiary-container/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-md relative z-10">
          <div className="glass-panel p-lg rounded-xl border-[0.5px] border-white/10 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary text-[32px] mb-sm">group</span>
            <span className="font-h1 text-[40px] text-on-surface leading-none mb-xs">42</span>
            <span className="font-label-caps text-outline">Total Players</span>
          </div>
          <div className="glass-panel p-lg rounded-xl border-[0.5px] border-white/10 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-secondary text-[32px] mb-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            <span className="font-h1 text-[40px] text-on-surface leading-none mb-xs">68%</span>
            <span className="font-label-caps text-outline">Avg. Accuracy</span>
          </div>
          <div className="glass-panel p-lg rounded-xl border-[0.5px] border-white/10 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-tertiary-container text-[32px] mb-sm">bolt</span>
            <span className="font-h1 text-[40px] text-on-surface leading-none mb-xs">4.2s</span>
            <span className="font-label-caps text-outline">Avg. Response Time</span>
          </div>
          <div className="glass-panel p-lg rounded-xl border-[0.5px] border-white/10 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-[#CD8032] text-[32px] mb-sm">workspace_premium</span>
            <span className="font-h1 text-[40px] text-on-surface leading-none mb-xs truncate w-full">NeonNinja</span>
            <span className="font-label-caps text-outline">Top Scorer</span>
          </div>
        </section>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg relative z-10">
          
          {/* Main Chart */}
          <div className="lg:col-span-2 glass-panel p-lg rounded-xl border-[0.5px] border-white/10 flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 p-md opacity-20 pointer-events-none">
                <span className="material-symbols-outlined text-[100px]">monitoring</span>
             </div>
            <h2 className="font-h3 text-on-surface mb-xs relative z-10">Question Accuracy Breakdown</h2>
            <p className="font-body-sm text-outline mb-xl relative z-10">Percentage of players who answered correctly vs incorrectly.</p>
            
            <div className="h-[300px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#A09E9D" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#A09E9D" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{ backgroundColor: '#1A1817', borderColor: '#333130', borderRadius: '8px', color: '#EBEAEE' }}
                    itemStyle={{ color: '#EBEAEE' }}
                  />
                  <Bar dataKey="correct" stackId="a" fill="#E7BDAE" radius={[0, 0, 4, 4]}>
                     {mockData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.correct > 50 ? '#E7BDAE' : '#B36044'} />
                     ))}
                  </Bar>
                  <Bar dataKey="incorrect" stackId="a" fill="#333130" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Tough Questions */}
          <div className="glass-panel p-lg rounded-xl border-[0.5px] border-white/10 flex flex-col h-full">
            <div className="flex items-center gap-sm mb-lg">
              <span className="material-symbols-outlined text-error">warning</span>
              <h2 className="font-h3 text-on-surface">Toughest Questions</h2>
            </div>
            
            <div className="space-y-md flex-1">
              {difficultQuestions.map((q) => (
                <div key={q.id} className="bg-surface-container/50 border border-white/5 rounded-lg p-md hover:bg-surface-container-high/50 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-sm">
                    <span className="font-label-caps text-on-surface-variant bg-white/5 px-xs py-[2px] rounded">{q.id}</span>
                    <span className="font-h3 text-error">{q.accuracy}</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant line-clamp-3">
                    {q.text}
                  </p>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-md py-sm border border-outline-variant text-on-surface-variant rounded-lg font-label-caps hover:text-white hover:border-white/30 transition-colors">
              Review Content
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
