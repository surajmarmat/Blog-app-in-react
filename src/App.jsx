import React from 'react';
import './App.css';
import Home from './Home/home';
import BlogPage from './blogPage/blog';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element = {<Home/>}  />
        <Route path="/blog" element = {<BlogPage/>} />
      </Routes>
    </div>
  )
}

export default App
