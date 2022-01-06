import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import PostsPage from '../pages/Posts';
import PostDetailPage from '../pages/PostDetail';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="posts">
        <Route index element={<PostsPage />} />
        <Route path=":id" element={<PostDetailPage />} />
      </Route>
      <Route path="todos">
        <Route index element={<h2>todos</h2>}/>
      </Route>
      <Route path="users">
        <Route index element={<h2>users</h2>} />
      </Route>
      <Route path="*" element={<Navigate to="posts" />} />
    </Routes>
  );
};

export default AppRouter;