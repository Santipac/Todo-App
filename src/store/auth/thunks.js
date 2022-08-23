
import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from '../../firebase/providers';
import { clearTasksLogout } from '../todos/todosSlice';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuth = (email, password) => {
  return async dispatch => {
    dispatch(checkingCredentials());
  };
};
export const startGoogleSignIn = (email, password) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};
export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    const { uid, photoURL, ok, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, photoURL, displayName, email }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({
      email,
      password,
    });
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLogout = () =>{
  return async dispatch =>{
    await dispatch(clearTasksLogout())
    await logoutFirebase()
    dispatch(logout())
  }
}