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
import Userform from './pages/Userform';
import EventDetails  from './pages/EventDetails';
import Centeredtabs from './pages/Tabs'; 
import  Requre  from './pages/Requre';


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
          <Route path="event" element={<EventDetails/>} />
          <Route path="/form/:id" element={
          <React.Fragment>
            <QuestionForm />
            <Centeredtabs />
             {/* Corrected component name */}
          </React.Fragment>
        } />
        <Route path="content" element={<Content/>} />
        <Route path="/response" element={<Userform/>} />
        <Route path="req" element={<Requre/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

