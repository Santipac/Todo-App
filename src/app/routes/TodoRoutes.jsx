import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TodoForm } from '../components';
import { EditPage } from '../pages/EditPage';
import { TodoPage } from '../pages/TodoPage';

export const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/edit-task/:id" element={<TodoForm />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
