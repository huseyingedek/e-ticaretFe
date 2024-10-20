export const loginUserRedux =  (data: any) => ({
  type: 'LOGIN_USER',
  payload: data,
});

export const logoutUserRedux = () => ({
  type: 'LOGOUT_USER',
});