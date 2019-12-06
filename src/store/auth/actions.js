import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './types';

export const authStart = (email, password) => {
  return {
    type: AUTH_START,
    email,
    password
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: AUTH_SUCCESS,
    token: token,
    userId: userId
  };
};

export const authFail = error => {
  return {
    type: AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: AUTH_LOGOUT
  };
};

// export const auth = (email, password) => {
//   return dispatch => {
//     dispatch(authStart());
//     axios
//       .post(tokenUrl, {
//         email,
//         password
//       })
//       .then(response => {
// const expirationDate = new Date(
//   new Date().getTime() + response.data.expiresIn * 1000
// );
// localStorage.setItem('token', response.data.authToken);
// localStorage.setItem('expirationDate', expirationDate);
// localStorage.setItem('userId', response.data.userId);
// dispatch(authSuccess(response.data.authToken, response.data.userId));
// dispatch(checkAuthTimeout(response.data.expiresIn));
// =====
//         const { token } = response.data.data;
//         localStorage.setItem('token', token);
//         axios
//           .get(loginUrl, {
//             headers: { Authorization: `bearer ${token}` }
//           })
//           .then(response => {
//             const user = response.data;
//             localStorage.setItem('userId', user.id);
//             dispatch(authSuccess(token, user.id));
//           })
//           .catch(error => {
//             dispatch(authFail(error.message));
//           });
//       })
//       .catch(error => {
//         dispatch(authFail(error.message));
//       });
//   };
// };

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};
