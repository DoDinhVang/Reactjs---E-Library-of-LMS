import React from 'react';
import './App.css';
import HomeTemplate from './templates/homeTemplate/HomeTemplate';
import './sass/base/reset.scss';
import './sass/components/positionMainContent.scss';
import './sass/components/navigation.scss';
import './sass/components/title.scss';
import './sass/components/header.scss';
import './sass/components/button.scss';
import '../src/sass/pages/home.scss';
import './sass/pages/profile.scss';

import { Router } from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import history from './util/history';
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <HomeTemplate exact path='/' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/home' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/subject-manager' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/private-file' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/exam-bank' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/bell' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/settings' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/helps' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/profile' Component = {Profile}></HomeTemplate>
      </Router>
    </div>
  );
}

export default App;
