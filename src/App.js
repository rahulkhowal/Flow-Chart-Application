import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Toolbar from './components/toolbar'


function App() {
 
  return (
    <div className="content-wrapper">
      <Navbar/>
      <Toolbar/>
    </div>
  );
}

export default App;
