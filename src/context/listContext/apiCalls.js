import axios from "axios";
import { createListFailure, createListStart, createListSuccess,
  deleteListFailure, deleteListStart, deleteListSuccess,
  getListsFailure, getListsStart, getListsSuccess, updateListStart, updateListSuccess, updateListFailure 
} from "./ListActions";

const BASE_URL = process.env.REACT_APP_URL;

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get(`${BASE_URL}lists`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post(`${BASE_URL}lists`, list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

export const updateList = async (id, list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await axios.put(`${BASE_URL}lists/` + id, list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateListSuccess(res.data));
  } catch (err) {
    dispatch(updateListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete(`${BASE_URL}lists/` + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};