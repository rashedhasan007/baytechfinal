// Initialize Firebase
var config ={
    apiKey: "AIzaSyBKAuN6V2KxAp3tHyy6UaxS2qkTD4EL4w4",
    authDomain: "baytech-f8a48.firebaseapp.com",
    databaseURL: "https://baytech-f8a48-default-rtdb.firebaseio.com",
    projectId: "baytech-f8a48",
    storageBucket: "baytech-f8a48.appspot.com",
    messagingSenderId: "841631661105",
    appId: "1:841631661105:web:fe206b04335e20fbfae910",
    measurementId: "G-J323PT53HV"
  };
firebase.initializeApp(config);

var database = firebase.database();

database.ref('/').once('value', function(snapshot){
  console.log(snapshot.val());
});

var rootRef = database.ref('/');

rootRef.once('value', function(snapshot){
  console.log(snapshot.val());
});
firebase.database().ref('slogan').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('slogan').innerHTML = snap.val().value;
  });
firebase.database().ref('banner').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('banner').innerHTML = snap.val().value;
  });

firebase.database().ref('project').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('project').innerHTML = snap.val().value;
  });
firebase.database().ref('aboutus').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('aboutus').innerHTML = snap.val().value;
  });
firebase.database().ref('address').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('address').innerHTML = snap.val().value;
  });
  firebase.database().ref('phone').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('phone').innerHTML = snap.val().value;
  });

firebase.database().ref('email').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('email').innerHTML = snap.val().value;
  });




setDataRef = database.ref("/setData");
setDataRef.on('child_changed', function(snapshot) {
  console.log("Below is the data from child_changed");
  console.log(snapshot.val());
  document.getElementById("slogan").innerHTML =snapshot.val();
});

pushDataRef = database.ref("/pushData");
pushDataRef.on("child_added", function(snapshot){
  console.log("Below is the data from child_added");
  console.log(snapshot.val());
});

database.ref('/pushData').once('value', function(snapshot){
  snapshot.forEach(function(data){
    console.log("Below are the child keys of the values in 'pushData'")
    console.log(data.key);

  });
  console.log(Object.keys(snapshot.val()));
});