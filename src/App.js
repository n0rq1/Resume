import Spline from '@splinetool/react-spline';
import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './images/logo.png'

function App() {
  const [time, setTime] = useState('');

  // Function to update time in PST
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
      <div className="taskbar">
        <div className="start-button">
          <img src={logo} alt="Start Logo" className="taskbar-icon" />
        </div>

        <div className="taskbar-icons">
          <div className="taskbar-icon">🖥️</div>
          <div className="taskbar-icon">🌎</div>
          <div className="taskbar-icon">📂</div>
        </div>

        {/* Clock with real-time PST update */}
        <div className="taskbar-clock">{time}</div>
      </div>
    </div>
  );
}

export default App;