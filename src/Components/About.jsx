
import React from "react";

 function AboutMeCard() {
  return (
    <section className="relative py-20 bg-[#F2F2F2] text-gray-800 px-[60px] font-sans overflow-hidden">
      
      
      
      <div className="absolute inset-0 opacity-[0.1]" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1.2px, transparent 1.2px), linear-gradient(90deg, #000 1.2px, transparent 1.2px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        
        <div className="flex items-center justify-center gap-6 mb-20">
          <div className="h-[2px] bg-black w-full"></div>
          <div className="text-center shrink-0">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase leading-none">
              ABOUT <span className="text-[#64BC4C]">ME</span>
            </h2>
            <p className="font-bold text-gray-500 tracking-[0.4em] uppercase text-xs mt-3">
              ALLOW ME TO INTRODUCE MYSELF.
            </p>
          </div>
          <div className="h-[2px] bg-black w-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative rotate-[-4deg] hover:rotate-0 transition-transform duration-500 shadow-2xl group">
              
              
              <div className="absolute -top-12 -left-10 text-[#64BC4C] font-serif text-3xl italic flex flex-col items-center opacity-80">
                <span className="mb-1">That's me</span>
                <svg width="45" height="45" viewBox="0 0 40 40" fill="none" className="rotate-[120deg]">
                  <path d="M5 5C5 5 15 30 35 35M35 35L25 35M35 35L35 25" stroke="#64BC4C" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              
            
              <div className="bg-white p-5 pb-24 border border-gray-200 shadow-2xl">
                <img
                  src="pic1.jpg"
                  alt="Tuyikunde Jackson"
                  className="w-[320px] h-[380px] object-cover border border-gray-100 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

        
          <div className="lg:col-span-7 space-y-8">
            <div className="text-xl leading-relaxed text-gray-700 space-y-6">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:text-black first-letter:mr-3 first-letter:float-left">
                My name is <span className="font-bold border-b-4 border-[#64BC4C] text-black">Tuyikunde Jackson</span>. 
                I'm an aspiring <span className="text-[#64BC4C] font-bold italic">web developer</span> passionate about building clean, modern, and user-friendly web applications. 
                I graduated high school in (MCE) combination and later joined Nyabiheke Alight Coding School to master full-stack skills.
              </p>
              <p>
                My specialty is front-end web design and development, making pixel magic and turning it into beautiful, semantic 
                <span className="font-bold text-black uppercase ml-1">HTML, CSS & REACT</span>. 
                I am highly motivated to create meaningful digital solutions for real-world problems.
              </p>
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12 border-t-2 border-black/10">
              
             
              <div>
                <h3 className="font-black text-2xl mb-6 uppercase italic tracking-tighter">THINGS I LOVE</h3>
                <div className="flex gap-8 items-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                  <span className="text-5xl" title="React">⚛️</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="black">
             <path d="M4 4h16v6H4V4zm0 10h16v6H4v-6zm2 2v2h2v-2H6z"/>
                       </svg>


                  <span className="text-4xl font-black italic">Web</span>
                </div>
              </div>

             
              <div>
                <h3 className="font-black text-2xl mb-6 uppercase italic tracking-tighter">LOOK WHAT I CAN DO</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {[
                     "React.js", "Tailwind CSS", 
                      
                    ,  "Frontend Dev", "Backend Dev","Node.js(with mongodb database)","Problem Solving"
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 font-bold text-gray-900 text-[13px] tracking-wide">
                      <span className="text-[#64BC4C] text-2xl font-black leading-none">+</span> {skill.toUpperCase()}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default AboutMeCard