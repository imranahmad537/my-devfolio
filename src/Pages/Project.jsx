import React from "react";
const myproject = [
  {
    title: "MERN Stack Complete Project",
    bgimg: "/bg8.avif",
    img: "/img1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla soluta magnam, tenetur nesciunt doloribus sit",
    gradient: "from-black/20 via-black/55 to-black/60",
    link: "visit link",
  },
  {
    title: "MERN Stack Complete Project",
    bgimg: "/r.jpg",
    img: "/img1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla soluta magnam, tenetur nesciunt doloribus sit",
    gradient: "from-black/20 via-black/55 to-black/60  ",
    link: "visit link",
  },
  // {
  //   title: "MERN Stack Complete Project",
  //   bgimg: "/q4.jpg",
  //   img: "/img1.jpg",
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla soluta magnam, tenetur nesciunt doloribus sit",
  //   gradient: "from-black/40 via-black/60 to-black/100",
  //   link: "visit link",
  // },
  {
    title: "Weather",
    bgimg: "/bg8.avif",
    img: "/img1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla soluta magnam, tenetur nesciunt doloribus sit",
    gradient: "from-black/60 via-black/40 to-black/50",
    link: "visit link",
  },
  // {
  //   title: "MERN Stack Complete Project",
  //   bgimg: "/bg8.avif",
  //   img: "/img1.jpg",
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla soluta magnam, tenetur nesciunt doloribus sit",
  //   gradient: 'from-black/10 via-black/50 to-black/10',
  //   link: "visit link",
  // },
];

const Project = () => {
  return (
    <>
    <section
  className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-8 md:px-20"
  style={{ backgroundImage: `url(${myproject[0].bgimg})` }}
>
  <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/70 to-black/70"></div>

  <div className="flex flex-col text-white relative z-10">
    {/* Heading + Description */}
    <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
        Selective Work
      </h1>
      <p className="text-sm sm:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, dicta.
      </p>
    </div>

    {/* First Project */}
    <div className="flex flex-col lg:flex-row items-center gap-10 py-16 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="font-jost font-bold text-sm sm:text-base">CASE STUDY</h3>
        <hr className="border-t-2 my-4 border-white" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-jost font-semibold">
          {myproject[0].title}
        </h1>
        <p className="py-6 text-sm sm:text-base">{myproject[0].description}</p>
        <button className="mt-6 border-white px-6 py-2 border-2 text-sm">
          {myproject[0].link}
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={myproject[0].img}
          alt={myproject[0].title}
          className="w-full max-w-md object-contain rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

{/* Remaining Projects */}
{myproject.slice(1).map((prj, index) => (
  <section
    key={index}
    className="relative w-full bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-8 md:px-20"
    style={{ backgroundImage: `url(${prj.bgimg})` }}
  >
    <div className={`absolute inset-0 z-0 bg-gradient-to-l ${prj.gradient}`}></div>

    <div className="flex flex-col lg:flex-row items-center gap-10 text-white relative z-10 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="font-jost font-bold text-sm sm:text-base">CASE STUDY</h3>
        <hr className="border-t-2 my-4 border-white" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-jost font-semibold">
          {prj.title}
        </h1>
        <p className="py-6 text-sm sm:text-base">{prj.description}</p>
        <button className="mt-6 border-white px-6 py-2 border-2 text-sm">
          {prj.link}
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={prj.img}
          alt={prj.title}
          className="w-full max-w-md object-contain rounded-lg"
        />
      </div>
    </div>
  </section>
))}

  
     
    </>
  );
};

export default Project;
 {/* <section
        className=" relative w-full min-h-screen bg-cover bg-center bg-no-repeat py-20 px-20"
        style={{ backgroundImage: `url(${myproject[0].bgimg})` }}
      >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/10"></div>

        <div className="flex  flex-col text-white">
          {/* Heading + Description */}
      //     <div className="flex relative z-10 flex-col gap-10">
      //       <h1 className="text-5xl text-center font-semibold">
      //         Selective Work
      //       </h1>
      //       <p className="text-center">
      //         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      //         Excepturi, dicta.
      //       </p>
      //     </div>

      //     {/* First Project */}
      //     <div className="flex z-10 gap-10 py-20">
      //       <div className="left w-1/2">
      //         <h3 className="font-jost font-bold">CASE STUDY</h3>
      //         <hr className="border-t-2 my-4" />
      //         <h1 className="text-4xl font-jost font-semibold">
      //           {myproject[0].title}
      //         </h1>
      //         <p className="py-10">{myproject[0].description}</p>
      //         <button className="mt-10 border-black px-4 py-2 border-2">
      //           {myproject[0].link}
      //         </button>
      //       </div>
      //       <div className="right w-1/2">
      //         <img src={myproject[0].img} alt={myproject[0].title} />
      //       </div>
      //     </div>
      //   </div>
      // </section>

      // {myproject.slice(1).map((prj, index) => (
      //   <section
      //     key={index}
      //     className="relative w-full bg-cover bg-center bg-no-repeat py-20 px-20"
      //     style={{ backgroundImage: `url(${prj.bgimg})` }}
      //   >
      //      <div className={`absolute inset-0 z-0 bg-gradient-to-l ${prj.gradient}`}></div>
      //     <div className="flex relative z-10 gap-10 text-white">
      //       <div className="left w-1/2">
      //         <h3 className="font-jost font-bold">CASE STUDY</h3>
      //         <hr className="border-t-2 my-4" />
      //         <h1 className="text-4xl font-jost font-semibold">{prj.title}</h1>
      //         <p className="py-10">{prj.description}</p>
      //         <button className="mt-10 border-black px-4 py-2 border-2">
      //           {prj.link}
      //         </button>
      //       </div>
      //       <div className="right w-1/2">
      //         <img src={prj.img} alt={prj.title} />
      //       </div>
      //     </div>
      //   </section>
      // ))} */}