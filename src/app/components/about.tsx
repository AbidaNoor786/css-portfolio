import Image from "next/image";
import React from "react";

const About = () => {
    return(
        <div id="about">
            <section className="text-gray-600 body-font bg-slate-300">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded-full mx-auto w-[300px] h-[450px]"
        alt="hero"
        src="/my-image.jpg"width={200} height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        ABOUT ME..
        
      </h1>
      <h2 className="title-font sm:text-2xl text-2xl font-medium text-blue-900">HELLO I&apos;AM </h2>
      <h2 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-blue-900">Abida Noor</h2>
      <p className="mb-8 leading-relaxed">
        Welcome to my Portfolio! I&apos;am Abida Noor &apos; a passionate beginner in web development. I&apos;m excited 
        to share my journey with you as I explore the world of technology and design. 
        
      </p>
      <div className="flex justify-center">
       <a href={"/Abida CV.pdf"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          VIEW MY CV
        </button></a>
        
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default About