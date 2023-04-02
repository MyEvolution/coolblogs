import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Create from './routes/Create';
import EditBlog from './routes/EditBlog';
import SingleBlog from './routes/SingleBlog';
import NotFound from './routes/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blog/:id/edit" element={<EditBlog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}

export default App;
