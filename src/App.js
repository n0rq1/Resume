import Spline from '@splinetool/react-spline';
import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './images/logo.png'
import textIcon from './images/textfile.png'
import gradIcon from './images/gradicon.png'
import expIcon from './images/expIcon.png'
import researchIcon from './images/researchIcon.png'
import contactIcon from './images/contactIcon.png'

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit', weekday: 'short', month: 'short', day: 'numeric' };
      const pstTime = new Date().toLocaleString('en-US', options);
      setTime(pstTime);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const resizeBackground = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    resizeBackground();
    window.addEventListener('resize', resizeBackground);

    return () => window.removeEventListener('resize', resizeBackground);
  }, []);

  return (
    <div className="spline-background">
      <Spline scene="https://prod.spline.design/7QG5CF4LfbZXdMLj/scene.splinecode" />

      <div className="desktop-grid">
        <div className="desktop-icon">
          <img src={textIcon} alt="Text File" />
          <span>Resume</span>
        </div>

        <div className="desktop-icon">
          <img src={gradIcon} alt="Text File" />
          <span>Education</span>
        </div>

        <div className="desktop-icon">
          <img src={expIcon} alt="Text File" />
          <span>Experience</span>
        </div>

        <div className="desktop-icon">
          <img src={researchIcon} alt="Text File" />
          <span>Research</span>
        </div>

        <div className="desktop-icon">
          <img src={contactIcon} alt="Text File" />
          <span>Contact</span>
        </div>
      </div>

      <img src={textIcon} alt="Text File Icon" className="DesktopIcon"/>
      <div className="taskbar">
        <div className="start-button">
          <img src={logo} alt="Start Logo" className="taskbar-icon" />
        </div>

        <div className="taskbar-icons">
          <div className="taskbar-icon">🖥️</div>
          <div className="taskbar-icon">🌎</div>
          <div className="taskbar-icon">📂</div>
        </div>
        <div className="taskbar-clock">{time}</div>
      </div>
    </div>
  );
}

export default App;