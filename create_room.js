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

user_name = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome " + user_name;
function addRoom(){
      room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
               purpose:"adding room name"
         });
         localStorage.setItem("room_name", room_name);
         window.location = "chat_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
   childKey = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name - " + Room_names);
   row = "<div class = 'room_name' id = "+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
});});}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}