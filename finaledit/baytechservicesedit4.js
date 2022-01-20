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

function pushData(){
  var data = document.getElementById("dataValue").value;
  var dataRef = database.ref('/pushData').push();
  dataRef.set({
    value: data
  });
}

function setData(){
  var header = document.getElementById("header").value;
  var logheader = document.getElementById("longheader").value;
  var paragraph = document.getElementById("paragraph").value;
  var link = document.getElementById("link").value;
  var photo = document.getElementById("p1").value;
  var dataRef1 = database.ref('/service-header4');
  var dataRef2 = database.ref('/service-longheader4');
  var dataRef3 = database.ref('/service-paragraph4');
  var dataRef4 = database.ref('/service-link4');

  dataRef1.set({
    value:header
  });
  dataRef2.set({
    value:logheader
  });
  dataRef3.set({
    value:paragraph
  });
  dataRef4.set({
    value:link
  });
}

setDataRef = database.ref("/setData");
setDataRef.on('child_changed', function(snapshot) {
  console.log("Below is the data from child_changed");
  console.log(snapshot.val());

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