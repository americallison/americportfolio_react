import React from 'react';
import profile from "../components/images/profile.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedinIn, faStackOverflow, faFacebook} from '@fortawesome/free-brands-svg-icons';


const LandingBanner = () => {
  return (
    <>

<div className="relative min-h-screen">
  <div className="md:flex block">
     {/* Image Banner */}
     <div
      className="md:w-6/12 shadow-lg p-5 md:h-auto md:m-5 md:ml-12 md:mt-8 h-64 rounded-sm animate-fade-in-image delay-3000"
      style={{
        backgroundImage: `url(${profile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'object',
      }}
    ></div>
    {/* Text Container */}
    <div className="md:w-6/12 w-full p-5 bg-opacity-90 flex flex-col justify-center">
      <h3 className="text-[#031627] text-4xl md:ml-5 md:mt-5 m-2 md:mr-5 md:mb-3 ms:px-5 md:pt-3 font-bold">
        Americ Allison
      </h3>
      <small className="text-xl md:ml-5 text-[#ef6c01] m-2 md:mt-1 mt-1">
        Aspiring Software Engineer Web Developer, Teacher &amp; Data Analyst
      </small>
      <p className="text-lg m-2 md:mb-3 text-stone-400 mb-2 md:pt-3 md:ml-5 md:mt-2">
        Hello, I am a tech enthusiast presently engaged in Computer
        Education, Programming and Data Analysis.
      </p>
      <div className='mt-3 mb-2'>
        <Link to="/cv" className="md:m-5 mt-3 ml-2 mb-3">
          <button className="bg-[#EF6C01] hover:bg-[#172F5F] rounded text-xl text-white p-3 font-light shadow-lg
          animate-fade-in-button delay-2000 bg-gradient-to-r from-[#031697] to-[#E8373A]"><FontAwesomeIcon icon={faBookOpen} />&nbsp;
            View my CV
          </button>
        </Link>
      </div>
    </div>

   
  </div>

<hr></hr>
  <div className="flex block md:mt-2 mt-3 animate-fade-in-image delay-3000">
    <div className="w-3/12">
      <button className="text-white w-full text-4xl font-light p-2">
      <FontAwesomeIcon icon={faLinkedinIn} className="p-3 rounded shadow hover:scale-105 m-2 bg-[#1f86fb]" />
      </button>
    </div>
    <div className="w-3/12">
      <button className="text-white w-full text-4xl font-light p-2">
      <FontAwesomeIcon icon={faGithubAlt} className="p-3 rounded shadow hover:scale-105 m-2 bg-[#000000]" />
      </button>
    </div>
    <div className="w-3/12">
      <button className="text-[#ef6c01] w-full text-4xl font-light p-2">
      <FontAwesomeIcon icon={faStackOverflow} className="p-3 rounded shadow hover:scale-105 m-2"/>
      </button>
    </div>
    <div className="w-3/12">
      <button className="text-white w-full text-4xl font-light p-2">
      <FontAwesomeIcon icon={faFacebook} className="p-3 rounded shadow hover:scale-105 m-2 bg-[#2b7494]"/>
      </button>
    </div>
  </div>
</div>;

    </>
  );
};

export default LandingBanner;