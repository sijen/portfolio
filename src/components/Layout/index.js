import React from 'react';
import Sidebar from '../Sidebar';
import './index.scss';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

const Layout = () => {
  // Conditional rendering based on whether a blog post is selected
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
      <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
