import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectList = [
    { id: 1, title: "Project 1", description: "Description for Project 1" },
    { id: 2, title: "Project 2", description: "Description for Project 2" },
    { id: 3, title: "Project 3", description: "Description for Project 3" },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} className="project-link">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
