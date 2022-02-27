import "./app.scss";
import Home from "./pages/Home/Home";
import Screen from "./pages/Screen/Screen";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AdminHome from "./pages/adminPanel/home/AdminHome";
import UserList from "./pages/adminPanel/userList/UserList";
import NewUser from "./pages/adminPanel/newUser/NewUser";
import User from "./pages/adminPanel/user/User";
import Movie from "./pages/adminPanel/movie/Movie";
import MovieList from "./pages/adminPanel/movieList/MoveList";
import NewMovie from "./pages/adminPanel/newMovie/NewMovie";
import ListList from "./pages/adminPanel/listList/ListList";
import List from "./pages/adminPanel/list/List";
import NewList from "./pages/adminPanel/newList/NewList";
import EditMovies from "./pages/adminPanel/editMovies/editMovies";
import EditList from "./pages/adminPanel/editList/editList";

function App() {

  const { user } = useContext(AuthContext);
  const admin = user ? user.isAdmin : false;
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
      <Route path="admin" element={admin ? <AdminHome /> : <Navigate to="/" /> } />
      <Route path="admin/users" element={admin ? <UserList /> : <Navigate to="/" /> } />
      <Route path="admin/user/:userId" element={admin ? <User /> : <Navigate to="/" /> } />
      <Route path="admin/newUser" element={admin ? <NewUser /> : <Navigate to="/" /> } />
      <Route path="admin/movies" element={admin ? <MovieList /> : <Navigate to="/" /> } />
      <Route path="admin/movie/:movieId" element={admin ? <Movie /> : <Navigate to="/" /> } />
      <Route path="admin/edit-movie/:movieId" element={admin ? <EditMovies /> : <Navigate to="/" /> } />
      <Route path="admin/newmovie" element={admin ? <NewMovie /> : <Navigate to="/" /> } />
      <Route path="admin/lists" element={admin ? <ListList /> : <Navigate to="/" /> } />
      <Route path="admin/list/:listId" element={admin ? <List /> : <Navigate to="/" /> } />
      <Route path="admin/newlist" element={admin ? <NewList /> : <Navigate to="/" /> } />
      <Route path="admin/edit-list/:listId" element={admin ? <EditList /> : <Navigate to="/" /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;