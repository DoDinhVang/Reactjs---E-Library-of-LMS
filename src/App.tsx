import React from 'react';
import './App.scss';
import HomeTemplate from './templates/homeTemplate/HomeTemplate';
import { Router } from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import history from './util/history';
import SubjectList from './pages/subject-management/subject-list/SubjectList'
import SubjectDetail from './pages/subject-management/subject-list/SubjectDetail';
import SubjectResources from './pages/subject-management/subject-list/SubjectResources';
import SubjectMatetial from './pages/subject-management/subject-material/SubjectMatetial';
import PrivateFile from './pages/private-file/PrivateFile';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <HomeTemplate exact path='/' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/home' Component={Home}></HomeTemplate>
        <HomeTemplate exact path='/subject-list' Component={SubjectList}></HomeTemplate>
        <HomeTemplate exact path='/subject-material' Component={SubjectMatetial}></HomeTemplate>
        <HomeTemplate exact path='/subject-list/subject-detail/:id' Component={SubjectDetail}></HomeTemplate>
        <HomeTemplate exact path = '/subject-resources/:id' Component = {SubjectResources}></HomeTemplate>
        <HomeTemplate exact path='/subject-manager/:breadscrumb' Component={SubjectList}></HomeTemplate>
        <HomeTemplate exact path='/private-file' Component={PrivateFile}></HomeTemplate>
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
