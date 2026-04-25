import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Lobby() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-secondary/10 blur-[150px] pointer-events-none z-0"></div>

      <nav className="sticky top-0 w-full z-50 border-b border-white/10 shadow-[0_0_20px_rgba(234,88,12,0.15)] flex justify-between items-center px-6 py-4 bg-background/80 backdrop-blur-xl">
        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-display tracking-tight">QuizPulse</div>
        <div className="flex items-center gap-md">
          <button className="text-outline font-medium hover:text-white hover:bg-white/5 transition-all active:scale-95 duration-200 p-sm rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-outline font-medium hover:text-white hover:bg-white/5 transition-all active:scale-95 duration-200 p-sm rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">history</span>
          </button>
          <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden ml-sm">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGHTkoLJuUG4k3EsWU3DTBClLqMLOBrxK8gYg6rtCN8AdmlRSkFk2jfZu6X-e_-k6FGh98m_XxwvtOSACK9SDpUI_OxAFYKPJNLR8G1yH6E5fVLAgFvqQMLdF03SH8RDpNT1ENCBB3O4WIr-XvlYjbQWppsw9PQRXgXw6XiR3_mnbEuNFX_Tu2FoMnDMYG8l0IgcX4w-69iFdrvr-Qjolhy_kMesrDSqRTeTOoNxqD05pCIuVEeKnZMiQ3jUnxhFAhyX3VCTFIpTMZ" alt="User profile avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col p-container-padding lg:grid lg:grid-cols-12 gap-lg relative z-10 max-w-7xl mx-auto w-full">
        {/* Left Column: PIN & QR Code Display */}
        <div className="lg:col-span-5 flex flex-col h-full gap-lg">
          <div className="flex-1 relative bg-white/5 backdrop-blur-[12px] border-[0.5px] border-white/20 rounded-xl p-xl flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(249,115,22,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl pointer-events-none"></div>
            <div className="bg-surface-container-high/80 px-md py-sm rounded-full border border-white/10 mb-xl flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>sensors</span>
              <span className="font-label-caps text-secondary uppercase tracking-widest">Live Lobby</span>
            </div>
            
            <p className="font-body-lg text-on-surface-variant mb-xs">Join at <span className="text-inverse-surface font-semibold">quizpulse.com</span> with PIN</p>
            <h1 className="font-h1 text-[64px] leading-tight text-inverse-surface font-black tracking-widest mb-xl drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">452 901</h1>
            
            <div className="w-56 h-56 bg-white rounded-xl p-md border-4 border-surface-container flex items-center justify-center shadow-lg relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnRgb3lxpIU6itf-xefzh-ODddAyvsb1PHsgoRwtsL0IuSWxjXcGXt2p9Ry9iu1cF9oHXFs_OPYXvDFlSXEtnVeEcebkUBEJLtBWnoyM8rIwI88CpeMpeQgHWZnk6hPW4EjaTb6GpXnz9RExRwygKlvTV_p2uegUpFEM8Kqh_kyo4bWFAv3OQxUUKfP9mMSAAyN16GTAUHx-i_SEWDaoKYn9L3bRpJ0XFRVYJPlbifb32GRpz4uFTquUWegRmwF-GLULsHbmRw5aTZ" alt="QR Code" className="w-full h-full object-contain relative z-10 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Right Column: Participant List & Controls */}
        <div className="lg:col-span-7 flex flex-col h-full gap-lg">
          <div className="flex-1 bg-white/5 backdrop-blur-[12px] border-[0.5px] border-white/20 rounded-xl p-lg flex flex-col shadow-lg">
            <div className="flex justify-between items-center mb-md pb-md border-b border-white/10">
              <h2 className="font-h3 text-on-background flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">groups</span>
                Participants
              </h2>
              <div className="bg-primary-container text-on-primary-container px-sm py-xs rounded font-label-caps">
                8 Joined
              </div>
            </div>

            <div className="flex-1 overflow-y-auto min-h-[300px]">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-md pt-sm">
                {[
                  { name: 'AlexM', img: 'AB6AXuDJTqXSlbyiqDfIWoe-atG6oWs1nYmiorShaLxd3JyKq7XMLE9RpZ5Epp5_QRzERi19eIyHpM_FCO2XELP7n0ikySvVzlx4zDMs-4b-hnHVt00dsbhxdaT_-Fk81zWl1M3_VcZa7ND0M3S9AlzrwtAWuZqxVBR7DYP3fpzbCilE2pbHVZWBWjuKlPPyiIebRvnxyyjQf6X2mmBgwzPP3Bkp6G4xkd4Obaviq3qw3btMkvW9SujDXkEAG2XcAuC_0FTHlR44RfyaCWSL' },
                  { name: 'SarahK', img: 'AB6AXuBHf56LyFo_6vyAxE6V_B1mz7jvBO9CqVRqrybvPj9vDlZrNOq4f7JTkMC4qoEGhv2LsESJT1HCF6rbK2adrpNI6N5ZEKWkBIEvHfqEcjl1hKdfVqmM4fJFbQ6XlbB6eZrLX1FKF1BxAScinvBeoHLDnbe5goY961IVPRHJlI9316OD3W3gjI3-35DejWl8JiM7LIfC1CecVXSf2JNLhZmuxAewQeEmt4QhgzsC0IGZ-2dMsxmJOaKhxXICcndKYKwPcw0V0tftZisL' },
                  { name: 'DJ_Tech', img: 'AB6AXuBuApq6GE_W8e4DA8ttyctFaApqqcEhQbIuUY6lyhftQUeYf_kEjO5JBe6UA_5O5OUEXuTTXsTKsWrKHqVsHIGJMzcWsQ0Ncr8rNSfE_y26voBKNWu2PoIcn6soEGIbRa8_cx2QyDGt2oV18Xm6LRvSqMMK-c_0nEMQO67RwQDxa5H7i7wT0_wZm58nREyJL7zA4zxbC0idWdZ9cB178BOOB_8T2k2tyMlDFCzsU5CL39Nrf6g9rNJpuErmLM137tXu0lLgb6uSj6-p' },
                  { name: 'EmmaW', img: 'AB6AXuAWeBZhXmv9T-k6EKKA3RU25byhYNPggfiuc1Db2Ds8hQ9UVTb9fHQ4dWDOGOKrwApE7BPYyEHe0h7iaJSaX0eu0TfQJ6YJE48Bwv1ZNs55AGVHbNISAKCj0je1JMR_VD4zs_OTxeN2IGcLaYpmC0lhCH6_7Qx-KE-ekCgERPm6sFlsR6KWQJKaFXFMbQAQwnx8KEJ57AC2nLXBv7EW_lFuVoME2Yydw2yFbWUxxImIM4bZRnbohACz1Am2UrDCEQmu5sEhFhkiuPse' },
                  { name: 'NeonNinja', img: 'AB6AXuADistXv6nkPxPw0g-DxA_vViQurUYaeqIMDqPxIdI0fAH_FOh5dNwPqsIX4KrqrbfwZHrDaM-9B4c91a4iYKs1m5nBJkPsNBwzRJqRCsuGDjQ9VIOuYflP2OLOXLsYYUvcwPxSC-0n6_hlAXuBdJB017MGhpmtTjuWVVj6iiVZqSZBYfZpE0SXZ6kvIoEGKPXYP3MOcu-i_X5P0fhSWT8Xrz4FPI-8UTZY4GCB1KYsRywWdKj_v9Q2iCZz6HiOr5qirZHcAEf9uSBd' },
                  { name: 'Quizer101', img: 'AB6AXuBa5uefPaYErdYdk2k8MS7xOd7zDIhatDifIV8jB4Ji0wPja_PUoepfKy4Cy4LtikZcdaG4Vr8wNPKi9jabLdlzItpvUVUKvEiKe9r2XSCftFwH0wTRbE_CPnh6647VIXWYx0D3z6a97bo2lddkknHktmhKQjHL8zYR3c6odmvaHUBPStqITQcZNNYfohZ4btb54TDhO4nCgE8tFtrXSIaHPROi2ODtL2d5L7rvbWDf7RBpMI_otG1DSUwdC3oxYRxINUU_N27Ki8jp' },
                ].map((player, i) => (
                  <div key={i} className="flex flex-col items-center gap-xs">
                    <div className="w-16 h-16 rounded-full border-2 border-secondary p-[2px] shadow-[0_0_15px_rgba(239,187,169,0.4)] transition-transform hover:scale-110 duration-200">
                      <img src={`https://lh3.googleusercontent.com/aida-public/${player.img}`} alt={player.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <span className="font-label-caps text-on-surface-variant truncate w-full text-center mt-2">{player.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-sm">
            <button 
              onClick={() => navigate('/live')}
              className="w-full py-md rounded-lg font-h3 font-bold bg-primary hover:bg-inverse-primary text-on-primary border border-outline-variant flex items-center justify-center gap-sm relative overflow-hidden transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20"></div>
              <span className="material-symbols-outlined">play_arrow</span>
              Start Quiz
            </button>
            <div className="flex items-center justify-center gap-xs text-error">
              <span className="material-symbols-outlined text-[16px]">info</span>
              <p className="font-body-md text-sm">Waiting for minimum 10 participants...</p>
            </div>
          </div>
        </div>

        {/* Rotating Tips */}
        <div className="lg:col-span-12 bg-white/5 backdrop-blur-md border-[0.5px] border-white/10 rounded-lg p-md flex items-center gap-md shadow-sm">
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-tertiary">lightbulb</span>
          </div>
          <p className="font-body-md text-on-surface-variant flex-1">
            <strong className="text-on-surface">Pro Tip:</strong> Participants earn bonus points for answering quickly. Remind them to keep their eyes on the screen!
          </p>
        </div>
      </main>
    </div>
  );
}
