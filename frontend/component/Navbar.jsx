import "../src/index.css";
import logo from '../src/assets/logo.svg';

export default function Navbar() {
  return (
    <>
      <div className="relative brightness-75 w-full h-screen overflow-hidden">
        <img
          src="back.jpg"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>

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

      <div className="flex flex-row bg-[#fdebd2]">
        
      <ul className=" flex flex-row gap-4 mt-16 justify-center ml-6 text-amber-950">
          <a href=""><li>About Me</li></a>
          <a href=""><li>Work</li></a>
      </ul>
       
        <div className=" flex flex-1 justify-center " >
       <img src={logo} alt="Logo" className="w-50 h-30" />

         </div>

        <div className="mr-6 mt-16">
      <button className=" bg-amber-950 text-white p-2 px-3 rounded-4xl text-[0.9rem] hover:scale-95"> 
        <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=yunishapoudel6@gmail.com">
          Get in Touch</a></button>

        </div>
      </div>
    </>
  );
}
