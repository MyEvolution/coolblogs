import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Create from './routes/Create';
import EditBlog from './routes/EditBlog';
import SingleBlog from './routes/SingleBlog';
import NotFound from './routes/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blog/:id/edit" element={<EditBlog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
