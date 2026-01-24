
import { useEffect, useState } from "react";


function BlogCard({ services }) {
  
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!services?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [services]);

  
  

  const service = services[currentIndex];

  return (
    <div className="relative w-full h-[340px] rounded-2xl overflow-hidden shadow-2xl group">
      
      {/* Image with slow animation */}
      <img
        src={service.image}
        alt={service.name}
        className="
          w-full h-full object-cover
          animate-[kenBurnsSlow_12s_ease-in-out_infinite]
          transition-transform duration-[3000ms]
          group-hover:scale-110
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <h3 className="text-white text-xl font-bold">
          {service.name}
        </h3>
        <p className="text-gray-200 text-sm">
          {service.description}
        </p>

      </div>
    </div>
  );
}

export default BlogCard;
