import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'Bottom Drawer Marketplace',
      description: 'MongoDB/Express/Node/Handlebars',
      link: "http://bottomdrawermarketplace.herokuapp.com/",
      repo: "https://github.com/heatherloisejackson/super-octo-funicular",
      screenshot: '../../assets/projects/bottomdrawer.png'
    },
    {
      name: 'Book Search Engine',
      description: 'MERN Stack',
      link: "https://heathers-google-book-search.herokuapp.com/",
      repo: "https://github.com/heatherloisejackson/BookSearchEngine",
      screenshot: '../../assets/projects/booksearch.png'
    },
    {
      name: 'Flobi',
      description: 'Third Party APIs/HTML/JavaScript',
      link: "https://heatherloisejackson.github.io/Project-API/",
      repo: "https://github.com/heatherloisejackson/Project-API",
      screenshot: '../../assets/projects/flobi.png'
    },
    {
      name: 'Fitness Tracker',
      description: 'MongoDB/Express/Node/HTML/CSS',
      link: "https://heathersfitnesstracker.herokuapp.com/?id=60ee2098fa027f0015fc91fe",
      repo: "https://github.com/heatherloisejackson/FitnessTracker",
      screenshot: '../../assets/projects/fitnesstracker.png'
    },
    {
      name: 'Team Profile Generator',
      description: 'Node.js/HTML/CSS',
      link: "https://github.com/heatherloisejackson/ProfessionalTeamProfileCreator",
      repo: "https://github.com/heatherloisejackson/ProfessionalTeamProfileCreator",
      screenshot: '../../assets/projects/teamprofilegenerator.png'
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
