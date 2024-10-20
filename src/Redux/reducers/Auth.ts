interface AuthState {
  token: string | null;
  refreshToken: string | null;
}

interface AuthAction {
  type: string;
  payload?: { token: string; refreshToken: string; userId?: string };
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        token: action.payload?.token || null,
        refreshToken: action.payload?.refreshToken || null,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        token: null,
        refreshToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;