import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import JobsPage from './JobsPage'
import ProfilePage from './ProfilePage'
import MyApplicationPage from './MyApplicationsPage'
import SettingPage from './SettingPage'
import PostJobPage from './PostJobPage'
import ApplicationsPage from './ApplicationsPage'


function MainContentBody() {
  const [user,setUser] = useState()

  return (
    <>
      <Routes>
        <Route path="/" element={<JobsPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/profile" element={<ProfilePage  setUser={setUser} user={user}/>} />
        <Route path="/my_applications" element={<MyApplicationPage />} />
        <Route path="/setting" element={<SettingPage />} />

        <Route path="/post_jobs" element={<PostJobPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />

        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn setUser={setUser}/>} />


      </Routes>


    </>
  )
}


export default MainContentBody
