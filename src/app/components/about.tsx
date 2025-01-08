import Image from "next/image";
import React from "react";


const About = () => {
    return (
        <div id="about">
            <section className="about-section">
                <div className="about-container">
                    {/* Image Section */}
                    <div className="about-image-container">
                        <Image
                            className="about-image"
                            alt="hero"
                            src="/Capture.PNG"
                            width={200}
                            height={200}
                        />
                    </div>
                    {/* Content Section */}
                    <div className="about-content">
                        <h1 className="about-title">ABOUT ME..</h1>
                        <h2 className="about-subtitle">HELLO I&apos;AM</h2>
                        <h2 className="about-name">Abida Noor</h2>
                        <p className="about-description">
                            Welcome to my Portfolio! I&apos;m Abida Noor, a passionate beginner in web development. 
                            I&apos;m excited to share my journey with you as I explore the world of technology and design.
                        </p>
                        <div className="about-button-container">
                            <a href="/Abida CV.pdf">
                                <button className="about-button">VIEW MY CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
