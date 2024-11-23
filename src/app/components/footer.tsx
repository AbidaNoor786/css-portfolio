import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="bg-gray-700">
            <footer className="text-white text-xl body-font">
                <div className="containar px-5 py-8 mx-auto flex items-center">
                    <span className="ml-3 text-xl">My Portfolio</span>
                    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-1-2
                     sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        All rights reserved 2024</p>
                        {/* icons work */}
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            {/* social medeia links */}
                            <Link target="_blank" href={'https://www.facebook.com/share/18Pq1mTQsc/'} className="ml-3 text-blue-800">
                            <FaFacebookSquare className="text-3xl" />
                            </Link>
                            <Link target="_blank" href={'https://github.com/AbidaNoor786'} className="ml-3 text-black">
                            <FaGithub className="text-3xl" />
                            </Link>
                            <Link target="_blank" href={'https://www.linkedin.com/in/abida-noor-164646302'} className="ml-3 text-blue-800">
                            <FaLinkedin className="text-3xl"/>
                            </Link>

                        </span>
                </div>
            </footer>
        </div>
    )
}
export default Footer