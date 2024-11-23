"use client"
import React from "react";
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return(
        <div>
            <section className="text-black body-font bg-fixed bg-gray-300 bg-cover bg-center custom-image">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    {/* left div section */}
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col
                     md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            I am
                            <br className="hidden lg:inline-block" />
                             <Typewriter
                                options={{
                                strings: ['Web developer',
                                     'UI/UX Designer',
                                     'Full Stack Developer',
                                    ],
                                autoStart: true,
                                 loop: true,
                                 }}
                                />
                        </h1>
                        <div className="w-[100px] h-[2px] bg-blue-700
                        "></div>
                        <p>
                            Hi! I am Abida Noor &apos; a webdeveloper skilled in Next.js &apos; TypeScript &apos; and Tailwind CSS.
                            I am passionate about creating responsive user-friendly apps and currently exploring
                            Agentic Ai and cloud computing.Lets connect.

                        </p>
                        {/* button div */}
                        <div className="flex justify-center ">
                            <Link href={"#Contact"}>
                            <button className="inline-flex text-white bg-gray-700 border-0 
                            px-6 py-6focus:outline-none hover:bg-red-500 rounded text-lg">
                                Contact 
                            </button>
                            </Link>
                        </div>

                    </div>
                    {/* right div image */}
                    
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" >
                        <Image src="/my-image.jpg" alt="profile"height={200} width={200} 
                        className="object-cover object-center rounded-full mx-auto w-[300px] h-[450px]"/>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Hero
