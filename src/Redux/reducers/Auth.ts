import { SET_LOGIN, SET_LOGOUT } from "../types";

interface AuthState {
  isLoggedIn: boolean;
  userInfo: {
    name: string; 
    email: string;
  } | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  userInfo: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.payload,
      };
    case SET_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
