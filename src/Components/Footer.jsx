import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
<footer className="bg-black text-white font-jost">
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
    {/* Two Columns (responsive) */}
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
      
      {/* Left Column */}
      <div className="md:w-1/2 flex flex-col items-center md:items-end gap-6">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold leading-snug text-center md:text-right">
          Feel free to hit me up,<br className="hidden md:block" />
          I'm looking forward to hearing from you.
        </h1>

        {/* Icons */}
        <div className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="devicon-linkedin-plain text-3xl md:text-4xl"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="devicon-github-original text-3xl md:text-4xl"></i>
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start gap-6">
        {/* Icons aligned with heading */}
        <div className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="devicon-linkedin-plain text-3xl md:text-4xl"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="devicon-github-original text-3xl md:text-4xl"></i>
          </a>
        </div>

        {/* Email aligned with bottom icons */}
        <h1 className="text-xl md:text-2xl font-semibold">
          ahmadimrankh99@gmail.com
        </h1>
      </div>
    </div>

    {/* Scroll to Top Button */}
    <div className="flex justify-center my-8">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="border border-white rounded-full p-3 bg-black text-white shadow-lg"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>

    {/* Footer Menu */}
    <div className="text-center">
      <ul className="flex flex-wrap justify-center gap-6 text-lg md:text-2xl font-semibold font-jost mb-4 pb-8">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <p className="text-sm">
        By #Developer. All rights reserved. © {new Date().getFullYear()}
      </p>
    </div>
  </div>
</footer>


  );
};

export default Footer;

// import React from "react";
// import { FaArrowUp } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div>
//       <footer className="bg-black ">
//         <div className="flex px-20 py-10">
//           <div className="left flex justify-right flex-col w-1/2 border border-white">
//             <h1 className="text-right font-jost text-white text-3xl font-semibold">
//               Feel free to hit me up, I'm looking forward to hearing from you.
//             </h1>
//             <div className="icons flex gap-8 p-10 justify-end ">
//               <i class="devicon-linkedin-plain text-white text-4xl"></i>
//               <i class="devicon-github-original text-white text-4xl"></i>
//             </div>
//           </div>
//           <div className="right flex flex-col w-1/2 border border-white">
//             <div className="icons flex gap-10 p-10 ">
//               <i className="devicon-linkedin-plain text-white text-4xl"></i>
//             </div>
//             <h1 className="text-left px-10 font-jost text-white text-3xl font-semibold">
//               ahmadimrankh99@gmail.com
//             </h1>
//           </div>
//           {/* <div className="right w-1/2 flex flex-col gap-10 p-10 border border-white">
//           <div className=" flex justify-left ">
//                <i class="devicon-github-original text-white text-4xl  "></i>
//           </div>
//           <div>
//               <h1 className="text-3xl text-white font-semibold  font-jost">ahmadimrankh99@gmail.com</h1>
//           </div>
//         </div> */}
//         </div>
//         <div className="border border-white">
//           <div className="flex justify-center flex-col gap-5">
//            <div className="flex justify-center p-5">
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//            className=" left-1/2 
//              border border-white rounded-full p-3 bg-black text-white shadow-lg z-50"  >
//               <FaArrowUp className="text-white text-xl" />
//             </button>
//            </div>
            
//           </div>
//           <div className="menu  ">
//             <ul className="flex justify-center gap-10 text-2xl font-semibold font-jost text-white type-none flex-row">
//               <a href="#home">
//                 <li>Home</li>
//               </a>
//               <a href="">
//                 <li>Home</li>
//               </a>
//               <a href="">
//                 <li>Home</li>
//               </a>
//               <a href="#about">
//                 <li>About</li>
//               </a>
//             </ul>
//           </div>
//           <div className="text-center text-white p-4 ">
//             © {new Date().getFullYear()} SaaSApp. All rights reserved.
//           </div>
//         </div>
//       </footer>
//       {/* <footer className="bg-gray-100 text-sm text-gray-600">
//       © {new Date().getFullYear()} SaaSApp. All rights reserved.
//     </footer> */}
//     </div>
//   );
// };

// export default Footer;
