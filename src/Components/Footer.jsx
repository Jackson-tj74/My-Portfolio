import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Jackson<span className="text-pink-500">Dev</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Full stack web developer focused on building modern, clean and
              user-friendly digital experiences.
            </p>
          </div>

        
        
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-pink-500">About</Link></li>
              <li><Link to="/projects" className="hover:text-pink-500">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-pink-500">Contact</Link></li>
            </ul>
          </div>

          
          

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-pink-500">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} JacksonDev. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
