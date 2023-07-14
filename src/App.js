import React from 'react'
import Information from './components/information'
import Login from './components/Login';
import Preferences from './preferences';
import suprsend from "@suprsend/web-sdk";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Register from './components/Register';
suprsend.init(process.env.REACT_APP_WKEY,process.env.REACT_APP_WSECRET);

function App(props) {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element = {<Information/>} />
      <Route exact path="/login" element = {<Login/>} />
      <Route exact path="/setting" element = {<Preferences />} />
      <Route exact path="/register" element = {<Register />} />
      </Routes>
    </Router>
  )
}

export default App
