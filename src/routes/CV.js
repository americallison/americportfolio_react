import React from 'react';
import MainNavBar from '../components/MainNavBar';



export default function CV() {
  
  return (
    <>
    <MainNavBar />
    <div className='p-10 m-7 text-white'>
        <h1>Curriculum Vitae of Americ Allison</h1>
        <p>+231880-832727</p>
        <p className='text-sky-500 mb-4'><a href="https://www.linked.com/in/americ-allison">
        LinkedIn</a></p>
        <h3 className='text-xl'>Skills Summary Statement</h3><hr />
        <p className='mb-4'>Skilled and experienced professional with a range of core competencies and skills, 
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
