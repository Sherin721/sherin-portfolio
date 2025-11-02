import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-cyan-50 dark:bg-gray-900 text-black dark:text-gray-100 scroll-smooth font-inter">

        {/* Navbar */}
        <header className="fixed w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 tracking-wide">
              Sherin XK
            </h1>
            <nav className="hidden md:flex space-x-8 font-semibold text-cyan-700 dark:text-cyan-300 text-lg">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-500 transition"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setDark(!dark)}
                className="px-4 py-2 rounded-full bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition">
                {dark ? "Light" : "Dark"}
              </button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-400 via-cyan-600 to-blue-700 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
              Hi, I'm <span className="text-white drop-shadow-lg">Sherin XK</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
              Frontend Developer | MERN Stack Enthusiast
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 text-lg font-semibold rounded-full bg-white text-cyan-700 shadow-lg hover:scale-105 hover:bg-cyan-100 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 text-lg font-semibold rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-700 transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-cyan-50 dark:bg-gray-900"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl text-center"
          >
            <h2 className="text-5xl font-bold mb-8 text-cyan-700 dark:text-cyan-300">
              About Me
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              I’m a passionate Full Stack Developer focused on crafting clean,
              responsive, and functional user interfaces. My tech stack includes{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                React.js, Tailwind CSS, Node.js, and Express.js
              </strong>.
              <br />
              <br />
              I love transforming creative ideas into elegant web experiences.
              Always learning, always coding.
            </p>
          </motion.div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-cyan-100 to-cyan-200 dark:from-gray-800 dark:to-gray-900"
        >
          <h2 className="text-5xl font-bold mb-12 text-cyan-700 dark:text-cyan-300 text-center">
            Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {[
              {
                title: "Frontend",
                items: "React, TypeScript, Tailwind, HTML5, CSS3",
              },
              {
                title: "Backend",
                items: "Node.js, Express.js, REST APIs",
              },
              {
                title: "Database & Tools",
                items: "PostgreSQL, Git, Jira, Power BI",
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition text-center"
              >
                <h3 className="text-2xl font-bold text-cyan-600 mb-4">
                  {skill.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {skill.items}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-cyan-50 dark:bg-gray-900"
        >
          <h2 className="text-5xl font-bold mb-12 text-cyan-700 dark:text-cyan-300 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
            {[
              {
                name: "Portfolio Website",
                desc: "My personal portfolio built with React & Tailwind. Fully responsive, dark mode supported.",
              },
              {
                name: "Task Manager App",
                desc: "Full-stack app with CRUD operations using Node.js, Express, and PostgreSQL.",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800 border-l-4 border-cyan-500"
              >
                <h3 className="text-3xl font-bold mb-3 text-cyan-600">
                  {p.name}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {p.desc}
                </p>
                <a
                  href="https://github.com/Sherin721"
                  target="_blank"
                  className="inline-block px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition font-semibold"
                >
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-t from-cyan-500 to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white text-center"
        >
          <h2 className="text-5xl font-bold mb-8">Contact Me</h2>
          <p className="text-xl mb-4">📍 Marthandam, Kanyakumari, Tamil Nadu</p>
          <p className="text-xl mb-2">📞 +91 94878 45908</p>
          <p className="text-xl mb-6">
            ✉️{" "}
            <a
              href="mailto:sherinxavier004@gmail.com"
              className="underline hover:text-cyan-200"
            >
              sherinxavier004@gmail.com
            </a>
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://linkedin.com/in/sherin-xavier"
              target="_blank"
              className="bg-white text-cyan-700 font-semibold px-5 py-2 rounded-full hover:bg-cyan-100 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sherin721"
              target="_blank"
              className="border-2 border-white px-5 py-2 rounded-full hover:bg-white hover:text-cyan-700 font-semibold transition"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-cyan-700 dark:bg-gray-800 text-white text-center py-4 text-lg font-medium">
          © 2025 Sherin XK. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
