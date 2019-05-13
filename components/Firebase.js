import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCj376WDKhFfXiCQ1XZw_lm- oArYhP0ZLQ",
  authDomain: "react-native-for-designers.firebaseapp.com",
  databaseURL: "https://react-native-for-designers.firebaseio.com",
  storageBucket: "react-native-for-designers.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
