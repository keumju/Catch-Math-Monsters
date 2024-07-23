import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom';
// import { loginData, reducer } from './assets/component/page/login/loginData'

import './reset.css'
import './App.css'

import Header from './assets/component/header/Header'
import Main from './assets/component/page/main/Main'
import Login from './assets/component/page/login/Login'
import Join from './assets/component/page/login/Join'

import Footer from './assets/component/footer/footer'
import Profile from './assets/component/page/mypage/profile'

// export const loginContext = createContext();
// export const editContext = createContext();

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/TeamMMs/" element={<Main />}/>
        <Route path="/TeamMMs/login" element={<Login />}/>
        <Route path="/TeamMMs/join" element={<Join />}/>
        <Route path="/TeamMMs/mypage" element={<Profile />}/>
      </Routes>
    <Footer />
    </>
  )
}

export default App
