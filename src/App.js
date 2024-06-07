import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import BlogList from './components/BlogList';
import BlogPostDetail from './components/BlogPostDetail';
// import Home from "./components/Home";
// import About from "./components/About"
// import Contact from "./components/Contact"
import { PostProvider } from './context/PostContext';
// import BlogList from './components/BlogList'; // Assuming you have a BlogList component

import './App.scss'; // Import styles

function App() {
  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        
        <Route path="/blog" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogPostDetail />} />
      </Routes>
    </PostProvider>
  );
}

export default App;
