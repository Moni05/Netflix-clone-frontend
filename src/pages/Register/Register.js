import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import "./register.scss";

const BASE_URL = process.env.REACT_APP_URL

export default function Register() {
  const [email, setEmail] = useState("");


  const navigate = useNavigate();

  const emailRef = useRef();
  const password = useRef();
  const username = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      email: email,
      password: password.current.value,
    };

    try {
      await axios.post(`${BASE_URL}auth/register`, user);
      navigate("/login");
    } catch (err) {}
  };


  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://firebasestorage.googleapis.com/v0/b/mern-project-images.appspot.com/o/Netflix.png?alt=media&token=029cbb4d-b2f7-4fdb-9469-3cc8a9c45ae1"
            alt=""
          />
          <Link to="/login" className="loginButton">Sign In</Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={username} />
            <input type="password" placeholder="password" ref={password} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}