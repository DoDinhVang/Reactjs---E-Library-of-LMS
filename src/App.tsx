import React from 'react';
import './App.css';
import HomeTemplate from './templates/homeTemplate/HomeTemplate';
import './sass/components/navigation.scss';
import './sass/components/title.scss';
import '../src/sass/pages/home.scss';

import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <HomeTemplate exact path='/' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/home' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/subject-manager' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/private-file' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/exam-bank' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/bell' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/settings' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/helps' Component={Home}></HomeTemplate>
      </Router>
    </div>
  );
}

export default App;
