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

firebase.initializeApp(firebaseConfig);

export const loginWithGitHub = () => {
  var provider = new firebase.auth.GithubAuthProvider();
  provider.addScope("repo");
  return firebase.auth().signInWithPopup(provider);
};
