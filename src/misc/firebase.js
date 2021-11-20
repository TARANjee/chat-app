import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
    
    apiKey: "AIzaSyCX51DxVXz_dUva0LxHC4gU1JiN8fhMU4U",

    authDomain: "chat-web-app-16678.firebaseapp.com",
  
    databaseURL: "https://chat-web-app-16678-default-rtdb.asia-southeast1.firebasedatabase.app",
  
    projectId: "chat-web-app-16678",
  
    storageBucket: "chat-web-app-16678.appspot.com",
  
    messagingSenderId: "987996748308",
  
    appId: "1:987996748308:web:0500c341533640f13bc501"
  
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
