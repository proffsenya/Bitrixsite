import React from 'react';
import ProjectCard from '../../../../Frameworks/Bitrixsite/src/components/ProjectCard';
import '../styles/Dashboard.css';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Проекты и дефекты</h1>
      <div className="filters">
        <button>Все</button>
        <button>В работе</button>
        <button>На проверке</button>
        <button>Закрыта</button>
      </div>
      <div className="projects">
        <ProjectCard title="Проект 1" status="В работе" progress="40%" />
        <ProjectCard title="Проект 2" status="Закрыта" progress="100%" />
      </div>
    </div>
  );
};

export default Dashboard;
