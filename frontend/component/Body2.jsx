import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "./Animation.js";

export default function Body2() {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-amber-950 py-10 pt-20"
      >
        <motion.div variants={fadeIn} className="flex flex-col mx-6 lg:mr-4 md:mr-4 sm:mr-4">
          <div className="relative w-full h-56 max-w-md mx-auto">
            <div className="bg-gray-300 w-full min-h-[250px] flex flex-col py-3 pl-4 rounded-2xl opacity-65">
              <div className="mt-4">
                <p className="font-bold">Ranabhuwaneswori Secondary School</p>
                <p className="text-gray-600">SEE</p>
              </div>
              <div>
                <p className="font-bold">National School of Sciences</p>
                <p className="text-gray-600">NEB</p>
              </div>
              <div className="mb-4">
                <p className="font-bold">Asian School of Management and Technology</p>
                <p className="text-gray-600">
                  Bachelor in Computer Science and Information Technology (BSc.CSIT)
                </p>
              </div>
            </div>
            <div className="z-50 absolute -top-4 bg-amber-300 max-w-fit rounded-2xl">
              <h1 className="font-bold text-2xl px-4">Education</h1>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="flex flex-col mx-6 lg:mr-4 md:mr-4 sm:mr-4">
          <div className="relative w-full max-w-md mx-auto">
            <div className="bg-gray-300 w-full min-h-[250px] flex flex-col py-3 pl-4 rounded-2xl opacity-65">
                 <div className="flex flex-wrap pt-4 text-3xl gap-4">
                  <span className="border-1 w-fit p-3 rounded-lg">
                  <i className="devicon-tailwindcss-original"></i>
                </span>
                <span className="border-1 w-fit p-3 rounded-lg">
                  <i className="devicon-react-original"></i>
                </span>
                <span className="border-1 w-fit p-3 rounded-lg">
                  <i className="devicon-nodejs-plain"></i>
                </span>
                <span className="border-1 w-fit p-3 rounded-lg">
                  <i className="devicon-express-original"></i>
                </span>
                <span className="border-1 w-fit p-3 rounded-lg">
                  <i className="devicon-mongodb-plain"></i>
                </span>
                <span className="border-1 w-fit p-3 rounded-lg">
                  <i className="devicon-python-plain"></i>
                </span>
              </div>
              <div className="flex pt-4 text-3xl gap-4">
                <span className="border-1 w-fit p-3 rounded-lg">
                  <i className="devicon-php-plain"></i>
                </span>
                <span className="border-1 w-fit p-3 rounded-lg">
                  <i className="devicon-html5-plain"></i>
                </span>
                <span className="border-1 w-fit p-3 rounded-lg">
                  <i className="devicon-javascript-plain"></i>
                </span>
              </div>
            </div>
            <div className="z-50 absolute -top-4 bg-amber-300 max-w-fit rounded-2xl">
              <h1 className="font-bold text-2xl px-4">Skills</h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col  pl-4 w-full md:col-span-2 bg-amber-950"
        >
          <motion.h1 variants={fadeIn} className="text-center text-3xl font-bold text-white">Projects</motion.h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
            {/* 1st card */}
            <motion.div variants={fadeIn} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-2xl overflow-hidden border-1 border-gray-300 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="bg-transparent">
                <img src="card1.png" alt="Minders project" />
                <div className="flex flex-row justify-between p-2">
                  <div className="flex items-center">
                    <h1 className="pt-2 pl-3 text-white">L-MCM</h1>
                  </div>
                  <div className="bg-white rounded-full">
                    <a href="https://github.com/ypoudel3/LMC-main">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11 p-2"
                        viewBox="0 -960 960 960"
                        fill="#592300"
                      >
                        <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          

            {/* 2nd card */}
            <motion.div variants={fadeIn} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-2xl overflow-hidden border-1 border-gray-300 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="bg-transparent">
                <img src="card2.png" alt="Minders project" />
                <div className="flex flex-row justify-between p-2">
                  <div className="flex items-center">
                    <h1 className="pt-2 pl-3 text-white">Minders</h1>
                  </div>
                  <div className="bg-white rounded-full">
                    <a href="https://github.com/ypoudel3/minders">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11 p-2"
                        viewBox="0 -960 960 960"
                        fill="#592300"
                      >
                        <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3rd card */}
            <motion.div variants={fadeIn} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-2xl overflow-hidden border-1 border-gray-300 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="bg-transparent">
                <img src="card3.png" alt="Star Wars project" />
                <div className="flex flex-row justify-between p-2">
                  <div className="flex items-center">
                    <h1 className="pt-2 pl-3 text-white">Star Wars</h1>
                  </div>
                  <div className="bg-white rounded-full">
                    <a href="https://github.com/ypoudel3/sw">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11 p-2"
                        viewBox="0 -960 960 960"
                        fill="#592300"
                      >
                        <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4th card */}
            <motion.div variants={fadeIn} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-2xl overflow-hidden border-1 border-gray-300 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="bg-transparent">
                <img src="card4.png" alt="Drape project" className="w-full h-48 object-cover" />
                <div className="flex flex-row justify-between p-2">
                  <div className="flex items-center">
                    <h1 className="pt-2 pl-3 text-white">Drape</h1>
                  </div>
                  <div className="bg-white rounded-full">
                    <a href="https://github.com/ypoudel3/final_project">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11 p-2"
                        viewBox="0 -960 960 960"
                        fill="#592300"
                      >
                        <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}