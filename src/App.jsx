import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
// import './App.css'
import Favorite from '../pages/Favorite';
import Details from '../pages/Details';
import Home from '../pages/Home';
import Navbar from './components/Navbar.jsx';

function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/details/:id" element={<Details />} />

        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App
