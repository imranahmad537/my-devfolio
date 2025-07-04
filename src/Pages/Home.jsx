import React from "react";
import Recognition from "../Components/Recognition";
import About from "./About";
import Tools from "./Tools";
import Project from "./Project";
import  { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedRef2 = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedRef2.current, {
      strings: ["\"The Developer Behind Solutions...!\""],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy(); // Cleanup
  }, []);

  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-r from-[rgba(5,5,5,1)] to-[rgba(67,67,67,1)] text-white "
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10 min-h-[80vh]">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="leading-relaxed font-jost text-lg">Hey, I'm</p>
            <h1 className="font-jost font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
              Imran Ahmad,
            </h1>
            <h2 className="font-jost font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
              JavaScript Developer
            </h2>
            <h3 className="font-jost font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
              @ E-Digital Pakistan
            </h3>
            <p className="mt-6 text-base md:text-lg leading-loose">
             <p className="font-jost font-light"><q>MERN Stack <strong>|</strong> Cyber Security <strong>|</strong> Lecturer in Computer Science</q></p>
            </p>
            <button className="mt-8 border-2 border-white px-6 py-3 text-white font-jost hover:bg-white hover:text-black transition">
              More About Me
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center ">
            {/* <img
              src="/your-image.jpg"
              alt="Imran Ahmad"
              className="w-64 md:w-80 rounded-xl shadow-lg"
            /> */}
            <div className="bg-[#1e1e1e] font-mono w-full max-w-2xl rounded-xl shadow-lg border border-gray-700 overflow-hidden ">
  {/* Top bar with traffic lights */}
  <div className="bg-[#2c2c2c] px-4 py-2 flex items-center space-x-2">
    <span className="w-3 h-3 rounded-full bg-red-500"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span className="w-3 h-3 rounded-full bg-green-500"></span>
  </div>

  {/* Code output */}
  <div className="p-6 text-lg text-[#d4d4d4] bg-[#1e1e1e]">
    <p>
      <p className="text-green-700"><i>// Minimal code. Maximum impact.</i></p>
      <span className="text-[#9cdcfe]">console</span>
      <span className="text-white">.</span>
      <span className="text-[#dcdcaa]">log</span>
      <span className="text-white">(</span>
      <span ref={typedRef2} className="text-[#ce9178]"></span>
      <span className="text-white">);</span>
    </p>
  </div>
</div>

          </div>
        </div>
      </section>

      <Recognition />
      <About />
      <Tools />
      <Project />
    </>
  );
};

export default Home;

// <section id='home' className='py-12 text-white bg-gradient-to-r from-[rgba(5,5,5,1)] to-[rgba(67,67,67,1)]  mx-auto'>
//       <div className="hero max-w-7xl mx-auto p-4 mt-15 ">
//         <p className='leading-relaxed'>Hey, I'm</p>
//          <span className='font-jost font-semibold text-6xl leading-tight'>Imran Ahmad,</span>
//          <br />
//          {/* <span className='font-normal text-2xl'>Certified</span><br /> */}
//          <span className='font-jost font-semibold text-6xl leading-tight'>JavaScript Developer</span>
//          <br />
//          <span className='font-jost font-semibold text-6xl leading-tight'>@ EDP, Pakistan</span>
//          <p className='mt-8 leading-loose'>Certified Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ab!</p>

//          <button className='mt-10 border-white px-4 py-2 border-3'>More About Me</button>
//       </div>
//       <div className="right">

//       </div>

//     </section>
