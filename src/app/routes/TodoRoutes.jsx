import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Error } from '../Error';
import { TodoPage } from '../TodoPage';

export const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
