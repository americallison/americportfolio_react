import React from 'react';
import MainNavBar from '../components/MainNavBar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedinIn, faStackOverflow, faFacebook } from '@fortawesome/free-brands-svg-icons';



export default function CV() {

  return (
    <>
      <MainNavBar />
      <div className='p-5 md:m-5 m-2 text-white'>
        <button className='bg-[#ef6c01] m-2 p-3 text-white'>
          <FontAwesomeIcon icon={faDownload} />&nbsp;Download CV
        </button>

        <h1 className='text-black text-2xl m-2'>Curriculum Vitae of Americ Allison</h1>
        <p className="m-2 text-[#031627]">+231880-832727</p>
        <p className='text-sky-500 mb-4 font-bold m-2'><a href="https://www.linkedin.com/in/americ-allison-7a15ab166" target='_blank'>
          LinkedIn</a></p>
        <h3 className='text-xl m-2 text-[#031627]'>Skills Summary Statement</h3><hr />
        <p className='m-2 p-3 text-stone-500'>Skilled and experienced professional with a range of core competencies and skills,
          including effective communication, Python programming, web development, crop production,
          critical thinking, teamwork, and cultural sensitivity. I have used data collection tools
          like Google Forms and Kobo Toolbox, as well as software applications such as SPSS and Jot Forms. I am self-motivated, adept at multitasking, and possess strong critical thinking and documentation skills.
          I serve as an IT Mentor for the Institute of Basic Technology, teaching computer literacy, Python
          Programming.</p>
        <h3 className='text-xl'>Professional Experience</h3><hr />
        <p className="text-xl mt-2 text-gray-700">Information Technology Mentor</p>
        <div className='flex justify-between'>
          <p>Institute of Basic Technology</p>
          <p>2022 - present</p>
        </div>
        <ul>
          <li>- teaches computer literacy and Python Programming</li>
        </ul>
        <a className="text-sky-500" href="https://www.institutebasictechnology.org">https://www.institutebasictechnology.org</a>
        <p className="text-xl mt-4 text-gray-700">Resource Room and Computer Lab Assistant</p><hr />
        <p>Cuttington University</p>
        <ul>
          <li>- assisted faculty and students with research and data analysis</li>
        </ul></div>
    </>
  )
}
