const firebaseConfig = {
    apiKey: "AIzaSyCbymYbRNFjycIeLBW6lc36zCls0p1Vlh8",
    authDomain: "live-chat-84c57.firebaseapp.com",
    databaseURL: "https://live-chat-84c57-default-rtdb.firebaseio.com",
    projectId: "live-chat-84c57",
    storageBucket: "live-chat-84c57.appspot.com",
    messagingSenderId: "965093311685",
    appId: "1:965093311685:web:8047c32c80f0b4b07c1cac"
  };
//Initialize firebase
firebase.initializeApp(firebaseConfig);  

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "create_room.html";
}