import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SignIn />} />
      </Routes>
    </div>
  )
}

//   }
// }

export default App
