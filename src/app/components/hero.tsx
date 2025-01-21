"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";


const Hero = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="hero-container">
                    {/* Left div section */}
                    <div className="hero-left">
                        <h1 className="hero-title">
                            I am Web Developer<br/>UI/UX Designer<br/>Full Stack Developer
                            <br className="hero-break" />
                                   
                    
                        </h1>
                        <div className="hero-divider"></div>
                        <p className="hero-description">
                            Hi! I am Abida Noor, a web developer skilled in Next.js,
                            </p>
                            <p className="p1">TypeScript, and Tailwind CSS. 
                            I am passionate about creating responsive,</p> 
                            
                            <p className="p2">user-friendly apps and currently exploring 
                            Agentic AI and cloud computing. Let&apos;s connect.</p>
                        
                        {/* Button div */}
                        <div className="hero-button-container">
                            <Link href={"#Contact"}>
                                <button className="hero-button">Contact</button>
                            </Link>
                        </div>
                    </div>
                    {/* Right div image */}
                    <div className="hero-right">
                        <Image
                            src="/Capture.PNG"
                            alt="profile"
                            height={200}
                            width={200}
                            className="hero-image"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
