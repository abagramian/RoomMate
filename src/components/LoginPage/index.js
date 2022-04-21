import './index.scss';
import React, { useState, Link } from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
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
    <div className="Login">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          <Link to="/home" className="GetStarted">GetStarted</Link>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  )
}

export default LoginPage