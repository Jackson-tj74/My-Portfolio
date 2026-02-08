
import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const HomeCard = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      
      <section className="relative min-h-screen flex items-center justify-center px-[60px] bg-gradient-to-br from-white to-light-secondary">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Creating <span className="text-secondary">Digital</span> Experiences
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              I'm a Full-Stack Developer specializing in building exceptional digital products 
              that blend functionality with aesthetics.
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition">
                View Projects
              </button>
              <Link  to="/projects"className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-white transition">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-secondary rounded-full overflow-hidden shadow-2xl border-8 border-white">
              <img src="/pic1.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-20 px-[60px] bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Web Development', 'UI/UX Design', 'Cloud Solutions'].map((service, i) => (
              <div key={i} className="p-10 border border-gray-100 rounded-[30px] hover:shadow-2xl transition bg-light-secondary group">
                <div className="w-14 h-14 bg-secondary rounded-2xl mb-6 flex items-center justify-center text-white text-2xl">
                   {i === 0 ? "💻" : i === 1 ? "🎨" : "☁️"}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service}</h3>
                <p className="text-gray-500">I provide high-quality solutions tailored to your business needs with modern technology.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-10">
           <h2 className="text-3xl md:text-5xl font-bold">What Clients Say</h2>
        </div>
        <TestimonialCard />
      </section>

      <footer className="py-10 text-center border-t border-gray-100">
        <p className="text-gray-400">© 2026 YourPortfolio. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    name: "NIYOMUFASHA Alice",
    email: "niyoalice@gmail.com",
    message: "From start to finish, the experience was smooth and professional. The results exceeded expectations, and the attention to detail really stood out.",
    image: "/pic1.jpg" 
  },
  {
    id: 2,
    name: "Tyga Brown",
    email: "tygabrown780@gmail.com",
    message: "What impressed us most was how well they understood our goals. Every suggestion felt thoughtful and tailored.",
    image: "/pic2.jpg"
  }
];

const TestimonialCard = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(slideInterval);
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center px-[60px] overflow-hidden">
     
      <div className="relative flex flex-col md:block max-w-7xl w-full h-auto md:h-[500px] transition-all duration-500">
       
       
        <div className="relative md:absolute left-0 md:top-[10%] w-full md:w-[45%] h-[300px] md:h-[400px] z-10 transition-all duration-700 order-2 md:order-none">
          <img src={testimonials[current].image} alt={testimonials[current].name} className="w-full h-full object-cover shadow-xl rounded-2xl" />
        </div>
        
        
        <div className="relative md:absolute md:left-[45%] top-0 w-full md:w-[55%] h-auto md:h-[450px] z-20 transition-all duration-700 order-1 md:order-none mb-6">
          
          <div className="w-full h-full bg-[#F0F7FF] p-8 md:p-12 relative shadow-lg rounded-[30px] flex flex-col justify-center border border-blue-50">
            
            <div className="border-2 border-blue-200 rounded-2xl p-6 md:p-10 relative">
               
               <span className="text-blue-500 text-6xl font-serif absolute -top-4 left-6 bg-[#F0F7FF] px-2">"</span>
              
               <p className="text-sm md:text-lg font-medium leading-relaxed italic text-gray-700">{testimonials[current].message}</p>
               <div className="text-right mt-6">
                  <p className="font-bold text-gray-900 text-lg">{testimonials[current].name}</p>
                 
                  <p className="text-blue-400 text-sm">{testimonials[current].email}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="flex justify-center space-x-3 mt-10">
        {testimonials.map((_, index) => (
          <span key={index} onClick={() => setCurrent(index)} className={`h-3 transition-all cursor-pointer rounded-full ${index === current ? "w-10 bg-blue-500" : "w-3 bg-gray-300"}`}></span>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;