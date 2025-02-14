import Spline from '@splinetool/react-spline';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import textIcon from './images/textIcon.png';
import gradIcon from './images/education.png';
import expIcon from './images/experience.png';
import researchIcon from './images/research.png';
import closeIcon from './images/closeIcon.png';
import linkedIn from './images/linkedin-icon.png';
import twitterIcon from './images/twitter.png';
import githubIcon from './images/github-test.png';
import emailIcon from './images/email.webp';
import squareIcon from './images/squares.png';
import headshot from './images/headshot.jpeg';

function App() {
  const [time, setTime] = useState('');
  const [openApps, setOpenApps] = useState([]);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      };
      setTime(new Date().toLocaleString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const resizeBackground = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    resizeBackground();
    window.addEventListener('resize', resizeBackground);
    return () => window.removeEventListener('resize', resizeBackground);
  }, []);

  const openApp = (appName) => {
    if (!openApps.includes(appName)) {
      setOpenApps([...openApps, appName]);
    }
  };

  const closeApp = (appName) => {
    setOpenApps(openApps.filter(app => app !== appName));
  };

  return (
    <div className="spline-background">
      <Spline scene="https://prod.spline.design/7QG5CF4LfbZXdMLj/scene.splinecode" />

      <div className="desktop-grid">
        <div className="desktop-icon" onClick={() => openApp('about')}>
          <img src={textIcon} alt="Text File" />
          <span>aboutme.txt</span>
        </div>
        <div className="desktop-icon" onClick={() => openApp('education')}>
          <img src={gradIcon} alt="Education" />
          <span>education.txt</span>
        </div>
        <div className="desktop-icon" onClick={() => openApp('experience')}>
          <img src={expIcon} alt="Experience" />
          <span>experience.txt</span>
        </div>
        <div className="desktop-icon" onClick={() => openApp('research')}>
          <img src={researchIcon} alt="Research" />
          <span>research.txt</span>
        </div>
        <div className="desktop-icon" onClick={() => openApp('contact')}>
          <img src={emailIcon} alt="Contact" />
          <span>contact.txt</span>
        </div>
      </div>

      <div className="taskbar">
        <div className="start-button">
          <img src={squareIcon} alt="Start Logo" className="start-icon" />
        </div>

        <div className="taskbar-icons">
          {openApps.map((app, index) => (
            <div key={index} className="taskbar-icon" onClick={() => closeApp(app)}>
              {app === 'contact' && <img src={emailIcon} alt="Contact App" />}
              {app === 'about' && <img src={textIcon} alt="About App" />}
              {app === 'education' && <img src={gradIcon} alt="Education App" />}
              {app === 'experience' && <img src={expIcon} alt="Experience App" />}
              {app === 'research' && <img src={researchIcon} alt="Research App" />}
            </div>
          ))}
        </div>
        <div className="taskbar-clock">{time}</div>
      </div>

      {openApps.includes('about') && (
        <div className="about-file">
          <div className="about-file-header">
            <span>aboutme.txt - Notepad</span>
            <img src={closeIcon} alt="Close" className="close-icon" onClick={() => closeApp('about')} />
          </div>

          <div className="about-file-content">
            <p>Hi, I'm Austin Norquist, a graduate student at CSU Chico pursuing a degree in Computer Science. I'm passionate about Software Engineering, DevOps, and Data Science, and I thrive on solving complex problems with code. When I'm not immersed in tech, I love staying active through running and cycling. </p>
          </div>
          <img className="headshot" src={headshot}/>
        </div>
      )}

      {openApps.includes('contact') && (
        <div className="contact-file">
          <div className="contact-file-header">
            <span>contact.txt - Notepad</span>
            <img src={closeIcon} alt="Close" className="close-icon" onClick={() => closeApp('contact')} />
          </div>

          <div className="contact-file-content">
            <p>Name: Austin Norquist</p>
            <p>Email: anorquist@csuchico.edu</p>
            <p>Phone Number: (209)918-2627 </p>
            <p>Discord: .n0rq </p>
            <a href="https://www.linkedin.com/in/austin-norquist/" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} className="text-icons" />
            </a>
            <a href="https://github.com/n0rq1" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} className="text-icons" />
            </a>
            <a href="https://x.com/norquie_" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} className="text-icons" />
            </a>
          </div>
        </div>
      )}

      {openApps.includes('experience') && (
        <div className="experience-file">
          <div className="experience-file-header">
            <span>experience.txt - Notepad</span>
            <img src={closeIcon} alt="Close" className="close-icon" onClick={() => closeApp('experience')} />
          </div>

          <div className="experience-file-content">
            <h3>Technical Teaching Assistant</h3>
            <p>California State University, Chico</p>
            <p>January 2024 - June 2024 </p>
            <p> ∙ Graded assignments for the graduate course Applied Computer Vision under Dr. Samuel B. Siewert </p>
            <p> ∙ Reviewed code and reports within the professor’s allocated timeline </p>
            <p> ∙ Assisted students in troubleshooting project issues by debugging code and clarifying concepts </p>
          </div>
        </div>
      )}

      {openApps.includes('education') && (
        <div className="education-file">
          <div className="education-file-header">
            <span>education.txt - Notepad</span>
            <img src={closeIcon} alt="Close" className="close-icon" onClick={() => closeApp('education')} />
          </div>

          <div className="education-file-content">
            <h3>California State University, Chico</h3>
            <h3>Master of Science in Computer Science</h3>
            <h3>August 2024 - May 2025</h3>
            <br/>
            <h3>California State University, Chico</h3>
            <h3>Bachelor of Science in Computer Science</h3>
            <h3>August 2021 - May 2024</h3>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;
