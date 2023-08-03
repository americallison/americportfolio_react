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
          <div className="md:w-5/12 w-full p-5 bmd:static bg-[#173F5F] bg-opacity-90
          shadow fixed top-20 h-screen md:h-screen left-0 md:flex md:flex-col md:justify-center">
            <h3 className="text-center text-white text-3xl capitalize m-2 font-light">Americ Allison</h3>
            <small className="text-center block text-xl text-white mb-3">
              Aspiring Software Engineer Web Developer, Teacher &amp; Data Analyst</small>
            <p className="text-lg mt-2 p-3 m-2 text-[#F6D55C]">
              Hello, I am a tech enthusiast presently engaged in Computer
              Education and Programming, Data Analysis and Basic Computer Networking. 
            </p>
            <button className="mt-4 bg-[#ED553B] hover:bg[#172F5F] text-white p-3 font-light shadow-lg">
              View my CV
            </button>
          </div>
        </div>

        {/* Image Banner for Small Devices */}
        <div className="md:hidden absolute inset-0 bg-cover bg-center">
          <img src={profile} alt="Banner" className="w-full h-full absolute inset-0 opacity-20" />
        </div>
      </div>

    </>
  );
};

export default LandingBanner;