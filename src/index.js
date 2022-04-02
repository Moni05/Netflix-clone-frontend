import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { ListContextProvider } from "./context/listContext/ListContext";
import { RegisterContextProvider } from "./context/registerContext/RegisterContext";

ReactDOM.render(
  <AuthContextProvider>
    <RegisterContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </RegisterContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);

