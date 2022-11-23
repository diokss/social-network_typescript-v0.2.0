import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import PasswordInput from './components/Inputs/PasswordInput/PasswordInput';
import Sidebar from './components/Sidebar/Sidebar';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import PageRouters from './components/PageRouters/PageRouters';
import { observer } from 'mobx-react-lite';
import { authService } from './store/auth-service'
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import message from './store/messenger-sevice'

const App = observer(() => {
  if (authService.isLoading) {
    return null
  }
  return (
    <div className="App">
      <Header className='App__header' />
      <main className='App__main'>
        <div className="Wrapper">
          <BrowserRouter>
            {authService.isAuth() ? <Sidebar className='App__sidebar' /> : ""}
            <PageRouters className='App__pages' />
          </BrowserRouter>
        </div>
      </main>
    </div>
  );
})

export default App;
