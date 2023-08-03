import React from 'react';
import profile from "../components/images/profile.jpg";


const LandingBanner = () => {
  return (
    <>

      <div className="relative min-h-screen">
        <div className="flex md:h-screen">
          {/* Image Banner for Medium to Large Devices */}
          <div className="hidden md:w-6/12 md:flex md:items-center md:justify-center md:bg-cover md:bg-center">
            <img src={profile} alt="Banner" className="w-full h-full absolute inset-0 opacity-100" />
          </div>

          {/* Text Container */}
          <div className="md:w-6/12 w-full p-5 bmd:static bg-[#173F5F] bg-opacity-90
          bg-rounded fixed top-20 h-screen md:h-screen left-0 md:flex md:flex-col md:justify-center">
            <h3 className="text-center text-white text-3xl capitalize m-2 font-light">Americ Allison</h3>
            <small className="text-center block text-2xl text-white mb-3">Web Developer, Teacher &amp; Network Technician</small>
            <p className="text-justify text-lg mt-2 p-3 m-2 text-[#F6D55C]">
              Hello, I am a tech enthusiast presently engaged in Computer
              Programming and basic networking. I obtained a Bachelor of Science degree in Plant and Soil Science from Cuttington University and minored
              in Accounting. I have been involved with technology for about 5 years. I first started writing small desktop programs in
              Python using Tkinter and building small static websites using HTML and CSS. I then transitioned to web applications with Flask.
              My major languages are HTML, CSS, Python,
              Javascript. My major frameworks are Bootstrap, Tailwind CSS, Flask. I have experience in using two of the most popular
              tools used in collaborative programming (Git & GitHub).
            </p>
            <button className="mt-5 bg-[#ED553B] hover:bg[#172F5F] text-white px-4 py-2 shadow">
              Get Started
            </button>
          </div>
        </div>

        {/* Image Banner for Small Devices */}
        <div className="md:hidden absolute inset-0 bg-cover bg-center">
          <img src={profile} alt="Banner" className="w-full h-full absolute inset-0 opacity-50" />
        </div>
      </div>

    </>
  );
};

export default LandingBanner;