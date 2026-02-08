
import React from "react";

function ModernFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F2F2F2] pt-16 pb-8 px-[60px] border-t-4 border-black font-sans overflow-hidden">
   
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1.2px, transparent 1.2px), linear-gradient(90deg, #000 1.2px, transparent 1.2px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
         
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#64BC4C]">
                <span className="text-[#64BC4C] font-black text-xl italic">T</span>
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase italic">
                Jackson<span className="text-[#64BC4C]">.</span>
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs font-medium">
              Turning complex problems into beautiful, pixel-perfect digital solutions. 
              Available for new projects and collaborations.
            </p>
          </div>
              <div>
             <a
              href="https://linkedin.com/in/tuyikunde-jackson"
              target="_blank"
              rel="noreferrer"
              className="px-8 space-y-4  b font-black uppercase italic tracking-widest hover:border-[#64BC4C] hover:text-[#64BC4C] transition-all transform hover:rotate-2"
            >
                            <svg role="img" viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                 <title>LinkedIn</title>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04
              -1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05
                c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.36z
              M5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12z
                 M7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56
                  C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72
                   C24 .77 23.21 0 22.23 0z"/>
                 </svg>
                       LinkedIn Profile
            </a><br/>
            <a
              href="https://github.com/Jackson-tj74"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-5  text-black font-black uppercase italic tracking-widest hover:text-[#64BC4C] transition-all transform hover:-rotate-2"
            >              <svg role="img" viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                   <title>GitHub</title>
             <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56
                0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.29-1.71-1.29-1.71
                 -1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19
                      1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55
                    -2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1
                  -.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18
                   .92-.26 1.91-.39 2.89-.39s1.97.13 2.89.39
                 c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05
                  .74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.28 5.69
                       .41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14
                    0 .31.21.68.8.56 4.57-1.53 7.86-5.86 7.86-10.97
                 C23.5 5.74 18.27.5 12 .5z"/>
                       </svg>

                                GitHub Profile
            </a>
          
          </div>

          <div className="space-y-6">
            <h3 className="font-black text-lg mb-2 uppercase italic border-b-2 border-black inline-block">Get In Touch</h3>
            <div className="space-y-4 font-bold text-sm uppercase tracking-wider">
              <p className="flex flex-col">
                <span className="text-gray-400 text-[10px]">Email Me:</span>
                <a href="mailto:tuyikundejackson@gmail.com" className="hover:text-[#64BC4C]">tuyikundejackson74@email.com</a>
              </p>
              <p className="flex flex-col">
                <span className="text-gray-400 text-[10px]">Based In:</span>
                <span>Kigali, Rwanda</span>
              </p>
               <p className="flex flex-col">
                <span className="text-gray-400 text-[10px]">Contact Me:</span>
                <span>+250 735 569 406</span>
                
                
              </p>
                
                
               
            </div>
            
            
          </div>
        </div>
        <div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            © {currentYear} Tuyikunde Jackson — All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] font-black text-[#64BC4C] italic uppercase">Built with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ModernFooter;