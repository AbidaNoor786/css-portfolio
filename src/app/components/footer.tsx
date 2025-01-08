import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer-bg">
            <footer className="footer">
                <div className="footer-container">
                    <span className="footer-title">My Portfolio</span>
                    <p className="footer-rights">All rights reserved 2024</p>
                    <div className="footer-icons">
                        {/* Social Media Links */}
                        <Link
                            target="_blank"
                            href="https://www.facebook.com/share/18Pq1mTQsc/"
                            className="footer-icon footer-facebook"
                        >
                            <FaFacebookSquare />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://github.com/AbidaNoor786"
                            className="footer-icon footer-github"
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/abida-noor-164646302"
                            className="footer-icon footer-linkedin"
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
