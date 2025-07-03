import React from "react";

const About = () => {
  return (
    <>
    <section>
  <div
    id="about"
    className="flex flex-col lg:flex-row justify-center bg-white font-jost gap-8 max-w-7xl mx-auto p-4 items-center lg:items-stretch"
  >
    {/* Left: Image - Hidden on small screens */}
    <div className="hidden lg:block w-full lg:w-1/2">
      <img src="/img1.jpg" alt="" className="w-full h-full object-cover rounded" />
    </div>

    {/* Right: Text */}
    <div className="flex flex-col justify-between w-full lg:w-1/2 text-center lg:text-left">
      <div>
        <h3 className="text-3xl sm:text-4xl font-semibold">
          Curious Mind. Globally Certified. Building Experience.
          Security-Focused. Tech Educator.
        </h3>

        <p className="text-[18px] text-[#595959] leading-[32.4px] py-6">
          I build and secure modern web applications with the{" "}
          <strong className="text-black">MERN Stack</strong>, focusing on
          scalable, user-centric solutions that balance functionality and security.
          To strengthen my skill set and gain global recognition, I earned an{" "}
          <strong className="text-black">International Certification in JavaScript </strong> 
          from Certiport, endorsed by CertNexus and Pearson.
        </p>

        <p className="text-[18px] text-[#595959] leading-[32.4px]">
          Alongside development, I'm passionate about{" "}
          <strong className="text-black">Cyber Security</strong>, exploring
          web vulnerabilities and network defense to create smarter, more resilient applications.
        </p>

        <p className="text-[18px] text-[#595959] leading-[32.4px]">
          Whether developing robust apps, securing systems, or mentoring
          future developers, I tackle challenges with curiosity, precision,
          and a security-first approach.
        </p>

        <p className="text-[18px] text-[#595959] leading-[32.4px] pt-6">
          Whether I'm building modern web apps, exploring cybersecurity, or
          guiding students through code, I bring{" "}
          <strong>energy, curiosity, and a growth mindset</strong> to every challenge.
        </p>
      </div>

      <div className="buttons flex flex-col sm:flex-row justify-center lg:justify-start gap-4 font-semibold mt-10">
        <button className="bg-black text-white px-6 py-3 border border-black rounded">
          <a href="https://github.com/imranahmad537" target="_blank">GitHub</a>
        </button>
        <button className="px-6 py-3 border border-black rounded">
          <a   href="https://www.linkedin.com/in/imran-ahmad99" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </button>
      </div>
    </div>
  </div>
</section>


 {/*  */}


    </>
   
   
  );
};

export default About;
//  <section>
//       <div id="about" className="flex flex-row justify-center h-[700px] bg-white font-jost gap-8  max-w-7xl mx-auto p-4 items-stretch">
//         <div className="left w-1/2 ">
//           <img src="/img1.jpg" alt="" className="w-full h-full object-cover" />
//         </div>
//         <div className="left flex flex-col justify-between w-1/2">
//           {/* <h2 className='text-5xl'>The Developer behind the solutions</h2> */}
//           <div>
//             <h3 className="text-4xl font-semibold">
//               Curious Mind. Globally Certified. Building Experience.
//               Security-Focused. Tech Educator.
//             </h3>
//             <p className="text-[18px] text-[#595959] leading-[32.4px] py-6">
//               I build and secure modern web applications with the{" "}
//               <strong className="text-black">MERN Stack</strong>, focusing on
//               scalable, user-centric solutions that balance functionality and
//               security.To strengthen my skill set and gain global recognition, I
//               earned an{" "}
//               <strong className="text-black">
//                 {" "}
//                 International Certification in JavaScript
//               </strong>{" "}
//               from Certiport, endorsed by CertNexus and Pearson.
//             </p>

//             <p className="text-[18px] text-[#595959] leading-[32.4px] ">
//               Alongside development, I'm passionate about{" "}
//               <strong className="text-black"> Cyber Security</strong>, exploring
//               web vulnerabilities and network defense to create smarter, more
//               resilient applications. Thinking like an attacker helps me code
//               like a defender.
//             </p>
//             <p className="text-[18px] text-[#595959] leading-[32.4px] ">
//               Whether developing robust apps, securing systems, or mentoring
//               future developers, I tackle challenges with curiosity, precision,
//               and a security-first approach.
//             </p>
//             <p className="text-[18px] text-[#595959] leading-[32.4px] pt-6">
//               Whether I'm building modern web apps, exploring cybersecurity, or
//               guiding students through code, I bring{" "}
//               <strong>
//                 {" "}
//                 energy, curiosity, and a growth mindset to every challenge.
//               </strong>
//             </p>
//           </div>

//           <div className="buttons flex  justify-end flex-row gap-7 font-jost font-semibold self-start mt-8">
//             <button className="mt-10 bg-black text-white border-black px-4 py-2 border-3">
//               More About Me
//             </button>
//             <button className="mt-10 border-black px-4 py-2 border-3">
//               LinkedIn
//             </button>
//           </div>
//         </div>
//       </div>
      
            
//     </section>