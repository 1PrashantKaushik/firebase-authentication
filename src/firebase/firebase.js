import firebase from "firebase/app";
import "firebase/auth";

const prodConfig = {
  apiKey: "AIzaSyCZXDAMWXUB0dkt2hZSvs10XPKazl5c4Pk",
  authDomain: "signup-9a820.firebaseapp.com",
  databaseURL: "https://signup-9a820.firebaseio.com",
  projectId: "signup-9a820",
  storageBucket: "signup-9a820.appspot.com",
  messagingSenderId: "484754271244"
};

const devConfig = {
  apiKey: "AIzaSyCZXDAMWXUB0dkt2hZSvs10XPKazl5c4Pk",
  authDomain: "signup-9a820.firebaseapp.com",
  databaseURL: "https://signup-9a820.firebaseio.com",
  projectId: "signup-9a820",
  storageBucket: "signup-9a820.appspot.com",
  messagingSenderId: "484754271244"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
