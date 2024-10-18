import { SET_LOGIN, SET_LOGOUT } from "../types";

export const loginUserRedux = (data: any) => {
  return {
    type: SET_LOGIN,
    payload: data,
  };
};

export const logoutUserRedux = () => {
  return {
    type: SET_LOGOUT,
  };
};
