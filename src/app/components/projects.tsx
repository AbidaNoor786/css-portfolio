import Image from "next/image";

import React from "react";
const Projects = () => {
    return (
            <div id="projects">
               <section className="text-gray-600 body-font bg-gray-300">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Creating this project allowed me to depend my understanding of frontend development and practice implementing 
        user friendly interfaces.
        I&apos;m always exploring ways to make web content engaging and accessible&apos; and this project is an other step
        forward on my journey as an inspiring web developer. 
      </p>
    </div>
    <div className="flex flex-wrap -m-8 ">
        {/* mary 1 project start horahy hain */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer ">
        <div className="flex relative">
          <Image 
            alt="gallery"
            className="absolute inset-0 w-full h-full object-contain object-center"
            src="/html.PNG"
            layout="fill"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-pink-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              SALON WEB PAGE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              SALON
            </h1>
            <p className="leading-relaxed">
             This is the project whice I&apos;am created for those who owns a salon businss.
            </p>
            <p className="leading-relaxed text-blue-500 hover:underline">
             view my project...
            </p>
          </div>
        </div>
      </div>
       {/* mary 2 project start horahy hain */}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer ">
        <div className="flex relative">
          <Image 
            alt="gallery"
            className="absolute inset-0 w-full h-full object-contain object-center"
            src="/figma-design.PNG"
            layout="fill"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-pink-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              FIGMA WEB PAGE PIXEL PERFECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              WEB PAGE
            </h1>
            <p className="leading-relaxed">
             In this project whice I&apos;ve created a design of FIGMA Template.
            </p>
            <p className="leading-relaxed text-blue-500 hover:underline">
             view my project...
            </p>
          </div>
        </div>
      </div>

      {/* mary 3 project start horahy hain */}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer ">
        <div className="flex relative">
          <Image 
            alt="gallery"
            className="absolute inset-0 w-full h-full object-contain object-center"
            src="/figma-pixel-perfect.PNG"
            layout="fill"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-pink-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              FIGMA WEB PAGE PIXEL PERFECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              WEB PAGE
            </h1>
            <p className="leading-relaxed">
             In this project whice I&apos;ve created a design of FIGMA Template.
            </p>
            <p className="leading-relaxed text-blue-500 hover:underline">
             view my project...
            </p>
          </div>
        </div>
      </div>
      
 
    </div>
  </div>
</section>

            </div>

                          
    )
}
export default Projects 