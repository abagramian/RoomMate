import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter, Router, Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
// import Dashboard from './components/Dashboard/Dashboard';
// import Preferences from './components/Preferences/Preferences';
import LoginForm from "./components/LoginForm/LoginForm";
// import MainPage from './components/MainPage';
// import LoginPage from './pages/LoginPage';
// import NotFound404 from './pages/NotFound404';

function App() {
// const App = () => {
  const adminUser = {
    email: "christy@christy.com",
    password: "christy123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("Details do not match!");
      setError("This user does not exist.");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}

    </div>

    // <>
    //   {/* <Router> */}
    //     <Routes>
    //       <Route path="/" component={<Layout />} />
    //       <Route path="/login" element={<LoginForm Login={Login} error={error} />} />
    //       {/* <Navigate to="/" /> */}
    //     </Routes>
    //   {/* </Router> */}
    // </>

    // <>
    //   <Routes>
    //     <Route path="/home" element={<Layout />} />
    //     <Route path="/login" element={<LoginForm />} />
    //   </Routes>
    // </>
  );
}

export default App;
