
import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";


const Skills = () => {
    return (
        <div id="skills">
            <section className="skills-section">
                <div className="skills-container">
                    <div className="skills-header">
                        <h1 className="skills-subtitle">SKILLS</h1>
                        <h1 className="skills-title">My Skills</h1>
                    </div>
                    <div className="skills-grid">
                        {/* Skill 1 */}
                        <div className="skill-card">
                            <div className="skill-content">
                                <div className="skill-icon-wrapper">
                                    <FaRegSquareCheck className="skill-icon" />
                                </div>
                                <h2 className="skill-name">MS OFFICE</h2>
                                <div className="progress-bar">
                                    <div className="progress-bar-fill" style={{ width: '100%' }}></div>
                                </div>
                                <p className="progress-text">100%</p>
                            </div>
                        </div>
                        {/* Skill 2 */}
                        <div className="skill-card">
                            <div className="skill-content">
                                <div className="skill-icon-wrapper">
                                    <FaRegSquareCheck className="skill-icon" />
                                </div>
                                <h2 className="skill-name">ADOBE ILLUSTRATOR</h2>
                                <div className="progress-bar">
                                    <div className="progress-bar-fill" style={{ width: '85%' }}></div>
                                </div>
                                <p className="progress-text">85%</p>
                            </div>
                        </div>
                        {/* Skill 3 */}
                        <div className="skill-card">
                            <div className="skill-content">
                                <div className="skill-icon-wrapper">
                                    <FaRegSquareCheck className="skill-icon" />
                                </div>
                                <h2 className="skill-name">HTML</h2>
                                <div className="progress-bar">
                                    <div className="progress-bar-fill" style={{ width: '100%' }}></div>
                                </div>
                                <p className="progress-text">100%</p>
                            </div>
                        </div>
                        {/* Skill 4 */}
                        <div className="skill-card">
                            <div className="skill-content">
                                <div className="skill-icon-wrapper">
                                    <FaRegSquareCheck className="skill-icon" />
                                </div>
                                <h2 className="skill-name">CSS</h2>
                                <div className="progress-bar">
                                    <div className="progress-bar-fill" style={{ width: '90%' }}></div>
                                </div>
                                <p className="progress-text">90%</p>
                            </div>
                        </div>
                        {/* Skill 5 */}
                        <div className="skill-card">
                            <div className="skill-content">
                                <div className="skill-icon-wrapper">
                                    <FaRegSquareCheck className="skill-icon" />
                                </div>
                                <h2 className="skill-name">TYPESCRIPT</h2>
                                <div className="progress-bar">
                                    <div className="progress-bar-fill" style={{ width: '70%' }}></div>
                                </div>
                                <p className="progress-text">70%</p>
                            </div>
                        </div>
                        {/* Skill 6 */}
                        <div className="skill-card">
                            <div className="skill-content">
                                <div className="skill-icon-wrapper">
                                    <FaRegSquareCheck className="skill-icon" />
                                </div>
                                <h2 className="skill-name">NEXT.JS</h2>
                                <div className="progress-bar">
                                    <div className="progress-bar-fill" style={{ width: '50%' }}></div>
                                </div>
                                <p className="progress-text">50%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;

