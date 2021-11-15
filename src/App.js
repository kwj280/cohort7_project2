import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }
    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
        return (
            <div className="App">
        

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SignIn />} />

      </Routes>

      </div>
        );
    }
}

const LandingPage = () => {
    return ( 
      <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Project2</h1>
        </header> 
      </>
    )
}
export default App;