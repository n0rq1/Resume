import githubIcon from './images/github-test.png';
import headshot from './images/headshot.jpeg';
import linkedinIcon from './images/linkedin-icon.png';
import spotifyIcon from './images/spotify-icon.png'
import React, {useState} from 'react';
import './App.css';

function displayExperience () {
  return (
    <div className="ProjectBody">
      <div style={{marginTop:"2%"}} className="ProjectInfo">
        <div className="ProjectTitles">
          <a className="Employer">
            California State University, Chico
          </a>
        </div>
        <div style={{textAlign:"right"}} className="Dates">
          <a>
            January 2024 - May 2024
          </a>
        </div>
      </div>
      <div className="ProjectInfo">
        <div className="ProjectTech">
          Grader
        </div>
      </div>
      <div className="ProjectDescription">
        <li>
          Assessed bi-weekly assignments for Dr. Sam Siewert’s Applied Computer Vision course.
        </li>
        <li>
          Learned the curriculum of the graduate-level course I was responsible for grading, to accurately assign grades.
        </li>
        <li>
          Reviewed written reports and analyzed code thoroughly, while strictly adhering to the grading rubric.
        </li>
      </div>
    </div>
  );
}

function displayProjects() {
  return (    
    <div className="ProjectBody">
      <div style={{marginTop:"2%"}} className="ProjectInfo">
        <div className="ProjectTitles">
          <a href="https://github.com/AustinNorquist/ASLToText" target="_blank" rel="noopener noreferrer" className="ProjectText">
            ASL to Text Translator
          </a>
        </div>
        <div style={{textAlign:"right"}} className="Dates">
          <a>
            January 2024 - Current
          </a>
        </div>
      </div>

      <div className="ProjectInfo">
        <div className="ProjectTech">
          Python, OpenCV, MediaPipe
        </div>
      </div>

      <div className="ProjectDescription">
        <li>
          A real-time American Sign Language(ASL) to text translator leveraging OpenCV and MediaPipe for hand gesture detection.
        </li>
      </div>

      <div style={{marginTop:"2%"}} className="ProjectInfo">
        <div className="ProjectTitles">
          <a href="https://github.com/AustinNorquist/WhereIsThis" target="_blank" rel="noopener noreferrer" className="ProjectText">
            Where Is This?
          </a>
        </div>
        <div style={{textAlign:"right"}} className="Dates">
          <a>
            October 2023 - December 2023
          </a>
        </div>
      </div>

      <div className="ProjectInfo">
        <div className="ProjectTech">
          Flutter, Firebase, Github 
        </div>
      </div>

      <div className="ProjectDescription">
        <li>
        A fully functional Android, iOS, and web game, where users can guess the location of random, user-submitted photos and receive a score based on accuracy.
        </li>
      </div>

      <div style={{marginTop:"2%"}} className="ProjectInfo">
        <div className="ProjectTitles">
          <a href="https://github.com/AustinNorquist/WhereIsThis" target="_blank" rel="noopener noreferrer" className="ProjectText">
            Convolutional Neural Network
          </a>
        </div>
        <div style={{textAlign:"right"}} className="Dates">
          <a>
            April 2023 - May 2023
          </a>
        </div>
      </div>

      <div className="ProjectInfo">
        <div className="ProjectTech">
          C++, OpenMP
        </div>
      </div>

      <div className="ProjectDescription">
        <li>
          A CNN in C++ with object-oriented design, achieving significant computational speedup through the implementation of OpenMP.
        </li>
      </div>

      <div style={{marginTop:"2%"}} className="ProjectInfo">
        <div className="ProjectTitles">
          <a href="https://github.com/AustinNorquist/WhereIsThis" target="_blank" rel="noopener noreferrer" className="ProjectText">
            Group Activity!
          </a>
        </div>
        <div style={{textAlign:"right"}} className="Dates">
          <a>
            January 2023 - May 2023
          </a>
        </div>

      </div>

      <div className="ProjectInfo">
        <div className="ProjectTech">
          Python, JavaScript, HTML, CSS, PHP, Selenium, Github
        </div>
      </div>

      <div className="ProjectDescription">
        <li>
          A collaborative project where we built a social media app that allowed users to interact in real- time in the form of a message board.
        </li>
      </div>
    </div>
  );
}

