import React from 'react';
import profile from "../components/images/profile.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedinIn, faStackOverflow, faFacebook} from '@fortawesome/free-brands-svg-icons';



const LandingBanner = () => {
  return (
    <div className="h-screen">
      <div
        className="h-screen shadow-lg rounded-sm animate-fade-in-image delay-3000"
        style={{
          backgroundImage: `url(${profile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-[rgba(0,0,0,0.7)] md:p-64 p-8 md:mt-0 h-full text-white flex flex-col justify-center">
          {/* Text Container */}
          <h3 className="text-white text-4xl font-bold mb-3">
            Americ Allison
          </h3>
          <small className="text-xl mb-2">
            Aspiring Software Engineer <span className='text-stone-400'>|</span> Web Developer&nbsp;
            <span className='text-stone-400'>|</span> Teacher <span className='text-stone-400'>|</span> Data Analyst
          </small>
          <p className="text-lg text-stone-400 mb-2">
            Hello, I am a tech enthusiast presently engaged in Computer
            Education, Programming and Data Analysis.
          </p>
          <div className='mt-3'>
            <Link to="/projects" className="mt-3 mb-2">
              <button className="bg-[#EF6C01] text-xl text-white p-3 font-light shadow-lg
              animate-fade-in-button delay-2000 bg-gradient-to-r from-[#2b7494] to-[#E8373A]">
                <FontAwesomeIcon icon={faBookOpen} />&nbsp;
                View my projects
              </button>
            </Link>
          </div>
        </div>
      </div>

      

      {/* Social media links */}
      {/* ... */}
    </div>
  );
};

export default LandingBanner;

