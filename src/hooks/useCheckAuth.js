import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingTasks } from "../store/todos";


export const useCheckAuth = () =>{
    const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    //  fn de firebase que actualiza el estado cada vez que cambia (Observable)
    onAuthStateChanged(FirebaseAuth, async user => {
      if (!user) return dispatch(logout());
      const { uid, photoURL, displayName, email } = user;
      dispatch(login({ uid, photoURL, displayName, email }));
      dispatch(startLoadingTasks())
    });
  }, []);
  return {status}
}