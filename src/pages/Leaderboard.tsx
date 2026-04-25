import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Leaderboard() {
  const navigate = useNavigate();
  
  const players = [
    { rank: 1, name: "NeonNinja", score: 8540, avatar: "AB6AXuADistXv6nkPxPw0g-DxA_vViQurUYaeqIMDqPxIdI0fAH_FOh5dNwPqsIX4KrqrbfwZHrDaM-9B4c91a4iYKs1m5nBJkPsNBwzRJqRCsuGDjQ9VIOuYflP2OLOXLsYYUvcwPxSC-0n6_hlAXuBdJB017MGhpmtTjuWVVj6iiVZqSZBYfZpE0SXZ6kvIoEGKPXYP3MOcu-i_X5P0fhSWT8Xrz4FPI-8UTZY4GCB1KYsRywWdKj_v9Q2iCZz6HiOr5qirZHcAEf9uSBd", status: "up" },
    { rank: 2, name: "AlexM", score: 8200, avatar: "AB6AXuDJTqXSlbyiqDfIWoe-atG6oWs1nYmiorShaLxd3JyKq7XMLE9RpZ5Epp5_QRzERi19eIyHpM_FCO2XELP7n0ikySvVzlx4zDMs-4b-hnHVt00dsbhxdaT_-Fk81zWl1M3_VcZa7ND0M3S9AlzrwtAWuZqxVBR7DYP3fpzbCilE2pbHVZWBWjuKlPPyiIebRvnxyyjQf6X2mmBgwzPP3Bkp6G4xkd4Obaviq3qw3btMkvW9SujDXkEAG2XcAuC_0FTHlR44RfyaCWSL", status: "none", isMe: true },
    { rank: 3, name: "SarahK", score: 7950, avatar: "AB6AXuBHf56LyFo_6vyAxE6V_B1mz7jvBO9CqVRqrybvPj9vDlZrNOq4f7JTkMC4qoEGhv2LsESJT1HCF6rbK2adrpNI6N5ZEKWkBIEvHfqEcjl1hKdfVqmM4fJFbQ6XlbB6eZrLX1FKF1BxAScinvBeoHLDnbe5goY961IVPRHJlI9316OD3W3gjI3-35DejWl8JiM7LIfC1CecVXSf2JNLhZmuxAewQeEmt4QhgzsC0IGZ-2dMsxmJOaKhxXICcndKYKwPcw0V0tftZisL", status: "down" },
    { rank: 4, name: "Quizer101", score: 6400, avatar: "AB6AXuBa5uefPaYErdYdk2k8MS7xOd7zDIhatDifIV8jB4Ji0wPja_PUoepfKy4Cy4LtikZcdaG4Vr8wNPKi9jabLdlzItpvUVUKvEiKe9r2XSCftFwH0wTRbE_CPnh6647VIXWYx0D3z6a97bo2lddkknHktmhKQjHL8zYR3c6odmvaHUBPStqITQcZNNYfohZ4btb54TDhO4nCgE8tFtrXSIaHPROi2ODtL2d5L7rvbWDf7RBpMI_otG1DSUwdC3oxYRxINUU_N27Ki8jp", status: "up" },
    { rank: 5, name: "EmmaW", score: 5800, avatar: "AB6AXuAWeBZhXmv9T-k6EKKA3RU25byhYNPggfiuc1Db2Ds8hQ9UVTb9fHQ4dWDOGOKrwApE7BPYyEHe0h7iaJSaX0eu0TfQJ6YJE48Bwv1ZNs55AGVHbNISAKCj0je1JMR_VD4zs_OTxeN2IGcLaYpmC0lhCH6_7Qx-KE-ekCgERPm6sFlsR6KWQJKaFXFMbQAQwnx8KEJ57AC2nLXBv7EW_lFuVoME2Yydw2yFbWUxxImIM4bZRnbohACz1Am2UrDCEQmu5sEhFhkiuPse", status: "none" },
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background">
      <div className="fixed top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-tertiary-container/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <header className="p-xl text-center relative z-20">
        <h1 className="font-h1 text-h1 text-on-surface mb-xs drop-shadow-md">Top 5</h1>
        <p className="font-body-lg text-outline">After Question 1</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-md relative z-10 w-full max-w-2xl mx-auto space-y-md">
        {players.map((player) => (
          <div 
            key={player.rank} 
            className={`w-full flex items-center p-md rounded-xl backdrop-blur-md border ${player.isMe ? 'bg-primary/20 border-primary shadow-[0_0_20px_rgba(255,181,156,0.3)]' : 'bg-surface-container/40 border-white/10'} relative overflow-hidden transition-all hover:bg-surface-container-high/50 group`}
          >
            {player.isMe && <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary"></div>}
            
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-caps mr-md ${player.rank === 1 ? 'bg-secondary text-background' : 'bg-white/5 text-outline'}`}>
              {player.rank}
            </div>
            
            <div className="w-12 h-12 rounded-full overflow-hidden mr-md shrink-0 border border-white/20 group-hover:border-white/40 transition-colors">
              <img src={`https://lh3.googleusercontent.com/aida-public/${player.avatar}`} alt={player.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-sm">
                <span className={`font-h3 text-h3 ${player.isMe ? 'text-primary' : 'text-on-surface'}`}>{player.name}</span>
                {player.isMe && <span className="font-label-caps text-[10px] bg-primary/20 text-primary px-xs py-[2px] rounded border border-primary/30">YOU</span>}
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <span className="font-h2 text-h3 text-on-surface tracking-tight">{player.score}</span>
              {player.status === 'up' && <span className="material-symbols-outlined text-secondary text-[16px]">arrow_upward</span>}
              {player.status === 'down' && <span className="material-symbols-outlined text-error text-[16px]">arrow_downward</span>}
            </div>
          </div>
        ))}
        
        <button 
          onClick={() => navigate('/results')}
          className="mt-xl text-outline hover:text-on-surface transition-colors font-label-caps flex items-center gap-xs"
        >
          Skip to Final Results <span className="material-symbols-outlined text-[16px]">fast_forward</span>
        </button>
      </main>
    </div>
  );
}
