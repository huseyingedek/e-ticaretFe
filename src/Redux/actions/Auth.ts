export const loginUserRedux = (userData: { token: string; refreshToken: string }) => ({
  type: 'LOGIN_USER',
  payload: userData,
});

export const logoutUserRedux = () => ({
  type: 'LOGOUT_USER',
});