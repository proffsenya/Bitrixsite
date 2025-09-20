// src/pages/DefectPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/DefectPage.css';
const DefectPage = () => {
  const { id } = useParams(); // Получаем ID дефекта из URL
  const [defect, setDefect] = useState(null);

  useEffect(() => {
    // Загружаем данные дефекта (здесь можно заменить на запрос к API)
    const fetchDefect = () => {
      const data = { 
        id, 
        title: `Дефект #${id}`, 
        description: 'Описание дефекта', 
        status: 'В работе',
        priority: 'Средний',
        dueDate: '2025-09-30'
      };
      setDefect(data);
    };
    fetchDefect();
  }, [id]);

  const handleChange = (e) => {
    setDefect({ ...defect, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Логика для сохранения изменений (например, отправка данных на сервер)
    alert('Дефект сохранен!');
  };

  if (!defect) return <div>Загрузка...</div>;

  return (
    <div className="defect-page">
      <h1>{defect.title}</h1>
      <form onSubmit={handleSave}>
        <label>
          Описание:
          <textarea
            name="description"
            value={defect.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Статус:
          <select
            name="status"
            value={defect.status}
            onChange={handleChange}
          >
            <option value="В работе">В работе</option>
            <option value="На проверке">На проверке</option>
            <option value="Закрыта">Закрыта</option>
          </select>
        </label>
        <label>
          Приоритет:
          <select
            name="priority"
            value={defect.priority}
            onChange={handleChange}
          >
            <option value="Высокий">Высокий</option>
            <option value="Средний">Средний</option>
            <option value="Низкий">Низкий</option>
          </select>
        </label>
        <label>
          Сроки:
          <input
            type="date"
            name="dueDate"
            value={defect.dueDate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default DefectPage;
