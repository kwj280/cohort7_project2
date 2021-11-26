import React from 'react'
// import logo from './logo.svg';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Header from './components/Header'
import Footer from './components/Footer'
import JobsPage from './pages/JobsPage'
import ProfilePage from './pages/ProfilePage'
import MainLayout from './pages/MainLayout'





function App() {
  return (
    <>

      <Header />
      <MainLayout />
      {/* <Routes>
        <Route path="/" element={<JobsPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my_applications" element={<JobsPage />} />
        <Route path="/setting" element={<JobsPage />} />
        <Route path="/post_jobs" element={<JobsPage />} />
        <Route path="/applications" element={<JobsPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes> */}
      <Footer />

    </>
  )
}

//   }
// }

export default App
