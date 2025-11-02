import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-primary"
        >
          Sherin<span className="text-gray-700">.dev</span>
        </motion.h1>

        <ul className="flex space-x-6 text-gray-700 font-medium">
          {["Home", "Projects", "Skills", "Contact"].map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1, color: "#06b6d4" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-colors"
        >
          Hire Me
        </motion.button>
      </div>
    </motion.nav>
  );
}
