import React, {useState} from 'react';



export default function PersonalDetails() {

const [isActive, setIsActive] = useState({
  active: true,
  name: "education"
})

  return (
<div className="py-6">
<main>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    {/* <!-- Replace with your content --> */}

    {/* <!-- Work --> */}
    <div id="intro" className="bg-[#
    3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
      <div id="avatar" className="flex justify-center py-2">
        <img className="w-40" src="https://api.multiavatar.com/JB.svg " alt="JB image" />
      </div>
      <div id="content" className="prose lg:prose-xl px-2">
        <h1 className="text-center text-gray-800 text-3xl capitalize m-2 font-medium">Americ Allison</h1>
        <small className="text-center block text-md mb-3 text-gray-800">Junior Web Developer, Teacher &amp; Network Technician</small>
        <p className="text-justify text-lg mt-2 p-3 m-2 text-gray-800">Hello, I am a tech enthusiast presently engaged in Computer Networking and 
        Programming. I obtained a Bachelor of Science degree in Plant and Soil Science from Cuttington University and minored 
        in Accounting. I have been involved with technology for about 5 years. I first started writing small programs in
        Python using Tkinter. I then transitioned web applications with Flask. My major languages are HTML, CSS, Python, 
        Javascript. My major frameworks are Bootstrap, Tailwind CSS, Flask. </p>

        <div className="p-6 max-w-full mx-auto">
            <ul className="flex justify-center items-center gap-4">
            <li className={`border border-zinc-500 rounded-lg p-4  ${isActive.active && isActive.name === "education" && 'bg-[#FF8F56]'}`}>
               <a href="" id="education" className="font-roboto font-bold text-xl text-white">Education</a>
              </li>
              <li className={`border border-zinc-500 rounded-lg p-4  ${isActive.active && isActive.name === "work" && 'bg-[#FF8F56]'}`}>
                <a href="" id="work" className="font-roboto text-xl">Work</a>
              </li>
              <li className={`border border-zinc-500 rounded-lg p-4  ${isActive.active && isActive.name === "hobbies" && 'bg-[#FF8F56]'}`}>
                <a href="" id="hobbies" className="font-roboto text-xl">Hobbies</a>
              </li>
            </ul>
        </div>

      </div>
    </div>
    </div>
    </main>
    </div>
    
  )
    }
