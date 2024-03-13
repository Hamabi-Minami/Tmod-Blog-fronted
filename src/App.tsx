import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BlogPage from './pages/BlogPage';
import HomePage from "./pages/HomePage";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/home" Component={HomePage} ></Route>
              <Route path="/blog" Component={BlogPage} /> {/* Add a route for the new page */}
          </Routes>
      </Router>
  );
}

export default App;
