import React from 'react';
import profile from "../components/images/profile.jpg";




export default function PersonalDetails({isActive, setIsActive}) {
  
  function handleActive (e) {
       e.preventDefault();
       setIsActive({
        active: true,
        name: e.target.id
       })
  }

  return (
<div className="py-6">
<main>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div id="intro" className="bg-[#
    3EAEAEA] h-auto my-6 py-8 rounded-lg">
      <div id="avatar" className="lg:flex justify-center py-2">
        <img className="w-40 h-43 rounded-xl" src={profile} alt="JB" />
      </div>
      <div id="content" className="prose lg:prose-xl px-2">
        <h3 className="text-center text-sky-900 text-2xl capitalize m-2 font-medium">Americ Allison</h3>
        <small className="text-center block text-md text-sky-700 mb-3 text-gray-800">Web Developer, Teacher &amp; Network Technician</small>
        <p className="text-justify text-lg mt-2 p-3 m-2 text-gray-800">Hello, I am a tech enthusiast presently engaged in Computer 
        Programming and basic networking. I obtained a Bachelor of Science degree in Plant and Soil Science from Cuttington University and minored 
        in Accounting. I have been involved with technology for about 5 years. I first started writing small desktop programs in
        Python using Tkinter and building small static websites using HTML and CSS. I then transitioned to web applications with Flask. My major languages are HTML, CSS, Python, 
        Javascript. My major frameworks are Bootstrap, Tailwind CSS, Flask. I have experience in using two of the most popular
        tools used in collaborative programming (Git & GitHub).</p>

        <div className="p-6 max-w-full mx-auto">
            <ul className="flex justify-center items-center gap-4">
              <li className={`border border-zinc-500 rounded-lg p-4 hover:scale-105 transition duration-300 ease-in-out ${isActive.active && isActive.name === "education" && 'bg-[#f2e7d5] '}`}>
               <a href="#education" onClick={handleActive} id="education" className="font-roboto font-bold text-xl">Education</a>
              </li>
              <li className={`border border-zinc-500 rounded-lg p-4 hover:scale-105 transition duration-300 ease-in-out ${isActive.active && isActive.name === "work" && 'bg-[#f2e7d5] '}`}>
              <a href="#work" onClick={handleActive}  id="work" 
              className="font-roboto font-bold text-xl">Work</a>
              </li>
              <li className={`border border-zinc-500 rounded-lg p-4 hover:scale-105 transition duration-300 ease-in-out ${isActive.active && isActive.name === "hobbies" && 'bg-[#f2e7d5] '}`}>
                <a href="#hobbies" onClick={handleActive} id="hobbies" className="font-roboto font-bold text-xl">Hobbies</a>
              </li>
            </ul>
        </div>

      </div>
    </div>
    </div>

    </main><hr />
    
    </div>
    
  )
    }
