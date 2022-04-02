import axios from "axios";
import { registerStart, registerSuccess, registerFailure } from "./RegisterActions";

const BASE_URL = process.env.REACT_APP_URL;

export const registration = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(`${BASE_URL}auth/register`, user);
    console.log(res.data);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};