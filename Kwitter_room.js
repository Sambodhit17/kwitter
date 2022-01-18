
// // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzg4oOIJfOgCq_djYRIsdh3xfgsSLzMYw",
    authDomain: "class-test-cba70.firebaseapp.com",
    databaseURL: "https://class-test-cba70-default-rtdb.firebaseio.com",
    projectId: "class-test-cba70",
    storageBucket: "class-test-cba70.appspot.com",
    messagingSenderId: "619147260117",
    appId: "1:619147260117:web:7cd8e158032833cd35325c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });


    localStorage.setItem("room_name", room_name);
    window.location = "Kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name -"+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' <#"+Room_names+"</div<hr>"
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Kwitter_page.html";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}