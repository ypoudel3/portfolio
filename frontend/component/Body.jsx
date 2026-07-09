import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, staggerContainer } from "./Animation.js";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function Body() {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 bg-[#fdebd2] w-full min-h-screen px-6 sm:px-10 md:px-14 py-16 md:pt-24 gap-12 md:gap-16 lg:gap-28 z-50"
      >
        <motion.div variants={fadeLeft} className="flex flex-col order-2 md:order-1">
          <div className="pt-2 font-ephesis font-medium text-4xl sm:text-5xl md:text-6xl text-amber-950 text-center">
            I'm Yunisha !
          </div>
          <p
            className="pt-6 md:pt-10 leading-relaxed text-amber-950 font-extralight font-serif text-justify text-sm sm:text-base
            first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl
            first-letter:font-bold
            first-letter:float-left
            first-letter:leading-none
            first-letter:mr-3"
          >
            A Motivated Computer Science student with a strong foundation in HTML, CSS, JavaScript, and backend
            fundamentals. Currently expanding my knowledge of modern technologies such as React, Node.js, Express,
            and MongoDB while building practical projects to strengthen my skills in developing responsive user
            interfaces, backend applications, and efficient software solutions. Eager to learn, adapt, and
            contribute to real-world development teams.
          </p>

          <p className="mt-5 text-2xl sm:text-3xl md:text-[2rem] text-center py-2 font-medium font-serif text-amber-950">
            Find me on
          </p>
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-5 text-amber-950">
            <a href="https://www.facebook.com/yunisha.poudel.622393/">
              <FontAwesomeIcon icon="fa-brands fa-facebook" className="text-xl sm:text-2xl" />
            </a>
            <a href="https://www.instagram.com/yunishapoudel_/?next=%2F">
              <FontAwesomeIcon icon="fa-brands fa-instagram" className="text-xl sm:text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/yunisha-p-341158310/">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" className="text-xl sm:text-2xl" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yunishapoudel6@gmail.com">
              <FontAwesomeIcon icon="fa-solid fa-envelope" className="text-xl sm:text-2xl" />
            </a>
            <a href="https://github.com/ypoudel3">
              <FontAwesomeIcon icon="fa-brands fa-github" className="text-xl sm:text-2xl" />
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeRight} className="order-1 md:order-2 flex items-center justify-center">
          <div className="flex flex-col bg-gray-100 p-4 sm:p-5 pb-6 sm:pb-7 shadow-2xl w-full max-w-md mx-auto">
            <div className="bg-gray-200">
              <img
                src="yy.png"
                className="contrast-100 brightness-125 w-full h-auto object-cover"
                alt="Yunisha portrait"
              />
            </div>
            <div className="font-sd text-2xl sm:text-3xl text-center pt-4 text-amber-950">hello, everyone!</div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Body;