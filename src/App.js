import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

import './App.css'; // Основной стиль приложения
import './styles/Dashboard.css'; // Стиль для Dashboard
import './styles/DefectPage.css'; // Стиль для DefectPage
import './styles/EditDefectPage.css'; // Стиль для EditDefectPage
import './styles/ReportsPage.css'; // Стиль для ReportsPage

// Начальные данные проектов
const initialProjects = [
  { id: 1, title: 'Проект 1', status: 'В работе', progress: '40%', description: 'Описание дефекта' },
  { id: 2, title: 'Проект 2', status: 'Закрыта', progress: '100%', description: 'Описание дефекта' },
  { id: 3, title: 'Проект 3', status: 'На проверке', progress: '60%', description: 'Описание дефекта' },
  { id: 4, title: 'Проект 4', status: 'В работе', progress: '80%', description: 'Описание дефекта' },
];

const Dashboard = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [filter, setFilter] = useState('Все');
  const navigate = useNavigate();

  // Фильтрация проектов по статусу
  const filteredProjects = projects.filter((project) => {
    if (filter === 'Все') return true;
    return project.status === filter;
  });

  // Удаление проекта
  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  // Переход на страницу дефекта
  const handleView = (id) => {
    navigate(`/defect/${id}`);
  };

  return (
    <div className="dashboard">
      <h1>Проекты и дефекты</h1>

      <div className="filters">
        <button onClick={() => setFilter('Все')}>Все</button>
        <button onClick={() => setFilter('В работе')}>В работе</button>
        <button onClick={() => setFilter('На проверке')}>На проверке</button>
        <button onClick={() => setFilter('Закрыта')}>Закрыта</button>
      </div>

      <div className="projects">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="status">Статус: {project.status}</p>
            <p>Прогресс: {project.progress}</p>
            <button onClick={() => handleView(project.id)}>Посмотреть дефект</button>
            <button onClick={() => handleDelete(project.id)}>Удалить</button>
          </div>
        ))}
      </div>

      <div className="footer">
        <Link to="/reports">Перейти к отчетам</Link>
      </div>
    </div>
  );
};

const DefectPage = () => {
  const { id } = useParams();  // Получаем ID дефекта из URL
  const navigate = useNavigate();
  const [defect, setDefect] = useState(null);

  useEffect(() => {
    // Найдем дефект по ID
    const project = initialProjects.find((p) => p.id === parseInt(id));
    setDefect(project || null);
  }, [id]);

  if (!defect) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="defect-page">
      <h1>{defect.title}</h1>
      <p><strong>Описание:</strong> {defect.description}</p>
      <p><strong>Статус:</strong> {defect.status}</p>
      <p><strong>Прогресс:</strong> {defect.progress}</p>

      <button onClick={() => navigate(`/defect/edit/${defect.id}`)}>Редактировать</button>
    </div>
  );
};

const EditDefectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [defect, setDefect] = useState(null);

  useEffect(() => {
    // Найдем дефект по ID для редактирования
    const project = initialProjects.find((p) => p.id === parseInt(id));
    setDefect(project || null);
  }, [id]);

  const handleChange = (e) => {
    setDefect({ ...defect, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert('Дефект сохранен!');
    navigate(`/defect/${id}`);
  };

  if (!defect) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="edit-defect-page">
      <h1>Редактирование дефекта</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Название:
          <input type="text" name="title" value={defect.title} onChange={handleChange} />
        </label>
        <label>
          Описание:
          <textarea name="description" value={defect.description} onChange={handleChange} />
        </label>
        <label>
          Статус:
          <select name="status" value={defect.status} onChange={handleChange}>
            <option value="В работе">В работе</option>
            <option value="На проверке">На проверке</option>
            <option value="Закрыта">Закрыта</option>
          </select>
        </label>
        <label>
          Прогресс:
          <input type="text" name="progress" value={defect.progress} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleSave}>Сохранить</button>
        <button type="button" onClick={() => navigate(`/defect/${defect.id}`)}>Отменить</button>
      </form>
    </div>
  );
};

const ReportsPage = () => {
  return (
    <div className="reports-page">
      <h1>Отчеты по проектам</h1>
      <p>Здесь будут отображаться статистические данные по проектам и дефектам.</p>
      <button>Скачать отчет в формате CSV</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/defect/:id" element={<DefectPage />} />
          <Route path="/defect/edit/:id" element={<EditDefectPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
