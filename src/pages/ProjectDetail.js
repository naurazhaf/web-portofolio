import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const projects = {
    1: { title: "Project 1", description: "Detailed description for Project 1" },
    2: { title: "Project 2", description: "Detailed description for Project 2" },
    3: { title: "Project 3", description: "Detailed description for Project 3" },
  };

  const project = projects[id];

  return (
    <div style={{ padding: '50px' }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
