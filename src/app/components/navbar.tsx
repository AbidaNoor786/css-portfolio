import Link from 'next/link'

import { LuDownload } from 'react-icons/lu';

const Navbar = () => {
    return (
        <div className='bg-gray-700 z-50 sticky top-0'>
        <header className='text-white body-font'>
            <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
                {/* heading */}
                <span className='ml-3 text-xl'>My Portfolio</span>
                {/* links */}
                <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
                    <Link href={"/"} className='mr-6 hover:text-red-600'>Home</Link>
                    <Link href={"#about"} className='mr-6 hover:text-red-600'>About</Link>
                    <Link href={"#skills"} className='mr-6 hover:text-red-600'>Skills</Link>
                    <Link href={"#projects"} className='mr-6 hover:text-red-600'>Projects</Link>
                    <Link href={"#Contact"} className='mr-6 hover:text-red-600'>Contact</Link>
                </nav>
                {/* button code */}
                <a href="/Abida CV.pdf">
                <button className='inline-flex items-center bg-black border-0 py-1 
                px-focus:outline-none hover:bg-slate-700 rounded text-white mt-4 md:mt-0'>
                    Download CV 
                <LuDownload className='text-xl ml-2'/>
                </button>
                </a>
            </div>
            </header>
            </div> 

    )
}

export default Navbar
