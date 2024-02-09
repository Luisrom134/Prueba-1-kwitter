const firebaseConfig = {
    apiKey: "AIzaSyB_l-nxFF0gLb6DS7Ij_qusz4EEyUoioMI",
    authDomain: "kwitter-4df8e.firebaseapp.com",
    databaseURL:"https://kwitter-4df8e-default-rtdb.firebaseio.com/",
    projectId: "kwitter-4df8e",
    storageBucket: "kwitter-4df8e.appspot.com",
    messagingSenderId: "440822500727",
    appId: "1:440822500727:web:686fab71c3dddaf389e572"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
//----PROXIMA CLASE----//
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
  //Inicia código 
        
  //Termina código
  } });  }); }
  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }
  