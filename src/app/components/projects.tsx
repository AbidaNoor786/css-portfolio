import Image from "next/image";
import React from "react";


const Projects = () => {
    return (
        <div id="projects">
            <section className="projects-section">
                <div className="projects-container">
                    {/* Section Header */}
                    <div className="projects-header">
                        <h1 className="projects-title">My Projects</h1>
                        <p className="projects-description">
                            Creating this project allowed me to deepen my understanding of frontend development and 
                            practice implementing user-friendly interfaces. I&apos;m always exploring ways to make 
                            web content engaging and accessible, and this project is another step forward on my 
                            journey as an aspiring web developer.
                        </p>
                    </div>
                    {/* Project Cards */}
                    <div className="projects-grid">
                        {/* Project 1 */}
                        <div className="project-card">
                            <div className="project-image-container">
                                <Image 
                                    alt="gallery"
                                    className="project-image"
                                    src="/html.PNG"
                                    layout="fill"
                                />
                                <div className="project-overlay">
                                    <h2 className="project-category">SALON WEB PAGE</h2>
                                    <h1 className="project-name">SALON</h1>
                                    <p className="project-details">
                                        This is the project which I&apos;ve created for those who own a salon business.
                                    </p>
                                    <p className="project-link">View my project...</p>
                                </div>
                            </div>
                        </div>
                        {/* Project 2 */}
                        <div className="project-card">
                            <div className="project-image-container">
                                <Image 
                                    alt="gallery"
                                    className="project-image"
                                    src="/figma-design.PNG"
                                    layout="fill"
                                />
                                <div className="project-overlay">
                                    <h2 className="project-category">FIGMA WEB PAGE PIXEL PERFECT</h2>
                                    <h1 className="project-name">WEB PAGE</h1>
                                    <p className="project-details">
                                        In this project, I&apos;ve created a design of a FIGMA template.
                                    </p>
                                    <p className="project-link">View my project...</p>
                                </div>
                            </div>
                        </div>
                        {/* Project 3 */}
                        <div className="project-card">
                            <div className="project-image-container">
                                <Image 
                                    alt="gallery"
                                    className="project-image"
                                    src="/figma-pixel-perfect.PNG"
                                    layout="fill"
                                />
                                <div className="project-overlay">
                                    <h2 className="project-category">FIGMA WEB PAGE PIXEL PERFECT</h2>
                                    <h1 className="project-name">WEB PAGE</h1>
                                    <p className="project-details">
                                        In this project, I&apos;ve created a design of a FIGMA template.
                                    </p>
                                    <p className="project-link">View my project...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
