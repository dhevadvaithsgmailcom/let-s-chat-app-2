// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBFS3hRBpPQoeFWmvtEft0EE74ZWm6j-Ug",
    authDomain: "let-schat-bab95.firebaseapp.com",
    projectId: "let-schat-bab95",
    storageBucket: "let-schat-bab95.appspot.com",
    messagingSenderId: "536498692614",
    appId: "1:536498692614:web:a467a72059aba572379987",
    measurementId: "G-VYG86QYJ0X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
