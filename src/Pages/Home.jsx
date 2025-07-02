import React from "react";
import Recognition from "../Components/Recognition";
import About from "./About";
import Tools from "./Tools";
import Project from "./Project";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-r from-[rgba(5,5,5,1)] to-[rgba(67,67,67,1)] text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10 min-h-[80vh]">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="leading-relaxed text-lg">Hey, I'm</p>
            <h1 className="font-jost font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
              Imran Ahmad,
            </h1>
            <h2 className="font-jost font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
              JavaScript Developer
            </h2>
            <h3 className="font-jost font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
              @ EDP, Pakistan
            </h3>
            <p className="mt-6 text-base md:text-lg leading-loose">
              Certified Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rem, ab!
            </p>
            <button className="mt-8 border-2 border-white px-6 py-3 text-white hover:bg-white hover:text-black transition">
              More About Me
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/your-image.jpg"
              alt="Imran Ahmad"
              className="w-64 md:w-80 rounded-xl shadow-lg"
            />
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
