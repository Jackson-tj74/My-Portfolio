
import pic from "../assets/pic.jpg";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import BlogCard from "./BlogCard";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pot1 from "../assets/pot1.jpg";
import { SkillsSection } from "./SkillsSection";
import { StatsSection } from "./StatsSection";
export function HomeCard() {
  const servicesData = [
    { id: 1, name: "Web Development", image: pic1, description: "Modern websites" },
    { id: 2, name: "Mobile Apps", image: pic2, description: "Android & iOS apps" },
    { id: 3, name: "UI/UX Design", image: pic3, description: "Clean UI designs" },
  ];

  return (
    <>
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${pot1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <NavBar />

  <div className="flex items-center space-x-1 font-bold text-2xl px-9">
  <span className="text-white ">Portfo</span>
  <span className="text-pink-800">lio.</span>
</div>
      <section className="relative z-10 min-h-screen flex items-center">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 px-8 lg:px-20 w-full text-white">

    {/* TEXT → ibumoso kuri lg */}
    <div className="order-2 lg:order-1 flex flex-col justify-center">
      <p className="text-lg mb-2">Hello, I'm</p>

      <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 leading-tight">
        Jackson Tuyikunde
      </h2>

      <h3 className="text-2xl font-semibold mb-8">
        And I'm a <span className="text-pink-500">Web Developer</span>
      </h3>

      <div className="flex space-x-4">
        <Link
          to="/contact"
          className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg"
        >
          I need a website
        </Link>
        <Link
          to="/projects"
          className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg"
        >
          Hire me
        </Link>
      </div>
    </div>

    {/* IMAGE → iburyo kuri lg */}
    <div className="order-1 lg:order-2 flex items-center">
      <BlogCard services={servicesData} />
    </div>

  </div>
</section>

    </div>
<SkillsSection />
<StatsSection />
    </>
  );
}
