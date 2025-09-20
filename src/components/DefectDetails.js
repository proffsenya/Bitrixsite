import React, { useState } from 'react';

const DefectDetails = () => {
  const [defect, setDefect] = useState({
    title: '',
    description: '',
    priority: 'Средний',
    dueDate: '',
  });

  const handleChange = (e) => {
    setDefect({ ...defect, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(defect);
  };

  return (
    <div className="defect-details">
      <h1>Дефект #12345</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Заголовок дефекта"
          value={defect.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Описание дефекта"
          value={defect.description}
          onChange={handleChange}
        ></textarea>
        <select
          name="priority"
          value={defect.priority}
          onChange={handleChange}
        >
          <option value="Высокий">Приоритет: Высокий</option>
          <option value="Средний">Приоритет: Средний</option>
          <option value="Низкий">Приоритет: Низкий</option>
        </select>
        <input
          type="date"
          name="dueDate"
          value={defect.dueDate}
          onChange={handleChange}
        />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default DefectDetails;
