import RegisterReducer from "./RegisterReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  isLoading: false,
  status: null,
  message: null,
};

export const RegisterContext = createContext(INITIAL_STATE);

export const RegisterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RegisterReducer, INITIAL_STATE);

  return (
    <RegisterContext.Provider
      value={{
        isLoading: state.isLoading,
        status: state.status,
        message: state.message,
        dispatch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};