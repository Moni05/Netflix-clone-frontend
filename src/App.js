import "./app.scss";
import Home from "./pages/Home/Home";
import Screen from "./pages/Screen/Screen";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";


function App() {

  const { user } = useContext(AuthContext);
  console.log(user);
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/register" /> } />
      <Route path="login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="register" element={!user ? <Register /> : <Navigate to="/" />} />
      <Route path="movies" element={user ? <Home type="movies"/> : <Navigate to="/register" /> } />
      <Route path="series" element={user ? <Home type="series"/> : <Navigate to="/register" /> } />
      <Route path="screen" element={user ? <Screen /> : <Navigate to="/register" /> } /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;