
import React from "react";

function ProjectsSection() {


  const myProjects = [
    {
      title: "E-Commerce Web App",
      description: "A modern online store built with React and Tailwind CSS, featuring a functional shopping cart.",
      tags: ["REACT", "TAILWIND", "NODE.JS"],
      github: "https://github.com/jackson-tuyikunde/project1",
      demo: "https://project-demo.com"
    },
    {
      title: "Portfolio Website",
      description: "My personal professional space showcasing my skills in web development and UI/UX design.",
      tags: ["JSX", "REANIMATED", "GRID"],
      github: "https://github.com/jackson-tuyikunde/portfolio",
      demo: "#"
    }
  ];

  return (
    <section id="work" className="relative py-20 bg-[#F2F2F2] text-gray-800 px-[20px] md:px-[60px] font-sans overflow-hidden border-t-4 border-black">



      <div className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: 'linear-gradient(#000 1.2px, transparent 1.2px), linear-gradient(90deg, #000 1.2px, transparent 1.2px)',
          backgroundSize: '35px 35px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">


        <div className="flex items-center justify-start gap-4 mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-none italic">
            MY <span className="text-[#64BC4C]">WORK</span>
          </h2>
          <div className="h-[3px] bg-black flex-1"></div>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {myProjects.map((project, index) => (
            <div key={index} className="group relative bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">{project.title}</h3>
                <span className="text-[#64BC4C] text-3xl font-black leading-none">0{index + 1}</span>
              </div>

              <p className="text-gray-600 font-medium mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-black text-white text-[10px] font-black px-2 py-1 italic tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>

             
              <div className="flex gap-4 border-t-2 border-black/10 pt-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-black text-xs uppercase hover:text-[#64BC4C] transition-colors">
                  <span className="text-[#64BC4C] text-xl"><svg role="img" viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
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
                  </span> GITHUB
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-black text-xs uppercase hover:text-[#64BC4C] transition-colors">
                  <span className="text-[#64BC4C] text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="gray">
                    <path d="M10.59 13.41a1.996 1.996 0 010-2.82l3-3a2 2 0 112.82 2.82l-1.5 1.5"/>
                              <path d="M13.41 10.59a1.996 1.996 0 010 2.82l-3 3a2 2 0 11-2.82-2.82l1.5-1.5"/>
                                  </svg>
                       <span>Try live</span>
                      </span> LIVE DEMO
                </a>
              </div>
            </div>
          ))}
        </div>


        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10 border-y-2 border-black">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-black uppercase italic italic tracking-tighter">Looking for more?</h4>
            <p className="font-bold text-gray-500 text-sm">Check out my code and professional profile.</p>
          </div>

          <div className="flex gap-6">

            <a
              href="https://github.com/Jackson-tj74"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-black text-white font-black uppercase italic tracking-widest hover:bg-[#64BC4C] transition-all transform hover:-rotate-2"
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
            <a
              href="https://linkedin.com/in/tuyikunde-jackson"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border-2 border-black font-black uppercase italic tracking-widest hover:border-[#64BC4C] hover:text-[#64BC4C] transition-all transform hover:rotate-2"
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
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;