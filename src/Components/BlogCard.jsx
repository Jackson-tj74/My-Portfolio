
import { useEffect, useState } from "react";

function BlogCard({ services }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!services?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000); // slide ihinduka gahoro

    return () => clearInterval(interval);
  }, [services]);

  const service = services[currentIndex];

  return (
    <div className="relative w-full h-[340px] rounded-2xl overflow-hidden shadow-2xl">

      {/* IMAGE */}
      <img
        key={currentIndex}
        src={service.image}
        alt={service.name}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-[6000ms] ease-in-out
          scale-105
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold">
          {service.name}
        </h3>
        <p className="text-gray-200 text-sm mb-4">
          {service.description}
        </p>
      </div>

    </div>
  );
}

export default BlogCard;
