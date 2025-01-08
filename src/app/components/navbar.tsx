import Link from 'next/link';
import { LuDownload } from 'react-icons/lu';


// import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <header className="navbar-header">
                <div className="navbar-container">
                    {/* heading */}
                    <span className="navbar-heading">My Portfolio</span>
                    {/* links */}
                    <nav className="navbar-links">
                        <Link href={"/"} className="navbar-link">Home</Link>
                        <Link href={"#about"} className="navbar-link">About</Link>
                        <Link href={"#skills"} className="navbar-link">Skills</Link>
                        <Link href={"#projects"} className="navbar-link">Projects</Link>
                        <Link href={"#Contact"} className="navbar-link">Contact</Link>
                    </nav>
                    {/* button code */}
                    <a href="/Abida CV.pdf" className="navbar-download-link">
                        <button className="navbar-download-button">
                            Download CV 
                            <LuDownload className="navbar-icon" />
                        </button>
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
