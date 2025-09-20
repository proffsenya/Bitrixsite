import React from 'react';

const ProjectCard = ({ title, status, progress }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p className="status">Статус: {status}</p>
    <p>Прогресс: {progress}</p>
  </div>
);

export default ProjectCard;
