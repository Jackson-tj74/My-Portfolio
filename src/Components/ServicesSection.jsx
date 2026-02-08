import React from "react";

function ServicesSection() {
  const services = [
    {
      title: "Backend Dev",
      description: "I design and build secure, scalable backend systems using MongoDB with node js for efficient data storage and management.",
      icon: "🚀"
    },
    {
      title: "Frontend Dev",
      description: "Redesigning the website to make it function efficiently (coding) using React.js and Tailwind CSS in a fast and optimized way.",
      icon: "⚛️"
    },
    {
      title: "Full-Stack Dev",
      description: "develop high-performance, fully responsive websites and web application both backend and frotend ",
      icon: "🚀⚛️"
    },
    {
      title: "SEO & Optimization",
      description: "Helping your website rank at the top on Google and making it load very quickly (performance optimization).",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-[#F2F2F2] text-gray-800 px-[20px] md:px-[60px] font-sans overflow-hidden border-t-4 border-black">
      
    
      <div className="absolute inset-0 opacity-[0.08]" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1.2px, transparent 1.2px), linear-gradient(90deg, #000 1.2px, transparent 1.2px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
       
        <div className="flex items-center justify-end gap-6 mb-16">
          <div className="h-[3px] bg-black flex-1"></div>
          <div className="text-right">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-none italic">
              MY <span className="text-[#64BC4C]">SERVICES</span>
            </h2>
            <p className="font-bold text-gray-500 tracking-[0.2em] uppercase text-xs mt-2">
              What I can do for your business.
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white border-2 border-black p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#64BC4C]/5"
            >
             
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                {service.icon}
              </div>

              
              <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4 flex items-center gap-2">
                <span className="text-[#64BC4C]">+</span> {service.title}
              </h3>

              
              <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6">
                {service.description}
              </p>

              
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

       
        <div className="mt-20 flex flex-col items-center">
          <div className="w-20 h-1 bg-[#64BC4C] mb-6"></div>
          <p className="text-center max-w-lg font-bold text-gray-500 uppercase text-xs tracking-widest leading-loose">
            Wifuza gukora urubuga rufite umwimerere nk'uyu? <br />
            <a href="mailto:tuyikunde.jackson@email.com" className="text-black border-b-2 border-black hover:text-[#64BC4C] hover:border-[#64BC4C] transition-colors">
              TUGANIRE KURI PROJECT YAWE
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;