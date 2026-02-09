import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm bg-red-500">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            Elayabarathi M V
          </div>
          <div className="flex gap-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Education
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Projects
            </a>
            <a
              href="#certifications"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Elayabarathi M V</h1>
          <p className="text-xl mb-8">Full Stack Developer</p>
          <div className="flex justify-center gap-4">
            <a
              href="public/resume.pdf"
              download
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Web Developer with hands-on experience in full-stack web
              development using HTML, CSS, JavaScript, React.js, Java, SQL, and
              REST APIs. Experienced in building responsive, scalable web
              applications and integrating frontend and backend systems.
            </p>
            <p className="text-gray-600">
              Seeking a Web Developer role to contribute to high-quality
              software development in a collaborative engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  HTML
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  CSS
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  React.js
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Bootstrap
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Java
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Python
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Flask
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  REST APIs
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Databases & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  SQL
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  PostgreSQL
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Git
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  GitHub
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  VS Code
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Vercel
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Netlify
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Render
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Java Full Stack Developer Trainee
                  </h3>
                  <p className="text-gray-600">QSpiders</p>
                </div>
                <p className="text-blue-600 font-medium">
                  August 2025 – Present
                </p>
              </div>
              <p className="text-gray-600">
                Hands-on experience with full-stack web development, utilizing
                React.js, Java, and SQL, with a strong focus on problem-solving
                and application efficiency.
              </p>
            </div>
            <div className="mb-12">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Software Developer Intern
                  </h3>
                  <p className="text-gray-600">Codnifyz</p>
                </div>
                <p className="text-blue-600 font-medium">
                  November 2025 – December 2025
                </p>
              </div>
              <p className="text-gray-600">
                Acquired hands-on experience in software development and
                performance optimization, enhancing Java programming, debugging,
                and problem-solving skills through real-world development tasks
                and projects.
              </p>
            </div>
            <div className="mb-12">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Full Stack Web Developer Trainee & Intern
                  </h3>
                  <p className="text-gray-600">Corizo</p>
                </div>
                <p className="text-blue-600 font-medium">
                  October 2024 – December 2024
                </p>
              </div>
              <p className="text-gray-600">
                Proficient in full-stack web development using HTML, CSS,
                JavaScript, Bootstrap, MongoDB, and APIs, with a focus on
                dynamic, responsive applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Education
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Bachelors of Technology - Biotechnology
                  </h3>
                  <p className="text-gray-600">
                    K S Rangasamy College of Technology
                  </p>
                </div>
                <p className="text-blue-600 font-medium">
                  June 2020 – May 2024
                </p>
              </div>
              <p className="text-gray-600">Namakkal, TamilNadu | 88.1%</p>
            </div>
            <div className="mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    HSC - Bio-Math
                  </h3>
                  <p className="text-gray-600">
                    U R C Palaniammal Matric Hr Src School
                  </p>
                </div>
                <p className="text-blue-600 font-medium">
                  June 2019 – May 2020
                </p>
              </div>
              <p className="text-gray-600">Erode, TamilNadu | 76.33%</p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">SSLC</h3>
                  <p className="text-gray-600">
                    U R C Palaniammal Matric Hr Src School
                  </p>
                </div>
                <p className="text-blue-600 font-medium">
                  June 2017 – May 2018
                </p>
              </div>
              <p className="text-gray-600">Erode, TamilNadu | 90.20%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Bamboo Blogs
              </h3>
              <p className="text-gray-600 mb-4">
                Developed a full-stack blogging platform with user
                authentication, CRUD operations, and database integration.
                Implemented secure login, post creation/editing, and persistent
                data storage.
              </p>
              <a
                href="https://bamboo-blogs-sample.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Live Demo →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Professional Portfolio
              </h3>
              <p className="text-gray-600 mb-4">
                Designed and developed a responsive personal portfolio website
                to showcase projects, technical skills, and professional
                profile.
              </p>
              <a
                href="https://elayabarathimv-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Live Demo →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Stellar AI Chatbot
              </h3>
              <p className="text-gray-600 mb-4">
                Implemented dynamic message handling, responsive UI, and
                reusable React components for scalable frontend design.
              </p>
              <a
                href="https://stellar-steel-tau.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Live Demo →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Spotify Clone
              </h3>
              <p className="text-gray-600 mb-4">
                Developed a music streaming web application clone replicating
                core Spotify UI and playback experience.
              </p>
              <a
                href="https://spotify-clone-6rda.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Live Demo →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Panda eCommerce Store
              </h3>
              <p className="text-gray-600 mb-4">
                Built a full-featured eCommerce web application with product
                listing, shopping cart, and user-friendly navigation.
              </p>
              <a
                href="https://full-stack-ecommerce-h47u.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Live Demo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Certifications
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  React JS
                </h3>
                <p className="text-gray-600">LetsUpgrade (2025)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Tailwind CSS
                </h3>
                <p className="text-gray-600">LetsUpgrade (2025)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  HTML5
                </h3>
                <p className="text-gray-600">Mimo (2024)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  CSS3
                </h3>
                <p className="text-gray-600">Mimo (2024)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  JavaScript
                </h3>
                <p className="text-gray-600">Simplilearn (2026)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Git & GitHub
                </h3>
                <p className="text-gray-600">LetsUpgrade (2025)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Contact Me
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">elayabarathimv@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 9842852121</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">Erode, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-4">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/BadBoy-Github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/elayabarathi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Elayabarathi M V. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
