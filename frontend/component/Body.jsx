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
        id="about"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="flex min-h-0 w-full justify-center bg-[#fdebd2] px-6 py-16 sm:px-10 md:px-14 md:py-12 scroll-mt-6"
      >
        <motion.div variants={fadeLeft} className="flex w-full max-w-3xl flex-col items-center">
          <div className="pt-0 font-ephesis font-medium text-4xl sm:text-5xl md:text-6xl text-amber-950 text-center">
            I'm Yunisha !
          </div>
          <p
            className="w-full pt-6 md:pt-8 leading-relaxed text-amber-950 font-extralight font-serif text-justify text-sm sm:text-base
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

          <p className="mt-4 mb-3 text-2xl sm:text-3xl md:text-[2rem] text-center py-1 font-medium font-serif text-amber-950">
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

      </motion.div>
    </>
  );
}

export default Body;
