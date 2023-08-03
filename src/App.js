import React from 'react';
import './App.css';
import MainNavBar from './components/MainNavBar';
import PersonalDetails from './components/PersonalDetails';
import Work from './components/Work'
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import { useState } from 'react';
import LandingBanner from './components/LandingBanner';


export default function App() {

  const [isActive, setIsActive] = useState({
    active: true,
    name: "education"
  })

  return (
    <>
  
    <MainNavBar />

    <LandingBanner />
  

    </>
  )
}