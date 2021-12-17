import {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import LandingPage from './LandingPage'
import JobsPage from './JobsPage'
import ProfilePage from './ProfilePage'
import MyApplicationPage from './MyApplicationsPage'
import SettingPage from './SettingPage'
import PostJobPage from './PostJobPage'
import ApplicationsPage from './ApplicationsPage'
import axios from 'axios'
import LogOut from '../components/LogOut'


function MainContentBody() {
  const [user,setUser] = useState()
  useEffect(()=>{
    axios.post('/user/loggedInUser')
    .then(function (response) {
      if(response.data){
        setUser(response.data)
        console.log(response)
      }
    })
  }, [])
  return (  
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:q" element={<JobsPage />} />

        <Route path="/profile" element={<ProfilePage  setUser={setUser} user={user}/>} />
        <Route path="/my_applications" element={<MyApplicationPage />} />
        <Route path="/setting" element={<SettingPage user={user} />} />

        <Route path="/post_jobs" element={<PostJobPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn setUser={setUser}/>} />
        <Route path="/logOut" element={<LogOut setUser={setUser}/>} />

      </Routes>
    </>
  )
}


export default MainContentBody
