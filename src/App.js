import React from 'react'
// import logo from './logo.svg';
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Header from './components/Header'
import Footer from './components/Footer'
import JobsPage from './components/JobsPage'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<JobsPage />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SignIn />} />
      </Routes>

      
      <Footer />
    </>
  )
}

//   }
// }

export default App
