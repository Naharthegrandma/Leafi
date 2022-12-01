// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCMAJCfES9kO26zZqCe0LdZYTryGaUKD6g",
      authDomain: "leafi-5dd6f.firebaseapp.com",
      databaseURL: "https://leafi-5dd6f-default-rtdb.firebaseio.com",
      projectId: "leafi-5dd6f",
      storageBucket: "leafi-5dd6f.appspot.com",
      messagingSenderId: "1097516144312",
      appId: "1:1097516144312:web:3a1ab0fcb783dd56f3864d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, "+user_name+"!";
//ADD YOUR FIREBASE LINKS HERE
 function create_room(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code;
      row = "<div class='room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
console.log("Room Name - " + Room_names)
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}