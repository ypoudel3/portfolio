import { useState } from "react";
import "../src/index.css";
import logo from '../src/assets/logo.svg';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, fadeIn } from "./Animation.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="relative brightness-75 w-full h-screen overflow-hidden bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/back.jpg')" }}
      />

      {/* Centered text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#E6C191]">
        {/* Name */}
        <div className="flex text-6xl md:text-7xl font-ephesis z-50">
          <div className="animate-typing1 py-1 ">Yunisha</div>
          <div className="animate-typing2 py-1 px-6 md:px-5">Poudel</div>
        </div>

        {/* Subtitle */}
        <div className="text-2xl z-50 font-cormorant">
          A Portfolio
        </div>
      </div>

      <div className="bg-[#fdebd2]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className=""
      >
          <motion.div
            variants={fadeUp}
           className="flex flex-row items-center justify-between px-6 py-4 md:py-8" >
            {/* Nav links - desktop */}
            <ul className="hidden md:flex flex-row gap-4 text-amber-950">
              <a href=""><li>About Me</li></a>
              <a href=""><li>Work</li></a>
            </ul>

            {/* Logo */}
            <div className="flex md:flex-1 justify-start md:justify-center">
              <img src={logo} alt="Logo" className="w-32 h-20 md:w-50 md:h-30" />
            </div>

            {/* Get in touch - desktop */}
            <div className="hidden md:block">
              <button className="bg-amber-950 text-white p-2 px-3 rounded-4xl text-[0.9rem] hover:scale-95">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yunishapoudel6@gmail.com">
                  Get in Touch
                </a>
              </button>
            </div>

            {/* Hamburger - mobile */}
            <button
              className="md:hidden text-amber-950"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </motion.div>

          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <ul className="flex flex-col items-center gap-4 py-6 text-amber-950">
                  <a href="" onClick={() => setMenuOpen(false)}><li>About Me</li></a>
                  <a href="" onClick={() => setMenuOpen(false)}><li>Work</li></a>
                  <button className="bg-amber-950 text-white p-2 px-4 rounded-4xl text-[0.9rem] hover:scale-95">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yunishapoudel6@gmail.com">
                      Get in Touch
                    </a>
                  </button>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        
      </motion.div>
      </div>
    </>
  );
}