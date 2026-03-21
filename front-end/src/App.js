import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login  from './pages/Login';
import  Register  from './pages/Register';
import  Settings from './pages/Settings';
import ContactUs from './pages/ContactUs';
import { Main } from './pages/Main';
import  {Dashboard}  from './pages/Dashboard';
import { EventForm } from './pages/EventForm';
import  Customize  from './pages/Customize';
import NewQuestionForm from './pages/NewQuestinForm'; // Correcting the import
import  QuestionForm  from './pages/QuestionForm';
import  Content  from './pages/Content';

import EventDetails  from './pages/EventDetails';



function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Main/>} />
          <Route path="home" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="settings" element={<Settings/>} />
          <Route path="contact" element={<ContactUs/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="eventform" element={<EventForm/>} />
          <Route path="customize" element={<Customize/>} />
          <Route path="/form/:id" element={
          <React.Fragment>
            <QuestionForm />
            <NewQuestionForm /> {/* Corrected component name */}
          </React.Fragment>
        } />
        <Route path="content" element={<Content/>} />
       <Route path="event" element={<EventDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

