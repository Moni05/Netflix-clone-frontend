import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

const BASE_URL = process.env.REACT_APP_URL;

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${BASE_URL}auth/login`, user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};