import logo from './logo.svg';
import './App.css';
import MainNavBar from './components/MainNavBar';
import PersonalDetails from './components/PersonalDetails';
import Work from './components/Work'
import Education from './components/Education';
import Hobbies from './components/Hobbies';

export default function App() {
  return (
    <>
    {/* insert the main navbar component */}
    <MainNavBar />

    {/* insert the personal details component */}
    <PersonalDetails />

     {/* insert the education component */}
     <Education />

    {/* insert the work component */}
     <Work />

     {/* insert the hobbies component */}
     <Hobbies />
      
    </>
  )
}