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
          Created a fully functional app that allows users to play a game, where they guess locations of various photos.
        </li>
        <li>
          Maximized Flutter’s capabilities by creating a consistent experience for iOS and Android devices.
        </li>
        <li>
          Utilized Google Maps plugin to get the user’s exact location and place pins during the games.
        </li>
        <li>
          Primary feature which allowed users to use their camera to take photos and upload them in real time.
        </li>
      </div>

      <div style={{marginTop:"2%"}} className="ProjectInfo">
        <div className="ProjectTitles">
          <a href="https://github.com/AustinNorquist/WhereIsThis" target="_blank" rel="noopener noreferrer" className="ProjectText">
            LoL Name Reserver
          </a>
        </div>
        <div style={{textAlign:"right"}} className="Dates">
          <a>
            June 2023 - July 2023
          </a>
        </div>
      </div>

      <div className="ProjectInfo">
        <div className="ProjectTech">
          React, Supabase, Tailwind CSS, Github 
        </div>
      </div>

      <div className="ProjectDescription">
        <li>
          Developed a web application using ReactJS, following industry best practices. 
        </li>
        <li>
          Integrated Supabase to allow user sign-in, registration, and seamless data management, for full functionality.
        </li>
        <li>
          Leveraged the Riot API to retrieve real-time data to give the users an optimal experience.
        </li>
        <li>
          Enabled users to add desired in-game usernames to a watchlist, updating when names become available.
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
          C++
        </div>
      </div>

      <div className="ProjectDescription">
        <li>
        Implemented the Forward Steps of the Backpropagation Algorithm for a Convolutional Neural Network.
        </li>
        <li>
          Using objects in C++, I was able to handle all steps necessary to output the result of each image.
        </li>
        <li>
          Thoroughly validated CNN by meticulously tracing tests manually, ensuring accuracy.
        </li>
        <li>
          Constructed convolutional, pooling, and fully connected layers as reusable C++ classes.
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
          Spearheaded a group project that simulated real-life continuous integration and deployment, working in sprints.
        </li>
        <li>
          Utilized scrum meetings to ensure all individual tasks were something that worked towards M.V.P.
        </li>
        <li>
          Collaborated to create a real-time social media application that enabled users to add friends and post activities.
        </li>
        <li>
          Maintained efficient team workflows by utilizing industry-standard version control systems such as Git.
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
    </div>
  );
}

function displayAbout () {
  return (
    <div className="AboutText">
      <a className="Text">
        I could easily knock Delbert out if I wanted to 
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
