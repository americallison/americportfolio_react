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
<div Style={{backgroundImage:'url({profile})'}} className="py-6">
<main>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div id="intro" className="bg-[#
    3EAEAEA] h-auto my-6 py-8 rounded-lg">
      <div id="avatar" className="flex justify-center py-2">
        <img className="w-60 h-54 rounded-xl" src={profile} alt="JB" />
      </div>
      <div id="content" className="prose lg:prose-xl px-2">
        <div className="p-6 max-w-full mx-auto">
            <ul className="flex justify-center items-center gap-4">
              <li className={`border border-zinc-500 p-4 hover:scale-105 transition duration-300 ease-in-out ${isActive.active && isActive.name === "education" && 'bg-[#f2e7d3] '}`}>
               <a href="#education" onClick={handleActive} id="education" className="font-roboto font-bold text-xl">Education</a>
              </li>
              <li className={`border border-zinc-500 p-4 hover:scale-105 transition duration-300 ease-in-out ${isActive.active && isActive.name === "work" && 'bg-[#f2e7d3] '}`}>
              <a href="#work" onClick={handleActive}  id="work" 
              className="font-roboto font-bold text-xl">Work</a>
              </li>
              <li className={`border border-zinc-500 p-4 hover:scale-105 transition duration-300 ease-in-out ${isActive.active && isActive.name === "hobbies" && 'bg-[#f2e7d3] '}`}>
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
