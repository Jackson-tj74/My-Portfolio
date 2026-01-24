export function SkillsSection() {
  const skills = [
    "HTML", "CSS", "Tailwind",
    "JavaScript", "React",
    "Node.js", "Git"
  ];

  return (
    <section className="bg-gray-950 text-white py-20 px-8 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-pink-500">Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-5 py-2 border border-gray-700 rounded-full text-sm hover:bg-pink-500 hover:border-pink-500 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
