import "./login.scss";
import { useState, useContext } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://firebasestorage.googleapis.com/v0/b/mern-project-images.appspot.com/o/Netflix.png?alt=media&token=029cbb4d-b2f7-4fdb-9469-3cc8a9c45ae1"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or phone number" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button className="loginButton" onClick={handleLogin} >Sign In</button>
            <span>New to Netflix? <b><Link to="/register">Sign up now.</Link></b></span>
            <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.</small>
        </form>
      </div>
    </div>
  );
}