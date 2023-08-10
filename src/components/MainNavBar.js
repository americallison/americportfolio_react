import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faHomeAlt, faMobilePhone, faBookAtlas, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faYahoo} from '@fortawesome/free-brands-svg-icons';

export default function MainNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuShow, setMenuShow] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        setMenuShow(!menuShow);
    };

    return (
        <nav className="z-60">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-sky-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                            onClick={toggleNavbar}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                // Icon when menu is open
                                <>
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>

                                </>
                            )}
                        </button>


                    </div>

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">

                            <h1 className='text-[#252B48] font-bold logo-text'>&nbsp;<Link to="/">PABS TECH</Link></h1>
                        </div>
                        {/* Navigation links */}
                        <div className="hidden justify-end sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link to="/" className="text-[#389F91] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </Link>
                                <Link to="/cv" className="text-[#389F91] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Curriculum Vitae
                                </Link>
                                <Link to="/projects" className="text-[#389F91] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Projects
                                </Link>
                                <Link to="/contact"
                                    className="text-[#389F91] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact
                                </Link>
                                <Link to="/skills"
                                    className="text-[#389F91] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Skills
                                </Link>
                                <Link to="/about"
                                    className="text-[#389F91] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About Me
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {menuShow ? (
                        <div className="absolute w-60 inset-top-[12] bg-opacity-90 bg-[#031627] z-40 p-3">
                            <ul>
                                <li className='md:hidden p-2 text-white'><Link to="/"><FontAwesomeIcon icon={faHomeAlt} />&nbsp;Home</Link></li>
                                <li className='md:hidden p-2 text-white'><Link to="/cv"><FontAwesomeIcon icon={faBookOpen} />&nbsp;CV</Link></li>
                                <li className="md:hidden p-2 text-white"><Link to="/projects"><FontAwesomeIcon icon={faHomeAlt} />&nbsp;Projects</Link></li>
                                <li className="md:hidden p-2 text-white"><Link to="/contact"><FontAwesomeIcon icon={faMobilePhone} />&nbsp;Contact</Link></li>
                                <li className='md:hidden p-2 text-white'><Link to="/skills"><FontAwesomeIcon icon={faUserCog} />&nbsp;Skills</Link></li>
                                <li className='md:hidden p-2 text-white'><Link to="/about"><FontAwesomeIcon icon={faBookAtlas} />&nbsp;About Me</Link></li>
                            </ul>
                        </div>
                    ) : ("")}

                </div>
            </div><hr />
        </nav>
    )
}