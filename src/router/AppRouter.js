import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import PostsPage from '../pages/Posts';
import TodosPage from '../pages/Todos';
import UsersPage from "../pages/Users";
import PostDetailPage from '../pages/PostDetail';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="posts">
        <Route index element={<PostsPage />} />
        <Route path=":id" element={<PostDetailPage />} />
      </Route>
      <Route path="todos">
        <Route index element={<TodosPage />} />
      </Route>
      <Route path="users">
        <Route index element={<UsersPage />} />
      </Route>
      <Route path="*" element={<Navigate to="posts" />} />
    </Routes>
  );
};

export default AppRouter;