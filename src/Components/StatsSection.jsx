export function ServicesSection() {
  const services = [
    { title: "Web Development", desc: "Modern & responsive websites" },
    { title: "UI / UX Design", desc: "Clean and user-friendly designs" },
    { title: "Mobile Apps", desc: "Android & iOS applications" },
    { title: "Maintenance", desc: "Support & updates" },
  ];

  return (
    <section className="bg-black text-white py-20 px-8 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-pink-500">Services</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-gray-900 p-6 rounded-xl hover:-translate-y-2 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
