import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
function Body() {
  return (
   <> 
   <div className= "grid grid-cols-2 bg-[#fdebd2] w-full h-screen px-14 pt-24 gap-28 z-50">
      <div className=" flex flex-col text-5xl font-bold">
        <div className="pt-2 font-ephesis font-medium text-6xl text-amber-950 text-center">I'm Yunisha !</div>
        <p className=" pt-10 leading-relaxed text-amber-950 font-extralight font-serif text-justify text-[1rem]
   first-letter:text-6xl 
   first-letter:font-bold
   first-letter:float-left 
   first-letter:leading-none
   first-letter:mr-3">
  A Motivated Computer Science student with a strong foundation in HTML, CSS, JavaScript, and backend fundamentals. Currently expanding my knowledge of modern technologies such as React, Node.js, Express, and MongoDB while building practical projects to strengthen my skills in developing responsive user interfaces, backend applications, and efficient software solutions. Eager to learn, adapt, and contribute to real-world development teams.
</p>

 <p className='mt-5 text-[2rem] text-center pt-2 font-medium font-serif text-amber-950'>Find me on</p>
<div className='flex flex-row justify-center gap-5 text-amber-950'>
<a href="https://www.facebook.com/yunisha.poudel.622393/"><FontAwesomeIcon icon="fa-brands fa-facebook" className='text-2xl' /></a>
<a href="https://www.instagram.com/yunishapoudel_/?next=%2F"><FontAwesomeIcon icon="fa-brands fa-instagram" className='text-2xl' /></a>
<a href="https://www.linkedin.com/in/yunisha-p-341158310/"><FontAwesomeIcon icon="fa-brands fa-linkedin" className='text-2xl' /></a>
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=yunishapoudel6@gmail.com"><FontAwesomeIcon icon="fa-solid fa-envelope" className='text-2xl' /></a>
<a href="https://github.com/ypoudel3"><FontAwesomeIcon icon="fa-brands fa-github" className='text-2xl' /></a> 
</div>
</div>

 <div>
    <div className="flex flex-col bg-gray-100 p-5 pb-7 shadow-2xl">
       <div className="bg-gray-200">
         <img src="yy.png" className="contrast-100 brightness-125 pr-7 " alt="" />
       </div>
       <div className="font-sd text-3xl text-center pt-4 text-amber-950">hello, everyone!</div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Body
