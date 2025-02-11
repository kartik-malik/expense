import { firebase, googleAuthProvider } from "../firebase/firebase";
export const startLogIn = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};
export const startLogOut = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
export const login = uid => ({
  type: "LOGIN",
  uid
});
export const logout = () => ({
  type: "LOGOUT"
});