function displayEducation () {
  return (
    <div className="ProjectBody">
      <div style={{marginTop:"2%"}} className="ProjectInfo">
        <div className="ProjectTitles">
          <a className="Employer">
            California State University, Chico
          </a>
        </div>
        <div style={{textAlign:"right"}} className="Dates">
          <a>
            May 2024
          </a>
        </div>
      </div>
      <div className="ProjectInfo">
        <div className="ProjectTech">
          Bachelor of Science in Computer Science
        </div>
      </div>

      <div style={{marginTop:"2%"}} className="ProjectInfo">
        <div className="ProjectTitles">
          <a className="Employer">
            California State University, Chico
          </a>
        </div>
        <div style={{textAlign:"right"}} className="Dates">
          <a>
            May 2025
          </a>
        </div>
      </div>
      <div className="ProjectInfo">
        <div className="ProjectTech">
          Master of Science in Computer Science
        </div>
      </div>
    </div>
  );
}

function displayAbout () {
  return (
    <div className="AboutText">
      <a className="Text">
        I am pursuing a Bachelor of Science degree in Computer Science at California State University, Chico, with an expected graduation date of May 2024 and a Master of Science in Computer Science, with an expected graduation date of May 2025. I am interested in software engineering, machine learning, high performance computing, and computer vision. I have developed skills in C/C++, R, Go, and React.js. In addition to my academic studies, I work as a senior brand ambassador at American Eagle Outfitters, where I demonstrate leadership, communication, and customer service skills.
      </a>
    </div>
  );
}


function App() {

  const [initialAbout, setShowAbout] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  function onPressExperience() {
    if (showExperience == true) {
      setShowExperience(false)
    }else{
      setShowAbout(false);
      setShowExperience(true);
      setShowProjects(false);
      setShowEducation(false); 
    }
  }

  function onPressProjects() {
    if (showProjects == true) {
      setShowProjects(false)
    }else{
      setShowAbout(false);
      setShowExperience(false);
      setShowProjects(true);
      setShowEducation(false); 
    }
  }

  function onPressEducation() {
    if (showEducation == true) {
      setShowEducation(false)
    }else{
      setShowAbout(false);
      setShowExperience(false);
      setShowProjects(false);
      setShowEducation(true); 
    }
  }

  return (
    <div className="App">
      <div className="Navbar">
        <img className="Headshot" src={headshot} alt="Headshot"></img> 
        <h1 className="Name">Austin Norquist</h1>
        <a href="https://github.com/austinnorquist" target="_blank" rel="noopener noreferrer">
          <img className="Icon" src={githubIcon} alt="GitHub"></img>
        </a>     
        <a href="https://www.linkedin.com/in/austin-norquist/" target="_blank" rel="noopener noreferrer">
          <img className="Icon" src={linkedinIcon} alt="LinkedIn"></img>
        </a>
        <a href="https://open.spotify.com/user/norquie?si=f99b2dec0b224f0a" target="_blank" rel="noopener noreferrer">
          <img className="Icon" src={spotifyIcon} alt="Spotify"></img>
        </a>
      </div>

      <div className="Body">
        <a onClick={onPressExperience} className="BodyHeader">
          Experience
        </a>       
        <a onClick={onPressProjects} className="BodyHeader">
          Projects
        </a>
        <a onClick={onPressEducation} className="BodyHeader">
          Education
        </a>
      </div>

      {initialAbout && displayAbout()}
      {showExperience && displayExperience()}
      {showProjects && displayProjects()}
      {showEducation && displayEducation()}
    </div>
  );
}

export default App;
