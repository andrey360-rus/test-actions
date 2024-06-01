import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyD68LpWfRIPq_gCP0KgANlu6e9SOsF5V5M",
   authDomain: "filmixpwa.firebaseapp.com",
   projectId: "filmixpwa",
   storageBucket: "filmixpwa.appspot.com",
   messagingSenderId: "523179744137",
   appId: "1:523179744137:web:cefe82850ec2a5548a5f58",
   measurementId: "G-CH7ZE487T2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Retrieve firebase messaging
const messaging = getMessaging(firebaseApp);

messaging.onBackgroundMessage(function (payload) {
   console.log("Received background message ", payload);
   // Customize notification here
   const notificationTitle = payload.notification.title;
   const notificationOptions = {
      body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
});
