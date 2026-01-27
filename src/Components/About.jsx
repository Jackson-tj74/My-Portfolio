
import pic1 from "../assets/pic1.jpg";

function AboutMeCard() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-pink-500">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A brief overview of my background, education, and technical skills.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 space-y-12">

          {/* IMAGE + INTRO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* IMAGE */}
            <div className="relative flex justify-center">
              <div className="absolute -inset-2 bg-pink-500/30 blur-2xl rounded-3xl"></div>
              <img
                src={pic1}
                alt="Profile"
                className="relative w-64 h-80 object-cover rounded-2xl border border-white/10 shadow-xl"
              />
            </div>

            {/* TEXT */}
            <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
              <p>
                My name is{" "}
                <span className="font-bold text-pink-400">
                  Tuyikunde Jackson
                </span>
                . I am an aspiring{" "}
                <span className="font-semibold text-pink-400">
                  web developer
                </span>{" "}
                passionate about building clean, modern, and user-friendly web
                applications. I am highly motivated to learn new technologies and
                use them to create meaningful digital solutions.
              </p>

              <p>
                I completed my high school education in{" "}
                <span className="font-semibold text-white">MCE</span>. During my
                studies, I developed a strong interest in software development
                and problem-solving. I later joined{" "}
                <span className="font-semibold text-white">
                  Nyabiheke Alight Coding School
                </span>
                , where I strengthened my frontend and backend skills.
              </p>
            </div>

          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-gray-900/60 rounded-2xl p-6 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold text-pink-400 mb-4">
                🎓 Education & Certificates
              </h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm">
                <li>High School Diploma (MCE) – GS Nyabiheke</li>
                <li>Coding School Certificate – Frontend & Backend</li>
                <li>Entrepreneurship Challenge Certificate</li>
                <li>Duolingo International Certificate</li>
                <li>Academic English Certificates (B1 & B2)</li>
                <li>Vocabulary for Academic Purposes – ReallyEnglish</li>
              </ul>
            </div>

            <div className="bg-gray-900/60 rounded-2xl p-6 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold text-pink-400 mb-4">
                💻 Coding Skills
              </h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm">
                <li>HTML, CSS, JavaScript</li>
                <li>React & Tailwind CSS</li>
                <li>Node.js & Express</li>
                <li>SQL & NoSQL Databases</li>
                <li>Full-Stack Web Development</li>
              </ul>
            </div>

            <div className="bg-gray-900/60 rounded-2xl p-6 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold text-pink-400 mb-4">
                🌍 Language & Communication
              </h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm">
                <li>Academic English (B1 – B2)</li>
                <li>Business Speaking – Intermediate</li>
                <li>Practical English (A0 – C1)</li>
              </ul>
            </div>

            <div className="bg-gray-900/60 rounded-2xl p-6 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold text-pink-400 mb-4">
                🚀 Additional Info
              </h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm">
                <li>All certificates are authentic</li>
                <li>Continuously improving through real projects</li>
                <li>Strong interest in modern UI/UX design</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutMeCard;
