import React, { useEffect, useState } from 'react';
import logo2 from '../assets/logo2.png';
import progenilogo from '../assets/progenilogo.png';
import { Link } from 'react-router-dom';
import pilot from '../assets/pilot.svg';
import '../styles/home.css';
import Events from './Events';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Parallax from '../components/Parallax';
import RegisterBtn from '../components/RegisterBtn';

const Home = () => {

  const [number, setNumber] = useState(20);

  useEffect(() => {
    let currentNumber = 1;
    const intervalId = setInterval(() => {
      // Update the number from 20 to 25
      if (currentNumber < 25) {
        currentNumber++;
      } else {
        currentNumber = 25; // Fix it at 25 once the loop completes
        clearInterval(intervalId); // Stop the interval once it hits 25
      }
      setNumber(currentNumber);
    }, 100); // Fast transition

    return () => clearInterval(intervalId); // Clean up the interval when component unmounts
  }, []);

  return (
    <>
      <div className="home-bg">
        <Header/>
        <div className="home-container">
          <div className="home-content1">
              <img src={progenilogo} alt="progeni25-logo" />
              <h1 className='brand-main'>Progen'i <span className='number'>{number}.0</span></h1>
              <div className="home-date-container">
              <h3 className='home-date'>Held on</h3>
              <h3 className='home-date'>November-14 2024</h3>
              </div>
              <p>A national level technical symposium conducted by Department of Computer science and Engineering, Goverment College of Engineering, Salem.</p>
            <div className="home-btn">
            <Link to="/register" id='neon-btn'>
              <button className='register-btn'>
                  REGISTER
              </button>
              </Link>
              
            </div>
            {/* <RegisterBtn/> */}
          </div>
          <div className="home-content2">
            <img src={pilot} alt="" />
          </div>
        </div>
      </div>
      <Events />
      <Parallax/>
      <Footer />
    </>
  );
}

export default Home;
