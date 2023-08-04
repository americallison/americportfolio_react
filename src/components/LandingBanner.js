import React from 'react';
import profile from "../components/images/profile.jpg";
import { Link } from 'react-router-dom';

const LandingBanner = () => {
  return (
    <>

<div className="relative min-h-screen">
  <div className="md:flex block">
    {/* Text Container */}
    <div className="md:w-6/12 w-full p-5 bg-[#173F5F] bg-opacity-90 flex flex-col justify-center">
      <h3 className="text-[#f6d55c] text-5xl md:ml-5 md:mt-16 m-2 md:mr-5 md:mb-3 ms:px-5 md:pt-3 font-bold">
        Americ Allison
      </h3>
      <small className="block text-xl text-white md:px-5 md:ml-5 md:mt-1 mt-1">
        Aspiring Software Engineer Web Developer, Teacher &amp; Data Analyst
      </small>
      <p className="text-lg mb-3 md:px-5 md:pt-3 ml-5 mt-3 text-[#F6D55C]">
        Hello, I am a tech enthusiast presently engaged in Computer
        Education and Programming, Data Analysis and Basic Computer Networking.
      </p>
      <div>
        <Link to="/cv" className="md:m-5 m-2">
          <button className="bg-[#ED553B] hover:bg-[#172F5F] text-xl text-white md:p-3 font-light shadow-lg
          animate-fade-in-button delay-2000">
            View my CV
          </button>
        </Link>
      </div>
    </div>

    {/* Image Banner */}
    <div
      className="md:w-6/12 w-full shadow-lg md:h-auto h-64 rounded-sm animate-fade-in-image delay-3000"
      style={{
        backgroundImage: `url(${profile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'fit',
      }}
    ></div>
  </div>

  <div className="ml-5">
    <p className="text-white p-5 ml-5 mt-4 text-xl">Check me out on:</p>
  </div>

  <div className="md:flex block md:mt-1 animate-fade-in-image delay-3000">
    <div className="md:w-4/12 w-full p-3 m-4">
      <button className="text-white w-full text-xl bg-[#ed553b] font-light p-4 m-2">
        LinkedIn
      </button>
    </div>
    <div className="md:w-4/12 w-full p-3 m-4">
      <button className="text-white w-full text-xl bg-[#ed553b] font-light p-4 m-2">
        GitHub
      </button>
    </div>
    <div className="md:w-4/12 p-3 w-full m-4">
      <button className="text-white w-full text-xl bg-[#ed553b] font-light p-4 m-2">
        Stack Overflow
      </button>
    </div>
  </div>
</div>;

    </>
  );
};

export default LandingBanner;