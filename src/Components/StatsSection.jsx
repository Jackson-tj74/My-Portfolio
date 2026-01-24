export function StatsSection() {
  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Happy Clients" },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="flex flex-col md:flex-row justify-center gap-12">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <h3 className="text-4xl font-bold text-pink-500">{s.number}</h3>
            <p className="text-gray-400 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
