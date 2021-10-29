import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU3GIJ1X9BrmUC15zaMBxY3TFky0RSFvM",
  authDomain: "devter-4fffe.firebaseapp.com",
  projectId: "devter-4fffe",
  storageBucket: "devter-4fffe.appspot.com",
  messagingSenderId: "253857734366",
  appId: "1:253857734366:web:68f2e6a8cbd7ac57c1ec4f",
  measurementId: "G-N015YLFM4H",
};

//se valida que no se tenga una instancia ya creada para initialize firebase
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

//Informacion del usuario
export const mapUserFromFirebaseAuth = (user) => {
  console.log(user);
  const { displayName, email, photoURL } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

//Function for to know if the user change state
export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuth(user);
    onChange(normalizedUser);
  });
};

//Function to login with Github
export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
  // .then(mapUserFromFirebaseAuth); este codigo es lo mismo que el de abajo
  // .then((user) => {
  //   return mapUserFromFirebaseAuth(user);
  // });
};
