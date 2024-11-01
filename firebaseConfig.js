// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const firebaseConfig = {
  apiKey: "AIzaSyBlLAfzcPseCnS1V23OcxqP8jhvvrsYuiI",
  authDomain: "bmw-store-4dc29.firebaseapp.com",
  projectId: "bmw-store-4dc29",
  storageBucket: "bmw-store-4dc29.appspot.com",
  messagingSenderId: "317358180359",
  appId: "1:317358180359:web:e591bab3362626d67942a2",
  measurementId: "G-XQC014G2F0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), // Use AsyncStorage for persistence
});

export { auth };
